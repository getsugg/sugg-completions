import { createEffect, createMemo, createSignal, type Accessor } from "solid-js";
import { getScript, getFile, fetchFileLines, fetchLines } from "~/lib/scripts-utils";
import type { LineData } from "~/types";

export function useSourceLoader(stem: () => string | null, fileId?: Accessor<string | null>) {
  const [rawLines, setRawLines] = createSignal<LineData[]>([]);

  createEffect(
    () => ({ stem: stem(), fileId: fileId?.() }),
    ({ stem, fileId }) => {
      if (!stem) {
        setRawLines([]);
        return;
      }

      let cancelled = false;

      const load = async () => {
        if (fileId) {
          const file = getFile(stem, fileId);
          return file ? fetchFileLines(file) : [];
        }
        const script = getScript(stem);
        return script ? fetchLines(script) : [];
      };

      void load()
        .then((lines) => {
          if (!cancelled) setRawLines(lines);
        })
        .catch(() => {
          if (!cancelled) setRawLines([]);
        });

      return () => {
        cancelled = true;
      };
    },
  );

  return { rawLines };
}
