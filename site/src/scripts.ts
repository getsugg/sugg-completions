/// <reference types="vite/client" />

export interface ScriptInfo {
  stem: string;
  title: string;
  description: string;
  source: () => Promise<string>;
  highlighted: () => Promise<string>;
  highlightedClassic: () => Promise<string>;
}

const scripts: ScriptInfo[] = [
  {
    stem: "bun",
    title: "bun",
    description: "bun",
    source: () => fetchSource("bun"),
    highlighted: () => fetchHighlighted("bun"),
    highlightedClassic: () => fetchHighlightedClassic("bun"),
  },
  {
    stem: "git",
    title: "git",
    description: "git",
    source: () => fetchSource("git"),
    highlighted: () => fetchHighlighted("git"),
    highlightedClassic: () => fetchHighlightedClassic("git"),
  },
  {
    stem: "npm",
    title: "npm",
    description: "npm",
    source: () => fetchSource("npm"),
    highlighted: () => fetchHighlighted("npm"),
    highlightedClassic: () => fetchHighlightedClassic("npm"),
  },
  {
    stem: "scoop",
    title: "scoop",
    description: "scoop",
    source: () => fetchSource("scoop"),
    highlighted: () => fetchHighlighted("scoop"),
    highlightedClassic: () => fetchHighlightedClassic("scoop"),
  },
  {
    stem: "sugg",
    title: "sugg",
    description: "sugg",
    source: () => fetchSource("sugg"),
    highlighted: () => fetchHighlighted("sugg"),
    highlightedClassic: () => fetchHighlightedClassic("sugg"),
  },
  {
    stem: "winget",
    title: "winget",
    description: "winget",
    source: () => fetchSource("winget"),
    highlighted: () => fetchHighlighted("winget"),
    highlightedClassic: () => fetchHighlightedClassic("winget"),
  },
];

const scriptPaths: Record<string, string> = {
  bun: "./completions/bun/index.ts",
  git: "./completions/git/index.ts",
  npm: "./completions/npm/index.ts",
  scoop: "./completions/scoop/index.ts",
  sugg: "./completions/sugg/index.ts",
  winget: "./completions/winget.ts",
};

const highlightedPaths: Record<string, string> = {
  bun: "./highlighted/bun.html",
  git: "./highlighted/git.html",
  npm: "./highlighted/npm.html",
  scoop: "./highlighted/scoop.html",
  sugg: "./highlighted/sugg.html",
  winget: "./highlighted/winget.html",
};

const highlightedClassicPaths: Record<string, string> = {
  bun: "./highlighted/bun.classic.html",
  git: "./highlighted/git.classic.html",
  npm: "./highlighted/npm.classic.html",
  scoop: "./highlighted/scoop.classic.html",
  sugg: "./highlighted/sugg.classic.html",
  winget: "./highlighted/winget.classic.html",
};

async function fetchSource(stem: string): Promise<string> {
  const url = scriptPaths[stem];
  if (!url) throw new Error(`Unknown script: ${stem}`);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to load ${stem}`);
  return res.text();
}

async function fetchHighlighted(stem: string): Promise<string> {
  const url = highlightedPaths[stem];
  if (!url) throw new Error(`Unknown script: ${stem}`);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to load highlighted ${stem}`);
  return res.text();
}

async function fetchHighlightedClassic(stem: string): Promise<string> {
  const url = highlightedClassicPaths[stem];
  if (!url) throw new Error(`Unknown script: ${stem}`);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to load classic highlighted ${stem}`);
  return res.text();
}

export default scripts;

export function getScript(stem: string): ScriptInfo | undefined {
  return scripts.find((s) => s.stem === stem);
}
