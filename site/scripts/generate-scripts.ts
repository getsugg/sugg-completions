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
import { createHighlighter } from "shiki";
import { createTransformerFactory, rendererRich, rendererClassic } from "@shikijs/twoslash";
import { createTwoslasher } from "twoslash";
import { scanSource } from "../src/scan.js";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const completionsDir = join(__dirname, "..", "..", "completions");
const outFile = join(__dirname, "..", "src", "scripts.ts");
const linkPath = join(__dirname, "..", "public", "completions");
const linkTarget = join(__dirname, "..", "..", "completions");
const highlightedDir = join(__dirname, "..", "public", "highlighted");

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
  path: string;
  analysis?: string;
}

const entries: ScriptEntry[] = [];

for (const name of readdirSync(completionsDir).sort()) {
  if (name.startsWith(".") || name === "node_modules") continue;
  const full = join(completionsDir, name);
  const stat = statSync(full);
  if (stat.isFile() && name.endsWith(".ts")) {
    entries.push({ stem: name.replace(/\.ts$/, ""), path: `./completions/${name}` });
  } else if (stat.isDirectory() && existsSync(join(full, "index.ts"))) {
    entries.push({ stem: name, path: `./completions/${name}/index.ts` });
  }
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
    skipLibCheck: true,
    moduleDetection: 3,
    lib: ["lib.es2022.d.ts"],
  },
  extraFiles: {
    "node_modules/sugg/index.d.ts": suggDts,
    "node_modules/virtual-i18n-bun/index.d.ts": i18nDts,
  },
});
const twoslashTransformerRich = createTransformerFactory(twoslasher, rendererRich())({});
const twoslashTransformerClassic = createTransformerFactory(twoslasher, rendererClassic())({});

for (const entry of entries) {
  const fullPath = join(completionsDir, entry.path.replace("./completions/", ""));
  const source = readFileSync(fullPath, "utf-8");

  entry.analysis = JSON.stringify(scanSource(source));

  const htmlRich = highlighter.codeToHtml(source, {
    lang: "ts",
    theme: "dark-plus",
    transformers: [twoslashTransformerRich],
  });
  writeFileSync(join(highlightedDir, `${entry.stem}.html`), htmlRich, "utf-8");

  const htmlClassic = highlighter.codeToHtml(source, {
    lang: "ts",
    theme: "dark-plus",
    transformers: [twoslashTransformerClassic],
  });
  writeFileSync(join(highlightedDir, `${entry.stem}.classic.html`), htmlClassic, "utf-8");
}

const list = entries
  .map(
    (e) =>
      `  { stem: "${e.stem}", title: "${e.stem}", description: "${e.stem}", source: () => fetchSource("${e.stem}"), highlighted: () => fetchHighlighted("${e.stem}"), highlightedClassic: () => fetchHighlightedClassic("${e.stem}"), staticAnalysis: JSON.parse('${e.analysis}') },`,
  )
  .join("\n");

const pathMap = entries.map((e) => `  "${e.stem}": "${e.path}",`).join("\n");
const hlPathMap = entries.map((e) => `  "${e.stem}": "./highlighted/${e.stem}.html",`).join("\n");
const hlClassicPathMap = entries
  .map((e) => `  "${e.stem}": "./highlighted/${e.stem}.classic.html",`)
  .join("\n");

writeFileSync(
  outFile,
  `/// <reference types="vite/client" />

export interface ScriptInfo {
  stem: string
  title: string
  description: string
  source: () => Promise<string>
  highlighted: () => Promise<string>
  highlightedClassic: () => Promise<string>
  staticAnalysis: { line: number; type: "danger" | "dynamic" | "safe"; api?: string }[]
}

const scripts: ScriptInfo[] = [
${list}
];

const scriptPaths: Record<string, string> = {
${pathMap}
};

const highlightedPaths: Record<string, string> = {
${hlPathMap}
};

const highlightedClassicPaths: Record<string, string> = {
${hlClassicPathMap}
};

async function fetchSource(stem: string): Promise<string> {
  const url = scriptPaths[stem];
  if (!url) throw new Error(\`Unknown script: \${stem}\`);
  const res = await fetch(url);
  if (!res.ok) throw new Error(\`Failed to load \${stem}\`);
  return res.text();
}

async function fetchHighlighted(stem: string): Promise<string> {
  const url = highlightedPaths[stem];
  if (!url) throw new Error(\`Unknown script: \${stem}\`);
  const res = await fetch(url);
  if (!res.ok) throw new Error(\`Failed to load highlighted \${stem}\`);
  return res.text();
}

async function fetchHighlightedClassic(stem: string): Promise<string> {
  const url = highlightedClassicPaths[stem];
  if (!url) throw new Error(\`Unknown script: \${stem}\`);
  const res = await fetch(url);
  if (!res.ok) throw new Error(\`Failed to load classic highlighted \${stem}\`);
  return res.text();
}

export default scripts;

export function getScript(stem: string): ScriptInfo | undefined {
  return scripts.find(s => s.stem === stem);
}
`,
);

console.log("Done!");
