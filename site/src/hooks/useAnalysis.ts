import { createResource, createMemo, type Accessor } from "solid-js";
import type { LineAnnotation } from "~/types";
import { getScript, getFile, fetchAnalysis } from "~/lib/scripts-utils";

export function useAnalysis(stem: () => string | null, fileId?: Accessor<string | null>) {
  const [data] = createResource(
    () => ({ stem: stem(), fileId: fileId?.() }),
    async ({ stem, fileId }) => {
      if (!stem) return undefined;
      const script = getScript(stem);
      if (!script) return undefined;

      // Fetch base analysis data (dynamic analysis is script-level)
      const base = await fetchAnalysis(stem);

      // Get annotations from the specific file
      const file = fileId ? getFile(stem, fileId) : script.files[0];
      const anns: LineAnnotation[] = file?.anns ?? base.anns;

      return { ...base, stem, anns };
    },
  );

  const counts = createMemo(() => {
    const anns: LineAnnotation[] = data()?.anns ?? [];
    return {
      total: anns.length,
      unsafe: anns.filter((a) => a.type === "unsafe").length,
      safe: anns.filter((a) => a.type === "safe").length,
    };
  });

  return { analysis: data, counts };
}
