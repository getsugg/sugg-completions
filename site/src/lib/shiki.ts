import { createHighlighter } from "shiki";
import { suggTheme } from "./shiki-theme";

let highlighter: Awaited<ReturnType<typeof createHighlighter>> | null = null;
let hlPromise: Promise<void> | null = null;

function ensureHighlighter() {
  if (!hlPromise)
    hlPromise = createHighlighter({ langs: ["ts"], themes: ["dark-plus"] }).then((h) => {
      highlighter = h;
    });
  return hlPromise;
}

export async function highlightPlain(code: string): Promise<string> {
  await ensureHighlighter();
  return highlighter!.codeToHtml(code, { lang: "ts", theme: suggTheme });
}
