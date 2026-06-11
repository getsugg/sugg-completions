import { execFile, scanPath } from "sugg";
// @ts-nocheck — extract-winget-commands.ts 定义了同名冲突的全局 CommandNode，此文件以 completion.d.ts 为准
// completions/winget.ts
// 参考 winget-commands.json 构建的 WinGet CLI 补全树

// ─── 全局选项（所有命令共享） ──────────────────────────────

const globalOpts: OptionNode[] = [
  { labels: ["-?", "--help"], description: "显示选定命令的帮助信息" },
  { labels: ["--wait"], description: "提示用户在退出前按任意键" },
  { labels: ["--logs", "--open-logs"], description: "打开默认日志位置" },
  { labels: ["--verbose", "--verbose-logs"], description: "启用 WinGet 的详细日志记录" },
  { labels: ["--nowarn", "--ignore-warnings"], description: "禁止显示警告输出" },
  { labels: ["--disable-interactivity"], description: "禁用交互式提示" },
  { labels: ["--proxy"], description: "设置要用于此执行的代理" },
  { labels: ["--no-proxy"], description: "禁止对此执行使用代理" },
];

// ─── 复用选项组（跨命令共享，避免重复） ────────────────────

const filterOpts: OptionNode[] = [
  { labels: ["--id"], description: "按 id 筛选结果" },
  { labels: ["--name"], description: "按名称筛选结果" },
  { labels: ["--moniker"], description: "按名字对象筛选结果" },
];

const restOpts: OptionNode[] = [
  { labels: ["--header"], description: "可选的 Windows-Package-Manager REST 源 HTTP 标头" },
  {
    labels: ["--authentication-mode"],
    description: "指定身份验证窗口首选项(silent、silentPreferred 或 interactive)",
  },
  { labels: ["--authentication-account"], description: "指定用于身份验证的帐户" },
  { labels: ["--accept-source-agreements"], description: "在源操作期间接受所有源协议" },
];

const installerBehaviorOpts: OptionNode[] = [
  { labels: ["-i", "--interactive"], description: "请求交互式安装；可能需要用户输入" },
  { labels: ["-h", "--silent"], description: "请求无提示安装" },
  { labels: ["-o", "--log"], description: "日志位置（如果支持）" },
  { labels: ["--custom"], description: "除默认值外，参数传递到安装程序" },
  { labels: ["--override"], description: "覆盖待传递的参数至安装程序" },
  { labels: ["-l", "--location"], description: "要安装到的位置（如支持）" },
  { labels: ["--ignore-security-hash"], description: "忽略安装程序哈希检查失败" },
  { labels: ["--allow-reboot"], description: "如果适用，允许重启" },
  { labels: ["--skip-dependencies"], description: "跳过处理包依赖项和 Windows 功能" },
  {
    labels: ["--ignore-local-archive-malware-scan"],
    description: "忽略在从本地清单安装存档类型包时执行的恶意软件扫描",
  },
  { labels: ["--accept-package-agreements"], description: "接受包的所有许可协议" },
];

const searchListOpts: OptionNode[] = [
  ...filterOpts,
  { labels: ["-s", "--source"], description: "使用指定的源查找程序包" },
  { labels: ["--tag"], description: "按标签筛选" },
  { labels: ["--cmd", "--command"], description: "按命令筛选结果" },
  { labels: ["-n", "--count"], description: "显示介于 1 和 1000 ()之间的指定数量的结果" },
  { labels: ["-e", "--exact"], description: "使用精确匹配查找程序包" },
  ...restOpts,
];

const pinFilterOpts: OptionNode[] = [
  ...filterOpts,
  { labels: ["--tag"], description: "按标签筛选" },
  { labels: ["--cmd", "--command"], description: "按命令筛选结果" },
  { labels: ["-e", "--exact"], description: "使用精确匹配查找程序包" },
  { labels: ["-s", "--source"], description: "使用指定的源查找程序包" },
  ...restOpts,
];

const configureFileOpts: OptionNode[] = [
  { labels: ["-f", "--file"], description: "配置文件的路径" },
  {
    labels: ["--module-path"],
    description:
      "指定本地计算机上用于存储模块的位置。默认为 %LOCALAPPDATA%\\Microsoft\\WinGet\\Configuration\\Modules",
  },
];

const dscResourceOpts: OptionNode[] = [
  { labels: ["--get"], description: "获取资源状态" },
  { labels: ["--set"], description: "设置资源状态" },
  { labels: ["--test"], description: "测试资源状态" },
  { labels: ["--export"], description: "获取所有状态实例" },
  { labels: ["--schema"], description: "获取资源架构" },
  { labels: ["--manifest"], description: "获取资源清单" },
  { labels: ["-o", "--output"], description: "将在其中写入结果的文件" },
];

// ─── 动态补全：包搜索 ─────────────────────────────────────

const packageQuery = dynamic(async (ctx) => {
  const commandline = ctx.words.join(" ");
  const cursorPosition = commandline.length;
  const currentWord = ctx.prefix;

  const wordArg = `--word="${currentWord}"`;
  const cmdArg = `--commandline "${commandline.replace(/"/g, '""')}"`;

  const out = await execFile("winget", [
    "complete",
    wordArg,
    cmdArg,
    "--position",
    String(cursorPosition),
  ]);

  return out
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter(Boolean)
    .map((text) => ({ display: text, value: text }));
});

const filePath = dynamic(async (ctx) => scanPath(ctx.prefix));

// ─── 子命令树 ─────────────────────────────────────────────

// ---- source 子命令 ----

const sourceSubcommands: Record<string, CommandNode> = {
  add: {
    description: "添加新的来源",
    options: [
      ...globalOpts,
      { labels: ["--trust-level"], description: "源的信任级别 (无或受信任的)" },
      { labels: ["--header"], description: "可选的 Windows-Package-Manager REST 源 HTTP 标头" },
      { labels: ["--accept-source-agreements"], description: "在源操作期间接受所有源协议" },
      { labels: ["--explicit"], description: "除非指定，否则从发现中排除源" },
    ],
  },
  list: {
    description: "列出所有当前来源，或列出特定来源的完整详细信息",
    aliases: ["ls"],
    options: [...globalOpts],
  },
  update: {
    description: "更新所有源，或仅指定源",
    aliases: ["refresh"],
    options: [...globalOpts],
  },
  remove: {
    description: "删除指定的源",
    aliases: ["rm"],
    options: [...globalOpts],
  },
  edit: {
    description: "编辑现有源的属性",
    aliases: ["config", "set"],
    options: [...globalOpts],
  },
  reset: {
    description: "重置源",
    options: [...globalOpts, { labels: ["--force"], description: "强制重置源" }],
  },
  export: {
    description: "将当前源作为组策略的 JSON 导出",
    options: [...globalOpts],
  },
};

// ---- settings 子命令 ----

const settingsSubcommands: Record<string, CommandNode> = {
  export: {
    description: "将设置导出为 JSON",
    options: [...globalOpts],
  },
  set: {
    description: "设置管理员设置的值",
    options: [
      ...globalOpts,
      { labels: ["--setting"], description: "要修改的设置的名称" },
      { labels: ["--value"], description: "要为设置设置的值" },
    ],
  },
  reset: {
    description: "将管理员设置重置为其默认值",
    options: [...globalOpts, { labels: ["-r", "--recurse"], description: "重置所有管理员设置" }],
  },
};

// ---- pin 子命令 ----

const pinSubcommands: Record<string, CommandNode> = {
  add: {
    description: "添加新的包钉",
    options: [
      ...globalOpts,
      ...pinFilterOpts,
      {
        labels: ["-v", "--version"],
        description: '要将包钉到的版本。通配符 "*" 可用作最后一个版本部件',
      },
      { labels: ["--force"], description: "直接运行命令并继续处理与安全无关的问题" },
      { labels: ["--blocking"], description: "阻止升级，直到移除包钉，阻止替代参数" },
      { labels: ["--installed"], description: "固定特定的已安装版本" },
    ],
    args: packageQuery,
  },
  remove: {
    description: "删除特定包钉",
    options: [...globalOpts, ...pinFilterOpts],
    args: packageQuery,
  },
  list: {
    description: "列出当前所有固定或特定 PIN 的完整详细信息",
    options: [...globalOpts, ...pinFilterOpts],
    args: packageQuery,
  },
  reset: {
    description: "重置所有现有包钉",
    options: [
      ...globalOpts,
      { labels: ["--force"], description: "直接运行命令并继续处理与安全无关的问题" },
      { labels: ["-s", "--source"], description: "使用指定的源查找程序包" },
    ],
  },
};

// ---- configure 子命令 ----

const configureSubcommands: Record<string, CommandNode> = {
  show: {
    description: "显示提供的配置的详细信息",
    aliases: ["view"],
    options: [
      ...globalOpts,
      ...configureFileOpts,
      { labels: ["--processor-path"], description: "指定配置处理器的路径" },
      { labels: ["-h", "--history"], description: "从历史记录中选择项目" },
    ],
  },
  list: {
    description: "显示已应用于系统的配置的高级别详细信息",
    aliases: ["ls"],
    options: [
      ...globalOpts,
      { labels: ["-h", "--history"], description: "从历史记录中选择项目" },
      { labels: ["-o", "--output"], description: "将在其中写入结果的文件" },
      { labels: ["--remove"], description: "从历史记录中移除项" },
    ],
  },
  test: {
    description: "检查系统是否与提供配置所述的所需状态匹配",
    options: [
      ...globalOpts,
      ...configureFileOpts,
      { labels: ["--processor-path"], description: "指定配置处理器的路径" },
      { labels: ["-h", "--history"], description: "从历史记录中选择项目" },
      { labels: ["--suppress-initial-details"], description: "尽可能禁止显示初始配置详细信息" },
      {
        labels: ["--accept-configuration-agreements"],
        description: "接受配置警告，阻止交互式提示",
      },
    ],
  },
  validate: {
    description: "验证配置文件是否正确",
    options: [
      ...globalOpts,
      ...configureFileOpts,
      { labels: ["--processor-path"], description: "指定配置处理器的路径" },
    ],
  },
  export: {
    description: "将配置资源导出到配置文件",
    options: [
      ...globalOpts,
      { labels: ["-o", "--output"], description: "将在其中写入结果的文件" },
      { labels: ["--package-id"], description: "要导出的程序包标识符" },
      { labels: ["--module"], description: "要导出的资源的模块" },
      { labels: ["--resource"], description: "要导出的配置资源" },
      { labels: ["--module-path"], description: "指定本地计算机上用于存储模块的位置" },
      { labels: ["--processor-path"], description: "指定配置处理器的路径" },
      { labels: ["-s", "--source"], description: "从指定源导出程序包" },
      { labels: ["--include-versions"], description: "在导出文件中包括包版本" },
      { labels: ["-r", "--recurse"], description: "导出所有包配置" },
    ],
  },
};

// ---- dscv3 子命令 ----

const dscv3Subcommands: Record<string, CommandNode> = {
  package: {
    description: "通过 winget 管理包",
    options: [...globalOpts, ...dscResourceOpts],
  },
  source: {
    description: "管理 winget 的源",
    options: [...globalOpts, ...dscResourceOpts],
  },
  "user-settings-file": {
    description: "管理 winget 的用户设置",
    options: [...globalOpts, ...dscResourceOpts],
  },
  "admin-settings": {
    description: "管理 winget 的管理员设置",
    options: [...globalOpts, ...dscResourceOpts],
  },
};

// ─── 顶级命令 ───────────────────────────────────────────

export default createCompletion({
  winget: {
    description: "WinGet 命令行实用工具可从命令行安装应用程序和其他程序包",
    options: [
      ...globalOpts,
      { labels: ["-v", "--version"], description: "显示工具的版本" },
      { labels: ["--info"], description: "显示工具的常规信息" },
    ],
    commands: {
      install: {
        description: "安装选定的程序包",
        aliases: ["add"],
        options: [
          ...globalOpts,
          ...filterOpts,
          { labels: ["-m", "--manifest"], description: "程序包清单的路径" },
          { labels: ["-v", "--version"], description: "使用指定的版本；默认为最新版本" },
          { labels: ["-s", "--source"], description: "使用指定的源查找程序包" },
          { labels: ["--scope"], description: "选择安装范围 (user 或 machine)" },
          { labels: ["-a", "--architecture"], description: "选择体系结构" },
          { labels: ["--installer-type"], description: "选择安装程序类型" },
          { labels: ["-e", "--exact"], description: "使用精确匹配查找程序包" },
          { labels: ["--locale"], description: "要使用的区域设置(BCP47 格式)" },
          ...installerBehaviorOpts,
          { labels: ["--dependency-source"], description: "使用指定源查找包依赖项" },
          { labels: ["--no-upgrade"], description: "如果已安装的版本已存在，则跳过升级" },
          { labels: ["-r", "--rename"], description: "要重命名可执行文件的值(可移植)" },
          { labels: ["--uninstall-previous"], description: "升级期间卸载以前版本的程序包" },
          { labels: ["--force"], description: "直接运行命令并继续处理与安全无关的问题" },
          ...restOpts,
        ],
        args: packageQuery,
      },

      show: {
        description: "显示有关特定程序包的信息",
        aliases: ["view"],
        options: [
          ...globalOpts,
          ...filterOpts,
          { labels: ["-m", "--manifest"], description: "程序包清单的路径" },
          { labels: ["-v", "--version"], description: "使用指定的版本；默认为最新版本" },
          { labels: ["-s", "--source"], description: "使用指定的源查找程序包" },
          { labels: ["-e", "--exact"], description: "使用精确匹配查找程序包" },
          { labels: ["--scope"], description: "选择安装范围 (user 或 machine)" },
          { labels: ["-a", "--architecture"], description: "选择体系结构" },
          { labels: ["--installer-type"], description: "选择安装程序类型" },
          { labels: ["--locale"], description: "要使用的区域设置(BCP47 格式)" },
          { labels: ["--versions"], description: "显示程序包的可用版本" },
          ...restOpts,
        ],
        args: packageQuery,
      },

      source: {
        description: "管理源",
        options: [...globalOpts],
        commands: sourceSubcommands,
      },

      search: {
        description: "从配置的源搜索程序包",
        aliases: ["find"],
        options: [
          ...globalOpts,
          ...searchListOpts,
          { labels: ["--versions"], description: "显示程序包的可用版本" },
        ],
        args: packageQuery,
      },

      list: {
        description: "显示系统上安装的程序包",
        aliases: ["ls"],
        options: [
          ...globalOpts,
          ...searchListOpts,
          { labels: ["--scope"], description: "选择已安装的程序包范围筛选器 (user 或 machine)" },
          { labels: ["--upgrade-available"], description: "仅列出具有可用升级的包" },
          {
            labels: ["-u", "--unknown"],
            description:
              "列出程序包，即使无法确定其当前版本。只能与 --upgrade-available 参数一起使用",
          },
          {
            labels: ["--pinned", "--include-pinned"],
            description:
              "列出程序包，即使它们具有阻止升级的引脚。只能与 --upgrade-available 参数一起使用",
          },
          { labels: ["--details"], description: "显示有关包的详细信息" },
        ],
        args: packageQuery,
      },

      upgrade: {
        description: "升级选定的程序包",
        aliases: ["update"],
        options: [
          ...globalOpts,
          ...filterOpts,
          { labels: ["-m", "--manifest"], description: "程序包清单的路径" },
          { labels: ["-v", "--version"], description: "使用指定的版本；默认为最新版本" },
          { labels: ["-s", "--source"], description: "使用指定的源查找程序包" },
          { labels: ["-e", "--exact"], description: "使用精确匹配查找程序包" },
          { labels: ["--scope"], description: "选择已安装的程序包范围筛选器 (user 或 machine)" },
          { labels: ["-a", "--architecture"], description: "选择体系结构" },
          { labels: ["--installer-type"], description: "选择安装程序类型" },
          { labels: ["--locale"], description: "要使用的区域设置(BCP47 格式)" },
          ...installerBehaviorOpts,
          { labels: ["--purge"], description: "删除包目录中的所有文件和目录(可移植)" },
          {
            labels: ["-r", "--recurse"],
            description: "如果可用，将所有已安装的程序包更新为最新版本",
          },
          { labels: ["-u", "--unknown"], description: "即使无法确定其当前版本，也可升级包" },
          {
            labels: ["--pinned", "--include-pinned"],
            description: "即使程序包拥有非阻止性包钉，也要升级程序包",
          },
          { labels: ["--uninstall-previous"], description: "升级期间卸载以前版本的程序包" },
          { labels: ["--force"], description: "直接运行命令并继续处理与安全无关的问题" },
          ...restOpts,
        ],
        args: packageQuery,
      },

      uninstall: {
        description: "卸载选定的程序包",
        aliases: ["remove", "rm"],
        options: [
          ...globalOpts,
          ...filterOpts,
          { labels: ["-m", "--manifest"], description: "程序包清单的路径" },
          { labels: ["--product-code"], description: "使用产品代码进行筛选" },
          { labels: ["-v", "--version"], description: "要执行的版本" },
          { labels: ["--all", "--all-versions"], description: "卸载所有版本" },
          { labels: ["-s", "--source"], description: "使用指定的源查找程序包" },
          { labels: ["-e", "--exact"], description: "使用精确匹配查找程序包" },
          { labels: ["--scope"], description: "选择已安装的程序包范围筛选器 (user 或 machine)" },
          { labels: ["-i", "--interactive"], description: "请求交互式安装；可能需要用户输入" },
          { labels: ["-h", "--silent"], description: "请求无提示安装" },
          { labels: ["--force"], description: "直接运行命令并继续处理与安全无关的问题" },
          { labels: ["--purge"], description: "删除包目录中的所有文件和目录(可移植)" },
          { labels: ["--preserve"], description: "保留由包创建的所有文件和目录(可移植)" },
          { labels: ["-o", "--log"], description: "日志位置（如果支持）" },
          ...restOpts,
        ],
        args: packageQuery,
      },

      hash: {
        description: "计算本地文件的哈希值",
        options: [
          ...globalOpts,
          {
            labels: ["-m", "--msix"],
            description: "输入文件将被视为 msix；如果签名，将提供签名哈希",
          },
        ],
        args: filePath,
      },

      validate: {
        description: "使用一组严格的准则验证清单",
        options: [...globalOpts],
        args: filePath,
      },

      settings: {
        description: "在默认 json 文本编辑器中打开设置",
        aliases: ["config"],
        options: [
          ...globalOpts,
          { labels: ["--enable"], description: "启用特定的管理员设置" },
          { labels: ["--disable"], description: "禁用特定管理员设置" },
        ],
        commands: settingsSubcommands,
      },

      features: {
        description: "显示实验性功能的状态",
        options: [...globalOpts],
      },

      export: {
        description: "将已安装程序包的列表写入文件",
        options: [
          ...globalOpts,
          { labels: ["-s", "--source"], description: "从指定源导出程序包" },
          { labels: ["--include-versions"], description: "在导出文件中包括包版本" },
          { labels: ["--accept-source-agreements"], description: "在源操作期间接受所有源协议" },
        ],
        args: filePath,
      },

      import: {
        description: "安装文件中列出的所有程序包",
        options: [
          ...globalOpts,
          { labels: ["--ignore-unavailable"], description: "忽略不可用的程序包" },
          { labels: ["--ignore-versions"], description: "忽略导入文件中的程序包版本" },
          { labels: ["--no-upgrade"], description: "如果已安装的版本已存在，则跳过升级" },
          { labels: ["--accept-package-agreements"], description: "接受包的所有许可协议" },
          ...restOpts,
        ],
        args: filePath,
      },

      pin: {
        description: "管理包钉",
        options: [...globalOpts],
        commands: pinSubcommands,
      },

      configure: {
        description: "确保系统与所需状态匹配",
        aliases: ["configuration", "dsc"],
        options: [
          ...globalOpts,
          ...configureFileOpts,
          { labels: ["--processor-path"], description: "指定配置处理器的路径" },
          { labels: ["-h", "--history"], description: "从历史记录中选择项目" },
          {
            labels: ["--accept-configuration-agreements"],
            description: "接受配置警告，阻止交互式提示",
          },
          { labels: ["--suppress-initial-details"], description: "尽可能禁止显示初始配置详细信息" },
          { labels: ["--enable"], description: "请启用扩展功能。需要应用商店访问权限。" },
          { labels: ["--disable"], description: "禁用扩展功能。需要存储权限。" },
        ],
        commands: configureSubcommands,
      },

      download: {
        description: "从所选包下载安装程序",
        options: [
          ...globalOpts,
          ...filterOpts,
          { labels: ["-d", "--download-directory"], description: "安装程序下载到的目录" },
          { labels: ["-m", "--manifest"], description: "程序包清单的路径" },
          { labels: ["-v", "--version"], description: "使用指定的版本；默认为最新版本" },
          { labels: ["-s", "--source"], description: "使用指定的源查找程序包" },
          { labels: ["--scope"], description: "选择安装范围 (user 或 machine)" },
          { labels: ["-a", "--architecture"], description: "选择体系结构" },
          { labels: ["--installer-type"], description: "选择安装程序类型" },
          { labels: ["-e", "--exact"], description: "使用精确匹配查找程序包" },
          { labels: ["--locale"], description: "要使用的区域设置(BCP47 格式)" },
          { labels: ["--ignore-security-hash"], description: "忽略安装程序哈希检查失败" },
          { labels: ["--skip-dependencies"], description: "跳过处理包依赖项和 Windows 功能" },
          {
            labels: ["--skip-license", "--skip-microsoft-store-package-license"],
            description: "跳过检索 Microsoft Store 程序包脱机许可证",
          },
          { labels: ["--platform"], description: "选择目标平台" },
          { labels: ["--os-version"], description: "目标 OS 版本" },
          ...restOpts,
        ],
        args: packageQuery,
      },

      repair: {
        description: "修复选定的程序包",
        aliases: ["fix"],
        options: [
          ...globalOpts,
          ...filterOpts,
          { labels: ["-m", "--manifest"], description: "程序包清单的路径" },
          { labels: ["-v", "--version"], description: "要执行的版本" },
          { labels: ["--product-code"], description: "使用产品代码进行筛选" },
          { labels: ["-a", "--architecture"], description: "选择体系结构" },
          { labels: ["--scope"], description: "选择已安装的程序包范围筛选器 (user 或 machine)" },
          { labels: ["-s", "--source"], description: "使用指定的源查找程序包" },
          { labels: ["-i", "--interactive"], description: "请求交互式安装；可能需要用户输入" },
          { labels: ["-h", "--silent"], description: "请求无提示安装" },
          { labels: ["-o", "--log"], description: "日志位置（如果支持）" },
          {
            labels: ["--ignore-local-archive-malware-scan"],
            description: "忽略在从本地清单安装存档类型包时执行的恶意软件扫描",
          },
          { labels: ["--locale"], description: "要使用的区域设置(BCP47 格式)" },
          { labels: ["--force"], description: "直接运行命令并继续处理与安全无关的问题" },
          { labels: ["--ignore-security-hash"], description: "忽略安装程序哈希检查失败" },
          { labels: ["-e", "--exact"], description: "使用精确匹配查找程序包" },
          ...restOpts,
        ],
        args: packageQuery,
      },

      dscv3: {
        description: "DSC v3 资源来配置 winget 和包",
        options: [
          ...globalOpts,
          { labels: ["--manifest"], description: "获取资源清单" },
          { labels: ["-o", "--output"], description: "要在其中写入结果的目录" },
        ],
        commands: dscv3Subcommands,
      },

      mcp: {
        description: "MCP (模型上下文协议) Windows 程序包管理器的信息",
        options: [
          ...globalOpts,
          { labels: ["--enable"], description: "请启用扩展功能。需要应用商店访问权限。" },
          { labels: ["--disable"], description: "禁用扩展功能。需要存储权限。" },
        ],
      },
    },
  },
});
