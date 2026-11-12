import type { PolymorphicProps } from "@kobalte/core/polymorphic";
import type { ValidComponent } from "@solidjs/web";

import * as TabsPrimitive from "@kobalte/core/tabs";
import { omit } from "solid-js";

import { cn } from "~/lib/utils";

const Tabs = TabsPrimitive.Root;

type TabsListProps<T extends ValidComponent = "div"> = TabsPrimitive.TabsListProps<T> & {
  class?: string | undefined;
};

function TabsList<T extends ValidComponent = "div">(props: PolymorphicProps<T, TabsListProps<T>>) {
  const rest = omit(props as TabsListProps, "class") as Record<string, unknown>;
  return (
    <TabsPrimitive.List
      class={cn(
        "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
        props.class,
      )}
      {...rest}
    />
  );
}

type TabsTriggerProps<T extends ValidComponent = "button"> = TabsPrimitive.TabsTriggerProps<T> & {
  class?: string | undefined;
};

function TabsTrigger<T extends ValidComponent = "button">(
  props: PolymorphicProps<T, TabsTriggerProps<T>>,
) {
  const rest = omit(props as TabsTriggerProps, "class");
  return (
    <TabsPrimitive.Trigger
      class={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-b-[3px] border-transparent",
        props.class,
      )}
      {...rest}
    />
  );
}

type TabsContentProps<T extends ValidComponent = "div"> = TabsPrimitive.TabsContentProps<T> & {
  class?: string | undefined;
};

function TabsContent<T extends ValidComponent = "div">(
  props: PolymorphicProps<T, TabsContentProps<T>>,
) {
  const rest = omit(props as TabsContentProps, "class");
  return (
    <TabsPrimitive.Content
      class={cn(
        "ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        props.class,
      )}
      {...rest}
    />
  );
}

type TabsIndicatorProps<T extends ValidComponent = "div"> = TabsPrimitive.TabsIndicatorProps<T> & {
  class?: string | undefined;
};

function TabsIndicator<T extends ValidComponent = "div">(
  props: PolymorphicProps<T, TabsIndicatorProps<T>>,
) {
  const rest = omit(props as TabsIndicatorProps, "class") as Record<string, unknown>;
  return (
    <TabsPrimitive.Indicator
      class={cn(
        "duration-250 absolute transition-all data-[orientation=horizontal]:-bottom-px data-[orientation=vertical]:-right-px data-[orientation=horizontal]:h-0.5 data-[orientation=vertical]:w-0.5",
        props.class,
      )}
      {...rest}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent, TabsIndicator };
