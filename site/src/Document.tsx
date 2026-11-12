import type { ParentProps } from "solid-js";
import { HydrationScript } from "@solidjs/web";
import "~/styles/global.css";

export default function Document(props: ParentProps) {
  return (
    <html lang="en" class="dark">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Sugg Completions</title>
        <meta
          name="description"
          content="Completion scripts for the Sugg command engine, with a browser-side security audit."
        />
        <link rel="icon" type="image/svg+xml" href="/logo-favicon.svg" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <HydrationScript />
      </head>
      <body>{props.children}</body>
    </html>
  );
}
