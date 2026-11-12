import type { ComponentProps } from "@solidjs/web";
import { onSettled, omit } from "solid-js";

import { cn } from "~/lib/utils";

interface NumberTickerProps extends ComponentProps<"span"> {
  value: number;
  startValue?: number;
  direction?: "up" | "down";
  delay?: number;
  decimalPlaces?: number;
}

export function NumberTicker(props: NumberTickerProps) {
  const rest = omit(props, "class", "value", "startValue", "direction", "delay", "decimalPlaces");
  const dir = () => props.direction ?? "up";
  const startVal = () => props.startValue ?? 0;
  const decimalPlaces = () => props.decimalPlaces ?? 0;
  let ref: HTMLSpanElement | undefined;
  let rafId: number | undefined;

  const formatNumber = (n: number) => {
    return new Intl.NumberFormat("en-US", {
      minimumFractionDigits: decimalPlaces(),
      maximumFractionDigits: decimalPlaces(),
    }).format(n);
  };

  onSettled(() => {
    let timer: ReturnType<typeof setTimeout> | undefined;

    const startAnimation = () => {
      let value = dir() === "down" ? props.value : startVal();
      const target = dir() === "down" ? startVal() : props.value;
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

    const delay = props.delay ?? 0;
    if (delay > 0) {
      timer = setTimeout(startAnimation, delay * 1000);
    } else {
      startAnimation();
    }

    return () => {
      if (timer) clearTimeout(timer);
      if (rafId) cancelAnimationFrame(rafId);
    };
  });

  return (
    <span
      ref={(el) => {
        ref = el;
      }}
      class={cn("inline-block tracking-wider tabular-nums", props.class)}
      {...rest}
    >
      {formatNumber(startVal())}
    </span>
  );
}
