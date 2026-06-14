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
      '[{"line":5,"type":"danger","api":"execFile"},{"line":31,"type":"safe","api":"scanPath"},{"line":40,"type":"safe","api":"scanPath"},{"line":50,"type":"safe","api":"readJson"},{"line":63,"type":"danger","api":"execFile"},{"line":80,"type":"danger","api":"execFile"},{"line":390,"type":"dynamic"},{"line":430,"type":"dynamic"},{"line":440,"type":"dynamic"},{"line":464,"type":"dynamic"},{"line":485,"type":"dynamic"},{"line":491,"type":"dynamic"},{"line":497,"type":"dynamic"},{"line":508,"type":"dynamic"},{"line":563,"type":"dynamic"},{"line":572,"type":"dynamic"}]',
    ),
  },
  {
    stem: "git",
    title: "git",
    description: "Distributed version control system",
    sourceUrl: "./completions/git/index.ts",
    highlightedUrl: "./highlighted/git.html",
    staticAnalysis: JSON.parse(
      '[{"line":5,"type":"danger","api":"execFile"},{"line":14,"type":"danger","api":"execFile"},{"line":23,"type":"danger","api":"execFile"},{"line":32,"type":"danger","api":"execFile"},{"line":41,"type":"danger","api":"execFile"},{"line":50,"type":"danger","api":"execFile"},{"line":62,"type":"danger","api":"execFile"},{"line":71,"type":"danger","api":"execFile"},{"line":80,"type":"danger","api":"execFile"},{"line":93,"type":"dynamic"},{"line":94,"type":"dynamic"},{"line":95,"type":"dynamic"},{"line":96,"type":"dynamic"},{"line":97,"type":"dynamic"},{"line":143,"type":"dynamic"},{"line":158,"type":"dynamic"},{"line":164,"type":"dynamic"},{"line":179,"type":"dynamic"},{"line":183,"type":"safe","api":"scanPath"},{"line":198,"type":"dynamic"},{"line":225,"type":"dynamic"},{"line":226,"type":"safe","api":"scanPath"},{"line":248,"type":"dynamic"},{"line":252,"type":"safe","api":"scanPath"},{"line":265,"type":"dynamic"},{"line":319,"type":"dynamic"},{"line":379,"type":"dynamic"},{"line":383,"type":"safe","api":"scanPath"},{"line":417,"type":"dynamic"},{"line":420,"type":"dynamic"},{"line":444,"type":"dynamic"},{"line":471,"type":"dynamic"},{"line":500,"type":"dynamic"},{"line":544,"type":"dynamic"},{"line":621,"type":"dynamic"},{"line":739,"type":"dynamic"},{"line":740,"type":"safe","api":"scanPath"},{"line":758,"type":"dynamic"},{"line":805,"type":"dynamic"}]',
    ),
  },
  {
    stem: "npm",
    title: "npm",
    description: "Node package manager",
    sourceUrl: "./completions/npm/index.ts",
    highlightedUrl: "./highlighted/npm.html",
    staticAnalysis: JSON.parse(
      '[{"line":223,"type":"safe","api":"readJson"},{"line":228,"type":"safe","api":"readJson"},{"line":234,"type":"safe","api":"scanPath"},{"line":302,"type":"dynamic"},{"line":406,"type":"dynamic"},{"line":422,"type":"dynamic"},{"line":469,"type":"dynamic"},{"line":593,"type":"dynamic"},{"line":595,"type":"safe","api":"scanPath"},{"line":685,"type":"dynamic"},{"line":778,"type":"dynamic"},{"line":825,"type":"dynamic"},{"line":839,"type":"dynamic"},{"line":871,"type":"dynamic"},{"line":894,"type":"dynamic"},{"line":983,"type":"dynamic"},{"line":1020,"type":"dynamic"},{"line":1055,"type":"dynamic"}]',
    ),
  },
  {
    stem: "scoop",
    title: "scoop",
    description: "Scoop command-line installer — Windows package manager",
    sourceUrl: "./completions/scoop/index.ts",
    highlightedUrl: "./highlighted/scoop.html",
    staticAnalysis: JSON.parse(
      '[{"line":12,"type":"danger","api":"exec"},{"line":29,"type":"danger","api":"exec"},{"line":47,"type":"danger","api":"exec"},{"line":58,"type":"dynamic"},{"line":64,"type":"dynamic"},{"line":156,"type":"dynamic"},{"line":220,"type":"dynamic"},{"line":222,"type":"danger","api":"exec"},{"line":244,"type":"dynamic"},{"line":246,"type":"danger","api":"exec"},{"line":295,"type":"dynamic"},{"line":308,"type":"dynamic"},{"line":316,"type":"dynamic"},{"line":371,"type":"dynamic"},{"line":377,"type":"dynamic"},{"line":425,"type":"dynamic"}]',
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
      '[{"line":93,"type":"dynamic"},{"line":101,"type":"danger","api":"execFile"},{"line":116,"type":"dynamic"}]',
    ),
  },
];

export default scripts;
