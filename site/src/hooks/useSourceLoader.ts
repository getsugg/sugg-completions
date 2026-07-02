import { createResource, createMemo, type Accessor } from "solid-js";
import { getScript, getFile, fetchFileLines, fetchLines } from "~/lib/scripts-utils";

export function useSourceLoader(stem: () => string | null, fileId?: Accessor<string | null>) {
  const [linesData] = createResource(
    () => ({ stem: stem(), fileId: fileId?.() }),
    async ({ stem, fileId }) => {
      if (!stem) return [];
      if (fileId) {
        const file = getFile(stem, fileId);
        return file ? fetchFileLines(file) : [];
      }
      const script = getScript(stem);
      return script ? fetchLines(script) : [];
    },
  );

  const rawLines = createMemo(() => linesData() ?? []);

  return { rawLines };
}
