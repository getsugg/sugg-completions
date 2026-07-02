import scripts from "~/generated/scripts.json";
import type { ScriptInfo, ScriptAnalysis, AnalysisData, FileState, LineData } from "~/types";

export function getScript(stem: string): ScriptInfo | undefined {
  return scripts.find((s) => s.stem === stem) as ScriptInfo | undefined;
}

export function getFile(stem: string, fileId: string): FileState | undefined {
  const script = getScript(stem);
  return script?.files.find((f) => f.id === fileId);
}

export async function fetchSource(info: ScriptInfo): Promise<string> {
  const res = await fetch(info.sourceUrl);
  if (!res.ok) throw new Error(`Failed to load source for ${info.stem}`);
  return res.text();
}

export async function fetchLines(info: ScriptInfo): Promise<LineData[]> {
  const res = await fetch(info.linesUrl);
  if (!res.ok) throw new Error(`Failed to load lines for ${info.stem}`);
  return res.json();
}

export async function fetchFileLines(file: FileState): Promise<LineData[]> {
  const res = await fetch(file.linesUrl);
  if (!res.ok) throw new Error(`Failed to load lines for ${file.filename}`);
  return res.json();
}

export async function fetchAnalysis(stem: string): Promise<AnalysisData> {
  const res = await fetch(`./analysis/${stem}.json`);
  if (!res.ok) throw new Error(`Failed to load analysis for ${stem}`);
  const raw: ScriptAnalysis = await res.json();
  return {
    stem,
    anns: raw.staticAnalysis,
    r: raw.dynamicAnalysis?.extractResult ?? { modified: "", dynamic: "", func_ids: [] },
    apis: raw.dynamicAnalysis?.apis ?? [],
    staticHtml: raw.staticHtml,
    dynamicHtml: raw.dynamicHtml,
  };
}
