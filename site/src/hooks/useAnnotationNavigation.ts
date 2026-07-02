import { type Accessor } from "solid-js";
import { getScript } from "~/lib/scripts-utils";
import type { MergedAnnotation } from "~/contexts/ScriptContext";

interface UseAnnotationNavigationOptions {
  stem: Accessor<string | null>;
  activeFile: Accessor<string | null>;
  filteredAnns: Accessor<MergedAnnotation[]>;
  getCenterLine: () => number;
  scrollToLine: (line: number, fileId?: string) => void;
}

export function useAnnotationNavigation(options: UseAnnotationNavigationOptions) {
  const { stem, activeFile, filteredAnns, getCenterLine, scrollToLine } = options;

  const files = () => {
    const s = stem();
    if (!s) return [];
    const script = getScript(s);
    return script?.files ?? [];
  };

  const goNext = () => {
    const anns = filteredAnns();
    if (!anns.length) return;
    const fileOrder = files();
    if (!fileOrder.length) return;

    const curFileId = activeFile() ?? fileOrder[0].id;
    const center = getCenterLine();

    const curFileAnns = anns.filter((a) => a.fileId === curFileId);
    const next = curFileAnns.find((a) => a.line > center);
    if (next) {
      scrollToLine(next.line, next.fileId);
      return;
    }

    const curIdx = fileOrder.findIndex((f) => f.id === curFileId);
    for (let i = 1; i < fileOrder.length; i++) {
      const nextId = fileOrder[(curIdx + i) % fileOrder.length].id;
      const nextFileAnns = anns.filter((a) => a.fileId === nextId);
      if (nextFileAnns.length) {
        scrollToLine(nextFileAnns[0].line, nextFileAnns[0].fileId);
        return;
      }
    }
  };

  const goPrev = () => {
    const anns = filteredAnns();
    if (!anns.length) return;
    const fileOrder = files();
    if (!fileOrder.length) return;

    const curFileId = activeFile() ?? fileOrder[0].id;
    const center = getCenterLine();

    const curFileAnns = anns.filter((a) => a.fileId === curFileId);
    const prev = curFileAnns.findLast((a) => a.line < center);
    if (prev) {
      scrollToLine(prev.line, prev.fileId);
      return;
    }

    const curIdx = fileOrder.findIndex((f) => f.id === curFileId);
    for (let i = 1; i < fileOrder.length; i++) {
      const prevId = fileOrder[(curIdx - i + fileOrder.length) % fileOrder.length].id;
      const prevFileAnns = anns.filter((a) => a.fileId === prevId);
      if (prevFileAnns.length) {
        const last = prevFileAnns[prevFileAnns.length - 1];
        scrollToLine(last.line, last.fileId);
        return;
      }
    }
  };

  return { goNext, goPrev, filteredAnns };
}
