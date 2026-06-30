import type { LineAnnotation } from "~/types";

export const API_RISK_MAP: Record<string, "unsafe" | "safe"> = {
  exec: "unsafe",
  execFile: "unsafe",
  fetch: "unsafe",
  scanPath: "safe",
  readFile: "safe",
  readJson: "safe",
  cache: "safe",
  ui: "safe",
};

const UNSAFE_APIS = ["execFile", "exec", "fetch"];
const SAFE_APIS = ["scanPath", "readFile", "readJson", "cache", "ui"];

export function scanSource(src: string): LineAnnotation[] {
  const anns: LineAnnotation[] = [];
  const lines = src.split("\n");
  for (let i = 0; i < lines.length; i++) {
    const l = lines[i];
    const unsafe = UNSAFE_APIS.find((a) => l.includes(a + "("));
    if (unsafe) {
      anns.push({ line: i, type: "unsafe", api: unsafe });
      continue;
    }
    const safe = SAFE_APIS.find((a) => l.includes(a + "("));
    if (safe) anns.push({ line: i, type: "safe", api: safe });
  }
  return anns;
}
