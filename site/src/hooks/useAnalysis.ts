import { createEffect, createMemo, createSignal, type Accessor } from "solid-js";
import type { LineAnnotation, AnalysisData } from "~/types";
import { getScript, getFile, fetchAnalysis } from "~/lib/scripts-utils";

export function useAnalysis(stem: () => string | null, fileId?: Accessor<string | null>) {
  const [analysis, setAnalysis] = createSignal<AnalysisData | undefined>();
  const [loading, setLoading] = createSignal(false);

  createEffect(
    () => ({ stem: stem(), fileId: fileId?.() }),
    ({ stem, fileId }) => {
      if (!stem) {
        setAnalysis(undefined);
        return;
      }
      const script = getScript(stem);
      if (!script) {
        setAnalysis(undefined);
        return;
      }

      let cancelled = false;
      setLoading(true);

      void fetchAnalysis(stem)
        .then((base) => {
          if (cancelled) return;
          const file = fileId ? getFile(stem, fileId) : script.files[0];
          const anns: LineAnnotation[] = file?.anns ?? base.anns;
          setAnalysis({ ...base, stem, anns });
        })
        .catch(() => {
          if (!cancelled) setAnalysis(undefined);
        })
        .finally(() => {
          if (!cancelled) setLoading(false);
        });

      return () => {
        cancelled = true;
      };
    },
  );

  const counts = createMemo(() => {
    const anns: LineAnnotation[] = analysis()?.anns ?? [];
    return {
      total: anns.length,
      unsafe: anns.filter((a) => a.type === "unsafe").length,
      safe: anns.filter((a) => a.type === "safe").length,
    };
  });

  return { analysis, loading, counts };
}
