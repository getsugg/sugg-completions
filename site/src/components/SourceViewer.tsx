import { For, createEffect } from "solid-js";
import { createVirtualizer } from "@tanstack/solid-virtual";

interface SourceViewerProps {
  rawLines: () => string[];
  lineClasses: () => string[];
  scrollToTarget: () => number | null;
  onScrollChange: (top: number) => void;
  restoreScrollTop: () => number | null;
}

export function SourceViewer(props: SourceViewerProps) {
  let scrollEl: HTMLDivElement | undefined;

  const virtualizer = createVirtualizer({
    get count() {
      return props.rawLines().length;
    },
    getScrollElement: () => scrollEl ?? null,
    estimateSize: () => 22,
    overscan: 10,
  });

  createEffect(() => {
    const lines = props.rawLines();
    const top = props.restoreScrollTop();
    if (!lines.length || top == null || !scrollEl) return;
    scrollEl.scrollTop = top;
  });

  createEffect(() => {
    const target = props.scrollToTarget();
    if (target == null || !scrollEl) return;
    const top = target * 22 - scrollEl.clientHeight / 2 + 11;
    scrollEl.scrollTop = Math.max(0, top);
  });

  return (
    <div
      ref={(el) => {
        scrollEl = el;
        el.addEventListener("scroll", () => props.onScrollChange(el.scrollTop));
      }}
      class="h-full overflow-auto"
    >
      <div class="source-viewer twoslash p-4 text-sm leading-relaxed">
        <div
          style={{
            height: `${virtualizer.getTotalSize()}px`,
            position: "relative",
          }}
        >
          <For each={virtualizer.getVirtualItems()}>
            {(item) => (
              <div
                data-line-number={item.index + 1}
                class={(() => {
                  const cls = props.lineClasses()[item.index];
                  return cls ? `line-row ${cls}` : "line-row";
                })()}
                style={{
                  position: "absolute",
                  top: `${item.start}px`,
                  left: 0,
                  width: "100%",
                  height: `${item.size}px`,
                }}
                innerHTML={props.rawLines()[item.index] || ""}
              />
            )}
          </For>
        </div>
      </div>
    </div>
  );
}
