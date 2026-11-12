import type { ComponentProps } from "@solidjs/web";
import { animate } from "motion";
import { createEffect, omit } from "solid-js";

import { cn } from "~/lib/utils";

interface BorderBeamProps extends ComponentProps<"div"> {
  size?: number;
  duration?: number;
  delay?: number;
  colorFrom?: string;
  colorTo?: string;
  reverse?: boolean;
  initialOffset?: number;
  borderWidth?: number;
}

export function BorderBeam(props: BorderBeamProps) {
  const rest = omit(
    props,
    "class",
    "size",
    "duration",
    "delay",
    "colorFrom",
    "colorTo",
    "reverse",
    "initialOffset",
    "borderWidth",
    "style",
    "children",
    "ref",
  );

  let innerRef: HTMLDivElement | undefined;

  createEffect(
    () => ({
      size: props.size ?? 50,
      duration: props.duration ?? 6,
      delay: props.delay ?? 0,
      colorFrom: props.colorFrom ?? "#ffaa40",
      colorTo: props.colorTo ?? "#9c40ff",
      reverse: props.reverse ?? false,
      initialOffset: props.initialOffset ?? 0,
    }),
    (options) => {
      const el = innerRef;
      if (!el) return;
      const from = `${options.initialOffset}%`;
      const to = options.reverse
        ? `-${options.initialOffset}%`
        : `${100 + options.initialOffset}%`;
      const ctrl = animate(
        el,
        { offsetDistance: [from, to] },
        {
          duration: options.duration,
          delay: -options.delay,
          repeat: Infinity,
          ease: "linear",
        },
      );
      return () => ctrl.stop();
    },
  );

  return (
    <div
      class="pointer-events-none absolute inset-0 rounded-[inherit] border-(length:--border-beam-width) border-transparent mask-[linear-gradient(transparent,transparent),linear-gradient(#000,#000)] mask-intersect [mask-clip:padding-box,border-box]"
      style={
        {
          "--border-beam-width": `${props.borderWidth ?? 1}px`,
        } as Record<string, string>
      }
      {...rest}
    >
      <div
        ref={(el) => {
          innerRef = el;
        }}
        class={cn(
          "absolute aspect-square",
          "bg-linear-to-l from-(--color-from) via-(--color-to) to-transparent",
          props.class,
        )}
        style={
          {
            width: `${props.size ?? 50}px`,
            "offset-path": `rect(0 auto auto 0 round ${props.size ?? 50}px)`,
            "offset-distance": `${props.initialOffset ?? 0}%`,
            "--color-from": props.colorFrom ?? "#ffaa40",
            "--color-to": props.colorTo ?? "#9c40ff",
          } as Record<string, string>
        }
      />
    </div>
  );
}
