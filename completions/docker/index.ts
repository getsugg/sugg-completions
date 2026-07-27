import { execFile } from "sugg";
import * as t from "virtual:i18n/docker";

async function getContainers(): Promise<Suggestion[]> {
  const out = await execFile("docker", ["ps", "--format", "{{.ID}}\t{{.Names}}"]);
  return out
    .trim()
    .split("\n")
    .filter(Boolean)
    .map((line) => {
      const [id, name] = line.split("\t");
      return { display: name, description: id };
    });
}

async function getImages(): Promise<Suggestion[]> {
  const out = await execFile("docker", ["images", "--format", "{{.Repository}}:{{.Tag}}"]);
  return out
    .trim()
    .split("\n")
    .filter(Boolean)
    .map((img) => ({ display: img }));
}

async function getNetworks(): Promise<Suggestion[]> {
  const out = await execFile("docker", ["network", "ls", "--format", "{{.Name}}"]);
  return out
    .trim()
    .split("\n")
    .filter(Boolean)
    .map((n) => ({ display: n }));
}

async function getVolumes(): Promise<Suggestion[]> {
  const out = await execFile("docker", ["volume", "ls", "--format", "{{.Name}}"]);
  return out
    .trim()
    .split("\n")
    .filter(Boolean)
    .map((v) => ({ display: v }));
}

const containers = dynamic(getContainers);
const images = dynamic(getImages);
const networks = dynamic(getNetworks);
const volumes = dynamic(getVolumes);

const allOpt: OptionNode = { labels: ["-a", "--all"], description: t.opt_all };
const quietOpt: OptionNode = { labels: ["-q", "--quiet"], description: t.opt_quiet };
const noTruncOpt: OptionNode = { labels: ["--no-trunc"], description: t.opt_no_trunc };
const formatOpt: OptionNode = { labels: ["--format"], description: t.opt_format, args: [] };
const filterOpt: OptionNode = { labels: ["-f", "--filter"], description: t.opt_filter, args: [] };
const forceOpt: OptionNode = { labels: ["-f", "--force"], description: t.opt_force };
const detachOpt: OptionNode = { labels: ["-d", "--detach"], description: t.opt_detach };
const interactiveOpt: OptionNode = {
  labels: ["-i", "--interactive"],
  description: t.opt_interactive,
};
const ttyOpt: OptionNode = { labels: ["-t", "--tty"], description: t.opt_tty };
const nameOpt: OptionNode = { labels: ["--name"], description: t.opt_name, args: [] };
const envOpt: OptionNode = { labels: ["-e", "--env"], description: t.opt_env, args: [] };
const envFileOpt: OptionNode = { labels: ["--env-file"], description: t.opt_env_file, args: [] };
const volumeOpt: OptionNode = { labels: ["-v", "--volume"], description: t.opt_volume, args: [] };
const labelOpt: OptionNode = { labels: ["-l", "--label"], description: t.opt_label, args: [] };
const restartOpt: OptionNode = { labels: ["--restart"], description: t.opt_restart, args: [] };
const userOpt: OptionNode = { labels: ["-u", "--user"], description: t.opt_user, args: [] };
const workdirOpt: OptionNode = {
  labels: ["-w", "--workdir"],
  description: t.opt_workdir,
  args: [],
};
const platformOpt: OptionNode = { labels: ["--platform"], description: t.opt_platform, args: [] };
const publishOpt: OptionNode = {
  labels: ["-p", "--publish"],
  description: t.opt_publish,
  args: [],
};
const networkOpt: OptionNode = { labels: ["--network"], description: t.opt_network, args: [] };
const signalOpt: OptionNode = {
  labels: ["-s", "--signal"],
  description: t.opt_signal,
  args: [],
};
const timeoutOpt: OptionNode = {
  labels: ["-t", "--timeout"],
  description: t.opt_timeout,
  args: [],
};
const detachKeysOpt: OptionNode = {
  labels: ["--detach-keys"],
  description: t.opt_detach_keys,
  args: [],
};
const entrypointOpt: OptionNode = {
  labels: ["--entrypoint"],
  description: t.opt_entrypoint,
  args: [],
};
const hostnameOpt: OptionNode = {
  labels: ["-h", "--hostname"],
  description: t.opt_hostname,
  args: [],
};
const addHostOpt: OptionNode = { labels: ["--add-host"], description: t.opt_add_host, args: [] };
const readOnlyOpt: OptionNode = { labels: ["--read-only"], description: t.opt_read_only };
const capAddOpt: OptionNode = { labels: ["--cap-add"], description: t.opt_cap_add, args: [] };
const capDropOpt: OptionNode = { labels: ["--cap-drop"], description: t.opt_cap_drop, args: [] };
const privilegedOpt: OptionNode = { labels: ["--privileged"], description: t.opt_privileged };
const dnsOpt: OptionNode = { labels: ["--dns"], description: t.opt_dns, args: [] };
const shmSizeOpt: OptionNode = { labels: ["--shm-size"], description: t.opt_shm_size, args: [] };
const initOpt: OptionNode = { labels: ["--init"], description: t.opt_init };
const rmOpt: OptionNode = { labels: ["--rm"], description: t.opt_rm };
const memoryOpt: OptionNode = { labels: ["-m", "--memory"], description: t.opt_memory, args: [] };
const cpusOpt: OptionNode = { labels: ["--cpus"], description: t.opt_cpus, args: [] };
const allTagsOpt: OptionNode = { labels: ["-a", "--all-tags"], description: t.opt_all_tags };
const verboseOpt: OptionNode = { labels: ["--verbose"], description: t.opt_verbose };
const sigProxyOpt: OptionNode = { labels: ["--sig-proxy"], description: t.opt_sig_proxy };
const sizeOpt: OptionNode = { labels: ["-s", "--size"], description: t.opt_size };
const followOpt: OptionNode = { labels: ["-f", "--follow"], description: t.opt_follow };
const sinceOpt: OptionNode = { labels: ["--since"], description: t.opt_since, args: [] };
const untilOpt: OptionNode = { labels: ["--until"], description: t.opt_until, args: [] };
const tailOpt: OptionNode = { labels: ["-n", "--tail"], description: t.opt_tail, args: [] };
const timestampsOpt: OptionNode = { labels: ["-t", "--timestamps"], description: t.opt_timestamps };
const fileOpt: OptionNode = { labels: ["-f", "--file"], description: t.opt_file, args: [] };
const buildArgOpt: OptionNode = { labels: ["--build-arg"], description: t.opt_build_arg, args: [] };
const noCacheOpt: OptionNode = { labels: ["--no-cache"], description: t.opt_no_cache };
const progressOpt: OptionNode = { labels: ["--progress"], description: t.opt_progress, args: [] };
const secretOpt: OptionNode = { labels: ["--secret"], description: t.opt_secret, args: [] };
const sshOpt: OptionNode = { labels: ["--ssh"], description: t.opt_ssh, args: [] };
const dryRunOpt: OptionNode = { labels: ["--dry-run"], description: t.opt_dry_run };
const noColorOpt: OptionNode = { labels: ["--no-color"], description: t.opt_no_color };
const noLogPrefixOpt: OptionNode = { labels: ["--no-log-prefix"], description: t.opt_no_log_prefix };
const noResolveOpt: OptionNode = { labels: ["--no-resolve"], description: t.opt_no_resolve };

const runCreateOpts: OptionNode[] = [
  addHostOpt,
  capAddOpt,
  capDropOpt,
  cpusOpt,
  detachKeysOpt,
  detachOpt,
  dnsOpt,
  entrypointOpt,
  envFileOpt,
  envOpt,
  hostnameOpt,
  initOpt,
  interactiveOpt,
  labelOpt,
  memoryOpt,
  nameOpt,
  networkOpt,
  platformOpt,
  privilegedOpt,
  publishOpt,
  quietOpt,
  readOnlyOpt,
  restartOpt,
  rmOpt,
  shmSizeOpt,
  sigProxyOpt,
  ttyOpt,
  userOpt,
  volumeOpt,
  workdirOpt,

  { labels: ["-a", "--attach"], description: t.opt_attach, args: [] },
  { labels: ["--annotation"], description: t.opt_annotation, args: [] },
  { labels: ["--blkio-weight"], description: t.opt_blkio_weight, args: [] },
  { labels: ["--blkio-weight-device"], description: t.opt_blkio_weight_device, args: [] },
  { labels: ["-c", "--cpu-shares"], description: t.opt_cpu_shares, args: [] },
  { labels: ["--cgroup-parent"], description: t.opt_cgroup_parent, args: [] },
  { labels: ["--cgroupns"], description: t.opt_cgroupns, args: [] },
  { labels: ["--cidfile"], description: t.opt_cidfile, args: [] },
  { labels: ["--cpu-count"], description: t.opt_cpu_count, args: [] },
  { labels: ["--cpu-percent"], description: t.opt_cpu_percent, args: [] },
  { labels: ["--cpu-period"], description: t.opt_cpu_period, args: [] },
  { labels: ["--cpu-quota"], description: t.opt_cpu_quota, args: [] },
  { labels: ["--cpu-rt-period"], description: t.opt_cpu_rt_period, args: [] },
  { labels: ["--cpu-rt-runtime"], description: t.opt_cpu_rt_runtime, args: [] },
  { labels: ["--cpuset-cpus"], description: t.opt_cpuset_cpus, args: [] },
  { labels: ["--cpuset-mems"], description: t.opt_cpuset_mems, args: [] },
  { labels: ["--device"], description: t.opt_device, args: [] },
  { labels: ["--device-cgroup-rule"], description: t.opt_device_cgroup_rule, args: [] },
  { labels: ["--device-read-bps"], description: t.opt_device_read_bps, args: [] },
  { labels: ["--device-read-iops"], description: t.opt_device_read_iops, args: [] },
  { labels: ["--device-write-bps"], description: t.opt_device_write_bps, args: [] },
  { labels: ["--device-write-iops"], description: t.opt_device_write_iops, args: [] },
  { labels: ["--dns-option"], description: t.opt_dns_option, args: [] },
  { labels: ["--dns-search"], description: t.opt_dns_search, args: [] },
  { labels: ["--domainname"], description: t.opt_domainname, args: [] },
  { labels: ["--expose"], description: t.opt_expose, args: [] },
  { labels: ["--gpus"], description: t.opt_gpu, args: [] },
  { labels: ["--group-add"], description: t.opt_group_add, args: [] },
  { labels: ["--health-cmd"], description: t.opt_health_cmd, args: [] },
  { labels: ["--health-interval"], description: t.opt_health_interval, args: [] },
  { labels: ["--health-retries"], description: t.opt_health_retries, args: [] },
  { labels: ["--health-start-interval"], description: t.opt_health_start_interval, args: [] },
  { labels: ["--health-start-period"], description: t.opt_health_start_period, args: [] },
  { labels: ["--health-timeout"], description: t.opt_health_timeout, args: [] },
  { labels: ["--io-maxbandwidth"], description: t.opt_io_maxbandwidth, args: [] },
  { labels: ["--io-maxiops"], description: t.opt_io_maxiops, args: [] },
  { labels: ["--ip"], description: t.opt_ip, args: [] },
  { labels: ["--ip6"], description: t.opt_ip6, args: [] },
  { labels: ["--ipc"], description: t.opt_ipc, args: [] },
  { labels: ["--isolation"], description: t.opt_isolation, args: [] },
  { labels: ["--label-file"], description: t.opt_label_file, args: [] },
  { labels: ["--link"], description: t.opt_link, args: [] },
  { labels: ["--link-local-ip"], description: t.opt_link_local_ip, args: [] },
  { labels: ["--log-driver"], description: t.opt_log_driver, args: [] },
  { labels: ["--log-opt"], description: t.opt_log_opt, args: [] },
  { labels: ["--mac-address"], description: t.opt_mac_address, args: [] },
  { labels: ["--memory-reservation"], description: t.opt_memory_reservation, args: [] },
  { labels: ["--memory-swap"], description: t.opt_memory_swap, args: [] },
  { labels: ["--memory-swappiness"], description: t.opt_memory_swappiness, args: [] },
  { labels: ["--mount"], description: t.opt_mount, args: [] },
  { labels: ["--network-alias"], description: t.opt_alias, args: [] },
  { labels: ["--no-healthcheck"], description: t.opt_no_healthcheck },
  { labels: ["--oom-kill-disable"], description: t.opt_oom_kill_disable },
  { labels: ["--oom-score-adj"], description: t.opt_oom_score_adj, args: [] },
  { labels: ["--pid"], description: t.opt_pid, args: [] },
  { labels: ["--pids-limit"], description: t.opt_pids_limit, args: [] },
  { labels: ["--pull"], description: t.opt_pull, args: [] },
  { labels: ["-P", "--publish-all"], description: t.opt_publish_all },
  { labels: ["--runtime"], description: t.opt_runtime, args: [] },
  { labels: ["--security-opt"], description: t.opt_security_opt, args: [] },
  { labels: ["--stop-signal"], description: t.opt_stop_signal, args: [] },
  { labels: ["--stop-timeout"], description: t.opt_stop_timeout, args: [] },
  { labels: ["--storage-opt"], description: t.opt_storage_opt, args: [] },
  { labels: ["--sysctl"], description: t.opt_sysctl, args: [] },
  { labels: ["--tmpfs"], description: t.opt_tmpfs, args: [] },
  { labels: ["--ulimit"], description: t.opt_ulimit, args: [] },
  { labels: ["--use-api-socket"], description: t.opt_use_api_socket },
  { labels: ["--userns"], description: t.opt_userns, args: [] },
  { labels: ["--uts"], description: t.opt_uts, args: [] },
  { labels: ["--volume-driver"], description: t.opt_volume_driver, args: [] },
  { labels: ["--volumes-from"], description: t.opt_volumes_from, args: [] },
];

const runCmd: CommandNode = {
  description: t.cmd_run,
  options: runCreateOpts,
  args: {
    count: Infinity,
    items: dynamic(async (ctx) => {
      if (ctx.positionals.length === 0) return getImages();
      return [];
    }),
  },
};

const execCmd: CommandNode = {
  description: t.cmd_exec,
  options: [
    detachOpt,
    interactiveOpt,
    ttyOpt,
    privilegedOpt,
    userOpt,
    workdirOpt,
    envOpt,
    envFileOpt,
    detachKeysOpt,
  ],
  args: {
    count: Infinity,
    items: dynamic(async (ctx) => {
      if (ctx.positionals.length === 0) return getContainers();
      return [];
    }),
  },
};

const psCmd: CommandNode = {
  description: t.cmd_ps,
  options: [allOpt, filterOpt, formatOpt, { labels: ["-n", "--last"], description: t.opt_last, args: [] }, { labels: ["-l", "--latest"], description: t.opt_latest }, noTruncOpt, quietOpt, sizeOpt],
};

const buildOpts: OptionNode[] = [
  addHostOpt,
  buildArgOpt,
  fileOpt,
  labelOpt,
  networkOpt,
  noCacheOpt,
  platformOpt,
  progressOpt,
  quietOpt,
  secretOpt,
  shmSizeOpt,
  sshOpt,

  { labels: ["--allow"], description: t.opt_allow, args: [] },
  { labels: ["--annotation"], description: t.opt_annotation_build, args: [] },
  { labels: ["--attest"], description: t.opt_attest, args: [] },
  { labels: ["--build-context"], description: t.opt_build_context, args: [] },
  { labels: ["--builder"], description: t.opt_builder, args: [] },
  { labels: ["--cache-from"], description: t.opt_cache_from, args: [] },
  { labels: ["--cache-to"], description: t.opt_cache_to, args: [] },
  { labels: ["--call"], description: t.opt_call, args: [] },
  { labels: ["--cgroup-parent"], description: t.opt_cgroup_parent, args: [] },
  { labels: ["--check"], description: t.opt_check },
  { labels: ["-D", "--debug"], description: t.opt_debug },
  { labels: ["--iidfile"], description: t.opt_iidfile, args: [] },
  { labels: ["--load"], description: t.opt_load },
  { labels: ["--metadata-file"], description: t.opt_metadata_file, args: [] },
  { labels: ["--no-cache-filter"], description: t.opt_no_cache_filter, args: [] },
  { labels: ["-o", "--output"], description: t.opt_output, args: [] },
  { labels: ["--policy"], description: t.opt_policy, args: [] },
  { labels: ["--provenance"], description: t.opt_provenance, args: [] },
  { labels: ["--pull"], description: t.opt_pull },
  { labels: ["--push"], description: t.opt_push_build },
  { labels: ["--resource"], description: t.opt_resource, args: [] },
  { labels: ["--sbom"], description: t.opt_sbom, args: [] },
  { labels: ["-t", "--tag"], description: t.opt_tag, args: [] },
  { labels: ["--target"], description: t.opt_target, args: [] },
  { labels: ["--ulimit"], description: t.opt_ulimit, args: [] },
];

const buildCmd: CommandNode = {
  description: t.cmd_build,
  options: buildOpts,
  args: [],
};

const pullCmd: CommandNode = {
  description: t.cmd_pull,
  options: [allTagsOpt, platformOpt, quietOpt],
  args: [],
};

const pushCmd: CommandNode = {
  description: t.cmd_push,
  options: [allTagsOpt, platformOpt, quietOpt],
  args: [],
};

const imagesCmd: CommandNode = {
  description: t.cmd_images,
  options: [
    allOpt,
    { labels: ["--digests"], description: t.opt_digests },
    filterOpt,
    formatOpt,
    noTruncOpt,
    quietOpt,
    { labels: ["--tree"], description: t.opt_tree },
  ],
  args: [],
};

const loginCmd: CommandNode = {
  description: t.cmd_login,
  options: [
    { labels: ["-p", "--password"], description: t.opt_password, args: [] },
    { labels: ["--password-stdin"], description: t.opt_password_stdin },
    { labels: ["-u", "--username"], description: t.opt_username, args: [] },
  ],
  args: [],
};

const logoutCmd: CommandNode = {
  description: t.cmd_logout,
  args: [],
};

const searchCmd: CommandNode = {
  description: t.cmd_search,
  options: [
    filterOpt,
    formatOpt,
    { labels: ["--limit"], description: t.opt_limit_search, args: [] },
    noTruncOpt,
  ],
  args: [],
};

const versionCmd: CommandNode = {
  description: t.cmd_version,
  options: [formatOpt],
};

const infoCmd: CommandNode = {
  description: t.cmd_info,
  options: [formatOpt],
};

const startCmd: CommandNode = {
  description: t.cmd_start,
  options: [
    { labels: ["-a", "--attach"], description: t.opt_attach },
    { labels: ["--checkpoint"], description: t.opt_checkpoint, args: [] },
    { labels: ["--checkpoint-dir"], description: t.opt_checkpoint_dir, args: [] },
    detachKeysOpt,
    interactiveOpt,
  ],
  args: { count: Infinity, items: containers },
};

const stopCmd: CommandNode = {
  description: t.cmd_stop,
  options: [signalOpt, timeoutOpt],
  args: { count: Infinity, items: containers },
};

const restartCmd: CommandNode = {
  description: t.cmd_restart,
  options: [signalOpt, timeoutOpt],
  args: { count: Infinity, items: containers },
};

const killCmd: CommandNode = {
  description: t.cmd_kill,
  options: [signalOpt],
  args: { count: Infinity, items: containers },
};

const pauseCmd: CommandNode = {
  description: t.cmd_pause,
  args: { count: Infinity, items: containers },
};

const unpauseCmd: CommandNode = {
  description: t.cmd_unpause,
  args: { count: Infinity, items: containers },
};

const waitCmd: CommandNode = {
  description: t.cmd_wait,
  args: { count: Infinity, items: containers },
};

const rmCmd: CommandNode = {
  description: t.cmd_rm,
  options: [
    forceOpt,
    { labels: ["-l", "--link"], description: t.opt_link_rm },
    { labels: ["-v", "--volumes"], description: t.opt_volumes_rm },
  ],
  args: { count: Infinity, items: containers },
};

const rmiCmd: CommandNode = {
  description: t.cmd_rmi,
  options: [forceOpt, { labels: ["--no-prune"], description: t.opt_no_prune }, platformOpt],
  args: { count: Infinity, items: images },
};

const logsCmd: CommandNode = {
  description: t.cmd_logs,
  options: [
    { labels: ["--details"], description: t.opt_details },
    followOpt,
    sinceOpt,
    tailOpt,
    timestampsOpt,
    untilOpt,
  ],
  args: containers,
};

const inspectCmd: CommandNode = {
  description: t.cmd_inspect,
  options: [formatOpt, sizeOpt, { labels: ["--type"], description: t.opt_type, args: [] }],
  args: { count: Infinity, items: [] },
};

const cpCmd: CommandNode = {
  description: t.cmd_cp,
  options: [
    { labels: ["-a", "--archive"], description: t.opt_archive },
    { labels: ["-L", "--follow-link"], description: t.opt_follow_link },
    quietOpt,
  ],
  args: { count: 2, items: [] },
};

const commitCmd: CommandNode = {
  description: t.cmd_commit,
  options: [
    { labels: ["-a", "--author"], description: t.opt_author, args: [] },
    { labels: ["-c", "--change"], description: t.opt_change, args: [] },
    { labels: ["-m", "--message"], description: t.opt_message, args: [] },
    { labels: ["--no-pause"], description: t.opt_no_pause },
  ],
  args: { count: 2, items: containers },
};

const tagCmd: CommandNode = {
  description: t.cmd_tag,
  args: [],
};

const statsCmd: CommandNode = {
  description: t.cmd_stats,
  options: [
    allOpt,
    formatOpt,
    { labels: ["--no-stream"], description: t.opt_no_stream },
    noTruncOpt,
  ],
  args: { count: Infinity, items: containers },
};

const topCmd: CommandNode = {
  description: t.cmd_top,
  args: { count: 1, items: containers },
};

const portCmd: CommandNode = {
  description: t.cmd_port,
  args: { count: 1, items: containers },
};

const renameCmd: CommandNode = {
  description: t.cmd_rename,
  args: {
    count: 2,
    items: dynamic(async (ctx) => {
      if (ctx.positionals.length === 0) return getContainers();
      return [];
    }),
  },
};

const diffCmd: CommandNode = {
  description: t.cmd_diff,
  args: containers,
};

const eventsCmd: CommandNode = {
  description: t.cmd_events,
  options: [filterOpt, formatOpt, sinceOpt, untilOpt],
};

const historyCmd: CommandNode = {
  description: t.cmd_history,
  options: [
    formatOpt,
    { labels: ["-H", "--human"], description: t.opt_human },
    noTruncOpt,
    platformOpt,
    quietOpt,
  ],
  args: images,
};

const saveCmd: CommandNode = {
  description: t.cmd_save,
  options: [{ labels: ["-o", "--output"], description: t.opt_output_file, args: [] }, platformOpt],
  args: { count: Infinity, items: images },
};

const loadCmd: CommandNode = {
  description: t.cmd_load,
  options: [
    { labels: ["-i", "--input"], description: t.opt_input, args: [] },
    platformOpt,
    quietOpt,
  ],
};

const exportCmd: CommandNode = {
  description: t.cmd_export,
  options: [{ labels: ["-o", "--output"], description: t.opt_output_file, args: [] }],
  args: containers,
};

const importCmd: CommandNode = {
  description: t.cmd_import,
  options: [
    { labels: ["-c", "--change"], description: t.opt_change, args: [] },
    { labels: ["-m", "--message"], description: t.opt_message, args: [] },
    platformOpt,
  ],
  args: [],
};

const createCmd: CommandNode = {
  description: t.cmd_create,
  options: runCreateOpts,
  args: {
    count: Infinity,
    items: dynamic(async (ctx) => {
      if (ctx.positionals.length === 0) return getImages();
      return [];
    }),
  },
};

const attachCmd: CommandNode = {
  description: t.cmd_attach,
  options: [detachKeysOpt, { labels: ["--no-stdin"], description: t.opt_no_stdin }, sigProxyOpt],
  args: containers,
};

const updateCmd: CommandNode = {
  description: t.cmd_update,
  options: [
    { labels: ["--blkio-weight"], description: t.opt_blkio_weight, args: [] },
    { labels: ["--cpu-period"], description: t.opt_cpu_period, args: [] },
    { labels: ["--cpu-quota"], description: t.opt_cpu_quota, args: [] },
    { labels: ["--cpu-rt-period"], description: t.opt_cpu_rt_period, args: [] },
    { labels: ["--cpu-rt-runtime"], description: t.opt_cpu_rt_runtime, args: [] },
    { labels: ["-c", "--cpu-shares"], description: t.opt_cpu_shares, args: [] },
    cpusOpt,
    { labels: ["--cpuset-cpus"], description: t.opt_cpuset_cpus, args: [] },
    { labels: ["--cpuset-mems"], description: t.opt_cpuset_mems, args: [] },
    memoryOpt,
    { labels: ["--memory-reservation"], description: t.opt_memory_reservation, args: [] },
    { labels: ["--memory-swap"], description: t.opt_memory_swap, args: [] },
    { labels: ["--pids-limit"], description: t.opt_pids_limit, args: [] },
    restartOpt,
  ],
  args: { count: Infinity, items: containers },
};

const containerSubCmds: Record<string, CommandNode> = {
  attach: attachCmd,
  commit: commitCmd,
  cp: cpCmd,
  create: { ...createCmd, description: t.cmd_container_create },
  diff: diffCmd,
  exec: execCmd,
  export: exportCmd,
  inspect: { ...inspectCmd, description: t.cmd_container_inspect },
  kill: killCmd,
  logs: logsCmd,
  ls: { ...psCmd, description: t.cmd_container_ls },
  pause: pauseCmd,
  port: portCmd,
  prune: { description: t.cmd_container_prune, options: [filterOpt, forceOpt] },
  rename: renameCmd,
  restart: restartCmd,
  rm: rmCmd,
  run: runCmd,
  start: startCmd,
  stats: statsCmd,
  stop: stopCmd,
  top: topCmd,
  unpause: unpauseCmd,
  update: updateCmd,
  wait: waitCmd,
};

const containerCmd: CommandNode = {
  description: t.cmd_container,
  commands: containerSubCmds,
};

const imageSubCmds: Record<string, CommandNode> = {
  build: buildCmd,
  history: historyCmd,
  import: importCmd,
  inspect: { ...inspectCmd, description: t.cmd_image_inspect },
  load: loadCmd,
  ls: { ...imagesCmd, description: t.cmd_image_ls },
  prune: { description: t.cmd_image_prune, options: [allOpt, filterOpt, forceOpt] },
  pull: pullCmd,
  push: pushCmd,
  rm: rmiCmd,
  save: saveCmd,
  tag: tagCmd,
};

const imageCmd: CommandNode = {
  description: t.cmd_image,
  commands: imageSubCmds,
};

const volumeCmd: CommandNode = {
  description: t.cmd_volume,
  commands: {
    create: {
      description: t.cmd_volume_create,
      options: [
        { labels: ["-d", "--driver"], description: t.opt_driver, args: [] },
        labelOpt,
        { labels: ["-o", "--opt"], description: t.opt_opt, args: [] },
        { labels: ["--availability"], description: t.opt_availability, args: [] },
        { labels: ["--group"], description: t.opt_group_vol, args: [] },
        { labels: ["--limit-bytes"], description: t.opt_limit_bytes, args: [] },
        { labels: ["--required-bytes"], description: t.opt_required_bytes, args: [] },
        { labels: ["--scope"], description: t.opt_scope_vol, args: [] },
        { labels: ["--secret"], description: t.opt_secret_vol, args: [] },
        { labels: ["--sharing"], description: t.opt_sharing, args: [] },
        { labels: ["--topology-preferred"], description: t.opt_topology_preferred, args: [] },
        { labels: ["--topology-required"], description: t.opt_topology_required, args: [] },
        { labels: ["--type"], description: t.opt_type_vol, args: [] },
      ],
    },
    inspect: { description: t.cmd_volume_inspect, options: [formatOpt] },
    ls: {
      description: t.cmd_volume_ls,
      options: [
        filterOpt,
        formatOpt,
        quietOpt,
        { labels: ["--cluster"], description: t.opt_cluster_vol },
      ],
    },
    prune: { description: t.cmd_volume_prune, options: [allOpt, filterOpt, forceOpt] },
    rm: {
      description: t.cmd_volume_rm,
      options: [forceOpt],
      args: { count: Infinity, items: volumes },
    },
    update: {
      description: t.cmd_volume_update,
      options: [{ labels: ["--availability"], description: t.opt_availability, args: [] }],
    },
  },
};

const networkCmd: CommandNode = {
  description: t.cmd_network,
  commands: {
    connect: {
      description: t.cmd_network_connect,
      options: [
        { labels: ["--alias"], description: t.opt_alias, args: [] },
        { labels: ["--ip"], description: t.opt_ip, args: [] },
        { labels: ["--ip6"], description: t.opt_ip6, args: [] },
        { labels: ["--link"], description: t.opt_link, args: [] },
        { labels: ["--driver-opt"], description: t.opt_driver_opt, args: [] },
        { labels: ["--gw-priority"], description: t.opt_gw_priority, args: [] },
        { labels: ["--link-local-ip"], description: t.opt_link_local_ip, args: [] },
      ],
      args: {
        count: Infinity,
        items: dynamic(async (ctx) => {
          if (ctx.positionals.length === 0) return getNetworks();
          if (ctx.positionals.length === 1) return getContainers();
          return [];
        }),
      },
    },
    create: {
      description: t.cmd_network_create,
      options: [
        { labels: ["-d", "--driver"], description: t.opt_driver, args: [] },
        { labels: ["-o", "--opt"], description: t.opt_opt, args: [] },
        { labels: ["--subnet"], description: t.opt_subnet, args: [] },
        { labels: ["--gateway"], description: t.opt_gateway, args: [] },
        { labels: ["--ip-range"], description: t.opt_ip_range, args: [] },
        { labels: ["--scope"], description: t.opt_scope, args: [] },
        { labels: ["--attachable"], description: t.opt_attachable },
        { labels: ["--ingress"], description: t.opt_ingress },
        { labels: ["--internal"], description: t.opt_internal },
        { labels: ["--aux-address"], description: t.opt_aux_address, args: [] },
        { labels: ["--config-from"], description: t.opt_config_from, args: [] },
        { labels: ["--config-only"], description: t.opt_config_only },
        { labels: ["--ipam-driver"], description: t.opt_ipam_driver, args: [] },
        { labels: ["--ipam-opt"], description: t.opt_ipam_opt, args: [] },
        { labels: ["--ipv4"], description: t.opt_ipv4 },
        { labels: ["--ipv6"], description: t.opt_ipv6 },
        labelOpt,
      ],
    },
    disconnect: {
      description: t.cmd_network_disconnect,
      options: [forceOpt],
      args: {
        count: Infinity,
        items: dynamic(async (ctx) => {
          if (ctx.positionals.length === 0) return getNetworks();
          if (ctx.positionals.length === 1) return getContainers();
          return [];
        }),
      },
    },
    inspect: { description: t.cmd_network_inspect, options: [formatOpt, verboseOpt] },
    ls: { description: t.cmd_network_ls, options: [filterOpt, formatOpt, quietOpt, noTruncOpt] },
    prune: { description: t.cmd_network_prune, options: [filterOpt, forceOpt] },
    rm: {
      description: t.cmd_network_rm,
      options: [forceOpt],
      args: { count: Infinity, items: networks },
    },
  },
};

const systemCmd: CommandNode = {
  description: t.cmd_system,
  commands: {
    df: { description: t.cmd_system_df, options: [formatOpt, verboseOpt] },
    events: eventsCmd,
    info: infoCmd,
    prune: {
      description: t.cmd_system_prune,
      options: [
        allOpt,
        filterOpt,
        forceOpt,
        { labels: ["--volumes"], description: t.opt_volumes_system },
      ],
    },
  },
};

const composeCmd: CommandNode = {
  description: t.cmd_compose,
  options: [
    { labels: ["-f", "--file"], description: t.opt_config, args: [] },
    { labels: ["-p", "--project-name"], description: t.opt_project_name, args: [] },
    { labels: ["--profile"], description: t.opt_profile, args: [] },
    { labels: ["--project-directory"], description: t.opt_project_dir, args: [] },
    { labels: ["--ansi"], description: t.opt_ansi, args: [] },
    { labels: ["--compatibility"], description: t.opt_compatibility },
    dryRunOpt,
    envFileOpt,
    { labels: ["--parallel"], description: t.opt_parallel, args: [] },
    progressOpt,
    { labels: ["--all-resources"], description: t.opt_all_resources },
  ],
  commands: {
    up: {
      description: t.cmd_compose_up,
      options: [
        detachOpt,
        { labels: ["--build"], description: t.opt_build_compose },
        { labels: ["--no-build"], description: t.opt_no_build },
        { labels: ["--no-start"], description: t.opt_no_start },
        { labels: ["--abort-on-container-exit"], description: t.opt_abort_on_container_exit },
        { labels: ["--abort-on-container-failure"], description: t.opt_abort_on_container_failure },
        { labels: ["--attach"], description: t.opt_attach_compose, args: [] },
        { labels: ["--no-attach"], description: t.opt_no_attach, args: [] },
        { labels: ["--attach-dependencies"], description: t.opt_attach_deps },
        { labels: ["--always-recreate-deps"], description: t.opt_always_recreate_deps },
        { labels: ["--exit-code-from"], description: t.opt_exit_code_from, args: [] },
        { labels: ["--force-recreate"], description: t.opt_force_recreate },
        { labels: ["--no-recreate"], description: t.opt_no_recreate },
        { labels: ["--no-deps"], description: t.opt_no_deps },
        noLogPrefixOpt,
        { labels: ["--menu"], description: t.opt_menu },
        { labels: ["--pull"], description: t.opt_pull_compose_up, args: [] },
        { labels: ["--quiet-build"], description: t.opt_quiet_build },
        { labels: ["--quiet-pull"], description: t.opt_quiet_pull },
        { labels: ["--remove-orphans"], description: t.opt_remove_orphans },
        { labels: ["-V", "--renew-anon-volumes"], description: t.opt_renew_anon_volumes },
        { labels: ["--scale"], description: t.opt_scale, args: [] },
        timeoutOpt,
        { labels: ["--timestamps"], description: t.opt_timestamps },
        { labels: ["--wait"], description: t.opt_wait_up },
        { labels: ["--wait-timeout"], description: t.opt_wait_timeout, args: [] },
        { labels: ["-w", "--watch"], description: t.opt_watch_up },
        noColorOpt,
        dryRunOpt,
        { labels: ["-y", "--yes"], description: t.opt_yes },
      ],
      args: { count: Infinity, items: [] },
    },
    down: {
      description: t.cmd_compose_down,
      options: [
        { labels: ["-v", "--volumes"], description: t.opt_volumes },
        { labels: ["--rmi"], description: t.opt_rmi_type, args: [] },
        timeoutOpt,
        { labels: ["--remove-orphans"], description: t.opt_remove_orphans },
        dryRunOpt,
      ],
    },
    start: {
      description: t.cmd_compose_start,
      options: [
        { labels: ["--wait"], description: t.opt_wait_up },
        { labels: ["--wait-timeout"], description: t.opt_wait_timeout, args: [] },
        dryRunOpt,
      ],
      args: { count: Infinity, items: [] },
    },
    stop: {
      description: t.cmd_compose_stop,
      options: [timeoutOpt, dryRunOpt],
      args: { count: Infinity, items: [] },
    },
    restart: {
      description: t.cmd_compose_restart,
      options: [
        timeoutOpt,
        { labels: ["--no-deps"], description: t.opt_no_deps },
        dryRunOpt,
      ],
      args: { count: Infinity, items: [] },
    },
    pause: {
      description: t.cmd_compose_pause,
      options: [dryRunOpt],
      args: { count: Infinity, items: [] },
    },
    unpause: {
      description: t.cmd_compose_unpause,
      options: [dryRunOpt],
      args: { count: Infinity, items: [] },
    },
    ps: {
      description: t.cmd_compose_ps,
      options: [
        allOpt,
        filterOpt,
        formatOpt,
        quietOpt,
        noTruncOpt,
        { labels: ["--services"], description: t.opt_services },
        { labels: ["--status"], description: t.opt_status, args: [] },
        dryRunOpt,
        { labels: ["--orphans"], description: t.opt_orphans },
      ],
    },
    ls: {
      description: t.cmd_compose_ls,
      options: [
        filterOpt,
        formatOpt,
        allOpt,
        quietOpt,
        dryRunOpt,
      ],
    },
    logs: {
      description: t.cmd_compose_logs,
      options: [
        followOpt,
        tailOpt,
        timestampsOpt,
        sinceOpt,
        untilOpt,
        noColorOpt,
        noLogPrefixOpt,
        { labels: ["--index"], description: t.opt_index, args: [] },
        dryRunOpt,
      ],
      args: { count: Infinity, items: [] },
    },
    build: {
      description: t.cmd_compose_build,
      options: [
        noCacheOpt,
        { labels: ["--pull"], description: t.opt_pull },
        buildArgOpt,
        { labels: ["--builder"], description: t.opt_builder, args: [] },
        sshOpt,
        { labels: ["--check"], description: t.opt_check },
        memoryOpt,
        { labels: ["--print"], description: t.opt_print },
        { labels: ["--provenance"], description: t.opt_provenance, args: [] },
        { labels: ["--push"], description: t.opt_push_build },
        { labels: ["--sbom"], description: t.opt_sbom, args: [] },
        { labels: ["--with-dependencies"], description: t.opt_with_dependencies },
        dryRunOpt,
        quietOpt,
      ],
      args: { count: Infinity, items: [] },
    },
    pull: {
      description: t.cmd_compose_pull,
      options: [
        { labels: ["--ignore-pull-failures"], description: t.opt_ignore_pull_failures },
        { labels: ["--policy"], description: t.opt_policy_compose, args: [] },
        quietOpt,
        { labels: ["--include-deps"], description: t.opt_include_deps },
        { labels: ["--ignore-buildable"], description: t.opt_ignore_buildable },
        dryRunOpt,
      ],
      args: { count: Infinity, items: [] },
    },
    push: {
      description: t.cmd_compose_push,
      options: [
        { labels: ["--ignore-push-failures"], description: t.opt_ignore_push_failures },
        { labels: ["--include-deps"], description: t.opt_include_deps },
        quietOpt,
        dryRunOpt,
      ],
      args: { count: Infinity, items: [] },
    },
    config: {
      description: t.cmd_compose_config,
      options: [
        { labels: ["--services"], description: t.opt_services },
        { labels: ["--volumes"], description: t.opt_volumes_compose },
        { labels: ["--hash"], description: t.opt_hash, args: [] },
        { labels: ["--no-interpolate"], description: t.opt_no_interpolate },
        { labels: ["--environment"], description: t.opt_environment },
        { labels: ["--lock-image-digests"], description: t.opt_lock_image_digests },
        { labels: ["--models"], description: t.opt_models },
        { labels: ["--networks"], description: t.opt_networks },
        { labels: ["--no-env-resolution"], description: t.opt_no_env_resolution },
        { labels: ["--no-normalize"], description: t.opt_no_normalize },
        { labels: ["--no-path-resolution"], description: t.opt_no_path_resolution },
        { labels: ["--profiles"], description: t.opt_profiles },
        { labels: ["--resolve-image-digests"], description: t.opt_resolve_image_digests },
        { labels: ["--output"], description: t.opt_output, args: [] },
        quietOpt,
        dryRunOpt,
        { labels: ["--format"], description: t.opt_format_config, args: [] },
        { labels: ["--images"], description: t.opt_images_config },
        { labels: ["--no-consistency"], description: t.opt_no_consistency },
        { labels: ["--variables"], description: t.opt_variables },
      ],
    },
    create: {
      description: t.cmd_compose_create,
      options: [
        { labels: ["--build"], description: t.opt_build_compose },
        { labels: ["--no-build"], description: t.opt_no_build },
        { labels: ["--no-recreate"], description: t.opt_no_recreate },
        { labels: ["--force-recreate"], description: t.opt_force_recreate },
        { labels: ["--scale"], description: t.opt_scale, args: [] },
        { labels: ["--pull"], description: t.opt_pull, args: [] },
        { labels: ["--quiet-pull"], description: t.opt_quiet_pull },
        { labels: ["--remove-orphans"], description: t.opt_remove_orphans },
        { labels: ["-y", "--yes"], description: t.opt_yes },
        dryRunOpt,
      ],
      args: { count: Infinity, items: [] },
    },
    exec: {
      description: t.cmd_compose_exec,
      options: [
        detachOpt,
        privilegedOpt,
        userOpt,
        workdirOpt,
        envOpt,
        { labels: ["--index"], description: t.opt_index, args: [] },
        { labels: ["-T", "--no-tty"], description: t.opt_no_tty },
        dryRunOpt,
      ],
      args: { count: Infinity, items: [] },
    },
    rm: {
      description: t.cmd_compose_rm,
      options: [
        forceOpt,
        { labels: ["-s", "--stop"], description: t.opt_stop_compose },
        { labels: ["-v", "--volumes"], description: t.opt_volumes },
        dryRunOpt,
      ],
      args: { count: Infinity, items: [] },
    },
    run: {
      description: t.cmd_compose_run,
      options: [
        detachOpt,
        interactiveOpt,
        nameOpt,
        envOpt,
        userOpt,
        workdirOpt,
        entrypointOpt,
        { labels: ["--no-deps"], description: t.opt_no_deps },
        publishOpt,
        rmOpt,
        { labels: ["--service-ports"], description: t.opt_service_ports },
        { labels: ["--use-aliases"], description: t.opt_use_aliases },
        volumeOpt,
        capAddOpt,
        capDropOpt,
        { labels: ["--env-from-file"], description: t.opt_env_from_file, args: [] },
        labelOpt,
        { labels: ["-T", "--no-tty"], description: t.opt_no_tty },
        { labels: ["--pull"], description: t.opt_pull, args: [] },
        quietOpt,
        { labels: ["--quiet-build"], description: t.opt_quiet_build },
        { labels: ["--quiet-pull"], description: t.opt_quiet_pull },
        { labels: ["--remove-orphans"], description: t.opt_remove_orphans },
        { labels: ["--build"], description: t.opt_build_compose },
        dryRunOpt,
      ],
      args: { count: Infinity, items: [] },
    },
    kill: {
      description: t.cmd_compose_kill,
      options: [
        signalOpt,
        { labels: ["--remove-orphans"], description: t.opt_remove_orphans },
        dryRunOpt,
      ],
      args: { count: Infinity, items: [] },
    },
    scale: {
      description: t.cmd_compose_scale,
      options: [
        dryRunOpt,
        { labels: ["--no-deps"], description: t.opt_no_deps },
      ],
      args: { count: Infinity, items: [] },
    },
    top: {
      description: t.cmd_compose_top,
      options: [dryRunOpt],
      args: { count: Infinity, items: [] },
    },
    version: {
      description: t.cmd_compose_version,
      options: [
        { labels: ["--short"], description: t.opt_short },
        { labels: ["-f", "--format"], description: t.opt_format, args: [] },
        dryRunOpt,
      ],
    },
    port: {
      description: t.cmd_compose_port,
      options: [
        { labels: ["--index"], description: t.opt_index, args: [] },
        { labels: ["--protocol"], description: t.opt_protocol, args: [] },
        dryRunOpt,
      ],
      args: { count: 2, items: [] },
    },
    images: {
      description: t.cmd_compose_images,
      options: [quietOpt, formatOpt, dryRunOpt],
      args: { count: Infinity, items: [] },
    },
    events: {
      description: t.cmd_compose_events,
      options: [
        { labels: ["--json"], description: t.opt_json },
        dryRunOpt,
        sinceOpt,
        untilOpt,
      ],
      args: { count: Infinity, items: [] },
    },
    cp: {
      description: t.cmd_compose_cp,
      options: [
        { labels: ["-a", "--archive"], description: t.opt_archive },
        { labels: ["-L", "--follow-link"], description: t.opt_follow_link },
        { labels: ["--index"], description: t.opt_index, args: [] },
        { labels: ["--all"], description: t.opt_all_cp },
        dryRunOpt,
      ],
      args: { count: 2, items: [] },
    },
    attach: {
      description: t.cmd_compose_attach,
      options: [
        detachKeysOpt,
        { labels: ["--no-stdin"], description: t.opt_no_stdin },
        sigProxyOpt,
      ],
      args: { count: Infinity, items: [] },
    },
    bridge: { description: t.cmd_compose_bridge, args: [] },
    commit: {
      description: t.cmd_compose_commit,
      options: [
        { labels: ["-a", "--author"], description: t.opt_author, args: [] },
        { labels: ["-c", "--change"], description: t.opt_change, args: [] },
        { labels: ["-m", "--message"], description: t.opt_message, args: [] },
        { labels: ["--no-pause"], description: t.opt_no_pause },
      ],
      args: { count: Infinity, items: [] },
    },
    export: {
      description: t.cmd_compose_export,
      options: [{ labels: ["-o", "--output"], description: t.opt_output_file, args: [] }],
      args: { count: Infinity, items: [] },
    },
    publish: { description: t.cmd_compose_publish, args: [] },
    stats: {
      description: t.cmd_compose_stats,
      options: [
        allOpt,
        formatOpt,
        { labels: ["--no-stream"], description: t.opt_no_stream },
        noTruncOpt,
      ],
      args: { count: Infinity, items: [] },
    },
    volumes: { description: t.cmd_compose_volumes, options: [quietOpt] },
    wait: {
      description: t.cmd_compose_wait,
      options: [
        { labels: ["--down-project"], description: t.opt_down_project },
        dryRunOpt,
      ],
      args: { count: Infinity, items: [] },
    },
    watch: {
      description: t.cmd_compose_watch,
      options: [
        { labels: ["--no-up"], description: t.opt_no_up },
        quietOpt,
        dryRunOpt,
        { labels: ["--prune"], description: t.opt_prune_watch },
      ],
      args: { count: Infinity, items: [] },
    },
  },
};

const bakeCmd: CommandNode = {
  description: t.cmd_bake,
  options: [
    { labels: ["--allow"], description: t.opt_allow, args: [] },
    { labels: ["--builder"], description: t.opt_builder, args: [] },
    { labels: ["--call"], description: t.opt_call, args: [] },
    { labels: ["--check"], description: t.opt_check },
    { labels: ["-D", "--debug"], description: t.opt_debug },
    fileOpt,
    { labels: ["--list"], description: t.opt_list, args: [] },
    { labels: ["--load"], description: t.opt_load },
    { labels: ["--metadata-file"], description: t.opt_metadata_file, args: [] },
    { labels: ["--no-cache"], description: t.opt_no_cache },
    { labels: ["--policy"], description: t.opt_policy, args: [] },
    { labels: ["--print"], description: t.opt_print },
    progressOpt,
    { labels: ["--provenance"], description: t.opt_provenance, args: [] },
    { labels: ["--pull"], description: t.opt_pull },
    { labels: ["--push"], description: t.opt_push_build },
    { labels: ["--sbom"], description: t.opt_sbom, args: [] },
    { labels: ["--set"], description: t.opt_set, args: [] },
    { labels: ["--var"], description: t.opt_var, args: [] },
  ],
  args: [],
};

const builderCmd: CommandNode = {
  description: t.cmd_builder,
  options: [
    { labels: ["--builder"], description: t.opt_builder, args: [] },
    { labels: ["-D", "--debug"], description: t.opt_debug },
  ],
  commands: {
    bake: { description: t.cmd_builder_bake, args: [] },
    build: { description: t.cmd_builder_build, args: [] },
    create: {
      description: t.cmd_builder_create,
      options: [
        { labels: ["--append"], description: t.opt_append },
        { labels: ["--bootstrap"], description: t.opt_bootstrap },
        { labels: ["--buildkitd-config"], description: t.opt_buildkitd_config, args: [] },
        { labels: ["--buildkitd-flags"], description: t.opt_buildkitd_flags, args: [] },
        { labels: ["-D", "--debug"], description: t.opt_debug },
        { labels: ["--driver"], description: t.opt_driver, args: [] },
        { labels: ["--driver-opt"], description: t.opt_driver_opt_builder, args: [] },
        { labels: ["--leave"], description: t.opt_leave_builder },
        nameOpt,
        { labels: ["--node"], description: t.opt_node_builder, args: [] },
        platformOpt,
        { labels: ["--timeout"], description: t.opt_builder_timeout, args: [] },
        { labels: ["--use"], description: t.opt_use_builder, args: [] },
      ],
    },
    "dial-stdio": {
      description: t.cmd_builder_dial_stdio,
      options: [
        { labels: ["--builder"], description: t.opt_builder, args: [] },
        { labels: ["-D", "--debug"], description: t.opt_debug },
        platformOpt,
        progressOpt,
      ],
    },
    du: {
      description: t.cmd_builder_du,
      options: [
        { labels: ["--builder"], description: t.opt_builder, args: [] },
        { labels: ["-D", "--debug"], description: t.opt_debug },
        filterOpt,
        formatOpt,
        { labels: ["--timeout"], description: t.opt_builder_timeout, args: [] },
        verboseOpt,
      ],
    },
    inspect: {
      description: t.cmd_builder_inspect,
      options: [
        { labels: ["--builder"], description: t.opt_builder, args: [] },
        { labels: ["-D", "--debug"], description: t.opt_debug },
        { labels: ["--timeout"], description: t.opt_builder_timeout, args: [] },
        { labels: ["--bootstrap"], description: t.opt_bootstrap },
      ],
    },
    ls: {
      description: t.cmd_builder_ls,
      options: [
        { labels: ["-D", "--debug"], description: t.opt_debug },
        formatOpt,
        noTruncOpt,
        { labels: ["--timeout"], description: t.opt_builder_timeout, args: [] },
      ],
    },
    prune: {
      description: t.cmd_builder_prune,
      options: [
        allOpt,
        { labels: ["--builder"], description: t.opt_builder, args: [] },
        { labels: ["-D", "--debug"], description: t.opt_debug },
        filterOpt,
        forceOpt,
        { labels: ["--max-used-space"], description: t.opt_max_used_space, args: [] },
        { labels: ["--min-free-space"], description: t.opt_min_free_space, args: [] },
        { labels: ["--reserved-space"], description: t.opt_reserved_space, args: [] },
        { labels: ["--timeout"], description: t.opt_builder_timeout, args: [] },
        verboseOpt,
      ],
    },
    rm: {
      description: t.cmd_builder_rm,
      options: [
        forceOpt,
        { labels: ["--all-inactive"], description: t.opt_all_inactive },
        { labels: ["--builder"], description: t.opt_builder, args: [] },
        { labels: ["-D", "--debug"], description: t.opt_debug },
        { labels: ["--keep-daemon"], description: t.opt_keep_daemon },
        { labels: ["--keep-state"], description: t.opt_keep_state },
        { labels: ["--timeout"], description: t.opt_builder_timeout, args: [] },
      ],
    },
    stop: {
      description: t.cmd_builder_stop,
      options: [
        { labels: ["--builder"], description: t.opt_builder, args: [] },
        { labels: ["-D", "--debug"], description: t.opt_debug },
      ],
    },
    use: {
      description: t.cmd_builder_use,
      options: [
        { labels: ["--builder"], description: t.opt_builder, args: [] },
        { labels: ["-D", "--debug"], description: t.opt_debug },
        { labels: ["--default"], description: t.opt_default_builder },
        { labels: ["--global"], description: t.opt_global_builder },
      ],
    },
    version: {
      description: t.cmd_builder_version,
      options: [{ labels: ["-D", "--debug"], description: t.opt_debug }],
    },
    dap: { description: t.cmd_builder_dap, args: [] },
    history: { description: t.cmd_builder_history, args: [] },
    imagetools: { description: t.cmd_builder_imagetools, args: [] },
    policy: { description: t.cmd_builder_policy, args: [] },
  },
};

const contextCmd: CommandNode = {
  description: t.cmd_context,
  commands: {
    create: {
      description: t.cmd_context_create,
      options: [
        { labels: ["--description"], description: t.opt_description_context, args: [] },
        { labels: ["--docker"], description: t.opt_docker_context, args: [] },
        { labels: ["--from"], description: t.opt_from_context, args: [] },
      ],
    },
    export: { description: t.cmd_context_export, args: [] },
    import: { description: t.cmd_context_import, args: [] },
    inspect: { description: t.cmd_context_inspect, options: [formatOpt] },
    ls: { description: t.cmd_context_ls, options: [formatOpt, quietOpt] },
    rm: {
      description: t.cmd_context_rm,
      options: [forceOpt],
      args: { count: Infinity, items: [] },
    },
    show: { description: t.cmd_context_show },
    update: {
      description: t.cmd_context_update,
      options: [
        { labels: ["--description"], description: t.opt_description_context, args: [] },
        { labels: ["--docker"], description: t.opt_docker_context, args: [] },
      ],
      args: [],
    },
    use: { description: t.cmd_context_use, args: [] },
  },
};

const manifestCmd: CommandNode = {
  description: t.cmd_manifest,
  commands: {
    annotate: {
      description: t.cmd_manifest_annotate,
      options: [
        { labels: ["--arch"], description: t.opt_arch, args: [] },
        { labels: ["--os"], description: t.opt_os, args: [] },
        { labels: ["--os-features"], description: t.opt_os_features, args: [] },
        { labels: ["--os-version"], description: t.opt_os_version, args: [] },
        { labels: ["--variant"], description: t.opt_variant, args: [] },
      ],
    },
    create: {
      description: t.cmd_manifest_create,
      options: [
        { labels: ["-a", "--amend"], description: t.opt_amend },
        { labels: ["--insecure"], description: t.opt_insecure },
      ],
    },
    inspect: {
      description: t.cmd_manifest_inspect,
      options: [
        { labels: ["--insecure"], description: t.opt_insecure },
        { labels: ["-v", "--verbose"], description: t.opt_verbose_manifest },
      ],
    },
    push: {
      description: t.cmd_manifest_push,
      options: [
        { labels: ["--insecure"], description: t.opt_insecure },
        { labels: ["-p", "--purge"], description: t.opt_purge },
      ],
    },
    rm: { description: t.cmd_manifest_rm, args: { count: Infinity, items: [] } },
  },
};

const checkpointCmd: CommandNode = {
  description: t.cmd_checkpoint,
  commands: {
    create: {
      description: t.cmd_checkpoint_create,
      options: [
        { labels: ["--checkpoint-dir"], description: t.opt_checkpoint_dir, args: [] },
        { labels: ["--leave-running"], description: t.opt_leave_running },
      ],
    },
    ls: {
      description: t.cmd_checkpoint_ls,
      options: [
        formatOpt,
        { labels: ["--checkpoint-dir"], description: t.opt_checkpoint_dir, args: [] },
      ],
    },
    rm: {
      description: t.cmd_checkpoint_rm,
      options: [{ labels: ["--checkpoint-dir"], description: t.opt_checkpoint_dir, args: [] }],
    },
  },
};

const pluginCmd: CommandNode = {
  description: t.cmd_plugin,
  commands: {
    create: {
      description: t.cmd_plugin_create,
      options: [{ labels: ["--compress"], description: t.opt_compress }],
    },
    disable: { description: t.cmd_plugin_disable, options: [forceOpt], args: [] },
    enable: {
      description: t.cmd_plugin_enable,
      options: [{ labels: ["--timeout"], description: t.opt_timeout, args: [] }],
    },
    inspect: { description: t.cmd_plugin_inspect, options: [formatOpt] },
    install: {
      description: t.cmd_plugin_install,
      options: [
        { labels: ["--alias"], description: t.opt_alias_plugin, args: [] },
        { labels: ["--disable"], description: t.opt_disable_plugin },
        { labels: ["--grant-all-permissions"], description: t.opt_grant_all_permissions },
      ],
    },
    ls: { description: t.cmd_plugin_ls, options: [formatOpt, quietOpt, noTruncOpt] },
    push: { description: t.cmd_plugin_push, args: [] },
    rm: { description: t.cmd_plugin_rm, options: [forceOpt], args: { count: Infinity, items: [] } },
    set: { description: t.cmd_plugin_set, args: [] },
    upgrade: {
      description: t.cmd_plugin_upgrade,
      options: [
        { labels: ["--grant-all-permissions"], description: t.opt_grant_all_permissions },
        { labels: ["--skip-remote-check"], description: t.opt_skip_remote_check },
      ],
    },
  },
};

const configCmd: CommandNode = {
  description: t.cmd_config,
  commands: {
    create: {
      description: t.cmd_config_create,
      options: [
        labelOpt,
        { labels: ["--template-driver"], description: t.opt_template_driver, args: [] },
      ],
    },
    inspect: {
      description: t.cmd_config_inspect,
      options: [formatOpt, { labels: ["--pretty"], description: t.opt_pretty_inspect }],
    },
    ls: { description: t.cmd_config_ls, options: [filterOpt, formatOpt, quietOpt] },
    rm: { description: t.cmd_config_rm, args: { count: Infinity, items: [] } },
  },
};

const nodeCmd: CommandNode = {
  description: t.cmd_node,
  commands: {
    demote: { description: t.cmd_node_demote, args: { count: Infinity, items: [] } },
    inspect: {
      description: t.cmd_node_inspect,
      options: [formatOpt, { labels: ["--pretty"], description: t.opt_pretty_inspect }],
    },
    ls: { description: t.cmd_node_ls, options: [filterOpt, formatOpt, quietOpt] },
    promote: { description: t.cmd_node_promote, args: { count: Infinity, items: [] } },
    ps: {
      description: t.cmd_node_ps,
      options: [
        filterOpt,
        formatOpt,
        noTruncOpt,
        noResolveOpt,
        quietOpt,
      ],
    },
    rm: { description: t.cmd_node_rm, options: [forceOpt], args: { count: Infinity, items: [] } },
    update: {
      description: t.cmd_node_update,
      options: [
        { labels: ["--availability"], description: t.opt_availability, args: [] },
        { labels: ["--label-add"], description: t.opt_label_add_node, args: [] },
        { labels: ["--label-rm"], description: t.opt_label_rm_node, args: [] },
        { labels: ["--role"], description: t.opt_role_node, args: [] },
      ],
      args: [],
    },
  },
};

const secretCmd: CommandNode = {
  description: t.cmd_secret,
  commands: {
    create: {
      description: t.cmd_secret_create,
      options: [
        { labels: ["-d", "--driver"], description: t.opt_driver, args: [] },
        labelOpt,
        { labels: ["--template-driver"], description: t.opt_template_driver, args: [] },
      ],
    },
    inspect: {
      description: t.cmd_secret_inspect,
      options: [formatOpt, { labels: ["--pretty"], description: t.opt_pretty_inspect }],
    },
    ls: { description: t.cmd_secret_ls, options: [filterOpt, formatOpt, quietOpt] },
    rm: { description: t.cmd_secret_rm, args: { count: Infinity, items: [] } },
  },
};

const serviceCreateOpts: OptionNode[] = [
  capAddOpt,
  capDropOpt,
  detachOpt,
  dnsOpt,
  entrypointOpt,
  envFileOpt,
  envOpt,
  hostnameOpt,
  initOpt,
  labelOpt,
  nameOpt,
  networkOpt,
  publishOpt,
  quietOpt,
  readOnlyOpt,
  secretOpt,
  ttyOpt,
  userOpt,
  workdirOpt,

  { labels: ["--constraint"], description: t.opt_constraint, args: [] },
  { labels: ["--container-label"], description: t.opt_container_label, args: [] },
  { labels: ["--dns-option"], description: t.opt_dns_option, args: [] },
  { labels: ["--dns-search"], description: t.opt_dns_search, args: [] },
  { labels: ["--endpoint-mode"], description: t.opt_endpoint_mode, args: [] },
  { labels: ["--group"], description: t.opt_group_svc, args: [] },
  { labels: ["--health-cmd"], description: t.opt_health_cmd, args: [] },
  { labels: ["--health-interval"], description: t.opt_health_interval, args: [] },
  { labels: ["--health-retries"], description: t.opt_health_retries, args: [] },
  { labels: ["--health-start-period"], description: t.opt_health_start_period_svc, args: [] },
  { labels: ["--health-timeout"], description: t.opt_health_timeout, args: [] },
  { labels: ["--host"], description: t.opt_add_host, args: [] },
  { labels: ["--isolation"], description: t.opt_isolation, args: [] },
  { labels: ["--limit-cpu"], description: t.opt_limit_cpu, args: [] },
  { labels: ["--limit-memory"], description: t.opt_limit_memory, args: [] },
  { labels: ["--limit-pids"], description: t.opt_limit_pids, args: [] },
  { labels: ["--log-driver"], description: t.opt_log_driver, args: [] },
  { labels: ["--log-opt"], description: t.opt_log_opt, args: [] },
  { labels: ["--max-concurrent"], description: t.opt_max_concurrent, args: [] },
  { labels: ["--mode"], description: t.opt_mode, args: [] },
  { labels: ["--mount"], description: t.opt_mount, args: [] },
  { labels: ["--no-healthcheck"], description: t.opt_no_healthcheck },
  { labels: ["--placement-pref"], description: t.opt_placement_pref, args: [] },
  { labels: ["--replicas"], description: t.opt_replicas, args: [] },
  { labels: ["--reserve-cpu"], description: t.opt_reserve_cpu, args: [] },
  { labels: ["--reserve-memory"], description: t.opt_reserve_memory, args: [] },
  { labels: ["--restart-condition"], description: t.opt_restart_condition, args: [] },
  { labels: ["--restart-delay"], description: t.opt_restart_delay, args: [] },
  { labels: ["--restart-max-attempts"], description: t.opt_restart_max_attempts, args: [] },
  { labels: ["--restart-window"], description: t.opt_restart_window, args: [] },
  { labels: ["--rollback-delay"], description: t.opt_rollback_delay, args: [] },
  { labels: ["--rollback-failure-action"], description: t.opt_rollback_failure_action, args: [] },
  {
    labels: ["--rollback-max-failure-ratio"],
    description: t.opt_rollback_max_failure_ratio,
    args: [],
  },
  { labels: ["--rollback-monitor"], description: t.opt_rollback_monitor, args: [] },
  { labels: ["--rollback-order"], description: t.opt_rollback_order, args: [] },
  { labels: ["--rollback-parallelism"], description: t.opt_rollback_parallelism, args: [] },
  { labels: ["--stop-grace-period"], description: t.opt_stop_grace_period, args: [] },
  { labels: ["--stop-signal"], description: t.opt_stop_signal, args: [] },
  { labels: ["--sysctl"], description: t.opt_sysctl, args: [] },
  { labels: ["--update-delay"], description: t.opt_update_delay, args: [] },
  { labels: ["--update-failure-action"], description: t.opt_update_failure_action, args: [] },
  { labels: ["--update-max-failure-ratio"], description: t.opt_update_max_failure_ratio, args: [] },
  { labels: ["--update-monitor"], description: t.opt_update_monitor, args: [] },
  { labels: ["--update-order"], description: t.opt_update_order, args: [] },
  { labels: ["--update-parallelism"], description: t.opt_update_parallelism, args: [] },
  { labels: ["--with-registry-auth"], description: t.opt_with_registry_auth_svc },
];

const serviceCmd: CommandNode = {
  description: t.cmd_service,
  commands: {
    create: { description: t.cmd_service_create, options: serviceCreateOpts, args: [] },
    inspect: {
      description: t.cmd_service_inspect,
      options: [formatOpt, { labels: ["--pretty"], description: t.opt_pretty_inspect }],
    },
    logs: {
      description: t.cmd_service_logs,
      options: [
        { labels: ["--details"], description: t.opt_details },
        noResolveOpt,
        { labels: ["--no-task-ids"], description: t.opt_no_task_ids },
        noTruncOpt,
        { labels: ["--raw"], description: t.opt_raw },
        followOpt,
        sinceOpt,
        tailOpt,
        timestampsOpt,
      ],
    },
    ls: { description: t.cmd_service_ls, options: [filterOpt, formatOpt, quietOpt] },
    ps: {
      description: t.cmd_service_ps,
      options: [
        filterOpt,
        formatOpt,
        noTruncOpt,
        quietOpt,
        noResolveOpt,
      ],
    },
    rm: { description: t.cmd_service_rm, args: { count: Infinity, items: [] } },
    rollback: { description: t.cmd_service_rollback, options: [detachOpt, quietOpt], args: [] },
    scale: {
      description: t.cmd_service_scale,
      options: [detachOpt],
      args: { count: Infinity, items: [] },
    },
    update: { description: t.cmd_service_update, options: serviceCreateOpts, args: [] },
  },
};

const stackCmd: CommandNode = {
  description: t.cmd_stack,
  commands: {
    config: {
      description: t.cmd_stack_config,
      options: [
        { labels: ["-c", "--compose-file"], description: t.opt_compose_file, args: [] },
        { labels: ["--skip-interpolation"], description: t.opt_skip_interpolation },
      ],
    },
    deploy: {
      description: t.cmd_stack_deploy,
      options: [
        { labels: ["-c", "--compose-file"], description: t.opt_compose_file, args: [] },
        detachOpt,
        { labels: ["--prune"], description: t.opt_prune_stack },
        quietOpt,
        { labels: ["--resolve-image"], description: t.opt_resolve_image, args: [] },
        { labels: ["--with-registry-auth"], description: t.opt_with_registry_auth },
      ],
    },
    ls: { description: t.cmd_stack_ls, options: [formatOpt, quietOpt] },
    ps: {
      description: t.cmd_stack_ps,
      options: [
        filterOpt,
        formatOpt,
        noTruncOpt,
        noResolveOpt,
        quietOpt,
      ],
    },
    rm: { description: t.cmd_stack_rm, options: [detachOpt], args: { count: Infinity, items: [] } },
    services: { description: t.cmd_stack_services, options: [filterOpt, formatOpt, quietOpt] },
  },
};

const swarmCmd: CommandNode = {
  description: t.cmd_swarm,
  commands: {
    ca: {
      description: t.cmd_swarm_ca,
      options: [
        { labels: ["--ca-cert"], description: t.opt_ca_cert, args: [] },
        { labels: ["--ca-key"], description: t.opt_ca_key, args: [] },
        { labels: ["--cert-expiry"], description: t.opt_cert_expiry, args: [] },
        detachOpt,
        { labels: ["--external-ca"], description: t.opt_external_ca, args: [] },
        quietOpt,
        { labels: ["--rotate"], description: t.opt_rotate },
      ],
    },
    init: { description: t.cmd_swarm_init, args: [] },
    join: {
      description: t.cmd_swarm_join,
      options: [
        { labels: ["--advertise-addr"], description: t.opt_advertise_addr, args: [] },
        { labels: ["--availability"], description: t.opt_availability, args: [] },
        { labels: ["--data-path-addr"], description: t.opt_data_path_addr, args: [] },
        { labels: ["--listen-addr"], description: t.opt_listen_addr, args: [] },
        { labels: ["--token"], description: t.opt_token, args: [] },
      ],
    },
    "join-token": {
      description: t.cmd_swarm_join_token,
      options: [quietOpt, { labels: ["--rotate"], description: t.opt_rotate }],
    },
    leave: { description: t.cmd_swarm_leave, options: [forceOpt] },
    unlock: { description: t.cmd_swarm_unlock, args: [] },
    "unlock-key": {
      description: t.cmd_swarm_unlock_key,
      options: [quietOpt, { labels: ["--rotate"], description: t.opt_rotate }],
    },
    update: {
      description: t.cmd_swarm_update,
      options: [
        { labels: ["--autolock"], description: t.opt_autolock },
        { labels: ["--cert-expiry"], description: t.opt_cert_expiry, args: [] },
        { labels: ["--dispatcher-heartbeat"], description: t.opt_dispatcher_heartbeat, args: [] },
        { labels: ["--external-ca"], description: t.opt_external_ca, args: [] },
        { labels: ["--max-snapshots"], description: t.opt_max_snapshots, args: [] },
        { labels: ["--snapshot-interval"], description: t.opt_snapshot_interval, args: [] },
        { labels: ["--task-history-limit"], description: t.opt_task_history_limit, args: [] },
      ],
    },
  },
};

const globalOpts: OptionNode[] = [
  { labels: ["--config"], description: t.opt_config_global, args: [] },
  { labels: ["-c", "--context"], description: t.opt_context_global, args: [] },
  { labels: ["-D", "--debug"], description: t.opt_debug },
  { labels: ["-H", "--host"], description: t.opt_host, args: [] },
  { labels: ["-l", "--log-level"], description: t.opt_log_level, args: [] },
  { labels: ["--tls"], description: t.opt_tls },
  { labels: ["--tlscacert"], description: t.opt_tlscacert, args: [] },
  { labels: ["--tlscert"], description: t.opt_tlscert, args: [] },
  { labels: ["--tlskey"], description: t.opt_tlskey, args: [] },
  { labels: ["--tlsverify"], description: t.opt_tlsverify },
  { labels: ["-v", "--version"], description: t.opt_version_global },
  { labels: ["--help"], description: t.opt_help },
];

export default createCompletion({
  docker: {
    description: t.cmd_docker,
    options: globalOpts,
    commands: {
      run: runCmd,
      exec: execCmd,
      ps: psCmd,
      build: buildCmd,
      pull: pullCmd,
      push: pushCmd,
      images: imagesCmd,
      login: loginCmd,
      logout: logoutCmd,
      search: searchCmd,
      version: versionCmd,
      info: infoCmd,
      start: startCmd,
      stop: stopCmd,
      restart: restartCmd,
      kill: killCmd,
      pause: pauseCmd,
      unpause: unpauseCmd,
      rm: rmCmd,
      rmi: rmiCmd,
      logs: logsCmd,
      inspect: inspectCmd,
      cp: cpCmd,
      commit: commitCmd,
      tag: tagCmd,
      stats: statsCmd,
      top: topCmd,
      port: portCmd,
      rename: renameCmd,
      diff: diffCmd,
      events: eventsCmd,
      history: historyCmd,
      save: saveCmd,
      load: loadCmd,
      export: exportCmd,
      import: importCmd,
      create: createCmd,
      attach: attachCmd,
      wait: waitCmd,
      update: updateCmd,
      container: containerCmd,
      image: imageCmd,
      volume: volumeCmd,
      network: networkCmd,
      system: systemCmd,
      compose: composeCmd,
      bake: bakeCmd,
      builder: builderCmd,
      context: contextCmd,
      manifest: manifestCmd,
      checkpoint: checkpointCmd,
      plugin: pluginCmd,
      config: configCmd,
      node: nodeCmd,
      secret: secretCmd,
      service: serviceCmd,
      stack: stackCmd,
      swarm: swarmCmd,
    },
  },
});
