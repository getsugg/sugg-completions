import { For, createMemo, type JSX } from "solid-js";
import { useScriptContext } from "~/contexts/ScriptContext";
import { cn } from "~/lib/utils";
import { useAnnotationNavigation } from "~/hooks/useAnnotationNavigation";
import { Button } from "~/components/ui/button";
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
    lastJumpedLine,
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
    lastJumpedLine,
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
      <Button
        variant="ghost"
        class="flex h-auto items-center gap-1.5 px-1.5 py-1 text-[11px] text-left hover:bg-[#ffffff08] rounded"
        onClick={props.onToggle}
      >
        <span class="text-xs text-amber-400 w-3">{props.isExpanded ? "▾" : "▸"}</span>
        <span class="font-semibold text-foreground">Annotations</span>
        <span class="text-muted-foreground font-mono">{counts().total}</span>
      </Button>
      <div class="flex-1" />
      <div class="flex items-center gap-1">
        <For each={Object.keys(FILTER_LABELS) as FilterType[]}>
          {(k) => (
            <Button
              variant="ghost"
              class={cn(
                "h-auto cursor-pointer rounded-lg border px-2 py-0.5 text-[11px] font-medium whitespace-nowrap transition-none",
                filteredType() === k
                  ? "bg-amber-500 border-amber-500 text-[#0c0a0e] font-bold hover:bg-amber-500/90"
                  : "border-[#2f2840] text-[#6a5d78] hover:border-[#4a3f55] hover:text-[#c8bdd4] hover:bg-transparent",
              )}
              onClick={() => {
                setFilteredType(k);
              }}
            >
              {FILTER_LABELS[k]} {countFor(k)}
            </Button>
          )}
        </For>
      </div>
      <div class="w-px h-3 bg-border mx-1.5" />
      <div class="flex items-center gap-0.5">
        <Button
          variant="ghost"
          size="icon"
          class="h-auto w-auto px-0.5 text-muted-foreground hover:text-foreground"
          disabled={filteredAnns().length === 0}
          onClick={goPrev}
        >
          ◀
        </Button>
        <Button
          variant="ghost"
          size="icon"
          class="h-auto w-auto px-0.5 text-muted-foreground hover:text-foreground"
          disabled={filteredAnns().length === 0}
          onClick={goNext}
        >
          ▶
        </Button>
      </div>
    </div>
  );
}
