import type { ComponentProps } from "@solidjs/web";
import { omit } from "solid-js";

import { cn } from "~/lib/utils";

interface AnimatedShinyTextProps extends ComponentProps<"span"> {
  shimmerWidth?: number;
}

export function AnimatedShinyText(props: AnimatedShinyTextProps) {
  const rest = omit(props, "class", "shimmerWidth", "children");
  const width = () => props.shimmerWidth ?? 100;
  return (
    <span
      style={
        {
          "--shiny-width": `${width()}px`,
          background: `linear-gradient(to right, transparent 0%, var(--shiny-color, rgba(255,255,255,0.8)) 50%, transparent 100%)`,
          "background-size": `${width()}px 100%`,
          "background-clip": "text",
          "background-repeat": "no-repeat",
        } as Record<string, string>
      }
      class={cn(
        "mx-auto text-neutral-600/70 dark:text-neutral-400/70",
        "animate-magic-shiny-text",
        "[animation-fill-mode:backwards]",
        props.class,
      )}
      {...rest}
    >
      {props.children}
    </span>
  );
}
