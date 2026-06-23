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
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { platform } from "os";
import { createHash } from "crypto";
import { execSync } from "child_process";
import { createHighlighter } from "shiki";
import { createTwoslasher } from "twoslash";
import { scanSource } from "../src/lib/scan.js";
import { suggTheme } from "../src/lib/shiki-theme.js";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const completionsDir = join(__dirname, "..", "..", "completions");
const outFile = join(__dirname, "..", "src", "scripts.ts");
const linkPath = join(__dirname, "..", "public", "completions");
const linkTarget = join(__dirname, "..", "..", "completions");
const highlightedDir = join(__dirname, "..", "public", "highlighted");
const cacheFile = join(__dirname, ".generate-cache.json");

if (!existsSync(linkPath)) {
  mkdirSync(dirname(linkPath), { recursive: true });
  if (platform() === "win32") {
    symlinkSync(linkTarget, linkPath, "junction");
  } else {
    symlinkSync(linkTarget, linkPath, "dir");
  }
}
mkdirSync(highlightedDir, { recursive: true });

interface ScriptEntry {
  stem: string;
  sourceUrl: string;
  linesUrl: string;
  analysis?: string;
  desc?: string;
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
    console.error("[generate] failed to read cache", e);
    return null;
  }
}

function allOutputsExist(entries: ScriptEntry[]): boolean {
  if (!existsSync(outFile)) return false;
  for (const entry of entries) {
    if (!existsSync(join(highlightedDir, `${entry.stem}.json`))) return false;
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
  if (stat.isFile() && name.endsWith(".ts")) {
    entries.push({
      stem: name.replace(/\.ts$/, ""),
      sourceUrl: `./completions/${name}`,
      linesUrl: `./highlighted/${name.replace(/\.ts$/, "")}.json`,
    });
  } else if (stat.isDirectory() && existsSync(join(full, "index.ts"))) {
    entries.push({
      stem: name,
      sourceUrl: `./completions/${name}/index.ts`,
      linesUrl: `./highlighted/${name}.json`,
    });
  }
}

const inputFiles = entries.map((e) =>
  join(completionsDir, e.sourceUrl.replace("./completions/", "")),
);
inputFiles.push(
  join(completionsDir, ".sugg", "sugg.d.ts"),
  join(completionsDir, ".sugg", "i18n.d.ts"),
  join(__dirname, ".sugg-version"),
);
// i18n JSON files affect description output via sugg reload
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

console.log(`Generating highlighted HTML for ${entries.length} scripts...`);

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

const suggDts = readFileSync(join(completionsDir, ".sugg", "sugg.d.ts"), "utf-8");
const i18nDts = readFileSync(join(completionsDir, ".sugg", "i18n.d.ts"), "utf-8");

const highlighter = await createHighlighter({ langs: ["ts"], themes: [suggTheme] });
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
  extraFiles: {
    "node_modules/@types/sugg/index.d.ts": suggDts,
    "node_modules/@types/sugg-i18n/index.d.ts": i18nDts,
  },
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

for (const entry of entries) {
  const fullPath = join(completionsDir, entry.sourceUrl.replace("./completions/", ""));
  const source = readFileSync(fullPath, "utf-8");

  entry.analysis = JSON.stringify(scanSource(source));
  entry.desc = getDescription(entry.stem, suggCacheDir);

  // Get syntax tokens
  const tokenLines = highlighter.codeToTokensBase(source, {
    lang: "ts",
    theme: suggTheme,
  });

  function cleanDocs(docs: string | undefined): string | undefined {
    if (!docs) return docs;
    return docs
      .replace(/\{@linkcode\s+([^|}]+)(?:\|([^}]+))?\}/g, (_, _target, text) => text || _target)
      .replace(/\{@link\s+([^|}]+)(?:\|([^}]+))?\}/g, (_, _target, text) => text || _target)
      .replace(/\{@linkplain\s+([^|}]+)(?:\|([^}]+))?\}/g, (_, _target, text) => text || _target)
      .replace(/\{@inheritDoc\}/g, "");
  }

  // Get hover data from twoslasher
  const twResult = twoslasher(source, "ts");
  console.log(
    `[generate] ${entry.stem}: ${twResult.hovers.length} hovers, ${twResult.errors.length} errors`,
  );
  for (const e of twResult.errors) {
    console.log(`  Error[${e.line}]: ${e.text}`);
  }
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

  // Build LineData — hover-aware token splitting
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

        if (before) {
          tokenSpans.push({ content: before, color: t.color, fontStyle: t.fontStyle });
        }
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

      if (tokenStr) {
        tokenSpans.push({ content: tokenStr, color: t.color, fontStyle: t.fontStyle });
      }
    }

    lines.push({ text, tokens: tokenSpans });
  }

  writeFileSync(join(highlightedDir, `${entry.stem}.json`), JSON.stringify(lines), "utf-8");
}

const list = entries
  .map(
    (e) =>
      `  { stem: "${e.stem}", title: "${e.stem}", description: ${JSON.stringify(e.desc ?? e.stem)}, sourceUrl: "${e.sourceUrl}", linesUrl: "${e.linesUrl}", staticAnalysis: JSON.parse('${e.analysis}') },`,
  )
  .join("\n");

writeFileSync(
  outFile,
  `/// <reference types="vite/client" />

import type { ScriptInfo } from "./types";

const scripts: ScriptInfo[] = [
${list}
];

export default scripts;
`,
);

writeFileSync(cacheFile, JSON.stringify({ hash }), "utf-8");

rmSync(suggCacheDir, { recursive: true, force: true });
console.log("Done!");
