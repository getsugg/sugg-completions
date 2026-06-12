import scripts from "./scripts";
import type { ScriptInfo } from "./types";

export function getScript(stem: string): ScriptInfo | undefined {
  return scripts.find((s) => s.stem === stem);
}

export async function fetchSource(info: ScriptInfo): Promise<string> {
  const res = await fetch(info.sourceUrl);
  if (!res.ok) throw new Error(`Failed to load source for ${info.stem}`);
  return res.text();
}

export async function fetchHighlighted(info: ScriptInfo): Promise<string> {
  const res = await fetch(info.highlightedUrl);
  if (!res.ok) throw new Error(`Failed to load highlighted for ${info.stem}`);
  return res.text();
}
