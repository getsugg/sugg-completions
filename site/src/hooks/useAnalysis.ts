import { createResource, createMemo } from "solid-js";
import { ensureWasm, extract, analyzeApis } from "../parser";
import { scanSource } from "../scan";
import type { AnalysisData } from "../types";
import { getScript, fetchSource } from "../scripts-utils";

const analysisCache = new Map<string, AnalysisData>();

export function useAnalysis(stem: () => string | null) {
  const [data] = createResource(stem, async (s) => {
    if (!s) return undefined;
    const cached = analysisCache.get(s);
    if (cached) return cached;
    const script = getScript(s);
    if (!script) return undefined;
    const src = await fetchSource(script);
    const anns = script.staticAnalysis.length > 0 ? script.staticAnalysis : scanSource(src);
    await ensureWasm();
    const r = extract(src, "script.ts");
    const apis = r.dynamic.trim() ? analyzeApis(r.dynamic) : [];
    const result: AnalysisData = { stem: s, anns, r, apis };
    analysisCache.set(s, result);
    return result;
  });

  const counts = createMemo(() => {
    const anns = data()?.anns ?? [];
    return {
      total: anns.length,
      danger: anns.filter((a) => a.type === "danger").length,
      dynamic: anns.filter((a) => a.type === "dynamic").length,
      safe: anns.filter((a) => a.type === "safe").length,
    };
  });

  return { analysis: data, counts };
}
