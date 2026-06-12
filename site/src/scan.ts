import type { LineAnnotation } from "./types";

export const API_RISK_MAP: Record<string, "danger" | "safe"> = {
  exec: "danger",
  execFile: "danger",
  fetch: "danger",
  scanPath: "safe",
  readFile: "safe",
  readJson: "safe",
  cache: "safe",
  ui: "safe",
};

const DANGER_APIS = ["execFile", "exec", "fetch"];
const SAFE_APIS = ["scanPath", "readFile", "readJson", "cache", "ui"];

export function scanSource(src: string): LineAnnotation[] {
  const anns: LineAnnotation[] = [];
  const lines = src.split("\n");
  for (let i = 0; i < lines.length; i++) {
    const l = lines[i];
    const danger = DANGER_APIS.find((a) => l.includes(a + "("));
    if (danger) {
      anns.push({ line: i, type: "danger", api: danger });
      continue;
    }
    if (l.includes("dynamic(")) {
      anns.push({ line: i, type: "dynamic" });
      continue;
    }
    const safe = SAFE_APIS.find((a) => l.includes(a + "("));
    if (safe) anns.push({ line: i, type: "safe", api: safe });
  }
  return anns;
}
