import type { FilterType } from "../types";

const FILTER_LABELS: Record<FilterType, string> = {
  all: "All",
  unsafe: "Unsafe",
  safe: "Safe",
};

interface FilterBarProps {
  barRef?: (el: HTMLDivElement) => void;
  filteredType: FilterType;
  setFilteredType: (v: FilterType) => void;
  counts: { total: number; unsafe: number; safe: number };
  matchedLines: number[];
  focusIdx: number;
  setFocusIdx: (v: number) => void;
  scrollToLine: (line: number) => void;
  onToggle: () => void;
  isExpanded: boolean;
}

export function FilterBar(props: FilterBarProps) {
  const countFor = (k: FilterType) =>
    k === "all" ? props.counts.total : k === "unsafe" ? props.counts.unsafe : props.counts.safe;

  return (
    <div
      ref={props.barRef}
      class="flex shrink-0 items-center border-t border-border bg-card px-3 py-1 text-[11px]"
    >
      <button
        type="button"
        class="flex cursor-pointer items-center gap-1.5 px-1.5 py-1 text-left hover:bg-[#ffffff08] rounded"
        onClick={props.onToggle}
      >
        <span class="text-xs text-amber-400 w-3">{props.isExpanded ? "▾" : "▸"}</span>
        <span class="text-[11px] font-semibold text-foreground">Annotations</span>
        <span class="text-muted-foreground font-mono">{props.counts.total}</span>
      </button>
      <div class="flex-1" />
      <div class="flex items-center gap-1">
        {(Object.keys(FILTER_LABELS) as FilterType[]).map((k) => (
          <button
            type="button"
            class={`cursor-pointer rounded-lg border px-2 py-0.5 text-[11px] font-medium whitespace-nowrap transition-none ${
              props.filteredType === k
                ? "bg-amber-500 border-amber-500 text-[#0c0a0e] font-bold"
                : "border-[#2f2840] text-[#6a5d78] hover:border-[#4a3f55] hover:text-[#c8bdd4]"
            }`}
            onClick={() => {
              props.setFilteredType(k);
              props.setFocusIdx(-1);
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
          disabled={props.filteredType === "all" || props.matchedLines.length === 0}
          onClick={() => {
            const lines = props.matchedLines;
            const cur = props.focusIdx;
            const next = cur < 0 ? lines.length - 1 : Math.max(0, cur - 1);
            props.setFocusIdx(next);
            props.scrollToLine(lines[next]);
          }}
        >
          ◀
        </button>
        <button
          type="button"
          class="cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed text-muted-foreground hover:text-foreground px-0.5"
          disabled={props.filteredType === "all" || props.matchedLines.length === 0}
          onClick={() => {
            const lines = props.matchedLines;
            const cur = props.focusIdx;
            const next = cur < 0 ? 0 : Math.min(lines.length - 1, cur + 1);
            props.setFocusIdx(next);
            props.scrollToLine(lines[next]);
          }}
        >
          ▶
        </button>
      </div>
    </div>
  );
}
