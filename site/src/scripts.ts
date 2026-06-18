/// <reference types="vite/client" />

import type { ScriptInfo } from "./types";

const scripts: ScriptInfo[] = [
  {
    stem: "bun",
    title: "bun",
    description: "Fast JavaScript runtime, package manager, bundler, and test runner.",
    sourceUrl: "./completions/bun/index.ts",
    highlightedUrl: "./highlighted/bun.html",
    staticAnalysis: JSON.parse(
      '[{"line":5,"type":"unsafe","api":"execFile"},{"line":31,"type":"safe","api":"scanPath"},{"line":40,"type":"safe","api":"scanPath"},{"line":50,"type":"safe","api":"readJson"},{"line":63,"type":"unsafe","api":"execFile"},{"line":80,"type":"unsafe","api":"execFile"}]',
    ),
  },
  {
    stem: "git",
    title: "git",
    description: "Distributed version control system",
    sourceUrl: "./completions/git/index.ts",
    highlightedUrl: "./highlighted/git.html",
    staticAnalysis: JSON.parse(
      '[{"line":5,"type":"unsafe","api":"execFile"},{"line":14,"type":"unsafe","api":"execFile"},{"line":23,"type":"unsafe","api":"execFile"},{"line":32,"type":"unsafe","api":"execFile"},{"line":41,"type":"unsafe","api":"execFile"},{"line":50,"type":"unsafe","api":"execFile"},{"line":62,"type":"unsafe","api":"execFile"},{"line":71,"type":"unsafe","api":"execFile"},{"line":80,"type":"unsafe","api":"execFile"},{"line":143,"type":"safe","api":"scanPath"},{"line":158,"type":"safe","api":"scanPath"},{"line":164,"type":"safe","api":"scanPath"},{"line":183,"type":"safe","api":"scanPath"},{"line":198,"type":"safe","api":"scanPath"},{"line":226,"type":"safe","api":"scanPath"},{"line":252,"type":"safe","api":"scanPath"},{"line":319,"type":"safe","api":"scanPath"},{"line":383,"type":"safe","api":"scanPath"},{"line":417,"type":"safe","api":"scanPath"},{"line":544,"type":"safe","api":"scanPath"},{"line":740,"type":"safe","api":"scanPath"},{"line":758,"type":"safe","api":"scanPath"},{"line":805,"type":"safe","api":"scanPath"}]',
    ),
  },
  {
    stem: "npm",
    title: "npm",
    description: "Node package manager",
    sourceUrl: "./completions/npm/index.ts",
    highlightedUrl: "./highlighted/npm.html",
    staticAnalysis: JSON.parse(
      '[{"line":223,"type":"safe","api":"readJson"},{"line":228,"type":"safe","api":"readJson"},{"line":234,"type":"safe","api":"scanPath"},{"line":595,"type":"safe","api":"scanPath"},{"line":685,"type":"safe","api":"scanPath"},{"line":778,"type":"safe","api":"scanPath"},{"line":839,"type":"safe","api":"scanPath"}]',
    ),
  },
  {
    stem: "scoop",
    title: "scoop",
    description: "Scoop command-line installer — Windows package manager",
    sourceUrl: "./completions/scoop/index.ts",
    highlightedUrl: "./highlighted/scoop.html",
    staticAnalysis: JSON.parse(
      '[{"line":12,"type":"unsafe","api":"exec"},{"line":29,"type":"unsafe","api":"exec"},{"line":47,"type":"unsafe","api":"exec"},{"line":222,"type":"unsafe","api":"exec"},{"line":246,"type":"unsafe","api":"exec"},{"line":371,"type":"safe","api":"scanPath"},{"line":377,"type":"safe","api":"scanPath"}]',
    ),
  },
  {
    stem: "sugg",
    title: "sugg",
    description: "Shell completion engine",
    sourceUrl: "./completions/sugg/index.ts",
    highlightedUrl: "./highlighted/sugg.html",
    staticAnalysis: JSON.parse("[]"),
  },
  {
    stem: "winget",
    title: "winget",
    description: "WinGet 命令行实用工具可从命令行安装应用程序和其他程序包",
    sourceUrl: "./completions/winget.ts",
    highlightedUrl: "./highlighted/winget.html",
    staticAnalysis: JSON.parse(
      '[{"line":101,"type":"unsafe","api":"execFile"},{"line":116,"type":"safe","api":"scanPath"}]',
    ),
  },
];

export default scripts;
