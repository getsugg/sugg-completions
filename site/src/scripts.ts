/// <reference types="vite/client" />

export interface ScriptInfo {
  stem: string;
  title: string;
  description: string;
  source: () => Promise<string>;
  highlighted: () => Promise<string>;
  staticAnalysis: { line: number; type: "danger" | "dynamic" | "safe"; api?: string }[];
}

const scripts: ScriptInfo[] = [
  {
    stem: "bun",
    title: "bun",
    description: "bun",
    source: () => fetchSource("bun"),
    highlighted: () => fetchHighlighted("bun"),
    staticAnalysis: JSON.parse(
      '[{"line":5,"type":"danger","api":"execFile"},{"line":31,"type":"safe","api":"scanPath"},{"line":40,"type":"safe","api":"scanPath"},{"line":50,"type":"safe","api":"readJson"},{"line":63,"type":"danger","api":"execFile"},{"line":80,"type":"danger","api":"execFile"},{"line":391,"type":"dynamic"},{"line":431,"type":"dynamic"},{"line":441,"type":"dynamic"},{"line":465,"type":"dynamic"},{"line":486,"type":"dynamic"},{"line":492,"type":"dynamic"},{"line":498,"type":"dynamic"},{"line":509,"type":"dynamic"},{"line":564,"type":"dynamic"},{"line":573,"type":"dynamic"}]',
    ),
  },
  {
    stem: "git",
    title: "git",
    description: "git",
    source: () => fetchSource("git"),
    highlighted: () => fetchHighlighted("git"),
    staticAnalysis: JSON.parse(
      '[{"line":6,"type":"danger","api":"execFile"},{"line":19,"type":"danger","api":"execFile"},{"line":32,"type":"danger","api":"execFile"},{"line":45,"type":"danger","api":"execFile"},{"line":58,"type":"danger","api":"execFile"},{"line":71,"type":"danger","api":"execFile"},{"line":87,"type":"danger","api":"execFile"},{"line":100,"type":"danger","api":"execFile"},{"line":113,"type":"danger","api":"execFile"},{"line":171,"type":"dynamic"},{"line":186,"type":"dynamic"},{"line":192,"type":"dynamic"},{"line":202,"type":"dynamic"},{"line":207,"type":"dynamic"},{"line":211,"type":"safe","api":"scanPath"},{"line":226,"type":"dynamic"},{"line":253,"type":"dynamic"},{"line":254,"type":"safe","api":"scanPath"},{"line":276,"type":"dynamic"},{"line":280,"type":"safe","api":"scanPath"},{"line":293,"type":"dynamic"},{"line":320,"type":"dynamic"},{"line":327,"type":"dynamic"},{"line":347,"type":"dynamic"},{"line":352,"type":"dynamic"},{"line":354,"type":"dynamic"},{"line":355,"type":"dynamic"},{"line":376,"type":"dynamic"},{"line":383,"type":"dynamic"},{"line":394,"type":"dynamic"},{"line":407,"type":"dynamic"},{"line":411,"type":"safe","api":"scanPath"},{"line":429,"type":"dynamic"},{"line":445,"type":"dynamic"},{"line":448,"type":"dynamic"},{"line":472,"type":"dynamic"},{"line":499,"type":"dynamic"},{"line":528,"type":"dynamic"},{"line":544,"type":"dynamic"},{"line":546,"type":"dynamic"},{"line":550,"type":"dynamic"},{"line":555,"type":"dynamic"},{"line":559,"type":"dynamic"},{"line":572,"type":"dynamic"},{"line":590,"type":"dynamic"},{"line":604,"type":"dynamic"},{"line":611,"type":"dynamic"},{"line":612,"type":"dynamic"},{"line":613,"type":"dynamic"},{"line":614,"type":"dynamic"},{"line":649,"type":"dynamic"},{"line":667,"type":"dynamic"},{"line":668,"type":"dynamic"},{"line":669,"type":"dynamic"},{"line":670,"type":"dynamic"},{"line":674,"type":"dynamic"},{"line":679,"type":"dynamic"},{"line":683,"type":"dynamic"},{"line":685,"type":"dynamic"},{"line":693,"type":"dynamic"},{"line":767,"type":"dynamic"},{"line":768,"type":"safe","api":"scanPath"},{"line":786,"type":"dynamic"},{"line":833,"type":"dynamic"}]',
    ),
  },
  {
    stem: "npm",
    title: "npm",
    description: "npm",
    source: () => fetchSource("npm"),
    highlighted: () => fetchHighlighted("npm"),
    staticAnalysis: JSON.parse(
      '[{"line":223,"type":"safe","api":"readJson"},{"line":228,"type":"safe","api":"readJson"},{"line":234,"type":"safe","api":"scanPath"},{"line":302,"type":"dynamic"},{"line":406,"type":"dynamic"},{"line":422,"type":"dynamic"},{"line":469,"type":"dynamic"},{"line":593,"type":"dynamic"},{"line":595,"type":"safe","api":"scanPath"},{"line":685,"type":"dynamic"},{"line":778,"type":"dynamic"},{"line":825,"type":"dynamic"},{"line":839,"type":"dynamic"},{"line":871,"type":"dynamic"},{"line":894,"type":"dynamic"},{"line":983,"type":"dynamic"},{"line":1020,"type":"dynamic"},{"line":1055,"type":"dynamic"}]',
    ),
  },
  {
    stem: "scoop",
    title: "scoop",
    description: "scoop",
    source: () => fetchSource("scoop"),
    highlighted: () => fetchHighlighted("scoop"),
    staticAnalysis: JSON.parse(
      '[{"line":12,"type":"danger","api":"exec"},{"line":29,"type":"danger","api":"exec"},{"line":47,"type":"danger","api":"exec"},{"line":58,"type":"dynamic"},{"line":64,"type":"dynamic"},{"line":156,"type":"dynamic"},{"line":220,"type":"dynamic"},{"line":222,"type":"danger","api":"exec"},{"line":244,"type":"dynamic"},{"line":246,"type":"danger","api":"exec"},{"line":295,"type":"dynamic"},{"line":308,"type":"dynamic"},{"line":316,"type":"dynamic"},{"line":371,"type":"dynamic"},{"line":377,"type":"dynamic"},{"line":425,"type":"dynamic"}]',
    ),
  },
  {
    stem: "sugg",
    title: "sugg",
    description: "sugg",
    source: () => fetchSource("sugg"),
    highlighted: () => fetchHighlighted("sugg"),
    staticAnalysis: JSON.parse("[]"),
  },
  {
    stem: "winget",
    title: "winget",
    description: "winget",
    source: () => fetchSource("winget"),
    highlighted: () => fetchHighlighted("winget"),
    staticAnalysis: JSON.parse(
      '[{"line":93,"type":"dynamic"},{"line":101,"type":"danger","api":"execFile"},{"line":116,"type":"dynamic"}]',
    ),
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

export default scripts;

export function getScript(stem: string): ScriptInfo | undefined {
  return scripts.find((s) => s.stem === stem);
}
