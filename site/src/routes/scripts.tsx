import type { JSX } from "@solidjs/web";
import { ConsoleLayout } from "~/components/ConsoleLayout";

export default function ScriptsLayout(props: { children?: JSX.Element }) {
  return <ConsoleLayout>{props.children}</ConsoleLayout>;
}
