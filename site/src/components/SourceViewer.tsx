import { For, createEffect } from "solid-js";
import { createVirtualizer } from "@tanstack/solid-virtual";

export const LINE_HEIGHT = 22;

interface SourceViewerProps {
  rawLines: () => string[];
  lineClasses: () => string[];
  scrollToTarget: () => number | null;
  onScrollChange: (top: number, viewportHeight: number) => void;
  restoreScrollTop: () => number | null;
}

export function SourceViewer(props: SourceViewerProps) {
  let scrollEl: HTMLDivElement | undefined;

  const virtualizer = createVirtualizer({
    get count() {
      return props.rawLines().length;
    },
    getScrollElement: () => scrollEl ?? null,
    estimateSize: () => LINE_HEIGHT,
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
    const top = target * LINE_HEIGHT - scrollEl.clientHeight / 2 + LINE_HEIGHT / 2;
    scrollEl.scrollTop = Math.max(0, top);
  });

  return (
    <div
      ref={(el) => {
        scrollEl = el;
        props.onScrollChange(el.scrollTop, el.clientHeight);
      }}
      onScroll={(e) =>
        props.onScrollChange(e.currentTarget.scrollTop, e.currentTarget.clientHeight)
      }
      class="h-full overflow-auto"
    >
      <div class="source-viewer twoslash p-4 text-sm leading-5.5">
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
