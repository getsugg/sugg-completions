import path from "path";
import { readFileSync, writeFileSync, rmSync } from "fs";
import { fileURLToPath, pathToFileURL } from "url";
import { defineConfig, type Plugin, type PluginOption } from "vite-plus";
import tailwindcss from "@tailwindcss/vite";
import solid from "vite-plugin-solid";
import { execSync } from "child_process";
import { playwright } from "vitest/browser-playwright";
import devtools from "solid-devtools/vite";
import lint from "./oxlint.config";
import fmt from "./oxfmt.config";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

function prerenderLanding(): Plugin {
  return {
    name: "prerender-landing",
    apply: "build",
    async closeBundle() {
      const stamp = Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
      const ssgOut = path.resolve(__dirname, `node_modules/.vite-ssg-temp/${stamp}`);
      const ssgEntry = path.resolve(__dirname, "src/ssg-entry.tsx");

      try {
        const { build } = await import("vite");

        await build({
          root: __dirname,
          configFile: false,
          build: {
            ssr: ssgEntry,
            outDir: ssgOut,
            minify: false,
            rollupOptions: {
              output: { entryFileNames: "ssg-entry.mjs", format: "esm" },
            },
          },
          plugins: [solid({ ssr: true })],
          resolve: {
            alias: { "~": path.resolve(__dirname, "./src") },
          },
        });

        const entryUrl = pathToFileURL(path.resolve(ssgOut, "ssg-entry.mjs")).href;
        const { renderLanding } = await import(entryUrl);
        const appHtml = renderLanding();

        const distIndex = path.resolve(__dirname, "dist", "index.html");
        const template = readFileSync(distIndex, "utf-8");
        const finalHtml = template.replace('<div id="root">', `<div id="root">${appHtml}`);
        writeFileSync(distIndex, finalHtml);

        console.log(`  ✅ Landing page pre-rendered (${appHtml.length} chars)`);
      } catch (err) {
        console.warn(
          "  ⚠️  Landing page pre-render skipped:",
          err instanceof Error ? err.message : err,
        );
      } finally {
        rmSync(ssgOut, { recursive: true, force: true });
      }
    },
  };
}

export default defineConfig({
  staged: {
    "*": "vp check --fix",
  },
  fmt,
  lint,
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [
    devtools({
      locator: {
        targetIDE: "vscode",
        jsxLocation: true,
        componentLocation: true,
      },
    }),
    tailwindcss() as PluginOption,
    solid(),
    prerenderLanding(),
    {
      name: "generate-scripts",
      buildStart() {
        execSync("bun scripts/generate.ts", { stdio: "inherit" });
      },
    },
  ],
  base: "./",
  build: {
    target: "esnext",
  },
  optimizeDeps: {
    exclude: ["wasm/sugg_wasm.js"],
  },
  test: {
    browser: {
      enabled: true,
      provider: playwright(),
      instances: [
        {
          browser: "chromium",
          viewport: { width: 1280, height: 720 },
        },
      ],
    },
    include: ["tests/**/*.visual.test.{ts,tsx}"],
  },
});
