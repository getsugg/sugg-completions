declare module "virtual:i18n/bun" {
  /**
   * - 🚩 **en**: Only print advisories with severity greater than or equal to <level> (low, moderate, high, critical)
   * - **zh**: 仅打印严重性大于或等于 <level> 的建议（low、moderate、high、critical）
   */
  export const audit_option_audit_level: string;
  /**
   * - 🚩 **en**: Ignore specific CVE IDs from audit
   * - **zh**: 忽略审计中的特定 CVE ID
   */
  export const audit_option_ignore: string;
  /**
   * - 🚩 **en**: Output in JSON format
   * - **zh**: 以 JSON 格式输出
   */
  export const audit_option_json: string;
  /**
   * - 🚩 **en**: Allow unresolved dynamic import()/require() specifiers matching these glob patterns. Use '<empty>' for opaque specifiers. Default is '*' (allow all).
   * - **zh**: 允许无法解析的动态 import()/require() 标识符，默认为 '*'（允许所有）
   */
  export const build_option_allow_unresolved: string;
  /**
   * - 🚩 **en**: (EXPERIMENTAL) Build a web app for production using Bun Bake.
   * - **zh**: （实验性）使用 Bun Bake 构建生产环境的 Web 应用
   */
  export const build_option_app: string;
  /**
   * - 🚩 **en**: Customize asset filenames. Defaults to "[name]-[hash].[ext]"
   * - **zh**: 自定义资源文件名。默认为 "[name]-[hash].[ext]"
   */
  export const build_option_asset_naming: string;
  /**
   * - 🚩 **en**: Add a banner to the bundled output such as "use client"; for a bundle being used with RSCs
   * - **zh**: 为打包输出添加横幅，例如 "use client"
   */
  export const build_option_banner: string;
  /**
   * - 🚩 **en**: Use a bytecode cache
   * - **zh**: 使用字节码缓存
   */
  export const build_option_bytecode: string;
  /**
   * - 🚩 **en**: Customize chunk filenames. Defaults to "[name]-[hash].[ext]"
   * - **zh**: 自定义块文件名。默认为 "[name]-[hash].[ext]"
   */
  export const build_option_chunk_naming: string;
  /**
   * - 🚩 **en**: Generate a standalone Bun executable containing your bundled code. Implies --production
   * - **zh**: 生成包含打包代码的独立 Bun 可执行文件。意味着 --production
   */
  export const build_option_compile: string;
  /**
   * - 🚩 **en**: Enable autoloading of bunfig.toml in standalone executable (default: true)
   * - **zh**: 在独立可执行文件中启用自动加载 bunfig.toml（默认 true）
   */
  export const build_option_compile_autoload_bunfig: string;
  /**
   * - 🚩 **en**: Enable autoloading of .env files in standalone executable (default: true)
   * - **zh**: 在独立可执行文件中启用自动加载 .env 文件（默认 true）
   */
  export const build_option_compile_autoload_dotenv: string;
  /**
   * - 🚩 **en**: Enable autoloading of package.json at runtime in standalone executable (default: false)
   * - **zh**: 在独立可执行文件中启用运行时自动加载 package.json（默认 false）
   */
  export const build_option_compile_autoload_package_json: string;
  /**
   * - 🚩 **en**: Enable autoloading of tsconfig.json at runtime in standalone executable (default: false)
   * - **zh**: 在独立可执行文件中启用运行时自动加载 tsconfig.json（默认 false）
   */
  export const build_option_compile_autoload_tsconfig: string;
  /**
   * - 🚩 **en**: Prepend arguments to the standalone executable's execArgv
   * - **zh**: 预置独立可执行文件的 execArgv 参数
   */
  export const build_option_compile_exec_argv: string;
  /**
   * - 🚩 **en**: Path to a Bun executable to use for cross-compilation instead of downloading
   * - **zh**: 用于交叉编译的 Bun 可执行文件路径，代替下载
   */
  export const build_option_compile_executable_path: string;
  /**
   * - 🚩 **en**: Chunk CSS files together to reduce duplicated CSS loaded in a browser. Only has an effect when multiple entrypoints import CSS
   * - **zh**: 将 CSS 文件合并以减少浏览器加载的重复 CSS
   */
  export const build_option_css_chunking: string;
  /**
   * - 🚩 **en**: Re-emit DCE annotations in bundles. Enabled by default unless --minify-whitespace is passed.
   * - **zh**: 在打包中重新输出 DCE 注释。默认启用，除非传递 --minify-whitespace
   */
  export const build_option_emit_dce_annotations: string;
  /**
   * - 🚩 **en**: Customize entry point filenames. Defaults to "[dir]/[name].[ext]"
   * - **zh**: 自定义入口点文件名。默认为 "[dir]/[name].[ext]"
   */
  export const build_option_entry_naming: string;
  /**
   * - 🚩 **en**: Inline environment variables into the bundle as process.env.${name}. Defaults to 'disable'. To inline environment variables matching a prefix, use my prefix like 'FOO_PUBLIC_*'.
   * - **zh**: 将环境变量内联到包中作为 process.env.${name}。默认 'disable'
   */
  export const build_option_env: string;
  /**
   * - 🚩 **en**: Exclude module from transpilation (can use * wildcards). ex: -e react
   * - **zh**: 从转译中排除模块（可使用 * 通配符），例如 -e react
   */
  export const build_option_external: string;
  /**
   * - 🚩 **en**: Add a footer to the bundled output such as // built with bun!
   * - **zh**: 为打包输出添加页脚，例如 // built with bun!
   */
  export const build_option_footer: string;
  /**
   * - 🚩 **en**: Specifies the module format to build to. "esm", "cjs" and "iife" are supported. Defaults to "esm", or "cjs" with --bytecode.
   * - **zh**: 指定构建的模块格式。支持 "esm"、"cjs" 和 "iife"。默认 "esm"，若使用 --bytecode 则为 "cjs"。
   */
  export const build_option_format: string;
  /**
   * - 🚩 **en**: Preserve original function and class names when minifying
   * - **zh**: 压缩时保留原始函数和类名
   */
  export const build_option_keep_names: string;
  /**
   * - 🚩 **en**: Write a JSON file with metadata about the build
   * - **zh**: 写入包含构建元数据的 JSON 文件
   */
  export const build_option_metafile: string;
  /**
   * - 🚩 **en**: Write a markdown file with a visualization of the module graph (LLM-friendly)
   * - **zh**: 写入模块图可视化 markdown 文件（LLM 友好）
   */
  export const build_option_metafile_md: string;
  /**
   * - 🚩 **en**: Enable all minification flags
   * - **zh**: 启用所有压缩标志
   */
  export const build_option_minify: string;
  /**
   * - 🚩 **en**: Minify identifiers
   * - **zh**: 压缩标识符
   */
  export const build_option_minify_identifiers: string;
  /**
   * - 🚩 **en**: Minify syntax and inline data
   * - **zh**: 压缩语法和内联数据
   */
  export const build_option_minify_syntax: string;
  /**
   * - 🚩 **en**: Minify whitespace
   * - **zh**: 压缩空白字符
   */
  export const build_option_minify_whitespace: string;
  /**
   * - 🚩 **en**: Transpile file only, do not bundle
   * - **zh**: 仅转译文件，不打包
   */
  export const build_option_no_bundle: string;
  /**
   * - 🚩 **en**: Disable autoloading of bunfig.toml in standalone executable
   * - **zh**: 禁止在独立可执行文件中自动加载 bunfig.toml
   */
  export const build_option_no_compile_autoload_bunfig: string;
  /**
   * - 🚩 **en**: Disable autoloading of .env files in standalone executable
   * - **zh**: 禁止在独立可执行文件中自动加载 .env 文件
   */
  export const build_option_no_compile_autoload_dotenv: string;
  /**
   * - 🚩 **en**: Disable autoloading of package.json at runtime in standalone executable
   * - **zh**: 禁止在独立可执行文件中运行时自动加载 package.json
   */
  export const build_option_no_compile_autoload_package_json: string;
  /**
   * - 🚩 **en**: Disable autoloading of tsconfig.json at runtime in standalone executable
   * - **zh**: 禁止在独立可执行文件中运行时自动加载 tsconfig.json
   */
  export const build_option_no_compile_autoload_tsconfig: string;
  /**
   * - 🚩 **en**: Default to "dist" if multiple files
   * - **zh**: 多个文件时默认输出到 "dist"
   */
  export const build_option_outdir: string;
  /**
   * - 🚩 **en**: Write to a file
   * - **zh**: 写入文件
   */
  export const build_option_outfile: string;
  /**
   * - 🚩 **en**: Add dependencies to bundle or keep them external. "external", "bundle" is supported. Defaults to "bundle".
   * - **zh**: 将依赖添加到包中或保持外部导入。支持 "external"、"bundle"。默认为 "bundle"
   */
  export const build_option_packages: string;
  /**
   * - 🚩 **en**: Set NODE_ENV=production and enable minification
   * - **zh**: 设置 NODE_ENV=production 并启用压缩
   */
  export const build_option_production: string;
  /**
   * - 🚩 **en**: A prefix to be appended to any import paths in bundled code
   * - **zh**: 附加到打包代码中所有导入路径的前缀
   */
  export const build_option_public_path: string;
  /**
   * - 🚩 **en**: Enable React Fast Refresh transform (does not emit hot-module code, use this for testing)
   * - **zh**: 启用 React Fast Refresh 转换
   */
  export const build_option_react_fast_refresh: string;
  /**
   * - 🚩 **en**: Fail the build on any dynamic import()/require() specifier that cannot be resolved at build time.
   * - **zh**: 在构建时任何无法解析的动态 import()/require() 标识符都导致构建失败
   */
  export const build_option_reject_unresolved: string;
  /**
   * - 🚩 **en**: Root directory used for multiple entry points
   * - **zh**: 多入口点使用的根目录
   */
  export const build_option_root: string;
  /**
   * - 🚩 **en**: (EXPERIMENTAL) Enable server components
   * - **zh**: （实验性）启用服务端组件
   */
  export const build_option_server_components: string;
  /**
   * - 🚩 **en**: Build with sourcemaps - 'linked', 'inline', 'external', or 'none'
   * - **zh**: 构建 sourcemap - 'linked'、'inline'、'external' 或 'none'
   */
  export const build_option_sourcemap: string;
  /**
   * - 🚩 **en**: Enable code splitting
   * - **zh**: 启用代码拆分
   */
  export const build_option_splitting: string;
  /**
   * - 🚩 **en**: The intended execution environment for the bundle. "browser", "bun" or "node"
   * - **zh**: 捆绑包的目标执行环境："browser"、"bun" 或 "node"
   */
  export const build_option_target: string;
  /**
   * - 🚩 **en**: When using --compile targeting Windows, set the executable copyright
   * - **zh**: 当使用 --compile 针对 Windows 时，设置可执行文件版权
   */
  export const build_option_windows_copyright: string;
  /**
   * - 🚩 **en**: When using --compile targeting Windows, set the executable description
   * - **zh**: 当使用 --compile 针对 Windows 时，设置可执行文件描述
   */
  export const build_option_windows_description: string;
  /**
   * - 🚩 **en**: When using --compile targeting Windows, prevent a Command prompt from opening alongside the executable
   * - **zh**: 当使用 --compile 针对 Windows 时，防止可执行文件打开命令提示符窗口
   */
  export const build_option_windows_hide_console: string;
  /**
   * - 🚩 **en**: When using --compile targeting Windows, assign an executable icon
   * - **zh**: 当使用 --compile 针对 Windows 时，分配可执行文件图标
   */
  export const build_option_windows_icon: string;
  /**
   * - 🚩 **en**: When using --compile targeting Windows, set the executable company name
   * - **zh**: 当使用 --compile 针对 Windows 时，设置可执行文件公司名称
   */
  export const build_option_windows_publisher: string;
  /**
   * - 🚩 **en**: When using --compile targeting Windows, set the executable product name
   * - **zh**: 当使用 --compile 针对 Windows 时，设置可执行文件产品名称
   */
  export const build_option_windows_title: string;
  /**
   * - 🚩 **en**: When using --compile targeting Windows, set the executable version (e.g. 1.2.3.4)
   * - **zh**: 当使用 --compile 针对 Windows 时，设置可执行文件版本（例如 1.2.3.4）
   */
  export const build_option_windows_version: string;
  /**
   * - 🚩 **en**: Add a dependency to package.json (bun a)
   * - **zh**: 向 package.json 添加依赖（bun a）
   */
  export const cmd_add_desc: string;
  /**
   * - 🚩 **en**: Check installed packages for vulnerabilities
   * - **zh**: 检查已安装包的安全漏洞
   */
  export const cmd_audit_desc: string;
  /**
   * - 🚩 **en**: Bundle TypeScript & JavaScript into a single file
   * - **zh**: 将 TypeScript 和 JavaScript 打包成单个文件
   */
  export const cmd_build_desc: string;
  /**
   * - 🚩 **en**: Create a new project from a template (bun c)
   * - **zh**: 从模板创建新项目（bun c）
   */
  export const cmd_create_desc: string;
  /**
   * - 🚩 **en**: Run a shell script directly with Bun
   * - **zh**: 直接运行 Shell 脚本
   */
  export const cmd_exec_desc: string;
  /**
   * - 🚩 **en**: Provide feedback to the Bun team
   * - **zh**: 向 Bun 团队提供反馈
   */
  export const cmd_feedback_desc: string;
  /**
   * - 🚩 **en**: Display package metadata from the registry
   * - **zh**: 显示注册表中的包元数据
   */
  export const cmd_info_desc: string;
  /**
   * - 🚩 **en**: Start an empty Bun project from a built-in template
   * - **zh**: 从内置模板启动一个空的 Bun 项目
   */
  export const cmd_init_desc: string;
  /**
   * - 🚩 **en**: Install dependencies for a package.json (bun i)
   * - **zh**: 安装 package.json 中的依赖（bun i）
   */
  export const cmd_install_desc: string;
  /**
   * - 🚩 **en**: Register or link a local npm package
   * - **zh**: 注册或链接本地 npm 包
   */
  export const cmd_link_desc: string;
  /**
   * - 🚩 **en**: Display latest versions of outdated dependencies
   * - **zh**: 显示过时依赖的最新版本
   */
  export const cmd_outdated_desc: string;
  /**
   * - 🚩 **en**: Prepare a package for patching
   * - **zh**: 准备一个包以进行补丁
   */
  export const cmd_patch_desc: string;
  /**
   * - 🚩 **en**: Additional package management utilities
   * - **zh**: 额外的包管理工具
   */
  export const cmd_pm_desc: string;
  /**
   * - 🚩 **en**: Publish a package to the npm registry
   * - **zh**: 发布包到 npm 注册表
   */
  export const cmd_publish_desc: string;
  /**
   * - 🚩 **en**: Remove a dependency from package.json (bun rm)
   * - **zh**: 从 package.json 移除依赖（bun rm）
   */
  export const cmd_remove_desc: string;
  /**
   * - 🚩 **en**: Start a REPL session with Bun
   * - **zh**: 启动 REPL 会话
   */
  export const cmd_repl_desc: string;
  /**
   * - 🚩 **en**: Execute a file with Bun or run a package.json script
   * - **zh**: 执行一个文件或运行 package.json 脚本
   */
  export const cmd_run_desc: string;
  /**
   * - 🚩 **en**: Run unit tests with Bun
   * - **zh**: 运行单元测试
   */
  export const cmd_test_desc: string;
  /**
   * - 🚩 **en**: Unregister a local npm package
   * - **zh**: 注销本地 npm 包
   */
  export const cmd_unlink_desc: string;
  /**
   * - 🚩 **en**: Update outdated dependencies
   * - **zh**: 更新过时的依赖
   */
  export const cmd_update_desc: string;
  /**
   * - 🚩 **en**: Upgrade to latest version of Bun
   * - **zh**: 升级到最新版本的 Bun
   */
  export const cmd_upgrade_desc: string;
  /**
   * - 🚩 **en**: Explain why a package is installed
   * - **zh**: 解释为什么安装了某个包
   */
  export const cmd_why_desc: string;
  /**
   * - 🚩 **en**: Execute a package binary (CLI), installing if needed (bunx)
   * - **zh**: 执行包二进制文件（CLI），必要时安装（bunx）
   */
  export const cmd_x_desc: string;
  /**
   * - 🚩 **en**: Show help
   * - **zh**: 显示帮助
   */
  export const create_option_help: string;
  /**
   * - 🚩 **en**: Fast JavaScript runtime, package manager, bundler, and test runner.
   * - **zh**: 快速的 JavaScript 运行时、包管理器、打包器和测试运行器。
   */
  export const description: string;
  /**
   * - 🚩 **en**: Set the email address used for this submission
   * - **zh**: 设置此提交使用的电子邮件地址
   */
  export const feedback_option_email: string;
  /**
   * - 🚩 **en**: Output in JSON format
   * - **zh**: 以 JSON 格式输出
   */
  export const info_option_json: string;
  /**
   * - 🚩 **en**: Only initialize type definitions
   * - **zh**: 仅初始化类型定义
   */
  export const init_option_minimal: string;
  /**
   * - 🚩 **en**: Initialize a React project
   * - **zh**: 初始化 React 项目
   */
  export const init_option_react: string;
  /**
   * - 🚩 **en**: Initialize a React project with @shadcn/ui and TailwindCSS
   * - **zh**: 使用 @shadcn/ui 和 TailwindCSS 初始化 React 项目
   */
  export const init_option_react_shadcn: string;
  /**
   * - 🚩 **en**: Initialize a React project with TailwindCSS
   * - **zh**: 使用 TailwindCSS 初始化 React 项目
   */
  export const init_option_react_tailwind: string;
  /**
   * - 🚩 **en**: Accept all default options
   * - **zh**: 接受所有默认选项
   */
  export const init_option_yes: string;
  /**
   * - 🚩 **en**: Analyze & install all dependencies of files passed as arguments recursively (using Bun's bundler)
   * - **zh**: 递归分析并安装作为参数传递的所有文件的依赖（使用 Bun 的打包器）
   */
  export const install_option_analyze: string;
  /**
   * - 🚩 **en**: Platform-specific optimizations for installing dependencies. Possible values: "hardlink" (default), "symlink", "copyfile"
   * - **zh**: 安装依赖的平台特定优化。可选值："hardlink"（默认）、"symlink"、"copyfile"
   */
  export const install_option_backend: string;
  /**
   * - 🚩 **en**: Provide a Certificate Authority signing certificate
   * - **zh**: 提供证书颁发机构签名证书
   */
  export const install_option_ca: string;
  /**
   * - 🚩 **en**: Store & load cached data from a specific directory path
   * - **zh**: 将缓存数据存储/加载到指定目录
   */
  export const install_option_cache_dir: string;
  /**
   * - 🚩 **en**: The same as --ca, but is a file path to the certificate
   * - **zh**: 与 --ca 相同，但为证书文件路径
   */
  export const install_option_cafile: string;
  /**
   * - 🚩 **en**: Maximum number of concurrent jobs for lifecycle scripts (default: 2x CPU cores)
   * - **zh**: 生命周期脚本的最大并发作业数（默认 2x CPU 核心数）
   */
  export const install_option_concurrent_scripts: string;
  /**
   * - 🚩 **en**: Override CPU architecture for optional dependencies (e.g., x64, arm64, * for all)
   * - **zh**: 覆盖可选依赖的 CPU 架构（例如 x64、arm64、* 表示所有）
   */
  export const install_option_cpu: string;
  /**
   * - 🚩 **en**: Add dependency to "devDependencies"
   * - **zh**: 添加到 "devDependencies"
   */
  export const install_option_dev: string;
  /**
   * - 🚩 **en**: Perform a dry run without making changes
   * - **zh**: 执行试运行而不做任何更改
   */
  export const install_option_dry_run: string;
  /**
   * - 🚩 **en**: Add the exact version instead of the ^range
   * - **zh**: 添加确切版本而不是 ^range
   */
  export const install_option_exact: string;
  /**
   * - 🚩 **en**: Install packages for the matching workspaces
   * - **zh**: 为匹配的工作区安装包
   */
  export const install_option_filter: string;
  /**
   * - 🚩 **en**: Always request the latest versions from the registry & reinstall all dependencies
   * - **zh**: 始终从注册表请求最新版本并重新安装所有依赖
   */
  export const install_option_force: string;
  /**
   * - 🚩 **en**: Disallow changes to lockfile
   * - **zh**: 禁止更改 lockfile
   */
  export const install_option_frozen_lockfile: string;
  /**
   * - 🚩 **en**: Install globally
   * - **zh**: 全局安装
   */
  export const install_option_global: string;
  /**
   * - 🚩 **en**: Skip lifecycle scripts in the project's package.json (dependency scripts are never run)
   * - **zh**: 跳过项目 package.json 中的生命周期脚本（依赖脚本从不运行）
   */
  export const install_option_ignore_scripts: string;
  /**
   * - 🚩 **en**: Linker strategy (one of "isolated" or "hoisted")
   * - **zh**: 链接器策略（"isolated" 或 "hoisted"）
   */
  export const install_option_linker: string;
  /**
   * - 🚩 **en**: Generate a lockfile without installing dependencies
   * - **zh**: 仅生成 lockfile 而不安装依赖
   */
  export const install_option_lockfile_only: string;
  /**
   * - 🚩 **en**: Only install packages published at least N seconds ago (security feature)
   * - **zh**: 只安装至少 N 秒前发布的包（安全特性）
   */
  export const install_option_minimum_release_age: string;
  /**
   * - 🚩 **en**: Maximum number of concurrent network requests (default 48)
   * - **zh**: 最大并发网络请求数（默认 48）
   */
  export const install_option_network_concurrency: string;
  /**
   * - 🚩 **en**: Ignore manifest cache entirely
   * - **zh**: 完全忽略清单缓存
   */
  export const install_option_no_cache: string;
  /**
   * - 🚩 **en**: Disable the progress bar
   * - **zh**: 禁用进度条
   */
  export const install_option_no_progress: string;
  /**
   * - 🚩 **en**: Don't update package.json or save a lockfile
   * - **zh**: 不更新 package.json 或保存 lockfile
   */
  export const install_option_no_save: string;
  /**
   * - 🚩 **en**: Don't print a summary
   * - **zh**: 不打印摘要
   */
  export const install_option_no_summary: string;
  /**
   * - 🚩 **en**: Skip verifying integrity of newly downloaded packages
   * - **zh**: 跳过验证新下载包的完整性
   */
  export const install_option_no_verify: string;
  /**
   * - 🚩 **en**: Exclude 'dev', 'optional', or 'peer' dependencies from install
   * - **zh**: 从安装中排除 'dev'、'optional' 或 'peer' 依赖
   */
  export const install_option_omit: string;
  /**
   * - 🚩 **en**: Only add dependencies to package.json if they are not already present
   * - **zh**: 仅当 package.json 中尚不存在依赖时才添加
   */
  export const install_option_only_missing: string;
  /**
   * - 🚩 **en**: Add dependency to "optionalDependencies"
   * - **zh**: 添加到 "optionalDependencies"
   */
  export const install_option_optional: string;
  /**
   * - 🚩 **en**: Override operating system for optional dependencies (e.g., linux, darwin, * for all)
   * - **zh**: 覆盖可选依赖的操作系统（例如 linux、darwin、* 表示所有）
   */
  export const install_option_os: string;
  /**
   * - 🚩 **en**: Add dependency to "peerDependencies"
   * - **zh**: 添加到 "peerDependencies"
   */
  export const install_option_peer: string;
  /**
   * - 🚩 **en**: Don't install devDependencies
   * - **zh**: 不安装 devDependencies
   */
  export const install_option_production: string;
  /**
   * - 🚩 **en**: Only show tarball name when packing
   * - **zh**: 打包时仅显示 tarball 名称
   */
  export const install_option_quiet: string;
  /**
   * - 🚩 **en**: Use a specific registry by default, overriding .npmrc, bunfig.toml and environment variables
   * - **zh**: 默认使用特定注册表，覆盖 .npmrc、bunfig.toml 和环境变量
   */
  export const install_option_registry: string;
  /**
   * - 🚩 **en**: Save to package.json (true by default)
   * - **zh**: 保存到 package.json（默认 true）
   */
  export const install_option_save: string;
  /**
   * - 🚩 **en**: Save a text-based lockfile
   * - **zh**: 保存基于文本的 lockfile
   */
  export const install_option_save_text_lockfile: string;
  /**
   * - 🚩 **en**: Add to trustedDependencies in the project's package.json and install the package(s)
   * - **zh**: 添加到项目的 package.json 中的 trustedDependencies 并安装包
   */
  export const install_option_trust: string;
  /**
   * - 🚩 **en**: Excessively verbose logging
   * - **zh**: 极其详细的日志
   */
  export const install_option_verbose: string;
  /**
   * - 🚩 **en**: Write a yarn.lock file (yarn v1)
   * - **zh**: 写入 yarn.lock 文件（yarn v1）
   */
  export const install_option_yarn: string;
  /**
   * - 🚩 **en**: Force a script or package to use Bun's runtime instead of Node.js (via symlinking node)
   * - **zh**: 强制脚本或包使用 Bun 运行时代替 Node.js（通过 symlinking node）
   */
  export const option_bun: string;
  /**
   * - 🚩 **en**: Pass custom conditions to resolve
   * - **zh**: 传递自定义条件以解析
   */
  export const option_conditions: string;
  /**
   * - 🚩 **en**: Specify path to Bun config file. Default $cwd/bunfig.toml
   * - **zh**: 指定 Bun 配置文件的路径。默认 $cwd/bunfig.toml
   */
  export const option_config: string;
  /**
   * - 🚩 **en**: Set the default depth for console.log object inspection (default: 2)
   * - **zh**: 设置 console.log 对象检查的默认深度（默认 2）
   */
  export const option_console_depth: string;
  /**
   * - 🚩 **en**: Start CPU profiler and write profile to disk on exit
   * - **zh**: 启动 CPU 分析器，退出时将分析文件写入磁盘
   */
  export const option_cpu_prof: string;
  /**
   * - 🚩 **en**: Specify the directory where the CPU profile will be saved
   * - **zh**: 指定 CPU 分析文件保存目录
   */
  export const option_cpu_prof_dir: string;
  /**
   * - 🚩 **en**: Specify the sampling interval in microseconds for CPU profiling (default: 1000)
   * - **zh**: 指定 CPU 分析的采样间隔微秒数（默认 1000）
   */
  export const option_cpu_prof_interval: string;
  /**
   * - 🚩 **en**: Output CPU profile in markdown format (grep-friendly, designed for LLM analysis)
   * - **zh**: 以 markdown 格式输出 CPU 分析（面向 LLM 分析，grep 友好）
   */
  export const option_cpu_prof_md: string;
  /**
   * - 🚩 **en**: Specify the name of the CPU profile file
   * - **zh**: 指定 CPU 分析文件名
   */
  export const option_cpu_prof_name: string;
  /**
   * - 🚩 **en**: Cron period for cron execution mode
   * - **zh**: cron 执行模式的周期
   */
  export const option_cron_period: string;
  /**
   * - 🚩 **en**: Title for cron execution mode
   * - **zh**: cron 执行模式的标题
   */
  export const option_cron_title: string;
  /**
   * - 🚩 **en**: Absolute path to resolve files & entry points from. This just changes the process' cwd.
   * - **zh**: 解析文件和入口点的绝对路径。仅更改进程的 cwd。
   */
  export const option_cwd: string;
  /**
   * - 🚩 **en**: Set the default order of DNS lookup results. Valid orders: verbatim (default), ipv4first, ipv6first
   * - **zh**: 设置 DNS 查找结果的默认顺序。有效值：verbatim（默认）、ipv4first、ipv6first
   */
  export const option_dns_result_order: string;
  /**
   * - 🚩 **en**: Number of lines of script output shown when using --filter (default: 10). Set to 0 to show all lines.
   * - **zh**: 使用 --filter 时显示的脚本输出行数（默认 10）。设为 0 显示所有行。
   */
  export const option_elide_lines: string;
  /**
   * - 🚩 **en**: Load environment variables from the specified file(s)
   * - **zh**: 从指定文件加载环境变量
   */
  export const option_env_file: string;
  /**
   * - 🚩 **en**: Evaluate argument as a script
   * - **zh**: 将参数作为脚本执行
   */
  export const option_eval: string;
  /**
   * - 🚩 **en**: Expose gc() on the global object. Has no effect on Bun.gc().
   * - **zh**: 在全局对象上暴露 gc()。对 Bun.gc() 无效。
   */
  export const option_expose_gc: string;
  /**
   * - 🚩 **en**: Preconnect to a URL while code is loading
   * - **zh**: 在代码加载时预连接到 URL
   */
  export const option_fetch_preconnect: string;
  /**
   * - 🚩 **en**: Run a script in all workspace packages matching the pattern
   * - **zh**: 在所有匹配模式的工作区包中运行脚本
   */
  export const option_filter: string;
  /**
   * - 🚩 **en**: Generate V8 heap snapshot on exit (.heapsnapshot)
   * - **zh**: 退出时生成 V8 堆快照 (.heapsnapshot)
   */
  export const option_heap_prof: string;
  /**
   * - 🚩 **en**: Specify the directory where the heap profile will be saved
   * - **zh**: 指定堆分析文件保存目录
   */
  export const option_heap_prof_dir: string;
  /**
   * - 🚩 **en**: Generate markdown heap profile on exit (for CLI analysis)
   * - **zh**: 退出时生成 markdown 堆分析（用于 CLI 分析）
   */
  export const option_heap_prof_md: string;
  /**
   * - 🚩 **en**: Specify the name of the heap profile file
   * - **zh**: 指定堆分析文件名
   */
  export const option_heap_prof_name: string;
  /**
   * - 🚩 **en**: Display this help menu
   * - **zh**: 显示此帮助菜单
   */
  export const option_help: string;
  /**
   * - 🚩 **en**: Enable auto reload in the Bun runtime, test runner, or bundler
   * - **zh**: 在 Bun 运行时、测试运行器或打包器中启用自动重载
   */
  export const option_hot: string;
  /**
   * - 🚩 **en**: Auto-install dependencies during execution. Equivalent to --install=fallback.
   * - **zh**: 执行时自动安装依赖。相当于 --install=fallback。
   */
  export const option_i: string;
  /**
   * - 🚩 **en**: Exit without an error if the entrypoint does not exist
   * - **zh**: 如果入口点不存在则退出而不报错
   */
  export const option_if_present: string;
  /**
   * - 🚩 **en**: Activate Bun's debugger
   * - **zh**: 激活 Bun 的调试器
   */
  export const option_inspect: string;
  /**
   * - 🚩 **en**: Activate Bun's debugger, set breakpoint on first line of code and wait
   * - **zh**: 激活 Bun 的调试器，在第一行代码设置断点并等待
   */
  export const option_inspect_brk: string;
  /**
   * - 🚩 **en**: Activate Bun's debugger, wait for a connection before executing
   * - **zh**: 激活 Bun 的调试器，等待连接后再执行
   */
  export const option_inspect_wait: string;
  /**
   * - 🚩 **en**: Configure auto-install behavior. One of "auto" (default, auto-installs when no node_modules), "fallback" (missing packages only), "force" (always).
   * - **zh**: 配置自动安装行为。可选值："auto"（默认，当没有 node_modules 时自动安装）、"fallback"（仅缺失的包）、"force"（总是）
   */
  export const option_install: string;
  /**
   * - 🚩 **en**: Set the maximum size of HTTP headers in bytes. Default is 16KiB
   * - **zh**: 设置 HTTP 头的最大字节数，默认 16KiB
   */
  export const option_max_http_header_size: string;
  /**
   * - 🚩 **en**: Throw an error if process.dlopen is called, and disable export condition "node-addons"
   * - **zh**: 如果调用 process.dlopen 则抛出错误，并禁用导出条件 "node-addons"
   */
  export const option_no_addons: string;
  /**
   * - 🚩 **en**: Disable clearing the terminal screen on reload when --hot or --watch is enabled
   * - **zh**: 当启用 --hot 或 --watch 时，禁止清屏
   */
  export const option_no_clear_screen: string;
  /**
   * - 🚩 **en**: Suppress all reporting of the custom deprecation.
   * - **zh**: 禁止所有自定义弃用报告
   */
  export const option_no_deprecation: string;
  /**
   * - 🚩 **en**: Disable automatic loading of .env files
   * - **zh**: 禁用自动加载 .env 文件
   */
  export const option_no_env_file: string;
  /**
   * - 🚩 **en**: Continue running other scripts when one fails (with --parallel/--sequential)
   * - **zh**: 当一个脚本失败时继续运行其他脚本（与 --parallel/--sequential 一起使用）
   */
  export const option_no_exit_on_error: string;
  /**
   * - 🚩 **en**: Disable auto install in the Bun runtime
   * - **zh**: 禁用 Bun 运行时的自动安装
   */
  export const option_no_install: string;
  /**
   * - 🚩 **en**: Run multiple scripts concurrently with Foreman-style output
   * - **zh**: 使用 Foreman 风格的输出并发运行多个脚本
   */
  export const option_parallel: string;
  /**
   * - 🚩 **en**: Set the default port for Bun.serve
   * - **zh**: 设置 Bun.serve 的默认端口
   */
  export const option_port: string;
  /**
   * - 🚩 **en**: Use the latest matching versions of packages in the Bun runtime, always checking npm
   * - **zh**: 在 Bun 运行时中使用最新的匹配版本，始终检查 npm
   */
  export const option_prefer_latest: string;
  /**
   * - 🚩 **en**: Skip staleness checks for packages in the Bun runtime and resolve from disk
   * - **zh**: 跳过 Bun 运行时中的包陈旧检查，从磁盘解析
   */
  export const option_prefer_offline: string;
  /**
   * - 🚩 **en**: Import a module before other modules are loaded
   * - **zh**: 在其他模块加载前导入一个模块
   */
  export const option_preload: string;
  /**
   * - 🚩 **en**: Evaluate argument as a script and print the result
   * - **zh**: 将参数作为脚本执行并打印结果
   */
  export const option_print: string;
  /**
   * - 🚩 **en**: Preconnect to $REDIS_URL at startup
   * - **zh**: 启动时预连接到 $REDIS_URL
   */
  export const option_redis_preconnect: string;
  /**
   * - 🚩 **en**: Print version with revision and exit
   * - **zh**: 打印带修订号的版本并退出
   */
  export const option_revision: string;
  /**
   * - 🚩 **en**: Run multiple scripts sequentially with Foreman-style output
   * - **zh**: 使用 Foreman 风格的输出顺序运行多个脚本
   */
  export const option_sequential: string;
  /**
   * - 🚩 **en**: Control the shell used for package.json scripts. Supports either 'bun' or 'system'
   * - **zh**: 控制 package.json 脚本使用的 shell。支持 'bun' 或 'system'
   */
  export const option_shell: string;
  /**
   * - 🚩 **en**: Don't print the script command
   * - **zh**: 不打印脚本命令
   */
  export const option_silent: string;
  /**
   * - 🚩 **en**: Use less memory, but run garbage collection more often
   * - **zh**: 使用更少内存，但更频繁地运行垃圾回收
   */
  export const option_smol: string;
  /**
   * - 🚩 **en**: Preconnect to PostgreSQL at startup
   * - **zh**: 启动时预连接到 PostgreSQL
   */
  export const option_sql_preconnect: string;
  /**
   * - 🚩 **en**: Determine whether or not deprecation warnings result in errors.
   * - **zh**: 决定弃用警告是否导致错误
   */
  export const option_throw_deprecation: string;
  /**
   * - 🚩 **en**: Set the process title
   * - **zh**: 设置进程标题
   */
  export const option_title: string;
  /**
   * - 🚩 **en**: One of "strict", "throw", "warn", "none", or "warn-with-error-code"
   * - **zh**: 可选值："strict"、"throw"、"warn"、"none" 或 "warn-with-error-code"
   */
  export const option_unhandled_rejections: string;
  /**
   * - 🚩 **en**: Use bundled CA store
   * - **zh**: 使用捆绑的 CA 存储
   */
  export const option_use_bundled_ca: string;
  /**
   * - 🚩 **en**: Use OpenSSL's default CA store
   * - **zh**: 使用 OpenSSL 的默认 CA 存储
   */
  export const option_use_openssl_ca: string;
  /**
   * - 🚩 **en**: Use the system's trusted certificate authorities
   * - **zh**: 使用系统的可信证书颁发机构
   */
  export const option_use_system_ca: string;
  /**
   * - 🚩 **en**: Set the default User-Agent header for HTTP requests
   * - **zh**: 设置 HTTP 请求的默认 User-Agent 头
   */
  export const option_user_agent: string;
  /**
   * - 🚩 **en**: Print version and exit
   * - **zh**: 打印版本并退出
   */
  export const option_version: string;
  /**
   * - 🚩 **en**: Automatically restart the process on file change
   * - **zh**: 文件变化时自动重启进程
   */
  export const option_watch: string;
  /**
   * - 🚩 **en**: Run a script in all workspace packages (from the "workspaces" field in package.json)
   * - **zh**: 在所有工作区包中运行脚本（来自 package.json 中的 "workspaces" 字段）
   */
  export const option_workspaces: string;
  /**
   * - 🚩 **en**: Boolean to force Buffer.allocUnsafe(size) to be zero-filled.
   * - **zh**: 强制 Buffer.allocUnsafe(size) 零填充
   */
  export const option_zero_fill_buffers: string;
  /**
   * - 🚩 **en**: Check outdated packages in all workspaces
   * - **zh**: 检查所有工作区中的过时包
   */
  export const outdated_option_recursive: string;
  /**
   * - 🚩 **en**: Install a package containing modifications in `dir`
   * - **zh**: 安装包含 `dir` 中修改的包
   */
  export const patch_option_commit: string;
  /**
   * - 🚩 **en**: The directory to put the patch file in (only if --commit is used)
   * - **zh**: 放置补丁文件的目录（仅当使用 --commit 时）
   */
  export const patch_option_patches_dir: string;
  /**
   * - 🚩 **en**: print the path to bin folder
   * - **zh**: 打印 bin 文件夹的路径
   */
  export const pm_bin_desc: string;
  /**
   * - 🚩 **en**: print the global path to bin folder
   * - **zh**: 打印全局 bin 文件夹路径
   */
  export const pm_bin_option_g: string;
  /**
   * - 🚩 **en**: print the path to the cache folder
   * - **zh**: 打印缓存文件夹的路径
   */
  export const pm_cache_desc: string;
  /**
   * - 🚩 **en**: clear the cache
   * - **zh**: 清空缓存
   */
  export const pm_cache_rm_desc: string;
  /**
   * - 🚩 **en**: print the default trusted dependencies list
   * - **zh**: 打印默认的可信依赖列表
   */
  export const pm_default_trusted_desc: string;
  /**
   * - 🚩 **en**: generate & print the hash of the current lockfile
   * - **zh**: 生成并打印当前 lockfile 的哈希值
   */
  export const pm_hash_desc: string;
  /**
   * - 🚩 **en**: print the hash stored in the current lockfile
   * - **zh**: 打印当前 lockfile 中存储的哈希值
   */
  export const pm_hash_print_desc: string;
  /**
   * - 🚩 **en**: print the string used to hash the lockfile
   * - **zh**: 打印用于哈希 lockfile 的字符串
   */
  export const pm_hash_string_desc: string;
  /**
   * - 🚩 **en**: list the dependency tree according to the current lockfile
   * - **zh**: 列出当前 lockfile 的依赖树
   */
  export const pm_list_desc: string;
  /**
   * - 🚩 **en**: list the entire dependency tree according to the current lockfile
   * - **zh**: 列出当前 lockfile 的完整依赖树
   */
  export const pm_list_option_all: string;
  /**
   * - 🚩 **en**: migrate another package manager's lockfile without installing anything
   * - **zh**: 迁移其他包管理器的 lockfile 而不安装任何东西
   */
  export const pm_migrate_desc: string;
  /**
   * - 🚩 **en**: create a tarball of the current workspace
   * - **zh**: 创建当前工作区的 tarball
   */
  export const pm_pack_desc: string;
  /**
   * - 🚩 **en**: the directory the tarball will be saved in
   * - **zh**: tarball 保存到的目录
   */
  export const pm_pack_option_destination: string;
  /**
   * - 🚩 **en**: the name of the tarball
   * - **zh**: tarball 的名称
   */
  export const pm_pack_option_filename: string;
  /**
   * - 🚩 **en**: specify a custom compression level for gzip (0-9, default is 9)
   * - **zh**: 指定 gzip 压缩级别（0-9，默认 9）
   */
  export const pm_pack_option_gzip_level: string;
  /**
   * - 🚩 **en**: don't run pre/postpack and prepare scripts
   * - **zh**: 不运行 pre/postpack 和 prepare 脚本
   */
  export const pm_pack_option_ignore_scripts: string;
  /**
   * - 🚩 **en**: only output the tarball filename
   * - **zh**: 仅输出 tarball 文件名
   */
  export const pm_pack_option_quiet: string;
  /**
   * - 🚩 **en**: manage data in package.json
   * - **zh**: 管理 package.json 中的数据
   */
  export const pm_pkg_desc: string;
  /**
   * - 🚩 **en**: scan all packages in lockfile for security vulnerabilities
   * - **zh**: 扫描 lockfile 中所有包的安全漏洞
   */
  export const pm_scan_desc: string;
  /**
   * - 🚩 **en**: run scripts for untrusted dependencies and add to `trustedDependencies`
   * - **zh**: 为不可信依赖运行脚本并添加到 `trustedDependencies`
   */
  export const pm_trust_desc: string;
  /**
   * - 🚩 **en**: trust all untrusted dependencies
   * - **zh**: 信任所有不可信的依赖
   */
  export const pm_trust_option_all: string;
  /**
   * - 🚩 **en**: print current untrusted dependencies with scripts
   * - **zh**: 打印当前带有脚本的不可信依赖
   */
  export const pm_untrusted_desc: string;
  /**
   * - 🚩 **en**: bump the version in package.json and create a git tag
   * - **zh**: 提升 package.json 中的版本并创建 git 标签
   */
  export const pm_version_desc: string;
  /**
   * - 🚩 **en**: version increment: patch, minor, major, prepatch, preminor, premajor, prerelease, from-git, or a specific version
   * - **zh**: 版本增量：patch、minor、major、prepatch、preminor、premajor、prerelease、from-git 或特定版本
   */
  export const pm_version_increment: string;
  /**
   * - 🚩 **en**: view package metadata from the registry (use `bun info` instead)
   * - **zh**: 查看注册表中的包元数据（改用 `bun info`）
   */
  export const pm_view_desc: string;
  /**
   * - 🚩 **en**: print the current npm username
   * - **zh**: 打印当前 npm 用户名
   */
  export const pm_whoami_desc: string;
  /**
   * - 🚩 **en**: show dependency tree explaining why a package is installed
   * - **zh**: 显示解释为什么安装了某个包的依赖树
   */
  export const pm_why_desc: string;
  /**
   * - 🚩 **en**: Set access level for scoped packages
   * - **zh**: 设置作用域包的访问级别
   */
  export const publish_option_access: string;
  /**
   * - 🚩 **en**: Specify the type of one-time password authentication (default is 'web')
   * - **zh**: 指定一次性密码身份验证类型（默认 'web'）
   */
  export const publish_option_auth_type: string;
  /**
   * - 🚩 **en**: Specify a custom compression level for gzip. Default is 9.
   * - **zh**: 指定 gzip 的自定义压缩级别。默认 9。
   */
  export const publish_option_gzip_level: string;
  /**
   * - 🚩 **en**: Provide a one-time password for authentication
   * - **zh**: 提供一次性密码进行身份验证
   */
  export const publish_option_otp: string;
  /**
   * - 🚩 **en**: Tag the release. Default is "latest"
   * - **zh**: 标记发布版本。默认 "latest"
   */
  export const publish_option_tag: string;
  /**
   * - 🚩 **en**: Don't exit with code 1 when republishing over an existing version number
   * - **zh**: 重新发布到现有版本号时不退出并返回代码 1
   */
  export const publish_option_tolerate_republish: string;
  /**
   * - 🚩 **en**: Substitute K:V while parsing, e.g. --define process.env.NODE_ENV:"development". Values are parsed as JSON.
   * - **zh**: 解析时替换 K:V，例如 --define process.env.NODE_ENV:"development"，值被解析为 JSON
   */
  export const run_option_define: string;
  /**
   * - 🚩 **en**: Remove function calls, e.g. --drop=console removes all console.* calls.
   * - **zh**: 移除函数调用，例如 --drop=console 移除所有 console.* 调用
   */
  export const run_option_drop: string;
  /**
   * - 🚩 **en**: Defaults to: .tsx,.ts,.jsx,.js,.json
   * - **zh**: 默认为：.tsx,.ts,.jsx,.js,.json
   */
  export const run_option_extension_order: string;
  /**
   * - 🚩 **en**: Enable a feature flag for dead-code elimination, e.g. --feature=SUPER_SECRET
   * - **zh**: 为死代码消除启用特性标志，例如 --feature=SUPER_SECRET
   */
  export const run_option_feature: string;
  /**
   * - 🚩 **en**: Ignore tree-shaking annotations such as @__PURE__
   * - **zh**: 忽略树摇注释，例如 @__PURE__
   */
  export const run_option_ignore_dce_annotations: string;
  /**
   * - 🚩 **en**: Changes the function called when compiling JSX elements using the classic JSX runtime
   * - **zh**: 更改使用经典 JSX 运行时编译 JSX 元素时调用的函数
   */
  export const run_option_jsx_factory: string;
  /**
   * - 🚩 **en**: Changes the function called when compiling JSX fragments
   * - **zh**: 更改编译 JSX 片段时调用的函数
   */
  export const run_option_jsx_fragment: string;
  /**
   * - 🚩 **en**: Declares the module specifier to be used for importing the jsx and jsxs factory functions. Default: "react"
   * - **zh**: 声明用于导入 jsx 和 jsxs 工厂函数的模块标识符。默认："react"
   */
  export const run_option_jsx_import_source: string;
  /**
   * - 🚩 **en**: "automatic" (default) or "classic"
   * - **zh**: "automatic"（默认）或 "classic"
   */
  export const run_option_jsx_runtime: string;
  /**
   * - 🚩 **en**: Treat JSX elements as having side effects (disable pure annotations)
   * - **zh**: 将 JSX 元素视为具有副作用（禁用纯注释）
   */
  export const run_option_jsx_side_effects: string;
  /**
   * - 🚩 **en**: Parse files with .ext:loader, e.g. --loader .js:jsx. Valid loaders: js, jsx, ts, tsx, json, toml, text, file, wasm, napi
   * - **zh**: 使用 .ext:loader 解析文件，例如 --loader .js:jsx。有效加载器：js, jsx, ts, tsx, json, toml, text, file, wasm, napi
   */
  export const run_option_loader: string;
  /**
   * - 🚩 **en**: Main fields to lookup in package.json. Defaults to --target dependent
   * - **zh**: package.json 中查找的主字段。默认取决于 --target
   */
  export const run_option_main_fields: string;
  /**
   * - 🚩 **en**: Disable macros from being executed in the bundler, transpiler and runtime
   * - **zh**: 禁止在打包器、转译器和运行时中执行宏
   */
  export const run_option_no_macros: string;
  /**
   * - 🚩 **en**: Preserve symlinks when resolving files
   * - **zh**: 解析文件时保留符号链接
   */
  export const run_option_preserve_symlinks: string;
  /**
   * - 🚩 **en**: Preserve symlinks when resolving the main entry point
   * - **zh**: 解析主入口点时保留符号链接
   */
  export const run_option_preserve_symlinks_main: string;
  /**
   * - 🚩 **en**: Specify custom tsconfig.json. Default $cwd/tsconfig.json
   * - **zh**: 指定自定义 tsconfig.json。默认 $cwd/tsconfig.json
   */
  export const run_option_tsconfig_override: string;
  /**
   * - 🚩 **en**: file
   * - **zh**: 文件
   */
  export const suggestion_file: string;
  /**
   * - 🚩 **en**: globally installed
   * - **zh**: 全局已安装
   */
  export const suggestion_global_installed: string;
  /**
   * - 🚩 **en**: installed
   * - **zh**: 已安装
   */
  export const suggestion_installed: string;
  /**
   * - 🚩 **en**: package bin
   * - **zh**: 包可执行文件
   */
  export const suggestion_package_bin: string;
  /**
   * - 🚩 **en**: package from registry
   * - **zh**: 来自注册表的包
   */
  export const suggestion_package_from_registry: string;
  /**
   * - 🚩 **en**: script
   * - **zh**: 脚本
   */
  export const suggestion_script: string;
  /**
   * - 🚩 **en**: Exit the test suite after <NUMBER> failures. If you do not specify a number, it defaults to 1.
   * - **zh**: 在 N 次失败后退出测试套件。未指定数字时默认为 1。
   */
  export const test_option_bail: string;
  /**
   * - 🚩 **en**: Only run test files affected by changed files according to git. Optionally pass a commit or branch to compare against.
   * - **zh**: 只运行受 git 更改影响的测试文件。可选传递要比较的提交或分支。
   */
  export const test_option_changed: string;
  /**
   * - 🚩 **en**: Treat all tests as `test.concurrent()` tests
   * - **zh**: 将所有测试视为 test.concurrent() 测试
   */
  export const test_option_concurrent: string;
  /**
   * - 🚩 **en**: Generate a coverage profile
   * - **zh**: 生成覆盖率报告
   */
  export const test_option_coverage: string;
  /**
   * - 🚩 **en**: Directory for coverage files. Defaults to 'coverage'.
   * - **zh**: 覆盖率文件目录，默认 'coverage'
   */
  export const test_option_coverage_dir: string;
  /**
   * - 🚩 **en**: Report coverage in 'text' and/or 'lcov'. Defaults to 'text'.
   * - **zh**: 报告覆盖率格式：'text' 和/或 'lcov'。默认 'text'。
   */
  export const test_option_coverage_reporter: string;
  /**
   * - 🚩 **en**: Enable dots reporter. Shorthand for --reporter=dots.
   * - **zh**: 启用 dots 报告器。--reporter=dots 的简写。
   */
  export const test_option_dots: string;
  /**
   * - 🚩 **en**: Run each test file in a fresh global object. Leaked handles from one file cannot affect another.
   * - **zh**: 在每个干净的全局对象中运行每个测试文件。一个文件泄漏的句柄不会影响另一个。
   */
  export const test_option_isolate: string;
  /**
   * - 🚩 **en**: Maximum number of concurrent tests to execute at once. Default is 20.
   * - **zh**: 同时执行的最大并发测试数，默认 20
   */
  export const test_option_max_concurrency: string;
  /**
   * - 🚩 **en**: Run only tests that are marked with "test.only()" or "describe.only()"
   * - **zh**: 只运行标记为 test.only() 或 describe.only() 的测试
   */
  export const test_option_only: string;
  /**
   * - 🚩 **en**: Only display test failures, hiding passing tests.
   * - **zh**: 仅显示失败的测试，隐藏通过的测试
   */
  export const test_option_only_failures: string;
  /**
   * - 🚩 **en**: Run test files in parallel using N worker processes. Implies --isolate. Defaults to CPU core count.
   * - **zh**: 使用 N 个工作进程并行运行测试文件。意味着 --isolate。默认为 CPU 核心数。
   */
  export const test_option_parallel: string;
  /**
   * - 🚩 **en**: Milliseconds the first --parallel worker must be busy before spawning the rest. 0 spawns all immediately. Default 5.
   * - **zh**: 第一个 --parallel 工作进程必须忙碌多少毫秒后才能启动其余进程。0 立即全部启动。默认 5。
   */
  export const test_option_parallel_delay: string;
  /**
   * - 🚩 **en**: Exit with code 0 when no tests are found
   * - **zh**: 当未找到测试时以代码 0 退出
   */
  export const test_option_pass_with_no_tests: string;
  /**
   * - 🚩 **en**: Glob patterns for test file paths to ignore.
   * - **zh**: 要忽略的测试文件路径的 glob 模式
   */
  export const test_option_path_ignore_patterns: string;
  /**
   * - 🚩 **en**: Run tests in random order
   * - **zh**: 随机顺序运行测试
   */
  export const test_option_randomize: string;
  /**
   * - 🚩 **en**: Test output reporter format. Available: 'junit' (requires --reporter-outfile), 'dots'. Default: console output.
   * - **zh**: 测试输出报告器格式。可用：'junit'（需要 --reporter-outfile）、'dots'。默认控制台输出。
   */
  export const test_option_reporter: string;
  /**
   * - 🚩 **en**: Output file path for the reporter format (required with --reporter).
   * - **zh**: 报告器格式的输出文件路径（与 --reporter 一起使用）
   */
  export const test_option_reporter_outfile: string;
  /**
   * - 🚩 **en**: Re-run each test file <NUMBER> times, helps catch certain bugs
   * - **zh**: 重新运行每个测试文件 N 次，帮助捕捉某些 bug
   */
  export const test_option_rerun_each: string;
  /**
   * - 🚩 **en**: Default retry count for all tests, overridden by per-test { retry: N }
   * - **zh**: 所有测试的默认重试次数，可被每个测试的 { retry: N } 覆盖
   */
  export const test_option_retry: string;
  /**
   * - 🚩 **en**: Set the random seed for test randomization
   * - **zh**: 设置测试随机化的随机种子
   */
  export const test_option_seed: string;
  /**
   * - 🚩 **en**: Run a subset of test files, e.g. '--shard=1/3' runs the first of three shards. Useful for splitting tests across multiple CI jobs.
   * - **zh**: 运行测试文件的子集，例如 '--shard=1/3' 运行三个分片中的第一个。用于在多个 CI 任务间拆分测试。
   */
  export const test_option_shard: string;
  /**
   * - 🚩 **en**: Run only tests with a name that matches the given regex.
   * - **zh**: 只运行名称匹配给定正则表达式的测试
   */
  export const test_option_test_name_pattern: string;
  /**
   * - 🚩 **en**: (internal) Run as a --parallel worker, receiving files over IPC.
   * - **zh**: （内部）作为 --parallel 工作进程运行，通过 IPC 接收文件
   */
  export const test_option_test_worker: string;
  /**
   * - 🚩 **en**: Set the per-test timeout in milliseconds, default is 5000.
   * - **zh**: 设置每个测试的超时毫秒数，默认 5000
   */
  export const test_option_timeout: string;
  /**
   * - 🚩 **en**: Include tests that are marked with "test.todo()"
   * - **zh**: 包含标记为 test.todo() 的测试
   */
  export const test_option_todo: string;
  /**
   * - 🚩 **en**: Update snapshot files
   * - **zh**: 更新快照文件
   */
  export const test_option_update_snapshots: string;
  /**
   * - 🚩 **en**: Show an interactive list of outdated packages to select for update
   * - **zh**: 显示交互式过时包列表以供选择更新
   */
  export const update_option_interactive: string;
  /**
   * - 🚩 **en**: Update packages to their latest versions
   * - **zh**: 将包更新到最新版本
   */
  export const update_option_latest: string;
  /**
   * - 🚩 **en**: Update packages in all workspaces
   * - **zh**: 更新所有工作区中的包
   */
  export const update_option_recursive: string;
  /**
   * - 🚩 **en**: Install the most recent canary version of Bun
   * - **zh**: 安装最新的 canary 版 Bun
   */
  export const upgrade_option_canary: string;
  /**
   * - 🚩 **en**: Maximum depth of the dependency tree to display
   * - **zh**: 要显示的依赖树最大深度
   */
  export const why_option_depth: string;
  /**
   * - 🚩 **en**: Show only the top dependency tree instead of nested ones
   * - **zh**: 仅显示顶层依赖树而不显示嵌套
   */
  export const why_option_top: string;
  /**
   * - 🚩 **en**: Specify package to install when binary name differs from package name
   * - **zh**: 当二进制名称与包名称不同时指定要安装的包
   */
  export const x_option_package: string;
  /**
   * - 🚩 **en**: Enable verbose output during installation
   * - **zh**: 在安装期间启用详细输出
   */
  export const x_option_verbose: string;
}

declare module "virtual:i18n/git" {
  /**
   * - 🚩 **en**: Add file contents to the index
   * - **zh**: 将文件内容添加到暂存区
   */
  export const cmd_add: string;
  /**
   * - 🚩 **en**: Use binary search to find the commit that introduced a bug
   * - **zh**: 用二分查找定位引入 bug 的提交
   */
  export const cmd_bisect: string;
  /**
   * - 🚩 **en**: Mark commit as bad
   * - **zh**: 标记当前提交为有问题
   */
  export const cmd_bisect_bad: string;
  /**
   * - 🚩 **en**: Mark commit as good
   * - **zh**: 标记当前提交为正常
   */
  export const cmd_bisect_good: string;
  /**
   * - 🚩 **en**: Show bisect log
   * - **zh**: 查看二分查找日志
   */
  export const cmd_bisect_log: string;
  /**
   * - 🚩 **en**: Finish bisect session
   * - **zh**: 结束二分查找
   */
  export const cmd_bisect_reset: string;
  /**
   * - 🚩 **en**: Run script to automate bisect
   * - **zh**: 运行脚本自动化二分查找
   */
  export const cmd_bisect_run: string;
  /**
   * - 🚩 **en**: Skip current commit
   * - **zh**: 跳过当前提交
   */
  export const cmd_bisect_skip: string;
  /**
   * - 🚩 **en**: Start bisect session
   * - **zh**: 开始二分查找
   */
  export const cmd_bisect_start: string;
  /**
   * - 🚩 **en**: List, create, or delete branches
   * - **zh**: 列出、创建或删除分支
   */
  export const cmd_branch: string;
  /**
   * - 🚩 **en**: Apply the changes introduced by some existing commits
   * - **zh**: 应用已有提交引入的变更
   */
  export const cmd_cherry_pick: string;
  /**
   * - 🚩 **en**: Clone a repository into a new directory
   * - **zh**: 克隆仓库到新目录
   */
  export const cmd_clone: string;
  /**
   * - 🚩 **en**: Record changes to the repository
   * - **zh**: 记录变更到仓库
   */
  export const cmd_commit: string;
  /**
   * - 🚩 **en**: Get and set repository or global options
   * - **zh**: 获取和设置仓库或全局选项
   */
  export const cmd_config: string;
  /**
   * - 🚩 **en**: Open config in editor
   * - **zh**: 在编辑器中打开配置
   */
  export const cmd_config_edit: string;
  /**
   * - 🚩 **en**: Get a config value
   * - **zh**: 获取配置值
   */
  export const cmd_config_get: string;
  /**
   * - 🚩 **en**: List all config variables
   * - **zh**: 列出所有配置变量
   */
  export const cmd_config_list: string;
  /**
   * - 🚩 **en**: Remove a config section
   * - **zh**: 删除配置节
   */
  export const cmd_config_remove_section: string;
  /**
   * - 🚩 **en**: Rename a config section
   * - **zh**: 重命名配置节
   */
  export const cmd_config_rename_section: string;
  /**
   * - 🚩 **en**: Set a config value
   * - **zh**: 设置配置值
   */
  export const cmd_config_set: string;
  /**
   * - 🚩 **en**: Remove a config variable
   * - **zh**: 删除配置变量
   */
  export const cmd_config_unset: string;
  /**
   * - 🚩 **en**: Show changes between commits, commit and working tree, etc
   * - **zh**: 显示提交之间、提交与工作区之间的差异
   */
  export const cmd_diff: string;
  /**
   * - 🚩 **en**: Download objects and refs from another repository
   * - **zh**: 从另一个仓库下载对象和引用
   */
  export const cmd_fetch: string;
  /**
   * - 🚩 **en**: Distributed version control system
   * - **zh**: 分布式版本控制系统
   */
  export const cmd_git: string;
  /**
   * - 🚩 **en**: Print lines matching a pattern
   * - **zh**: 打印匹配模式的行
   */
  export const cmd_grep: string;
  /**
   * - 🚩 **en**: Create an empty Git repository or reinitialize an existing one
   * - **zh**: 创建空 Git 仓库或重新初始化已有仓库
   */
  export const cmd_init: string;
  /**
   * - 🚩 **en**: Show commit logs
   * - **zh**: 显示提交日志
   */
  export const cmd_log: string;
  /**
   * - 🚩 **en**: Join two or more development histories together
   * - **zh**: 合并两个或多个开发历史
   */
  export const cmd_merge: string;
  /**
   * - 🚩 **en**: Move or rename a file, a directory, or a symlink
   * - **zh**: 移动或重命名文件、目录或符号链接
   */
  export const cmd_mv: string;
  /**
   * - 🚩 **en**: Fetch from and integrate with another repository or a local branch
   * - **zh**: 从远程仓库拉取并合并
   */
  export const cmd_pull: string;
  /**
   * - 🚩 **en**: Update remote refs along with associated objects
   * - **zh**: 推送本地引用到远程仓库
   */
  export const cmd_push: string;
  /**
   * - 🚩 **en**: Reapply commits on top of another base tip
   * - **zh**: 在另一个基础提交上重新应用提交
   */
  export const cmd_rebase: string;
  /**
   * - 🚩 **en**: Manage set of tracked repositories
   * - **zh**: 管理远程仓库
   */
  export const cmd_remote: string;
  /**
   * - 🚩 **en**: Add a remote
   * - **zh**: 添加远程仓库
   */
  export const cmd_remote_add: string;
  /**
   * - 🚩 **en**: Get the URLs for a remote
   * - **zh**: 获取远程仓库 URL
   */
  export const cmd_remote_get_url: string;
  /**
   * - 🚩 **en**: Delete stale remote-tracking branches
   * - **zh**: 删除过期的远程跟踪分支
   */
  export const cmd_remote_prune: string;
  /**
   * - 🚩 **en**: Remove a remote
   * - **zh**: 删除远程仓库
   */
  export const cmd_remote_remove: string;
  /**
   * - 🚩 **en**: Rename a remote
   * - **zh**: 重命名远程仓库
   */
  export const cmd_remote_rename: string;
  /**
   * - 🚩 **en**: Change the list of branches tracked by a remote
   * - **zh**: 修改远程跟踪的分支列表
   */
  export const cmd_remote_set_branches: string;
  /**
   * - 🚩 **en**: Set the default branch for a remote
   * - **zh**: 设置远程默认分支
   */
  export const cmd_remote_set_head: string;
  /**
   * - 🚩 **en**: Change the URLs for a remote
   * - **zh**: 修改远程仓库 URL
   */
  export const cmd_remote_set_url: string;
  /**
   * - 🚩 **en**: Show information about a remote
   * - **zh**: 显示远程仓库信息
   */
  export const cmd_remote_show: string;
  /**
   * - 🚩 **en**: Fetch updates for remotes
   * - **zh**: 拉取所有远程更新
   */
  export const cmd_remote_update: string;
  /**
   * - 🚩 **en**: Set HEAD or the index to a known state
   * - **zh**: 将 HEAD 或暂存区重置到已知状态
   */
  export const cmd_reset: string;
  /**
   * - 🚩 **en**: Restore working tree files
   * - **zh**: 恢复工作区文件
   */
  export const cmd_restore: string;
  /**
   * - 🚩 **en**: Revert some existing commits
   * - **zh**: 撤销已有提交
   */
  export const cmd_revert: string;
  /**
   * - 🚩 **en**: Remove files from the working tree and from the index
   * - **zh**: 从工作区和暂存区删除文件
   */
  export const cmd_rm: string;
  /**
   * - 🚩 **en**: Show various types of objects
   * - **zh**: 显示各类对象信息
   */
  export const cmd_show: string;
  /**
   * - 🚩 **en**: Stash the changes in a dirty working directory away
   * - **zh**: 将脏工作区的变更暂存起来
   */
  export const cmd_stash: string;
  /**
   * - 🚩 **en**: Apply a stash entry
   * - **zh**: 应用暂存条目
   */
  export const cmd_stash_apply: string;
  /**
   * - 🚩 **en**: Create a branch from a stash
   * - **zh**: 从暂存创建分支
   */
  export const cmd_stash_branch: string;
  /**
   * - 🚩 **en**: Remove all stash entries
   * - **zh**: 删除所有暂存条目
   */
  export const cmd_stash_clear: string;
  /**
   * - 🚩 **en**: Remove a stash entry
   * - **zh**: 删除一个暂存条目
   */
  export const cmd_stash_drop: string;
  /**
   * - 🚩 **en**: List stash entries
   * - **zh**: 列出所有暂存条目
   */
  export const cmd_stash_list: string;
  /**
   * - 🚩 **en**: Apply and remove a stash entry
   * - **zh**: 应用并删除暂存条目
   */
  export const cmd_stash_pop: string;
  /**
   * - 🚩 **en**: Save changes to stash
   * - **zh**: 保存变更到暂存
   */
  export const cmd_stash_push: string;
  /**
   * - 🚩 **en**: Show stash diff
   * - **zh**: 显示暂存差异
   */
  export const cmd_stash_show: string;
  /**
   * - 🚩 **en**: Show the working tree status
   * - **zh**: 显示工作区状态
   */
  export const cmd_status: string;
  /**
   * - 🚩 **en**: Initialize, update or inspect submodules
   * - **zh**: 初始化、更新或检查子模块
   */
  export const cmd_submodule: string;
  /**
   * - 🚩 **en**: Add a submodule
   * - **zh**: 添加子模块
   */
  export const cmd_submodule_add: string;
  /**
   * - 🚩 **en**: Unregister submodules
   * - **zh**: 注销子模块
   */
  export const cmd_submodule_deinit: string;
  /**
   * - 🚩 **en**: Run a command in each submodule
   * - **zh**: 在每个子模块中运行命令
   */
  export const cmd_submodule_foreach: string;
  /**
   * - 🚩 **en**: Initialize submodules
   * - **zh**: 初始化子模块
   */
  export const cmd_submodule_init: string;
  /**
   * - 🚩 **en**: Set the default branch for a submodule
   * - **zh**: 设置子模块默认分支
   */
  export const cmd_submodule_set_branch: string;
  /**
   * - 🚩 **en**: Set the URL for a submodule
   * - **zh**: 设置子模块 URL
   */
  export const cmd_submodule_set_url: string;
  /**
   * - 🚩 **en**: Show submodule status
   * - **zh**: 显示子模块状态
   */
  export const cmd_submodule_status: string;
  /**
   * - 🚩 **en**: Show submodule summary
   * - **zh**: 显示子模块摘要
   */
  export const cmd_submodule_summary: string;
  /**
   * - 🚩 **en**: Sync submodule URLs
   * - **zh**: 同步子模块 URL
   */
  export const cmd_submodule_sync: string;
  /**
   * - 🚩 **en**: Update submodules
   * - **zh**: 更新子模块
   */
  export const cmd_submodule_update: string;
  /**
   * - 🚩 **en**: Switch branches
   * - **zh**: 切换分支
   */
  export const cmd_switch: string;
  /**
   * - 🚩 **en**: Create, list, delete or verify tags
   * - **zh**: 创建、列出、删除或验证标签
   */
  export const cmd_tag: string;
  /**
   * - 🚩 **en**: Manage multiple working trees
   * - **zh**: 管理多个工作区
   */
  export const cmd_worktree: string;
  /**
   * - 🚩 **en**: Create a new working tree
   * - **zh**: 创建新工作区
   */
  export const cmd_worktree_add: string;
  /**
   * - 🚩 **en**: List working trees
   * - **zh**: 列出工作区
   */
  export const cmd_worktree_list: string;
  /**
   * - 🚩 **en**: Lock a working tree
   * - **zh**: 锁定工作区
   */
  export const cmd_worktree_lock: string;
  /**
   * - 🚩 **en**: Move a working tree
   * - **zh**: 移动工作区
   */
  export const cmd_worktree_move: string;
  /**
   * - 🚩 **en**: Prune working tree information
   * - **zh**: 清理工作区信息
   */
  export const cmd_worktree_prune: string;
  /**
   * - 🚩 **en**: Remove a working tree
   * - **zh**: 删除工作区
   */
  export const cmd_worktree_remove: string;
  /**
   * - 🚩 **en**: Repair working tree administrative files
   * - **zh**: 修复工作区管理文件
   */
  export const cmd_worktree_repair: string;
  /**
   * - 🚩 **en**: Unlock a working tree
   * - **zh**: 解锁工作区
   */
  export const cmd_worktree_unlock: string;
  /**
   * - 🚩 **en**: Abort current operation
   * - **zh**: 中止当前操作
   */
  export const opt_abort: string;
  /**
   * - 🚩 **en**: Add URL
   * - **zh**: 添加 URL
   */
  export const opt_add_url: string;
  /**
   * - 🚩 **en**: All
   * - **zh**: 全部
   */
  export const opt_all: string;
  /**
   * - 🚩 **en**: Allow empty commit
   * - **zh**: 允许空提交
   */
  export const opt_allow_empty: string;
  /**
   * - 🚩 **en**: Allow fast-forward
   * - **zh**: 允许快进
   */
  export const opt_allow_ff: string;
  /**
   * - 🚩 **en**: Amend previous commit
   * - **zh**: 修改上一次提交
   */
  export const opt_amend: string;
  /**
   * - 🚩 **en**: Create annotated tag
   * - **zh**: 创建附注标签
   */
  export const opt_annotate: string;
  /**
   * - 🚩 **en**: Append commit name to message
   * - **zh**: 在提交信息中追加原始提交名
   */
  export const opt_append_commit: string;
  /**
   * - 🚩 **en**: Filter by author
   * - **zh**: 按作者过滤
   */
  export const opt_author: string;
  /**
   * - 🚩 **en**: Auto squash fixup commits
   * - **zh**: 自动压缩 fixup 提交
   */
  export const opt_autosquash: string;
  /**
   * - 🚩 **en**: Auto stash/unstash
   * - **zh**: 自动暂存/恢复
   */
  export const opt_autostash: string;
  /**
   * - 🚩 **en**: Create bare repository
   * - **zh**: 创建裸仓库
   */
  export const opt_bare: string;
  /**
   * - 🚩 **en**: Branch name
   * - **zh**: 分支名称
   */
  export const opt_branch: string;
  /**
   * - 🚩 **en**: Use cached/index
   * - **zh**: 使用缓存/暂存区
   */
  export const opt_cached: string;
  /**
   * - 🚩 **en**: Color output
   * - **zh**: 彩色输出
   */
  export const opt_color: string;
  /**
   * - 🚩 **en**: Commit all changed files
   * - **zh**: 提交所有已修改文件
   */
  export const opt_commit_all: string;
  /**
   * - 🚩 **en**: Set config key=value
   * - **zh**: 设置配置键值
   */
  export const opt_config_kv: string;
  /**
   * - 🚩 **en**: Continue current operation
   * - **zh**: 继续当前操作
   */
  export const opt_continue: string;
  /**
   * - 🚩 **en**: Copy branch
   * - **zh**: 复制分支
   */
  export const opt_copy: string;
  /**
   * - 🚩 **en**: Show match count
   * - **zh**: 显示匹配数量
   */
  export const opt_count: string;
  /**
   * - 🚩 **en**: Create and switch to new branch
   * - **zh**: 创建并切换到新分支
   */
  export const opt_create_branch: string;
  /**
   * - 🚩 **en**: Create new branch
   * - **zh**: 创建新分支
   */
  export const opt_create_new_branch: string;
  /**
   * - 🚩 **en**: Decorate refs
   * - **zh**: 显示引用装饰
   */
  export const opt_decorate: string;
  /**
   * - 🚩 **en**: Delete
   * - **zh**: 删除
   */
  export const opt_delete: string;
  /**
   * - 🚩 **en**: Delete URL
   * - **zh**: 删除 URL
   */
  export const opt_delete_url: string;
  /**
   * - 🚩 **en**: Shallow clone depth
   * - **zh**: 浅克隆深度
   */
  export const opt_depth: string;
  /**
   * - 🚩 **en**: Detach HEAD
   * - **zh**: 分离 HEAD
   */
  export const opt_detach: string;
  /**
   * - 🚩 **en**: Dry run
   * - **zh**: 预演，不实际执行
   */
  export const opt_dry_run: string;
  /**
   * - 🚩 **en**: Edit message
   * - **zh**: 编辑信息
   */
  export const opt_edit: string;
  /**
   * - 🚩 **en**: Run command after each commit
   * - **zh**: 每次提交后执行命令
   */
  export const opt_exec: string;
  /**
   * - 🚩 **en**: Fetch after adding
   * - **zh**: 添加后立即拉取
   */
  export const opt_fetch_after_add: string;
  /**
   * - 🚩 **en**: Fast-forward only
   * - **zh**: 仅允许快进合并
   */
  export const opt_ff_only: string;
  /**
   * - 🚩 **en**: Show only filenames
   * - **zh**: 仅显示文件名
   */
  export const opt_files_with_matches: string;
  /**
   * - 🚩 **en**: Object filter
   * - **zh**: 对象过滤器
   */
  export const opt_filter: string;
  /**
   * - 🚩 **en**: Use fixed string matching
   * - **zh**: 使用固定字符串匹配
   */
  export const opt_fixed_value: string;
  /**
   * - 🚩 **en**: Fixup commit
   * - **zh**: 修正提交
   */
  export const opt_fixup: string;
  /**
   * - 🚩 **en**: Follow file renames
   * - **zh**: 跟踪文件重命名
   */
  export const opt_follow: string;
  /**
   * - 🚩 **en**: Force
   * - **zh**: 强制执行
   */
  export const opt_force: string;
  /**
   * - 🚩 **en**: Force create and switch
   * - **zh**: 强制创建并切换
   */
  export const opt_force_create_branch: string;
  /**
   * - 🚩 **en**: Force create/reset branch
   * - **zh**: 强制创建/重置分支
   */
  export const opt_force_create_reset_branch: string;
  /**
   * - 🚩 **en**: Force delete branch
   * - **zh**: 强制删除分支
   */
  export const opt_force_delete: string;
  /**
   * - 🚩 **en**: Force only if remote updates are integrated
   * - **zh**: 仅在包含远程更新时强制推送
   */
  export const opt_force_if_includes: string;
  /**
   * - 🚩 **en**: Force rename branch
   * - **zh**: 强制重命名分支
   */
  export const opt_force_move: string;
  /**
   * - 🚩 **en**: Force push with lease check
   * - **zh**: 带租约检查的强制推送
   */
  export const opt_force_with_lease: string;
  /**
   * - 🚩 **en**: Get all values
   * - **zh**: 获取所有值
   */
  export const opt_get_all: string;
  /**
   * - 🚩 **en**: Get values matching regexp
   * - **zh**: 获取匹配正则的值
   */
  export const opt_get_regexp: string;
  /**
   * - 🚩 **en**: Set git dir
   * - **zh**: 设置 git 目录
   */
  export const opt_git_dir: string;
  /**
   * - 🚩 **en**: Use global config
   * - **zh**: 使用全局配置
   */
  export const opt_global: string;
  /**
   * - 🚩 **en**: Show commit graph
   * - **zh**: 显示提交图
   */
  export const opt_graph: string;
  /**
   * - 🚩 **en**: Filter by commit message
   * - **zh**: 按提交信息过滤
   */
  export const opt_grep_log: string;
  /**
   * - 🚩 **en**: Reset HEAD, index and working tree
   * - **zh**: 重置 HEAD、暂存区和工作区
   */
  export const opt_hard: string;
  /**
   * - 🚩 **en**: Ignore whitespace
   * - **zh**: 忽略空白
   */
  export const opt_ignore_all_space: string;
  /**
   * - 🚩 **en**: Case insensitive
   * - **zh**: 忽略大小写
   */
  export const opt_ignore_case: string;
  /**
   * - 🚩 **en**: Show ignored files
   * - **zh**: 显示被忽略的文件
   */
  export const opt_ignored: string;
  /**
   * - 🚩 **en**: Include untracked files
   * - **zh**: 包含未跟踪文件
   */
  export const opt_include_untracked: string;
  /**
   * - 🚩 **en**: Restore index too
   * - **zh**: 同时恢复暂存区
   */
  export const opt_index: string;
  /**
   * - 🚩 **en**: Initialize submodules
   * - **zh**: 初始化子模块
   */
  export const opt_init: string;
  /**
   * - 🚩 **en**: Initial branch name
   * - **zh**: 初始分支名称
   */
  export const opt_initial_branch: string;
  /**
   * - 🚩 **en**: Record intent to add
   * - **zh**: 记录将要添加的路径
   */
  export const opt_intent_to_add: string;
  /**
   * - 🚩 **en**: Interactive mode
   * - **zh**: 交互模式
   */
  export const opt_interactive: string;
  /**
   * - 🚩 **en**: Interactive rebase
   * - **zh**: 交互式 rebase
   */
  export const opt_interactive_rebase: string;
  /**
   * - 🚩 **en**: Number of parallel jobs
   * - **zh**: 并行任务数
   */
  export const opt_jobs: string;
  /**
   * - 🚩 **en**: Reset HEAD but keep local changes
   * - **zh**: 重置 HEAD 但保留本地变更
   */
  export const opt_keep: string;
  /**
   * - 🚩 **en**: Keep index
   * - **zh**: 保留暂存区
   */
  export const opt_keep_index: string;
  /**
   * - 🚩 **en**: Limit number of commits
   * - **zh**: 限制提交数量
   */
  export const opt_limit: string;
  /**
   * - 🚩 **en**: Show line numbers
   * - **zh**: 显示行号
   */
  export const opt_line_number: string;
  /**
   * - 🚩 **en**: List all
   * - **zh**: 列出全部
   */
  export const opt_list: string;
  /**
   * - 🚩 **en**: Use local config
   * - **zh**: 使用本地配置
   */
  export const opt_local: string;
  /**
   * - 🚩 **en**: Lock reason
   * - **zh**: 锁定
   */
  export const opt_lock: string;
  /**
   * - 🚩 **en**: Select mainline parent
   * - **zh**: 选择主线父提交
   */
  export const opt_mainline: string;
  /**
   * - 🚩 **en**: 3-way merge with new branch
   * - **zh**: 与新分支进行三路合并
   */
  export const opt_merge_3way: string;
  /**
   * - 🚩 **en**: Use merge strategy
   * - **zh**: 使用合并策略
   */
  export const opt_merge_strategy: string;
  /**
   * - 🚩 **en**: List merged branches
   * - **zh**: 列出已合并分支
   */
  export const opt_merged: string;
  /**
   * - 🚩 **en**: Commit message
   * - **zh**: 提交信息
   */
  export const opt_message: string;
  /**
   * - 🚩 **en**: Mirror repository
   * - **zh**: 镜像仓库
   */
  export const opt_mirror: string;
  /**
   * - 🚩 **en**: Reset HEAD and index
   * - **zh**: 重置 HEAD 和暂存区
   */
  export const opt_mixed: string;
  /**
   * - 🚩 **en**: Rename branch
   * - **zh**: 重命名分支
   */
  export const opt_move: string;
  /**
   * - 🚩 **en**: Show only file names
   * - **zh**: 仅显示文件名
   */
  export const opt_name_only: string;
  /**
   * - 🚩 **en**: Show file names and status
   * - **zh**: 显示文件名和状态
   */
  export const opt_name_status: string;
  /**
   * - 🚩 **en**: No checkout after clone
   * - **zh**: 克隆后不检出
   */
  export const opt_no_checkout: string;
  /**
   * - 🚩 **en**: Do not commit
   * - **zh**: 不自动提交
   */
  export const opt_no_commit: string;
  /**
   * - 🚩 **en**: No fast-forward
   * - **zh**: 禁止快进合并
   */
  export const opt_no_ff: string;
  /**
   * - 🚩 **en**: List unmerged branches
   * - **zh**: 列出未合并分支
   */
  export const opt_no_merged: string;
  /**
   * - 🚩 **en**: Do not pipe to pager
   * - **zh**: 不使用分页器
   */
  export const opt_no_pager: string;
  /**
   * - 🚩 **en**: Do not use replace refs
   * - **zh**: 不使用替换引用
   */
  export const opt_no_replace_objects: string;
  /**
   * - 🚩 **en**: Bypass pre-commit and commit-msg hooks
   * - **zh**: 跳过 pre-commit 和 commit-msg 钩子
   */
  export const opt_no_verify: string;
  /**
   * - 🚩 **en**: One line per commit
   * - **zh**: 每个提交一行
   */
  export const opt_oneline: string;
  /**
   * - 🚩 **en**: Rebase onto
   * - **zh**: 变基到指定提交
   */
  export const opt_onto: string;
  /**
   * - 🚩 **en**: Remote name
   * - **zh**: 远程名称
   */
  export const opt_origin: string;
  /**
   * - 🚩 **en**: Create orphan branch
   * - **zh**: 创建孤立分支
   */
  export const opt_orphan: string;
  /**
   * - 🚩 **en**: Pipe output to pager
   * - **zh**: 通过分页器输出
   */
  export const opt_paginate: string;
  /**
   * - 🚩 **en**: Interactively select hunks
   * - **zh**: 交互式选择代码块
   */
  export const opt_patch: string;
  /**
   * - 🚩 **en**: Pattern
   * - **zh**: 匹配模式
   */
  export const opt_pattern: string;
  /**
   * - 🚩 **en**: Machine-readable output
   * - **zh**: 机器可读输出
   */
  export const opt_porcelain: string;
  /**
   * - 🚩 **en**: Prune stale remote-tracking branches
   * - **zh**: 清理过期的远程跟踪分支
   */
  export const opt_prune: string;
  /**
   * - 🚩 **en**: Prune local tags no longer on remote
   * - **zh**: 清理远程已删除的本地标签
   */
  export const opt_prune_tags: string;
  /**
   * - 🚩 **en**: Push URL
   * - **zh**: 推送 URL
   */
  export const opt_push: string;
  /**
   * - 🚩 **en**: Be more quiet
   * - **zh**: 静默模式
   */
  export const opt_quiet: string;
  /**
   * - 🚩 **en**: Read message from file
   * - **zh**: 从文件读取提交信息
   */
  export const opt_read_file: string;
  /**
   * - 🚩 **en**: Lock reason message
   * - **zh**: 锁定原因
   */
  export const opt_reason: string;
  /**
   * - 🚩 **en**: Rebase instead of merge
   * - **zh**: 使用 rebase 代替 merge
   */
  export const opt_rebase: string;
  /**
   * - 🚩 **en**: Recurse into submodules
   * - **zh**: 递归处理子模块
   */
  export const opt_recurse_submodules: string;
  /**
   * - 🚩 **en**: Recursive
   * - **zh**: 递归
   */
  export const opt_recursive: string;
  /**
   * - 🚩 **en**: Allow recursive removal
   * - **zh**: 允许递归删除
   */
  export const opt_recursive_remove: string;
  /**
   * - 🚩 **en**: Use remote tracking branch
   * - **zh**: 使用远程跟踪分支
   */
  export const opt_remote: string;
  /**
   * - 🚩 **en**: List remote branches
   * - **zh**: 列出远程分支
   */
  export const opt_remotes: string;
  /**
   * - 🚩 **en**: Replace all matching values
   * - **zh**: 替换所有匹配值
   */
  export const opt_replace_all: string;
  /**
   * - 🚩 **en**: Reuse message from commit
   * - **zh**: 复用指定提交的信息
   */
  export const opt_reuse_message: string;
  /**
   * - 🚩 **en**: Run as if started in <path>
   * - **zh**: 在指定路径下运行
   */
  export const opt_run_in_path: string;
  /**
   * - 🚩 **en**: Separate git dir
   * - **zh**: 分离 git 目录
   */
  export const opt_separate_git_dir: string;
  /**
   * - 🚩 **en**: Set upstream for push/pull
   * - **zh**: 设置推送/拉取的上游
   */
  export const opt_set_upstream: string;
  /**
   * - 🚩 **en**: Short format
   * - **zh**: 简短格式
   */
  export const opt_short: string;
  /**
   * - 🚩 **en**: Show current branch
   * - **zh**: 显示当前分支
   */
  export const opt_show_current: string;
  /**
   * - 🚩 **en**: Show config origin
   * - **zh**: 显示配置来源
   */
  export const opt_show_origin: string;
  /**
   * - 🚩 **en**: Show config scope
   * - **zh**: 显示配置作用域
   */
  export const opt_show_scope: string;
  /**
   * - 🚩 **en**: Show stash info
   * - **zh**: 显示暂存信息
   */
  export const opt_show_stash: string;
  /**
   * - 🚩 **en**: GPG sign
   * - **zh**: GPG 签名
   */
  export const opt_sign: string;
  /**
   * - 🚩 **en**: Add Signed-off-by trailer
   * - **zh**: 添加 Signed-off-by 行
   */
  export const opt_signoff: string;
  /**
   * - 🚩 **en**: Show commits since date
   * - **zh**: 显示指定日期之后的提交
   */
  export const opt_since: string;
  /**
   * - 🚩 **en**: Clone single branch
   * - **zh**: 仅克隆单个分支
   */
  export const opt_single_branch: string;
  /**
   * - 🚩 **en**: Skip current commit
   * - **zh**: 跳过当前提交
   */
  export const opt_skip: string;
  /**
   * - 🚩 **en**: Reset only HEAD
   * - **zh**: 仅重置 HEAD
   */
  export const opt_soft: string;
  /**
   * - 🚩 **en**: Restore from tree-ish
   * - **zh**: 从指定树恢复
   */
  export const opt_source: string;
  /**
   * - 🚩 **en**: Sparse checkout
   * - **zh**: 稀疏检出
   */
  export const opt_sparse: string;
  /**
   * - 🚩 **en**: Squash commits
   * - **zh**: 压缩提交
   */
  export const opt_squash: string;
  /**
   * - 🚩 **en**: Staged changes only
   * - **zh**: 仅处理已暂存的变更
   */
  export const opt_staged: string;
  /**
   * - 🚩 **en**: Show diffstat
   * - **zh**: 显示差异统计
   */
  export const opt_stat: string;
  /**
   * - 🚩 **en**: Merge strategy
   * - **zh**: 合并策略
   */
  export const opt_strategy: string;
  /**
   * - 🚩 **en**: Submodule name
   * - **zh**: 子模块名称
   */
  export const opt_submodule_name: string;
  /**
   * - 🚩 **en**: Use system config
   * - **zh**: 使用系统配置
   */
  export const opt_system: string;
  /**
   * - 🚩 **en**: Include tags
   * - **zh**: 包含标签
   */
  export const opt_tags: string;
  /**
   * - 🚩 **en**: Set branch tracking
   * - **zh**: 设置分支跟踪
   */
  export const opt_track: string;
  /**
   * - 🚩 **en**: Config value type
   * - **zh**: 配置值类型
   */
  export const opt_type: string;
  /**
   * - 🚩 **en**: Context lines
   * - **zh**: 上下文行数
   */
  export const opt_unified: string;
  /**
   * - 🚩 **en**: Unset value
   * - **zh**: 删除值
   */
  export const opt_unset: string;
  /**
   * - 🚩 **en**: Unset all values
   * - **zh**: 删除所有匹配值
   */
  export const opt_unset_all: string;
  /**
   * - 🚩 **en**: Unset upstream
   * - **zh**: 取消上游设置
   */
  export const opt_unset_upstream: string;
  /**
   * - 🚩 **en**: Show commits until date
   * - **zh**: 显示指定日期之前的提交
   */
  export const opt_until: string;
  /**
   * - 🚩 **en**: Show untracked files
   * - **zh**: 显示未跟踪文件
   */
  export const opt_untracked_files: string;
  /**
   * - 🚩 **en**: Update tracked files
   * - **zh**: 更新已跟踪文件
   */
  export const opt_update: string;
  /**
   * - 🚩 **en**: Update branches pointing to rebased commits
   * - **zh**: 更新指向变基提交的分支
   */
  export const opt_update_refs: string;
  /**
   * - 🚩 **en**: Use default branch
   * - **zh**: 使用默认分支
   */
  export const opt_use_default_branch: string;
  /**
   * - 🚩 **en**: Be more verbose
   * - **zh**: 显示详细信息
   */
  export const opt_verbose: string;
  /**
   * - 🚩 **en**: Verify tag signature
   * - **zh**: 验证标签签名
   */
  export const opt_verify_tag: string;
  /**
   * - 🚩 **en**: Print version
   * - **zh**: 显示版本
   */
  export const opt_version: string;
  /**
   * - 🚩 **en**: Match whole words
   * - **zh**: 匹配完整单词
   */
  export const opt_word_regexp: string;
  /**
   * - 🚩 **en**: Set working tree
   * - **zh**: 设置工作区
   */
  export const opt_work_tree: string;
  /**
   * - 🚩 **en**: Worktree path
   * - **zh**: 工作区路径
   */
  export const opt_worktree: string;
  /**
   * - 🚩 **en**: Restore working tree (default)
   * - **zh**: 恢复工作区（默认）
   */
  export const opt_worktree_restore: string;
}

declare module "virtual:i18n/npm" {
  /**
   * - 🚩 **en**: public
   * - **zh**: 公开
   */
  export const arg_access_public: string;
  /**
   * - 🚩 **en**: restricted
   * - **zh**: 受限
   */
  export const arg_access_restricted: string;
  /**
   * - 🚩 **en**: critical
   * - **zh**: 严重
   */
  export const arg_auditLevel_critical: string;
  /**
   * - 🚩 **en**: high
   * - **zh**: 高
   */
  export const arg_auditLevel_high: string;
  /**
   * - 🚩 **en**: info
   * - **zh**: 信息
   */
  export const arg_auditLevel_info: string;
  /**
   * - 🚩 **en**: low
   * - **zh**: 低
   */
  export const arg_auditLevel_low: string;
  /**
   * - 🚩 **en**: moderate
   * - **zh**: 中
   */
  export const arg_auditLevel_moderate: string;
  /**
   * - 🚩 **en**: none
   * - **zh**: 无
   */
  export const arg_auditLevel_none: string;
  /**
   * - 🚩 **en**: legacy
   * - **zh**: 传统
   */
  export const arg_authType_legacy: string;
  /**
   * - 🚩 **en**: web
   * - **zh**: 网页
   */
  export const arg_authType_web: string;
  /**
   * - 🚩 **en**: hoisted
   * - **zh**: 提升
   */
  export const arg_install_hoisted: string;
  /**
   * - 🚩 **en**: linked
   * - **zh**: 链接
   */
  export const arg_install_linked: string;
  /**
   * - 🚩 **en**: nested
   * - **zh**: 嵌套
   */
  export const arg_install_nested: string;
  /**
   * - 🚩 **en**: shallow
   * - **zh**: 浅
   */
  export const arg_install_shallow: string;
  /**
   * - 🚩 **en**: global
   * - **zh**: 全局
   */
  export const arg_location_global: string;
  /**
   * - 🚩 **en**: project
   * - **zh**: 项目
   */
  export const arg_location_project: string;
  /**
   * - 🚩 **en**: user
   * - **zh**: 用户
   */
  export const arg_location_user: string;
  /**
   * - 🚩 **en**: cyclonedx
   * - **zh**: CycloneDX
   */
  export const arg_sbomFormat_cyclonedx: string;
  /**
   * - 🚩 **en**: spdx
   * - **zh**: SPDX
   */
  export const arg_sbomFormat_spdx: string;
  /**
   * - 🚩 **en**: application
   * - **zh**: 应用
   */
  export const arg_sbomType_application: string;
  /**
   * - 🚩 **en**: framework
   * - **zh**: 框架
   */
  export const arg_sbomType_framework: string;
  /**
   * - 🚩 **en**: library
   * - **zh**: 库
   */
  export const arg_sbomType_library: string;
  /**
   * - 🚩 **en**: Set access level on published packages
   * - **zh**: 设置已发布包的访问级别
   */
  export const cmd_access: string;
  /**
   * - 🚩 **en**: Get access status
   * - **zh**: 获取访问状态
   */
  export const cmd_access_get: string;
  /**
   * - 🚩 **en**: Grant access
   * - **zh**: 授予访问权限
   */
  export const cmd_access_grant: string;
  /**
   * - 🚩 **en**: List access
   * - **zh**: 列出访问信息
   */
  export const cmd_access_list: string;
  /**
   * - 🚩 **en**: Revoke access
   * - **zh**: 撤销访问权限
   */
  export const cmd_access_revoke: string;
  /**
   * - 🚩 **en**: Set access
   * - **zh**: 设置访问
   */
  export const cmd_access_set: string;
  /**
   * - 🚩 **en**: Add a registry user account
   * - **zh**: 添加注册表用户帐户
   */
  export const cmd_adduser: string;
  /**
   * - 🚩 **en**: Run a security audit
   * - **zh**: 运行安全审计
   */
  export const cmd_audit: string;
  /**
   * - 🚩 **en**: Report bugs for a package in a web browser
   * - **zh**: 在浏览器中报告包的 Bug
   */
  export const cmd_bugs: string;
  /**
   * - 🚩 **en**: Manipulates packages and npx cache
   * - **zh**: 操作包和 npx 缓存
   */
  export const cmd_cache: string;
  /**
   * - 🚩 **en**: Add a package spec
   * - **zh**: 添加包规范
   */
  export const cmd_cache_add: string;
  /**
   * - 🚩 **en**: Clean cache
   * - **zh**: 清除缓存
   */
  export const cmd_cache_clean: string;
  /**
   * - 🚩 **en**: List cache
   * - **zh**: 列出缓存
   */
  export const cmd_cache_ls: string;
  /**
   * - 🚩 **en**: npx cache subcommands
   * - **zh**: npx 缓存子命令
   */
  export const cmd_cache_npx: string;
  /**
   * - 🚩 **en**: Info npx cache
   * - **zh**: 查看 npx 缓存信息
   */
  export const cmd_cache_npx_info: string;
  /**
   * - 🚩 **en**: List npx cache
   * - **zh**: 列出 npx 缓存
   */
  export const cmd_cache_npx_ls: string;
  /**
   * - 🚩 **en**: Remove npx cache
   * - **zh**: 删除 npx 缓存
   */
  export const cmd_cache_npx_rm: string;
  /**
   * - 🚩 **en**: Verify cache integrity
   * - **zh**: 验证缓存完整性
   */
  export const cmd_cache_verify: string;
  /**
   * - 🚩 **en**: Clean install a project
   * - **zh**: 纯净安装项目
   */
  export const cmd_ci: string;
  /**
   * - 🚩 **en**: Tab Completion for npm
   * - **zh**: npm 制表符补全
   */
  export const cmd_completion: string;
  /**
   * - 🚩 **en**: Manage the npm configuration files
   * - **zh**: 管理 npm 配置文件
   */
  export const cmd_config: string;
  /**
   * - 🚩 **en**: Delete config values
   * - **zh**: 删除配置值
   */
  export const cmd_config_delete: string;
  /**
   * - 🚩 **en**: Edit config
   * - **zh**: 编辑配置
   */
  export const cmd_config_edit: string;
  /**
   * - 🚩 **en**: Fix config
   * - **zh**: 修复配置
   */
  export const cmd_config_fix: string;
  /**
   * - 🚩 **en**: Get config values
   * - **zh**: 获取配置值
   */
  export const cmd_config_get: string;
  /**
   * - 🚩 **en**: List config
   * - **zh**: 列出配置
   */
  export const cmd_config_list: string;
  /**
   * - 🚩 **en**: Set config values
   * - **zh**: 设置配置值
   */
  export const cmd_config_set: string;
  /**
   * - 🚩 **en**: Reduce duplication in the package tree
   * - **zh**: 减少包树中的重复
   */
  export const cmd_dedupe: string;
  /**
   * - 🚩 **en**: Deprecate a version of a package
   * - **zh**: 将包的某个版本标记为弃用
   */
  export const cmd_deprecate: string;
  /**
   * - 🚩 **en**: The registry diff command
   * - **zh**: 注册表差异比较命令
   */
  export const cmd_diff: string;
  /**
   * - 🚩 **en**: Modify package distribution tags
   * - **zh**: 修改包的分发标签
   */
  export const cmd_distTag: string;
  /**
   * - 🚩 **en**: Add tag
   * - **zh**: 添加标签
   */
  export const cmd_distTag_add: string;
  /**
   * - 🚩 **en**: List tags
   * - **zh**: 列出标签
   */
  export const cmd_distTag_ls: string;
  /**
   * - 🚩 **en**: Remove tag
   * - **zh**: 删除标签
   */
  export const cmd_distTag_rm: string;
  /**
   * - 🚩 **en**: Open documentation for a package in a web browser
   * - **zh**: 在浏览器中打开包的文档
   */
  export const cmd_docs: string;
  /**
   * - 🚩 **en**: Check the health of your npm environment
   * - **zh**: 检查 npm 环境的健康状况
   */
  export const cmd_doctor: string;
  /**
   * - 🚩 **en**: Edit an installed package
   * - **zh**: 编辑已安装的包
   */
  export const cmd_edit: string;
  /**
   * - 🚩 **en**: Run a command from a local or remote npm package
   * - **zh**: 从本地或远程 npm 包运行命令
   */
  export const cmd_exec: string;
  /**
   * - 🚩 **en**: Explain installed packages
   * - **zh**: 解释已安装的包
   */
  export const cmd_explain: string;
  /**
   * - 🚩 **en**: Browse an installed package
   * - **zh**: 浏览已安装的包
   */
  export const cmd_explore: string;
  /**
   * - 🚩 **en**: Find duplication in the package tree
   * - **zh**: 查找包树中的重复
   */
  export const cmd_findDupes: string;
  /**
   * - 🚩 **en**: Retrieve funding information
   * - **zh**: 检索资金信息
   */
  export const cmd_fund: string;
  /**
   * - 🚩 **en**: Get a value from the npm configuration
   * - **zh**: 从 npm 配置中获取值
   */
  export const cmd_get: string;
  /**
   * - 🚩 **en**: Get help on npm
   * - **zh**: 获取 npm 帮助
   */
  export const cmd_help: string;
  /**
   * - 🚩 **en**: Search npm help documentation
   * - **zh**: 搜索 npm 帮助文档
   */
  export const cmd_helpSearch: string;
  /**
   * - 🚩 **en**: Create a package.json file
   * - **zh**: 创建 package_json 文件
   */
  export const cmd_init: string;
  /**
   * - 🚩 **en**: Install a package
   * - **zh**: 安装包
   */
  export const cmd_install: string;
  /**
   * - 🚩 **en**: Install a project with a clean slate and run tests
   * - **zh**: 纯净安装项目并运行测试
   */
  export const cmd_installCiTest: string;
  /**
   * - 🚩 **en**: Install package(s) and run tests
   * - **zh**: 安装包并运行测试
   */
  export const cmd_installTest: string;
  /**
   * - 🚩 **en**: Symlink a package folder
   * - **zh**: 符号链接包文件夹
   */
  export const cmd_link: string;
  /**
   * - 🚩 **en**: List installed packages
   * - **zh**: 列出已安装的包
   */
  export const cmd_ll: string;
  /**
   * - 🚩 **en**: Login to a registry user account
   * - **zh**: 登录注册表用户帐户
   */
  export const cmd_login: string;
  /**
   * - 🚩 **en**: Log out of the registry
   * - **zh**: 退出登录
   */
  export const cmd_logout: string;
  /**
   * - 🚩 **en**: List installed packages
   * - **zh**: 列出已安装的包
   */
  export const cmd_ls: string;
  /**
   * - 🚩 **en**: Node package manager
   * - **zh**: Node 包管理器
   */
  export const cmd_npm: string;
  /**
   * - 🚩 **en**: Run a command from a local or remote npm package
   * - **zh**: 从本地或远程 npm 包运行命令
   */
  export const cmd_npx: string;
  /**
   * - 🚩 **en**: Manage orgs
   * - **zh**: 管理组织
   */
  export const cmd_org: string;
  /**
   * - 🚩 **en**: List members
   * - **zh**: 列出成员
   */
  export const cmd_org_ls: string;
  /**
   * - 🚩 **en**: Remove member
   * - **zh**: 删除成员
   */
  export const cmd_org_rm: string;
  /**
   * - 🚩 **en**: Set org membership
   * - **zh**: 设置组织成员
   */
  export const cmd_org_set: string;
  /**
   * - 🚩 **en**: Check for outdated packages
   * - **zh**: 检查过时的包
   */
  export const cmd_outdated: string;
  /**
   * - 🚩 **en**: Manage package owners
   * - **zh**: 管理包的所有者
   */
  export const cmd_owner: string;
  /**
   * - 🚩 **en**: Add owner
   * - **zh**: 添加所有者
   */
  export const cmd_owner_add: string;
  /**
   * - 🚩 **en**: List owners
   * - **zh**: 列出所有者
   */
  export const cmd_owner_ls: string;
  /**
   * - 🚩 **en**: Remove owner
   * - **zh**: 删除所有者
   */
  export const cmd_owner_rm: string;
  /**
   * - 🚩 **en**: Create a tarball from a package
   * - **zh**: 从包创建 tar 包
   */
  export const cmd_pack: string;
  /**
   * - 🚩 **en**: Ping npm registry
   * - **zh**: Ping npm 注册表
   */
  export const cmd_ping: string;
  /**
   * - 🚩 **en**: Manages your package.json
   * - **zh**: 管理你的 package_json
   */
  export const cmd_pkg: string;
  /**
   * - 🚩 **en**: Delete keys
   * - **zh**: 删除键
   */
  export const cmd_pkg_delete: string;
  /**
   * - 🚩 **en**: Fix package.json
   * - **zh**: 修复 package_json
   */
  export const cmd_pkg_fix: string;
  /**
   * - 🚩 **en**: Get package.json keys
   * - **zh**: 获取 package_json 键
   */
  export const cmd_pkg_get: string;
  /**
   * - 🚩 **en**: Set package.json values
   * - **zh**: 设置 package_json 值
   */
  export const cmd_pkg_set: string;
  /**
   * - 🚩 **en**: Display prefix
   * - **zh**: 显示前缀
   */
  export const cmd_prefix: string;
  /**
   * - 🚩 **en**: Change settings on your registry profile
   * - **zh**: 更改注册表个人资料设置
   */
  export const cmd_profile: string;
  /**
   * - 🚩 **en**: Disable 2FA
   * - **zh**: 禁用双重身份验证
   */
  export const cmd_profile_disable2fa: string;
  /**
   * - 🚩 **en**: Enable 2FA
   * - **zh**: 启用双重身份验证
   */
  export const cmd_profile_enable2fa: string;
  /**
   * - 🚩 **en**: Get profile key
   * - **zh**: 获取个人资料键
   */
  export const cmd_profile_get: string;
  /**
   * - 🚩 **en**: Set profile key
   * - **zh**: 设置个人资料键
   */
  export const cmd_profile_set: string;
  /**
   * - 🚩 **en**: Remove extraneous packages
   * - **zh**: 删除多余的包
   */
  export const cmd_prune: string;
  /**
   * - 🚩 **en**: Publish a package
   * - **zh**: 发布包
   */
  export const cmd_publish: string;
  /**
   * - 🚩 **en**: Retrieve a filtered list of packages
   * - **zh**: 检索过滤后的包列表
   */
  export const cmd_query: string;
  /**
   * - 🚩 **en**: Rebuild a package
   * - **zh**: 重新编译包
   */
  export const cmd_rebuild: string;
  /**
   * - 🚩 **en**: Open package repository page in the browser
   * - **zh**: 在浏览器中打开包的仓库页面
   */
  export const cmd_repo: string;
  /**
   * - 🚩 **en**: Restart a package
   * - **zh**: 重启包
   */
  export const cmd_restart: string;
  /**
   * - 🚩 **en**: Display npm root
   * - **zh**: 显示 npm root
   */
  export const cmd_root: string;
  /**
   * - 🚩 **en**: Run arbitrary package scripts
   * - **zh**: 运行任意包脚本
   */
  export const cmd_run: string;
  /**
   * - 🚩 **en**: Generate a Software Bill of Materials (SBOM)
   * - **zh**: 生成软件物料清单 (SBOM)
   */
  export const cmd_sbom: string;
  /**
   * - 🚩 **en**: Search for packages
   * - **zh**: 搜索包
   */
  export const cmd_search: string;
  /**
   * - 🚩 **en**: Set a value in the npm configuration
   * - **zh**: 设置 npm 配置中的值
   */
  export const cmd_set: string;
  /**
   * - 🚩 **en**: Lock down dependency versions for publication
   * - **zh**: 锁定依赖版本以进行发布
   */
  export const cmd_shrinkwrap: string;
  /**
   * - 🚩 **en**: Mark your favorite packages
   * - **zh**: 标记你喜欢的包
   */
  export const cmd_star: string;
  /**
   * - 🚩 **en**: View packages marked as favorites
   * - **zh**: 查看标记为收藏的包
   */
  export const cmd_stars: string;
  /**
   * - 🚩 **en**: Start a package
   * - **zh**: 启动包
   */
  export const cmd_start: string;
  /**
   * - 🚩 **en**: Stop a package
   * - **zh**: 停止包
   */
  export const cmd_stop: string;
  /**
   * - 🚩 **en**: Manage organization teams and team memberships
   * - **zh**: 管理组织团队和团队成员
   */
  export const cmd_team: string;
  /**
   * - 🚩 **en**: Add member
   * - **zh**: 添加成员
   */
  export const cmd_team_add: string;
  /**
   * - 🚩 **en**: Create team
   * - **zh**: 创建团队
   */
  export const cmd_team_create: string;
  /**
   * - 🚩 **en**: Destroy team
   * - **zh**: 解散团队
   */
  export const cmd_team_destroy: string;
  /**
   * - 🚩 **en**: List teams
   * - **zh**: 列出团队
   */
  export const cmd_team_ls: string;
  /**
   * - 🚩 **en**: Remove member
   * - **zh**: 删除成员
   */
  export const cmd_team_rm: string;
  /**
   * - 🚩 **en**: Test a package
   * - **zh**: 测试包
   */
  export const cmd_test: string;
  /**
   * - 🚩 **en**: Manage your authentication tokens
   * - **zh**: 管理你的身份验证令牌
   */
  export const cmd_token: string;
  /**
   * - 🚩 **en**: Create token
   * - **zh**: 创建令牌
   */
  export const cmd_token_create: string;
  /**
   * - 🚩 **en**: List tokens
   * - **zh**: 列出令牌
   */
  export const cmd_token_list: string;
  /**
   * - 🚩 **en**: Revoke token
   * - **zh**: 撤销令牌
   */
  export const cmd_token_revoke: string;
  /**
   * - 🚩 **en**: Undeprecate a version of a package
   * - **zh**: 取消弃用包的某个版本
   */
  export const cmd_undeprecate: string;
  /**
   * - 🚩 **en**: Remove a package
   * - **zh**: 删除包
   */
  export const cmd_uninstall: string;
  /**
   * - 🚩 **en**: Remove a package from the registry
   * - **zh**: 从注册表中删除包
   */
  export const cmd_unpublish: string;
  /**
   * - 🚩 **en**: Remove an item from your favorite packages
   * - **zh**: 取消收藏
   */
  export const cmd_unstar: string;
  /**
   * - 🚩 **en**: Update packages
   * - **zh**: 更新包
   */
  export const cmd_update: string;
  /**
   * - 🚩 **en**: Bump a package version
   * - **zh**: 提升包版本号
   */
  export const cmd_version: string;
  /**
   * - 🚩 **en**: View registry info
   * - **zh**: 查看注册表信息
   */
  export const cmd_view: string;
  /**
   * - 🚩 **en**: Display npm username
   * - **zh**: 显示 npm 用户名
   */
  export const cmd_whoami: string;
  /**
   * - 🚩 **en**: Access level (restricted, public)
   * - **zh**: 访问级别 (restricted, public)
   */
  export const opt_access: string;
  /**
   * - 🚩 **en**: Show all
   * - **zh**: 显示全部
   */
  export const opt_all: string;
  /**
   * - 🚩 **en**: Allow same version
   * - **zh**: 允许相同版本
   */
  export const opt_allowSameVersion: string;
  /**
   * - 🚩 **en**: Audit level
   * - **zh**: 审计级别
   */
  export const opt_auditLevel: string;
  /**
   * - 🚩 **en**: Authentication type (legacy, web)
   * - **zh**: 认证类型 (legacy, web)
   */
  export const opt_authType: string;
  /**
   * - 🚩 **en**: Install only versions before date
   * - **zh**: 仅安装该日期之前的版本
   */
  export const opt_before: string;
  /**
   * - 🚩 **en**: Browser to open
   * - **zh**: 打开的浏览器
   */
  export const opt_browser: string;
  /**
   * - 🚩 **en**: Cache path
   * - **zh**: 缓存路径
   */
  export const opt_cachePath: string;
  /**
   * - 🚩 **en**: Run command as string
   * - **zh**: 以字符串形式运行命令
   */
  export const opt_call: string;
  /**
   * - 🚩 **en**: CIDR list
   * - **zh**: CIDR 列表
   */
  export const opt_cidr: string;
  /**
   * - 🚩 **en**: Color output
   * - **zh**: 彩色输出
   */
  export const opt_color: string;
  /**
   * - 🚩 **en**: CPU filter
   * - **zh**: CPU 过滤器
   */
  export const opt_cpu: string;
  /**
   * - 🚩 **en**: Depth
   * - **zh**: 深度
   */
  export const opt_depth: string;
  /**
   * - 🚩 **en**: Diff against package spec
   * - **zh**: 与指定包规范对比
   */
  export const opt_diff: string;
  /**
   * - 🚩 **en**: Destination prefix
   * - **zh**: 目标前缀
   */
  export const opt_diffDstPrefix: string;
  /**
   * - 🚩 **en**: Ignore whitespace
   * - **zh**: 忽略空白
   */
  export const opt_diffIgnoreAllSpace: string;
  /**
   * - 🚩 **en**: Only show filenames
   * - **zh**: 仅显示文件名
   */
  export const opt_diffNameOnly: string;
  /**
   * - 🚩 **en**: No prefix
   * - **zh**: 无前缀
   */
  export const opt_diffNoPrefix: string;
  /**
   * - 🚩 **en**: Source prefix
   * - **zh**: 源前缀
   */
  export const opt_diffSrcPrefix: string;
  /**
   * - 🚩 **en**: Text diff
   * - **zh**: 文本差异
   */
  export const opt_diffText: string;
  /**
   * - 🚩 **en**: Unified diff lines
   * - **zh**: 统一差异行数
   */
  export const opt_diffUnified: string;
  /**
   * - 🚩 **en**: Dry run
   * - **zh**: 预演
   */
  export const opt_dryRun: string;
  /**
   * - 🚩 **en**: Editor
   * - **zh**: 编辑器
   */
  export const opt_editor: string;
  /**
   * - 🚩 **en**: Expected result count
   * - **zh**: 期望的结果数量
   */
  export const opt_expectResults: string;
  /**
   * - 🚩 **en**: Force
   * - **zh**: 强制执行
   */
  export const opt_force: string;
  /**
   * - 🚩 **en**: Run scripts in foreground
   * - **zh**: 在前台运行脚本
   */
  export const opt_foregroundScripts: string;
  /**
   * - 🚩 **en**: Global mode
   * - **zh**: 全局模式
   */
  export const opt_global: string;
  /**
   * - 🚩 **en**: Global style layout
   * - **zh**: 全局风格布局
   */
  export const opt_globalStyle: string;
  /**
   * - 🚩 **en**: Skip if script missing
   * - **zh**: 若脚本不存在则跳过
   */
  export const opt_ifPresent: string;
  /**
   * - 🚩 **en**: Ignore scripts
   * - **zh**: 忽略脚本
   */
  export const opt_ignoreScripts: string;
  /**
   * - 🚩 **en**: Include dependency types (prod, dev, optional, peer)
   * - **zh**: 包含依赖类型 (prod, dev, optional, peer)
   */
  export const opt_include: string;
  /**
   * - 🚩 **en**: Include workspace root
   * - **zh**: 包含工作区根
   */
  export const opt_includeWorkspaceRoot: string;
  /**
   * - 🚩 **en**: Author name
   * - **zh**: 作者名称
   */
  export const opt_initAuthorName: string;
  /**
   * - 🚩 **en**: Author URL
   * - **zh**: 作者 URL
   */
  export const opt_initAuthorUrl: string;
  /**
   * - 🚩 **en**: License
   * - **zh**: 许可证
   */
  export const opt_initLicense: string;
  /**
   * - 🚩 **en**: Module
   * - **zh**: 模块
   */
  export const opt_initModule: string;
  /**
   * - 🚩 **en**: Private
   * - **zh**: 私有
   */
  export const opt_initPrivate: string;
  /**
   * - 🚩 **en**: Type
   * - **zh**: 类型
   */
  export const opt_initType: string;
  /**
   * - 🚩 **en**: Version
   * - **zh**: 版本
   */
  export const opt_initVersion: string;
  /**
   * - 🚩 **en**: Install links
   * - **zh**: 安装链接
   */
  export const opt_installLinks: string;
  /**
   * - 🚩 **en**: Install strategy
   * - **zh**: 安装策略
   */
  export const opt_installStrategy: string;
  /**
   * - 🚩 **en**: Output as JSON
   * - **zh**: 以 JSON 格式输出
   */
  export const opt_json: string;
  /**
   * - 🚩 **en**: Legacy bundling
   * - **zh**: 传统捆绑
   */
  export const opt_legacyBundling: string;
  /**
   * - 🚩 **en**: libc filter
   * - **zh**: libc 过滤器
   */
  export const opt_libc: string;
  /**
   * - 🚩 **en**: Show linked packages
   * - **zh**: 显示链接的包
   */
  export const opt_link: string;
  /**
   * - 🚩 **en**: Config location (global, user, project)
   * - **zh**: 配置位置 (global, user, project)
   */
  export const opt_location: string;
  /**
   * - 🚩 **en**: Long output
   * - **zh**: 长输出
   */
  export const opt_long: string;
  /**
   * - 🚩 **en**: Skip audit
   * - **zh**: 跳过审计
   */
  export const opt_noAudit: string;
  /**
   * - 🚩 **en**: Skip bin links
   * - **zh**: 跳过 bin 链接
   */
  export const opt_noBinLinks: string;
  /**
   * - 🚩 **en**: Skip commit hooks
   * - **zh**: 跳过提交钩子
   */
  export const opt_noCommitHooks: string;
  /**
   * - 🚩 **en**: Omit descriptions
   * - **zh**: 省略描述
   */
  export const opt_noDescription: string;
  /**
   * - 🚩 **en**: Skip funding messages
   * - **zh**: 跳过资金信息
   */
  export const opt_noFund: string;
  /**
   * - 🚩 **en**: Skip git tag
   * - **zh**: 跳过 Git 标签
   */
  export const opt_noGitTagVersion: string;
  /**
   * - 🚩 **en**: Ignore package-lock
   * - **zh**: 忽略 package-lock
   */
  export const opt_noPackageLock: string;
  /**
   * - 🚩 **en**: Disable unicode
   * - **zh**: 禁用 Unicode
   */
  export const opt_noUnicode: string;
  /**
   * - 🚩 **en**: Skip workspace update
   * - **zh**: 跳过工作区更新
   */
  export const opt_noWorkspacesUpdate: string;
  /**
   * - 🚩 **en**: Offline mode
   * - **zh**: 离线模式
   */
  export const opt_offline: string;
  /**
   * - 🚩 **en**: Omit dependency types (dev, optional, peer)
   * - **zh**: 排除依赖类型 (dev, optional, peer)
   */
  export const opt_omit: string;
  /**
   * - 🚩 **en**: OS filter
   * - **zh**: 操作系统过滤器
   */
  export const opt_os: string;
  /**
   * - 🚩 **en**: One-time password
   * - **zh**: 一次性密码
   */
  export const opt_otp: string;
  /**
   * - 🚩 **en**: Pack destination
   * - **zh**: 打包目标
   */
  export const opt_packDestination: string;
  /**
   * - 🚩 **en**: Package spec
   * - **zh**: 包规范
   */
  export const opt_packageExec: string;
  /**
   * - 🚩 **en**: Only update package-lock
   * - **zh**: 仅更新 package-lock
   */
  export const opt_packageLockOnly: string;
  /**
   * - 🚩 **en**: Parseable output
   * - **zh**: 可解析输出
   */
  export const opt_parseable: string;
  /**
   * - 🚩 **en**: Prefer deduplication
   * - **zh**: 优先去重
   */
  export const opt_preferDedupe: string;
  /**
   * - 🚩 **en**: Prefer offline
   * - **zh**: 优先离线
   */
  export const opt_preferOffline: string;
  /**
   * - 🚩 **en**: Prefer online
   * - **zh**: 优先在线
   */
  export const opt_preferOnline: string;
  /**
   * - 🚩 **en**: Prerelease identifier
   * - **zh**: 预发布标识符
   */
  export const opt_preid: string;
  /**
   * - 🚩 **en**: Provenance file
   * - **zh**: 来源文件
   */
  export const opt_provenance: string;
  /**
   * - 🚩 **en**: Read-only token
   * - **zh**: 只读令牌
   */
  export const opt_readOnly: string;
  /**
   * - 🚩 **en**: Registry URL
   * - **zh**: 注册表 URL
   */
  export const opt_registry: string;
  /**
   * - 🚩 **en**: Save exact version
   * - **zh**: 保存精确版本
   */
  export const opt_saveExact: string;
  /**
   * - 🚩 **en**: Save mode
   * - **zh**: 保存模式
   */
  export const opt_saveMode: string;
  /**
   * - 🚩 **en**: SBOM format
   * - **zh**: SBOM 格式
   */
  export const opt_sbomFormat: string;
  /**
   * - 🚩 **en**: SBOM type
   * - **zh**: SBOM 类型
   */
  export const opt_sbomType: string;
  /**
   * - 🚩 **en**: Scope
   * - **zh**: 作用域
   */
  export const opt_scope: string;
  /**
   * - 🚩 **en**: Script shell
   * - **zh**: 脚本 Shell
   */
  export const opt_scriptShell: string;
  /**
   * - 🚩 **en**: Exclude search
   * - **zh**: 排除搜索
   */
  export const opt_searchExclude: string;
  /**
   * - 🚩 **en**: Limit results
   * - **zh**: 限制结果数量
   */
  export const opt_searchLimit: string;
  /**
   * - 🚩 **en**: Search options
   * - **zh**: 搜索选项
   */
  export const opt_searchOpts: string;
  /**
   * - 🚩 **en**: Shell
   * - **zh**: Shell
   */
  export const opt_shell: string;
  /**
   * - 🚩 **en**: Sign git tag
   * - **zh**: 签名 Git 标签
   */
  export const opt_signGitTag: string;
  /**
   * - 🚩 **en**: Fail on peer dependency conflicts
   * - **zh**: 对等依赖冲突时报错
   */
  export const opt_strictPeerDeps: string;
  /**
   * - 🚩 **en**: Tag
   * - **zh**: 标签
   */
  export const opt_tag: string;
  /**
   * - 🚩 **en**: Viewer program
   * - **zh**: 查看器程序
   */
  export const opt_viewer: string;
  /**
   * - 🚩 **en**: Funding source number
   * - **zh**: 资金来源编号
   */
  export const opt_which: string;
  /**
   * - 🚩 **en**: Workspace name
   * - **zh**: 工作区名称
   */
  export const opt_workspace: string;
  /**
   * - 🚩 **en**: Enable all workspaces
   * - **zh**: 启用所有工作区
   */
  export const opt_workspaces: string;
  /**
   * - 🚩 **en**: Skip prompts
   * - **zh**: 跳过提示
   */
  export const opt_yes: string;
  /**
   * - 🚩 **en**: ESLint
   * - **zh**: ESLint
   */
  export const pkg_eslint: string;
  /**
   * - 🚩 **en**: Prettier
   * - **zh**: Prettier
   */
  export const pkg_prettier: string;
  /**
   * - 🚩 **en**: React library
   * - **zh**: React 库
   */
  export const pkg_react: string;
  /**
   * - 🚩 **en**: TypeScript
   * - **zh**: TypeScript
   */
  export const pkg_typescript: string;
  /**
   * - 🚩 **en**: Vue.js
   * - **zh**: Vue.js
   */
  export const pkg_vue: string;
}

declare module "virtual:i18n/scoop" {
  /**
   * - 🚩 **en**: 32-bit architecture
   * - **zh**: 32 位架构
   */
  export const arg_32bit: string;
  /**
   * - 🚩 **en**: 64-bit architecture
   * - **zh**: 64 位架构
   */
  export const arg_64bit: string;
  /**
   * - 🚩 **en**: ARM64 architecture
   * - **zh**: ARM64 架构
   */
  export const arg_arm64: string;
  /**
   * - 🚩 **en**: Update all apps
   * - **zh**: 更新所有应用
   */
  export const arg_update_all: string;
  /**
   * - 🚩 **en**: Manage scoop aliases
   * - **zh**: 管理别名
   */
  export const cmd_alias: string;
  /**
   * - 🚩 **en**: Add an alias
   * - **zh**: 添加别名
   */
  export const cmd_alias_add: string;
  /**
   * - 🚩 **en**: List all aliases
   * - **zh**: 列出所有别名
   */
  export const cmd_alias_list: string;
  /**
   * - 🚩 **en**: Remove an alias
   * - **zh**: 删除别名
   */
  export const cmd_alias_rm: string;
  /**
   * - 🚩 **en**: Manage Scoop buckets
   * - **zh**: 管理 bucket
   */
  export const cmd_bucket: string;
  /**
   * - 🚩 **en**: Add a new bucket
   * - **zh**: 添加新 bucket
   */
  export const cmd_bucket_add: string;
  /**
   * - 🚩 **en**: List known buckets
   * - **zh**: 列出已知 bucket
   */
  export const cmd_bucket_known: string;
  /**
   * - 🚩 **en**: List all buckets
   * - **zh**: 列出所有 bucket
   */
  export const cmd_bucket_list: string;
  /**
   * - 🚩 **en**: Remove a bucket
   * - **zh**: 删除 bucket
   */
  export const cmd_bucket_rm: string;
  /**
   * - 🚩 **en**: Show or clear the download cache
   * - **zh**: 管理下载缓存
   */
  export const cmd_cache: string;
  /**
   * - 🚩 **en**: Remove cached downloads
   * - **zh**: 移除缓存
   */
  export const cmd_cache_rm: string;
  /**
   * - 🚩 **en**: Show cache contents
   * - **zh**: 显示缓存内容
   */
  export const cmd_cache_show: string;
  /**
   * - 🚩 **en**: Show content of specified manifest
   * - **zh**: 显示指定清单的内容
   */
  export const cmd_cat: string;
  /**
   * - 🚩 **en**: Check for potential problems
   * - **zh**: 检查潜在问题
   */
  export const cmd_checkup: string;
  /**
   * - 🚩 **en**: Cleanup apps by removing old versions
   * - **zh**: 清理旧版本
   */
  export const cmd_cleanup: string;
  /**
   * - 🚩 **en**: Get or set configuration values
   * - **zh**: 获取或设置配置值
   */
  export const cmd_config: string;
  /**
   * - 🚩 **en**: Remove a configuration setting
   * - **zh**: 删除配置项
   */
  export const cmd_config_rm: string;
  /**
   * - 🚩 **en**: Create a custom app manifest
   * - **zh**: 创建自定义应用清单
   */
  export const cmd_create: string;
  /**
   * - 🚩 **en**: List dependencies for an app
   * - **zh**: 列出应用的依赖项
   */
  export const cmd_depends: string;
  /**
   * - 🚩 **en**: Download apps in the cache folder and verify hashes
   * - **zh**: 下载应用到缓存并验证哈希
   */
  export const cmd_download: string;
  /**
   * - 🚩 **en**: Exports installed apps, buckets in JSON format
   * - **zh**: 导出已安装的应用和 bucket 为 JSON
   */
  export const cmd_export: string;
  /**
   * - 🚩 **en**: Show help for a command
   * - **zh**: 显示命令帮助
   */
  export const cmd_help: string;
  /**
   * - 🚩 **en**: Hold an app to disable updates
   * - **zh**: 锁定应用以禁用更新
   */
  export const cmd_hold: string;
  /**
   * - 🚩 **en**: Opens the app homepage
   * - **zh**: 打开应用主页
   */
  export const cmd_home: string;
  /**
   * - 🚩 **en**: Imports apps, buckets and configs from a Scoopfile
   * - **zh**: 从 Scoopfile 导入应用、bucket 和配置
   */
  export const cmd_import: string;
  /**
   * - 🚩 **en**: Display information about an app
   * - **zh**: 显示应用信息
   */
  export const cmd_info: string;
  /**
   * - 🚩 **en**: Install apps
   * - **zh**: 安装应用
   */
  export const cmd_install: string;
  /**
   * - 🚩 **en**: List installed apps
   * - **zh**: 列出已安装的应用
   */
  export const cmd_list: string;
  /**
   * - 🚩 **en**: Returns the path to the specified app
   * - **zh**: 返回指定应用的路径
   */
  export const cmd_prefix: string;
  /**
   * - 🚩 **en**: Reset an app to resolve conflicts
   * - **zh**: 重置应用以解决冲突
   */
  export const cmd_reset: string;
  /**
   * - 🚩 **en**: Scoop command-line installer — Windows package manager
   * - **zh**: Scoop 命令行安装程序 — Windows 包管理器
   */
  export const cmd_scoop: string;
  /**
   * - 🚩 **en**: Search available apps
   * - **zh**: 搜索可用应用
   */
  export const cmd_search: string;
  /**
   * - 🚩 **en**: Manipulate Scoop shims
   * - **zh**: 管理 shim
   */
  export const cmd_shim: string;
  /**
   * - 🚩 **en**: Add a custom shim
   * - **zh**: 添加自定义 shim
   */
  export const cmd_shim_add: string;
  /**
   * - 🚩 **en**: Alter a shim's target source
   * - **zh**: 切换 shim 目标源
   */
  export const cmd_shim_alter: string;
  /**
   * - 🚩 **en**: Show shim information
   * - **zh**: 显示 shim 信息
   */
  export const cmd_shim_info: string;
  /**
   * - 🚩 **en**: List all shims
   * - **zh**: 列出所有 shim
   */
  export const cmd_shim_list: string;
  /**
   * - 🚩 **en**: Remove shims
   * - **zh**: 删除 shim
   */
  export const cmd_shim_rm: string;
  /**
   * - 🚩 **en**: Show status and check for new app versions
   * - **zh**: 检查状态和更新
   */
  export const cmd_status: string;
  /**
   * - 🚩 **en**: Unhold an app to enable updates
   * - **zh**: 解锁应用以启用更新
   */
  export const cmd_unhold: string;
  /**
   * - 🚩 **en**: Uninstall apps
   * - **zh**: 卸载应用
   */
  export const cmd_uninstall: string;
  /**
   * - 🚩 **en**: Update apps, or Scoop itself
   * - **zh**: 更新应用或 Scoop 自身
   */
  export const cmd_update: string;
  /**
   * - 🚩 **en**: Look for app's hash or url on virustotal.com
   * - **zh**: 在 virustotal.com 上查找应用的哈希或 URL
   */
  export const cmd_virustotal: string;
  /**
   * - 🚩 **en**: Locate a shim/executable (similar to 'which' on Linux)
   * - **zh**: 定位 shim/可执行文件路径
   */
  export const cmd_which: string;
  /**
   * - 🚩 **en**: Apply to all apps
   * - **zh**: 应用于所有应用
   */
  export const opt_all: string;
  /**
   * - 🚩 **en**: Use the specified architecture (32bit|64bit|arm64)
   * - **zh**: 使用指定架构 (32bit|64bit|arm64)
   */
  export const opt_arch: string;
  /**
   * - 🚩 **en**: Remove outdated download cache
   * - **zh**: 移除过期的下载缓存
   */
  export const opt_cache_clean: string;
  /**
   * - 🚩 **en**: Export the Scoop configuration file too
   * - **zh**: 同时导出配置
   */
  export const opt_config: string;
  /**
   * - 🚩 **en**: Force execution
   * - **zh**: 强制执行
   */
  export const opt_force: string;
  /**
   * - 🚩 **en**: Install/manipulate globally
   * - **zh**: 全局安装/操作
   */
  export const opt_global: string;
  /**
   * - 🚩 **en**: Show help
   * - **zh**: 显示帮助信息
   */
  export const opt_help: string;
  /**
   * - 🚩 **en**: Don't install dependencies automatically
   * - **zh**: 不自动安装依赖
   */
  export const opt_independent: string;
  /**
   * - 🚩 **en**: Check locally only, disable remote fetching
   * - **zh**: 仅检查本地应用，不远程获取
   */
  export const opt_local: string;
  /**
   * - 🚩 **en**: Don't use the download cache
   * - **zh**: 不使用下载缓存
   */
  export const opt_no_cache: string;
  /**
   * - 🚩 **en**: Do not check dependencies
   * - **zh**: 不检查依赖
   */
  export const opt_no_depends: string;
  /**
   * - 🚩 **en**: Don't update Scoop before installing if it's outdated
   * - **zh**: 如果过期，不先更新 Scoop
   */
  export const opt_no_update_scoop: string;
  /**
   * - 🚩 **en**: Return reports as objects
   * - **zh**: 返回报告作为对象
   */
  export const opt_passthru: string;
  /**
   * - 🚩 **en**: Remove all persistent data
   * - **zh**: 删除所有持久化数据
   */
  export const opt_purge: string;
  /**
   * - 🚩 **en**: Hide extraneous messages
   * - **zh**: 隐藏多余消息
   */
  export const opt_quiet: string;
  /**
   * - 🚩 **en**: Send download URL for analysis
   * - **zh**: 上传 URL 以进行分析
   */
  export const opt_scan: string;
  /**
   * - 🚩 **en**: Skip hash validation (use with caution!)
   * - **zh**: 跳过哈希验证（慎用！）
   */
  export const opt_skip_hash_check: string;
  /**
   * - 🚩 **en**: Show full paths and URLs
   * - **zh**: 显示完整路径和 URL
   */
  export const opt_verbose: string;
  /**
   * - 🚩 **en**: Show version information
   * - **zh**: 显示版本信息
   */
  export const opt_version: string;
}

declare module "virtual:i18n/sugg" {
  /**
   * - 🚩 **en**: List all cached top-level commands
   * - **zh**: 列出所有已缓存的顶级命令
   */
  export const commands_desc: string;
  /**
   * - 🚩 **en**: Run shell completion against the local cache
   * - **zh**: 基于本地缓存运行 Shell 补全
   */
  export const complete_desc: string;
  /**
   * - 🚩 **en**: Shell completion engine
   * - **zh**: Shell 自动补全引擎
   */
  export const desc: string;
  /**
   * - 🚩 **en**: Development utilities
   * - **zh**: 开发工具
   */
  export const dev_desc: string;
  /**
   * - 🚩 **en**: Generate i18n.d.ts type declarations from translation files
   * - **zh**: 从翻译文件生成 i18n.d.ts 类型声明
   */
  export const dev_i18n_desc: string;
  /**
   * - 🚩 **en**: Initialize workspace: write types, guides, and tsconfig
   * - **zh**: 初始化工作区：写出类型定义、指南和 tsconfig
   */
  export const dev_init_desc: string;
  /**
   * - 🚩 **en**: Print this message or the help of the given subcommand
   * - **zh**: 打印此帮助或指定子命令的帮助
   */
  export const help_desc: string;
  /**
   * - 🚩 **en**: Print shell integration script
   * - **zh**: 打印 Shell 集成脚本
   */
  export const init_desc: string;
  /**
   * - 🚩 **en**: Override cache directory
   * - **zh**: 覆盖缓存目录
   */
  export const opt_cache_dir: string;
  /**
   * - 🚩 **en**: Path to completions directory
   * - **zh**: 补全脚本目录路径
   */
  export const opt_completions_dir: string;
  /**
   * - 🚩 **en**: Dump compiled JS bundles to directory
   * - **zh**: 将编译后的 JS bundle 导出到指定目录
   */
  export const opt_dump_dynamic: string;
  /**
   * - 🚩 **en**: Print help
   * - **zh**: 打印帮助
   */
  export const opt_help: string;
  /**
   * - 🚩 **en**: Language for i18n (e.g. en, zh)
   * - **zh**: i18n 语言（如 en、zh）
   */
  export const opt_lang: string;
  /**
   * - 🚩 **en**: Max results to return
   * - **zh**: 最大返回结果数
   */
  export const opt_max_results: string;
  /**
   * - 🚩 **en**: Print version
   * - **zh**: 打印版本
   */
  export const opt_version: string;
  /**
   * - 🚩 **en**: Build completion cache from scripts
   * - **zh**: 从脚本构建补全缓存
   */
  export const reload_desc: string;
  /**
   * - 🚩 **en**: Self-upgrade to the latest release
   * - **zh**: 自升级到最新版本
   */
  export const upgrade_desc: string;
}

