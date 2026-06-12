import { createResource, createMemo } from "solid-js";
import { getScript, fetchSource, fetchHighlighted } from "../scripts-utils";

export function useSourceLoader(stem: () => string | null) {
  const [source] = createResource(stem, async (s) => {
    if (!s) return "";
    const script = getScript(s);
    return script ? fetchSource(script) : "";
  });

  const [twoslashHighlighted] = createResource(stem, async (s) => {
    if (!s) return "";
    const script = getScript(s);
    return script ? fetchHighlighted(script) : "";
  });

  const rawLines = createMemo(() => {
    const html = twoslashHighlighted();
    if (!html) return [];
    const lines: string[] = [];
    let pos = 0;
    const marker = '<span class="line"';
    while (true) {
      const start = html.indexOf(marker, pos);
      if (start === -1) break;
      const tagEnd = html.indexOf(">", start);
      if (tagEnd === -1) break;
      let depth = 1;
      let i = tagEnd + 1;
      while (depth > 0 && i < html.length) {
        const nextOpen = html.indexOf("<span", i);
        const nextClose = html.indexOf("</span>", i);
        if (nextClose === -1) break;
        if (nextOpen !== -1 && nextOpen < nextClose) {
          depth++;
          i = nextOpen + 6;
        } else {
          depth--;
          i = nextClose + 7;
        }
      }
      lines.push(html.slice(start, i));
      pos = i;
    }
    return lines;
  });

  return { source, rawLines };
}
