import { createResource, createMemo } from "solid-js";
import { getScript, fetchSource, fetchHighlighted } from "../lib/scripts-utils";

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
    const doc = new DOMParser().parseFromString(html, "text/html");
    const lines = Array.from(doc.querySelectorAll(".line"));
    return lines.filter((el) => !el.closest(".twoslash-popup-container")).map((el) => el.outerHTML);
  });

  return { source, rawLines };
}
