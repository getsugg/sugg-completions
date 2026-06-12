import type { FilterType } from "../types";

const FILTER_LABELS: Record<FilterType, string> = {
  all: "全部",
  danger: "危险",
  dynamic: "动态",
  safe: "安全",
};
const FILTER_COLORS: Record<FilterType, string> = {
  all: "#8b949e",
  danger: "#ef4444",
  dynamic: "#f59e0b",
  safe: "#22c55e",
};

interface FilterBarProps {
  barRef?: (el: HTMLDivElement) => void;
  filteredType: () => FilterType;
  setFilteredType: (v: FilterType) => void;
  counts: () => { total: number; danger: number; dynamic: number; safe: number };
  matchedLines: () => number[];
  focusIdx: () => number;
  setFocusIdx: (v: number) => void;
  scrollToLine: (line: number) => void;
  onToggle: () => void;
  isExpanded: () => boolean;
}

export function FilterBar(props: FilterBarProps) {
  return (
    <div
      ref={props.barRef}
      class="flex shrink-0 items-center gap-2 border-t border-border bg-card px-5 py-1.5 text-[10px]"
    >
      {(Object.keys(FILTER_LABELS) as FilterType[]).map((k) => (
        <button
          type="button"
          class={`flex cursor-pointer items-center gap-1 rounded px-2 py-0.5 font-medium transition-none ${
            props.filteredType() === k ? "outline-1 outline-current" : ""
          }`}
          style={{ color: FILTER_COLORS[k] }}
          onClick={() => {
            props.setFilteredType(k);
            props.setFocusIdx(-1);
          }}
        >
          <span
            class="inline-block size-1.5 rounded-full"
            style={`background:${FILTER_COLORS[k]}`}
          />
          {FILTER_LABELS[k]}
          <span class="ml-0.5 text-muted-foreground">
            {k === "all"
              ? props.counts().total
              : props.counts()[k === "danger" ? "danger" : k === "dynamic" ? "dynamic" : "safe"]}
          </span>
        </button>
      ))}
      <div class="w-px h-3 bg-border mx-1" />
      <button
        type="button"
        class="cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed text-muted-foreground hover:text-foreground px-1"
        disabled={props.filteredType() === "all" || props.matchedLines().length === 0}
        onClick={() => {
          const lines = props.matchedLines();
          const cur = props.focusIdx();
          const next = cur < 0 ? lines.length - 1 : Math.max(0, cur - 1);
          props.setFocusIdx(next);
          props.scrollToLine(lines[next]);
        }}
      >
        ◀
      </button>
      <button
        type="button"
        class="cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed text-muted-foreground hover:text-foreground px-1"
        disabled={props.filteredType() === "all" || props.matchedLines().length === 0}
        onClick={() => {
          const lines = props.matchedLines();
          const cur = props.focusIdx();
          const next = cur < 0 ? 0 : Math.min(lines.length - 1, cur + 1);
          props.setFocusIdx(next);
          props.scrollToLine(lines[next]);
        }}
      >
        ▶
      </button>
      <div class="flex-1" />
      <button
        type="button"
        class="cursor-pointer text-muted-foreground hover:text-foreground"
        onClick={props.onToggle}
      >
        {props.isExpanded() ? "▾ 收起详情" : "▴ 详情"}
      </button>
    </div>
  );
}
