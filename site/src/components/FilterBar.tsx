import { For, createMemo, type JSX } from "solid-js";
import { useScriptContext } from "~/contexts/ScriptContext";
import { cn } from "~/lib/utils";
import { useAnnotationNavigation } from "~/hooks/useAnnotationNavigation";
import type { FilterType } from "~/types";

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
    stem,
    activeFile,
    mergedAnnotations,
    counts,
    filteredType,
    setFilteredType,
    scrollToLine,
    getCenterLine,
    getLastJumpedLine,
  } = useScriptContext();

  const filteredAnns = createMemo(() => {
    const t = filteredType();
    const all = mergedAnnotations();
    return t === "all" ? all : all.filter((a) => a.type === t);
  });

  const { goNext, goPrev } = useAnnotationNavigation({
    stem,
    activeFile,
    filteredAnns,
    getCenterLine,
    scrollToLine,
    getLastJumpedLine,
  });

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
        onClick={() => props.onToggle()}
      >
        <span class="text-xs text-amber-400 w-3">{props.isExpanded ? "▾" : "▸"}</span>
        <span class="text-[11px] font-semibold text-foreground">Annotations</span>
        <span class="text-muted-foreground font-mono">{counts().total}</span>
      </button>
      <div class="flex-1" />
      <div class="flex items-center gap-1">
        <For each={Object.keys(FILTER_LABELS) as FilterType[]}>
          {(k) => (
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
              }}
            >
              {FILTER_LABELS[k]} {countFor(k)}
            </button>
          )}
        </For>
      </div>
      <div class="w-px h-3 bg-border mx-1.5" />
      <div class="flex items-center gap-0.5">
        <button
          type="button"
          class="cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed text-muted-foreground hover:text-foreground px-0.5"
          disabled={filteredAnns().length === 0}
          onClick={goPrev}
        >
          ◀
        </button>
        <button
          type="button"
          class="cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed text-muted-foreground hover:text-foreground px-0.5"
          disabled={filteredAnns().length === 0}
          onClick={goNext}
        >
          ▶
        </button>
      </div>
    </div>
  );
}
