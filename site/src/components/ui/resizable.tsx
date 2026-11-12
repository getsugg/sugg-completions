import { createContext, useContext, type Accessor } from "solid-js";
import type { JSX } from "@solidjs/web";
import { omit } from "solid-js";

import { cn } from "~/lib/utils";

export interface ResizableContextValue {
  sizes: Accessor<number[]>;
  setSizes: (sizes: number[]) => void;
  resize: (index: number, size: number) => void;
  registerPanel: () => number;
  registerHandle: () => number;
}

const ResizableContext = createContext<ResizableContextValue>();

export function useResizableContext() {
  const ctx = useContext(ResizableContext);
  if (!ctx) throw new Error("useResizableContext must be used inside <Resizable>");
  return ctx;
}

interface ResizableProps {
  orientation?: "horizontal" | "vertical";
  sizes: number[];
  onSizesChange?: (sizes: number[]) => void;
  class?: string;
  style?: JSX.CSSProperties;
  ref?: (el: HTMLDivElement) => void;
  children?: JSX.Element;
}

export function Resizable(props: ResizableProps) {
  let panelCount = 0;
  let handleCount = 0;

  const value: ResizableContextValue = {
    sizes: () => props.sizes,
    setSizes: (sizes) => props.onSizesChange?.(sizes),
    resize: (index, size) => {
      const next = props.sizes.slice();
      next[index] = size;
      for (let i = 0; i < next.length; i++) {
        if (i !== index) next[i] = next.length === 2 ? 1 - size : next[i];
      }
      props.onSizesChange?.(next);
    },
    registerPanel: () => panelCount++,
    registerHandle: () => handleCount++,
  };

  return (
    <div
      ref={props.ref}
      class={cn(
        "flex size-full",
        (props.orientation ?? "horizontal") === "vertical" ? "flex-col" : "flex-row",
        props.class,
      )}
      style={props.style}
    >
      <ResizableContext value={value}>{props.children}</ResizableContext>
    </div>
  );
}

interface ResizablePanelProps {
  class?: string;
  style?: JSX.CSSProperties;
  children?: JSX.Element;
}

export function ResizablePanel(props: ResizablePanelProps) {
  const ctx = useResizableContext();
  const index = ctx.registerPanel();
  const size = () => ctx.sizes()[index] ?? 0;

  return (
    <div
      data-resizable-panel=""
      class={cn("min-h-0 min-w-0 overflow-hidden", props.class)}
      style={{ ...props.style, flex: `${size()} 1 0%` }}
    >
      {props.children}
    </div>
  );
}

interface ResizableHandleProps {
  class?: string;
  withHandle?: boolean;
  disabled?: boolean;
}

export function ResizableHandle(props: ResizableHandleProps) {
  const ctx = useResizableContext();
  const index = ctx.registerHandle();

  const onPointerDown = (event: PointerEvent) => {
    if (props.disabled) return;
    const handle = event.currentTarget as HTMLElement;
    const root = handle.parentElement;
    if (!root) return;

    event.preventDefault();
    handle.setPointerCapture(event.pointerId);

    const vertical = root.classList.contains("flex-col");
    const rect = root.getBoundingClientRect();
    const total = vertical ? rect.height : rect.width;
    if (total <= 0) return;

    const startPos = vertical ? event.clientY : event.clientX;
    const startSizes = ctx.sizes().slice();
    const before = startSizes[index] ?? 0;
    const after = startSizes[index + 1] ?? 0;

    const onMove = (moveEvent: PointerEvent) => {
      const current = vertical ? moveEvent.clientY : moveEvent.clientX;
      const delta = (current - startPos) / total;
      let a = before + delta;
      let b = after - delta;
      if (a < 0) {
        b += a;
        a = 0;
      }
      if (b < 0) {
        a += b;
        b = 0;
      }
      const next = startSizes.slice();
      next[index] = a;
      next[index + 1] = b;
      ctx.setSizes(next);
    };

    const onUp = () => {
      handle.removeEventListener("pointermove", onMove);
      handle.removeEventListener("pointerup", onUp);
      handle.removeEventListener("pointercancel", onUp);
      handle.releasePointerCapture(event.pointerId);
    };

    handle.addEventListener("pointermove", onMove);
    handle.addEventListener("pointerup", onUp);
    handle.addEventListener("pointercancel", onUp);
  };

  return (
    <div
      data-resizable-handle=""
      role="separator"
      aria-orientation="horizontal"
      class={cn(
        "relative flex shrink-0 items-center justify-center bg-border after:absolute after:inset-x-0 after:-top-1 after:h-2 after:content-['']",
        "hover:bg-accent data-[dragging]:bg-accent",
        props.class,
      )}
      onPointerDown={onPointerDown}
    >
      {props.withHandle ? (
        <div class="z-10 flex h-3 w-4 items-center justify-center rounded-sm border bg-border">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="size-2.5"
          >
            <path d="M5 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
            <path d="M12 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
            <path d="M19 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
            <path d="M5 15m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
            <path d="M12 15m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
            <path d="M19 15m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
          </svg>
        </div>
      ) : null}
    </div>
  );
}

const ResizablePrimitive = {
  Panel: ResizablePanel,
  Handle: ResizableHandle,
  useContext: useResizableContext,
};

export default ResizablePrimitive;
