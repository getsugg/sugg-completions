import { createEffect, createMemo, createSignal } from "solid-js";
import { createResizeObserver } from "@solid-primitives/resize-observer";

import { useResizableContext } from "~/components/ui/resizable";
import { useScriptContext } from "~/contexts/ScriptContext";
import { FilterBar } from "./FilterBar";
import { AnnotationList } from "./AnnotationList";
import { DynamicCodePanel } from "./DynamicCodePanel";
import { StaticCodePanel } from "./StaticCodePanel";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "~/components/ui/tabs";

export interface DetailAreaProps {
  containerHeight: number;
  onBarHeightChange?: (height: number) => void;
}

export function DetailArea(props: DetailAreaProps) {
  const { displayAnalysis, mergedAnnotations, filteredType } = useScriptContext();
  const resizableCtx = useResizableContext();

  const [barEl, setBarEl] = createSignal<HTMLDivElement>();

  createResizeObserver(barEl, (_rect, el) => {
    props.onBarHeightChange?.(Math.ceil(el.offsetHeight));
  });

  const isExpanded = createMemo(() => resizableCtx.sizes()[1] * props.containerHeight > 60);

  let lastRatio = 0.35;
  createEffect(isExpanded, (expanded) => {
    if (expanded) lastRatio = resizableCtx.sizes()[1];
  });

  const toggle = () => {
    if (isExpanded()) {
      resizableCtx.resize(1, 0);
    } else {
      resizableCtx.setSizes([1 - lastRatio, lastRatio]);
    }
  };

  const [activeTab, setActiveTab] = createSignal<"summary" | "dynamic" | "static">("summary");

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
      {displayAnalysis() ? (
        <>
          <FilterBar ref={setBarEl} onToggle={toggle} isExpanded={isExpanded()} />

          {isExpanded() ? (
            <div class="flex flex-1 flex-col min-h-0 border-t border-border bg-card">
              <Tabs
                value={activeTab()}
                onChange={setActiveTab}
                class="flex flex-col flex-1 min-h-0"
              >
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
                <TabsContent
                  value="summary"
                  class="flex-1 overflow-hidden px-4 py-3 text-xs h-full"
                >
                  <AnnotationList anns={filteredAnns()} />
                </TabsContent>
                <TabsContent
                  value="dynamic"
                  class="flex-1 overflow-hidden px-4 py-3 text-xs h-full"
                >
                  <DynamicCodePanel dynamicHtml={displayAnalysis()?.dynamicHtml} />
                </TabsContent>
                <TabsContent
                  value="static"
                  class="flex-1 overflow-hidden px-4 py-3 text-xs h-full"
                >
                  <StaticCodePanel staticHtml={displayAnalysis()?.staticHtml} />
                </TabsContent>
              </Tabs>
            </div>
          ) : null}
        </>
      ) : null}
    </div>
  );
}
