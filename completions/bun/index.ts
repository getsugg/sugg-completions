import { execFile, scanPath, cache } from "sugg";
import * as t from "virtual:i18n/bun";
import { getPkgDeps, getPkgTestFiles } from "../npm/utils";

async function getCompletes(type: "z" | "a" | "b"): Promise<string[]> {
  const out = await execFile("bun", ["getcompletes", type]);
  if (type === "z") {
    return out
      .trim()
      .split("\n")
      .filter((line) => line.includes("\t"))
      .map((line) => line.split("\t")[0]);
  } else {
    return out.trim().split(/\s+/).filter(Boolean);
  }
}

async function getScriptNames(): Promise<Suggestion[]> {
  const scripts = await getCompletes("z");
  return scripts.map((s) => ({ display: s, description: t.suggestion_script }));
}

async function getBinNames(): Promise<Suggestion[]> {
  const bins = await getCompletes("b");
  return bins.map((b) => ({ display: b, description: t.suggestion_package_bin }));
}

async function getScriptFiles(ctx: CompletionContext) {
  const allFiles = await scanPath(ctx.prefix);
  const jsTsFiles = allFiles.filter(
    (f) => /\.(ts|js|tsx|jsx|mjs|cjs)$/i.test(f.display) || f.isDir,
  );
  return jsTsFiles;
}

async function getInstalledPackages(path?: string): Promise<Suggestion[]> {
  const fetcher = async () => {
    const names = await getPkgDeps();
    return names.map((name) => ({
      display: name,
      description: t.suggestion_installed,
    }));
  };
  return path ? cache.get(path, 5000, fetcher) : fetcher();
}

async function getGlobalPackages(): Promise<Suggestion[]> {
  return cache.get("global-packages", 5000, async () => {
    const out = await execFile("bun", ["pm", "ls", "-g"]);
    const lines = out.trim().split("\n");
    const packages = lines
      .slice(1)
      .map((line) => line.replace(/^[├└][─ ]{2,}\s+/, "").trim())
      .filter(Boolean)
      .map((name) => name.replace(/@[^@]+$/, ""))
      .filter((name) => name.length > 0);
    return packages.map((name) => ({
      display: name,
      description: t.suggestion_global_installed,
    }));
  });
}

async function getAddPackages(ctx: CompletionContext): Promise<Suggestion[]> {
  const out = await execFile("bun", ["getcompletes", "a", ctx.prefix]);
  const names = out.trim().split(/\s+/).filter(Boolean);
  return names.map((name) => ({
    display: name,
    description: t.suggestion_package_from_registry,
  }));
}

const commonGlobalOpts: OptionNode[] = [
  { labels: ["--watch"], description: t.option_watch },
  { labels: ["--hot"], description: t.option_hot },
  { labels: ["--smol"], description: t.option_smol },
  { labels: ["--no-clear-screen"], description: t.option_no_clear_screen },
  { labels: ["-r", "--preload", "--require", "--import"], args: [], description: t.option_preload },
  { labels: ["--inspect"], args: [], description: t.option_inspect },
  { labels: ["--inspect-wait"], args: [], description: t.option_inspect_wait },
  { labels: ["--inspect-brk"], args: [], description: t.option_inspect_brk },
  { labels: ["--cpu-prof"], description: t.option_cpu_prof },
  { labels: ["--cpu-prof-name"], args: [], description: t.option_cpu_prof_name },
  { labels: ["--cpu-prof-dir"], args: [], description: t.option_cpu_prof_dir },
  { labels: ["--cpu-prof-md"], description: t.option_cpu_prof_md },
  { labels: ["--cpu-prof-interval"], args: [], description: t.option_cpu_prof_interval },
  { labels: ["--heap-prof"], description: t.option_heap_prof },
  { labels: ["--heap-prof-name"], args: [], description: t.option_heap_prof_name },
  { labels: ["--heap-prof-dir"], args: [], description: t.option_heap_prof_dir },
  { labels: ["--heap-prof-md"], description: t.option_heap_prof_md },
  { labels: ["--if-present"], description: t.option_if_present },
  { labels: ["--no-install"], description: t.option_no_install },
  { labels: ["--install"], args: [], description: t.option_install },
  { labels: ["-i"], description: t.option_i },
  { labels: ["-e", "--eval"], args: [], description: t.option_eval },
  { labels: ["-p", "--print"], args: [], description: t.option_print },
  { labels: ["--prefer-offline"], description: t.option_prefer_offline },
  { labels: ["--prefer-latest"], description: t.option_prefer_latest },
  { labels: ["--port"], args: [], description: t.option_port },
  { labels: ["--conditions"], args: [], description: t.option_conditions },
  { labels: ["--fetch-preconnect"], args: [], description: t.option_fetch_preconnect },
  { labels: ["--max-http-header-size"], args: [], description: t.option_max_http_header_size },
  { labels: ["--dns-result-order"], args: [], description: t.option_dns_result_order },
  { labels: ["--expose-gc"], description: t.option_expose_gc },
  { labels: ["--no-deprecation"], description: t.option_no_deprecation },
  { labels: ["--throw-deprecation"], description: t.option_throw_deprecation },
  { labels: ["--title"], args: [], description: t.option_title },
  { labels: ["--zero-fill-buffers"], description: t.option_zero_fill_buffers },
  { labels: ["--use-system-ca"], description: t.option_use_system_ca },
  { labels: ["--use-openssl-ca"], description: t.option_use_openssl_ca },
  { labels: ["--use-bundled-ca"], description: t.option_use_bundled_ca },
  { labels: ["--redis-preconnect"], description: t.option_redis_preconnect },
  { labels: ["--sql-preconnect"], description: t.option_sql_preconnect },
  { labels: ["--no-addons"], description: t.option_no_addons },
  { labels: ["--unhandled-rejections"], args: [], description: t.option_unhandled_rejections },
  { labels: ["--console-depth"], args: [], description: t.option_console_depth },
  { labels: ["--user-agent"], args: [], description: t.option_user_agent },
  { labels: ["--cron-title"], args: [], description: t.option_cron_title },
  { labels: ["--cron-period"], args: [], description: t.option_cron_period },
  { labels: ["--silent"], description: t.option_silent },
  { labels: ["--elide-lines"], args: [], description: t.option_elide_lines },
  { labels: ["-v", "--version"], description: t.option_version },
  { labels: ["--revision"], description: t.option_revision },
  { labels: ["-F", "--filter"], args: [], description: t.option_filter },
  { labels: ["-b", "--bun"], description: t.option_bun },
  { labels: ["--shell"], args: [], description: t.option_shell },
  { labels: ["--workspaces"], description: t.option_workspaces },
  { labels: ["--parallel"], description: t.option_parallel },
  { labels: ["--sequential"], description: t.option_sequential },
  { labels: ["--no-exit-on-error"], description: t.option_no_exit_on_error },
  { labels: ["--env-file"], args: [], description: t.option_env_file },
  { labels: ["--no-env-file"], description: t.option_no_env_file },
  { labels: ["--cwd"], args: [], description: t.option_cwd },
  { labels: ["-c", "--config"], args: [], description: t.option_config },
  { labels: ["-h", "--help"], description: t.option_help },
];

const testOptions: OptionNode[] = [
  { labels: ["--timeout"], args: [], description: t.test_option_timeout },
  { labels: ["-u", "--update-snapshots"], description: t.test_option_update_snapshots },
  { labels: ["--rerun-each"], args: [], description: t.test_option_rerun_each },
  { labels: ["--retry"], args: [], description: t.test_option_retry },
  { labels: ["--todo"], description: t.test_option_todo },
  { labels: ["--only"], description: t.test_option_only },
  { labels: ["--pass-with-no-tests"], description: t.test_option_pass_with_no_tests },
  { labels: ["--concurrent"], description: t.test_option_concurrent },
  { labels: ["--randomize"], description: t.test_option_randomize },
  { labels: ["--seed"], args: [], description: t.test_option_seed },
  { labels: ["--coverage"], description: t.test_option_coverage },
  { labels: ["--coverage-reporter"], args: [], description: t.test_option_coverage_reporter },
  { labels: ["--coverage-dir"], args: [], description: t.test_option_coverage_dir },
  { labels: ["--bail"], args: [], description: t.test_option_bail },
  { labels: ["-t", "--test-name-pattern"], args: [], description: t.test_option_test_name_pattern },
  { labels: ["--reporter"], args: [], description: t.test_option_reporter },
  { labels: ["--reporter-outfile"], args: [], description: t.test_option_reporter_outfile },
  { labels: ["--dots"], description: t.test_option_dots },
  { labels: ["--only-failures"], description: t.test_option_only_failures },
  { labels: ["--max-concurrency"], args: [], description: t.test_option_max_concurrency },
  { labels: ["--path-ignore-patterns"], args: [], description: t.test_option_path_ignore_patterns },
  { labels: ["--changed"], args: [], description: t.test_option_changed },
  { labels: ["--isolate"], description: t.test_option_isolate },
  { labels: ["--parallel"], args: [], description: t.test_option_parallel },
  { labels: ["--parallel-delay"], args: [], description: t.test_option_parallel_delay },
  { labels: ["--shard"], args: [], description: t.test_option_shard },
  { labels: ["--test-worker"], description: t.test_option_test_worker },
];

const runSpecificOpts: OptionNode[] = [
  { labels: ["--main-fields"], args: [], description: t.run_option_main_fields },
  { labels: ["--preserve-symlinks"], description: t.run_option_preserve_symlinks },
  { labels: ["--preserve-symlinks-main"], description: t.run_option_preserve_symlinks_main },
  { labels: ["--extension-order"], args: [], description: t.run_option_extension_order },
  { labels: ["--tsconfig-override"], args: [], description: t.run_option_tsconfig_override },
  { labels: ["-d", "--define"], args: [], description: t.run_option_define },
  { labels: ["--drop"], args: [], description: t.run_option_drop },
  { labels: ["--feature"], args: [], description: t.run_option_feature },
  { labels: ["-l", "--loader"], args: [], description: t.run_option_loader },
  { labels: ["--no-macros"], description: t.run_option_no_macros },
  { labels: ["--jsx-factory"], args: [], description: t.run_option_jsx_factory },
  { labels: ["--jsx-fragment"], args: [], description: t.run_option_jsx_fragment },
  { labels: ["--jsx-import-source"], args: [], description: t.run_option_jsx_import_source },
  { labels: ["--jsx-runtime"], args: [], description: t.run_option_jsx_runtime },
  { labels: ["--jsx-side-effects"], description: t.run_option_jsx_side_effects },
  { labels: ["--ignore-dce-annotations"], description: t.run_option_ignore_dce_annotations },
];

const xOptions: OptionNode[] = [
  { labels: ["-p", "--package"], args: [], description: t.x_option_package },
  { labels: ["--verbose"], description: t.x_option_verbose },
];

const installOptions: OptionNode[] = [
  { labels: ["-p", "--production"], description: t.install_option_production },
  { labels: ["-y", "--yarn"], description: t.install_option_yarn },
  { labels: ["--no-save"], description: t.install_option_no_save },
  { labels: ["--save"], description: t.install_option_save },
  { labels: ["--ca"], args: [], description: t.install_option_ca },
  { labels: ["--cafile"], args: [], description: t.install_option_cafile },
  { labels: ["--dry-run"], description: t.install_option_dry_run },
  { labels: ["--frozen-lockfile"], description: t.install_option_frozen_lockfile },
  { labels: ["-f", "--force"], description: t.install_option_force },
  { labels: ["--cache-dir"], args: [], description: t.install_option_cache_dir },
  { labels: ["--no-cache"], description: t.install_option_no_cache },
  { labels: ["--verbose"], description: t.install_option_verbose },
  { labels: ["--quiet"], description: t.install_option_quiet },
  { labels: ["--no-progress"], description: t.install_option_no_progress },
  { labels: ["--no-summary"], description: t.install_option_no_summary },
  { labels: ["--no-verify"], description: t.install_option_no_verify },
  { labels: ["--ignore-scripts"], description: t.install_option_ignore_scripts },
  { labels: ["--trust"], description: t.install_option_trust },
  { labels: ["-g", "--global"], description: t.install_option_global },
  { labels: ["--backend"], args: [], description: t.install_option_backend },
  { labels: ["--registry"], args: [], description: t.install_option_registry },
  { labels: ["--concurrent-scripts"], args: [], description: t.install_option_concurrent_scripts },
  {
    labels: ["--network-concurrency"],
    args: [],
    description: t.install_option_network_concurrency,
  },
  { labels: ["--save-text-lockfile"], description: t.install_option_save_text_lockfile },
  { labels: ["--omit"], args: [], description: t.install_option_omit },
  { labels: ["--lockfile-only"], description: t.install_option_lockfile_only },
  { labels: ["--linker"], args: [], description: t.install_option_linker },
  {
    labels: ["--minimum-release-age"],
    args: [],
    description: t.install_option_minimum_release_age,
  },
  { labels: ["--cpu"], args: [], description: t.install_option_cpu },
  { labels: ["--os"], args: [], description: t.install_option_os },
  { labels: ["-d", "--dev"], description: t.install_option_dev },
  { labels: ["--optional"], description: t.install_option_optional },
  { labels: ["--peer"], description: t.install_option_peer },
  { labels: ["-E", "--exact"], description: t.install_option_exact },
  { labels: ["-a", "--analyze"], description: t.install_option_analyze },
  { labels: ["--only-missing"], description: t.install_option_only_missing },
  { labels: ["--filter"], args: [], description: t.install_option_filter },
];

const updateOptions: OptionNode[] = [
  { labels: ["--latest"], description: t.update_option_latest },
  { labels: ["-i", "--interactive"], description: t.update_option_interactive },
  { labels: ["-r", "--recursive"], description: t.update_option_recursive },
];

const auditOptions: OptionNode[] = [
  { labels: ["--json"], description: t.audit_option_json },
  { labels: ["--audit-level"], args: [], description: t.audit_option_audit_level },
  { labels: ["--ignore"], args: [], description: t.audit_option_ignore },
];

const outdatedOptions: OptionNode[] = [
  { labels: ["-r", "--recursive"], description: t.outdated_option_recursive },
];

const buildOptions: OptionNode[] = [
  { labels: ["--production"], description: t.build_option_production },
  { labels: ["--compile"], description: t.build_option_compile },
  { labels: ["--compile-exec-argv"], args: [], description: t.build_option_compile_exec_argv },
  { labels: ["--compile-autoload-dotenv"], description: t.build_option_compile_autoload_dotenv },
  {
    labels: ["--no-compile-autoload-dotenv"],
    description: t.build_option_no_compile_autoload_dotenv,
  },
  { labels: ["--compile-autoload-bunfig"], description: t.build_option_compile_autoload_bunfig },
  {
    labels: ["--no-compile-autoload-bunfig"],
    description: t.build_option_no_compile_autoload_bunfig,
  },
  {
    labels: ["--compile-autoload-tsconfig"],
    description: t.build_option_compile_autoload_tsconfig,
  },
  {
    labels: ["--no-compile-autoload-tsconfig"],
    description: t.build_option_no_compile_autoload_tsconfig,
  },
  {
    labels: ["--compile-autoload-package-json"],
    description: t.build_option_compile_autoload_package_json,
  },
  {
    labels: ["--no-compile-autoload-package-json"],
    description: t.build_option_no_compile_autoload_package_json,
  },
  {
    labels: ["--compile-executable-path"],
    args: [],
    description: t.build_option_compile_executable_path,
  },
  { labels: ["--bytecode"], description: t.build_option_bytecode },
  { labels: ["--target"], args: [], description: t.build_option_target },
  { labels: ["--outdir"], args: [], description: t.build_option_outdir },
  { labels: ["--outfile"], args: [], description: t.build_option_outfile },
  { labels: ["--metafile"], args: [], description: t.build_option_metafile },
  { labels: ["--metafile-md"], args: [], description: t.build_option_metafile_md },
  { labels: ["--sourcemap"], args: [], description: t.build_option_sourcemap },
  { labels: ["--banner"], args: [], description: t.build_option_banner },
  { labels: ["--footer"], args: [], description: t.build_option_footer },
  { labels: ["--format"], args: [], description: t.build_option_format },
  { labels: ["--root"], args: [], description: t.build_option_root },
  { labels: ["--splitting"], description: t.build_option_splitting },
  { labels: ["--public-path"], args: [], description: t.build_option_public_path },
  { labels: ["-e", "--external"], args: [], description: t.build_option_external },
  { labels: ["--allow-unresolved"], args: [], description: t.build_option_allow_unresolved },
  { labels: ["--reject-unresolved"], description: t.build_option_reject_unresolved },
  { labels: ["--packages"], args: [], description: t.build_option_packages },
  { labels: ["--entry-naming"], args: [], description: t.build_option_entry_naming },
  { labels: ["--chunk-naming"], args: [], description: t.build_option_chunk_naming },
  { labels: ["--asset-naming"], args: [], description: t.build_option_asset_naming },
  { labels: ["--react-fast-refresh"], description: t.build_option_react_fast_refresh },
  { labels: ["--no-bundle"], description: t.build_option_no_bundle },
  { labels: ["--emit-dce-annotations"], description: t.build_option_emit_dce_annotations },
  { labels: ["--minify"], description: t.build_option_minify },
  { labels: ["--minify-syntax"], description: t.build_option_minify_syntax },
  { labels: ["--minify-whitespace"], description: t.build_option_minify_whitespace },
  { labels: ["--minify-identifiers"], description: t.build_option_minify_identifiers },
  { labels: ["--keep-names"], description: t.build_option_keep_names },
  { labels: ["--css-chunking"], description: t.build_option_css_chunking },
  { labels: ["--app"], description: t.build_option_app },
  { labels: ["--server-components"], description: t.build_option_server_components },
  { labels: ["--env"], args: [], description: t.build_option_env },
  { labels: ["--windows-hide-console"], description: t.build_option_windows_hide_console },
  { labels: ["--windows-icon"], args: [], description: t.build_option_windows_icon },
  { labels: ["--windows-title"], args: [], description: t.build_option_windows_title },
  { labels: ["--windows-publisher"], args: [], description: t.build_option_windows_publisher },
  { labels: ["--windows-version"], args: [], description: t.build_option_windows_version },
  { labels: ["--windows-description"], args: [], description: t.build_option_windows_description },
  { labels: ["--windows-copyright"], args: [], description: t.build_option_windows_copyright },
];

const initOptions: OptionNode[] = [
  { labels: ["-y", "--yes"], description: t.init_option_yes },
  { labels: ["-m", "--minimal"], description: t.init_option_minimal },
  { labels: ["-r", "--react"], description: t.init_option_react },
  { labels: ["--react=tailwind"], description: t.init_option_react_tailwind },
  { labels: ["--react=shadcn"], description: t.init_option_react_shadcn },
];

const createOptions: OptionNode[] = [
  { labels: ["-h", "--help"], description: t.create_option_help },
];

const patchOptions: OptionNode[] = [
  { labels: ["--commit"], args: [], description: t.patch_option_commit },
  { labels: ["--patches-dir"], args: [], description: t.patch_option_patches_dir },
];

const pmSubCommands: Record<string, CommandNode> = {
  scan: { description: t.pm_scan_desc, options: [...commonGlobalOpts] },
  pack: {
    description: t.pm_pack_desc,
    options: [
      ...commonGlobalOpts,
      { labels: ["--dry-run"], description: t.install_option_dry_run },
      { labels: ["--destination"], args: [], description: t.pm_pack_option_destination },
      { labels: ["--filename"], args: [], description: t.pm_pack_option_filename },
      { labels: ["--ignore-scripts"], description: t.pm_pack_option_ignore_scripts },
      { labels: ["--gzip-level"], args: [], description: t.pm_pack_option_gzip_level },
      { labels: ["--quiet"], description: t.pm_pack_option_quiet },
    ],
  },
  bin: {
    description: t.pm_bin_desc,
    options: [...commonGlobalOpts, { labels: ["-g"], description: t.pm_bin_option_g }],
  },
  list: {
    description: t.pm_list_desc,
    options: [...commonGlobalOpts, { labels: ["--all"], description: t.pm_list_option_all }],
  },
  why: {
    description: t.pm_why_desc,
    args: dynamic(async (ctx) => getInstalledPackages(ctx.path)),
    options: [...commonGlobalOpts],
  },
  whoami: { description: t.pm_whoami_desc, options: [...commonGlobalOpts] },
  view: { description: t.pm_view_desc, args: [], options: [...commonGlobalOpts] },
  version: {
    description: t.pm_version_desc,
    args: [
      "patch",
      "minor",
      "major",
      "prepatch",
      "preminor",
      "premajor",
      "prerelease",
      "from-git",
    ].map((v) => ({
      display: v,
      description: t.pm_version_increment,
    })),
    options: [...commonGlobalOpts],
  },
  pkg: {
    description: t.pm_pkg_desc,
    args: ["get", "set", "delete", "fix"],
    options: [...commonGlobalOpts],
  },
  hash: { description: t.pm_hash_desc, options: [...commonGlobalOpts] },
  "hash-string": { description: t.pm_hash_string_desc, options: [...commonGlobalOpts] },
  "hash-print": { description: t.pm_hash_print_desc, options: [...commonGlobalOpts] },
  cache: {
    description: t.pm_cache_desc,
    commands: {
      rm: { description: t.pm_cache_rm_desc, options: [...commonGlobalOpts] },
    },
  },
  migrate: { description: t.pm_migrate_desc, options: [...commonGlobalOpts] },
  untrusted: { description: t.pm_untrusted_desc, options: [...commonGlobalOpts] },
  trust: {
    description: t.pm_trust_desc,
    args: dynamic(async (ctx) => getInstalledPackages(ctx.path)),
    options: [...commonGlobalOpts, { labels: ["--all"], description: t.pm_trust_option_all }],
  },
  "default-trusted": { description: t.pm_default_trusted_desc, options: [...commonGlobalOpts] },
};

const bunCommands: Record<string, CommandNode> = {
  run: {
    description: t.cmd_run_desc,
    args: dynamic(async (ctx) => {
      let [[scripts, bins], files] = await Promise.all([
        cache.get(ctx, 5000, () => Promise.all([getScriptNames(), getBinNames()])),
        getScriptFiles(ctx),
      ]);
      const hasMatches =
        ctx.prefix === "" ||
        scripts.some((s) => s.display.startsWith(ctx.prefix)) ||
        bins.some((b) => b.display.startsWith(ctx.prefix));
      if (hasMatches) {
        if (ctx.prefix === "") {
          files = files.filter((f) => !f.isDir);
        }
        files = files.map((f) => ({
          ...f,
          description: t.suggestion_file,
        }));
      }
      return [...scripts, ...files, ...bins];
    }),
    options: [...commonGlobalOpts, ...runSpecificOpts],
  },
  test: {
    description: t.cmd_test_desc,
    args: { count: Infinity, items: dynamic(async (ctx) => getPkgTestFiles(ctx)) },
    options: [...commonGlobalOpts, ...testOptions],
  },
  x: {
    aliases: ["bunx"],
    description: t.cmd_x_desc,
    args: [], // 包名+参数，用户自由输入
    options: [...commonGlobalOpts, ...xOptions],
  },
  repl: {
    description: t.cmd_repl_desc,
    options: [...commonGlobalOpts],
  },
  exec: {
    description: t.cmd_exec_desc,
    args: [],
    options: [...commonGlobalOpts],
  },
  install: {
    aliases: ["i"],
    description: t.cmd_install_desc,
    args: { count: Infinity, items: dynamic(async (ctx) => getAddPackages(ctx)) },
    options: [...commonGlobalOpts, ...installOptions],
  },
  add: {
    aliases: ["a"],
    description: t.cmd_add_desc,
    args: { count: Infinity, items: dynamic(async (ctx) => getAddPackages(ctx)) },
    options: [...commonGlobalOpts, ...installOptions],
  },
  remove: {
    aliases: ["rm", "r"],
    description: t.cmd_remove_desc,
    args: {
      count: Infinity,
      items: dynamic(async (ctx) => {
        if (ctx.options["-g"] === true || ctx.options["--global"] === true) {
          return getGlobalPackages();
        }
        return getInstalledPackages(ctx.path);
      }),
    },
    options: [...commonGlobalOpts, ...installOptions],
  },
  update: {
    description: t.cmd_update_desc,
    args: { count: Infinity, items: dynamic(async (ctx) => getInstalledPackages(ctx.path)) },
    options: [...commonGlobalOpts, ...installOptions, ...updateOptions],
  },
  audit: {
    description: t.cmd_audit_desc,
    options: [...commonGlobalOpts, ...auditOptions],
  },
  outdated: {
    description: t.cmd_outdated_desc,
    options: [...commonGlobalOpts, ...installOptions, ...outdatedOptions],
  },
  link: {
    description: t.cmd_link_desc,
    args: [],
    options: [...commonGlobalOpts, ...installOptions],
  },
  unlink: {
    description: t.cmd_unlink_desc,
    options: [...commonGlobalOpts, ...installOptions],
  },
  publish: {
    description: t.cmd_publish_desc,
    args: [],
    options: [
      ...commonGlobalOpts,
      ...installOptions,
      { labels: ["--access"], args: [], description: t.publish_option_access },
      { labels: ["--tag"], args: [], description: t.publish_option_tag },
      { labels: ["--otp"], args: [], description: t.publish_option_otp },
      { labels: ["--auth-type"], args: [], description: t.publish_option_auth_type },
      { labels: ["--gzip-level"], args: [], description: t.publish_option_gzip_level },
      { labels: ["--tolerate-republish"], description: t.publish_option_tolerate_republish },
    ],
  },
  patch: {
    description: t.cmd_patch_desc,
    args: [],
    options: [...commonGlobalOpts, ...installOptions, ...patchOptions],
  },
  pm: {
    description: t.cmd_pm_desc,
    commands: pmSubCommands,
    options: [...commonGlobalOpts],
  },
  info: {
    description: t.cmd_info_desc,
    args: [],
    options: [
      ...commonGlobalOpts,
      ...installOptions,
      { labels: ["--json"], description: t.info_option_json },
    ],
  },
  why: {
    description: t.cmd_why_desc,
    args: dynamic(async (ctx) => getInstalledPackages(ctx.path)),
    options: [
      ...commonGlobalOpts,
      { labels: ["--top"], description: t.why_option_top },
      { labels: ["--depth"], args: [], description: t.why_option_depth },
    ],
  },
  build: {
    description: t.cmd_build_desc,
    args: dynamic(async (ctx) => getScriptFiles(ctx)),
    options: [...commonGlobalOpts, ...buildOptions],
  },
  init: {
    description: t.cmd_init_desc,
    args: [],
    options: [...commonGlobalOpts, ...initOptions],
  },
  create: {
    aliases: ["c"],
    description: t.cmd_create_desc,
    args: [],
    options: [...commonGlobalOpts, ...createOptions],
  },
  upgrade: {
    description: t.cmd_upgrade_desc,
    options: [...commonGlobalOpts, { labels: ["--canary"], description: t.upgrade_option_canary }],
  },
  feedback: {
    description: t.cmd_feedback_desc,
    args: [],
    options: [
      ...commonGlobalOpts,
      { labels: ["-e", "--email"], args: [], description: t.feedback_option_email },
    ],
  },
};

export default createCompletion({
  bun: {
    description: t.description,
    options: commonGlobalOpts,
    commands: bunCommands,
  },
});
