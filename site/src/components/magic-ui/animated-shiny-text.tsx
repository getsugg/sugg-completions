import { type ComponentProps, splitProps } from "solid-js";
import { cn } from "~/lib/utils";

interface AnimatedShinyTextProps extends ComponentProps<"span"> {
  shimmerWidth?: number;
}

export function AnimatedShinyText(props: AnimatedShinyTextProps) {
  const [local, rest] = splitProps(props, ["class", "shimmerWidth", "children"]);
  const w = () => local.shimmerWidth ?? 100;
  return (
    <span
      style={
        {
          "--shiny-width": `${w()}px`,
          background: `linear-gradient(to right, transparent 0%, var(--shiny-color, rgba(255,255,255,0.8)) 50%, transparent 100%)`,
          "background-size": `${w()}px 100%`,
          "background-clip": "text",
          "background-repeat": "no-repeat",
        } as Record<string, string>
      }
      class={cn(
        "mx-auto text-neutral-600/70 dark:text-neutral-400/70",
        "animate-magic-shiny-text",
        "[animation-fill-mode:backwards]",
        local.class,
      )}
      {...rest}
    >
      {local.children}
    </span>
  );
}
