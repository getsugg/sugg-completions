import { createResource, createMemo } from "solid-js";
import { getScript, fetchLines } from "../lib/scripts-utils";

export function useSourceLoader(stem: () => string | null) {
  const [linesData] = createResource(stem, async (s) => {
    if (!s) return [];
    const script = getScript(s);
    return script ? fetchLines(script) : [];
  });

  const rawLines = createMemo(() => linesData() ?? []);

  return { rawLines };
}
