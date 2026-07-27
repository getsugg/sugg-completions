import { exec, cache, scanPath } from "sugg";
import * as t from "virtual:i18n/pnpm";
import { getPkgDeps, getPkgScripts } from "../npm/utils";

async function getInstalledPackages(): Promise<Suggestion[]> {
  return cache.get("installed-packages", 5000, async () => {
    const names = await getPkgDeps();
    return names.map((name) => ({ display: name }));
  });
}

async function getGlobalPackages(): Promise<Suggestion[]> {
  return cache.get("global-packages", 5000, async () => {
    const out = await exec("pnpm ls -g --json");
    const json = JSON.parse(out);
    const names: string[] = [];
    const walk = (node: any) => {
      if (node.name && node.name !== ".") names.push(node.name);
      if (node.dependencies) Object.values(node.dependencies).forEach(walk);
    };
    if (Array.isArray(json)) json.forEach(walk);
    return names.map((name) => ({ display: name }));
  });
}

async function getScripts(): Promise<Suggestion[]> {
  return cache.get("scripts", 5000, async () => {
    const names = await getPkgScripts();
    return names.map((s) => ({ display: s }));
  });
}

const pkg = dynamic(async () => getInstalledPackages());

const pkgOrGlobal = dynamic(async (ctx) => {
  if (ctx.options["-g"] || ctx.options["--global"]) return getGlobalPackages();
  return getInstalledPackages();
});

const scripts = dynamic(async () => getScripts());

const filterOpts: OptionNode[] = [
  {
    labels: ["--changed-files-ignore-pattern"],
    args: [],
    description: t.opt_changedFilesIgnorePattern,
  },
  { labels: ["--fail-if-no-match"], description: t.opt_failIfNoMatch },
  { labels: ["--filter"], args: [], description: t.opt_filter },
  { labels: ["--filter-prod"], args: [], description: t.opt_filterProd },
  { labels: ["--test-pattern"], args: [], description: t.opt_testPattern },
];

const workspaceRootOpt: OptionNode = {
  labels: ["-w", "--workspace-root"],
  description: t.opt_workspaceRoot,
};
const globalDirOpt: OptionNode = {
  labels: ["--global-dir"],
  args: [],
  description: t.opt_globalDir,
};
const storeDirOpt: OptionNode = { labels: ["--store-dir"], args: [], description: t.opt_storeDir };
const virtualStoreDirOpt: OptionNode = {
  labels: ["--virtual-store-dir"],
  args: [],
  description: t.opt_virtualStoreDir,
};
const offlineOpt: OptionNode = { labels: ["--offline"], description: t.opt_offline };
const preferOfflineOpt: OptionNode = {
  labels: ["--prefer-offline"],
  description: t.opt_preferOffline,
};
const ignoreScriptsOpt: OptionNode = {
  labels: ["--ignore-scripts"],
  description: t.opt_ignoreScripts,
};
const recursiveOpt: OptionNode = { labels: ["-r", "--recursive"], description: t.opt_recursive };
const globalOpt: OptionNode = { labels: ["-g", "--global"], description: t.opt_global };
const prodOpt: OptionNode = { labels: ["-P", "--prod"], description: t.opt_prod };
const devOpt: OptionNode = { labels: ["-D", "--dev"], description: t.opt_dev };
const noOptionalOpt: OptionNode = { labels: ["--no-optional"], description: t.opt_noOptional };
const jsonOpt: OptionNode = { labels: ["--json"], description: t.opt_json };
const longOpt: OptionNode = { labels: ["--long"], description: t.opt_long };
const parseableOpt: OptionNode = { labels: ["--parseable"], description: t.opt_parseable };
const depthOpt: OptionNode = { labels: ["--depth"], args: [], description: t.opt_depth };
const saveDevOpt: OptionNode = { labels: ["-D", "--save-dev"], description: t.opt_saveDev };
const saveProdOpt: OptionNode = { labels: ["-P", "--save-prod"], description: t.opt_saveProd };
const saveOptionalOpt: OptionNode = {
  labels: ["-O", "--save-optional"],
  description: t.opt_saveOptional,
};
const savePeerOpt: OptionNode = { labels: ["--save-peer"], description: t.opt_savePeer };
const saveExactOpt: OptionNode = { labels: ["-E", "--save-exact"], description: t.opt_saveExact };
const saveWorkspaceProtocolOpt: OptionNode = {
  labels: ["--save-workspace-protocol", "--no-save-workspace-protocol"],
  description: t.opt_saveWorkspaceProtocol,
};
const configDepOpt: OptionNode = { labels: ["--config"], description: t.opt_configDep };
const saveCatalogOpt: OptionNode = { labels: ["--save-catalog"], description: t.opt_saveCatalog };
const saveCatalogNameOpt: OptionNode = {
  labels: ["--save-catalog-name"],
  args: [],
  description: t.opt_saveCatalogName,
};
const workspaceOpt: OptionNode = { labels: ["--workspace"], description: t.opt_workspace };
const allowBuildOpt: OptionNode = {
  labels: ["--allow-build"],
  args: [],
  description: t.opt_allowBuild,
};
const frozenLockfileOpt: OptionNode = {
  labels: ["--frozen-lockfile", "--no-frozen-lockfile"],
  description: t.opt_frozenLockfile,
};
const forceOpt: OptionNode = { labels: ["--force"], description: t.opt_force };
const lockfileOnlyOpt: OptionNode = {
  labels: ["--lockfile-only"],
  description: t.opt_lockfileOnly,
};
const reporterOpt: OptionNode = {
  labels: ["--reporter"],
  args: [{ display: "append-only" }, { display: "default" }, { display: "ndjson" }],
  description: t.opt_reporter,
};
const silentOpt: OptionNode = { labels: ["-s", "--silent"], description: t.opt_silent };
const fixLockfileOpt: OptionNode = { labels: ["--fix-lockfile"], description: t.opt_fixLockfile };

const installOpts: OptionNode[] = [
  frozenLockfileOpt,
  {
    labels: ["--verify-store-integrity", "--no-verify-store-integrity"],
    description: t.opt_verifyStoreIntegrity,
  },
  { labels: ["--child-concurrency"], args: [], description: t.opt_childConcurrency },
  devOpt,
  fixLockfileOpt,
  forceOpt,
  globalDirOpt,
  { labels: ["--hoist-pattern"], args: [], description: t.opt_hoistPattern },
  { labels: ["--ignore-pnpmfile"], description: t.opt_ignorePnpmfile },
  ignoreScriptsOpt,
  { labels: ["--ignore-workspace"], description: t.opt_ignoreWorkspace },
  { labels: ["--lockfile-dir"], args: [], description: t.opt_lockfileDir },
  lockfileOnlyOpt,
  { labels: ["--merge-git-branch-lockfiles"], description: t.opt_mergeGitBranchLockfiles },
  { labels: ["--modules-dir"], args: [], description: t.opt_modulesDir },
  { labels: ["--network-concurrency"], args: [], description: t.opt_networkConcurrency },
  { labels: ["--no-hoist"], description: t.opt_noHoist },
  { labels: ["--no-lockfile"], description: t.opt_noLockfile },
  noOptionalOpt,
  offlineOpt,
  { labels: ["--optimistic-repeat-install"], description: t.opt_optimisticRepeatInstall },
  {
    labels: ["--package-import-method"],
    args: [{ display: "auto" }, { display: "clone" }, { display: "copy" }, { display: "hardlink" }],
    description: t.opt_packageImportMethod,
  },
  { labels: ["--prefer-frozen-lockfile"], description: t.opt_preferFrozenLockfile },
  preferOfflineOpt,
  prodOpt,
  { labels: ["--public-hoist-pattern"], args: [], description: t.opt_publicHoistPattern },
  recursiveOpt,
  { labels: ["--resolution-only"], description: t.opt_resolutionOnly },
  { labels: ["--shamefully-hoist"], description: t.opt_shamefullyHoist },
  { labels: ["--side-effects-cache"], description: t.opt_sideEffectsCache },
  { labels: ["--side-effects-cache-readonly"], description: t.opt_sideEffectsCacheReadonly },
  storeDirOpt,
  { labels: ["--strict-peer-dependencies"], description: t.opt_strictPeerDependencies },
  { labels: ["--use-running-store-server"], description: t.opt_useRunningStoreServer },
  { labels: ["--use-store-server"], description: t.opt_useStoreServer },
  virtualStoreDirOpt,
  reporterOpt,
  silentOpt,
];

const commonOpts: OptionNode[] = [
  { labels: ["--color", "--no-color"], description: t.opt_color },
  { labels: ["-C", "--dir"], args: [], description: t.opt_dir },
  { labels: ["-h", "--help"], description: t.opt_help },
  { labels: ["--loglevel"], args: [], description: t.opt_loglevel },
  { labels: ["--stream"], description: t.opt_stream },
  { labels: ["--use-stderr"], description: t.opt_useStderr },
  { labels: ["--aggregate-output"], description: t.opt_aggregateOutput },
  workspaceRootOpt,
];

export default createCompletion({
  pnpm: {
    description: t.cmd_pnpm,
    options: [recursiveOpt],
    commands: {
      add: {
        description: t.cmd_add,
        options: [
          ...commonOpts,
          saveExactOpt,
          saveWorkspaceProtocolOpt,
          saveDevOpt,
          saveProdOpt,
          saveOptionalOpt,
          savePeerOpt,
          configDepOpt,
          saveCatalogOpt,
          saveCatalogNameOpt,
          globalOpt,
          globalDirOpt,
          allowBuildOpt,
          ignoreScriptsOpt,
          offlineOpt,
          preferOfflineOpt,
          storeDirOpt,
          virtualStoreDirOpt,
          workspaceOpt,
          recursiveOpt,
          ...filterOpts,
        ],
        args: { count: Infinity, items: pkg },
      },
      audit: {
        description: t.cmd_audit,
        options: [
          ...commonOpts,
          {
            labels: ["--audit-level"],
            args: [
              { display: "low" },
              { display: "moderate" },
              { display: "high" },
              { display: "critical" },
            ],
            description: t.opt_auditLevel,
          },
          devOpt,
          { labels: ["--fix"], description: t.opt_auditFix },
          { labels: ["--ignore"], args: [], description: t.opt_auditIgnore },
          { labels: ["--ignore-registry-errors"], description: t.opt_ignoreRegistryErrors },
          { labels: ["--ignore-unfixable"], description: t.opt_ignoreUnfixable },
          jsonOpt,
          noOptionalOpt,
          prodOpt,
        ],
      },
      bin: {
        description: t.cmd_bin,
        options: [globalOpt],
      },
      "cat-file": {
        description: t.cmd_catFile,
        args: [],
      },
      "cat-index": {
        description: t.cmd_catIndex,
        args: [],
      },
      config: {
        description: t.cmd_config,
        options: [
          globalOpt,
          jsonOpt,
          {
            labels: ["--location"],
            args: [{ display: "project" }, { display: "global" }],
            description: t.opt_location,
          },
        ],
        commands: {
          set: { description: t.cmd_config_set, args: { count: Infinity } },
          get: { description: t.cmd_config_get, args: [] },
          delete: { description: t.cmd_config_delete, args: [] },
          list: { description: t.cmd_config_list },
        },
      },
      create: {
        description: t.cmd_create,
        options: [...commonOpts, allowBuildOpt],
        args: [],
      },
      dedupe: {
        description: t.cmd_dedupe,
        options: [
          ...commonOpts,
          globalDirOpt,
          ignoreScriptsOpt,
          offlineOpt,
          preferOfflineOpt,
          storeDirOpt,
          virtualStoreDirOpt,
          { labels: ["--check"], description: t.opt_dedupeCheck },
        ],
      },
      dlx: {
        description: t.cmd_dlx,
        options: [
          ...commonOpts,
          allowBuildOpt,
          { labels: ["--package"], args: [], description: t.opt_dlxPackage },
          { labels: ["-c", "--shell-mode"], description: t.opt_shellMode },
          reporterOpt,
          silentOpt,
        ],
        args: [],
      },
      doctor: {
        description: t.cmd_doctor,
        options: commonOpts,
      },
      env: {
        description: t.cmd_env,
        options: [globalOpt, { labels: ["--remote"], description: t.opt_remote }],
        commands: {
          add: { description: t.cmd_env_add, args: [] },
          list: { aliases: ["ls"], description: t.cmd_env_list },
          remove: { aliases: ["rm"], description: t.cmd_env_remove, args: [] },
          use: { description: t.cmd_env_use, args: [] },
        },
      },
      exec: {
        description: t.cmd_exec,
        options: [...commonOpts, recursiveOpt, ...filterOpts],
        args: [],
      },
      fetch: {
        description: t.cmd_fetch,
        options: [...commonOpts, devOpt, prodOpt],
      },
      "find-hash": {
        description: t.cmd_findHash,
        args: [],
      },
      import: {
        description: t.cmd_import,
        options: commonOpts,
      },
      install: {
        aliases: ["i"],
        description: t.cmd_install,
        options: [...commonOpts, ...installOpts, ...filterOpts],
      },
      "install-test": {
        aliases: ["it"],
        description: t.cmd_installTest,
        options: [...commonOpts, ...installOpts, ...filterOpts],
      },
      licenses: {
        description: t.cmd_licenses,
        options: [devOpt, jsonOpt, longOpt, noOptionalOpt, prodOpt, ...filterOpts],
        commands: {
          list: { aliases: ["ls"], description: t.cmd_licenses_list },
        },
      },
      link: {
        aliases: ["ln"],
        description: t.cmd_link,
        options: [...commonOpts],
        args: pkg,
      },
      list: {
        aliases: ["ls", "la", "ll"],
        description: t.cmd_list,
        options: [
          ...commonOpts,
          depthOpt,
          devOpt,
          { labels: ["--exclude-peers"], description: t.opt_excludePeers },
          globalOpt,
          globalDirOpt,
          jsonOpt,
          longOpt,
          noOptionalOpt,
          { labels: ["--only-projects"], description: t.opt_onlyProjects },
          parseableOpt,
          prodOpt,
          recursiveOpt,
          ...filterOpts,
        ],
        args: { count: Infinity, items: pkgOrGlobal },
      },
      outdated: {
        description: t.cmd_outdated,
        options: [
          ...commonOpts,
          { labels: ["--compatible"], description: t.opt_compatible },
          devOpt,
          {
            labels: ["--format"],
            args: [{ display: "table" }, { display: "list" }, { display: "json" }],
            description: t.opt_outdatedFormat,
          },
          globalDirOpt,
          longOpt,
          noOptionalOpt,
          { labels: ["--no-table"], description: t.opt_noTable },
          prodOpt,
          recursiveOpt,
          { labels: ["--sort-by"], args: [{ display: "name" }], description: t.opt_sortBy },
          ...filterOpts,
        ],
        args: { count: Infinity, items: pkg },
      },
      pack: {
        description: t.cmd_pack,
        options: [
          ...commonOpts,
          jsonOpt,
          { labels: ["--out"], args: [], description: t.opt_out },
          { labels: ["--pack-destination"], args: [], description: t.opt_packDestination },
          recursiveOpt,
          {
            labels: ["--workspace-concurrency"],
            args: [],
            description: t.opt_workspaceConcurrency,
          },
          ...filterOpts,
        ],
      },
      patch: {
        description: t.cmd_patch,
        options: [
          ...commonOpts,
          { labels: ["--edit-dir"], args: [], description: t.opt_editDir },
          { labels: ["--ignore-existing"], description: t.opt_ignoreExisting },
        ],
        args: [],
      },
      "patch-commit": {
        description: t.cmd_patchCommit,
        options: [
          ...commonOpts,
          { labels: ["--patches-dir"], args: [], description: t.opt_patchesDir },
        ],
        args: [],
      },
      prune: {
        description: t.cmd_prune,
        options: [...commonOpts, ignoreScriptsOpt, noOptionalOpt, prodOpt],
      },
      publish: {
        description: t.cmd_publish,
        options: [
          ...commonOpts,
          {
            labels: ["--access"],
            args: [{ display: "public" }, { display: "restricted" }],
            description: t.opt_access,
          },
          { labels: ["--dry-run"], description: t.opt_dryRun },
          forceOpt,
          ignoreScriptsOpt,
          jsonOpt,
          { labels: ["--no-git-checks"], description: t.opt_noGitChecks },
          { labels: ["--otp"], args: [], description: t.opt_otp },
          { labels: ["--publish-branch"], args: [], description: t.opt_publishBranch },
          recursiveOpt,
          { labels: ["--report-summary"], description: t.opt_reportSummary },
          { labels: ["--tag"], args: [], description: t.opt_tag },
          ...filterOpts,
        ],
        args: dynamic(async (ctx) => scanPath(ctx.prefix)),
      },
      rebuild: {
        aliases: ["rb"],
        description: t.cmd_rebuild,
        options: [
          ...commonOpts,
          { labels: ["--pending"], description: t.opt_pending },
          recursiveOpt,
          storeDirOpt,
          ...filterOpts,
        ],
        args: { count: Infinity, items: pkg },
      },
      recursive: {
        aliases: ["multi", "m"],
        description: t.cmd_recursive,
        options: [
          ...commonOpts,
          { labels: ["--include-workspace-root"], description: t.opt_includeWorkspaceRoot },
          { labels: ["--link-workspace-packages"], description: t.opt_linkWorkspacePackages },
          { labels: ["--no-bail"], description: t.opt_noBail },
          { labels: ["--reverse"], description: t.opt_reverse },
          { labels: ["--shared-workspace-lockfile"], description: t.opt_sharedWorkspaceLockfile },
          { labels: ["--sort", "--no-sort"], description: t.opt_sort },
          {
            labels: ["--workspace-concurrency"],
            args: [],
            description: t.opt_workspaceConcurrency,
          },
          ...filterOpts,
        ],
        commands: {
          add: { description: t.cmd_add },
          exec: { description: t.cmd_exec, args: [] },
          install: { description: t.cmd_install },
          list: { description: t.cmd_list, args: { count: Infinity, items: pkg } },
          outdated: { description: t.cmd_outdated, args: { count: Infinity, items: pkg } },
          pack: { description: t.cmd_pack },
          publish: { description: t.cmd_publish },
          rebuild: { description: t.cmd_rebuild, args: { count: Infinity, items: pkg } },
          remove: { description: t.cmd_remove, args: [] },
          run: { description: t.cmd_run, args: scripts },
          test: { description: t.cmd_test },
          unlink: { description: t.cmd_unlink },
          update: { description: t.cmd_update },
          why: { description: t.cmd_why, args: [] },
        },
      },
      remove: {
        aliases: ["rm", "uninstall", "un"],
        description: t.cmd_remove,
        options: [
          ...commonOpts,
          globalDirOpt,
          recursiveOpt,
          saveDevOpt,
          saveOptionalOpt,
          saveProdOpt,
          ...filterOpts,
        ],
        args: { count: Infinity, items: pkgOrGlobal },
      },
      root: {
        description: t.cmd_root,
        options: [globalOpt],
      },
      run: {
        aliases: ["run-script"],
        description: t.cmd_run,
        options: [
          ...commonOpts,
          { labels: ["--if-present"], description: t.opt_ifPresent },
          { labels: ["--no-bail"], description: t.opt_noBail },
          { labels: ["--parallel"], description: t.opt_runParallel },
          recursiveOpt,
          { labels: ["--report-summary"], description: t.opt_reportSummary },
          { labels: ["--reporter-hide-prefix"], description: t.opt_reporterHidePrefix },
          { labels: ["--resume-from"], args: [], description: t.opt_resumeFrom },
          { labels: ["--sequential"], description: t.opt_sequential },
          ...filterOpts,
        ],
        args: scripts,
      },
      server: {
        description: t.cmd_server,
        options: [
          ...commonOpts,
          { labels: ["--background"], description: t.opt_background },
          { labels: ["--ignore-stop-requests"], description: t.opt_ignoreStopRequests },
          { labels: ["--ignore-upload-requests"], description: t.opt_ignoreUploadRequests },
          { labels: ["--lock", "--no-lock"], description: t.opt_lock },
          { labels: ["--network-concurrency"], args: [], description: t.opt_networkConcurrency },
          { labels: ["--port"], args: [], description: t.opt_port },
          {
            labels: ["--protocol"],
            args: [{ display: "auto" }, { display: "tcp" }, { display: "ipc" }],
            description: t.opt_protocol,
          },
          storeDirOpt,
          {
            labels: ["--verify-store-integrity", "--no-verify-store-integrity"],
            description: t.opt_verifyStoreIntegrity,
          },
        ],
        commands: {
          start: { description: t.cmd_server_start },
          status: { description: t.cmd_server_status },
          stop: { description: t.cmd_server_stop },
        },
      },
      setup: {
        description: t.cmd_setup,
        options: [{ labels: ["-f", "--force"], description: t.opt_setupForce }],
      },
      start: {
        description: t.cmd_start,
        options: [...commonOpts, ignoreScriptsOpt, recursiveOpt, ...filterOpts],
      },
      store: {
        description: t.cmd_store,
        options: commonOpts,
        commands: {
          add: { description: t.cmd_store_add, args: { count: Infinity, items: pkg } },
          path: { description: t.cmd_store_path },
          prune: { description: t.cmd_store_prune },
          status: { description: t.cmd_store_status },
        },
      },
      test: {
        aliases: ["t"],
        description: t.cmd_test,
        options: [...commonOpts, ignoreScriptsOpt, recursiveOpt, ...filterOpts],
      },
      unlink: {
        aliases: ["dislink"],
        description: t.cmd_unlink,
        options: [...commonOpts, recursiveOpt],
        args: { count: Infinity, items: pkg },
      },
      update: {
        aliases: ["up", "upgrade"],
        description: t.cmd_update,
        options: [
          ...commonOpts,
          { labels: ["--depth"], args: [], description: t.opt_updateDepth },
          devOpt,
          globalOpt,
          globalDirOpt,
          { labels: ["-i", "--interactive"], description: t.opt_interactive },
          { labels: ["-L", "--latest"], description: t.opt_latest },
          noOptionalOpt,
          prodOpt,
          recursiveOpt,
          workspaceOpt,
          ...filterOpts,
        ],
        args: { count: Infinity, items: pkgOrGlobal },
      },
      why: {
        description: t.cmd_why,
        options: [
          ...commonOpts,
          depthOpt,
          devOpt,
          { labels: ["--exclude-peers"], description: t.opt_excludePeers },
          globalOpt,
          globalDirOpt,
          jsonOpt,
          longOpt,
          noOptionalOpt,
          parseableOpt,
          prodOpt,
          recursiveOpt,
          ...filterOpts,
        ],
        args: { count: Infinity, items: pkg },
      },
    },
  },
});
