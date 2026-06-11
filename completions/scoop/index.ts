import { exec, scanPath, cache } from "sugg";
import * as t from "virtual:i18n/scoop";

// ─── 动态补全辅助 ─────────────────────────────────────

function stripAnsi(s: string): string {
  // eslint-disable-next-line no-control-regex
  return s.replace(/\u001B\[[0-?]*[ -/]*[@-~]/g, "");
}

async function getInstalledApps(): Promise<Suggestion[]> {
  try {
    const out = await exec("scoop list");
    return out
      .split(/\r?\n/)
      .map((l) => stripAnsi(l).trim())
      .filter((l) => l && !/^installed/i.test(l) && !/^name/i.test(l) && !/^-+/.test(l))
      .map((l) => {
        const name = l.split(/\s+/)[0];
        return name ? { display: name } : null;
      })
      .filter(Boolean) as Suggestion[];
  } catch {
    return [];
  }
}

async function getAvailableApps(): Promise<Suggestion[]> {
  try {
    const out = await exec("scoop search");
    return out
      .split(/\r?\n/)
      .map((l) => stripAnsi(l).trim())
      .filter((l) => l && !/^results/i.test(l) && !/^name/i.test(l) && !/^-+/.test(l))
      .map((l) => {
        const name = l.split(/\s+/)[0];
        const rest = l.slice(name.length).trim();
        return name ? { display: name, description: rest || undefined } : null;
      })
      .filter(Boolean) as Suggestion[];
  } catch {
    return [];
  }
}

async function getShimNames(): Promise<Suggestion[]> {
  try {
    const out = await exec("scoop shim list");
    return out
      .split(/\r?\n/)
      .map((l) => stripAnsi(l).trim())
      .filter((l) => l && !/^name/i.test(l) && !/^-+/.test(l))
      .map((l) => ({ display: l.split(/\s+/)[0] }));
  } catch {
    return [];
  }
}

const allApps = dynamic(async (ctx) => {
  const [installed, available] = await cache.get(ctx, 30000, () =>
    Promise.all([getInstalledApps(), getAvailableApps()]),
  );
  return [...available, ...installed];
});
const installedApps = dynamic(async (ctx) => {
  const apps = await cache.get(ctx, 30000, getInstalledApps);
  return apps ?? [];
});

// ─── 全局选项 ─────────────────────────────────────────

const globalOpts: OptionNode[] = [{ labels: ["-h", "--help"], description: t.opt_help }];

const archOpt: OptionNode = {
  labels: ["-a", "--arch"],
  description: t.opt_arch,
  args: [
    { display: "32bit", description: t.arg_32bit },
    { display: "64bit", description: t.arg_64bit },
    { display: "arm64", description: t.arg_arm64 },
  ],
};

const skipHashOpt: OptionNode = {
  labels: ["-s", "--skip-hash-check"],
  description: t.opt_skip_hash_check,
};

const noUpdateScoopOpt: OptionNode = {
  labels: ["-u", "--no-update-scoop"],
  description: t.opt_no_update_scoop,
};

const noCacheOpt: OptionNode = {
  labels: ["-k", "--no-cache"],
  description: t.opt_no_cache,
};

const globalOpt: OptionNode = {
  labels: ["-g", "--global"],
  description: t.opt_global,
};

const independentOpt: OptionNode = {
  labels: ["-i", "--independent"],
  description: t.opt_independent,
};

const forceOpt: OptionNode = {
  labels: ["-f", "--force"],
  description: t.opt_force,
};

// ─── 顶级命令 ─────────────────────────────────────────

export default createCompletion({
  scoop: {
    description: t.cmd_scoop,
    options: [...globalOpts, { labels: ["-v", "--version"], description: t.opt_version }],
    commands: {
      install: {
        description: t.cmd_install,
        options: [
          ...globalOpts,
          globalOpt,
          independentOpt,
          noCacheOpt,
          skipHashOpt,
          noUpdateScoopOpt,
          archOpt,
        ],
        args: allApps,
      },

      uninstall: {
        description: t.cmd_uninstall,
        options: [
          ...globalOpts,
          globalOpt,
          { labels: ["-p", "--purge"], description: t.opt_purge },
        ],
        args: installedApps,
      },

      update: {
        description: t.cmd_update,
        options: [
          ...globalOpts,
          forceOpt,
          globalOpt,
          independentOpt,
          noCacheOpt,
          skipHashOpt,
          { labels: ["-q", "--quiet"], description: t.opt_quiet },
          { labels: ["-a", "--all"], description: t.opt_all },
        ],
        args: dynamic(async (ctx) => {
          const installed = await cache.get(ctx, 30000, getInstalledApps);
          return [{ display: "*", description: t.arg_update_all }, ...(installed ?? [])];
        }),
      },

      list: {
        description: t.cmd_list,
        options: [...globalOpts],
        args: installedApps,
      },

      search: {
        description: t.cmd_search,
        options: [...globalOpts],
        args: [],
      },

      info: {
        description: t.cmd_info,
        options: [...globalOpts, { labels: ["-v", "--verbose"], description: t.opt_verbose }],
        args: allApps,
      },

      status: {
        description: t.cmd_status,
        options: [...globalOpts, { labels: ["-l", "--local"], description: t.opt_local }],
      },

      cleanup: {
        description: t.cmd_cleanup,
        options: [
          ...globalOpts,
          { labels: ["-a", "--all"], description: t.opt_all },
          globalOpt,
          { labels: ["-k", "--cache"], description: t.opt_cache_clean },
        ],
        args: installedApps,
      },

      cache: {
        description: t.cmd_cache,
        options: [...globalOpts],
        commands: {
          show: {
            description: t.cmd_cache_show,
            options: [...globalOpts],
            args: installedApps,
          },
          rm: {
            description: t.cmd_cache_rm,
            options: [...globalOpts, { labels: ["-a", "--all"], description: t.opt_all }],
            args: installedApps,
          },
        },
      },

      bucket: {
        description: t.cmd_bucket,
        options: [...globalOpts],
        commands: {
          add: {
            description: t.cmd_bucket_add,
            options: [...globalOpts],
            args: dynamic(async (ctx) => {
              const known = await cache.get(ctx, 30000, () =>
                exec("scoop bucket known").then((o) =>
                  o
                    .split(/\r?\n/)
                    .filter(Boolean)
                    .map((l) => ({ display: l.trim() })),
                ),
              );
              return known ?? [];
            }),
          },
          list: {
            description: t.cmd_bucket_list,
            options: [...globalOpts],
          },
          known: {
            description: t.cmd_bucket_known,
            options: [...globalOpts],
          },
          rm: {
            description: t.cmd_bucket_rm,

            options: [...globalOpts],
            args: dynamic(async (ctx) => {
              const b = await cache.get(ctx, 30000, () =>
                exec("scoop bucket list").then((o) =>
                  o
                    .split(/\r?\n/)
                    .map((l) => stripAnsi(l).trim())
                    .filter((l) => l && !/^name/i.test(l) && !/^-+/.test(l))
                    .map((l) => ({ display: l.split(/\s+/)[0] })),
                ),
              );
              return b ?? [];
            }),
          },
        },
      },

      alias: {
        description: t.cmd_alias,
        options: [...globalOpts],
        commands: {
          add: {
            description: t.cmd_alias_add,
            options: [...globalOpts],
            args: [],
          },
          rm: {
            description: t.cmd_alias_rm,

            options: [...globalOpts],
            args: [],
          },
          list: {
            description: t.cmd_alias_list,
            options: [...globalOpts, { labels: ["-v", "--verbose"], description: t.opt_verbose }],
          },
        },
      },

      shim: {
        description: t.cmd_shim,
        options: [...globalOpts],
        commands: {
          add: {
            description: t.cmd_shim_add,
            options: [...globalOpts, globalOpt],
            args: [],
          },
          rm: {
            description: t.cmd_shim_rm,

            options: [...globalOpts, globalOpt],
            args: dynamic(async (ctx) => {
              const s = await cache.get(ctx, 30000, getShimNames);
              return s ?? [];
            }),
          },
          list: {
            description: t.cmd_shim_list,
            options: [...globalOpts, globalOpt],
            args: [],
          },
          info: {
            description: t.cmd_shim_info,
            options: [...globalOpts, globalOpt],
            args: dynamic(async (ctx) => {
              const s = await cache.get(ctx, 30000, getShimNames);
              return s ?? [];
            }),
          },
          alter: {
            description: t.cmd_shim_alter,
            options: [...globalOpts, globalOpt],
            args: dynamic(async (ctx) => {
              const s = await cache.get(ctx, 30000, getShimNames);
              return s ?? [];
            }),
          },
        },
      },

      config: {
        description: t.cmd_config,
        options: [...globalOpts],
        commands: {
          rm: {
            description: t.cmd_config_rm,

            options: [...globalOpts],
            args: [],
          },
        },
        args: [],
      },

      hold: {
        description: t.cmd_hold,
        options: [...globalOpts, globalOpt],
        args: installedApps,
      },

      unhold: {
        description: t.cmd_unhold,
        options: [...globalOpts, globalOpt],
        args: installedApps,
      },

      home: {
        description: t.cmd_home,
        options: [...globalOpts],
        args: installedApps,
      },

      reset: {
        description: t.cmd_reset,
        options: [...globalOpts, { labels: ["-a", "--all"], description: t.opt_all }],
        args: installedApps,
      },

      download: {
        description: t.cmd_download,
        options: [...globalOpts, forceOpt, skipHashOpt, noUpdateScoopOpt, archOpt],
        args: allApps,
      },

      export: {
        description: t.cmd_export,
        options: [...globalOpts, { labels: ["-c", "--config"], description: t.opt_config }],
        args: dynamic(async (ctx) => scanPath(ctx.prefix)),
      },

      import: {
        description: t.cmd_import,
        options: [...globalOpts],
        args: dynamic(async (ctx) => scanPath(ctx.prefix)),
      },

      cat: {
        description: t.cmd_cat,
        options: [...globalOpts],
        args: installedApps,
      },

      checkup: {
        description: t.cmd_checkup,
        options: [...globalOpts],
      },

      create: {
        description: t.cmd_create,
        options: [...globalOpts],
        args: [],
      },

      depends: {
        description: t.cmd_depends,
        options: [...globalOpts],
        args: allApps,
      },

      prefix: {
        description: t.cmd_prefix,
        options: [...globalOpts],
        args: installedApps,
      },

      virustotal: {
        description: t.cmd_virustotal,
        options: [
          ...globalOpts,
          { labels: ["-a", "--all"], description: t.opt_all },
          { labels: ["-s", "--scan"], description: t.opt_scan },
          { labels: ["-n", "--no-depends"], description: t.opt_no_depends },
          noUpdateScoopOpt,
          { labels: ["-p", "--passthru"], description: t.opt_passthru },
        ],
        args: installedApps,
      },

      which: {
        description: t.cmd_which,
        options: [...globalOpts],
        args: dynamic(async (ctx) => {
          const s = await cache.get(ctx, 30000, getShimNames);
          return s ?? [];
        }),
      },

      help: {
        description: t.cmd_help,
        options: [...globalOpts],
        args: [
          "alias",
          "bucket",
          "cache",
          "cat",
          "checkup",
          "cleanup",
          "config",
          "create",
          "depends",
          "download",
          "export",
          "help",
          "hold",
          "home",
          "import",
          "info",
          "install",
          "list",
          "prefix",
          "reset",
          "search",
          "shim",
          "status",
          "unhold",
          "uninstall",
          "update",
          "virustotal",
          "which",
        ],
      },
    },
  },
});
