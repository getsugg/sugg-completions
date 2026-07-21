import { createSignal, onMount, For } from "solid-js";
import { cn } from "~/lib/utils";

interface MeteorsProps {
  number?: number;
  minDelay?: number;
  maxDelay?: number;
  minDuration?: number;
  maxDuration?: number;
  angle?: number;
  class?: string;
}

export function Meteors(props: MeteorsProps) {
  const num = () => props.number ?? 20;
  const minDelay = () => props.minDelay ?? 0.2;
  const maxDelay = () => props.maxDelay ?? 1.2;
  const minDuration = () => props.minDuration ?? 2;
  const maxDuration = () => props.maxDuration ?? 10;
  const angle = () => props.angle ?? 215;

  const [styles, setStyles] = createSignal<Record<string, string>[]>([]);

  onMount(() => {
    const items = [];
    for (let i = 0; i < num(); i++) {
      items.push({
        "--angle": `${-angle()}deg`,
        top: "-5%",
        left: `${Math.floor(Math.random() * window.innerWidth)}px`,
        "animation-delay": `${Math.random() * (maxDelay() - minDelay()) + minDelay()}s`,
        "animation-duration": `${Math.floor(Math.random() * (maxDuration() - minDuration()) + minDuration())}s`,
      });
    }
    setStyles(items);
  });

  return (
    <For each={styles()}>
      {(style) => (
        <span
          style={{ ...(style as Record<string, string>) }}
          class={cn(
            "pointer-events-none absolute size-0.5 rotate-(--angle) rounded-full bg-zinc-500 shadow-[0_0_0_1px_#ffffff10] animate-magic-meteor",
            props.class,
          )}
        >
          <div class="pointer-events-none absolute top-1/2 -z-10 h-px w-12.5 -translate-y-1/2 bg-linear-to-r from-zinc-500 to-transparent" />
        </span>
      )}
    </For>
  );
}
