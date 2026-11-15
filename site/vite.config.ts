import { resolve } from "node:path";
import tailwindcss from "@tailwindcss/vite";
import solid from "@solidjs/vite-plugin";
import { fileRoutes } from "filesystem-routing/vite";
import { prerender } from "prerender-crawler/vite";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/",
  plugins: [
    solid({
      start: {
        middleware: "./src/middleware.ts",
        // Static export: render each page to one complete document instead of
        // streaming it with <Loading> fallbacks and swap scripts.
        renderMode: "async",
      },
      ssr: true,
      extensions: [".jsx", ".tsx"],
    }),
    fileRoutes({ httpMethods: true, types: true }),
    // Static export: crawl the built server handler and write HTML into
    // dist/client. `/` seeds the crawl; script pages are found through links.
    prerender({
      mode: "static",
      pages: ["/", { path: "/404", filename: "404.html" }],
    }),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "~": resolve("./src"),
    },
  },
  server: {
    port: 5173,
  },
  build: {
    target: "esnext",
  },
  optimizeDeps: {
    exclude: ["wasm/sugg_wasm.js"],
  },
});
