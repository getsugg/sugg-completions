import { createMemo, isPending, type Accessor } from "solid-js";
import { isServer } from "@solidjs/web";
import type { LineAnnotation, AnalysisData } from "~/types";
import { getScript, getFile, fetchAnalysis } from "~/lib/scripts-utils";

export function useAnalysis(stem: () => string | null, fileId?: Accessor<string | null>) {
  // Client-only fetch: the server has no origin to resolve the relative asset
  // URL against. On the server a real script stays at `undefined` (still
  // loading) so the shell it renders matches the client's first hydrated
  // frame; `loadingValue` keeps that frame from suspending. `null` means the
  // fetch failed — distinct from `undefined`, which is only the first flight,
  // so a failed request settles instead of spinning forever.
  const base = createMemo<AnalysisData | null | undefined>(
    () => {
      const s = stem();
      if (!s || !getScript(s)) return null;
      if (isServer) return undefined;
      return fetchAnalysis(s).catch(() => null);
    },
    { loadingValue: undefined },
  );

  const analysis = createMemo<AnalysisData | undefined>(() => {
    const data = base();
    if (!data) return undefined;
    const id = fileId?.();
    const file = id ? getFile(data.stem, id) : getScript(data.stem)?.files[0];
    const anns: LineAnnotation[] = file?.anns ?? data.anns;
    return { ...data, anns };
  });

  const loading = () => base() === undefined || isPending(base);
  const pending = () => isPending(base);

  const counts = createMemo(() => {
    const anns: LineAnnotation[] = analysis()?.anns ?? [];
    return {
      total: anns.length,
      unsafe: anns.filter((a) => a.type === "unsafe").length,
      safe: anns.filter((a) => a.type === "safe").length,
    };
  });

  return { analysis, loading, counts, pending };
}
