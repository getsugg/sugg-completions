import { Show, createSignal, createMemo, type Setter } from "solid-js";
import ResizablePrimitive from "@corvu/resizable";
import { createResizeObserver } from "@solid-primitives/resize-observer";
import { useScriptContext } from "~/contexts/ScriptContext";
import { FilterBar } from "./FilterBar";
import { AnnotationList } from "./AnnotationList";
import { DynamicCodePanel } from "./DynamicCodePanel";
import { StaticCodePanel } from "./StaticCodePanel";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "~/components/ui/tabs";

export interface DetailAreaProps {
  containerHeight: number;
  onBarHeightChange?: Setter<number>;
}

export function DetailArea(props: DetailAreaProps) {
  const { displayAnalysis, mergedAnnotations, filteredType } = useScriptContext();
  const resizableCtx = ResizablePrimitive.useContext();

  const isExpanded = createMemo(() => resizableCtx.sizes()[1] * props.containerHeight > 60);

  const lastExpandedRatio = createMemo((prev: number) => {
    const size = resizableCtx.sizes()[1];
    if (size * props.containerHeight > 60) return size;
    return prev;
  }, 0.35);

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

  return (
    <div class="flex flex-col h-full">
      <Show when={displayAnalysis()}>
        <FilterBar
          ref={(el) => {
            createResizeObserver(el, (_rect, el) => {
              props.onBarHeightChange?.(Math.ceil(el.offsetHeight));
            });
          }}
          onToggle={toggle}
          isExpanded={isExpanded()}
        />

        <Show when={isExpanded()}>
          <div class="flex flex-1 flex-col min-h-0 border-t border-border bg-card">
            <Tabs value={activeTab()} onChange={setActiveTab} class="flex flex-col flex-1 min-h-0">
              <TabsList class="h-auto justify-start rounded-none border-b border-border bg-transparent p-0 shrink-0">
                <TabsTrigger
                  value="summary"
                  class="rounded-none px-3.5 py-1.5 text-[11px] font-medium"
                >
                  Summary
                </TabsTrigger>
                <TabsTrigger
                  value="dynamic"
                  class="rounded-none px-3.5 py-1.5 text-[11px] font-medium"
                >
                  Dynamic
                </TabsTrigger>
                <TabsTrigger
                  value="static"
                  class="rounded-none px-3.5 py-1.5 text-[11px] font-medium"
                >
                  Static
                </TabsTrigger>
              </TabsList>
              <TabsContent value="summary" class="flex-1 overflow-hidden px-4 py-3 text-xs h-full">
                <AnnotationList anns={filteredAnns()} />
              </TabsContent>
              <TabsContent value="dynamic" class="flex-1 overflow-hidden px-4 py-3 text-xs h-full">
                <DynamicCodePanel dynamicHtml={displayAnalysis()?.dynamicHtml} />
              </TabsContent>
              <TabsContent value="static" class="flex-1 overflow-hidden px-4 py-3 text-xs h-full">
                <StaticCodePanel staticHtml={displayAnalysis()?.staticHtml} />
              </TabsContent>
            </Tabs>
          </div>
        </Show>
      </Show>
    </div>
  );
}
