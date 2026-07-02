import {
  readdirSync,
  writeFileSync,
  symlinkSync,
  existsSync,
  mkdirSync,
  statSync,
  readFileSync,
  copyFileSync,
  rmSync,
} from "fs";
import { join, dirname, resolve } from "path";

import { platform } from "os";
import { createHash } from "crypto";
import { execSync } from "child_process";
import { createHighlighter } from "shiki";
import { createTwoslasher } from "twoslash";
import { scanSource } from "~/lib/scan";
import { suggTheme } from "~/lib/shiki-theme";
import type { LineAnnotation, ExtractResult, ApiUsage } from "~/types";

const __dirname = import.meta.dirname!;

const wasmDir = join(__dirname, "..", "wasm");
const wasmJsPath = join(wasmDir, "sugg_wasm.js");
const wasmBgPath = join(wasmDir, "sugg_wasm_bg.wasm");

const completionsDir = join(__dirname, "..", "..", "completions");

const generatedDir = join(__dirname, "..", "src", "generated");
const scriptsJsonFile = join(generatedDir, "scripts.json");
const cacheFile = join(generatedDir, ".generate-cache.json");

const highlightedDir = join(__dirname, "..", "public", "highlighted");
const analysisDir = join(__dirname, "..", "public", "analysis");
const generatedSourceDir = join(__dirname, "..", "public", "generated");

const linkTarget = join(__dirname, "..", "..", "completions");
const linkPath = join(__dirname, "..", "public", "completions");

if (!existsSync(linkPath)) {
  mkdirSync(dirname(linkPath), { recursive: true });
  if (platform() === "win32") {
    symlinkSync(linkTarget, linkPath, "junction");
  } else {
    symlinkSync(linkTarget, linkPath, "dir");
  }
}
mkdirSync(generatedDir, { recursive: true });
mkdirSync(highlightedDir, { recursive: true });
mkdirSync(analysisDir, { recursive: true });
mkdirSync(generatedSourceDir, { recursive: true });

interface SharedModule {
  id: string;
  filename: string;
  absPath: string;
}

interface ScriptEntry {
  stem: string;
  sourceUrl: string;
  linesUrl: string;
  analysis?: LineAnnotation[];
  desc?: string;
  dynamicAnalysis?: {
    extractResult: ExtractResult;
    apis: ApiUsage[];
  };
  sharedModules: SharedModule[];
}

function getDescription(stem: string, cacheDir: string): string {
  try {
    const out = execSync(`sugg complete nushell --cache-dir "${cacheDir}" -- ${stem}`, {
      encoding: "utf-8",
      timeout: 10000,
    });
    const items = JSON.parse(out);
    return items[0]?.description ?? stem;
  } catch (e) {
    console.error(`[generate] sugg complete failed for "${stem}"`, e);
    return stem;
  }
}

function computeHash(filePaths: string[]): string {
  const h = createHash("sha256");
  for (const fp of filePaths.slice().sort()) {
    h.update(readFileSync(fp));
  }
  return h.digest("hex");
}

function readCachedHash(): string | null {
  try {
    return JSON.parse(readFileSync(cacheFile, "utf-8")).hash;
  } catch (e) {
    if ((e as NodeJS.ErrnoException).code === "ENOENT") return null;
    console.error("[generate] failed to read cache", e);
    return null;
  }
}

function allOutputsExist(entries: ScriptEntry[]): boolean {
  if (!existsSync(scriptsJsonFile)) return false;
  for (const entry of entries) {
    if (!existsSync(join(highlightedDir, `${entry.stem}.json`))) return false;
    if (!existsSync(join(analysisDir, `${entry.stem}.json`))) return false;
    for (const sm of entry.sharedModules) {
      if (!existsSync(join(highlightedDir, `${entry.stem}-${sm.id}.json`))) return false;
    }
  }
  return true;
}

// Regenerate sugg.d.ts in a temp dir, copy the single file we need
const initTmpDir = join(__dirname, "..", "tmp", "sugg-dts", "completions");
try {
  mkdirSync(initTmpDir, { recursive: true });
  execSync(`sugg dev init --completions-dir "${initTmpDir}"`, {
    stdio: "inherit",
    timeout: 15000,
  });
  copyFileSync(join(initTmpDir, ".sugg", "sugg.d.ts"), join(completionsDir, ".sugg", "sugg.d.ts"));
} catch (e) {
  console.error("[generate] sugg dev init failed, sugg.d.ts may be stale", e);
} finally {
  rmSync(join(initTmpDir, ".."), { recursive: true, force: true });
}

// Keep i18n.d.ts in sync with i18n JSON files
try {
  execSync(`sugg dev i18n --lang en --completions-dir "${completionsDir}"`, {
    stdio: "inherit",
    timeout: 15000,
  });
} catch (e) {
  console.error("[generate] sugg dev i18n failed, i18n.d.ts may be stale", e);
}

const entries: ScriptEntry[] = [];

for (const name of readdirSync(completionsDir).sort()) {
  if (name.startsWith(".") || name === "node_modules") continue;
  const full = join(completionsDir, name);
  const stat = statSync(full);
  if (stat.isFile() && name.endsWith(".ts") && !name.startsWith("_")) {
    entries.push({
      stem: name.replace(/\.ts$/, ""),
      sourceUrl: `./completions/${name}`,
      linesUrl: `./highlighted/${name.replace(/\.ts$/, "")}.json`,
      sharedModules: [],
    });
  } else if (stat.isDirectory() && existsSync(join(full, "index.ts"))) {
    entries.push({
      stem: name,
      sourceUrl: `./completions/${name}/index.ts`,
      linesUrl: `./highlighted/${name}.json`,
      sharedModules: [],
    });
  }
}

const inputFiles = entries.map((e) =>
  join(completionsDir, e.sourceUrl.replace("./completions/", "")),
);
inputFiles.push(
  join(completionsDir, ".sugg", "sugg.d.ts"),
  join(completionsDir, ".sugg", "i18n.d.ts"),
  join(__dirname, "..", "..", ".sugg-version"),
);
// Include shared modules in hash
for (const f of readdirSync(completionsDir).sort()) {
  if (f.startsWith("_") && f.endsWith(".ts")) {
    inputFiles.push(join(completionsDir, f));
  }
}
for (const stem of entries.map((e) => e.stem)) {
  const i18nDir = join(completionsDir, stem, "i18n");
  if (existsSync(i18nDir)) {
    for (const f of readdirSync(i18nDir).sort()) {
      inputFiles.push(join(i18nDir, f));
    }
  }
}
const hash = computeHash(inputFiles);

if (readCachedHash() === hash && allOutputsExist(entries)) {
  console.log("Up to date, skipping generation");
  process.exit(0);
}

console.log(`Generating for ${entries.length} scripts...`);

const suggCacheDir = join(__dirname, "..", "tmp", ".sugg-cache");
try {
  execSync(
    `sugg reload --lang en --cache-dir "${suggCacheDir}" --completions-dir "${completionsDir}"`,
    {
      stdio: "inherit",
      timeout: 30000,
    },
  );
} catch (e) {
  console.error("[generate] sugg reload failed, descriptions will fall back to stem names", e);
}

// Detect shared module imports in source
function findSharedModules(source: string, scriptDir: string): SharedModule[] {
  const shared: SharedModule[] = [];
  const importRe = /from\s*["'](\.\.\/_npm-utils(?:\.ts)?|\.\/_npm-utils(?:\.ts)?)["']/g;
  let m;
  while ((m = importRe.exec(source)) !== null) {
    const sharedPath = resolve(scriptDir, m[1].replace(/\.ts$/, "") + ".ts");
    if (existsSync(sharedPath)) {
      shared.push({
        id: "_npm-utils",
        filename: "_npm-utils.ts",
        absPath: sharedPath,
      });
    }
  }
  return shared;
}

// Pre-scan all entries to find shared modules for twoslasher
const allSharedModules = new Map<string, string>(); // virtual path -> source
for (const entry of entries) {
  const fullPath = join(completionsDir, entry.sourceUrl.replace("./completions/", ""));
  const source = readFileSync(fullPath, "utf-8");
  const scriptDir = dirname(fullPath);
  entry.sharedModules = findSharedModules(source, scriptDir);
  for (const sm of entry.sharedModules) {
    if (!allSharedModules.has(sm.filename)) {
      allSharedModules.set(sm.filename, readFileSync(sm.absPath, "utf-8"));
    }
  }
}

const suggDts = readFileSync(join(completionsDir, ".sugg", "sugg.d.ts"), "utf-8");
const i18nDts = readFileSync(join(completionsDir, ".sugg", "i18n.d.ts"), "utf-8");

// Load WASM for build-time dynamic analysis
console.log("[generate] Loading WASM for dynamic analysis...");
const wasmModule = await WebAssembly.compile(readFileSync(wasmBgPath));
const wasmExports = await import(wasmJsPath);
await wasmExports.default({ module: wasmModule });
const extract = wasmExports.extract;
const analyzeApis = wasmExports.analyze_apis;
console.log("[generate] WASM loaded successfully");

const highlighter = await createHighlighter({ langs: ["ts"], themes: [suggTheme] });
const extraFiles: Record<string, string> = {
  "node_modules/@types/sugg/index.d.ts": suggDts,
  "node_modules/@types/sugg-i18n/index.d.ts": i18nDts,
};
// Add shared modules so twoslasher can resolve imports
for (const [filename, content] of allSharedModules) {
  extraFiles[`completions/${filename}`] = content;
}
const twoslasher = createTwoslasher({
  compilerOptions: {
    strict: true,
    module: 99,
    target: 99,
    allowJs: true,
    skipDefaultLibCheck: true,
    moduleDetection: 3,
    lib: ["lib.es2022.d.ts"],
    types: [],
    typeRoots: ["node_modules/@types"],
  },
  extraFiles,
});

interface TokenSpan {
  content: string;
  color?: string;
  fontStyle?: number;
  hover?: {
    text: string;
    docs?: string;
    tags?: [string, string | undefined][];
    textTokens?: { content: string; color?: string; fontStyle?: number }[][];
  };
}

interface LineData {
  text: string;
  tokens: TokenSpan[];
}

function cleanDocs(docs: string | undefined): string | undefined {
  if (!docs) return docs;
  return docs
    .replace(/\{@linkcode\s+([^|}]+)(?:\|([^}]+))?\}/g, (_, _target, text) => text || _target)
    .replace(/\{@link\s+([^|}]+)(?:\|([^}]+))?\}/g, (_, _target, text) => text || _target)
    .replace(/\{@linkplain\s+([^|}]+)(?:\|([^}]+))?\}/g, (_, _target, text) => text || _target)
    .replace(/\{@inheritDoc\}/g, "");
}

function generateHighlighted(source: string, stem: string, virtualPath?: string): LineData[] {
  // twoslasher needs @filename to resolve relative imports
  const codeForTwoslash = virtualPath ? `// @filename: ${virtualPath}\n${source}` : source;
  const twResult = twoslasher(codeForTwoslash, "ts");
  console.log(
    `[generate] ${stem}: ${twResult.hovers.length} hovers, ${twResult.errors.length} errors`,
  );

  // Token generation uses original source (no @filename comment)
  const tokenLines = highlighter.codeToTokensBase(source, { lang: "ts", theme: suggTheme });

  const hovers: Map<
    number,
    {
      character: number;
      length: number;
      text: string;
      docs?: string;
      tags?: [string, string | undefined][];
    }[]
  > = new Map();
  for (const h of twResult.hovers) {
    const list = hovers.get(h.line) ?? [];
    list.push({
      character: h.character,
      length: h.length,
      text: h.text,
      docs: cleanDocs(h.docs),
      tags: h.tags as [string, string | undefined][] | undefined,
    });
    hovers.set(h.line, list);
  }

  const lines: LineData[] = [];
  for (let i = 0; i < tokenLines.length; i++) {
    const tokens = tokenLines[i];
    const lineHovers = hovers.get(i) ?? [];
    const text = tokens.map((t) => t.content).join("");
    const tokenSpans: TokenSpan[] = [];
    let currentColumn = 0;

    for (const t of tokens) {
      const colStart = currentColumn;
      currentColumn += t.content.length;
      const validHovers = lineHovers
        .filter((h) => h.character >= colStart && h.character < colStart + t.content.length)
        .sort((a, b) => a.character - b.character);
      if (!validHovers.length) {
        tokenSpans.push({ content: t.content, color: t.color, fontStyle: t.fontStyle });
        continue;
      }
      let tokenStr = t.content;
      let localCol = colStart;
      for (const matching of validHovers) {
        const hoverStart = matching.character - localCol;
        if (hoverStart < 0) continue;
        const before = tokenStr.slice(0, hoverStart);
        const hoverLen = Math.min(matching.length, tokenStr.length - hoverStart);
        const hovered = tokenStr.slice(hoverStart, hoverStart + hoverLen);
        if (before) tokenSpans.push({ content: before, color: t.color, fontStyle: t.fontStyle });
        tokenSpans.push({
          content: hovered,
          color: t.color,
          fontStyle: t.fontStyle,
          hover: {
            text: matching.text,
            docs: matching.docs,
            tags: matching.tags,
            textTokens: highlighter
              .codeToTokensBase(matching.text, {
                lang: "ts",
                theme: suggTheme,
                includeExplanation: false,
              })
              .map((l) =>
                l.map((tok) => ({
                  content: tok.content,
                  color: tok.color,
                  fontStyle: tok.fontStyle,
                })),
              ),
          },
        });
        tokenStr = tokenStr.slice(hoverStart + hoverLen);
        localCol += hoverStart + hoverLen;
      }
      if (tokenStr) tokenSpans.push({ content: tokenStr, color: t.color, fontStyle: t.fontStyle });
    }
    lines.push({ text, tokens: tokenSpans });
  }
  return lines;
}

for (const entry of entries) {
  const fullPath = join(completionsDir, entry.sourceUrl.replace("./completions/", ""));
  const source = readFileSync(fullPath, "utf-8");
  const scriptDir = dirname(fullPath);

  entry.analysis = scanSource(source);
  entry.desc = getDescription(entry.stem, suggCacheDir);

  // Find shared modules
  entry.sharedModules = findSharedModules(source, scriptDir);

  // Run dynamic analysis at build time
  try {
    const extractResult = extract(source, `${entry.stem}.ts`);
    const apis = extractResult.dynamic.trim() ? analyzeApis(extractResult.dynamic) : [];
    entry.dynamicAnalysis = { extractResult, apis };
    console.log(
      `[generate] ${entry.stem}: ${extractResult.func_ids.length} dynamic funcs, ${apis.length} API usages`,
    );
  } catch (e) {
    console.error(`[generate] Dynamic analysis failed for "${entry.stem}"`, e);
    entry.dynamicAnalysis = {
      extractResult: { modified: source, dynamic: "", func_ids: [] },
      apis: [],
    };
  }

  // Pre-generate HTML for static and dynamic panels
  const staticHtml = entry.dynamicAnalysis.extractResult.modified
    ? highlighter.codeToHtml(entry.dynamicAnalysis.extractResult.modified, {
        lang: "ts",
        theme: suggTheme,
      })
    : "";
  const dynamicHtml = entry.dynamicAnalysis.extractResult.dynamic
    ? highlighter.codeToHtml(entry.dynamicAnalysis.extractResult.dynamic, {
        lang: "ts",
        theme: suggTheme,
      })
    : "";

  // Write analysis JSON
  writeFileSync(
    join(analysisDir, `${entry.stem}.json`),
    JSON.stringify({
      staticAnalysis: entry.analysis,
      dynamicAnalysis: entry.dynamicAnalysis,
      staticHtml,
      dynamicHtml,
    }),
    "utf-8",
  );

  // Generate highlighted data for main file
  const mainLines = generateHighlighted(source, entry.stem, entry.sourceUrl.replace("./", ""));
  writeFileSync(join(highlightedDir, `${entry.stem}.json`), JSON.stringify(mainLines), "utf-8");

  // Generate highlighted data for shared modules
  for (const sm of entry.sharedModules) {
    const sharedSource = readFileSync(sm.absPath, "utf-8");
    const sharedLines = generateHighlighted(sharedSource, `${entry.stem}-${sm.id}`);
    writeFileSync(
      join(highlightedDir, `${entry.stem}-${sm.id}.json`),
      JSON.stringify(sharedLines),
      "utf-8",
    );
  }
}

// Write scripts.json with FileState data
const scriptsList = entries.map((e) => {
  const files = [
    {
      id: e.stem,
      filename: e.sourceUrl.split("/").pop()!,
      linesUrl: e.linesUrl,
      anns: e.analysis ?? [],
    },
    ...e.sharedModules.map((sm) => ({
      id: sm.id,
      filename: sm.filename,
      linesUrl: `./highlighted/${e.stem}-${sm.id}.json`,
      anns: scanSource(readFileSync(sm.absPath, "utf-8")),
    })),
  ];

  return {
    stem: e.stem,
    title: e.stem,
    description: e.desc ?? e.stem,
    sourceUrl: e.sourceUrl,
    linesUrl: e.linesUrl,
    unsafeCount: (e.analysis ?? []).filter((a) => a.type === "unsafe").length,
    files,
  };
});

writeFileSync(scriptsJsonFile, JSON.stringify(scriptsList, null, 2), "utf-8");

writeFileSync(cacheFile, JSON.stringify({ hash }), "utf-8");

rmSync(suggCacheDir, { recursive: true, force: true });
console.log("Done!");
