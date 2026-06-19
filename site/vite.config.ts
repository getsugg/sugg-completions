import path from "path";
import { defineConfig } from "vite-plus";
import tailwindcss from "@tailwindcss/vite";
import solid from "vite-plugin-solid";
import { execSync } from "child_process";
import { playwright } from "@voidzero-dev/vite-plus-test/browser-playwright";
import devtools from "solid-devtools/vite";

export default defineConfig({
  staged: {
    "*": "vp check --fix",
  },
  fmt: {
    ignorePatterns: ["src/components/ui/**"],
  },
  lint: {
    ignorePatterns: ["wasm/", "tests/", "src/components/ui/"],
    options: { typeAware: true, typeCheck: true },
    jsPlugins: ["oxlint-tailwindcss"],
    settings: {
      tailwindcss: {
        entryPoint: "src/App.css",
      },
    },
    rules: {
      "tailwindcss/enforce-canonical": "warn",
      "tailwindcss/no-unknown-classes": "error",
      "tailwindcss/no-deprecated-classes": "error",
      "tailwindcss/no-conflicting-classes": "error",
    },
  },
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
    tailwindcss(),
    solid(),
    {
      name: "generate-scripts",
      buildStart() {
        execSync("bun scripts/generate-scripts.ts", { stdio: "inherit" });
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
