# Sugg Completions — Web App

A browser-based preview and security audit tool for sugg completion scripts. WASM runs in the browser to extract dynamic behaviors and analyze API usage.

## Tech Stack

- **Framework**: SolidJS + Vite+
- **Styling**: Tailwind CSS v4 + solid-ui
- **Code Highlighting**: Shiki v4 + @shikijs/twoslash
- **Browser TypeScript**: twoslash-cdn
- **UI Components**: @kobalte/core + class-variance-authority
- **Parser**: Self-compiled WASM from sugg's `crates/sugg-wasm/`
- **Deployment**: GitHub Pages (static, zero backend)

## Getting Started

```bash
cd site
bun install
bun run dev
```

Open http://localhost:5173.

## Adding a Script

Add a `.ts` file to `completions/` (project root). The script list regenerates automatically on dev/build.

Scripts with `dynamic()` functions will automatically show extracted results in the audit panel.

## Build & Deploy

```bash
cd site
bun run build      # prebuild hook runs generate-scripts automatically
git push main      # GitHub Actions deploys to Pages
```

## Updating WASM

After changes to sugg's `crates/sugg-ast/`:

```bash
# In sugg repo root
wasm-pack build crates/sugg-wasm --target web --no-opt --out-dir ../../wasm-pkg

# Copy to this repo
cp ../sugg/wasm-pkg/* site/wasm/
```

## Auto Analysis

When a script is opened, the analysis runs automatically:

1. **Static scan** — `scanSource()` reads the script source and marks known API calls as `safe` or `unsafe`
2. **WASM extraction** — `extract()` replaces `dynamic()` calls with annotated objects
3. **API analysis** — `analyzeApis()` lists each dynamic function and its sugg API usage

The bottom panel shows results in three tabs:

| Tab         | Description                                                                                           |
| ----------- | ----------------------------------------------------------------------------------------------------- |
| **Summary** | Per-line annotation list with 🔴 UNSAFE / 🟢 SAFE markers. Click a line to scroll to it in the source |
| **Dynamic** | The extracted pure-JS dynamic code                                                                    |
| **Static**  | The modified source with `dynamic()` calls replaced by `{__is_dynamic, id}` markers                   |

Risk classification: `exec`/`execFile`/`fetch` → UNSAFE, `readFile`/`readJson`/`scanPath`/`cache`/`ui` → SAFE.
