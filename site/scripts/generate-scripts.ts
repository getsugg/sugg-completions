import {
  readdirSync,
  writeFileSync,
  symlinkSync,
  existsSync,
  mkdirSync,
  statSync,
  readFileSync,
} from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { platform } from "os";
import { createHash } from "crypto";
import { createHighlighter } from "shiki";
import { createTransformerFactory, rendererRich } from "@shikijs/twoslash";
import { createTwoslasher } from "twoslash";
import { scanSource } from "../src/lib/scan.js";

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
  highlightedUrl: string;
  analysis?: string;
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
  } catch {
    return null;
  }
}

function allOutputsExist(entries: ScriptEntry[]): boolean {
  if (!existsSync(outFile)) return false;
  for (const entry of entries) {
    if (!existsSync(join(highlightedDir, `${entry.stem}.html`))) return false;
  }
  return true;
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
      highlightedUrl: `./highlighted/${name.replace(/\.ts$/, "")}.html`,
    });
  } else if (stat.isDirectory() && existsSync(join(full, "index.ts"))) {
    entries.push({
      stem: name,
      sourceUrl: `./completions/${name}/index.ts`,
      highlightedUrl: `./highlighted/${name}.html`,
    });
  }
}

const inputFiles = entries.map((e) =>
  join(completionsDir, e.sourceUrl.replace("./completions/", "")),
);
inputFiles.push(
  join(completionsDir, ".sugg", "sugg.d.ts"),
  join(completionsDir, ".sugg", "i18n.d.ts"),
);
const hash = computeHash(inputFiles);

if (readCachedHash() === hash && allOutputsExist(entries)) {
  console.log("Up to date, skipping generation");
  process.exit(0);
}

console.log(`Generating highlighted HTML for ${entries.length} scripts...`);

const suggDts = readFileSync(join(completionsDir, ".sugg", "sugg.d.ts"), "utf-8");
const i18nDts = readFileSync(join(completionsDir, ".sugg", "i18n.d.ts"), "utf-8");

const highlighter = await createHighlighter({ langs: ["ts"], themes: ["dark-plus"] });
const twoslasher = createTwoslasher({
  compilerOptions: {
    strict: true,
    module: 99,
    target: 99,
    allowJs: true,
    skipDefaultLibCheck: true,
    moduleDetection: 3,
    lib: ["lib.es2022.d.ts"],
  },
  extraFiles: {
    "node_modules/sugg/index.d.ts": suggDts,
    "node_modules/virtual-i18n-bun/index.d.ts": i18nDts,
  },
});
const twoslashTransformerRich = createTransformerFactory(twoslasher, rendererRich())({});

for (const entry of entries) {
  const fullPath = join(completionsDir, entry.sourceUrl.replace("./completions/", ""));
  const source = readFileSync(fullPath, "utf-8");

  entry.analysis = JSON.stringify(scanSource(source));

  const htmlRich = highlighter.codeToHtml(source, {
    lang: "ts",
    theme: "dark-plus",
    transformers: [twoslashTransformerRich],
  });
  writeFileSync(join(highlightedDir, `${entry.stem}.html`), htmlRich, "utf-8");
}

const list = entries
  .map(
    (e) =>
      `  { stem: "${e.stem}", title: "${e.stem}", description: "${e.stem}", sourceUrl: "${e.sourceUrl}", highlightedUrl: "${e.highlightedUrl}", staticAnalysis: JSON.parse('${e.analysis}') },`,
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

console.log("Done!");
