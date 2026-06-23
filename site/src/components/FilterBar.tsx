import { createMemo, createSignal, type JSX } from "solid-js";
import { useScriptContext } from "../contexts/ScriptContext";
import { cn } from "../lib/utils";
import { LINE_HEIGHT } from "./SourceViewer";
import type { FilterType } from "../types";

const FILTER_LABELS: Record<FilterType, string> = {
  all: "All",
  unsafe: "Unsafe",
  safe: "Safe",
};

interface FilterBarProps {
  ref?: JSX.HTMLAttributes<HTMLDivElement>["ref"];
  onToggle: () => void;
  isExpanded: boolean;
}

export function FilterBar(props: FilterBarProps) {
  const {
    displayAnalysis,
    counts,
    filteredType,
    setFilteredType,
    scrollToLine,
    scrollTop,
    viewportHeight,
  } = useScriptContext();
  const [focusIdx, setFocusIdx] = createSignal(-1);

  const matchedLines = createMemo(() => {
    if (filteredType() === "all") return [];
    const anns = displayAnalysis()?.anns ?? [];
    return anns
      .filter((a) => a.type === filteredType())
      .map((a) => a.line)
      .sort((a, b) => a - b);
  });

  const centerLine = () => (scrollTop() + viewportHeight() / 2) / LINE_HEIGHT;

  const countFor = (k: FilterType) => {
    const c = counts();
    return k === "all" ? c.total : k === "unsafe" ? c.unsafe : c.safe;
  };

  return (
    <div
      ref={props.ref}
      class="flex shrink-0 items-center border-t border-border bg-card px-3 py-1 text-[11px]"
    >
      <button
        type="button"
        class="flex cursor-pointer items-center gap-1.5 px-1.5 py-1 text-left hover:bg-[#ffffff08] rounded"
        onClick={props.onToggle}
      >
        <span class="text-xs text-amber-400 w-3">{props.isExpanded ? "▾" : "▸"}</span>
        <span class="text-[11px] font-semibold text-foreground">Annotations</span>
        <span class="text-muted-foreground font-mono">{counts().total}</span>
      </button>
      <div class="flex-1" />
      <div class="flex items-center gap-1">
        {(Object.keys(FILTER_LABELS) as FilterType[]).map((k) => (
          <button
            type="button"
            class={cn(
              "cursor-pointer rounded-lg border px-2 py-0.5 text-[11px] font-medium whitespace-nowrap transition-none",
              filteredType() === k
                ? "bg-amber-500 border-amber-500 text-[#0c0a0e] font-bold"
                : "border-[#2f2840] text-[#6a5d78] hover:border-[#4a3f55] hover:text-[#c8bdd4]",
            )}
            onClick={() => {
              setFilteredType(k);
              setFocusIdx(-1);
            }}
          >
            {FILTER_LABELS[k]} {countFor(k)}
          </button>
        ))}
      </div>
      <div class="w-px h-3 bg-border mx-1.5" />
      <div class="flex items-center gap-0.5">
        <button
          type="button"
          class="cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed text-muted-foreground hover:text-foreground px-0.5"
          disabled={filteredType() === "all" || matchedLines().length === 0}
          onClick={() => {
            const lines = matchedLines();
            if (!lines.length) return;
            const cur = focusIdx();
            const center = centerLine();
            const far = cur < 0 || Math.abs(lines[cur] - center) > 20;
            const idx = far
              ? (lines.findLastIndex((l) => l < center) + lines.length) % lines.length
              : (cur - 1 + lines.length) % lines.length;
            setFocusIdx(idx);
            scrollToLine(lines[idx]);
          }}
        >
          ◀
        </button>
        <button
          type="button"
          class="cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed text-muted-foreground hover:text-foreground px-0.5"
          disabled={filteredType() === "all" || matchedLines().length === 0}
          onClick={() => {
            const lines = matchedLines();
            if (!lines.length) return;
            const cur = focusIdx();
            const center = centerLine();
            const far = cur < 0 || Math.abs(lines[cur] - center) > 20;
            const idx = far
              ? Math.max(
                  lines.findIndex((l) => l > center),
                  0,
                )
              : (cur + 1) % lines.length;
            setFocusIdx(idx);
            scrollToLine(lines[idx]);
          }}
        >
          ▶
        </button>
      </div>
    </div>
  );
}
