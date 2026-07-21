export const aiOutputCode = `import { createCompletion, dynamic } from "sugg";
import { execFile, scanPath } from "sugg";

export default createCompletion({
  mycli: {
    commands: {
      deploy: {
        description: "Deploy to environment",
        args: dynamic(async ctx => {
          const out = await execFile("mycli", ["environments", "--list"]);
          return out.trim().split("\\n").map(s => ({ display: s }));
        }),
        options: [
          {
            labels: ["--config"],
            args: dynamic(async ctx => {
              const files = await scanPath(ctx.prefix);
              return files.filter(
                f => f.display.endsWith(".yaml") ||
                     f.display.endsWith(".toml") ||
                     f.display.endsWith(".json") ||
                     f.isDir
              );
            }),
            description: "Path to config file",
          },
          { labels: ["--no-build"], description: "Skip build step" },
          { labels: ["--tag"], args: [], description: "Deployment tag" },
          { labels: ["--rollback"], description: "Rollback on failure" },
          { labels: ["--timeout"], args: [], description: "Timeout (default: 120)" },
        ]
      }
    }
  }
});`;

export const codeSamples = {
  bun: `import { createCompletion, dynamic } from "sugg";
import { execFile, scanPath, cache } from "sugg";

async function getScriptNames() {
  const out = await execFile("bun", ["getcompletes", "z"]);
  return out.trim().split("\\n")
    .filter(l => l.includes("\\t"))
    .map(l => l.split("\\t")[0])
    .map(s => ({ display: s }));
}

export default createCompletion({
  bun: {
    commands: {
      run: {
        description: "Run a script or file",
        args: dynamic(async ctx => {
          let [scripts, files] = await Promise.all([
            cache.get(ctx, 5000, getScriptNames),
            scanPath(ctx.prefix),
          ]);
          return [...scripts, ...files];
        }),
      },
    },
  },
});`,

  git: `import { createCompletion, dynamic } from "sugg";
import { execFile } from "sugg";

async function getBranches(prefix: string) {
  const out = await execFile("git", ["branch", "--format=%(refname:short)"]);
  return out.trim().split("\\n")
    .filter(b => !prefix || b.startsWith(prefix))
    .map(b => ({ display: b }));
}

export default createCompletion({
  git: {
    commands: {
      switch: {
        description: "Switch branches",
        args: dynamic(async ctx => getBranches(ctx.prefix)),
      },
      commit: {
        description: "Record changes",
        options: [
          { labels: ["-m", "--message"], args: [], description: "Commit message" },
          { labels: ["-a", "--all"], description: "Commit all changes" },
          { labels: ["--amend"], description: "Amend last commit" },
        ],
      },
    },
  },
});`,

  npm: `import { createCompletion, dynamic } from "sugg";
import { readJson } from "sugg";

export default createCompletion({
  npm: {
    commands: {
      install: {
        description: "Install packages",
        args: ["package"],
        options: [
          { labels: ["--save-dev"], description: "Save as dev dependency" },
          { labels: ["-g", "--global"], description: "Install globally" },
          { labels: ["--save-exact"], description: "Save exact version" },
        ],
      },
      run: {
        description: "Run a script",
        args: dynamic(async ctx => {
          const pkg = await readJson("package.json");
          return Object.keys(pkg.scripts || {})
            .map(s => ({ display: s }));
        }),
      },
    },
  },
});`,
};
