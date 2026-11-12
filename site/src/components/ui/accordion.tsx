import type { PolymorphicProps } from "@kobalte/core/polymorphic";
import type { JSX, ValidComponent } from "@solidjs/web";

import * as AccordionPrimitive from "@kobalte/core/accordion";
import { omit } from "solid-js";

import { cn } from "~/lib/utils";

const Accordion = AccordionPrimitive.Root;

type AccordionItemProps = AccordionPrimitive.AccordionItemProps & {
  class?: string | undefined;
};

function AccordionItem(props: PolymorphicProps<"div", AccordionItemProps>) {
  const rest = omit(props as AccordionItemProps, "class");
  return <AccordionPrimitive.Item class={cn("border-b", props.class)} {...rest} />;
}

type AccordionTriggerProps<T extends ValidComponent = "button"> =
  AccordionPrimitive.AccordionTriggerProps<T> & {
    class?: string | undefined;
    children?: JSX.Element;
  };

function AccordionTrigger<T extends ValidComponent = "button">(
  props: PolymorphicProps<T, AccordionTriggerProps<T>>,
) {
  const rest = omit(props as AccordionTriggerProps, "class", "children") as Record<
    string,
    unknown
  >;
  return (
    <AccordionPrimitive.Header class="flex">
      <AccordionPrimitive.Trigger
        class={cn(
          "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-expanded]>svg]:rotate-180",
          props.class,
        )}
        {...rest}
      >
        {props.children}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="size-4 shrink-0 transition-transform duration-200"
        >
          <path d="M6 9l6 6l6 -6" />
        </svg>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

type AccordionContentProps<T extends ValidComponent = "div"> =
  AccordionPrimitive.AccordionContentProps<T> & {
    class?: string | undefined;
    children?: JSX.Element;
  };

function AccordionContent<T extends ValidComponent = "div">(
  props: PolymorphicProps<T, AccordionContentProps<T>>,
) {
  const rest = omit(props as AccordionContentProps, "class", "children") as Record<
    string,
    unknown
  >;
  return (
    <AccordionPrimitive.Content
      class={cn(
        "animate-accordion-up overflow-hidden text-sm transition-all data-[expanded]:animate-accordion-down",
        props.class,
      )}
      {...rest}
    >
      <div class="pb-4 pt-0">{props.children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
