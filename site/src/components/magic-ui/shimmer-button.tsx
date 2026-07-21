import { type ComponentProps, splitProps } from "solid-js";
import { cn } from "~/lib/utils";

interface ShimmerButtonProps extends ComponentProps<"button"> {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
}

export function ShimmerButton(props: ShimmerButtonProps) {
  const [local, rest] = splitProps(props, [
    "class",
    "shimmerColor",
    "shimmerSize",
    "borderRadius",
    "shimmerDuration",
    "background",
    "children",
  ]);
  return (
    <button
      style={
        {
          "--spread": "90deg",
          "--shimmer-color": local.shimmerColor ?? "#ffffff",
          "--radius": local.borderRadius ?? "100px",
          "--speed": local.shimmerDuration ?? "3s",
          "--cut": local.shimmerSize ?? "0.05em",
          "--bg": local.background ?? "rgba(0, 0, 0, 1)",
        } as Record<string, string>
      }
      class={cn(
        "group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap px-6 py-3 text-white",
        "[border-radius:var(--radius)] border border-white/10 [background:var(--bg)]",
        "transform-gpu transition-transform duration-300 ease-in-out active:translate-y-px",
        local.class,
      )}
      {...rest}
    >
      <div class={cn("-z-30 blur-[2px]", "@container absolute inset-0 overflow-visible")}>
        <div class="absolute inset-0 aspect-[1] h-full w-auto animate-magic-shimmer-slide">
          <div
            class="absolute -inset-full w-auto [translate:0_0] rotate-0 animate-magic-spin-around"
            style={
              {
                background: `conic-gradient(from calc(270deg - (var(--spread) * 0.5)), transparent 0, var(--shimmer-color) var(--spread), transparent var(--spread))`,
              } as Record<string, string>
            }
          />
        </div>
      </div>
      {local.children}
      <div
        class={cn(
          "absolute inset-0 size-full rounded-2xl px-4 py-1.5 text-sm font-medium",
          "shadow-[inset_0_-8px_10px_#ffffff1f]",
          "transform-gpu transition-all duration-300 ease-in-out",
          "group-hover:shadow-[inset_0_-6px_10px_#ffffff3f]",
          "group-active:shadow-[inset_0_-10px_10px_#ffffff3f]",
        )}
      />
      <div
        class={cn(
          "absolute inset-(--cut) -z-20 [border-radius:var(--radius)] [background:var(--bg)]",
        )}
      />
    </button>
  );
}
