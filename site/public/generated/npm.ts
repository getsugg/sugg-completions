import { readJson, scanPath, cache, exec } from "sugg";
import * as t from "virtual:i18n/npm";
export async function readPkg(): Promise<Record<string, any>> {
  try {
    return await readJson("package.json");
  } catch {
    return {};
  }
}

export async function getPkgScripts(): Promise<string[]> {
  const pkg = await readPkg();
  return Object.keys(pkg.scripts || {});
}

export async function getPkgDeps(): Promise<string[]> {
  const pkg = await readPkg();
  return Object.keys({ ...pkg.dependencies, ...pkg.devDependencies });
}

export async function getPkgTestFiles(ctx: CompletionContext): Promise<Suggestion[]> {
  const all = await scanPath(ctx.prefix);
  return all.filter(
    (f) => /\.(test|spec)\.(ts|js|tsx|jsx)$/i.test(f.display) || (ctx.prefix !== "" && f.isDir),
  );
}


async function getScripts(): Promise<Suggestion[]> {
  const names = await getPkgScripts();
  return names.map((k) => ({
    display: k,
    description: t.suggestion_script,
  }));
}

async function getInstalledPackages(): Promise<Suggestion[]> {
  const names = await getPkgDeps();
  return names.map((name) => ({
    display: name,
    description: t.suggestion_installed,
  }));
}

async function getWorkspaceNames(): Promise<Suggestion[]> {
  return cache.get("workspace-names", 5000, async () => {
    try {
      const pkg = await readJson("package.json");
      const workspaces = pkg.workspaces || [];
      if (Array.isArray(workspaces)) {
        return workspaces.map((w: string) => ({
          display: w,
          description: t.suggestion_workspace,
        }));
      }
      if (workspaces && Array.isArray(workspaces.packages)) {
        return workspaces.packages.map((w: string) => ({
          display: w,
          description: t.suggestion_workspace,
        }));
      }
    } catch {}
    try {
      const out = await exec("npm ls -w --depth=0 --json");
      const json = JSON.parse(out);
      if (json.workspaces) {
        return Object.keys(json.workspaces).map((name) => ({
          display: name,
          description: t.suggestion_workspace,
        }));
      }
    } catch {}
    return [];
  });
}

async function getGlobalPackages(): Promise<Suggestion[]> {
  return cache.get("global-packages", 30000, async () => {
    try {
      const out = await exec("npm ls -g --depth=0 --json");
      const json = JSON.parse(out);
      const deps = json.dependencies || {};
      return Object.entries(deps)
        .filter(([_, info]: [string, any]) => !info.missing)
        .map(([name, _]: [string, any]) => ({
          display: name,
          description: t.suggestion_global,
        }));
    } catch {
      return [];
    }
  });
}

async function getPackageJsonFields(): Promise<Suggestion[]> {
  return cache.get("package-json-fields", 30000, async () => {
    const pkg = await readJson("package.json");
    const topKeys = Object.keys(pkg).filter((k) => !k.startsWith("_"));
    return topKeys.map((key) => ({
      display: key,
      description: t.suggestion_packageJsonField,
    }));
  });
}

async function getBinCommands(ctx: CompletionContext): Promise<Suggestion[]> {
  return scanPath(ctx.prefix, "node_modules/.bin");
}

const standardPkgFields = [
  "name",
  "version",
  "description",
  "main",
  "types",
  "type",
  "module",
  "exports",
  "files",
  "bin",
  "browser",
  "scripts",
  "dependencies",
  "devDependencies",
  "peerDependencies",
  "private",
  "license",
  "author",
  "repository",
  "homepage",
  "bugs",
  "keywords",
  "engines",
  "funding",
  "workspaces",
  "packageManager",
  "sideEffects",
  "unpkg",
  "jsdelivr",
  "publishConfig",
];

const pkg = dynamic(async () => getInstalledPackages());
const scan = dynamic(async (ctx) => scanPath(ctx.prefix));
const bin = dynamic(async (ctx) => getBinCommands(ctx));
const pkgOrGlobal = dynamic(async (ctx) => {
  if (ctx.options["-g"] || ctx.options["--global"]) return getGlobalPackages();
  const [pkgs, ws] = await Promise.all([getInstalledPackages(), getWorkspaceNames()]);
  return [...pkgs, ...ws];
});

const pkgFields = dynamic(async () => getPackageJsonFields());
const pkgSetFields = dynamic(async () => {
  const existing = await getPackageJsonFields();
  const existingKeys = new Set(existing.map((e) => e.display));
  const extra = standardPkgFields.filter((k) => !existingKeys.has(k));
  return [
    ...existing,
    ...extra.map((k) => ({ display: k, description: t.suggestion_packageJsonField })),
  ];
});
const pkgOrWorkspace = dynamic(async (ctx) => {
  if (ctx.options["--workspaces"] || ctx.options["-w"]) return getWorkspaceNames();
  const [pkgs, ws] = await Promise.all([getInstalledPackages(), getWorkspaceNames()]);
  return [...pkgs, ...ws];
});

const jsonOpt: OptionNode = { labels: ["--json"], description: t.opt_json };
const dryRunOpt: OptionNode = { labels: ["--dry-run"], description: t.opt_dryRun };
const forceOpt: OptionNode = { labels: ["-f", "--force"], description: t.opt_force };
const globalOpt: OptionNode = { labels: ["-g", "--global"], description: t.opt_global };
const registryOpt: OptionNode = { labels: ["--registry"], description: t.opt_registry, args: [] };
const otpOpt: OptionNode = { labels: ["--otp"], description: t.opt_otp, args: [] };
const workspaceOpt: OptionNode = {
  labels: ["-w", "--workspace"],
  description: t.opt_workspace,
  args: [],
};
const workspacesOpt: OptionNode = { labels: ["--workspaces"], description: t.opt_workspaces };
const includeRootOpt: OptionNode = {
  labels: ["--include-workspace-root"],
  description: t.opt_includeWorkspaceRoot,
};
const installLinksOpt: OptionNode = {
  labels: ["--install-links"],
  description: t.opt_installLinks,
};
const ignoreScriptsOpt: OptionNode = {
  labels: ["--ignore-scripts"],
  description: t.opt_ignoreScripts,
};
const foregroundScriptsOpt: OptionNode = {
  labels: ["--foreground-scripts"],
  description: t.opt_foregroundScripts,
};
const noAuditOpt: OptionNode = { labels: ["--no-audit"], description: t.opt_noAudit };
const noBinLinksOpt: OptionNode = { labels: ["--no-bin-links"], description: t.opt_noBinLinks };
const noFundOpt: OptionNode = { labels: ["--no-fund"], description: t.opt_noFund };
const noPackageLockOpt: OptionNode = {
  labels: ["--no-package-lock"],
  description: t.opt_noPackageLock,
};
const packageLockOnlyOpt: OptionNode = {
  labels: ["--package-lock-only"],
  description: t.opt_packageLockOnly,
};
const saveExactOpt: OptionNode = { labels: ["-E", "--save-exact"], description: t.opt_saveExact };
const noSaveOpt: OptionNode = { labels: ["--no-save"], description: t.opt_saveMode };
const saveOpts: OptionNode[] = [
  {
    labels: [
      "-S",
      "--save",
      "--save-prod",
      "--save-dev",
      "--save-optional",
      "--save-peer",
      "--save-bundle",
    ],
    description: t.opt_saveMode,
  },
  noSaveOpt,
];
const omitOpt: OptionNode = { labels: ["--omit"], description: t.opt_omit, args: [] };
const includeOpt: OptionNode = { labels: ["--include"], description: t.opt_include, args: [] };
const strictPeerDepsOpt: OptionNode = {
  labels: ["--strict-peer-deps"],
  description: t.opt_strictPeerDeps,
};
const installStrategyOpt: OptionNode = {
  labels: ["--install-strategy"],
  description: t.opt_installStrategy,
  args: [
    { display: t.arg_install_hoisted },
    { display: t.arg_install_nested },
    { display: t.arg_install_shallow },
    { display: t.arg_install_linked },
  ],
};
const legacyBundlingOpt: OptionNode = {
  labels: ["--legacy-bundling"],
  description: t.opt_legacyBundling,
};
const globalStyleOpt: OptionNode = { labels: ["--global-style"], description: t.opt_globalStyle };
const beforeOpt: OptionNode = { labels: ["--before"], description: t.opt_before, args: [] };
const cpuOpt: OptionNode = { labels: ["--cpu"], description: t.opt_cpu, args: [] };
const osOpt: OptionNode = { labels: ["--os"], description: t.opt_os, args: [] };
const libcOpt: OptionNode = { labels: ["--libc"], description: t.opt_libc, args: [] };
const preferDedupeOpt: OptionNode = {
  labels: ["--prefer-dedupe"],
  description: t.opt_preferDedupe,
};
const browserOpt: OptionNode = {
  labels: ["--browser"],
  description: t.opt_browser,
  args: [],
};
const noBrowserOpt: OptionNode = { labels: ["--no-browser"], description: t.opt_browser };
const depthOpt: OptionNode = { labels: ["--depth"], description: t.opt_depth, args: [] };
const longOpt: OptionNode = { labels: ["-l", "--long"], description: t.opt_long };
const parseableOpt: OptionNode = { labels: ["-p", "--parseable"], description: t.opt_parseable };
const allOpt: OptionNode = { labels: ["-a", "--all"], description: t.opt_all };
const linkOpt: OptionNode = { labels: ["--link"], description: t.opt_link };
const unicodeOpt: OptionNode = { labels: ["--no-unicode"], description: t.opt_noUnicode };
const tagOpt: OptionNode = { labels: ["--tag"], description: t.opt_tag, args: [] };
const accessOpt: OptionNode = {
  labels: ["--access"],
  description: t.opt_access,
  args: [{ display: t.arg_access_restricted }, { display: t.arg_access_public }],
};
const provenanceOpt: OptionNode = { labels: ["--provenance"], description: t.opt_provenance };
const provenanceFileOpt: OptionNode = {
  labels: ["--provenance-file"],
  description: t.opt_provenance,
  args: [],
};
const scriptShellOpt: OptionNode = {
  labels: ["--script-shell"],
  description: t.opt_scriptShell,
  args: [],
};
const ifPresentOpt: OptionNode = { labels: ["--if-present"], description: t.opt_ifPresent };
const editorOpt: OptionNode = { labels: ["--editor"], description: t.opt_editor, args: [] };
const locationOpt: OptionNode = {
  labels: ["-L", "--location"],
  description: t.opt_location,
  args: [
    { display: t.arg_location_global },
    { display: t.arg_location_user },
    { display: t.arg_location_project },
  ],
};
const searchOpts: OptionNode[] = [
  { labels: ["--searchlimit"], description: t.opt_searchLimit, args: [] },
  { labels: ["--searchopts"], description: t.opt_searchOpts, args: [] },
  { labels: ["--searchexclude"], description: t.opt_searchExclude, args: [] },
  {
    labels: ["--color"],
    description: t.opt_color,
    args: [{ display: "always" }, { display: "never" }, { display: "auto" }],
  },
  { labels: ["--no-color"], description: t.opt_color },
  { labels: ["--no-description"], description: t.opt_noDescription },
  { labels: ["--prefer-online"], description: t.opt_preferOnline },
  { labels: ["--prefer-offline"], description: t.opt_preferOffline },
  { labels: ["--offline"], description: t.opt_offline },
];
const authTypeOpt: OptionNode = {
  labels: ["--auth-type"],
  description: t.opt_authType,
  args: [{ display: t.arg_authType_legacy }, { display: t.arg_authType_web }],
};
const scopeOpt: OptionNode = { labels: ["--scope"], description: t.opt_scope, args: [] };
const yesOpt: OptionNode = { labels: ["-y", "--yes"], description: t.opt_yes };
const noWorkspacesUpdateOpt: OptionNode = {
  labels: ["--no-workspaces-update"],
  description: t.opt_noWorkspacesUpdate,
};
const initOpts: OptionNode[] = [
  { labels: ["--init-author-name"], description: t.opt_initAuthorName, args: [] },
  { labels: ["--init-author-url"], description: t.opt_initAuthorUrl, args: [] },
  { labels: ["--init-license"], description: t.opt_initLicense, args: [] },
  { labels: ["--init-module"], description: t.opt_initModule, args: [] },
  { labels: ["--init-type"], description: t.opt_initType, args: [] },
  { labels: ["--init-version"], description: t.opt_initVersion, args: [] },
  { labels: ["--init-private"], description: t.opt_initPrivate },
  noWorkspacesUpdateOpt,
];
const versionOpts: OptionNode[] = [
  { labels: ["--allow-same-version"], description: t.opt_allowSameVersion },
  { labels: ["--no-commit-hooks"], description: t.opt_noCommitHooks },
  { labels: ["--no-git-tag-version"], description: t.opt_noGitTagVersion },
  { labels: ["--preid"], description: t.opt_preid, args: [] },
  { labels: ["--sign-git-tag"], description: t.opt_signGitTag },
];
const callOpt: OptionNode = { labels: ["-c", "--call"], description: t.opt_call, args: [] };
const packageOptExec: OptionNode = {
  labels: ["--package"],
  description: t.opt_packageExec,
  args: [],
};
const sbomFormatOpt: OptionNode = {
  labels: ["--sbom-format"],
  description: t.opt_sbomFormat,
  args: [{ display: t.arg_sbomFormat_cyclonedx }, { display: t.arg_sbomFormat_spdx }],
};
const sbomTypeOpt: OptionNode = {
  labels: ["--sbom-type"],
  description: t.opt_sbomType,
  args: [
    { display: t.arg_sbomType_library },
    { display: t.arg_sbomType_application },
    { display: t.arg_sbomType_framework },
  ],
};
const expectResultsOpt: OptionNode = {
  labels: ["--expect-results"],
  description: t.opt_expectResults,
};
const expectResultCountOpt: OptionNode = {
  labels: ["--expect-result-count"],
  description: t.opt_expectResults,
  args: [],
};
const whichOpt: OptionNode = { labels: ["--which"], description: t.opt_which, args: [] };
const packDestinationOpt: OptionNode = {
  labels: ["--pack-destination"],
  description: t.opt_packDestination,
  args: [],
};
const auditLevelOpt: OptionNode = {
  labels: ["--audit-level"],
  description: t.opt_auditLevel,
  args: [
    { display: t.arg_auditLevel_info },
    { display: t.arg_auditLevel_low },
    { display: t.arg_auditLevel_moderate },
    { display: t.arg_auditLevel_high },
    { display: t.arg_auditLevel_critical },
    { display: t.arg_auditLevel_none },
  ],
};
const diffOpts: OptionNode[] = [
  { labels: ["--diff"], description: t.opt_diff, args: [] },
  { labels: ["--diff-name-only"], description: t.opt_diffNameOnly },
  { labels: ["--diff-unified"], description: t.opt_diffUnified, args: [] },
  { labels: ["--diff-ignore-all-space"], description: t.opt_diffIgnoreAllSpace },
  { labels: ["--diff-no-prefix"], description: t.opt_diffNoPrefix },
  { labels: ["--diff-src-prefix"], description: t.opt_diffSrcPrefix, args: [] },
  { labels: ["--diff-dst-prefix"], description: t.opt_diffDstPrefix, args: [] },
  { labels: ["--diff-text"], description: t.opt_diffText },
];
const cidrOpt: OptionNode = { labels: ["--cidr"], description: t.opt_cidr, args: [] };
const readOnlyOpt: OptionNode = { labels: ["--read-only"], description: t.opt_readOnly };
const shellOpt: OptionNode = { labels: ["--shell"], description: t.opt_shell, args: [] };
const viewerOpt: OptionNode = { labels: ["--viewer"], description: t.opt_viewer, args: [] };

export default createCompletion({
  npm: {
    description: t.cmd_npm,
    commands: {
      access: {
        description: t.cmd_access,
        options: [jsonOpt, otpOpt, registryOpt],
        commands: {
          list: {
            description: t.cmd_access_list,
            commands: {
              packages: { args: [] },
              collaborators: { args: [] },
            },
          },
          get: {
            description: t.cmd_access_get,
            commands: { status: { args: [] } },
          },
          set: {
            description: t.cmd_access_set,
            args: ["status=public", "status=private", "mfa=none", "mfa=publish", "mfa=automation"],
          },
          grant: {
            description: t.cmd_access_grant,
            args: { count: Infinity, items: ["read-only", "read-write"] },
          },
          revoke: {
            description: t.cmd_access_revoke,
            args: { count: Infinity },
          },
        },
      },
      adduser: {
        description: t.cmd_adduser,
        aliases: ["add-user"],
        options: [registryOpt, scopeOpt, authTypeOpt],
      },
      audit: {
        description: t.cmd_audit,
        options: [
          auditLevelOpt,
          dryRunOpt,
          forceOpt,
          jsonOpt,
          packageLockOnlyOpt,
          noPackageLockOpt,
          omitOpt,
          includeOpt,
          foregroundScriptsOpt,
          ignoreScriptsOpt,
          workspaceOpt,
          workspacesOpt,
          includeRootOpt,
          installLinksOpt,
        ],
        commands: {
          fix: { description: t.cmd_audit_fix },
          signatures: { description: t.cmd_audit_signatures },
        },
      },
      bugs: {
        description: t.cmd_bugs,
        aliases: ["issues"],
        options: [
          browserOpt,
          noBrowserOpt,
          registryOpt,
          workspaceOpt,
          workspacesOpt,
          includeRootOpt,
        ],
        args: pkgOrWorkspace,
      },
      cache: {
        description: t.cmd_cache,
        options: [{ labels: ["--cache"], description: t.opt_cachePath, args: [] }],
        commands: {
          add: { description: t.cmd_cache_add, args: [] },
          clean: { description: t.cmd_cache_clean },
          ls: { description: t.cmd_cache_ls, args: [] },
          verify: { description: t.cmd_cache_verify },
          npx: {
            description: t.cmd_cache_npx,
            commands: {
              ls: { description: t.cmd_cache_npx_ls },
              rm: { description: t.cmd_cache_npx_rm, args: [] },
              info: { description: t.cmd_cache_npx_info, args: [] },
            },
          },
        },
      },
      ci: {
        description: t.cmd_ci,
        aliases: ["clean-install", "ic", "install-clean", "isntall-clean"],
        options: [
          installStrategyOpt,
          legacyBundlingOpt,
          globalStyleOpt,
          omitOpt,
          includeOpt,
          strictPeerDepsOpt,
          foregroundScriptsOpt,
          ignoreScriptsOpt,
          noAuditOpt,
          noBinLinksOpt,
          noFundOpt,
          dryRunOpt,
          workspaceOpt,
          workspacesOpt,
          includeRootOpt,
          installLinksOpt,
        ],
      },
      completion: {
        description: t.cmd_completion,
      },
      config: {
        description: t.cmd_config,
        aliases: ["c"],
        options: [jsonOpt, globalOpt, editorOpt, locationOpt, longOpt],
        commands: {
          set: { description: t.cmd_config_set, args: { count: Infinity } },
          get: { description: t.cmd_config_get, args: { count: Infinity } },
          delete: { description: t.cmd_config_delete, args: { count: Infinity } },
          list: { description: t.cmd_config_list },
          edit: { description: t.cmd_config_edit },
          fix: { description: t.cmd_config_fix },
        },
      },
      dedupe: {
        description: t.cmd_dedupe,
        aliases: ["ddp"],
        options: [
          installStrategyOpt,
          legacyBundlingOpt,
          globalStyleOpt,
          strictPeerDepsOpt,
          noPackageLockOpt,
          omitOpt,
          includeOpt,
          ignoreScriptsOpt,
          noAuditOpt,
          noBinLinksOpt,
          noFundOpt,
          dryRunOpt,
          workspaceOpt,
          workspacesOpt,
          includeRootOpt,
          installLinksOpt,
        ],
      },
      deprecate: {
        description: t.cmd_deprecate,
        options: [registryOpt, otpOpt, dryRunOpt],
        args: { count: Infinity },
      },
      diff: {
        description: t.cmd_diff,
        options: [...diffOpts, globalOpt, tagOpt, workspaceOpt, workspacesOpt, includeRootOpt],
        args: pkg,
      },
      "dist-tag": {
        description: t.cmd_distTag,
        aliases: ["dist-tags"],
        options: [workspaceOpt, workspacesOpt, includeRootOpt],
        commands: {
          add: { description: t.cmd_distTag_add, args: [] },
          rm: { description: t.cmd_distTag_rm, args: [] },
          ls: { description: t.cmd_distTag_ls, args: [] },
        },
      },
      docs: {
        description: t.cmd_docs,
        aliases: ["home"],
        options: [
          browserOpt,
          noBrowserOpt,
          registryOpt,
          workspaceOpt,
          workspacesOpt,
          includeRootOpt,
        ],
        args: pkgOrWorkspace,
      },
      doctor: {
        description: t.cmd_doctor,
        options: [registryOpt],
        args: ["connection", "registry", "versions", "environment", "permissions", "cache"],
      },
      edit: {
        description: t.cmd_edit,
        options: [editorOpt],
        args: pkg,
      },
      exec: {
        description: t.cmd_exec,
        aliases: ["x"],
        options: [packageOptExec, callOpt, workspaceOpt, workspacesOpt, includeRootOpt],
        args: bin,
      },
      explain: {
        description: t.cmd_explain,
        aliases: ["why"],
        options: [jsonOpt, workspaceOpt],
        args: pkg,
      },
      explore: {
        description: t.cmd_explore,
        options: [shellOpt],
        args: pkg,
      },
      "find-dupes": {
        description: t.cmd_findDupes,
        options: [
          installStrategyOpt,
          legacyBundlingOpt,
          globalStyleOpt,
          strictPeerDepsOpt,
          noPackageLockOpt,
          omitOpt,
          includeOpt,
          ignoreScriptsOpt,
          noAuditOpt,
          noBinLinksOpt,
          noFundOpt,
          workspaceOpt,
          workspacesOpt,
          includeRootOpt,
          installLinksOpt,
        ],
      },
      fund: {
        description: t.cmd_fund,
        options: [jsonOpt, browserOpt, noBrowserOpt, unicodeOpt, workspaceOpt, whichOpt],
        args: pkg,
      },
      get: {
        description: t.cmd_get,
        options: [longOpt],
        args: [],
      },
      help: {
        description: t.cmd_help,
        aliases: ["hlep"],
        options: [viewerOpt],
        args: [
          "access",
          "adduser",
          "audit",
          "bugs",
          "cache",
          "ci",
          "completion",
          "config",
          "dedupe",
          "deprecate",
          "diff",
          "dist-tag",
          "docs",
          "doctor",
          "edit",
          "exec",
          "explain",
          "explore",
          "find-dupes",
          "fund",
          "get",
          "help",
          "help-search",
          "hook",
          "init",
          "install",
          "install-ci-test",
          "install-test",
          "link",
          "ll",
          "login",
          "logout",
          "ls",
          "org",
          "outdated",
          "owner",
          "pack",
          "ping",
          "pkg",
          "prefix",
          "profile",
          "prune",
          "publish",
          "query",
          "rebuild",
          "repo",
          "restart",
          "root",
          "run",
          "sbom",
          "search",
          "set",
          "shrinkwrap",
          "star",
          "stars",
          "start",
          "stop",
          "team",
          "test",
          "token",
          "undeprecate",
          "uninstall",
          "unpublish",
          "unstar",
          "update",
          "version",
          "view",
          "whoami",
        ],
      },
      "help-search": {
        description: t.cmd_helpSearch,
        options: [longOpt],
        args: [],
      },
      hook: {
        description: t.cmd_hook,
        options: [registryOpt, otpOpt],
        commands: {
          add: { description: t.cmd_hook_add, args: { count: Infinity } },
          ls: { description: t.cmd_hook_ls, args: [] },
          rm: { description: t.cmd_hook_rm, args: { count: Infinity } },
          update: { description: t.cmd_hook_update, args: { count: Infinity } },
        },
      },
      init: {
        description: t.cmd_init,
        aliases: ["create", "innit"],
        options: [
          ...initOpts,
          yesOpt,
          forceOpt,
          scopeOpt,
          workspaceOpt,
          workspacesOpt,
          includeRootOpt,
        ],
        args: [],
      },
      install: {
        description: t.cmd_install,
        aliases: [
          "add",
          "i",
          "in",
          "ins",
          "inst",
          "insta",
          "instal",
          "isnt",
          "isnta",
          "isntal",
          "isntall",
        ],
        options: [
          ...saveOpts,
          saveExactOpt,
          globalOpt,
          installStrategyOpt,
          legacyBundlingOpt,
          globalStyleOpt,
          omitOpt,
          includeOpt,
          strictPeerDepsOpt,
          preferDedupeOpt,
          noPackageLockOpt,
          packageLockOnlyOpt,
          foregroundScriptsOpt,
          ignoreScriptsOpt,
          noAuditOpt,
          beforeOpt,
          noBinLinksOpt,
          noFundOpt,
          dryRunOpt,
          cpuOpt,
          osOpt,
          libcOpt,
          workspaceOpt,
          workspacesOpt,
          includeRootOpt,
          installLinksOpt,
        ],
        args: { count: Infinity, items: pkgOrGlobal },
      },
      "install-ci-test": {
        description: t.cmd_installCiTest,
        aliases: ["cit", "clean-install-test", "sit"],
        options: [
          installStrategyOpt,
          legacyBundlingOpt,
          globalStyleOpt,
          omitOpt,
          includeOpt,
          strictPeerDepsOpt,
          foregroundScriptsOpt,
          ignoreScriptsOpt,
          noAuditOpt,
          noBinLinksOpt,
          noFundOpt,
          dryRunOpt,
          workspaceOpt,
          workspacesOpt,
          includeRootOpt,
          installLinksOpt,
        ],
      },
      "install-test": {
        description: t.cmd_installTest,
        aliases: ["it"],
        options: [
          ...saveOpts,
          saveExactOpt,
          globalOpt,
          installStrategyOpt,
          legacyBundlingOpt,
          globalStyleOpt,
          omitOpt,
          includeOpt,
          strictPeerDepsOpt,
          preferDedupeOpt,
          noPackageLockOpt,
          packageLockOnlyOpt,
          foregroundScriptsOpt,
          ignoreScriptsOpt,
          noAuditOpt,
          beforeOpt,
          noBinLinksOpt,
          noFundOpt,
          dryRunOpt,
          cpuOpt,
          osOpt,
          libcOpt,
          workspaceOpt,
          workspacesOpt,
          includeRootOpt,
          installLinksOpt,
        ],
        args: { count: Infinity, items: pkgOrGlobal },
      },
      link: {
        description: t.cmd_link,
        aliases: ["ln"],
        options: [
          ...saveOpts,
          saveExactOpt,
          globalOpt,
          installStrategyOpt,
          legacyBundlingOpt,
          globalStyleOpt,
          strictPeerDepsOpt,
          noPackageLockOpt,
          omitOpt,
          includeOpt,
          ignoreScriptsOpt,
          noAuditOpt,
          noBinLinksOpt,
          noFundOpt,
          dryRunOpt,
          workspaceOpt,
          workspacesOpt,
          includeRootOpt,
          installLinksOpt,
        ],
        args: { count: Infinity, items: dynamic(async (ctx) => {
          if (ctx.options["-g"] || ctx.options["--global"]) return getGlobalPackages();
          return scanPath(ctx.prefix);
        }) },
      },
      ll: {
        description: t.cmd_ll,
        aliases: ["la"],
        options: [
          allOpt,
          jsonOpt,
          longOpt,
          parseableOpt,
          globalOpt,
          depthOpt,
          omitOpt,
          includeOpt,
          linkOpt,
          packageLockOnlyOpt,
          unicodeOpt,
          workspaceOpt,
          workspacesOpt,
          includeRootOpt,
          installLinksOpt,
        ],
        args: { count: Infinity, items: pkgOrGlobal },
      },
      login: {
        description: t.cmd_login,
        options: [registryOpt, scopeOpt, authTypeOpt],
      },
      logout: {
        description: t.cmd_logout,
        options: [registryOpt, scopeOpt],
      },
      ls: {
        description: t.cmd_ls,
        aliases: ["list"],
        options: [
          allOpt,
          jsonOpt,
          longOpt,
          parseableOpt,
          globalOpt,
          depthOpt,
          omitOpt,
          includeOpt,
          linkOpt,
          packageLockOnlyOpt,
          unicodeOpt,
          workspaceOpt,
          workspacesOpt,
          includeRootOpt,
          installLinksOpt,
        ],
        args: { count: Infinity, items: pkgOrGlobal },
      },
      org: {
        description: t.cmd_org,
        aliases: ["ogr"],
        options: [registryOpt, otpOpt, jsonOpt, parseableOpt],
        commands: {
          set: {
            description: t.cmd_org_set,
            args: {
              count: Infinity,
              items: ["orgname", "username", "developer", "admin", "owner"],
            },
          },
          rm: {
            description: t.cmd_org_rm,
            args: { count: Infinity, items: ["orgname", "username"] },
          },
          ls: { description: t.cmd_org_ls, args: [] },
        },
      },
      outdated: {
        description: t.cmd_outdated,
        options: [allOpt, jsonOpt, longOpt, parseableOpt, globalOpt, workspaceOpt, beforeOpt],
        args: { count: Infinity, items: pkgOrGlobal },
      },
      owner: {
        description: t.cmd_owner,
        aliases: ["author"],
        options: [registryOpt, otpOpt, workspaceOpt, workspacesOpt],
        commands: {
          add: { description: t.cmd_owner_add, args: { count: Infinity } },
          rm: { description: t.cmd_owner_rm, args: { count: Infinity } },
          ls: { description: t.cmd_owner_ls, args: [] },
        },
      },
      pack: {
        description: t.cmd_pack,
        options: [
          dryRunOpt,
          jsonOpt,
          packDestinationOpt,
          workspaceOpt,
          workspacesOpt,
          includeRootOpt,
          ignoreScriptsOpt,
        ],
        args: { count: Infinity, items: scan },
      },
      ping: {
        description: t.cmd_ping,
        options: [registryOpt],
      },
      pkg: {
        description: t.cmd_pkg,
        options: [forceOpt, jsonOpt, workspaceOpt, workspacesOpt],
        commands: {
          get: {
            description: t.cmd_pkg_get,
            args: { count: Infinity, items: pkgFields },
          },
          set: {
            description: t.cmd_pkg_set,
            args: { count: Infinity, items: pkgSetFields },
          },
          delete: {
            description: t.cmd_pkg_delete,
            args: { count: Infinity, items: pkgFields },
          },
          fix: { description: t.cmd_pkg_fix },
        },
      },
      prefix: {
        description: t.cmd_prefix,
        options: [globalOpt],
      },
      profile: {
        description: t.cmd_profile,
        options: [registryOpt, jsonOpt, parseableOpt, otpOpt],
        commands: {
          "enable-2fa": {
            description: t.cmd_profile_enable2fa,
            args: ["auth-only", "auth-and-writes"],
          },
          "disable-2fa": { description: t.cmd_profile_disable2fa },
          get: { description: t.cmd_profile_get, args: [] },
          set: { description: t.cmd_profile_set, args: [] },
        },
      },
      prune: {
        description: t.cmd_prune,
        options: [
          omitOpt,
          includeOpt,
          dryRunOpt,
          jsonOpt,
          foregroundScriptsOpt,
          ignoreScriptsOpt,
          workspaceOpt,
          workspacesOpt,
          includeRootOpt,
          installLinksOpt,
        ],
        args: pkg,
      },
      publish: {
        description: t.cmd_publish,
        options: [
          tagOpt,
          accessOpt,
          dryRunOpt,
          otpOpt,
          workspaceOpt,
          workspacesOpt,
          includeRootOpt,
          provenanceOpt,
          provenanceFileOpt,
        ],
        args: scan,
      },
      query: {
        description: t.cmd_query,
        options: [
          globalOpt,
          workspaceOpt,
          workspacesOpt,
          includeRootOpt,
          packageLockOnlyOpt,
          expectResultsOpt,
          expectResultCountOpt,
        ],
        args: [],
      },
      rebuild: {
        description: t.cmd_rebuild,
        aliases: ["rb"],
        options: [
          globalOpt,
          noBinLinksOpt,
          foregroundScriptsOpt,
          ignoreScriptsOpt,
          workspaceOpt,
          workspacesOpt,
          includeRootOpt,
          installLinksOpt,
        ],
        args: { count: Infinity, items: pkg },
      },
      repo: {
        description: t.cmd_repo,
        options: [
          browserOpt,
          noBrowserOpt,
          registryOpt,
          workspaceOpt,
          workspacesOpt,
          includeRootOpt,
        ],
        args: pkgOrWorkspace,
      },
      restart: {
        description: t.cmd_restart,
        options: [ignoreScriptsOpt, scriptShellOpt],
        args: [],
      },
      root: {
        description: t.cmd_root,
        options: [globalOpt],
      },
      run: {
        description: t.cmd_run,
        aliases: ["run-script", "rum", "urn"],
        options: [
          workspaceOpt,
          workspacesOpt,
          includeRootOpt,
          ifPresentOpt,
          ignoreScriptsOpt,
          foregroundScriptsOpt,
          scriptShellOpt,
        ],
        args: dynamic(async () => cache.get("scripts", 5000, () => getScripts())),
      },
      sbom: {
        description: t.cmd_sbom,
        options: [
          omitOpt,
          packageLockOnlyOpt,
          sbomFormatOpt,
          sbomTypeOpt,
          workspaceOpt,
          workspacesOpt,
        ],
      },
      search: {
        description: t.cmd_search,
        aliases: ["find", "s", "se"],
        options: [jsonOpt, ...searchOpts, parseableOpt, registryOpt],
        args: [],
      },
      set: {
        description: t.cmd_set,
        options: [globalOpt, locationOpt],
        args: [],
      },
      shrinkwrap: {
        description: t.cmd_shrinkwrap,
      },
      star: {
        description: t.cmd_star,
        options: [registryOpt, unicodeOpt, otpOpt],
        args: [],
      },
      stars: {
        description: t.cmd_stars,
        options: [registryOpt],
        args: [],
      },
      start: {
        description: t.cmd_start,
        options: [ignoreScriptsOpt, scriptShellOpt],
        args: [],
      },
      stop: {
        description: t.cmd_stop,
        options: [ignoreScriptsOpt, scriptShellOpt],
        args: [],
      },
      team: {
        description: t.cmd_team,
        options: [registryOpt, otpOpt, parseableOpt, jsonOpt],
        commands: {
          create: { description: t.cmd_team_create, args: [] },
          destroy: { description: t.cmd_team_destroy, args: [] },
          add: { description: t.cmd_team_add, args: { count: 2 } },
          rm: { description: t.cmd_team_rm, args: { count: 2 } },
          ls: { description: t.cmd_team_ls, args: [] },
        },
      },
      test: {
        description: t.cmd_test,
        aliases: ["tst", "t"],
        options: [ignoreScriptsOpt, scriptShellOpt],
        args: [],
      },
      token: {
        description: t.cmd_token,
        options: [readOnlyOpt, cidrOpt, registryOpt, otpOpt],
        commands: {
          list: { description: t.cmd_token_list },
          revoke: { description: t.cmd_token_revoke, args: [] },
          create: { description: t.cmd_token_create },
        },
      },
      undeprecate: {
        description: t.cmd_undeprecate,
        options: [registryOpt, otpOpt, dryRunOpt],
        args: pkg,
      },
      uninstall: {
        description: t.cmd_uninstall,
        aliases: ["remove", "rm", "r", "un", "unlink"],
        options: [
          ...saveOpts,
          globalOpt,
          workspaceOpt,
          workspacesOpt,
          includeRootOpt,
          installLinksOpt,
        ],
        args: { count: Infinity, items: pkgOrGlobal },
      },
      unpublish: {
        description: t.cmd_unpublish,
        options: [dryRunOpt, forceOpt, workspaceOpt, workspacesOpt],
        args: [],
      },
      unstar: {
        description: t.cmd_unstar,
        options: [registryOpt, unicodeOpt, otpOpt],
        args: pkg,
      },
      update: {
        description: t.cmd_update,
        aliases: ["up", "upgrade", "udpate"],
        options: [
          ...saveOpts,
          globalOpt,
          installStrategyOpt,
          legacyBundlingOpt,
          globalStyleOpt,
          omitOpt,
          includeOpt,
          strictPeerDepsOpt,
          noPackageLockOpt,
          foregroundScriptsOpt,
          ignoreScriptsOpt,
          noAuditOpt,
          beforeOpt,
          noBinLinksOpt,
          noFundOpt,
          dryRunOpt,
          workspaceOpt,
          workspacesOpt,
          includeRootOpt,
          installLinksOpt,
        ],
        args: { count: Infinity, items: pkgOrGlobal },
      },
      version: {
        description: t.cmd_version,
        aliases: ["verison"],
        options: [
          ...versionOpts,
          jsonOpt,
          noWorkspacesUpdateOpt,
          workspaceOpt,
          workspacesOpt,
          includeRootOpt,
        ],
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
      },
      view: {
        description: t.cmd_view,
        aliases: ["info", "show", "v"],
        options: [jsonOpt, workspaceOpt, workspacesOpt, includeRootOpt],
        args: [],
      },
      whoami: {
        description: t.cmd_whoami,
        options: [registryOpt],
      },
    },
  },

  npx: {
    description: t.cmd_npx,
    options: [packageOptExec, callOpt, workspaceOpt, workspacesOpt, includeRootOpt],
    args: bin,
  },
});
