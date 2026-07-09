import {
  readdirSync,
  writeFileSync,
  symlinkSync,
  existsSync,
  mkdirSync,
  lstatSync,
  statSync,
  readFileSync,
  copyFileSync,
  rmSync,
} from "fs";
import { join, dirname, relative, basename } from "path";
import { pathToFileURL } from "url";

import { platform } from "os";
import { createHash } from "crypto";
import { execSync } from "child_process";
import { createHighlighter } from "shiki";
import { createTwoslasher } from "twoslash";
import { parseSync } from "oxc-parser";
import { ResolverFactory } from "oxc-resolver";
import fg from "fast-glob";
import { scanSource } from "~/lib/scan";
import { suggTheme } from "~/lib/shiki-theme";
import type { LineAnnotation, ExtractResult } from "~/types";

const __dirname = import.meta.dirname!;

const wasmDir = join(__dirname, "..", "wasm");
const wasmJsPath = join(wasmDir, "sugg_wasm.js");
const wasmBgPath = join(wasmDir, "sugg_wasm_bg.wasm");

const completionsDir = join(__dirname, "..", "..", "completions");

const srcGeneratedDir = join(__dirname, "..", "src", "generated");
const scriptsJsonFile = join(srcGeneratedDir, "scripts.json");
const cacheFile = join(srcGeneratedDir, ".generate-cache.json");

const publicGeneratedDir = join(__dirname, "..", "public", "generated");
const highlightedDir = join(publicGeneratedDir, "highlighted");
const analysisDir = join(publicGeneratedDir, "analysis");

const linkTarget = join(__dirname, "..", "..", "completions");
const linkPath = join(__dirname, "..", "public", "completions");

let shouldCreateSymlink = false;
try {
  const stat = lstatSync(linkPath);
  if (!stat.isSymbolicLink()) {
    rmSync(linkPath, { recursive: true, force: true });
    shouldCreateSymlink = true;
  }
} catch (e: any) {
  if (e.code === "ENOENT") {
    shouldCreateSymlink = true;
  } else {
    throw e;
  }
}

if (shouldCreateSymlink) {
  mkdirSync(dirname(linkPath), { recursive: true });
  if (platform() === "win32") {
    symlinkSync(linkTarget, linkPath, "junction");
  } else {
    symlinkSync(linkTarget, linkPath, "dir");
  }
}
mkdirSync(srcGeneratedDir, { recursive: true });
mkdirSync(publicGeneratedDir, { recursive: true });
mkdirSync(highlightedDir, { recursive: true });
mkdirSync(analysisDir, { recursive: true });

interface SharedModule {
  id: string;
  filename: string;
  absPath: string;
  importPath: string;
}

const TS_EXTENSIONS = [".ts", ".mts", ".cts"];
const JS_EXTENSIONS = [".js", ".mjs", ".cjs"];
const ALL_EXTENSIONS = [...TS_EXTENSIONS, ...JS_EXTENSIONS];

const resolver = new ResolverFactory({
  extensions: [...ALL_EXTENSIONS, ".json", ".node"],
  mainFiles: ["index"],
});

function langFromFile(filename: string): "ts" | "js" {
  const ext = filename.match(/\.(m|c)?(ts|js)$/)?.[0] ?? ".ts";
  return ext.includes("ts") ? "ts" : "js";
}

interface ScriptEntry {
  stem: string;
  sourceUrl: string;
  linesUrl: string;
  analysis?: LineAnnotation[];
  desc?: string;
  dynamicAnalysis?: {
    extractResult: ExtractResult;
  };
  sharedModules: SharedModule[];
}

function getDescription(stem: string, cacheDir: string): string {
  try {
    const out = execSync(`sugg complete nushell --cache-dir "${cacheDir}" -- "${stem}"`, {
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

function smHighlightId(sm: SharedModule): string {
  return relative(completionsDir, sm.absPath)
    .replace(/\\/g, "/")
    .replace(/\.(m|c)?(ts|js)$/, "");
}

function allOutputsExist(entries: ScriptEntry[]): boolean {
  if (!existsSync(scriptsJsonFile)) return false;
  for (const entry of entries) {
    if (!existsSync(join(highlightedDir, `${entry.stem}.json`))) return false;
    if (!existsSync(join(analysisDir, `${entry.stem}.json`))) return false;
    for (const sm of entry.sharedModules) {
      if (!existsSync(join(highlightedDir, `${smHighlightId(sm)}.json`))) return false;
    }
  }
  return true;
}

// Regenerate sugg.d.ts in a temp dir, copy the single file we need
const suggDtsBaseDir = join(__dirname, "..", "tmp", "sugg-dts");
const initTmpDir = join(suggDtsBaseDir, "completions");
try {
  mkdirSync(initTmpDir, { recursive: true });
  execSync(`sugg dev init --completions-dir "${initTmpDir}"`, {
    stdio: "inherit",
    timeout: 15000,
  });
  const destSuggDir = join(completionsDir, ".sugg");
  mkdirSync(destSuggDir, { recursive: true });
  copyFileSync(join(initTmpDir, ".sugg", "sugg.d.ts"), join(destSuggDir, "sugg.d.ts"));
} catch (e) {
  console.error("[generate] sugg dev init failed, sugg.d.ts may be stale", e);
} finally {
  rmSync(suggDtsBaseDir, { recursive: true, force: true });
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
  const ext = ALL_EXTENSIONS.find((e) => name.endsWith(e));
  if (stat.isFile() && ext && !name.startsWith("_")) {
    const stem = name.slice(0, -ext.length);
    entries.push({
      stem,
      sourceUrl: `./completions/${name}`,
      linesUrl: `./generated/highlighted/${stem}.json`,
      sharedModules: [],
    });
  } else if (stat.isDirectory()) {
    const indexExt = ALL_EXTENSIONS.find((e) => existsSync(join(full, `index${e}`)));
    if (indexExt) {
      entries.push({
        stem: name,
        sourceUrl: `./completions/${name}/index${indexExt}`,
        linesUrl: `./generated/highlighted/${name}.json`,
        sharedModules: [],
      });
    }
  }
}

const inputFiles = await fg("**/*", {
  cwd: completionsDir,
  ignore: ["node_modules", ".git"],
  absolute: true,
  onlyFiles: true,
});
const suggVersionFile = join(__dirname, "..", "..", ".sugg-version");
if (existsSync(suggVersionFile)) inputFiles.push(suggVersionFile);
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

// Phase 1: Extract relative imports from a single file using oxc-parser
function findImports(source: string, scriptDir: string, filename: string): SharedModule[] {
  const result: SharedModule[] = [];
  const lang = langFromFile(filename);
  let ast: ReturnType<typeof parseSync>;
  try {
    ast = parseSync(filename, source, { sourceType: "module", lang });
  } catch {
    return result;
  }
  const fromFile = join(scriptDir, filename);
  for (const node of ast.program.body) {
    if (node.type !== "ImportDeclaration") continue;
    const importPath = node.source.value;
    if (!importPath.startsWith(".")) continue;
    const resolved = resolver.resolveFileSync(fromFile, importPath);
    if (resolved.error || !resolved.path) continue;
    const absPath = resolved.path;
    if (!existsSync(absPath)) continue;
    const baseName = importPath.split("/").pop()!;
    const realExt = ALL_EXTENSIONS.find((e) => absPath.endsWith(e)) ?? ".ts";
    result.push({
      id: baseName.replace(/\.(m|c)?(ts|js)$/, ""),
      filename: baseName.replace(/\.(m|c)?(ts|js)$/, "") + realExt,
      absPath,
      importPath,
    });
  }
  return result;
}

// Extract virtual:i18n/* imports from a single file using oxc-parser
function findI18nImports(source: string, filename: string): string[] {
  const lang = langFromFile(filename);
  let ast: ReturnType<typeof parseSync>;
  try {
    ast = parseSync(filename, source, { sourceType: "module", lang });
  } catch {
    return [];
  }
  const result: string[] = [];
  for (const node of ast.program.body) {
    if (node.type !== "ImportDeclaration") continue;
    const importPath = node.source.value;
    const match = importPath.match(/^virtual:i18n\/(.+)$/);
    if (match) result.push(match[1]);
  }
  return result;
}

// Phase 2: BFS resolve all transitive deps for each entry
const allFiles = new Map<string, string>(); // relPath → source (for twoslasher extraFiles)
for (const entry of entries) {
  const fullPath = join(completionsDir, entry.sourceUrl.replace("./completions/", ""));
  const seen = new Set<string>();
  const queue: [string, string, string][] = [
    [readFileSync(fullPath, "utf-8"), dirname(fullPath), basename(fullPath)],
  ];

  while (queue.length > 0) {
    const [source, scriptDir, filename] = queue.shift()!;
    for (const sm of findImports(source, scriptDir, filename)) {
      if (seen.has(sm.absPath)) continue;
      seen.add(sm.absPath);
      entry.sharedModules.push(sm);
      const relPath = relative(completionsDir, sm.absPath).replace(/\\/g, "/");
      const content = readFileSync(sm.absPath, "utf-8");
      if (!allFiles.has(relPath)) allFiles.set(relPath, content);
      queue.push([content, dirname(sm.absPath), basename(sm.absPath)]);
    }
  }
}

const suggDts = readFileSync(join(completionsDir, ".sugg", "sugg.d.ts"), "utf-8");
const i18nDts = readFileSync(join(completionsDir, ".sugg", "i18n.d.ts"), "utf-8");

// Load WASM for build-time dynamic analysis
console.log("[generate] Loading WASM for dynamic analysis...");
const wasmModule = await WebAssembly.compile(readFileSync(wasmBgPath));
const wasmExports = await import(pathToFileURL(wasmJsPath).href);
await wasmExports.default({ module: wasmModule });
const extract = wasmExports.extract;
console.log("[generate] WASM loaded successfully");

const highlighter = await createHighlighter({ langs: ["ts", "js"], themes: [suggTheme] });
const extraFiles: Record<string, string> = {
  "node_modules/@types/sugg/index.d.ts": suggDts,
  "node_modules/@types/sugg-i18n/index.d.ts": i18nDts,
};
for (const [relPath, content] of allFiles) {
  extraFiles[`completions/${relPath}`] = content;
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

interface SharedFile {
  virtualPath: string;
  source: string;
}

function generateHighlighted(
  source: string,
  stem: string,
  lang: "ts" | "js",
  mainVirtualPath?: string,
  sharedFiles?: SharedFile[],
): LineData[] {
  // Build twoslash code with all files for proper relative import resolution
  let codeForTwoslash = "";
  let mainFileOffset = 0;
  if (mainVirtualPath && sharedFiles?.length) {
    // Add shared modules first so relative imports resolve
    for (const sf of sharedFiles) {
      codeForTwoslash += `// @filename: ${sf.virtualPath}\n${sf.source}\n`;
    }
    mainFileOffset = codeForTwoslash.split("\n").length;
    codeForTwoslash += `// @filename: ${mainVirtualPath}\n${source}`;
  } else if (mainVirtualPath) {
    codeForTwoslash = `// @filename: ${mainVirtualPath}\n${source}`;
    mainFileOffset = 1;
  } else {
    codeForTwoslash = source;
  }
  const twResult = twoslasher(codeForTwoslash, lang);
  console.log(
    `[generate] ${stem}: ${twResult.hovers.length} hovers, ${twResult.errors.length} errors`,
  );

  // Token generation uses original source (no @filename comment)
  const tokenLines = highlighter.codeToTokensBase(source, { lang, theme: suggTheme });

  // Filter hovers to only those belonging to the main file (by line range)
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
  const sourceLineCount = source.split("\n").length;
  for (const h of twResult.hovers) {
    // Skip hovers outside the main file's line range
    if (h.line < mainFileOffset || h.line >= mainFileOffset + sourceLineCount) continue;
    const localLine = h.line - mainFileOffset;
    const list = hovers.get(localLine) ?? [];
    list.push({
      character: h.character,
      length: h.length,
      text: h.text,
      docs: cleanDocs(h.docs),
      tags: h.tags as [string, string | undefined][] | undefined,
    });
    hovers.set(localLine, list);
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

  entry.analysis = scanSource(source);
  entry.desc = getDescription(entry.stem, suggCacheDir);

  // Run dynamic analysis at build time
  const extractFilename = entry.sourceUrl.replace("./completions/", "");
  try {
    const extractResult = extract(source, extractFilename);
    entry.dynamicAnalysis = { extractResult };
    console.log(`[generate] ${entry.stem}: ${extractResult.func_ids.length} dynamic funcs`);
  } catch (e) {
    console.error(`[generate] Dynamic analysis failed for "${entry.stem}"`, e);
    entry.dynamicAnalysis = {
      extractResult: { modified: source, dynamic: "", func_ids: [] },
    };
  }

  // Pre-generate HTML for static and dynamic panels
  const fileLang = langFromFile(entry.sourceUrl.split("/").pop()!);
  const staticHtml = entry.dynamicAnalysis.extractResult.modified
    ? highlighter.codeToHtml(entry.dynamicAnalysis.extractResult.modified, {
        lang: fileLang,
        theme: suggTheme,
      })
    : "";
  const dynamicHtml = entry.dynamicAnalysis.extractResult.dynamic
    ? highlighter.codeToHtml(entry.dynamicAnalysis.extractResult.dynamic, {
        lang: fileLang,
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
  const sharedFiles: SharedFile[] = entry.sharedModules.map((sm) => {
    const relPath = relative(completionsDir, sm.absPath).replace(/\\/g, "/");
    return { virtualPath: `completions/${relPath}`, source: allFiles.get(relPath) ?? "" };
  });
  const mainLang = langFromFile(entry.sourceUrl.split("/").pop()!);
  const mainLines = generateHighlighted(
    source,
    entry.stem,
    mainLang,
    sharedFiles.length ? entry.sourceUrl.replace("./", "") : undefined,
    sharedFiles.length ? sharedFiles : undefined,
  );
  writeFileSync(join(highlightedDir, `${entry.stem}.json`), JSON.stringify(mainLines), "utf-8");

  // Generate highlighted data for shared modules
  for (const sm of entry.sharedModules) {
    const sharedSource = readFileSync(sm.absPath, "utf-8");
    const smDir = dirname(sm.absPath);
    const smImports = findImports(sharedSource, smDir, sm.id);
    const smSharedFiles: SharedFile[] = smImports.map((td) => {
      const relPath = relative(completionsDir, td.absPath).replace(/\\/g, "/");
      return { virtualPath: `completions/${relPath}`, source: allFiles.get(relPath) ?? "" };
    });
    const smRelPath = relative(completionsDir, sm.absPath).replace(/\\/g, "/");
    const smVirtualPath = `completions/${smRelPath}`;
    const highlightId = smHighlightId(sm);
    const smLang = langFromFile(sm.filename);
    const sharedLines = generateHighlighted(
      sharedSource,
      highlightId,
      smLang,
      smSharedFiles.length ? smVirtualPath : undefined,
      smSharedFiles.length ? smSharedFiles : undefined,
    );
    const smJsonPath = join(highlightedDir, `${highlightId}.json`);
    mkdirSync(dirname(smJsonPath), { recursive: true });
    writeFileSync(smJsonPath, JSON.stringify(sharedLines), "utf-8");
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
    ...e.sharedModules.map((sm) => {
      const highlightId = smHighlightId(sm);
      const smDir = relative(completionsDir, dirname(sm.absPath)).replace(/\\/g, "/");
      const entryRelDir = relative(
        completionsDir,
        dirname(join(completionsDir, e.sourceUrl.replace("./completions/", ""))),
      ).replace(/\\/g, "/");
      const relPath = relative(completionsDir, sm.absPath).replace(/\\/g, "/");
      const displayName = smDir === entryRelDir ? sm.filename : relPath;
      return {
        id: highlightId,
        filename: displayName,
        linesUrl: `./generated/highlighted/${highlightId}.json`,
        anns: scanSource(readFileSync(sm.absPath, "utf-8")),
      };
    }),
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

// Write registry.json for `sugg install` command
const registry = {
  scripts: entries.map((e) => {
    // Detect i18n modules by scanning imports in all source files
    const i18nModuleSet = new Set<string>();
    const mainPath = join(completionsDir, e.sourceUrl.replace("./completions/", ""));
    const mainFilename = basename(mainPath);
    for (const name of findI18nImports(readFileSync(mainPath, "utf-8"), mainFilename)) {
      i18nModuleSet.add(name);
    }
    for (const sm of e.sharedModules) {
      for (const name of findI18nImports(readFileSync(sm.absPath, "utf-8"), basename(sm.absPath))) {
        i18nModuleSet.add(name);
      }
    }
    const i18nObj: Record<string, string[]> = {};
    for (const mod of i18nModuleSet) {
      const i18nDir = join(completionsDir, mod, "i18n");
      if (existsSync(i18nDir)) {
        const langs = readdirSync(i18nDir)
          .filter((f) => f.endsWith(".json"))
          .map((f) => f.replace(/\.json$/, ""));
        if (langs.length > 0) i18nObj[mod] = langs;
      }
    }
    // Detect shared module dependencies (relative to completions/)
    const deps = e.sharedModules.map((sm) => {
      return relative(completionsDir, sm.absPath).replace(/\\/g, "/");
    });

    return {
      name: e.stem,
      description: e.desc ?? e.stem,
      source: e.sourceUrl.replace("./completions/", ""),
      deps,
      i18n: i18nObj,
    };
  }),
};
const registryFile = join(publicGeneratedDir, "registry.json");
writeFileSync(registryFile, JSON.stringify(registry, null, 2), "utf-8");
console.log(`Generated registry.json with ${registry.scripts.length} scripts`);

writeFileSync(cacheFile, JSON.stringify({ hash }), "utf-8");

rmSync(suggCacheDir, { recursive: true, force: true });
console.log("Done!");
