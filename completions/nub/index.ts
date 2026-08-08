import { scanPath, execFile, cache } from "sugg";
import { getPkgScripts, getPkgDeps } from "../npm/utils";
import * as t from "virtual:i18n/nub";

async function getGlobalPkgs() {
  return cache.get("global-packages", 30000, async () => {
    const out = await execFile("nub", ["ls", "-g", "--json"]);
    const data: { name: string }[] = JSON.parse(out);
    return data.map((p) => p.name);
  });
}

async function getSearchPkgs(prefix: string): Promise<string[]> {
  if (!prefix) return [];
  const out = await execFile("nub", ["search", prefix, "--json"]);
  const data: { name: string }[] = JSON.parse(out);
  return data.map((p) => p.name);
}

const pkgs = dynamic(async (ctx) => {
  if (ctx.options["-g"] || ctx.options["--global"]) return getGlobalPkgs();
  return getPkgDeps();
});

const addPkgs = dynamic((ctx) =>
  cache.get(["search", ctx.prefix], 30000, () => getSearchPkgs(ctx.prefix)),
);

const baseOpts: OptionNode[] = [
  { labels: ["-h", "--help"], description: t.option_help },
  { labels: ["--cwd"], args: [], description: t.option_cwd },
  {
    labels: ["-C", "--dir", "--cd", "--prefix"],
    args: [],
    description: t.opt_change_to_directory_before_running,
  },
  { labels: ["-s", "--silent"], description: t.option_silent },
  { labels: ["--verbose"], description: t.option_verbose },
  { labels: ["--color"], args: ["auto", "always", "never"], description: t.option_color },
];

const workspaceOpts: OptionNode[] = [
  ...baseOpts,
  { labels: ["-F", "--filter"], args: [], description: t.option_filter },
  { labels: ["--filter-prod"], args: [], description: t.option_filter_prod },
  { labels: ["-r", "--recursive", "--workspaces"], description: t.option_recursive },
  { labels: ["--fail-if-no-match"], description: t.option_fail_if_no_match },
  { labels: ["--include-workspace-root"], description: t.option_include_workspace_root },
  {
    labels: ["--reporter"],
    args: ["default", "silent", "ndjson", "append-only"],
    description: t.option_reporter,
  },
  {
    labels: ["--loglevel"],
    args: ["silent", "error", "warn", "info", "debug"],
    description: t.option_loglevel,
  },
];

const lockfileOpts: OptionNode[] = [
  { labels: ["--frozen-lockfile"], description: t.option_frozen_lockfile },
  { labels: ["--no-frozen-lockfile"], description: t.option_no_frozen_lockfile },
  { labels: ["--prefer-frozen-lockfile"], description: t.option_prefer_frozen_lockfile },
];

const networkOpts: OptionNode[] = [
  { labels: ["--fetch-retries"], args: [], description: t.option_fetch_retries },
  {
    labels: ["--fetch-retry-factor"],
    args: [],
    description: t.opt_exponential_backoff_factor_between_retries,
  },
  {
    labels: ["--fetch-retry-maxtimeout"],
    args: [],
    description: t.opt_upper_bound_for_retry_backoff_ms,
  },
  {
    labels: ["--fetch-retry-mintimeout"],
    args: [],
    description: t.opt_lower_bound_for_retry_backoff_ms,
  },
  { labels: ["--fetch-timeout"], args: [], description: t.option_fetch_timeout },
  { labels: ["--registry"], args: [], description: t.option_registry },
];

const installCommonOpts: OptionNode[] = [
  ...workspaceOpts,
  ...lockfileOpts,
  ...networkOpts,
  { labels: ["--ignore-scripts"], description: t.option_ignore_scripts },
  { labels: ["--no-optional"], description: t.option_no_optional },
  { labels: ["-P", "--prod", "--production"], description: t.option_prod },
  { labels: ["-D", "--dev"], description: t.option_dev },
  { labels: ["--offline"], description: t.option_offline },
  { labels: ["--prefer-offline"], description: t.option_prefer_offline },
  { labels: ["--lockfile-only"], description: t.option_lockfile_only },
  { labels: ["--force"], description: t.option_force },
  {
    labels: ["--disable-global-virtual-store", "--disable-gvs"],
    description: t.opt_force_shared_global_virtual_store_off,
  },
  {
    labels: ["--enable-global-virtual-store", "--enable-gvs"],
    description: t.opt_force_shared_global_virtual_store_on,
  },
];

export default createCompletion({
  nub: {
    description: t.description,
    options: [
      ...baseOpts,
      { labels: ["--no-env-file"], description: t.option_no_env_file },
      { labels: ["--node"], description: t.option_node },
      { labels: ["--env-file"], args: [], description: t.option_env_file },
      { labels: ["--env-file-if-exists"], args: [], description: t.option_env_file_if_exists },
      { labels: ["-v", "--version"], description: t.option_version },
      ...networkOpts,
      { labels: ["-e", "--eval"], args: [], description: t.opt_evaluate_code },
      { labels: ["-p", "--print"], args: [], description: t.opt_evaluate_code_and_print },
      { labels: ["-c", "--check"], description: t.opt_syntaxcheck_the_script },
      { labels: ["-r", "--require"], args: [], description: t.opt_preload_a_commonjs_module },
      { labels: ["--import"], args: [], description: t.opt_preload_an_es_module },
      { labels: ["--watch"], description: t.opt_run_in_watch_mode },
      { labels: ["--inspect"], args: [], description: t.opt_activate_the_inspector },
      {
        labels: ["--inspect-brk"],
        args: [],
        description: t.opt_activate_inspector_and_break_at_start,
      },
      { labels: ["--enable-source-maps"], description: t.opt_enable_sourcemap_support },
    ],
    commands: {
      run: {
        description: t.cmd_run,
        args: dynamic(getPkgScripts),
        options: [
          ...baseOpts,
          { labels: ["--node"], description: t.option_node },
          { labels: ["-F", "--filter"], args: [], description: t.option_filter },
          { labels: ["-r", "--recursive", "--workspaces"], description: t.option_recursive },
          { labels: ["--fail-if-no-match"], description: t.option_fail_if_no_match },
          { labels: ["--include-workspace-root"], description: t.option_include_workspace_root },
          {
            labels: ["--if-present"],
            description: t.opt_skip_packages_that_dont_have_the_named_script,
          },
          { labels: ["--ignore-scripts"], description: t.option_ignore_scripts },
          { labels: ["--parallel"], description: t.opt_run_all_packages_concurrently },
          { labels: ["--sequential"], description: t.opt_run_packages_strictly_one_at_a_time },
          { labels: ["--no-sort"], description: t.opt_skip_topological_sort },
          { labels: ["--reverse"], description: t.opt_reverse_topological_order },
          { labels: ["--bail"], description: t.opt_stop_the_run_on_first_failure },
          { labels: ["--no-bail"], description: t.opt_dont_stop_on_first_failure },
          { labels: ["--stream"], description: t.opt_stream_output_with_packagename_prefix },
          {
            labels: ["--reporter-hide-prefix"],
            description: t.opt_drop_the_dir_script_prefix_from_streamed_output,
          },
          {
            labels: ["--aggregate-output"],
            description: t.opt_buffer_output_and_flush_on_completion,
          },
          {
            labels: ["--resume-from"],
            args: [],
            description: t.opt_skip_topological_predecessors_of_pkg,
          },
          {
            labels: ["--workspace-concurrency"],
            args: [],
            description: t.opt_max_concurrent_packages_per_topological_chunk,
          },
          {
            labels: ["--script-shell"],
            args: [],
            description: t.opt_override_the_shell_used_to_invoke_the_script,
          },
          { labels: ["--workspace"], args: [], description: t.opt_npmstyle_member_selection },
          { labels: ["-w", "--workspace-root"], description: t.opt_run_from_workspace_root },
          {
            labels: ["--reporter"],
            args: ["default", "silent", "ndjson", "append-only"],
            description: t.opt_output_reporter_default_silent_or_ndjson,
          },
          { labels: ["--no-check"], description: t.opt_skip_prerun_check },
          { labels: ["--no-install"], description: t.opt_skip_prerun_install },
        ],
      },
      exec: {
        aliases: ["nubx"],
        description: t.cmd_exec,
        args: dynamic(async (ctx) => scanPath(ctx.prefix, "node_modules/.bin")),
        options: [
          ...baseOpts,
          { labels: ["--node"], description: t.option_node },
          { labels: ["-F", "--filter"], args: [], description: t.option_filter },
          { labels: ["-r", "--recursive", "--workspaces"], description: t.option_recursive },
          { labels: ["--fail-if-no-match"], description: t.option_fail_if_no_match },
          { labels: ["--include-workspace-root"], description: t.option_include_workspace_root },
          { labels: ["--workspace"], args: [], description: t.opt_npmstyle_member_selection },
          { labels: ["--parallel"], description: t.opt_run_in_all_packages_concurrently },
          {
            labels: ["--workspace-concurrency"],
            args: [],
            description: t.opt_max_concurrent_packages_per_chunk,
          },
          { labels: ["--no-check"], description: t.opt_skip_prerun_check },
        ],
      },
      dlx: {
        aliases: ["x"],
        description: t.cmd_dlx,
        args: [],
        options: [...baseOpts],
      },
      watch: {
        description: t.cmd_watch,
        args: dynamic(async (ctx) => scanPath(ctx.prefix)),
        options: [...baseOpts],
      },
      init: {
        description: t.cmd_init,
        options: [
          ...baseOpts,
          { labels: ["-y", "--yes"], description: t.option_yes },
          { labels: ["--js"], description: t.opt_javascript_variant_no_tsconfig },
          { labels: ["--name"], args: [], description: t.opt_project_name },
          { labels: ["--no-git"], description: t.opt_skip_git_init },
          { labels: ["--no-install"], description: t.opt_skip_nub_install_step },
          { labels: ["--force"], description: t.opt_overwrite_existing_files },
        ],
      },
      install: {
        aliases: ["i"],
        description: t.cmd_install,
        options: [
          ...installCommonOpts,
          {
            labels: ["--node-linker"],
            args: ["isolated", "hoisted"],
            description: t.option_node_linker,
          },
        ],
      },
      ci: {
        description: t.cmd_ci,
        options: [
          ...workspaceOpts,
          { labels: ["--ignore-scripts"], description: t.option_ignore_scripts },
          { labels: ["--no-optional"], description: t.option_no_optional },
          { labels: ["--registry"], args: [], description: t.option_registry },
        ],
      },
      add: {
        aliases: ["a"],
        description: t.cmd_add,
        args: { count: Infinity, items: addPkgs },
        options: [
          ...installCommonOpts,
          { labels: ["-D", "--save-dev"], description: t.opt_add_as_dev_dependency },
          { labels: ["-E", "--save-exact"], description: t.opt_pin_exact_version },
          { labels: ["-g", "--global"], description: t.option_global },
          { labels: ["-O", "--save-optional"], description: t.opt_add_as_optional_dependency },
          { labels: ["--save-peer"], description: t.opt_add_as_peer_dependency },
          { labels: ["--no-save"], description: t.opt_install_without_persisting_to_packagejson },
          { labels: ["--allow-build"], args: [], description: t.opt_preapprove_lifecycle_scripts },
          { labels: ["--deny-build"], args: [], description: t.opt_deny_lifecycle_scripts },
          { labels: ["-w", "--workspace"], description: t.opt_add_to_workspace_root },
        ],
      },
      remove: {
        aliases: ["rm"],
        description: t.cmd_remove,
        args: { count: Infinity, items: pkgs },
        options: [
          ...installCommonOpts,
          { labels: ["-D", "--save-dev"], description: t.opt_remove_from_devdependencies },
          { labels: ["-g", "--global"], description: t.option_global },
          { labels: ["-w", "--workspace"], description: t.opt_remove_from_workspace_root },
        ],
      },
      update: {
        aliases: ["up"],
        description: t.cmd_update,
        args: { count: Infinity, items: pkgs },
        options: [
          ...installCommonOpts,
          { labels: ["-D", "--dev"], description: t.opt_update_only_devdependencies },
          { labels: ["-E", "--exact", "--save-exact"], description: t.opt_pin_to_exact_version },
          { labels: ["-g", "--global"], description: t.option_global },
          { labels: ["-i", "--interactive"], description: t.opt_interactive_update_picker },
          { labels: ["-L", "--latest"], description: t.opt_update_past_manifest_range },
          {
            labels: ["--no-save"],
            description: t.opt_refresh_lockfile_without_rewriting_packagejson,
          },
          { labels: ["--depth"], args: [], description: t.option_depth },
          { labels: ["-w", "--workspace"], description: t.opt_update_in_workspace_root },
        ],
      },
      import: {
        description: t.cmd_import,
        options: [
          ...workspaceOpts,
          {
            labels: ["--loglevel"],
            args: ["silent", "error", "warn", "info", "debug"],
            description: t.option_loglevel,
          },
          { labels: ["--registry"], args: [], description: t.option_registry },
          { labels: ["--force"], description: t.opt_overwrite_existing_lockfile },
          { labels: ["--lockfile-only"], description: t.opt_write_only_the_converted_lockfile },
        ],
      },
      dedupe: {
        description: t.cmd_dedupe,
        options: [
          ...workspaceOpts,
          ...lockfileOpts,
          {
            labels: ["--loglevel"],
            args: ["silent", "error", "warn", "info", "debug"],
            description: t.option_loglevel,
          },
          { labels: ["--registry"], args: [], description: t.option_registry },
          { labels: ["--check"], description: t.opt_check_whether_dedupe_would_change_lockfile },
        ],
      },
      prune: {
        description: t.cmd_prune,
        options: [
          ...workspaceOpts,
          {
            labels: ["--loglevel"],
            args: ["silent", "error", "warn", "info", "debug"],
            description: t.option_loglevel,
          },
          { labels: ["-P", "--prod", "--production"], description: t.opt_remove_devdependencies },
          { labels: ["--no-optional"], description: t.opt_also_remove_optionaldependencies },
        ],
      },
      rebuild: {
        aliases: ["rb"],
        description: t.cmd_rebuild,
        args: { count: Infinity, items: pkgs },
        options: [
          ...workspaceOpts,
          {
            labels: ["--loglevel"],
            args: ["silent", "error", "warn", "info", "debug"],
            description: t.option_loglevel,
          },
        ],
      },
      link: {
        aliases: ["ln"],
        description: t.cmd_link,
        args: [],
        options: [
          ...workspaceOpts,
          {
            labels: ["--loglevel"],
            args: ["silent", "error", "warn", "info", "debug"],
            description: t.option_loglevel,
          },
          { labels: ["-g", "--global"], description: t.option_global },
        ],
      },
      unlink: {
        description: t.cmd_unlink,
        args: [],
        options: [
          ...workspaceOpts,
          {
            labels: ["--loglevel"],
            args: ["silent", "error", "warn", "info", "debug"],
            description: t.option_loglevel,
          },
          { labels: ["-g", "--global"], description: t.option_global },
        ],
      },
      patch: {
        description: t.cmd_patch,
        args: [],
        options: [
          ...workspaceOpts,
          {
            labels: ["--loglevel"],
            args: ["silent", "error", "warn", "info", "debug"],
            description: t.option_loglevel,
          },
          {
            labels: ["--edit-dir"],
            args: [],
            description: t.opt_directory_to_extract_the_writable_copy_into,
          },
          { labels: ["--ignore-existing"], description: t.opt_ignore_any_existing_patch_entry },
        ],
      },
      "patch-commit": {
        description: t.cmd_patch_commit,
        args: [],
        options: [
          ...workspaceOpts,
          {
            labels: ["--loglevel"],
            args: ["silent", "error", "warn", "info", "debug"],
            description: t.option_loglevel,
          },
          {
            labels: ["--patches-dir"],
            args: [],
            description: t.opt_where_to_write_the_generated_patch_file,
          },
        ],
      },
      "patch-remove": {
        description: t.cmd_patch_remove,
        args: { count: Infinity, items: [] },
        options: [
          ...workspaceOpts,
          {
            labels: ["--loglevel"],
            args: ["silent", "error", "warn", "info", "debug"],
            description: t.option_loglevel,
          },
        ],
      },
      "approve-builds": {
        description: t.cmd_approve_builds,
        args: { count: Infinity, items: [] },
        options: [
          ...workspaceOpts,
          {
            labels: ["--loglevel"],
            args: ["silent", "error", "warn", "info", "debug"],
            description: t.option_loglevel,
          },
          { labels: ["--all"], description: t.option_all },
          { labels: ["-g", "--global"], description: t.option_global },
        ],
      },
      "ignored-builds": {
        description: t.cmd_ignored_builds,
        options: [
          ...workspaceOpts,
          {
            labels: ["--loglevel"],
            args: ["silent", "error", "warn", "info", "debug"],
            description: t.option_loglevel,
          },
          { labels: ["-g", "--global"], description: t.option_global },
        ],
      },
      list: {
        aliases: ["ls"],
        description: t.cmd_list,
        args: [],
        options: [
          ...workspaceOpts,
          { labels: ["-D", "--dev"], description: t.opt_show_only_devdependencies },
          { labels: ["-g", "--global"], description: t.option_global },
          {
            labels: ["-P", "--prod", "--production"],
            description: t.opt_show_only_production_deps,
          },
          { labels: ["--depth"], args: [], description: t.option_depth },
          {
            labels: ["--format"],
            args: ["default", "json", "parseable"],
            description: t.opt_output_format_default_json_or_parseable,
          },
          { labels: ["--json"], description: t.option_json },
          { labels: ["--long"], description: t.option_long },
          { labels: ["--parseable"], description: t.option_parseable },
        ],
      },
      why: {
        description: t.cmd_why,
        args: pkgs,
        options: [
          ...workspaceOpts,
          { labels: ["-D", "--dev"], description: t.opt_only_follow_devdependency_chains },
          { labels: ["-P", "--prod", "--production"], description: t.opt_only_follow_prod_chains },
          { labels: ["--json"], description: t.option_json },
          { labels: ["--long"], description: t.option_long },
          { labels: ["--parseable"], description: t.option_parseable },
        ],
      },
      outdated: {
        description: t.cmd_outdated,
        args: [],
        options: [
          ...workspaceOpts,
          ...networkOpts,
          { labels: ["-D", "--dev"], description: t.opt_show_only_devdependencies },
          { labels: ["-g", "--global"], description: t.option_global },
          { labels: ["--json"], description: t.option_json },
          { labels: ["--long"], description: t.option_long },
          {
            labels: ["-P", "--prod", "--production"],
            description: t.opt_show_only_production_deps,
          },
          {
            labels: ["-w", "--workspace", "--workspace-root"],
            description: t.opt_operate_on_workspace_root,
          },
        ],
      },
      audit: {
        description: t.cmd_audit,
        options: [
          ...baseOpts,
          ...networkOpts,
          {
            labels: ["--audit-level"],
            args: ["info", "low", "moderate", "high", "critical"],
            description: t.opt_only_print_advisories_at_or_above_this_severity,
          },
          { labels: ["-D", "--dev"], description: t.opt_only_audit_devdependencies },
          { labels: ["--fix"], description: t.opt_fix_advisories },
          { labels: ["--ignore"], args: [], description: t.opt_drop_advisories_matching_id },
          {
            labels: ["--ignore-registry-errors"],
            description: t.opt_use_exit_code_0_if_registry_responds_with_error,
          },
          {
            labels: ["--ignore-unfixable"],
            description: t.opt_drop_advisories_with_no_nonvulnerable_upgrade,
          },
          {
            labels: ["-i", "--interactive"],
            description: t.opt_pick_advisories_to_fix_interactively,
          },
          { labels: ["--json"], description: t.option_json },
          { labels: ["--no-optional"], description: t.option_no_optional },
          {
            labels: ["-P", "--prod", "--production"],
            description: t.opt_only_audit_production_deps,
          },
        ],
      },
      licenses: {
        description: t.cmd_licenses,
        options: [
          ...baseOpts,
          ...networkOpts,
          { labels: ["-D", "--dev"], description: t.opt_show_only_devdependencies },
          { labels: ["--json"], description: t.option_json },
          { labels: ["--long"], description: t.option_long },
          {
            labels: ["-P", "--prod", "--production"],
            description: t.opt_show_only_production_deps,
          },
        ],
      },
      view: {
        description: t.cmd_view,
        args: [],
        options: [...baseOpts, ...networkOpts, { labels: ["--json"], description: t.option_json }],
      },
      search: {
        description: t.cmd_search,
        args: [],
        options: [
          ...baseOpts,
          ...networkOpts,
          { labels: ["--json"], description: t.option_json },
          { labels: ["--search-limit"], args: [], description: t.opt_maximum_number_of_results },
        ],
      },
      bin: {
        description: t.cmd_bin,
        options: [
          ...baseOpts,
          { labels: ["-g", "--global"], description: t.option_global },
          {
            labels: ["-w", "--workspace", "--workspace-root"],
            description: t.option_workspace_root,
          },
        ],
      },
      root: {
        description: t.cmd_root,
        options: [...baseOpts, { labels: ["-g", "--global"], description: t.option_global }],
      },
      query: {
        description: t.cmd_query,
        args: [],
        options: [
          ...workspaceOpts,
          { labels: ["-D", "--dev"], description: t.opt_only_match_devdependency_roots },
          {
            labels: ["-P", "--prod", "--production"],
            description: t.opt_only_match_production_roots,
          },
          { labels: ["--json"], description: t.option_json },
          { labels: ["--parseable"], description: t.option_parseable },
        ],
      },
      check: {
        description: t.cmd_check,
        options: [...baseOpts, { labels: ["--json"], description: t.option_json }],
      },
      sbom: {
        description: t.cmd_sbom,
        options: [...baseOpts],
      },
      publish: {
        description: t.cmd_publish,
        options: [
          ...workspaceOpts,
          ...networkOpts,
          { labels: ["--access"], args: [], description: t.opt_publish_as_public_or_restricted },
          { labels: ["--dry-run"], description: t.option_dry_run },
          { labels: ["--force"], description: t.opt_republish_even_when_version_exists },
          { labels: ["--ignore-scripts"], description: t.opt_skip_publish_lifecycle_scripts },
          { labels: ["--json"], description: t.option_json },
          { labels: ["--no-git-checks"], description: t.opt_skip_clean_working_tree_check },
          { labels: ["--otp"], args: [], description: t.option_otp },
          { labels: ["--provenance"], description: t.opt_generate_slsa_provenance_attestation },
          { labels: ["--tag"], args: [], description: t.option_tag },
        ],
      },
      pack: {
        description: t.cmd_pack,
        options: [
          ...baseOpts,
          ...networkOpts,
          { labels: ["--dry-run"], description: t.option_dry_run },
          { labels: ["--ignore-scripts"], description: t.opt_skip_prepackpreparepostpack_scripts },
          { labels: ["--json"], description: t.option_json },
          {
            labels: ["--pack-destination"],
            args: [],
            description: t.opt_directory_to_write_tarball_into,
          },
        ],
      },
      version: {
        description: t.cmd_version,
        args: [
          "major",
          "minor",
          "patch",
          "premajor",
          "preminor",
          "prepatch",
          "prerelease",
          "from-git",
        ],
        options: [
          ...baseOpts,
          { labels: ["--allow-same-version"], description: t.opt_allow_setting_to_current_value },
          { labels: ["--ignore-scripts"], description: t.opt_skip_version_lifecycle_scripts },
          { labels: ["--json"], description: t.option_json },
          { labels: ["-m", "--message"], args: [], description: t.opt_commit_message_template },
          { labels: ["--no-commit-hooks"], description: t.opt_skip_git_hooks },
          { labels: ["--no-git-tag-version"], description: t.opt_dont_create_git_commit_or_tag },
          { labels: ["--preid"], args: [], description: t.opt_prerelease_identifier },
          { labels: ["--sign-git-tag"], description: t.opt_gpgsign_the_tag },
        ],
      },
      "dist-tag": {
        description: t.cmd_dist_tag,
        commands: {
          add: { description: t.dtag_add, args: { count: 2, items: [] } },
          ls: { description: t.dtag_ls, args: [] },
          rm: { aliases: ["remove"], description: t.dtag_rm, args: { count: 2, items: [] } },
        },
        options: [...baseOpts, ...networkOpts],
      },
      login: {
        description: t.cmd_login,
        options: [
          ...baseOpts,
          ...networkOpts,
          {
            labels: ["--auth-type"],
            args: [],
            description: t.opt_authentication_flow_legacy_or_web,
          },
          { labels: ["--scope"], args: [], description: t.opt_scope_to_bind_this_registry_to },
        ],
      },
      logout: {
        description: t.cmd_logout,
        options: [
          ...baseOpts,
          ...networkOpts,
          {
            labels: ["--scope"],
            args: [],
            description: t.opt_scope_whose_registry_mapping_to_remove,
          },
        ],
      },
      whoami: {
        description: t.cmd_whoami,
        options: [...baseOpts, ...networkOpts],
      },
      owner: {
        description: t.cmd_owner,
        commands: {
          ls: { aliases: ["list"], description: t.owner_ls, args: [] },
          add: { description: t.owner_add, args: [] },
          rm: { aliases: ["remove"], description: t.owner_rm, args: [] },
        },
        options: [
          ...baseOpts,
          ...networkOpts,
          { labels: ["--otp"], args: [], description: t.option_otp },
        ],
      },
      token: {
        description: t.cmd_token,
        commands: {
          list: { aliases: ["ls"], description: t.token_list },
          create: { description: t.token_create },
          revoke: { aliases: ["rm"], description: t.token_revoke, args: [] },
        },
        options: [...baseOpts, ...networkOpts],
      },
      node: {
        description: t.cmd_node,
        commands: {
          which: { description: t.node_which },
          install: { description: t.node_install, args: { count: Infinity, items: [] } },
          ls: { description: t.node_ls },
          uninstall: { description: t.node_uninstall, args: [] },
          pin: { description: t.node_pin, args: [] },
          shim: { description: t.node_shim },
          unshim: { description: t.node_unshim },
        },
        options: [...baseOpts],
      },
      pm: {
        description: t.cmd_pm,
        commands: {
          which: { description: t.pm_which },
          use: { description: t.pm_use, args: [] },
          pin: { description: t.pm_pin, args: [] },
          update: { aliases: ["up"], description: t.pm_update },
          cache: { description: t.pm_cache, args: ["clear"] },
          shim: { description: t.pm_shim },
          unshim: { description: t.pm_unshim },
        },
        options: [...baseOpts],
      },
      upgrade: {
        description: t.cmd_upgrade,
        options: [
          ...baseOpts,
          { labels: ["--version"], args: [], description: t.opt_target_version },
          { labels: ["--canary"], description: t.opt_upgrade_to_latest_canary },
          { labels: ["--stable"], description: t.opt_upgrade_to_latest_stable },
          { labels: ["--dry-run"], description: t.option_dry_run },
          { labels: ["-y", "--yes"], description: t.option_yes },
        ],
      },
      store: {
        description: t.cmd_store,
        commands: {
          add: { description: t.store_add, args: [] },
          path: { description: t.store_path },
          prune: { description: t.store_prune },
          status: { description: t.store_status },
        },
        options: [...baseOpts],
      },
      cache: {
        description: t.cmd_cache,
        commands: {
          delete: { description: t.cache_delete, args: { count: Infinity, items: [] } },
          list: { description: t.cache_list },
          "list-registries": { description: t.cache_list_registries },
          prune: { description: t.cache_prune },
          view: { description: t.cache_view, args: [] },
        },
        options: [...baseOpts],
      },
      config: {
        description: t.cmd_config,
        commands: {
          delete: { aliases: ["rm", "remove", "unset"], description: t.config_delete, args: [] },
          explain: { description: t.config_explain, args: [] },
          find: { aliases: ["search"], description: t.config_find, args: [] },
          get: { description: t.config_get, args: [] },
          list: {
            aliases: ["ls"],
            description: t.config_list,
            options: [
              ...baseOpts,
              { labels: ["--all"], description: t.option_all },
              { labels: ["--json"], description: t.option_json },
              { labels: ["--local"], description: t.option_local },
              {
                labels: ["--location"],
                args: ["merged", "user", "project", "global"],
                description: t.option_location,
              },
            ],
          },
          set: { description: t.config_set, args: [] },
          tui: { description: t.config_tui },
        },
        options: [
          ...baseOpts,
          { labels: ["--all"], description: t.option_all },
          { labels: ["--json"], description: t.option_json },
          { labels: ["--local"], description: t.option_local },
          {
            labels: ["--location"],
            args: ["merged", "user", "project", "global"],
            description: t.option_location,
          },
        ],
      },
      get: {
        description: t.cmd_get,
        args: [],
        options: [
          ...baseOpts,
          { labels: ["--json"], description: t.option_json },
          { labels: ["--local"], description: t.option_local },
          {
            labels: ["--location"],
            args: ["merged", "user", "project", "global"],
            description: t.option_location,
          },
        ],
      },
      set: {
        description: t.cmd_set,
        args: [],
        options: [
          ...baseOpts,
          { labels: ["--local"], description: t.option_local },
          {
            labels: ["--location"],
            args: ["merged", "user", "project", "global"],
            description: t.option_location,
          },
        ],
      },
    },
  },
});
