import { execFile, scanPath } from "sugg";
import * as t from "virtual:i18n/git";
// ---------- 动态补全辅助 ----------

async function getBranches(): Promise<Suggestion[]> {
  try {
    const out = await execFile("git", ["branch", "--format=%(refname:short)"]);
    return out
      .trim()
      .split("\n")
      .filter(Boolean)
      .map((b) => ({ display: b }));
  } catch {
    return [];
  }
}

async function getAllBranches(): Promise<Suggestion[]> {
  try {
    const out = await execFile("git", ["branch", "-a", "--format=%(refname:short)"]);
    return out
      .trim()
      .split("\n")
      .filter(Boolean)
      .map((b) => ({ display: b }));
  } catch {
    return [];
  }
}

async function getRemoteBranches(): Promise<Suggestion[]> {
  try {
    const out = await execFile("git", ["branch", "-r", "--format=%(refname:short)"]);
    return out
      .trim()
      .split("\n")
      .filter(Boolean)
      .map((b) => ({ display: b }));
  } catch {
    return [];
  }
}

async function getTags(): Promise<Suggestion[]> {
  try {
    const out = await execFile("git", ["tag"]);
    return out
      .trim()
      .split("\n")
      .filter(Boolean)
      .map((t) => ({ display: t }));
  } catch {
    return [];
  }
}

async function getRemotes(): Promise<Suggestion[]> {
  try {
    const out = await execFile("git", ["remote"]);
    return out
      .trim()
      .split("\n")
      .filter(Boolean)
      .map((r) => ({ display: r }));
  } catch {
    return [];
  }
}

async function getStashes(): Promise<Suggestion[]> {
  try {
    const out = await execFile("git", ["stash", "list", "--format=%gd: %s"]);
    return out
      .trim()
      .split("\n")
      .filter(Boolean)
      .map((line) => {
        const [ref, ...rest] = line.split(": ");
        return { display: ref, description: rest.join(": ") };
      });
  } catch {
    return [];
  }
}

async function getModifiedFiles(): Promise<Suggestion[]> {
  try {
    const out = await execFile("git", ["diff", "--name-only"]);
    return out
      .trim()
      .split("\n")
      .filter(Boolean)
      .map((f) => ({ display: f }));
  } catch {
    return [];
  }
}

async function getStagedFiles(): Promise<Suggestion[]> {
  try {
    const out = await execFile("git", ["diff", "--cached", "--name-only"]);
    return out
      .trim()
      .split("\n")
      .filter(Boolean)
      .map((f) => ({ display: f }));
  } catch {
    return [];
  }
}

async function getCommits(): Promise<Suggestion[]> {
  try {
    const out = await execFile("git", ["log", "--oneline", "-20"]);
    return out
      .trim()
      .split("\n")
      .filter(Boolean)
      .map((line) => {
        const [hash, ...rest] = line.split(" ");
        return { display: hash, description: rest.join(" ") };
      });
  } catch {
    return [];
  }
}

// ---------- 常用选项 ----------

const verboseOpt: OptionNode = { labels: ["-v", "--verbose"], description: t.opt_verbose };
const quietOpt: OptionNode = { labels: ["-q", "--quiet"], description: t.opt_quiet };
const forceOpt: OptionNode = { labels: ["-f", "--force"], description: t.opt_force };
const dryRunOpt: OptionNode = { labels: ["-n", "--dry-run"], description: t.opt_dry_run };
const patchOpt: OptionNode = { labels: ["-p", "--patch"], description: t.opt_patch };
const noVerifyOpt: OptionNode = { labels: ["--no-verify"], description: t.opt_no_verify };
const signoffOpt: OptionNode = { labels: ["-s", "--signoff"], description: t.opt_signoff };
const recurseSubmodulesOpt: OptionNode = {
  labels: ["--recurse-submodules"],
  description: t.opt_recurse_submodules,
};

// ---------- 命令定义 ----------

const cloneCmd: CommandNode = {
  description: t.cmd_clone,
  options: [
    verboseOpt,
    quietOpt,
    { labels: ["-b", "--branch"], description: t.opt_branch, args: [] },
    { labels: ["--depth"], description: t.opt_depth, args: [] },
    { labels: ["--single-branch"], description: t.opt_single_branch },
    { labels: ["--no-checkout"], description: t.opt_no_checkout },
    { labels: ["--bare"], description: t.opt_bare },
    { labels: ["--mirror"], description: t.opt_mirror },
    { labels: ["-o", "--origin"], description: t.opt_origin, args: [] },
    { labels: ["--recurse-submodules"], description: t.opt_recurse_submodules },
    { labels: ["--filter"], description: t.opt_filter, args: [] },
    { labels: ["--sparse"], description: t.opt_sparse },
    { labels: ["-j", "--jobs"], description: t.opt_jobs, args: [] },
  ],
  args: [],
};

const initCmd: CommandNode = {
  description: t.cmd_init,
  options: [
    quietOpt,
    { labels: ["--bare"], description: t.opt_bare },
    { labels: ["-b", "--initial-branch"], description: t.opt_initial_branch, args: [] },
    { labels: ["--separate-git-dir"], description: t.opt_separate_git_dir, args: [] },
  ],
  args: dynamic(async (ctx) => scanPath(ctx.prefix)),
};

const addCmd: CommandNode = {
  description: t.cmd_add,
  options: [
    verboseOpt,
    dryRunOpt,
    patchOpt,
    { labels: ["-i", "--interactive"], description: t.opt_interactive },
    { labels: ["-u", "--update"], description: t.opt_update },
    { labels: ["-A", "--all"], description: t.opt_all },
    { labels: ["-f", "--force"], description: t.opt_force },
    { labels: ["-N", "--intent-to-add"], description: t.opt_intent_to_add },
  ],
  args: dynamic(async (ctx) => scanPath(ctx.prefix)),
};

const mvCmd: CommandNode = {
  description: t.cmd_mv,
  options: [verboseOpt, dryRunOpt, forceOpt],
  args: dynamic(async (ctx) => scanPath(ctx.prefix)),
};

const restoreCmd: CommandNode = {
  description: t.cmd_restore,
  options: [
    patchOpt,
    {
      labels: ["-s", "--source"],
      description: t.opt_source,
      args: dynamic(async () => getAllBranches()),
    },
    { labels: ["-S", "--staged"], description: t.opt_staged },
    { labels: ["-W", "--worktree"], description: t.opt_worktree_restore },
  ],
  args: dynamic(async (ctx) => {
    const [modified, staged, files] = await Promise.all([
      getModifiedFiles(),
      getStagedFiles(),
      scanPath(ctx.prefix),
    ]);
    return [...modified, ...staged, ...files];
  }),
};

const rmCmd: CommandNode = {
  description: t.cmd_rm,
  options: [
    forceOpt,
    dryRunOpt,
    quietOpt,
    { labels: ["--cached"], description: t.opt_cached },
    { labels: ["-r"], description: t.opt_recursive_remove },
  ],
  args: dynamic(async (ctx) => scanPath(ctx.prefix)),
};

const statusCmd: CommandNode = {
  description: t.cmd_status,
  options: [
    verboseOpt,
    { labels: ["-s", "--short"], description: t.opt_short },
    { labels: ["-b", "--branch"], description: t.opt_branch },
    { labels: ["--show-stash"], description: t.opt_show_stash },
    { labels: ["-u", "--untracked-files"], description: t.opt_untracked_files },
    { labels: ["--ignored"], description: t.opt_ignored },
    { labels: ["--porcelain"], description: t.opt_porcelain },
  ],
};

const diffCmd: CommandNode = {
  description: t.cmd_diff,
  options: [
    { labels: ["--cached", "--staged"], description: t.opt_cached },
    { labels: ["--stat"], description: t.opt_stat },
    { labels: ["--name-only"], description: t.opt_name_only },
    { labels: ["--name-status"], description: t.opt_name_status },
    { labels: ["-U", "--unified"], description: t.opt_unified, args: [] },
    { labels: ["--color"], description: t.opt_color },
    { labels: ["-w", "--ignore-all-space"], description: t.opt_ignore_all_space },
  ],
  args: dynamic(async (ctx) => {
    const [branches, files] = await Promise.all([getAllBranches(), scanPath(ctx.prefix)]);
    return [...branches, ...files];
  }),
};

const logCmd: CommandNode = {
  description: t.cmd_log,
  options: [
    { labels: ["--oneline"], description: t.opt_oneline },
    { labels: ["--graph"], description: t.opt_graph },
    { labels: ["--decorate"], description: t.opt_decorate },
    { labels: ["-n"], description: t.opt_limit, args: [] },
    { labels: ["--all"], description: t.opt_all },
    { labels: ["--follow"], description: t.opt_follow },
    { labels: ["--author"], description: t.opt_author, args: [] },
    { labels: ["--since"], description: t.opt_since, args: [] },
    { labels: ["--until"], description: t.opt_until, args: [] },
    { labels: ["--grep"], description: t.opt_grep_log, args: [] },
    { labels: ["--stat"], description: t.opt_stat },
    { labels: ["-p", "--patch"], description: t.opt_patch },
    { labels: ["--name-only"], description: t.opt_name_only },
  ],
  args: dynamic(async (ctx) => {
    const [branches, tags, files] = await Promise.all([
      getAllBranches(),
      getTags(),
      scanPath(ctx.prefix),
    ]);
    return [...branches, ...tags, ...files];
  }),
};

const showCmd: CommandNode = {
  description: t.cmd_show,
  options: [
    { labels: ["--stat"], description: t.opt_stat },
    { labels: ["--name-only"], description: t.opt_name_only },
    { labels: ["--oneline"], description: t.opt_oneline },
  ],
  args: dynamic(async () => {
    const [commits, tags, branches] = await Promise.all([
      getCommits(),
      getTags(),
      getAllBranches(),
    ]);
    return [...commits, ...tags, ...branches];
  }),
};

const branchCmd: CommandNode = {
  description: t.cmd_branch,
  options: [
    verboseOpt,
    quietOpt,
    { labels: ["-a", "--all"], description: t.opt_all },
    { labels: ["-r", "--remotes"], description: t.opt_remotes },
    { labels: ["-d", "--delete"], description: t.opt_delete },
    { labels: ["-D"], description: t.opt_force_delete },
    { labels: ["-m", "--move"], description: t.opt_move },
    { labels: ["-M"], description: t.opt_force_move },
    { labels: ["-c", "--copy"], description: t.opt_copy },
    { labels: ["-f", "--force"], description: t.opt_force },
    { labels: ["-t", "--track"], description: t.opt_track },
    {
      labels: ["--set-upstream-to", "-u"],
      description: t.opt_set_upstream,
      args: dynamic(async () => getAllBranches()),
    },
    { labels: ["--unset-upstream"], description: t.opt_unset_upstream },
    { labels: ["--show-current"], description: t.opt_show_current },
    { labels: ["--merged"], description: t.opt_merged },
    { labels: ["--no-merged"], description: t.opt_no_merged },
  ],
  args: dynamic(async () => getBranches()),
};

const commitCmd: CommandNode = {
  description: t.cmd_commit,
  options: [
    verboseOpt,
    quietOpt,
    patchOpt,
    noVerifyOpt,
    signoffOpt,
    { labels: ["-m", "--message"], description: t.opt_message, args: [] },
    { labels: ["-a", "--all"], description: t.opt_commit_all },
    { labels: ["--amend"], description: t.opt_amend },
    { labels: ["-e", "--edit"], description: t.opt_edit },
    { labels: ["--allow-empty"], description: t.opt_allow_empty },
    { labels: ["--dry-run"], description: t.opt_dry_run },
    {
      labels: ["-F", "--file"],
      description: t.opt_read_file,
      args: dynamic(async (ctx) => scanPath(ctx.prefix)),
    },
    {
      labels: ["-C", "--reuse-message"],
      description: t.opt_reuse_message,
      args: dynamic(async () => getCommits()),
    },
    { labels: ["--fixup"], description: t.opt_fixup, args: dynamic(async () => getCommits()) },
    { labels: ["--squash"], description: t.opt_squash, args: dynamic(async () => getCommits()) },
  ],
};

const mergeCmd: CommandNode = {
  description: t.cmd_merge,
  options: [
    verboseOpt,
    quietOpt,
    noVerifyOpt,
    signoffOpt,
    { labels: ["--ff-only"], description: t.opt_ff_only },
    { labels: ["--no-ff"], description: t.opt_no_ff },
    { labels: ["--squash"], description: t.opt_squash },
    { labels: ["--abort"], description: t.opt_abort },
    { labels: ["--continue"], description: t.opt_continue },
    { labels: ["-m", "--message"], description: t.opt_message, args: [] },
    { labels: ["--stat"], description: t.opt_stat },
    { labels: ["--autostash"], description: t.opt_autostash },
    { labels: ["-s", "--strategy"], description: t.opt_strategy, args: [] },
  ],
  args: dynamic(async () => getAllBranches()),
};

const rebaseCmd: CommandNode = {
  description: t.cmd_rebase,
  options: [
    { labels: ["-i", "--interactive"], description: t.opt_interactive_rebase },
    { labels: ["--onto"], description: t.opt_onto, args: dynamic(async () => getAllBranches()) },
    { labels: ["--abort"], description: t.opt_abort },
    { labels: ["--continue"], description: t.opt_continue },
    { labels: ["--skip"], description: t.opt_skip },
    { labels: ["--autosquash"], description: t.opt_autosquash },
    { labels: ["--autostash"], description: t.opt_autostash },
    { labels: ["-f", "--force-rebase"], description: t.opt_force },
    { labels: ["-x", "--exec"], description: t.opt_exec, args: [] },
    { labels: ["-m", "--merge"], description: t.opt_merge_strategy },
    { labels: ["--update-refs"], description: t.opt_update_refs },
  ],
  args: dynamic(async () => getAllBranches()),
};

const resetCmd: CommandNode = {
  description: t.cmd_reset,
  options: [
    quietOpt,
    patchOpt,
    { labels: ["--soft"], description: t.opt_soft },
    { labels: ["--mixed"], description: t.opt_mixed },
    { labels: ["--hard"], description: t.opt_hard },
    { labels: ["--keep"], description: t.opt_keep },
  ],
  args: dynamic(async (ctx) => {
    const [commits, branches, files] = await Promise.all([
      getCommits(),
      getAllBranches(),
      scanPath(ctx.prefix),
    ]);
    return [...commits, ...branches, ...files];
  }),
};

const switchCmd: CommandNode = {
  description: t.cmd_switch,
  options: [
    quietOpt,
    { labels: ["-c", "--create"], description: t.opt_create_branch, args: [] },
    { labels: ["-C", "--force-create"], description: t.opt_force_create_branch, args: [] },
    { labels: ["-d", "--detach"], description: t.opt_detach },
    { labels: ["-t", "--track"], description: t.opt_track },
    { labels: ["-f", "--force"], description: t.opt_force },
    { labels: ["-m", "--merge"], description: t.opt_merge_3way },
    { labels: ["--orphan"], description: t.opt_orphan, args: [] },
  ],
  args: dynamic(async () => getAllBranches()),
};

const tagCmd: CommandNode = {
  description: t.cmd_tag,
  options: [
    { labels: ["-a", "--annotate"], description: t.opt_annotate },
    { labels: ["-m", "--message"], description: t.opt_message, args: [] },
    { labels: ["-d", "--delete"], description: t.opt_delete },
    { labels: ["-f", "--force"], description: t.opt_force },
    { labels: ["-l", "--list"], description: t.opt_list },
    { labels: ["-s", "--sign"], description: t.opt_sign },
    { labels: ["-v", "--verify"], description: t.opt_verify_tag },
    {
      labels: ["-F", "--file"],
      description: t.opt_read_file,
      args: dynamic(async (ctx) => scanPath(ctx.prefix)),
    },
  ],
  args: dynamic(async () => {
    const [tags, commits] = await Promise.all([getTags(), getCommits()]);
    return [...tags, ...commits];
  }),
};

const fetchCmd: CommandNode = {
  description: t.cmd_fetch,
  options: [
    verboseOpt,
    quietOpt,
    { labels: ["--all"], description: t.opt_all },
    { labels: ["-p", "--prune"], description: t.opt_prune },
    { labels: ["-P", "--prune-tags"], description: t.opt_prune_tags },
    { labels: ["-t", "--tags"], description: t.opt_tags },
    { labels: ["-f", "--force"], description: t.opt_force },
    { labels: ["-j", "--jobs"], description: t.opt_jobs, args: [] },
    { labels: ["--depth"], description: t.opt_depth, args: [] },
    { labels: ["--dry-run"], description: t.opt_dry_run },
    { labels: ["--set-upstream"], description: t.opt_set_upstream },
    recurseSubmodulesOpt,
  ],
  args: {
    count: Infinity,
    items: dynamic(async (ctx) => {
      // git fetch [<remote> [<refspec>...]]：任意多 refspec
      if (ctx.positionals.length === 0) return getRemotes();
      if (ctx.positionals.length === 1) return getRemoteBranches();
      return [];
    }),
  },
};

const pullCmd: CommandNode = {
  description: t.cmd_pull,
  options: [
    verboseOpt,
    quietOpt,
    { labels: ["-r", "--rebase"], description: t.opt_rebase },
    { labels: ["--ff-only"], description: t.opt_ff_only },
    { labels: ["--no-ff"], description: t.opt_no_ff },
    { labels: ["--squash"], description: t.opt_squash },
    { labels: ["-p", "--prune"], description: t.opt_prune },
    { labels: ["-t", "--tags"], description: t.opt_tags },
    { labels: ["--autostash"], description: t.opt_autostash },
    { labels: ["--depth"], description: t.opt_depth, args: [] },
    { labels: ["--set-upstream"], description: t.opt_set_upstream },
    recurseSubmodulesOpt,
  ],
  args: {
    count: Infinity,
    items: dynamic(async (ctx) => {
      // git pull [<remote> [<refspec>...]]：任意多 refspec
      if (ctx.positionals.length === 0) return getRemotes();
      if (ctx.positionals.length === 1) return getRemoteBranches();
      return [];
    }),
  },
};

const pushCmd: CommandNode = {
  description: t.cmd_push,
  options: [
    verboseOpt,
    quietOpt,
    noVerifyOpt,
    { labels: ["-u", "--set-upstream"], description: t.opt_set_upstream },
    { labels: ["-f", "--force"], description: t.opt_force },
    { labels: ["--force-with-lease"], description: t.opt_force_with_lease },
    { labels: ["--force-if-includes"], description: t.opt_force_if_includes },
    { labels: ["-d", "--delete"], description: t.opt_delete },
    { labels: ["--tags"], description: t.opt_tags },
    { labels: ["--all"], description: t.opt_all },
    { labels: ["-n", "--dry-run"], description: t.opt_dry_run },
    { labels: ["--prune"], description: t.opt_prune },
    { labels: ["-p", "--prune"], description: t.opt_prune },
    recurseSubmodulesOpt,
  ],
  args: {
    count: Infinity,
    items: dynamic(async (ctx) => {
      // git push [<remote> [<refspec>...]]：任意多 refspec
      if (ctx.positionals.length === 0) return getRemotes();
      if (ctx.positionals.length === 1) return getBranches();
      return [];
    }),
  },
};

const stashCmd: CommandNode = {
  description: t.cmd_stash,
  commands: {
    list: { description: t.cmd_stash_list },
    show: {
      description: t.cmd_stash_show,
      options: [{ labels: ["-u", "--include-untracked"], description: t.opt_include_untracked }],
      args: dynamic(async () => getStashes()),
    },
    drop: { description: t.cmd_stash_drop, args: dynamic(async () => getStashes()) },
    pop: {
      description: t.cmd_stash_pop,
      options: [{ labels: ["--index"], description: t.opt_index }, quietOpt],
      args: dynamic(async () => getStashes()),
    },
    apply: {
      description: t.cmd_stash_apply,
      options: [{ labels: ["--index"], description: t.opt_index }, quietOpt],
      args: dynamic(async () => getStashes()),
    },
    branch: {
      description: t.cmd_stash_branch,
      args: dynamic(async () => getStashes()),
    },
    push: {
      description: t.cmd_stash_push,
      options: [
        patchOpt,
        quietOpt,
        { labels: ["-m", "--message"], description: t.opt_message, args: [] },
        { labels: ["-u", "--include-untracked"], description: t.opt_include_untracked },
        { labels: ["-a", "--all"], description: t.opt_all },
        { labels: ["-k", "--keep-index"], description: t.opt_keep_index },
        { labels: ["-S", "--staged"], description: t.opt_staged },
      ],
      args: dynamic(async (ctx) => scanPath(ctx.prefix)),
    },
    clear: { description: t.cmd_stash_clear },
  },
};

const cherryPickCmd: CommandNode = {
  description: t.cmd_cherry_pick,
  options: [
    { labels: ["-e", "--edit"], description: t.opt_edit },
    { labels: ["-n", "--no-commit"], description: t.opt_no_commit },
    { labels: ["-x"], description: t.opt_append_commit },
    signoffOpt,
    { labels: ["--abort"], description: t.opt_abort },
    { labels: ["--continue"], description: t.opt_continue },
    { labels: ["--skip"], description: t.opt_skip },
    { labels: ["--ff"], description: t.opt_allow_ff },
  ],
  args: dynamic(async () => getCommits()),
};

const revertCmd: CommandNode = {
  description: t.cmd_revert,
  options: [
    { labels: ["-e", "--edit"], description: t.opt_edit },
    { labels: ["-n", "--no-commit"], description: t.opt_no_commit },
    signoffOpt,
    { labels: ["--abort"], description: t.opt_abort },
    { labels: ["--continue"], description: t.opt_continue },
    { labels: ["--skip"], description: t.opt_skip },
    { labels: ["-m", "--mainline"], description: t.opt_mainline, args: [] },
  ],
  args: dynamic(async () => getCommits()),
};

const bisectCmd: CommandNode = {
  description: t.cmd_bisect,
  commands: {
    start: { description: t.cmd_bisect_start },
    bad: { description: t.cmd_bisect_bad, args: dynamic(async () => getCommits()) },
    good: { description: t.cmd_bisect_good, args: dynamic(async () => getCommits()) },
    skip: { description: t.cmd_bisect_skip, args: dynamic(async () => getCommits()) },
    reset: { description: t.cmd_bisect_reset, args: dynamic(async () => getBranches()) },
    log: { description: t.cmd_bisect_log },
    run: { description: t.cmd_bisect_run, args: [] },
  },
};

const grepCmd: CommandNode = {
  description: t.cmd_grep,
  options: [
    { labels: ["-n", "--line-number"], description: t.opt_line_number },
    { labels: ["-i", "--ignore-case"], description: t.opt_ignore_case },
    { labels: ["-w", "--word-regexp"], description: t.opt_word_regexp },
    { labels: ["-l", "--files-with-matches"], description: t.opt_files_with_matches },
    { labels: ["-c", "--count"], description: t.opt_count },
    { labels: ["--cached"], description: t.opt_cached },
    { labels: ["-r", "--recursive"], description: t.opt_recursive },
    { labels: ["-e"], description: t.opt_pattern, args: [] },
  ],
  args: [],
};

const remoteCmd: CommandNode = {
  description: t.cmd_remote,
  options: [{ labels: ["-v", "--verbose"], description: t.opt_verbose }],
  commands: {
    add: {
      description: t.cmd_remote_add,
      options: [
        { labels: ["-f", "--fetch"], description: t.opt_fetch_after_add },
        { labels: ["-t", "--track"], description: t.opt_track, args: [] },
        { labels: ["--tags"], description: t.opt_tags },
        { labels: ["--mirror"], description: t.opt_mirror, args: [] },
      ],
      args: {
        count: 2,
        items: dynamic(async (ctx) => {
          // git remote add <name> <url>
          if (ctx.positionals.length === 0) {
            // 第一位置：新远端名（不直接补现有，避免与 add 语义冲突；提示常见命名）
            return [
              { display: "origin", value: "origin" },
              { display: "upstream", value: "upstream" },
            ];
          }
          if (ctx.positionals.length === 1) {
            // 第二位置：url 模板，按 ctx.positionals[0]（远端名）推断
            const name = ctx.positionals[0];
            return [`git@github.com:me/${name}.git`, `https://github.com/me/${name}.git`];
          }
          return [];
        }),
      },
    },
    rename: { description: t.cmd_remote_rename, args: dynamic(async () => getRemotes()) },
    remove: { description: t.cmd_remote_remove, args: dynamic(async () => getRemotes()) },
    "set-head": { description: t.cmd_remote_set_head, args: dynamic(async () => getRemotes()) },
    show: { description: t.cmd_remote_show, args: dynamic(async () => getRemotes()) },
    prune: {
      description: t.cmd_remote_prune,
      options: [dryRunOpt],
      args: dynamic(async () => getRemotes()),
    },
    update: {
      description: t.cmd_remote_update,
      options: [{ labels: ["-p", "--prune"], description: t.opt_prune }],
      args: dynamic(async () => getRemotes()),
    },
    "set-branches": {
      description: t.cmd_remote_set_branches,
      args: dynamic(async () => getRemotes()),
    },
    "get-url": { description: t.cmd_remote_get_url, args: dynamic(async () => getRemotes()) },
    "set-url": {
      description: t.cmd_remote_set_url,
      options: [
        { labels: ["--push"], description: t.opt_push },
        { labels: ["--add"], description: t.opt_add_url },
        { labels: ["--delete"], description: t.opt_delete_url },
      ],
      args: dynamic(async () => getRemotes()),
    },
  },
};

const submoduleCmd: CommandNode = {
  description: t.cmd_submodule,
  options: [quietOpt, { labels: ["--cached"], description: t.opt_cached }],
  commands: {
    add: {
      description: t.cmd_submodule_add,
      options: [
        forceOpt,
        { labels: ["-b", "--branch"], description: t.opt_branch, args: [] },
        { labels: ["--name"], description: t.opt_submodule_name, args: [] },
      ],
      args: [],
    },
    status: {
      description: t.cmd_submodule_status,
      options: [
        { labels: ["--cached"], description: t.opt_cached },
        { labels: ["--recursive"], description: t.opt_recursive },
      ],
    },
    init: { description: t.cmd_submodule_init },
    deinit: {
      description: t.cmd_submodule_deinit,
      options: [forceOpt, { labels: ["--all"], description: t.opt_all }],
    },
    update: {
      description: t.cmd_submodule_update,
      options: [
        { labels: ["--init"], description: t.opt_init },
        { labels: ["--remote"], description: t.opt_remote },
        { labels: ["-f", "--force"], description: t.opt_force },
        { labels: ["--recursive"], description: t.opt_recursive },
        { labels: ["-j", "--jobs"], description: t.opt_jobs, args: [] },
      ],
    },
    "set-branch": {
      description: t.cmd_submodule_set_branch,
      options: [
        { labels: ["-b", "--branch"], description: t.opt_branch, args: [] },
        { labels: ["-d", "--default"], description: t.opt_use_default_branch },
      ],
    },
    "set-url": { description: t.cmd_submodule_set_url, args: [] },
    summary: { description: t.cmd_submodule_summary },
    foreach: {
      description: t.cmd_submodule_foreach,
      options: [{ labels: ["--recursive"], description: t.opt_recursive }],
      args: [],
    },
    sync: {
      description: t.cmd_submodule_sync,
      options: [{ labels: ["--recursive"], description: t.opt_recursive }],
    },
  },
};

const worktreeCmd: CommandNode = {
  description: t.cmd_worktree,
  commands: {
    add: {
      description: t.cmd_worktree_add,
      options: [
        forceOpt,
        { labels: ["-b"], description: t.opt_create_new_branch, args: [] },
        { labels: ["-B"], description: t.opt_force_create_reset_branch, args: [] },
        { labels: ["-d", "--detach"], description: t.opt_detach },
        { labels: ["--orphan"], description: t.opt_orphan },
        { labels: ["--lock"], description: t.opt_lock },
      ],
      args: dynamic(async (ctx) => {
        const [files, branches] = await Promise.all([scanPath(ctx.prefix), getAllBranches()]);
        return [...files, ...branches];
      }),
    },
    list: {
      description: t.cmd_worktree_list,
      options: [verboseOpt, { labels: ["--porcelain"], description: t.opt_porcelain }],
    },
    lock: {
      description: t.cmd_worktree_lock,
      options: [{ labels: ["--reason"], description: t.opt_reason, args: [] }],
      args: [],
    },
    move: { description: t.cmd_worktree_move, args: [] },
    prune: { description: t.cmd_worktree_prune, options: [dryRunOpt, verboseOpt] },
    remove: { description: t.cmd_worktree_remove, options: [forceOpt], args: [] },
    repair: {
      description: t.cmd_worktree_repair,
      args: dynamic(async (ctx) => scanPath(ctx.prefix)),
    },
    unlock: { description: t.cmd_worktree_unlock, args: [] },
  },
};

const configFileOpts: OptionNode[] = [
  { labels: ["--global"], description: t.opt_global },
  { labels: ["--local"], description: t.opt_local },
  { labels: ["--system"], description: t.opt_system },
];

const configCmd: CommandNode = {
  description: t.cmd_config,
  commands: {
    list: {
      description: t.cmd_config_list,
      options: [
        ...configFileOpts,
        { labels: ["--show-origin"], description: t.opt_show_origin },
        { labels: ["--show-scope"], description: t.opt_show_scope },
      ],
    },
    get: { description: t.cmd_config_get, options: configFileOpts, args: [] },
    set: { description: t.cmd_config_set, options: configFileOpts, args: [] },
    unset: { description: t.cmd_config_unset, options: configFileOpts, args: [] },
    "rename-section": {
      description: t.cmd_config_rename_section,
      options: configFileOpts,
      args: [],
    },
    "remove-section": {
      description: t.cmd_config_remove_section,
      options: configFileOpts,
      args: [],
    },
    edit: { description: t.cmd_config_edit, options: configFileOpts },
  },
};

// ---------- 全局选项 ----------

const globalOpts: OptionNode[] = [
  { labels: ["-v", "--version"], description: t.opt_version },
  {
    labels: ["-C"],
    description: t.opt_run_in_path,
    args: dynamic(async (ctx) => scanPath(ctx.prefix)),
  },
  { labels: ["-c"], description: t.opt_config_kv, args: [] },
  { labels: ["-p", "--paginate"], description: t.opt_paginate },
  { labels: ["-P", "--no-pager"], description: t.opt_no_pager },
  { labels: ["--git-dir"], description: t.opt_git_dir, args: [] },
  { labels: ["--work-tree"], description: t.opt_work_tree, args: [] },
  { labels: ["--bare"], description: t.opt_bare },
  { labels: ["--no-replace-objects"], description: t.opt_no_replace_objects },
];

export default createCompletion({
  git: {
    description: t.cmd_git,
    options: globalOpts,
    commands: {
      clone: cloneCmd,
      init: initCmd,
      add: addCmd,
      mv: mvCmd,
      restore: restoreCmd,
      rm: rmCmd,
      bisect: bisectCmd,
      diff: diffCmd,
      grep: grepCmd,
      log: logCmd,
      show: showCmd,
      status: statusCmd,
      branch: branchCmd,
      commit: commitCmd,
      merge: mergeCmd,
      rebase: rebaseCmd,
      reset: resetCmd,
      switch: switchCmd,
      tag: tagCmd,
      fetch: fetchCmd,
      pull: pullCmd,
      push: pushCmd,
      stash: stashCmd,
      "cherry-pick": cherryPickCmd,
      revert: revertCmd,
      remote: remoteCmd,
      submodule: submoduleCmd,
      worktree: worktreeCmd,
      config: configCmd,
    },
  },
});
