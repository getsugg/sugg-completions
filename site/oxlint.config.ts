import { defineConfig } from "oxlint";
import path from "node:path";

const dir = import.meta.dirname;

export default defineConfig({
  ignorePatterns: ["wasm/", "tests/", "src/components/ui/", "public/generated/"],
  options: { typeAware: true, typeCheck: true },
  jsPlugins: ["oxlint-tailwindcss", "eslint-plugin-solid"],
  settings: {
    tailwindcss: {
      entryPoint: path.resolve(dir, "src/App.css"),
    },
  },
  rules: {
    "tailwindcss/enforce-canonical": "warn",
    "tailwindcss/no-unknown-classes": [
      "error",
      {
        allowlist: [
          "line",
          "output",
          "prompt",
          "highlight",
          "term-window",
          "term-bar",
          "term-dot",
          "term-title",
          "term-body",
          "heroglow",
          "ai-section",
          "shimmer-btn",
          "mask-intersect",
          "border-(length:--border-beam-width)",
        ],
      },
    ],
    "tailwindcss/no-deprecated-classes": "error",
    "tailwindcss/no-conflicting-classes": "error",

    "solid/jsx-no-duplicate-props": "error",
    "solid/jsx-no-undef": "error",
    "solid/jsx-uses-vars": "error",
    "solid/no-unknown-namespaces": "error",
    "solid/no-innerhtml": "error",
    "solid/jsx-no-script-url": "error",
    "solid/components-return-once": "warn",
    "solid/no-destructure": "error",
    "solid/prefer-for": "error",
    "solid/reactivity": "warn",
    "solid/event-handlers": "warn",
    "solid/imports": "warn",
    "solid/style-prop": "warn",
    "solid/no-react-deps": "warn",
    "solid/no-react-specific-props": "warn",
    "solid/self-closing-comp": "warn",
  },
});
