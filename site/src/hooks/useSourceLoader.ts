import { createMemo, type Accessor } from "solid-js";
import { isServer } from "@solidjs/web";
import { getScript, getFile, fetchFileLines } from "~/lib/scripts-utils";
import type { LineData } from "~/types";

export function useSourceLoader(stem: () => string | null, fileId?: Accessor<string | null>) {
  // Resolve to a concrete file up front. The initial render has no active file
  // yet, and the scroll manager picks the first tab a moment later — both must
  // map to the same target so the file is fetched once, not twice.
  const target = createMemo(
    () => {
      const s = stem();
      if (!s) return null;
      const script = getScript(s);
      const id = fileId?.() ?? script?.files[0]?.id ?? null;
      return id ? { stem: s, id } : null;
    },
    { equals: (a, b) => a?.stem === b?.stem && a?.id === b?.id },
  );

  // Client-only fetch, same reason as useAnalysis. `loadingValue` keeps the
  // server render (and the first client frame) at the placeholder.
  const rawLines = createMemo<LineData[]>(
    () => {
      const file = target();
      if (!file || isServer) return [];
      const state = getFile(file.stem, file.id);
      if (!state) return [];
      return fetchFileLines(state).catch(() => []);
    },
    { loadingValue: [] },
  );

  return { rawLines };
}
