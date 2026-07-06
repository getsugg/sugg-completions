import { execFile, cache } from "sugg";
import * as t from "virtual:i18n/vp";
import { getPkgScripts, getPkgDeps, getPkgTestFiles } from "../npm/utils";

async function getScriptNames(): Promise<Suggestion[]> {
  const names = await getPkgScripts();
  return names.map((s) => ({ display: s, description: t.suggestion_script }));
}

async function getInstalledPackages(): Promise<Suggestion[]> {
  const names = await getPkgDeps();
  return names.map((name) => ({ display: name, description: t.suggestion_installed }));
}

async function getGlobalPackages(): Promise<Suggestion[]> {
  return cache.get("global-packages", 5000, async () => {
    const out = await execFile("vp", ["pm", "ls", "-g"]);
    return out
      .trim()
      .split("\n")
      .filter(Boolean)
      .map((name) => ({
        display: name,
        description: t.suggestion_global_installed,
      }));
  });
}

async function getPackagesForContext(ctx: CompletionContext): Promise<Suggestion[]> {
  if (ctx.options["-g"] || ctx.options["--global"]) {
    return getGlobalPackages();
  }
  return getInstalledPackages();
}

const helpOpt = [{ labels: ["-h", "--help"], description: t.opt_help }];

const filterOpts = [
  { labels: ["--filter"], args: [], description: t.opt_filter },
  { labels: ["-w", "--workspace-root"], description: t.opt_workspace_root },
];

const globalOpts = [{ labels: ["-g", "--global"], description: t.opt_global }];

const envCommands: Record<string, CommandNode> = {
  setup: {
    description: t.env_cmd_setup,
    options: [
      ...helpOpt,
      { labels: ["--refresh"], description: t.opt_refresh },
      { labels: ["--env-only"], description: t.opt_env_only },
    ],
  },
  on: { description: t.env_cmd_on, options: [...helpOpt] },
  off: { description: t.env_cmd_off, options: [...helpOpt] },
  print: { description: t.env_cmd_print, options: [...helpOpt] },
  default: { description: t.env_cmd_default, options: [...helpOpt], args: [] },
  pin: {
    description: t.env_cmd_pin,
    options: [
      ...helpOpt,
      { labels: ["--unpin"], description: t.opt_unpin },
      { labels: ["--no-install"], description: t.opt_no_install },
      { labels: ["--force"], description: t.opt_force },
      { labels: ["--target"], args: [], description: t.opt_target },
    ],
    args: [],
  },
  unpin: {
    description: t.env_cmd_unpin,
    options: [...helpOpt, { labels: ["--target"], args: [], description: t.opt_target_remove }],
  },
  use: {
    description: t.env_cmd_use,
    options: [
      ...helpOpt,
      { labels: ["--unset"], description: t.opt_unset },
      { labels: ["--no-install"], description: t.opt_no_install_auto },
      { labels: ["--silent-if-unchanged"], description: t.opt_silent_if_unchanged },
    ],
    args: [],
  },
  install: { aliases: ["i"], description: t.env_cmd_install, options: [...helpOpt], args: [] },
  uninstall: {
    aliases: ["uni"],
    description: t.env_cmd_uninstall,
    options: [...helpOpt],
    args: [],
  },
  current: {
    description: t.env_cmd_current,
    options: [...helpOpt, { labels: ["--json"], description: t.opt_json }],
  },
  doctor: { description: t.env_cmd_doctor, options: [...helpOpt] },
  which: { description: t.env_cmd_which, options: [...helpOpt], args: ["node", "npm", "npx"] },
  list: {
    aliases: ["ls"],
    description: t.env_cmd_list,
    options: [...helpOpt, { labels: ["--json"], description: t.opt_json }],
  },
  "list-remote": {
    aliases: ["ls-remote"],
    description: t.env_cmd_list_remote,
    options: [
      ...helpOpt,
      { labels: ["--lts"], description: t.opt_lts },
      { labels: ["--all"], description: t.opt_all },
      { labels: ["--json"], description: t.opt_json },
      { labels: ["--sort"], args: [], description: t.opt_sort },
    ],
    args: [],
  },
  exec: {
    aliases: ["run"],
    description: t.env_cmd_exec,
    options: [
      ...helpOpt,
      { labels: ["--node"], args: [], description: t.opt_node },
      { labels: ["--npm"], args: [], description: t.opt_npm },
    ],
    args: { count: Infinity, items: [] },
  },
};

const testCommands: Record<string, CommandNode> = {
  run: { description: t.test_cmd_run, options: [...helpOpt], args: [] },
  watch: { description: t.test_cmd_watch, options: [...helpOpt], args: [] },
  dev: { description: t.test_cmd_dev, options: [...helpOpt], args: [] },
  related: { description: t.test_cmd_related, options: [...helpOpt], args: [] },
  bench: { description: t.test_cmd_bench, options: [...helpOpt], args: [] },
  init: { description: t.test_cmd_init, options: [...helpOpt], args: [] },
  list: { description: t.test_cmd_list, options: [...helpOpt], args: [] },
};

const pmStageCommands: Record<string, CommandNode> = {
  publish: { description: t.stage_cmd_publish, options: [...helpOpt] },
  list: { aliases: ["ls"], description: t.stage_cmd_list, options: [...helpOpt] },
  view: { description: t.stage_cmd_view, options: [...helpOpt] },
  download: { description: t.stage_cmd_download, options: [...helpOpt] },
  approve: { description: t.stage_cmd_approve, options: [...helpOpt] },
  reject: { description: t.stage_cmd_reject, options: [...helpOpt] },
};

const pmOwnerCommands: Record<string, CommandNode> = {
  list: { aliases: ["ls"], description: t.owner_cmd_list, options: [...helpOpt] },
  add: { description: t.owner_cmd_add, options: [...helpOpt] },
  rm: { description: t.owner_cmd_rm, options: [...helpOpt] },
};

const pmCacheCommands: Record<string, CommandNode> = {
  dir: { description: t.pm_cache_cmd_dir, options: [...helpOpt] },
  path: { description: t.pm_cache_cmd_path, options: [...helpOpt] },
  clean: { description: t.pm_cache_cmd_clean, options: [...helpOpt] },
};

const pmConfigCommands: Record<string, CommandNode> = {
  list: { description: t.config_cmd_list, options: [...helpOpt] },
  get: { description: t.config_cmd_get, options: [...helpOpt] },
  set: { description: t.config_cmd_set, options: [...helpOpt] },
  delete: { description: t.config_cmd_delete, options: [...helpOpt] },
};

const pmTokenCommands: Record<string, CommandNode> = {
  list: { aliases: ["ls"], description: t.token_cmd_list, options: [...helpOpt] },
  create: { description: t.token_cmd_create, options: [...helpOpt] },
  revoke: { description: t.token_cmd_revoke, options: [...helpOpt] },
};

const pmDistTagCommands: Record<string, CommandNode> = {
  list: { aliases: ["ls"], description: t.dist_tag_cmd_list, options: [...helpOpt] },
  add: { description: t.dist_tag_cmd_add, options: [...helpOpt] },
  rm: { description: t.dist_tag_cmd_rm, options: [...helpOpt] },
};

const pmCommands: Record<string, CommandNode> = {
  "approve-builds": {
    description: t.pm_cmd_approve_builds,
    options: [...helpOpt, { labels: ["--all"], description: t.opt_all_pending }],
    args: [],
  },
  prune: {
    description: t.pm_cmd_prune,
    options: [
      ...helpOpt,
      { labels: ["--prod"], description: t.opt_remove_dev },
      { labels: ["--no-optional"], description: t.opt_remove_optional },
    ],
  },
  pack: {
    description: t.pm_cmd_pack,
    options: [
      ...helpOpt,
      { labels: ["-r", "--recursive"], description: t.opt_recursive },
      { labels: ["--filter"], args: [], description: t.opt_filter_pkg },
      { labels: ["--out"], args: [], description: t.opt_out },
      { labels: ["--pack-destination"], args: [], description: t.opt_pack_dest },
      { labels: ["--pack-gzip-level"], args: [], description: t.opt_gzip_level },
      { labels: ["--json"], description: t.opt_json_out },
    ],
  },
  publish: {
    description: t.pm_cmd_publish,
    options: [
      ...helpOpt,
      { labels: ["--dry-run"], description: t.opt_dry_run },
      { labels: ["--tag"], args: [], description: t.opt_tag },
      { labels: ["--access"], args: [], description: t.opt_access },
      { labels: ["--otp"], args: [], description: t.opt_otp },
      { labels: ["--no-git-checks"], description: t.opt_no_git_checks },
      { labels: ["--publish-branch"], args: [], description: t.opt_publish_branch },
      { labels: ["--report-summary"], description: t.opt_report_summary },
      { labels: ["--provenance"], description: t.opt_provenance },
      { labels: ["--force"], description: t.opt_force_publish },
      { labels: ["--json"], description: t.opt_json_out },
      { labels: ["-r", "--recursive"], description: t.opt_recursive_publish },
      { labels: ["--filter"], args: [], description: t.opt_filter_pkg },
    ],
    args: [],
  },
  stage: { description: t.pm_cmd_stage, commands: pmStageCommands, options: [...helpOpt] },
  owner: {
    aliases: ["author"],
    description: t.pm_cmd_owner,
    commands: pmOwnerCommands,
    options: [...helpOpt],
  },
  cache: { description: t.pm_cmd_cache, commands: pmCacheCommands, options: [...helpOpt] },
  config: {
    aliases: ["c"],
    description: t.pm_cmd_config,
    commands: pmConfigCommands,
    options: [...helpOpt],
  },
  login: {
    aliases: ["adduser"],
    description: t.pm_cmd_login,
    options: [
      ...helpOpt,
      { labels: ["--registry"], args: [], description: t.opt_registry },
      { labels: ["--scope"], args: [], description: t.opt_scope },
    ],
  },
  logout: {
    description: t.pm_cmd_logout,
    options: [
      ...helpOpt,
      { labels: ["--registry"], args: [], description: t.opt_registry },
      { labels: ["--scope"], args: [], description: t.opt_scope },
    ],
  },
  whoami: {
    description: t.pm_cmd_whoami,
    options: [...helpOpt, { labels: ["--registry"], args: [], description: t.opt_registry }],
  },
  token: { description: t.pm_cmd_token, commands: pmTokenCommands, options: [...helpOpt] },
  audit: {
    description: t.pm_cmd_audit,
    options: [
      ...helpOpt,
      { labels: ["--fix"], description: t.opt_fix },
      { labels: ["--json"], description: t.opt_json_out },
      { labels: ["--level"], args: [], description: t.opt_level },
      { labels: ["--production"], description: t.opt_production },
    ],
  },
  "dist-tag": {
    description: t.pm_cmd_dist_tag,
    commands: pmDistTagCommands,
    options: [...helpOpt],
  },
  deprecate: {
    description: t.pm_cmd_deprecate,
    options: [
      ...helpOpt,
      { labels: ["--otp"], args: [], description: t.opt_otp },
      { labels: ["--registry"], args: [], description: t.opt_registry },
    ],
    args: [],
  },
  search: {
    description: t.pm_cmd_search,
    options: [
      ...helpOpt,
      { labels: ["--json"], description: t.opt_json_out },
      { labels: ["--long"], description: t.opt_long },
      { labels: ["--registry"], args: [], description: t.opt_registry },
    ],
    args: [],
  },
  fund: {
    description: t.pm_cmd_fund,
    options: [...helpOpt, { labels: ["--json"], description: t.opt_json_out }],
  },
  ping: {
    description: t.pm_cmd_ping,
    options: [...helpOpt, { labels: ["--registry"], args: [], description: t.opt_registry }],
  },
  rebuild: { aliases: ["rb"], description: t.cmd_rebuild, options: [...helpOpt], args: [] },
  list: {
    aliases: ["ls"],
    description: t.pm_cmd_list,
    options: [...helpOpt, ...globalOpts],
    args: [],
  },
  info: { aliases: ["view", "show"], description: t.pm_cmd_info, options: [...helpOpt], args: [] },
};

export default createCompletion({
  vp: {
    description: t.desc,
    options: [{ labels: ["-V", "--version"], description: t.opt_version }, ...helpOpt],
    commands: {
      create: {
        description: t.cmd_create,
        options: [
          ...helpOpt,
          { labels: ["--directory"], args: [], description: t.create_opt_directory },
          { labels: ["--agent"], args: [], description: t.create_opt_agent },
          { labels: ["--no-agent"], description: t.create_opt_no_agent },
          { labels: ["--editor"], args: [], description: t.create_opt_editor },
          { labels: ["--no-editor"], description: t.create_opt_no_editor },
          { labels: ["--git"], description: t.create_opt_git },
          { labels: ["--no-git"], description: t.create_opt_no_git },
          { labels: ["--hooks"], description: t.create_opt_hooks },
          { labels: ["--no-hooks"], description: t.create_opt_no_hooks },
          { labels: ["--package-manager"], args: [], description: t.create_opt_pm },
          { labels: ["--approve-builds"], description: t.create_opt_approve_builds },
          { labels: ["--verbose"], description: t.create_opt_verbose },
          { labels: ["--no-interactive"], description: t.create_opt_no_interactive },
          { labels: ["--list"], description: t.create_opt_list },
        ],
        args: [],
      },
      migrate: {
        description: t.cmd_migrate,
        options: [
          ...helpOpt,
          { labels: ["--agent"], args: [], description: t.migrate_opt_agent },
          { labels: ["--no-agent"], description: t.migrate_opt_no_agent },
          { labels: ["--editor"], args: [], description: t.migrate_opt_editor },
          { labels: ["--no-editor"], description: t.migrate_opt_no_editor },
          { labels: ["--hooks"], description: t.migrate_opt_hooks },
          { labels: ["--no-hooks"], description: t.migrate_opt_no_hooks },
          { labels: ["--no-interactive"], description: t.migrate_opt_no_interactive },
        ],
        args: [],
      },
      config: {
        description: t.cmd_config,
        options: [
          ...helpOpt,
          { labels: ["--hooks-dir"], args: [], description: t.config_opt_hooks_dir },
          { labels: ["--no-hooks"], description: t.config_opt_no_hooks },
          { labels: ["--no-agent"], description: t.config_opt_no_agent },
        ],
      },
      staged: {
        description: t.cmd_staged,
        options: [
          ...helpOpt,
          { labels: ["--allow-empty"], description: t.staged_opt_allow_empty },
          { labels: ["-p", "--concurrent"], args: [], description: t.staged_opt_concurrent },
          { labels: ["--continue-on-error"], description: t.staged_opt_continue },
          { labels: ["--cwd"], args: [], description: t.staged_opt_cwd },
          { labels: ["-d", "--debug"], description: t.staged_opt_debug },
          { labels: ["--diff"], args: [], description: t.staged_opt_diff },
          { labels: ["--diff-filter"], args: [], description: t.staged_opt_diff_filter },
          { labels: ["--fail-on-changes"], description: t.staged_opt_fail_changes },
          { labels: ["--hide-partially-staged"], description: t.staged_opt_hide_partial },
          { labels: ["--hide-unstaged"], description: t.staged_opt_hide_unstaged },
          { labels: ["--no-stash"], description: t.staged_opt_no_stash },
          { labels: ["-q", "--quiet"], description: t.staged_opt_quiet },
          { labels: ["-r", "--relative"], description: t.staged_opt_relative },
          { labels: ["--revert"], description: t.staged_opt_revert },
          { labels: ["-v", "--verbose"], description: t.staged_opt_verbose },
        ],
      },
      install: {
        aliases: ["i"],
        description: t.cmd_install,
        options: [
          ...helpOpt,
          ...globalOpts,
          { labels: ["-P", "--prod"], description: t.install_opt_prod },
          { labels: ["-D", "--dev"], description: t.install_opt_dev },
          { labels: ["--no-optional"], description: t.install_opt_no_optional },
          { labels: ["--frozen-lockfile"], description: t.install_opt_frozen },
          { labels: ["--no-frozen-lockfile"], description: t.install_opt_no_frozen },
          { labels: ["--lockfile-only"], description: t.install_opt_lockfile_only },
          { labels: ["--prefer-offline"], description: t.install_opt_prefer_offline },
          { labels: ["--offline"], description: t.install_opt_offline },
          { labels: ["-f", "--force"], description: t.install_opt_force },
          { labels: ["--ignore-scripts"], description: t.install_opt_ignore_scripts },
          { labels: ["--no-lockfile"], description: t.install_opt_no_lockfile },
          { labels: ["--fix-lockfile"], description: t.install_opt_fix_lockfile },
          { labels: ["--shamefully-hoist"], description: t.install_opt_hoist },
          { labels: ["--resolution-only"], description: t.install_opt_resolution },
          { labels: ["--silent"], description: t.install_opt_silent },
          ...filterOpts,
          { labels: ["-E", "--save-exact"], description: t.install_opt_save_exact },
          { labels: ["--save-peer"], description: t.install_opt_save_peer },
          { labels: ["-O", "--save-optional"], description: t.install_opt_save_optional },
          { labels: ["--save-catalog"], description: t.install_opt_save_catalog },
          { labels: ["--node"], args: [], description: t.install_opt_node },
          { labels: ["--concurrency"], args: [], description: t.install_opt_concurrency },
        ],
        args: { count: Infinity, items: dynamic(getPackagesForContext) },
      },
      env: { description: t.cmd_env, commands: envCommands, options: [...helpOpt] },
      dev: {
        description: t.cmd_dev,
        options: [
          ...helpOpt,
          { labels: ["--host"], args: [], description: t.dev_opt_host },
          { labels: ["--port"], args: [], description: t.dev_opt_port },
          { labels: ["--open"], args: [], description: t.dev_opt_open },
          { labels: ["--strictPort"], description: t.dev_opt_strict_port },
          { labels: ["-c", "--config"], args: [], description: t.dev_opt_config },
          { labels: ["--base"], args: [], description: t.dev_opt_base },
          { labels: ["-m", "--mode"], args: [], description: t.dev_opt_mode },
        ],
        args: [],
      },
      check: {
        description: t.cmd_check,
        options: [
          ...helpOpt,
          { labels: ["--fix"], description: t.check_opt_fix },
          { labels: ["--no-fmt"], description: t.check_opt_no_fmt },
          { labels: ["--no-lint"], description: t.check_opt_no_lint },
          { labels: ["--no-error-on-unmatched-pattern"], description: t.check_opt_no_error },
        ],
        args: [],
      },
      lint: {
        description: t.cmd_lint,
        options: [
          ...helpOpt,
          { labels: ["--tsconfig"], args: [], description: t.lint_opt_tsconfig },
          { labels: ["--fix"], description: t.lint_opt_fix },
          { labels: ["--type-aware"], description: t.lint_opt_type_aware },
          { labels: ["--import-plugin"], description: t.lint_opt_import_plugin },
          { labels: ["--rules"], description: t.lint_opt_rules },
        ],
        args: [],
      },
      fmt: {
        aliases: ["format"],
        description: t.cmd_fmt,
        options: [
          ...helpOpt,
          { labels: ["--write"], description: t.fmt_opt_write },
          { labels: ["--check"], description: t.fmt_opt_check },
          { labels: ["--list-different"], description: t.fmt_opt_list_diff },
          { labels: ["--ignore-path"], args: [], description: t.fmt_opt_ignore_path },
          { labels: ["--threads"], args: [], description: t.fmt_opt_threads },
        ],
        args: [],
      },
      test: {
        description: t.cmd_test,
        commands: testCommands,
        options: [
          ...helpOpt,
          { labels: ["-c", "--config"], args: [], description: t.test_opt_config },
          { labels: ["-w", "--watch"], description: t.test_opt_watch },
          { labels: ["-t", "--testNamePattern"], args: [], description: t.test_opt_name_pattern },
          { labels: ["--ui"], description: t.test_opt_ui },
          { labels: ["--coverage"], description: t.test_opt_coverage },
          { labels: ["--reporter"], args: [], description: t.test_opt_reporter },
        ],
        args: dynamic(getPkgTestFiles),
      },
      run: {
        description: t.cmd_run,
        options: [
          ...helpOpt,
          { labels: ["-r", "--recursive"], description: t.run_opt_recursive },
          { labels: ["-t", "--transitive"], description: t.run_opt_transitive },
          ...filterOpts,
          { labels: ["--fail-if-no-match"], description: t.run_opt_fail_no_match },
          { labels: ["--ignore-depends-on"], description: t.run_opt_ignore_depends },
          { labels: ["-v", "--verbose"], description: t.run_opt_verbose },
          { labels: ["--cache"], description: t.run_opt_cache },
          { labels: ["--no-cache"], description: t.run_opt_no_cache },
          { labels: ["--log"], args: [], description: t.run_opt_log },
          { labels: ["--concurrency-limit"], args: [], description: t.run_opt_concurrency },
          { labels: ["--parallel"], description: t.run_opt_parallel },
          { labels: ["--last-details"], description: t.run_opt_last },
        ],
        args: dynamic(getScriptNames),
      },
      exec: {
        description: t.cmd_exec,
        options: [
          ...helpOpt,
          { labels: ["-r", "--recursive"], description: t.exec_opt_recursive },
          { labels: ["-t", "--transitive"], description: t.exec_opt_transitive },
          ...filterOpts,
          { labels: ["--fail-if-no-match"], description: t.exec_opt_fail_no_match },
          { labels: ["-c", "--shell-mode"], description: t.exec_opt_shell },
          { labels: ["--parallel"], description: t.exec_opt_parallel },
          { labels: ["--reverse"], description: t.exec_opt_reverse },
          { labels: ["--resume-from"], args: [], description: t.exec_opt_resume },
          { labels: ["--report-summary"], description: t.exec_opt_summary },
        ],
        args: [],
      },
      node: {
        description: t.cmd_node,
        options: [
          ...helpOpt,
          { labels: ["--node"], args: [], description: t.node_opt_node },
          { labels: ["--npm"], args: [], description: t.node_opt_npm },
        ],
        args: { count: Infinity, items: [] },
      },
      dlx: {
        description: t.cmd_dlx,
        options: [
          ...helpOpt,
          { labels: ["-p", "--package"], args: [], description: t.dlx_opt_package },
          { labels: ["-c", "--shell-mode"], description: t.dlx_opt_shell },
          { labels: ["-s", "--silent"], description: t.dlx_opt_silent },
        ],
        args: { count: Infinity, items: [] },
      },
      cache: {
        description: t.cmd_cache,
        commands: {
          clean: { description: t.cache_cmd_clean, options: [...helpOpt] },
        },
        options: [...helpOpt],
      },
      build: {
        description: t.cmd_build,
        options: [
          ...helpOpt,
          { labels: ["--target"], args: [], description: t.build_opt_target },
          { labels: ["--outDir"], args: [], description: t.build_opt_outdir },
          { labels: ["--sourcemap"], args: [], description: t.build_opt_sourcemap },
          { labels: ["--minify"], args: [], description: t.build_opt_minify },
          { labels: ["-w", "--watch"], description: t.build_opt_watch },
          { labels: ["-c", "--config"], args: [], description: t.build_opt_config },
          { labels: ["-m", "--mode"], args: [], description: t.build_opt_mode },
        ],
        args: [],
      },
      pack: {
        description: t.cmd_pack,
        options: [
          ...helpOpt,
          { labels: ["-f", "--format"], args: [], description: t.pack_opt_format },
          { labels: ["-d", "--out-dir"], args: [], description: t.pack_opt_outdir },
          { labels: ["--sourcemap"], description: t.pack_opt_sourcemap },
          { labels: ["--dts"], description: t.pack_opt_dts },
          { labels: ["--minify"], description: t.pack_opt_minify },
          { labels: ["-w", "--watch"], args: [], description: t.pack_opt_watch },
        ],
        args: [],
      },
      preview: {
        description: t.cmd_preview,
        options: [
          ...helpOpt,
          { labels: ["--host"], args: [], description: t.preview_opt_host },
          { labels: ["--port"], args: [], description: t.preview_opt_port },
          { labels: ["--strictPort"], description: t.preview_opt_strict_port },
          { labels: ["--open"], args: [], description: t.preview_opt_open },
          { labels: ["--outDir"], args: [], description: t.preview_opt_outdir },
          { labels: ["-c", "--config"], args: [], description: t.preview_opt_config },
          { labels: ["-m", "--mode"], args: [], description: t.preview_opt_mode },
        ],
        args: [],
      },
      add: {
        description: t.cmd_add,
        options: [
          ...helpOpt,
          { labels: ["-P", "--save-prod"], description: t.add_opt_save_prod },
          { labels: ["-D", "--save-dev"], description: t.add_opt_save_dev },
          { labels: ["--save-peer"], description: t.add_opt_save_peer },
          { labels: ["-O", "--save-optional"], description: t.add_opt_save_optional },
          { labels: ["-E", "--save-exact"], description: t.add_opt_save_exact },
          { labels: ["--save-catalog-name"], args: [], description: t.add_opt_catalog_name },
          { labels: ["--save-catalog"], description: t.add_opt_catalog },
          { labels: ["--allow-build"], args: [], description: t.add_opt_allow_build },
          ...filterOpts,
          { labels: ["--workspace"], description: t.add_opt_workspace },
          ...globalOpts,
          { labels: ["--node"], args: [], description: t.add_opt_node },
          { labels: ["--concurrency"], args: [], description: t.add_opt_concurrency },
        ],
        args: { count: Infinity, items: dynamic(getPackagesForContext) },
      },
      remove: {
        aliases: ["rm", "un", "uninstall"],
        description: t.cmd_remove,
        options: [
          ...helpOpt,
          { labels: ["-D", "--save-dev"], description: t.remove_opt_dev },
          { labels: ["-O", "--save-optional"], description: t.remove_opt_optional },
          { labels: ["-P", "--save-prod"], description: t.remove_opt_prod },
          ...filterOpts,
          { labels: ["-r", "--recursive"], description: t.remove_opt_recursive },
          ...globalOpts,
          { labels: ["--dry-run"], description: t.remove_opt_dry_run },
        ],
        args: { count: Infinity, items: dynamic(getPackagesForContext) },
      },
      update: {
        aliases: ["up"],
        description: t.cmd_update,
        options: [
          ...helpOpt,
          { labels: ["-L", "--latest"], description: t.update_opt_latest },
          ...globalOpts,
          { labels: ["--concurrency"], args: [], description: t.update_opt_concurrency },
          { labels: ["--reinstall-node-mismatch"], description: t.update_opt_reinstall },
          { labels: ["--ignore-node-mismatch"], description: t.update_opt_ignore },
          { labels: ["-r", "--recursive"], description: t.update_opt_recursive },
          ...filterOpts,
          { labels: ["-D", "--dev"], description: t.update_opt_dev },
          { labels: ["-P", "--prod"], description: t.update_opt_prod },
          { labels: ["-i", "--interactive"], description: t.update_opt_interactive },
          { labels: ["--no-optional"], description: t.update_opt_no_optional },
          { labels: ["--no-save"], description: t.update_opt_no_save },
          { labels: ["--workspace"], description: t.update_opt_workspace },
        ],
        args: { count: Infinity, items: dynamic(getPackagesForContext) },
      },
      dedupe: {
        description: t.cmd_dedupe,
        options: [...helpOpt, { labels: ["--check"], description: t.dedupe_opt_check }],
      },
      outdated: {
        description: t.cmd_outdated,
        options: [
          ...helpOpt,
          { labels: ["--long"], description: t.outdated_opt_long },
          { labels: ["--format"], args: [], description: t.outdated_opt_format },
          { labels: ["-r", "--recursive"], description: t.outdated_opt_recursive },
          ...filterOpts,
          { labels: ["-P", "--prod"], description: t.outdated_opt_prod },
          { labels: ["-D", "--dev"], description: t.outdated_opt_dev },
          { labels: ["--no-optional"], description: t.outdated_opt_no_optional },
          { labels: ["--compatible"], description: t.outdated_opt_compatible },
          { labels: ["--sort-by"], args: [], description: t.outdated_opt_sort },
          ...globalOpts,
          { labels: ["--concurrency"], args: [], description: t.outdated_opt_concurrency },
        ],
        args: { count: Infinity, items: dynamic(getPackagesForContext) },
      },
      list: {
        aliases: ["ls"],
        description: t.cmd_list,
        options: [
          ...helpOpt,
          { labels: ["--depth"], args: [], description: t.list_opt_depth },
          { labels: ["--json"], description: t.list_opt_json },
          { labels: ["--long"], description: t.list_opt_long },
          { labels: ["--parseable"], description: t.list_opt_parseable },
          { labels: ["-P", "--prod"], description: t.list_opt_prod },
          { labels: ["-D", "--dev"], description: t.list_opt_dev },
          { labels: ["--no-optional"], description: t.list_opt_no_optional },
          { labels: ["--exclude-peers"], description: t.list_opt_exclude_peers },
          { labels: ["--only-projects"], description: t.list_opt_only_projects },
          { labels: ["--find-by"], args: [], description: t.list_opt_find_by },
          { labels: ["-r", "--recursive"], description: t.list_opt_recursive },
          ...filterOpts,
          ...globalOpts,
        ],
        args: { count: Infinity, items: dynamic(getPackagesForContext) },
      },
      why: {
        aliases: ["explain"],
        description: t.cmd_why,
        options: [
          ...helpOpt,
          { labels: ["--json"], description: t.why_opt_json },
          { labels: ["--long"], description: t.why_opt_long },
          { labels: ["--parseable"], description: t.why_opt_parseable },
          { labels: ["-r", "--recursive"], description: t.why_opt_recursive },
          ...filterOpts,
          { labels: ["-P", "--prod"], description: t.why_opt_prod },
          { labels: ["-D", "--dev"], description: t.why_opt_dev },
          { labels: ["--depth"], args: [], description: t.why_opt_depth },
          { labels: ["--no-optional"], description: t.why_opt_no_optional },
          { labels: ["--exclude-peers"], description: t.why_opt_exclude_peers },
          { labels: ["--find-by"], args: [], description: t.why_opt_find_by },
        ],
        args: { count: Infinity, items: dynamic(getInstalledPackages) },
      },
      info: {
        aliases: ["view", "show"],
        description: t.cmd_info,
        options: [...helpOpt, { labels: ["--json"], description: t.info_opt_json }],
        args: [],
      },
      link: {
        aliases: ["ln"],
        description: t.cmd_link,
        options: [...helpOpt],
        args: { count: Infinity, items: dynamic(getInstalledPackages) },
      },
      unlink: {
        description: t.cmd_unlink,
        options: [...helpOpt, { labels: ["-r", "--recursive"], description: t.opt_recursive }],
        args: { count: Infinity, items: dynamic(getInstalledPackages) },
      },
      rebuild: {
        description: t.cmd_rebuild,
        options: [...helpOpt],
        args: { count: Infinity, items: dynamic(getInstalledPackages) },
      },
      pm: { description: t.cmd_pm, commands: pmCommands, options: [...helpOpt] },
      upgrade: {
        description: t.cmd_upgrade,
        options: [
          ...helpOpt,
          { labels: ["--tag"], args: [], description: t.upgrade_opt_tag },
          { labels: ["--check"], description: t.upgrade_opt_check },
          { labels: ["--rollback"], description: t.upgrade_opt_rollback },
          { labels: ["--force"], description: t.upgrade_opt_force },
          { labels: ["--silent"], description: t.upgrade_opt_silent },
          { labels: ["--registry"], args: [], description: t.upgrade_opt_registry },
        ],
        args: [],
      },
      implode: {
        description: t.cmd_implode,
        options: [...helpOpt, { labels: ["-y", "--yes"], description: t.implode_opt_yes }],
      },
    },
  },
});
