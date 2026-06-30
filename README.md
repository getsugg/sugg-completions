# Sugg Completions

A collection of shell completion scripts powered by [sugg](https://github.com/getsugg/sugg).

Each script in `completions/` defines completions for a CLI tool using sugg's DSL. The included web app at `site/` serves as both a preview browser and a security auditor — it runs sugg's WASM in the browser to extract dynamic behaviors and analyze API usage.

## Repository Structure

```
completions/        Completion scripts (.ts) — single source of truth
site/               Web app for browsing and auditing completions
```

## Adding a Script

Add a `.ts` file to `completions/` and submit a PR. The script list is regenerated automatically in CI.

## Web App

🌐 **Live**: https://getsugg.github.io/sugg-completions/

See [site/README.md](site/README.md) for development setup and deployment instructions.
