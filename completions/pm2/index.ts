import { exec, scanPath, cache } from "sugg";
import * as t from "virtual:i18n/pm2";

interface PProc {
  pm_id: number;
  name: string;
  pm2_env?: { namespace?: string };
}

async function fetchProcesses(): Promise<PProc[]> {
  const out = await exec("pm2 jlist");
  return JSON.parse(out) as PProc[];
}

async function getProcessNames(): Promise<Suggestion[]> {
  const list = await fetchProcesses();
  const res: Suggestion[] = [];
  for (const p of list) {
    res.push({ display: p.name, description: `${t.sugg_id} ${p.pm_id}` });
    if (p.pm2_env?.namespace && p.pm2_env.namespace !== "default") {
      res.push({
        display: `${p.pm2_env.namespace}:${p.name}`,
        description: `${t.sugg_id} ${p.pm_id}`,
      });
    }
  }
  return res;
}

const processes = dynamic(async (ctx) => cache.get(ctx, 5000, getProcessNames));

const procsWithAll = dynamic(async (ctx) => {
  const procs = await cache.get(ctx, 5000, getProcessNames);
  return [...procs, { display: "all", description: t.sugg_all }];
});

const fileItems = dynamic(async (ctx) => scanPath(ctx.prefix));

const processIdItems = dynamic(async (ctx) => {
  if (ctx.positionals.length > 0) return [];
  const list = await cache.get(ctx, 5000, fetchProcesses);
  return list.map(
    (p): Suggestion => ({
      display: p.name,
      value: String(p.pm_id),
      description: `${t.sugg_id} ${p.pm_id}`,
    }),
  );
});

const globalOpts: OptionNode[] = [
  { labels: ["-v", "--version"], description: t.opt_version },
  { labels: ["-s", "--silent"], description: t.opt_silent },
  { labels: ["--ext"], description: t.opt_watch_ext, args: [] },
  { labels: ["-n", "--name"], description: t.opt_name, args: [] },
  { labels: ["-m", "--mini-list"], description: t.opt_mini_list },
  { labels: ["--interpreter"], description: t.opt_interpreter, args: [] },
  { labels: ["--interpreter-args"], description: t.opt_interpreter_args, args: [] },
  { labels: ["--node-args"], description: t.opt_node_args, args: [] },
  { labels: ["-o", "--output"], description: t.opt_output, args: [] },
  { labels: ["-e", "--error"], description: t.opt_error, args: [] },
  { labels: ["-l", "--log"], description: t.opt_log, args: [] },
  { labels: ["--filter-env"], description: t.opt_filter_env, args: [] },
  { labels: ["--log-type"], description: t.opt_log_type, args: ["raw", "json"] },
  { labels: ["--log-date-format"], description: t.opt_log_date_format, args: [] },
  { labels: ["--time"], description: t.opt_time },
  { labels: ["--disable-logs"], description: t.opt_disable_logs },
  { labels: ["--env"], description: t.opt_env, args: [] },
  { labels: ["-a", "--update-env"], description: t.opt_update_env },
  { labels: ["-f", "--force"], description: t.opt_force },
  { labels: ["-i", "--instances"], description: t.opt_instances, args: [] },
  { labels: ["--parallel"], description: t.opt_parallel, args: [] },
  { labels: ["--shutdown-with-message"], description: t.opt_shutdown_with_message },
  { labels: ["-p", "--pid"], description: t.opt_pid, args: [] },
  { labels: ["-k", "--kill-timeout"], description: t.opt_kill_timeout, args: [] },
  { labels: ["--listen-timeout"], description: t.opt_listen_timeout, args: [] },
  { labels: ["--max-memory-restart"], description: t.opt_max_memory_restart, args: [] },
  { labels: ["--restart-delay"], description: t.opt_restart_delay, args: [] },
  {
    labels: ["--exp-backoff-restart-delay"],
    description: t.opt_exp_backoff_restart_delay,
    args: [],
  },
  { labels: ["-x", "--execute-command"], description: t.opt_execute_command },
  { labels: ["--max-restarts"], description: t.opt_max_restarts, args: [] },
  { labels: ["-u", "--user"], description: t.opt_user, args: [] },
  { labels: ["--uid"], description: t.opt_uid, args: [] },
  { labels: ["--gid"], description: t.opt_gid, args: [] },
  { labels: ["--namespace"], description: t.opt_namespace, args: [] },
  { labels: ["--cwd"], description: t.opt_cwd, args: [] },
  { labels: ["--hp"], description: t.opt_hp, args: [] },
  { labels: ["--wait-ip"], description: t.opt_wait_ip },
  { labels: ["--service-name"], description: t.opt_service_name, args: [] },
  { labels: ["-c", "--cron", "--cron-restart"], description: t.opt_cron, args: [] },
  { labels: ["-w", "--write"], description: t.opt_write },
  { labels: ["--no-daemon"], description: t.opt_no_daemon },
  { labels: ["--source-map-support"], description: t.opt_source_map_support },
  { labels: ["--only"], description: t.opt_only, args: [] },
  { labels: ["--disable-source-map-support"], description: t.opt_disable_source_map_support },
  { labels: ["--wait-ready"], description: t.opt_wait_ready },
  { labels: ["--merge-logs"], description: t.opt_merge_logs },
  { labels: ["--watch"], description: t.opt_watch, args: [] },
  { labels: ["--ignore-watch"], description: t.opt_ignore_watch, args: [] },
  { labels: ["--watch-delay"], description: t.opt_watch_delay, args: [] },
  { labels: ["--no-color"], description: t.opt_no_color },
  { labels: ["--no-vizion"], description: t.opt_no_vizion },
  { labels: ["--no-autostart"], description: t.opt_no_autostart },
  { labels: ["--no-autorestart"], description: t.opt_no_autorestart },
  { labels: ["--stop-exit-codes"], description: t.opt_stop_exit_codes, args: [] },
  { labels: ["--no-treekill"], description: t.opt_no_treekill },
  { labels: ["--no-pmx"], description: t.opt_no_pmx },
  { labels: ["--no-automation"], description: t.opt_no_automation },
  { labels: ["--trace"], description: t.opt_trace },
  { labels: ["--disable-trace"], description: t.opt_disable_trace },
  { labels: ["--sort"], description: t.opt_sort, args: [] },
  { labels: ["--attach"], description: t.opt_attach },
  { labels: ["--v8"], description: t.opt_v8 },
  { labels: ["--event-loop-inspector"], description: t.opt_event_loop_inspector },
  { labels: ["--deep-monitoring"], description: t.opt_deep_monitoring },
  { labels: ["-h", "--help"], description: t.opt_help },
];

const withoutWatch = <T extends { labels: string[] }>(opts: T[]): T[] =>
  opts.filter((o) => !o.labels.includes("--watch"));

const processOpts = globalOpts;

const listOpts: OptionNode[] = [
  { labels: ["-s", "--silent"], description: t.opt_silent },
  { labels: ["-m", "--mini-list"], description: t.opt_mini_list },
  { labels: ["--no-color"], description: t.opt_no_color },
  { labels: ["--sort"], description: t.opt_sort, args: [] },
  { labels: ["--watch"], description: t.opt_watch, args: [] },
];

const startupOpts: OptionNode[] = [
  { labels: ["-u", "--user"], description: t.opt_user, args: [] },
  { labels: ["--hp"], description: t.opt_hp, args: [] },
  { labels: ["--service-name"], description: t.opt_service_name, args: [] },
  { labels: ["--wait-ip"], description: t.opt_wait_ip },
];

const startupPlatforms = [
  "systemd",
  "systemv",
  "upstart",
  "launchd",
  "rcd",
  "amazon",
  "centos6",
  "freebsd",
  "openbsd",
  "openrc",
  "sunos",
  "solaris",
];

const logrotateOpts: OptionNode[] = [
  { labels: ["-u", "--user"], description: t.opt_user, args: [] },
];

const startOpts: OptionNode[] = [
  { labels: ["--watch"], description: t.opt_start_watch },
  { labels: ["--fresh"], description: t.opt_start_fresh },
  { labels: ["--daemon"], description: t.opt_start_daemon },
  { labels: ["--container"], description: t.opt_start_container },
  { labels: ["--dist"], description: t.opt_start_dist },
  { labels: ["--image-name"], description: t.opt_start_image_name, args: [] },
  { labels: ["--node-version"], description: t.opt_start_node_version, args: [] },
  { labels: ["--dockerdaemon"], description: t.opt_start_dockerdaemon },
  ...withoutWatch(globalOpts),
];

const restartOpts: OptionNode[] = [
  { labels: ["--watch"], description: t.opt_restart_watch },
  ...withoutWatch(globalOpts),
];

const stopOpts: OptionNode[] = [{ labels: ["--watch"], description: t.opt_stop_watch }];

const installOpts: OptionNode[] = [
  ...globalOpts,
  { labels: ["--tarball"], description: t.opt_install_tarball },
  { labels: ["--install"], description: t.opt_install_install },
  { labels: ["--docker"], description: t.opt_install_docker },
  { labels: ["--v1"], description: t.opt_install_v1 },
  { labels: ["--safe"], description: t.opt_install_safe, args: [] },
];

const logsOpts: OptionNode[] = [
  { labels: ["--json"], description: t.opt_logs_json },
  { labels: ["--format"], description: t.opt_logs_format },
  { labels: ["--raw"], description: t.opt_logs_raw },
  { labels: ["--err"], description: t.opt_logs_err },
  { labels: ["--out"], description: t.opt_logs_out },
  { labels: ["--lines"], description: t.opt_logs_lines, args: [] },
  { labels: ["--timestamp"], description: t.opt_logs_timestamp, args: [] },
  { labels: ["--nostream"], description: t.opt_logs_nostream },
  { labels: ["--highlight"], description: t.opt_logs_highlight, args: [] },
];

const plusOpts: OptionNode[] = [
  { labels: ["--info-node"], description: t.opt_plus_info_node, args: [] },
  { labels: ["-d", "--discrete"], description: t.opt_plus_discrete },
  { labels: ["-a", "--install-all"], description: t.opt_plus_install_all },
];

export default createCompletion({
  pm2: {
    description: t.description,
    options: globalOpts,
    commands: {
      start: {
        description: t.cmd_start,
        options: startOpts,
        args: {
          count: Infinity,
          items: dynamic(async (ctx) => {
            if (ctx.positionals.length > 0) return scanPath(ctx.prefix);
            const [files, procs] = await Promise.all([
              scanPath(ctx.prefix),
              cache.get(ctx, 5000, getProcessNames),
            ]);
            return [...files, ...procs];
          }),
        },
      },
      trigger: {
        description: t.cmd_trigger,
        args: {
          count: Infinity,
          items: dynamic(async (ctx) => {
            if (ctx.positionals.length > 0) return [];
            const procs = await cache.get(ctx, 5000, getProcessNames);
            return [...procs, { display: "all", description: t.sugg_all }];
          }),
        },
      },
      deploy: {
        description: t.cmd_deploy,
        options: processOpts,
        args: { count: 1, items: fileItems },
      },
      startOrRestart: {
        description: t.cmd_start_or_restart,
        options: processOpts,
        args: { count: 1, items: fileItems },
      },
      startOrReload: {
        description: t.cmd_start_or_reload,
        options: processOpts,
        args: { count: 1, items: fileItems },
      },
      pid: { description: t.cmd_pid, args: processes },
      create: { description: t.cmd_create },
      startOrGracefulReload: {
        description: t.cmd_start_or_graceful_reload,
        options: processOpts,
        args: { count: 1, items: fileItems },
      },
      stop: {
        description: t.cmd_stop,
        options: stopOpts,
        args: { count: Infinity, items: procsWithAll },
      },
      restart: {
        description: t.cmd_restart,
        options: restartOpts,
        args: { count: Infinity, items: procsWithAll },
      },
      scale: {
        description: t.cmd_scale,
        args: {
          count: 2,
          items: dynamic(async (ctx) => {
            if (ctx.positionals.length === 0) return await cache.get(ctx, 5000, getProcessNames);
            return [];
          }),
        },
      },
      "profile:mem": { description: t.cmd_profile_mem, args: { count: 0 } },
      "profile:cpu": { description: t.cmd_profile_cpu, args: { count: 0 } },
      reload: {
        description: t.cmd_reload,
        options: processOpts,
        args: { count: 1, items: procsWithAll },
      },
      id: { description: t.cmd_id, args: processes },
      inspect: {
        description: t.cmd_inspect,
        options: processOpts,
        args: processes,
      },
      delete: {
        aliases: ["del"],
        description: t.cmd_delete,
        args: { count: Infinity, items: procsWithAll },
      },
      sendSignal: {
        description: t.cmd_send_signal,
        args: {
          count: 2,
          items: dynamic(async (ctx) => {
            if (ctx.positionals.length === 0) {
              return [
                "SIGTERM",
                "SIGINT",
                "SIGUSR1",
                "SIGUSR2",
                "SIGHUP",
                "SIGQUIT",
                "SIGABRT",
                "SIGKILL",
                "SIGSTOP",
                "SIGCONT",
              ];
            }
            return await cache.get(ctx, 5000, getProcessNames);
          }),
        },
      },
      ping: { description: t.cmd_ping },
      completion: {
        description: t.cmd_completion,
        args: ["install", "uninstall"],
      },
      update: {
        aliases: ["updatePM2"],
        description: t.cmd_update,
      },
      install: {
        aliases: ["module:install"],
        description: t.cmd_install,
        options: installOpts,
        args: [],
      },
      "module:update": {
        description: t.cmd_module_update,
        options: [...globalOpts, { labels: ["--tarball"], description: t.opt_install_tarball }],
        args: [],
      },
      "module:generate": { description: t.cmd_module_generate, args: [] },
      uninstall: {
        aliases: ["module:uninstall"],
        description: t.cmd_uninstall,
        args: [],
      },
      package: { description: t.cmd_package, args: [] },
      publish: {
        aliases: ["module:publish"],
        description: t.cmd_publish,
        options: [{ labels: ["--npm"], description: t.opt_publish_npm }],
        args: [],
      },
      set: { description: t.cmd_set, args: { count: 2, items: [] } },
      multiset: {
        description: t.cmd_multiset,
        args: { count: Infinity, items: [] },
      },
      get: { description: t.cmd_get, args: { count: 1, items: [] } },
      conf: { description: t.cmd_conf, args: { count: 2, items: [] } },
      config: { description: t.cmd_config, args: { count: 2, items: [] } },
      unset: { description: t.cmd_unset, args: { count: 1, items: [] } },
      report: { description: t.cmd_report },
      link: {
        description: t.cmd_link,
        options: [{ labels: ["--info-node"], description: t.opt_link_info_node, args: [] }],
        args: { count: 3, items: [] },
      },
      unlink: { description: t.cmd_unlink },
      monitor: { description: t.cmd_monitor, args: processes },
      unmonitor: { description: t.cmd_unmonitor, args: processes },
      open: { description: t.cmd_open },
      plus: {
        aliases: ["register"],
        description: t.cmd_plus,
        options: plusOpts,
        args: [],
      },
      login: { description: t.cmd_login },
      logout: { description: t.cmd_logout },
      save: {
        aliases: ["dump"],
        description: t.cmd_dump,
        options: [{ labels: ["--force"], description: t.opt_dump_force }],
      },
      cleardump: { description: t.cmd_cleardump },
      send: { description: t.cmd_send, args: { count: 2, items: processIdItems } },
      attach: { description: t.cmd_attach, args: { count: 2, items: processIdItems } },
      resurrect: { description: t.cmd_resurrect },
      unstartup: {
        description: t.cmd_unstartup,
        options: startupOpts,
        args: startupPlatforms,
      },
      startup: {
        description: t.cmd_startup,
        options: startupOpts,
        args: startupPlatforms,
      },
      logrotate: { description: t.cmd_logrotate, options: logrotateOpts },
      init: {
        aliases: ["ecosystem"],
        description: t.cmd_init,
        args: ["simple"],
      },
      reset: {
        description: t.cmd_reset,
        args: procsWithAll,
      },
      describe: {
        aliases: ["desc", "info", "show"],
        description: t.cmd_describe,
        args: processes,
      },
      env: { description: t.cmd_env, args: { count: 1, items: processIdItems } },
      ls: {
        aliases: ["l", "list", "ps", "status"],
        description: t.cmd_list_all,
        options: listOpts,
      },
      jlist: { description: t.cmd_jlist },
      slist: {
        aliases: ["sysinfos"],
        description: t.cmd_sysinfos,
        options: [{ labels: ["-t", "--tree"], description: t.opt_sysinfos_tree }],
      },
      prettylist: { description: t.cmd_prettylist },
      monit: { description: t.cmd_monit },
      imonit: { description: t.cmd_imonit },
      dashboard: {
        aliases: ["dash"],
        description: t.cmd_dashboard,
      },
      flush: { description: t.cmd_flush, args: { count: 1, items: [] } },
      reloadLogs: { description: t.cmd_reload_logs },
      logs: {
        description: t.cmd_logs,
        options: logsOpts,
        args: { count: 1, items: procsWithAll },
      },
      kill: { description: t.cmd_kill },
      pull: {
        description: t.cmd_pull,
        args: {
          count: 2,
          items: dynamic(async (ctx) => {
            if (ctx.positionals.length === 0) return await cache.get(ctx, 5000, getProcessNames);
            return [];
          }),
        },
      },
      forward: { description: t.cmd_forward, args: processes },
      backward: { description: t.cmd_backward, args: processes },
      deepUpdate: { description: t.cmd_deep_update },
      serve: {
        aliases: ["expose"],
        description: t.cmd_serve,
        options: [
          ...globalOpts,
          { labels: ["--port"], description: t.opt_serve_port, args: [] },
          { labels: ["--spa"], description: t.opt_serve_spa },
          { labels: ["--ftp"], description: t.opt_serve_ftp },
          {
            labels: ["--basic-auth-username"],
            description: t.opt_serve_basic_auth_username,
            args: [],
          },
          {
            labels: ["--basic-auth-password"],
            description: t.opt_serve_basic_auth_password,
            args: [],
          },
          { labels: ["--monitor"], description: t.opt_serve_monitor, args: [] },
        ],
        args: {
          count: 2,
          items: dynamic(async (ctx) => {
            if (ctx.positionals.length === 0) return scanPath(ctx.prefix);
            return [];
          }),
        },
      },
      autoinstall: { description: t.cmd_autoinstall },
      examples: { description: t.cmd_examples },
      "install-otel": { description: t.cmd_install_otel },
      "uninstall-otel": { description: t.cmd_uninstall_otel },
    },
  },
});
