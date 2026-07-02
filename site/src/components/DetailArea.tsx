import {
  For,
  Show,
  Switch,
  Match,
  createSignal,
  createMemo,
  createEffect,
  type Setter,
} from "solid-js";
import ResizablePrimitive from "@corvu/resizable";
import { createResizeObserver } from "@solid-primitives/resize-observer";
import { useScriptContext } from "~/contexts/ScriptContext";
import { FilterBar } from "./FilterBar";
import { AnnotationList } from "./AnnotationList";
import { DynamicCodePanel } from "./DynamicCodePanel";
import { StaticCodePanel } from "./StaticCodePanel";

export interface DetailAreaProps {
  rootEl: HTMLElement | undefined;
  onBarHeightChange?: Setter<number>;
  scrollToLine: (line: number, fileId?: string) => void;
  getCenterLine: () => number;
}

export function DetailArea(props: DetailAreaProps) {
  const { displayAnalysis, mergedAnnotations, filteredType } = useScriptContext();
  const resizableCtx = ResizablePrimitive.useContext();
  const [containerHeight, setContainerHeight] = createSignal(300);

  createResizeObserver(
    () => props.rootEl,
    ({ height }) => setContainerHeight(height),
  );

  const [filterBarEl, setFilterBarEl] = createSignal<HTMLDivElement>();
  createResizeObserver(filterBarEl, ({ height }) => {
    props.onBarHeightChange?.(Math.ceil(height));
  });

  const isExpanded = createMemo(() => resizableCtx.sizes()[1] * containerHeight() > 60);

  const [lastExpandedRatio, setLastExpandedRatio] = createSignal(0.35);

  createEffect(() => {
    const size = resizableCtx.sizes()[1];
    if (size * containerHeight() > 60) {
      setLastExpandedRatio(size);
    }
  });

  const toggle = () => {
    if (isExpanded()) {
      resizableCtx.resize(1, 0);
    } else {
      const r = lastExpandedRatio();
      resizableCtx.setSizes([1 - r, r]);
    }
  };

  const [activeTab, setActiveTab] = createSignal<"summary" | "dynamic" | "static">("summary");

  // Filter merged annotations by type
  const filteredAnns = createMemo(() => {
    const t = filteredType();
    const allAnns = mergedAnnotations();
    if (t !== "all") {
      return allAnns.filter((a) => a.type === t);
    }
    return allAnns;
  });

  const TABS = ["summary", "dynamic", "static"] as const;

  return (
    <div class="flex flex-col h-full">
      <Show when={displayAnalysis()}>
        <FilterBar
          ref={setFilterBarEl}
          onToggle={toggle}
          isExpanded={isExpanded()}
          scrollToLine={props.scrollToLine}
          getCenterLine={props.getCenterLine}
        />

        <Show when={isExpanded()}>
          <div class="flex flex-1 flex-col min-h-0 border-t border-border bg-card">
            <div class="flex shrink-0 border-b border-border">
              <For each={TABS}>
                {(t) => (
                  <button
                    type="button"
                    class="cursor-pointer border-b-2 px-3.5 py-1.5 text-[11px] font-medium transition-none"
                    classList={{
                      "border-amber-500 text-amber-500": activeTab() === t,
                      "border-transparent text-muted-foreground hover:text-foreground":
                        activeTab() !== t,
                    }}
                    onClick={() => setActiveTab(t)}
                  >
                    {t === "summary" ? "Summary" : t === "dynamic" ? "Dynamic" : "Static"}
                  </button>
                )}
              </For>
            </div>
            <div class="flex-1 overflow-auto px-4 py-3 text-xs">
              <Switch>
                <Match when={activeTab() === "summary"}>
                  <AnnotationList anns={filteredAnns()} scrollToLine={props.scrollToLine} />
                </Match>
                <Match when={activeTab() === "dynamic"}>
                  <DynamicCodePanel dynamicHtml={displayAnalysis()?.dynamicHtml} />
                </Match>
                <Match when={activeTab() === "static"}>
                  <StaticCodePanel staticHtml={displayAnalysis()?.staticHtml} />
                </Match>
              </Switch>
            </div>
          </div>
        </Show>
      </Show>
    </div>
  );
}
