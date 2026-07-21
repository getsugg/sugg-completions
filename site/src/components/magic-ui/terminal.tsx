import {
  createSignal,
  createMemo,
  onCleanup,
  onMount,
  type ComponentProps,
  type JSX,
  splitProps,
  For,
  Show,
} from "solid-js";
import { cn } from "~/lib/utils";

/* ── AnimatedSpan ── */

interface AnimatedSpanProps extends ComponentProps<"div"> {
  delay?: number;
}

export function AnimatedSpan(props: AnimatedSpanProps) {
  const [local, rest] = splitProps(props, ["class", "delay", "children"]);
  return (
    <div
      class={cn(
        "grid text-sm font-normal tracking-tight transition-all duration-300 opacity-100 translate-y-0",
        local.class,
      )}
      {...rest}
    >
      {local.children}
    </div>
  );
}

/* ── TypingAnimation ── */

interface TypingAnimationProps extends Omit<ComponentProps<"span">, "children"> {
  children: string;
  duration?: number;
}

export function TypingAnimation(props: TypingAnimationProps) {
  const [local, rest] = splitProps(props, ["class", "children", "duration"]);
  return (
    <span class={cn("text-sm font-normal tracking-tight", local.class)} {...rest}>
      {local.children}
    </span>
  );
}

/* ── Terminal ── */

interface TerminalProps {
  children: JSX.Element;
  class?: string;
}

export function Terminal(props: TerminalProps) {
  return (
    <div
      class={cn(
        "border-border bg-background z-0 h-full max-h-100 w-full max-w-lg rounded-xl border overflow-hidden",
        props.class,
      )}
    >
      <div class="flex flex-col gap-y-2 border-b border-border p-4">
        <div class="flex flex-row gap-x-2">
          <div class="h-2 w-2 rounded-full bg-red-500" />
          <div class="h-2 w-2 rounded-full bg-yellow-500" />
          <div class="h-2 w-2 rounded-full bg-green-500" />
        </div>
      </div>
      <pre class="p-4">
        <code class="grid gap-y-1 overflow-auto">{props.children}</code>
      </pre>
    </div>
  );
}

/* ── DemoTerminal: self-contained sequential animation ── */

interface Line {
  type: "typing" | "span";
  text: string;
  class?: string;
  delay?: number;
}

interface DemoTerminalProps {
  class?: string;
  title?: string;
  lines: Line[];
}

export function DemoTerminal(props: DemoTerminalProps) {
  const [visibleCount, setVisibleCount] = createSignal(0);
  let rootRef: HTMLDivElement | undefined;

  const resolvedLines = createMemo(() => props.lines);

  const showNext = () => {
    setVisibleCount((c) => c + 1);
  };

  onMount(() => {
    if (rootRef) {
      const obs = new IntersectionObserver(
        ([e]) => {
          if (e.isIntersecting) {
            showNext();
            obs.disconnect();
          }
        },
        { threshold: 0.3 },
      );
      obs.observe(rootRef);
      onCleanup(() => obs.disconnect());
    } else {
      showNext();
    }
  });

  return (
    <div
      ref={(el) => (rootRef = el)}
      class={cn(
        "border-border bg-background z-0 h-full max-h-100 w-full max-w-lg rounded-xl border overflow-hidden",
        props.class,
      )}
    >
      <div class="flex flex-col gap-y-2 border-b border-border p-4">
        {props.title ? (
          <div class="flex flex-row items-center gap-x-2">
            <div class="h-2 w-2 rounded-full bg-red-500" />
            <div class="h-2 w-2 rounded-full bg-yellow-500" />
            <div class="h-2 w-2 rounded-full bg-green-500" />
            <span class="ml-auto text-[11px] text-muted-foreground font-mono">{props.title}</span>
          </div>
        ) : (
          <div class="flex flex-row gap-x-2">
            <div class="h-2 w-2 rounded-full bg-red-500" />
            <div class="h-2 w-2 rounded-full bg-yellow-500" />
            <div class="h-2 w-2 rounded-full bg-green-500" />
          </div>
        )}
      </div>
      <pre class="p-4">
        <code class="grid gap-y-1 overflow-auto">
          <For each={resolvedLines().slice(0, visibleCount())}>
            {(line) => <TerminalLine line={line} onComplete={showNext} />}
          </For>
        </code>
      </pre>
    </div>
  );
}

function TerminalLine(props: { line: Line; onComplete: () => void }) {
  return (
    <Show
      when={props.line.type === "typing"}
      fallback={
        <SpanLine text={props.line.text} class={props.line.class} onComplete={props.onComplete} />
      }
    >
      <TypingLine text={props.line.text} onComplete={props.onComplete} />
    </Show>
  );
}

function SpanLine(props: { text: string; class?: string; onComplete: () => void }) {
  onMount(() => {
    setTimeout(() => props.onComplete(), 100);
  });
  return (
    <div
      class={cn(
        "grid text-sm font-normal tracking-tight transition-all duration-300 opacity-100 translate-y-0",
        props.class,
      )}
    >
      {props.text}
    </div>
  );
}

function TypingLine(props: { text: string; onComplete: () => void }) {
  const [text, setText] = createSignal("");

  onMount(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setText(props.text.substring(0, i));
      if (i >= props.text.length) {
        clearInterval(interval);
        setTimeout(() => props.onComplete(), 200);
      }
    }, 60);
    onCleanup(() => clearInterval(interval));
  });

  return <span class="text-sm font-normal tracking-tight">{text()}</span>;
}
