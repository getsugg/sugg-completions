import path from "path";
import { defineConfig } from "vite-plus";
import tailwindcss from "@tailwindcss/vite";
import solid from "vite-plugin-solid";
import { execSync } from "child_process";
import { playwright } from "@voidzero-dev/vite-plus-test/browser-playwright";

export default defineConfig({
  staged: {
    "*": "vp check --fix",
  },
  fmt: {},
  lint: {
    ignorePatterns: ["wasm/", "tests/"],
    options: { typeAware: true, typeCheck: true },
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [
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
