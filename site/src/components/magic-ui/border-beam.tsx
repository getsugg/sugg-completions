import { type ComponentProps, mergeProps, splitProps, createEffect, onCleanup } from "solid-js";
import { animate } from "motion";
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
  const defaults = mergeProps(
    { size: 50, duration: 6, delay: 0, colorFrom: "#ffaa40", colorTo: "#9c40ff" },
    props,
  );
  const [local, rest] = splitProps(defaults, [
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
  ]);

  let innerRef!: HTMLDivElement;

  createEffect(() => {
    const el = innerRef;
    if (!el) return;
    const from = `${local.initialOffset ?? 0}%`;
    const to = local.reverse
      ? `-${local.initialOffset ?? 0}%`
      : `${100 + (local.initialOffset ?? 0)}%`;
    const ctrl = animate(
      el,
      { offsetDistance: [from, to] },
      {
        duration: local.duration,
        delay: -local.delay,
        repeat: Infinity,
        ease: "linear",
      },
    );
    onCleanup(() => ctrl.stop());
  });

  return (
    <div
      class="pointer-events-none absolute inset-0 rounded-[inherit] border-(length:--border-beam-width) border-transparent mask-[linear-gradient(transparent,transparent),linear-gradient(#000,#000)] mask-intersect [mask-clip:padding-box,border-box]"
      style={
        {
          "--border-beam-width": `${local.borderWidth ?? 1}px`,
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
          local.class,
        )}
        style={
          {
            width: `${local.size}px`,
            "offset-path": `rect(0 auto auto 0 round ${local.size}px)`,
            "offset-distance": `${local.initialOffset ?? 0}%`,
            "--color-from": local.colorFrom,
            "--color-to": local.colorTo,
          } as Record<string, string>
        }
      />
    </div>
  );
}
