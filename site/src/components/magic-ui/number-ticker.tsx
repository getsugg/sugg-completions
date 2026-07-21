import { onCleanup, onMount, type ComponentProps, splitProps } from "solid-js";
import { cn } from "~/lib/utils";

interface NumberTickerProps extends ComponentProps<"span"> {
  value: number;
  startValue?: number;
  direction?: "up" | "down";
  delay?: number;
  decimalPlaces?: number;
}

export function NumberTicker(props: NumberTickerProps) {
  const [local, rest] = splitProps(props, [
    "class",
    "value",
    "startValue",
    "direction",
    "delay",
    "decimalPlaces",
  ]);
  const dir = () => local.direction ?? "up";
  const startVal = () => local.startValue ?? 0;
  const decimalPlaces = () => local.decimalPlaces ?? 0;
  let ref: HTMLSpanElement | undefined;
  let rafId: number | undefined;

  const formatNumber = (n: number) => {
    return new Intl.NumberFormat("en-US", {
      minimumFractionDigits: decimalPlaces(),
      maximumFractionDigits: decimalPlaces(),
    }).format(n);
  };

  onMount(() => {
    let timer: ReturnType<typeof setTimeout> | undefined;

    const startAnimation = () => {
      let value = dir() === "down" ? local.value : startVal();
      const target = dir() === "down" ? startVal() : local.value;
      let velocity = 0;
      const stiffness = 100;
      const damping = 60;

      function step() {
        const force = -stiffness * (value - target);
        velocity = (velocity + force) * (1 - damping / 100);
        value += velocity;

        if (ref) {
          ref.textContent = formatNumber(value);
        }

        if (Math.abs(value - target) > 0.01 || Math.abs(velocity) > 0.01) {
          rafId = requestAnimationFrame(step);
        } else {
          if (ref) {
            ref.textContent = formatNumber(target);
          }
        }
      }

      rafId = requestAnimationFrame(step);
    };

    if (local.delay && local.delay > 0) {
      timer = setTimeout(startAnimation, local.delay * 1000);
    } else {
      startAnimation();
    }

    onCleanup(() => {
      if (timer) clearTimeout(timer);
      if (rafId) cancelAnimationFrame(rafId);
    });
  });

  return (
    <span
      ref={(el) => {
        ref = el;
      }}
      class={cn("inline-block tracking-wider tabular-nums", local.class)}
      {...rest}
    >
      {formatNumber(startVal())}
    </span>
  );
}
