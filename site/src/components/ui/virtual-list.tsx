import { For, createMemo, createSignal, onSettled, type Accessor } from "solid-js";
import type { JSX } from "@solidjs/web";

import { cn } from "~/lib/utils";

export interface VirtualListHandle {
  scrollToIndex: (index: number, options?: { align?: "start" | "center" | "end" }) => void;
  scrollTo: (offset: number) => void;
  readonly scrollOffset: number;
  readonly viewportSize: number;
}

interface VirtualListProps<T> {
  data: T[];
  itemSize: number;
  bufferSize?: number;
  class?: string;
  style?: JSX.CSSProperties;
  ref?: (handle: VirtualListHandle) => void;
  children: (item: T, index: Accessor<number>) => JSX.Element;
}

export function VirtualList<T>(props: VirtualListProps<T>) {
  let container: HTMLDivElement | undefined;
  const [scrollTop, setScrollTop] = createSignal(0);
  const [viewport, setViewport] = createSignal(600);

  const total = createMemo(() => props.data.length * props.itemSize);
  const overscan = () => props.bufferSize ?? 200;

  const range = createMemo(() => {
    const len = props.data.length;
    const start = Math.max(0, Math.floor((scrollTop() - overscan()) / props.itemSize));
    const end = Math.min(
      len,
      Math.ceil((scrollTop() + viewport() + overscan()) / props.itemSize),
    );
    return { start, end };
  });

  const visible = createMemo(() => {
    const { start, end } = range();
    const items: { item: T; index: number }[] = [];
    for (let i = start; i < end; i++) {
      const item = props.data[i];
      if (item !== undefined) items.push({ item, index: i });
    }
    return items;
  });

  const handle: VirtualListHandle = {
    scrollToIndex(index, options) {
      if (!container) return;
      const align = options?.align ?? "start";
      let top = index * props.itemSize;
      if (align === "center") top -= (viewport() - props.itemSize) / 2;
      if (align === "end") top -= viewport() - props.itemSize;
      handle.scrollTo(Math.max(0, top));
    },
    scrollTo(offset) {
      if (!container) return;
      container.scrollTop = offset;
      setScrollTop(container.scrollTop);
    },
    get scrollOffset() {
      return scrollTop();
    },
    get viewportSize() {
      return viewport();
    },
  };

  onSettled(() => {
    if (!container) return;
    const update = () => setViewport(container!.clientHeight);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(container);
    props.ref?.(handle);
    return () => observer.disconnect();
  });

  return (
    <div
      ref={(el) => {
        container = el;
      }}
      class={cn("overflow-auto", props.class)}
      style={{ height: "100%", ...props.style }}
      onScroll={(event) => setScrollTop(event.currentTarget.scrollTop)}
    >
      <div style={{ height: `${total()}px`, position: "relative" }}>
        <div style={{ transform: `translateY(${range().start * props.itemSize}px)` }}>
          <For each={visible()}>
            {(entry) => props.children(entry.item, () => entry.index)}
          </For>
        </div>
      </div>
    </div>
  );
}
