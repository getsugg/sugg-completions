import scripts from "~/generated/scripts";
import type { ScriptInfo, LineData } from "~/types";

export function getScript(stem: string): ScriptInfo | undefined {
  return scripts.find((s) => s.stem === stem);
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
