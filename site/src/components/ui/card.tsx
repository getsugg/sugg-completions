import type { ComponentProps } from "@solidjs/web";
import { omit } from "solid-js";

import { cn } from "~/lib/utils";

function Card(props: ComponentProps<"div">) {
  const rest = omit(props, "class");
  return (
    <div
      class={cn("rounded-lg border bg-card text-card-foreground shadow-sm", props.class)}
      {...rest}
    />
  );
}

function CardHeader(props: ComponentProps<"div">) {
  const rest = omit(props, "class");
  return <div class={cn("flex flex-col space-y-1.5 p-6", props.class)} {...rest} />;
}

function CardTitle(props: ComponentProps<"h3">) {
  const rest = omit(props, "class");
  return (
    <h3 class={cn("text-lg font-semibold leading-none tracking-tight", props.class)} {...rest} />
  );
}

function CardDescription(props: ComponentProps<"p">) {
  const rest = omit(props, "class");
  return <p class={cn("text-sm text-muted-foreground", props.class)} {...rest} />;
}

function CardContent(props: ComponentProps<"div">) {
  const rest = omit(props, "class");
  return <div class={cn("p-6 pt-0", props.class)} {...rest} />;
}

function CardFooter(props: ComponentProps<"div">) {
  const rest = omit(props, "class");
  return <div class={cn("flex items-center p-6 pt-0", props.class)} {...rest} />;
}

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
