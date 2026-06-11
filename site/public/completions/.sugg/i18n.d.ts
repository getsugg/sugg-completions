declare module "virtual:i18n/bun" {
  /**
   * - 🚩 **zh**: 仅打印严重性大于或等于 <level> 的建议（low、moderate、high、critical）
   * - **en**: Only print advisories with severity greater than or equal to <level> (low, moderate, high, critical)
   */
  export const audit_option_audit_level: string;
  /**
   * - 🚩 **zh**: 忽略审计中的特定 CVE ID
   * - **en**: Ignore specific CVE IDs from audit
   */
  export const audit_option_ignore: string;
  /**
   * - 🚩 **zh**: 以 JSON 格式输出
   * - **en**: Output in JSON format
   */
  export const audit_option_json: string;
  /**
   * - 🚩 **zh**: 允许无法解析的动态 import()/require() 标识符，默认为 '*'（允许所有）
   * - **en**: Allow unresolved dynamic import()/require() specifiers matching these glob patterns. Use '<empty>' for opaque specifiers. Default is '*' (allow all).
   */
  export const build_option_allow_unresolved: string;
  /**
   * - 🚩 **zh**: （实验性）使用 Bun Bake 构建生产环境的 Web 应用
   * - **en**: (EXPERIMENTAL) Build a web app for production using Bun Bake.
   */
  export const build_option_app: string;
  /**
   * - 🚩 **zh**: 自定义资源文件名。默认为 "[name]-[hash].[ext]"
   * - **en**: Customize asset filenames. Defaults to "[name]-[hash].[ext]"
   */
  export const build_option_asset_naming: string;
  /**
   * - 🚩 **zh**: 为打包输出添加横幅，例如 "use client"
   * - **en**: Add a banner to the bundled output such as "use client"; for a bundle being used with RSCs
   */
  export const build_option_banner: string;
  /**
   * - 🚩 **zh**: 使用字节码缓存
   * - **en**: Use a bytecode cache
   */
  export const build_option_bytecode: string;
  /**
   * - 🚩 **zh**: 自定义块文件名。默认为 "[name]-[hash].[ext]"
   * - **en**: Customize chunk filenames. Defaults to "[name]-[hash].[ext]"
   */
  export const build_option_chunk_naming: string;
  /**
   * - 🚩 **zh**: 生成包含打包代码的独立 Bun 可执行文件。意味着 --production
   * - **en**: Generate a standalone Bun executable containing your bundled code. Implies --production
   */
  export const build_option_compile: string;
  /**
   * - 🚩 **zh**: 在独立可执行文件中启用自动加载 bunfig.toml（默认 true）
   * - **en**: Enable autoloading of bunfig.toml in standalone executable (default: true)
   */
  export const build_option_compile_autoload_bunfig: string;
  /**
   * - 🚩 **zh**: 在独立可执行文件中启用自动加载 .env 文件（默认 true）
   * - **en**: Enable autoloading of .env files in standalone executable (default: true)
   */
  export const build_option_compile_autoload_dotenv: string;
  /**
   * - 🚩 **zh**: 在独立可执行文件中启用运行时自动加载 package.json（默认 false）
   * - **en**: Enable autoloading of package.json at runtime in standalone executable (default: false)
   */
  export const build_option_compile_autoload_package_json: string;
  /**
   * - 🚩 **zh**: 在独立可执行文件中启用运行时自动加载 tsconfig.json（默认 false）
   * - **en**: Enable autoloading of tsconfig.json at runtime in standalone executable (default: false)
   */
  export const build_option_compile_autoload_tsconfig: string;
  /**
   * - 🚩 **zh**: 预置独立可执行文件的 execArgv 参数
   * - **en**: Prepend arguments to the standalone executable's execArgv
   */
  export const build_option_compile_exec_argv: string;
  /**
   * - 🚩 **zh**: 用于交叉编译的 Bun 可执行文件路径，代替下载
   * - **en**: Path to a Bun executable to use for cross-compilation instead of downloading
   */
  export const build_option_compile_executable_path: string;
  /**
   * - 🚩 **zh**: 将 CSS 文件合并以减少浏览器加载的重复 CSS
   * - **en**: Chunk CSS files together to reduce duplicated CSS loaded in a browser. Only has an effect when multiple entrypoints import CSS
   */
  export const build_option_css_chunking: string;
  /**
   * - 🚩 **zh**: 在打包中重新输出 DCE 注释。默认启用，除非传递 --minify-whitespace
   * - **en**: Re-emit DCE annotations in bundles. Enabled by default unless --minify-whitespace is passed.
   */
  export const build_option_emit_dce_annotations: string;
  /**
   * - 🚩 **zh**: 自定义入口点文件名。默认为 "[dir]/[name].[ext]"
   * - **en**: Customize entry point filenames. Defaults to "[dir]/[name].[ext]"
   */
  export const build_option_entry_naming: string;
  /**
   * - 🚩 **zh**: 将环境变量内联到包中作为 process.env.${name}。默认 'disable'
   * - **en**: Inline environment variables into the bundle as process.env.${name}. Defaults to 'disable'. To inline environment variables matching a prefix, use my prefix like 'FOO_PUBLIC_*'.
   */
  export const build_option_env: string;
  /**
   * - 🚩 **zh**: 从转译中排除模块（可使用 * 通配符），例如 -e react
   * - **en**: Exclude module from transpilation (can use * wildcards). ex: -e react
   */
  export const build_option_external: string;
  /**
   * - 🚩 **zh**: 为打包输出添加页脚，例如 // built with bun!
   * - **en**: Add a footer to the bundled output such as // built with bun!
   */
  export const build_option_footer: string;
  /**
   * - 🚩 **zh**: 指定构建的模块格式。支持 "esm"、"cjs" 和 "iife"。默认 "esm"，若使用 --bytecode 则为 "cjs"。
   * - **en**: Specifies the module format to build to. "esm", "cjs" and "iife" are supported. Defaults to "esm", or "cjs" with --bytecode.
   */
  export const build_option_format: string;
  /**
   * - 🚩 **zh**: 压缩时保留原始函数和类名
   * - **en**: Preserve original function and class names when minifying
   */
  export const build_option_keep_names: string;
  /**
   * - 🚩 **zh**: 写入包含构建元数据的 JSON 文件
   * - **en**: Write a JSON file with metadata about the build
   */
  export const build_option_metafile: string;
  /**
   * - 🚩 **zh**: 写入模块图可视化 markdown 文件（LLM 友好）
   * - **en**: Write a markdown file with a visualization of the module graph (LLM-friendly)
   */
  export const build_option_metafile_md: string;
  /**
   * - 🚩 **zh**: 启用所有压缩标志
   * - **en**: Enable all minification flags
   */
  export const build_option_minify: string;
  /**
   * - 🚩 **zh**: 压缩标识符
   * - **en**: Minify identifiers
   */
  export const build_option_minify_identifiers: string;
  /**
   * - 🚩 **zh**: 压缩语法和内联数据
   * - **en**: Minify syntax and inline data
   */
  export const build_option_minify_syntax: string;
  /**
   * - 🚩 **zh**: 压缩空白字符
   * - **en**: Minify whitespace
   */
  export const build_option_minify_whitespace: string;
  /**
   * - 🚩 **zh**: 仅转译文件，不打包
   * - **en**: Transpile file only, do not bundle
   */
  export const build_option_no_bundle: string;
  /**
   * - 🚩 **zh**: 禁止在独立可执行文件中自动加载 bunfig.toml
   * - **en**: Disable autoloading of bunfig.toml in standalone executable
   */
  export const build_option_no_compile_autoload_bunfig: string;
  /**
   * - 🚩 **zh**: 禁止在独立可执行文件中自动加载 .env 文件
   * - **en**: Disable autoloading of .env files in standalone executable
   */
  export const build_option_no_compile_autoload_dotenv: string;
  /**
   * - 🚩 **zh**: 禁止在独立可执行文件中运行时自动加载 package.json
   * - **en**: Disable autoloading of package.json at runtime in standalone executable
   */
  export const build_option_no_compile_autoload_package_json: string;
  /**
   * - 🚩 **zh**: 禁止在独立可执行文件中运行时自动加载 tsconfig.json
   * - **en**: Disable autoloading of tsconfig.json at runtime in standalone executable
   */
  export const build_option_no_compile_autoload_tsconfig: string;
  /**
   * - 🚩 **zh**: 多个文件时默认输出到 "dist"
   * - **en**: Default to "dist" if multiple files
   */
  export const build_option_outdir: string;
  /**
   * - 🚩 **zh**: 写入文件
   * - **en**: Write to a file
   */
  export const build_option_outfile: string;
  /**
   * - 🚩 **zh**: 将依赖添加到包中或保持外部导入。支持 "external"、"bundle"。默认为 "bundle"
   * - **en**: Add dependencies to bundle or keep them external. "external", "bundle" is supported. Defaults to "bundle".
   */
  export const build_option_packages: string;
  /**
   * - 🚩 **zh**: 设置 NODE_ENV=production 并启用压缩
   * - **en**: Set NODE_ENV=production and enable minification
   */
  export const build_option_production: string;
  /**
   * - 🚩 **zh**: 附加到打包代码中所有导入路径的前缀
   * - **en**: A prefix to be appended to any import paths in bundled code
   */
  export const build_option_public_path: string;
  /**
   * - 🚩 **zh**: 启用 React Fast Refresh 转换
   * - **en**: Enable React Fast Refresh transform (does not emit hot-module code, use this for testing)
   */
  export const build_option_react_fast_refresh: string;
  /**
   * - 🚩 **zh**: 在构建时任何无法解析的动态 import()/require() 标识符都导致构建失败
   * - **en**: Fail the build on any dynamic import()/require() specifier that cannot be resolved at build time.
   */
  export const build_option_reject_unresolved: string;
  /**
   * - 🚩 **zh**: 多入口点使用的根目录
   * - **en**: Root directory used for multiple entry points
   */
  export const build_option_root: string;
  /**
   * - 🚩 **zh**: （实验性）启用服务端组件
   * - **en**: (EXPERIMENTAL) Enable server components
   */
  export const build_option_server_components: string;
  /**
   * - 🚩 **zh**: 构建 sourcemap - 'linked'、'inline'、'external' 或 'none'
   * - **en**: Build with sourcemaps - 'linked', 'inline', 'external', or 'none'
   */
  export const build_option_sourcemap: string;
  /**
   * - 🚩 **zh**: 启用代码拆分
   * - **en**: Enable code splitting
   */
  export const build_option_splitting: string;
  /**
   * - 🚩 **zh**: 捆绑包的目标执行环境："browser"、"bun" 或 "node"
   * - **en**: The intended execution environment for the bundle. "browser", "bun" or "node"
   */
  export const build_option_target: string;
  /**
   * - 🚩 **zh**: 当使用 --compile 针对 Windows 时，设置可执行文件版权
   * - **en**: When using --compile targeting Windows, set the executable copyright
   */
  export const build_option_windows_copyright: string;
  /**
   * - 🚩 **zh**: 当使用 --compile 针对 Windows 时，设置可执行文件描述
   * - **en**: When using --compile targeting Windows, set the executable description
   */
  export const build_option_windows_description: string;
  /**
   * - 🚩 **zh**: 当使用 --compile 针对 Windows 时，防止可执行文件打开命令提示符窗口
   * - **en**: When using --compile targeting Windows, prevent a Command prompt from opening alongside the executable
   */
  export const build_option_windows_hide_console: string;
  /**
   * - 🚩 **zh**: 当使用 --compile 针对 Windows 时，分配可执行文件图标
   * - **en**: When using --compile targeting Windows, assign an executable icon
   */
  export const build_option_windows_icon: string;
  /**
   * - 🚩 **zh**: 当使用 --compile 针对 Windows 时，设置可执行文件公司名称
   * - **en**: When using --compile targeting Windows, set the executable company name
   */
  export const build_option_windows_publisher: string;
  /**
   * - 🚩 **zh**: 当使用 --compile 针对 Windows 时，设置可执行文件产品名称
   * - **en**: When using --compile targeting Windows, set the executable product name
   */
  export const build_option_windows_title: string;
  /**
   * - 🚩 **zh**: 当使用 --compile 针对 Windows 时，设置可执行文件版本（例如 1.2.3.4）
   * - **en**: When using --compile targeting Windows, set the executable version (e.g. 1.2.3.4)
   */
  export const build_option_windows_version: string;
  /**
   * - 🚩 **zh**: 向 package.json 添加依赖（bun a）
   * - **en**: Add a dependency to package.json (bun a)
   */
  export const cmd_add_desc: string;
  /**
   * - 🚩 **zh**: 检查已安装包的安全漏洞
   * - **en**: Check installed packages for vulnerabilities
   */
  export const cmd_audit_desc: string;
  /**
   * - 🚩 **zh**: 将 TypeScript 和 JavaScript 打包成单个文件
   * - **en**: Bundle TypeScript & JavaScript into a single file
   */
  export const cmd_build_desc: string;
  /**
   * - 🚩 **zh**: 从模板创建新项目（bun c）
   * - **en**: Create a new project from a template (bun c)
   */
  export const cmd_create_desc: string;
  /**
   * - 🚩 **zh**: 直接运行 Shell 脚本
   * - **en**: Run a shell script directly with Bun
   */
  export const cmd_exec_desc: string;
  /**
   * - 🚩 **zh**: 向 Bun 团队提供反馈
   * - **en**: Provide feedback to the Bun team
   */
  export const cmd_feedback_desc: string;
  /**
   * - 🚩 **zh**: 显示注册表中的包元数据
   * - **en**: Display package metadata from the registry
   */
  export const cmd_info_desc: string;
  /**
   * - 🚩 **zh**: 从内置模板启动一个空的 Bun 项目
   * - **en**: Start an empty Bun project from a built-in template
   */
  export const cmd_init_desc: string;
  /**
   * - 🚩 **zh**: 安装 package.json 中的依赖（bun i）
   * - **en**: Install dependencies for a package.json (bun i)
   */
  export const cmd_install_desc: string;
  /**
   * - 🚩 **zh**: 注册或链接本地 npm 包
   * - **en**: Register or link a local npm package
   */
  export const cmd_link_desc: string;
  /**
   * - 🚩 **zh**: 显示过时依赖的最新版本
   * - **en**: Display latest versions of outdated dependencies
   */
  export const cmd_outdated_desc: string;
  /**
   * - 🚩 **zh**: 准备一个包以进行补丁
   * - **en**: Prepare a package for patching
   */
  export const cmd_patch_desc: string;
  /**
   * - 🚩 **zh**: 额外的包管理工具
   * - **en**: Additional package management utilities
   */
  export const cmd_pm_desc: string;
  /**
   * - 🚩 **zh**: 发布包到 npm 注册表
   * - **en**: Publish a package to the npm registry
   */
  export const cmd_publish_desc: string;
  /**
   * - 🚩 **zh**: 从 package.json 移除依赖（bun rm）
   * - **en**: Remove a dependency from package.json (bun rm)
   */
  export const cmd_remove_desc: string;
  /**
   * - 🚩 **zh**: 启动 REPL 会话
   * - **en**: Start a REPL session with Bun
   */
  export const cmd_repl_desc: string;
  /**
   * - 🚩 **zh**: 执行一个文件或运行 package.json 脚本
   * - **en**: Execute a file with Bun or run a package.json script
   */
  export const cmd_run_desc: string;
  /**
   * - 🚩 **zh**: 运行单元测试
   * - **en**: Run unit tests with Bun
   */
  export const cmd_test_desc: string;
  /**
   * - 🚩 **zh**: 注销本地 npm 包
   * - **en**: Unregister a local npm package
   */
  export const cmd_unlink_desc: string;
  /**
   * - 🚩 **zh**: 更新过时的依赖
   * - **en**: Update outdated dependencies
   */
  export const cmd_update_desc: string;
  /**
   * - 🚩 **zh**: 升级到最新版本的 Bun
   * - **en**: Upgrade to latest version of Bun
   */
  export const cmd_upgrade_desc: string;
  /**
   * - 🚩 **zh**: 解释为什么安装了某个包
   * - **en**: Explain why a package is installed
   */
  export const cmd_why_desc: string;
  /**
   * - 🚩 **zh**: 执行包二进制文件（CLI），必要时安装（bunx）
   * - **en**: Execute a package binary (CLI), installing if needed (bunx)
   */
  export const cmd_x_desc: string;
  /**
   * - 🚩 **zh**: 显示帮助
   * - **en**: Show help
   */
  export const create_option_help: string;
  /**
   * - 🚩 **zh**: 快速的 JavaScript 运行时、包管理器、打包器和测试运行器。
   * - **en**: Fast JavaScript runtime, package manager, bundler, and test runner.
   */
  export const description: string;
  /**
   * - 🚩 **zh**: 设置此提交使用的电子邮件地址
   * - **en**: Set the email address used for this submission
   */
  export const feedback_option_email: string;
  /**
   * - 🚩 **zh**: 以 JSON 格式输出
   * - **en**: Output in JSON format
   */
  export const info_option_json: string;
  /**
   * - 🚩 **zh**: 仅初始化类型定义
   * - **en**: Only initialize type definitions
   */
  export const init_option_minimal: string;
  /**
   * - 🚩 **zh**: 初始化 React 项目
   * - **en**: Initialize a React project
   */
  export const init_option_react: string;
  /**
   * - 🚩 **zh**: 使用 @shadcn/ui 和 TailwindCSS 初始化 React 项目
   * - **en**: Initialize a React project with @shadcn/ui and TailwindCSS
   */
  export const init_option_react_shadcn: string;
  /**
   * - 🚩 **zh**: 使用 TailwindCSS 初始化 React 项目
   * - **en**: Initialize a React project with TailwindCSS
   */
  export const init_option_react_tailwind: string;
  /**
   * - 🚩 **zh**: 接受所有默认选项
   * - **en**: Accept all default options
   */
  export const init_option_yes: string;
  /**
   * - 🚩 **zh**: 递归分析并安装作为参数传递的所有文件的依赖（使用 Bun 的打包器）
   * - **en**: Analyze & install all dependencies of files passed as arguments recursively (using Bun's bundler)
   */
  export const install_option_analyze: string;
  /**
   * - 🚩 **zh**: 安装依赖的平台特定优化。可选值："hardlink"（默认）、"symlink"、"copyfile"
   * - **en**: Platform-specific optimizations for installing dependencies. Possible values: "hardlink" (default), "symlink", "copyfile"
   */
  export const install_option_backend: string;
  /**
   * - 🚩 **zh**: 提供证书颁发机构签名证书
   * - **en**: Provide a Certificate Authority signing certificate
   */
  export const install_option_ca: string;
  /**
   * - 🚩 **zh**: 将缓存数据存储/加载到指定目录
   * - **en**: Store & load cached data from a specific directory path
   */
  export const install_option_cache_dir: string;
  /**
   * - 🚩 **zh**: 与 --ca 相同，但为证书文件路径
   * - **en**: The same as --ca, but is a file path to the certificate
   */
  export const install_option_cafile: string;
  /**
   * - 🚩 **zh**: 生命周期脚本的最大并发作业数（默认 2x CPU 核心数）
   * - **en**: Maximum number of concurrent jobs for lifecycle scripts (default: 2x CPU cores)
   */
  export const install_option_concurrent_scripts: string;
  /**
   * - 🚩 **zh**: 覆盖可选依赖的 CPU 架构（例如 x64、arm64、* 表示所有）
   * - **en**: Override CPU architecture for optional dependencies (e.g., x64, arm64, * for all)
   */
  export const install_option_cpu: string;
  /**
   * - 🚩 **zh**: 添加到 "devDependencies"
   * - **en**: Add dependency to "devDependencies"
   */
  export const install_option_dev: string;
  /**
   * - 🚩 **zh**: 执行试运行而不做任何更改
   * - **en**: Perform a dry run without making changes
   */
  export const install_option_dry_run: string;
  /**
   * - 🚩 **zh**: 添加确切版本而不是 ^range
   * - **en**: Add the exact version instead of the ^range
   */
  export const install_option_exact: string;
  /**
   * - 🚩 **zh**: 为匹配的工作区安装包
   * - **en**: Install packages for the matching workspaces
   */
  export const install_option_filter: string;
  /**
   * - 🚩 **zh**: 始终从注册表请求最新版本并重新安装所有依赖
   * - **en**: Always request the latest versions from the registry & reinstall all dependencies
   */
  export const install_option_force: string;
  /**
   * - 🚩 **zh**: 禁止更改 lockfile
   * - **en**: Disallow changes to lockfile
   */
  export const install_option_frozen_lockfile: string;
  /**
   * - 🚩 **zh**: 全局安装
   * - **en**: Install globally
   */
  export const install_option_global: string;
  /**
   * - 🚩 **zh**: 跳过项目 package.json 中的生命周期脚本（依赖脚本从不运行）
   * - **en**: Skip lifecycle scripts in the project's package.json (dependency scripts are never run)
   */
  export const install_option_ignore_scripts: string;
  /**
   * - 🚩 **zh**: 链接器策略（"isolated" 或 "hoisted"）
   * - **en**: Linker strategy (one of "isolated" or "hoisted")
   */
  export const install_option_linker: string;
  /**
   * - 🚩 **zh**: 仅生成 lockfile 而不安装依赖
   * - **en**: Generate a lockfile without installing dependencies
   */
  export const install_option_lockfile_only: string;
  /**
   * - 🚩 **zh**: 只安装至少 N 秒前发布的包（安全特性）
   * - **en**: Only install packages published at least N seconds ago (security feature)
   */
  export const install_option_minimum_release_age: string;
  /**
   * - 🚩 **zh**: 最大并发网络请求数（默认 48）
   * - **en**: Maximum number of concurrent network requests (default 48)
   */
  export const install_option_network_concurrency: string;
  /**
   * - 🚩 **zh**: 完全忽略清单缓存
   * - **en**: Ignore manifest cache entirely
   */
  export const install_option_no_cache: string;
  /**
   * - 🚩 **zh**: 禁用进度条
   * - **en**: Disable the progress bar
   */
  export const install_option_no_progress: string;
  /**
   * - 🚩 **zh**: 不更新 package.json 或保存 lockfile
   * - **en**: Don't update package.json or save a lockfile
   */
  export const install_option_no_save: string;
  /**
   * - 🚩 **zh**: 不打印摘要
   * - **en**: Don't print a summary
   */
  export const install_option_no_summary: string;
  /**
   * - 🚩 **zh**: 跳过验证新下载包的完整性
   * - **en**: Skip verifying integrity of newly downloaded packages
   */
  export const install_option_no_verify: string;
  /**
   * - 🚩 **zh**: 从安装中排除 'dev'、'optional' 或 'peer' 依赖
   * - **en**: Exclude 'dev', 'optional', or 'peer' dependencies from install
   */
  export const install_option_omit: string;
  /**
   * - 🚩 **zh**: 仅当 package.json 中尚不存在依赖时才添加
   * - **en**: Only add dependencies to package.json if they are not already present
   */
  export const install_option_only_missing: string;
  /**
   * - 🚩 **zh**: 添加到 "optionalDependencies"
   * - **en**: Add dependency to "optionalDependencies"
   */
  export const install_option_optional: string;
  /**
   * - 🚩 **zh**: 覆盖可选依赖的操作系统（例如 linux、darwin、* 表示所有）
   * - **en**: Override operating system for optional dependencies (e.g., linux, darwin, * for all)
   */
  export const install_option_os: string;
  /**
   * - 🚩 **zh**: 添加到 "peerDependencies"
   * - **en**: Add dependency to "peerDependencies"
   */
  export const install_option_peer: string;
  /**
   * - 🚩 **zh**: 不安装 devDependencies
   * - **en**: Don't install devDependencies
   */
  export const install_option_production: string;
  /**
   * - 🚩 **zh**: 打包时仅显示 tarball 名称
   * - **en**: Only show tarball name when packing
   */
  export const install_option_quiet: string;
  /**
   * - 🚩 **zh**: 默认使用特定注册表，覆盖 .npmrc、bunfig.toml 和环境变量
   * - **en**: Use a specific registry by default, overriding .npmrc, bunfig.toml and environment variables
   */
  export const install_option_registry: string;
  /**
   * - 🚩 **zh**: 保存到 package.json（默认 true）
   * - **en**: Save to package.json (true by default)
   */
  export const install_option_save: string;
  /**
   * - 🚩 **zh**: 保存基于文本的 lockfile
   * - **en**: Save a text-based lockfile
   */
  export const install_option_save_text_lockfile: string;
  /**
   * - 🚩 **zh**: 添加到项目的 package.json 中的 trustedDependencies 并安装包
   * - **en**: Add to trustedDependencies in the project's package.json and install the package(s)
   */
  export const install_option_trust: string;
  /**
   * - 🚩 **zh**: 极其详细的日志
   * - **en**: Excessively verbose logging
   */
  export const install_option_verbose: string;
  /**
   * - 🚩 **zh**: 写入 yarn.lock 文件（yarn v1）
   * - **en**: Write a yarn.lock file (yarn v1)
   */
  export const install_option_yarn: string;
  /**
   * - 🚩 **zh**: 强制脚本或包使用 Bun 运行时代替 Node.js（通过 symlinking node）
   * - **en**: Force a script or package to use Bun's runtime instead of Node.js (via symlinking node)
   */
  export const option_bun: string;
  /**
   * - 🚩 **zh**: 传递自定义条件以解析
   * - **en**: Pass custom conditions to resolve
   */
  export const option_conditions: string;
  /**
   * - 🚩 **zh**: 指定 Bun 配置文件的路径。默认 $cwd/bunfig.toml
   * - **en**: Specify path to Bun config file. Default $cwd/bunfig.toml
   */
  export const option_config: string;
  /**
   * - 🚩 **zh**: 设置 console.log 对象检查的默认深度（默认 2）
   * - **en**: Set the default depth for console.log object inspection (default: 2)
   */
  export const option_console_depth: string;
  /**
   * - 🚩 **zh**: 启动 CPU 分析器，退出时将分析文件写入磁盘
   * - **en**: Start CPU profiler and write profile to disk on exit
   */
  export const option_cpu_prof: string;
  /**
   * - 🚩 **zh**: 指定 CPU 分析文件保存目录
   * - **en**: Specify the directory where the CPU profile will be saved
   */
  export const option_cpu_prof_dir: string;
  /**
   * - 🚩 **zh**: 指定 CPU 分析的采样间隔微秒数（默认 1000）
   * - **en**: Specify the sampling interval in microseconds for CPU profiling (default: 1000)
   */
  export const option_cpu_prof_interval: string;
  /**
   * - 🚩 **zh**: 以 markdown 格式输出 CPU 分析（面向 LLM 分析，grep 友好）
   * - **en**: Output CPU profile in markdown format (grep-friendly, designed for LLM analysis)
   */
  export const option_cpu_prof_md: string;
  /**
   * - 🚩 **zh**: 指定 CPU 分析文件名
   * - **en**: Specify the name of the CPU profile file
   */
  export const option_cpu_prof_name: string;
  /**
   * - 🚩 **zh**: cron 执行模式的周期
   * - **en**: Cron period for cron execution mode
   */
  export const option_cron_period: string;
  /**
   * - 🚩 **zh**: cron 执行模式的标题
   * - **en**: Title for cron execution mode
   */
  export const option_cron_title: string;
  /**
   * - 🚩 **zh**: 解析文件和入口点的绝对路径。仅更改进程的 cwd。
   * - **en**: Absolute path to resolve files & entry points from. This just changes the process' cwd.
   */
  export const option_cwd: string;
  /**
   * - 🚩 **zh**: 设置 DNS 查找结果的默认顺序。有效值：verbatim（默认）、ipv4first、ipv6first
   * - **en**: Set the default order of DNS lookup results. Valid orders: verbatim (default), ipv4first, ipv6first
   */
  export const option_dns_result_order: string;
  /**
   * - 🚩 **zh**: 使用 --filter 时显示的脚本输出行数（默认 10）。设为 0 显示所有行。
   * - **en**: Number of lines of script output shown when using --filter (default: 10). Set to 0 to show all lines.
   */
  export const option_elide_lines: string;
  /**
   * - 🚩 **zh**: 从指定文件加载环境变量
   * - **en**: Load environment variables from the specified file(s)
   */
  export const option_env_file: string;
  /**
   * - 🚩 **zh**: 将参数作为脚本执行
   * - **en**: Evaluate argument as a script
   */
  export const option_eval: string;
  /**
   * - 🚩 **zh**: 在全局对象上暴露 gc()。对 Bun.gc() 无效。
   * - **en**: Expose gc() on the global object. Has no effect on Bun.gc().
   */
  export const option_expose_gc: string;
  /**
   * - 🚩 **zh**: 在代码加载时预连接到 URL
   * - **en**: Preconnect to a URL while code is loading
   */
  export const option_fetch_preconnect: string;
  /**
   * - 🚩 **zh**: 在所有匹配模式的工作区包中运行脚本
   * - **en**: Run a script in all workspace packages matching the pattern
   */
  export const option_filter: string;
  /**
   * - 🚩 **zh**: 退出时生成 V8 堆快照 (.heapsnapshot)
   * - **en**: Generate V8 heap snapshot on exit (.heapsnapshot)
   */
  export const option_heap_prof: string;
  /**
   * - 🚩 **zh**: 指定堆分析文件保存目录
   * - **en**: Specify the directory where the heap profile will be saved
   */
  export const option_heap_prof_dir: string;
  /**
   * - 🚩 **zh**: 退出时生成 markdown 堆分析（用于 CLI 分析）
   * - **en**: Generate markdown heap profile on exit (for CLI analysis)
   */
  export const option_heap_prof_md: string;
  /**
   * - 🚩 **zh**: 指定堆分析文件名
   * - **en**: Specify the name of the heap profile file
   */
  export const option_heap_prof_name: string;
  /**
   * - 🚩 **zh**: 显示此帮助菜单
   * - **en**: Display this help menu
   */
  export const option_help: string;
  /**
   * - 🚩 **zh**: 在 Bun 运行时、测试运行器或打包器中启用自动重载
   * - **en**: Enable auto reload in the Bun runtime, test runner, or bundler
   */
  export const option_hot: string;
  /**
   * - 🚩 **zh**: 执行时自动安装依赖。相当于 --install=fallback。
   * - **en**: Auto-install dependencies during execution. Equivalent to --install=fallback.
   */
  export const option_i: string;
  /**
   * - 🚩 **zh**: 如果入口点不存在则退出而不报错
   * - **en**: Exit without an error if the entrypoint does not exist
   */
  export const option_if_present: string;
  /**
   * - 🚩 **zh**: 激活 Bun 的调试器
   * - **en**: Activate Bun's debugger
   */
  export const option_inspect: string;
  /**
   * - 🚩 **zh**: 激活 Bun 的调试器，在第一行代码设置断点并等待
   * - **en**: Activate Bun's debugger, set breakpoint on first line of code and wait
   */
  export const option_inspect_brk: string;
  /**
   * - 🚩 **zh**: 激活 Bun 的调试器，等待连接后再执行
   * - **en**: Activate Bun's debugger, wait for a connection before executing
   */
  export const option_inspect_wait: string;
  /**
   * - 🚩 **zh**: 配置自动安装行为。可选值："auto"（默认，当没有 node_modules 时自动安装）、"fallback"（仅缺失的包）、"force"（总是）
   * - **en**: Configure auto-install behavior. One of "auto" (default, auto-installs when no node_modules), "fallback" (missing packages only), "force" (always).
   */
  export const option_install: string;
  /**
   * - 🚩 **zh**: 设置 HTTP 头的最大字节数，默认 16KiB
   * - **en**: Set the maximum size of HTTP headers in bytes. Default is 16KiB
   */
  export const option_max_http_header_size: string;
  /**
   * - 🚩 **zh**: 如果调用 process.dlopen 则抛出错误，并禁用导出条件 "node-addons"
   * - **en**: Throw an error if process.dlopen is called, and disable export condition "node-addons"
   */
  export const option_no_addons: string;
  /**
   * - 🚩 **zh**: 当启用 --hot 或 --watch 时，禁止清屏
   * - **en**: Disable clearing the terminal screen on reload when --hot or --watch is enabled
   */
  export const option_no_clear_screen: string;
  /**
   * - 🚩 **zh**: 禁止所有自定义弃用报告
   * - **en**: Suppress all reporting of the custom deprecation.
   */
  export const option_no_deprecation: string;
  /**
   * - 🚩 **zh**: 禁用自动加载 .env 文件
   * - **en**: Disable automatic loading of .env files
   */
  export const option_no_env_file: string;
  /**
   * - 🚩 **zh**: 当一个脚本失败时继续运行其他脚本（与 --parallel/--sequential 一起使用）
   * - **en**: Continue running other scripts when one fails (with --parallel/--sequential)
   */
  export const option_no_exit_on_error: string;
  /**
   * - 🚩 **zh**: 禁用 Bun 运行时的自动安装
   * - **en**: Disable auto install in the Bun runtime
   */
  export const option_no_install: string;
  /**
   * - 🚩 **zh**: 使用 Foreman 风格的输出并发运行多个脚本
   * - **en**: Run multiple scripts concurrently with Foreman-style output
   */
  export const option_parallel: string;
  /**
   * - 🚩 **zh**: 设置 Bun.serve 的默认端口
   * - **en**: Set the default port for Bun.serve
   */
  export const option_port: string;
  /**
   * - 🚩 **zh**: 在 Bun 运行时中使用最新的匹配版本，始终检查 npm
   * - **en**: Use the latest matching versions of packages in the Bun runtime, always checking npm
   */
  export const option_prefer_latest: string;
  /**
   * - 🚩 **zh**: 跳过 Bun 运行时中的包陈旧检查，从磁盘解析
   * - **en**: Skip staleness checks for packages in the Bun runtime and resolve from disk
   */
  export const option_prefer_offline: string;
  /**
   * - 🚩 **zh**: 在其他模块加载前导入一个模块
   * - **en**: Import a module before other modules are loaded
   */
  export const option_preload: string;
  /**
   * - 🚩 **zh**: 将参数作为脚本执行并打印结果
   * - **en**: Evaluate argument as a script and print the result
   */
  export const option_print: string;
  /**
   * - 🚩 **zh**: 启动时预连接到 $REDIS_URL
   * - **en**: Preconnect to $REDIS_URL at startup
   */
  export const option_redis_preconnect: string;
  /**
   * - 🚩 **zh**: 打印带修订号的版本并退出
   * - **en**: Print version with revision and exit
   */
  export const option_revision: string;
  /**
   * - 🚩 **zh**: 使用 Foreman 风格的输出顺序运行多个脚本
   * - **en**: Run multiple scripts sequentially with Foreman-style output
   */
  export const option_sequential: string;
  /**
   * - 🚩 **zh**: 控制 package.json 脚本使用的 shell。支持 'bun' 或 'system'
   * - **en**: Control the shell used for package.json scripts. Supports either 'bun' or 'system'
   */
  export const option_shell: string;
  /**
   * - 🚩 **zh**: 不打印脚本命令
   * - **en**: Don't print the script command
   */
  export const option_silent: string;
  /**
   * - 🚩 **zh**: 使用更少内存，但更频繁地运行垃圾回收
   * - **en**: Use less memory, but run garbage collection more often
   */
  export const option_smol: string;
  /**
   * - 🚩 **zh**: 启动时预连接到 PostgreSQL
   * - **en**: Preconnect to PostgreSQL at startup
   */
  export const option_sql_preconnect: string;
  /**
   * - 🚩 **zh**: 决定弃用警告是否导致错误
   * - **en**: Determine whether or not deprecation warnings result in errors.
   */
  export const option_throw_deprecation: string;
  /**
   * - 🚩 **zh**: 设置进程标题
   * - **en**: Set the process title
   */
  export const option_title: string;
  /**
   * - 🚩 **zh**: 可选值："strict"、"throw"、"warn"、"none" 或 "warn-with-error-code"
   * - **en**: One of "strict", "throw", "warn", "none", or "warn-with-error-code"
   */
  export const option_unhandled_rejections: string;
  /**
   * - 🚩 **zh**: 使用捆绑的 CA 存储
   * - **en**: Use bundled CA store
   */
  export const option_use_bundled_ca: string;
  /**
   * - 🚩 **zh**: 使用 OpenSSL 的默认 CA 存储
   * - **en**: Use OpenSSL's default CA store
   */
  export const option_use_openssl_ca: string;
  /**
   * - 🚩 **zh**: 使用系统的可信证书颁发机构
   * - **en**: Use the system's trusted certificate authorities
   */
  export const option_use_system_ca: string;
  /**
   * - 🚩 **zh**: 设置 HTTP 请求的默认 User-Agent 头
   * - **en**: Set the default User-Agent header for HTTP requests
   */
  export const option_user_agent: string;
  /**
   * - 🚩 **zh**: 打印版本并退出
   * - **en**: Print version and exit
   */
  export const option_version: string;
  /**
   * - 🚩 **zh**: 文件变化时自动重启进程
   * - **en**: Automatically restart the process on file change
   */
  export const option_watch: string;
  /**
   * - 🚩 **zh**: 在所有工作区包中运行脚本（来自 package.json 中的 "workspaces" 字段）
   * - **en**: Run a script in all workspace packages (from the "workspaces" field in package.json)
   */
  export const option_workspaces: string;
  /**
   * - 🚩 **zh**: 强制 Buffer.allocUnsafe(size) 零填充
   * - **en**: Boolean to force Buffer.allocUnsafe(size) to be zero-filled.
   */
  export const option_zero_fill_buffers: string;
  /**
   * - 🚩 **zh**: 检查所有工作区中的过时包
   * - **en**: Check outdated packages in all workspaces
   */
  export const outdated_option_recursive: string;
  /**
   * - 🚩 **zh**: 安装包含 `dir` 中修改的包
   * - **en**: Install a package containing modifications in `dir`
   */
  export const patch_option_commit: string;
  /**
   * - 🚩 **zh**: 放置补丁文件的目录（仅当使用 --commit 时）
   * - **en**: The directory to put the patch file in (only if --commit is used)
   */
  export const patch_option_patches_dir: string;
  /**
   * - 🚩 **zh**: 打印 bin 文件夹的路径
   * - **en**: print the path to bin folder
   */
  export const pm_bin_desc: string;
  /**
   * - 🚩 **zh**: 打印全局 bin 文件夹路径
   * - **en**: print the global path to bin folder
   */
  export const pm_bin_option_g: string;
  /**
   * - 🚩 **zh**: 打印缓存文件夹的路径
   * - **en**: print the path to the cache folder
   */
  export const pm_cache_desc: string;
  /**
   * - 🚩 **zh**: 清空缓存
   * - **en**: clear the cache
   */
  export const pm_cache_rm_desc: string;
  /**
   * - 🚩 **zh**: 打印默认的可信依赖列表
   * - **en**: print the default trusted dependencies list
   */
  export const pm_default_trusted_desc: string;
  /**
   * - 🚩 **zh**: 生成并打印当前 lockfile 的哈希值
   * - **en**: generate & print the hash of the current lockfile
   */
  export const pm_hash_desc: string;
  /**
   * - 🚩 **zh**: 打印当前 lockfile 中存储的哈希值
   * - **en**: print the hash stored in the current lockfile
   */
  export const pm_hash_print_desc: string;
  /**
   * - 🚩 **zh**: 打印用于哈希 lockfile 的字符串
   * - **en**: print the string used to hash the lockfile
   */
  export const pm_hash_string_desc: string;
  /**
   * - 🚩 **zh**: 列出当前 lockfile 的依赖树
   * - **en**: list the dependency tree according to the current lockfile
   */
  export const pm_list_desc: string;
  /**
   * - 🚩 **zh**: 列出当前 lockfile 的完整依赖树
   * - **en**: list the entire dependency tree according to the current lockfile
   */
  export const pm_list_option_all: string;
  /**
   * - 🚩 **zh**: 迁移其他包管理器的 lockfile 而不安装任何东西
   * - **en**: migrate another package manager's lockfile without installing anything
   */
  export const pm_migrate_desc: string;
  /**
   * - 🚩 **zh**: 创建当前工作区的 tarball
   * - **en**: create a tarball of the current workspace
   */
  export const pm_pack_desc: string;
  /**
   * - 🚩 **zh**: tarball 保存到的目录
   * - **en**: the directory the tarball will be saved in
   */
  export const pm_pack_option_destination: string;
  /**
   * - 🚩 **zh**: tarball 的名称
   * - **en**: the name of the tarball
   */
  export const pm_pack_option_filename: string;
  /**
   * - 🚩 **zh**: 指定 gzip 压缩级别（0-9，默认 9）
   * - **en**: specify a custom compression level for gzip (0-9, default is 9)
   */
  export const pm_pack_option_gzip_level: string;
  /**
   * - 🚩 **zh**: 不运行 pre/postpack 和 prepare 脚本
   * - **en**: don't run pre/postpack and prepare scripts
   */
  export const pm_pack_option_ignore_scripts: string;
  /**
   * - 🚩 **zh**: 仅输出 tarball 文件名
   * - **en**: only output the tarball filename
   */
  export const pm_pack_option_quiet: string;
  /**
   * - 🚩 **zh**: 管理 package.json 中的数据
   * - **en**: manage data in package.json
   */
  export const pm_pkg_desc: string;
  /**
   * - 🚩 **zh**: 扫描 lockfile 中所有包的安全漏洞
   * - **en**: scan all packages in lockfile for security vulnerabilities
   */
  export const pm_scan_desc: string;
  /**
   * - 🚩 **zh**: 为不可信依赖运行脚本并添加到 `trustedDependencies`
   * - **en**: run scripts for untrusted dependencies and add to `trustedDependencies`
   */
  export const pm_trust_desc: string;
  /**
   * - 🚩 **zh**: 信任所有不可信的依赖
   * - **en**: trust all untrusted dependencies
   */
  export const pm_trust_option_all: string;
  /**
   * - 🚩 **zh**: 打印当前带有脚本的不可信依赖
   * - **en**: print current untrusted dependencies with scripts
   */
  export const pm_untrusted_desc: string;
  /**
   * - 🚩 **zh**: 提升 package.json 中的版本并创建 git 标签
   * - **en**: bump the version in package.json and create a git tag
   */
  export const pm_version_desc: string;
  /**
   * - 🚩 **zh**: 版本增量：patch、minor、major、prepatch、preminor、premajor、prerelease、from-git 或特定版本
   * - **en**: version increment: patch, minor, major, prepatch, preminor, premajor, prerelease, from-git, or a specific version
   */
  export const pm_version_increment: string;
  /**
   * - 🚩 **zh**: 查看注册表中的包元数据（改用 `bun info`）
   * - **en**: view package metadata from the registry (use `bun info` instead)
   */
  export const pm_view_desc: string;
  /**
   * - 🚩 **zh**: 打印当前 npm 用户名
   * - **en**: print the current npm username
   */
  export const pm_whoami_desc: string;
  /**
   * - 🚩 **zh**: 显示解释为什么安装了某个包的依赖树
   * - **en**: show dependency tree explaining why a package is installed
   */
  export const pm_why_desc: string;
  /**
   * - 🚩 **zh**: 设置作用域包的访问级别
   * - **en**: Set access level for scoped packages
   */
  export const publish_option_access: string;
  /**
   * - 🚩 **zh**: 指定一次性密码身份验证类型（默认 'web'）
   * - **en**: Specify the type of one-time password authentication (default is 'web')
   */
  export const publish_option_auth_type: string;
  /**
   * - 🚩 **zh**: 指定 gzip 的自定义压缩级别。默认 9。
   * - **en**: Specify a custom compression level for gzip. Default is 9.
   */
  export const publish_option_gzip_level: string;
  /**
   * - 🚩 **zh**: 提供一次性密码进行身份验证
   * - **en**: Provide a one-time password for authentication
   */
  export const publish_option_otp: string;
  /**
   * - 🚩 **zh**: 标记发布版本。默认 "latest"
   * - **en**: Tag the release. Default is "latest"
   */
  export const publish_option_tag: string;
  /**
   * - 🚩 **zh**: 重新发布到现有版本号时不退出并返回代码 1
   * - **en**: Don't exit with code 1 when republishing over an existing version number
   */
  export const publish_option_tolerate_republish: string;
  /**
   * - 🚩 **zh**: 解析时替换 K:V，例如 --define process.env.NODE_ENV:"development"，值被解析为 JSON
   * - **en**: Substitute K:V while parsing, e.g. --define process.env.NODE_ENV:"development". Values are parsed as JSON.
   */
  export const run_option_define: string;
  /**
   * - 🚩 **zh**: 移除函数调用，例如 --drop=console 移除所有 console.* 调用
   * - **en**: Remove function calls, e.g. --drop=console removes all console.* calls.
   */
  export const run_option_drop: string;
  /**
   * - 🚩 **zh**: 默认为：.tsx,.ts,.jsx,.js,.json
   * - **en**: Defaults to: .tsx,.ts,.jsx,.js,.json
   */
  export const run_option_extension_order: string;
  /**
   * - 🚩 **zh**: 为死代码消除启用特性标志，例如 --feature=SUPER_SECRET
   * - **en**: Enable a feature flag for dead-code elimination, e.g. --feature=SUPER_SECRET
   */
  export const run_option_feature: string;
  /**
   * - 🚩 **zh**: 忽略树摇注释，例如 @__PURE__
   * - **en**: Ignore tree-shaking annotations such as @__PURE__
   */
  export const run_option_ignore_dce_annotations: string;
  /**
   * - 🚩 **zh**: 更改使用经典 JSX 运行时编译 JSX 元素时调用的函数
   * - **en**: Changes the function called when compiling JSX elements using the classic JSX runtime
   */
  export const run_option_jsx_factory: string;
  /**
   * - 🚩 **zh**: 更改编译 JSX 片段时调用的函数
   * - **en**: Changes the function called when compiling JSX fragments
   */
  export const run_option_jsx_fragment: string;
  /**
   * - 🚩 **zh**: 声明用于导入 jsx 和 jsxs 工厂函数的模块标识符。默认："react"
   * - **en**: Declares the module specifier to be used for importing the jsx and jsxs factory functions. Default: "react"
   */
  export const run_option_jsx_import_source: string;
  /**
   * - 🚩 **zh**: "automatic"（默认）或 "classic"
   * - **en**: "automatic" (default) or "classic"
   */
  export const run_option_jsx_runtime: string;
  /**
   * - 🚩 **zh**: 将 JSX 元素视为具有副作用（禁用纯注释）
   * - **en**: Treat JSX elements as having side effects (disable pure annotations)
   */
  export const run_option_jsx_side_effects: string;
  /**
   * - 🚩 **zh**: 使用 .ext:loader 解析文件，例如 --loader .js:jsx。有效加载器：js, jsx, ts, tsx, json, toml, text, file, wasm, napi
   * - **en**: Parse files with .ext:loader, e.g. --loader .js:jsx. Valid loaders: js, jsx, ts, tsx, json, toml, text, file, wasm, napi
   */
  export const run_option_loader: string;
  /**
   * - 🚩 **zh**: package.json 中查找的主字段。默认取决于 --target
   * - **en**: Main fields to lookup in package.json. Defaults to --target dependent
   */
  export const run_option_main_fields: string;
  /**
   * - 🚩 **zh**: 禁止在打包器、转译器和运行时中执行宏
   * - **en**: Disable macros from being executed in the bundler, transpiler and runtime
   */
  export const run_option_no_macros: string;
  /**
   * - 🚩 **zh**: 解析文件时保留符号链接
   * - **en**: Preserve symlinks when resolving files
   */
  export const run_option_preserve_symlinks: string;
  /**
   * - 🚩 **zh**: 解析主入口点时保留符号链接
   * - **en**: Preserve symlinks when resolving the main entry point
   */
  export const run_option_preserve_symlinks_main: string;
  /**
   * - 🚩 **zh**: 指定自定义 tsconfig.json。默认 $cwd/tsconfig.json
   * - **en**: Specify custom tsconfig.json. Default $cwd/tsconfig.json
   */
  export const run_option_tsconfig_override: string;
  /**
   * - 🚩 **zh**: 文件
   * - **en**: file
   */
  export const suggestion_file: string;
  /**
   * - 🚩 **zh**: 全局已安装
   * - **en**: globally installed
   */
  export const suggestion_global_installed: string;
  /**
   * - 🚩 **zh**: 已安装
   * - **en**: installed
   */
  export const suggestion_installed: string;
  /**
   * - 🚩 **zh**: 包可执行文件
   * - **en**: package bin
   */
  export const suggestion_package_bin: string;
  /**
   * - 🚩 **zh**: 来自注册表的包
   * - **en**: package from registry
   */
  export const suggestion_package_from_registry: string;
  /**
   * - 🚩 **zh**: 脚本
   * - **en**: script
   */
  export const suggestion_script: string;
  /**
   * - 🚩 **zh**: 在 N 次失败后退出测试套件。未指定数字时默认为 1。
   * - **en**: Exit the test suite after <NUMBER> failures. If you do not specify a number, it defaults to 1.
   */
  export const test_option_bail: string;
  /**
   * - 🚩 **zh**: 只运行受 git 更改影响的测试文件。可选传递要比较的提交或分支。
   * - **en**: Only run test files affected by changed files according to git. Optionally pass a commit or branch to compare against.
   */
  export const test_option_changed: string;
  /**
   * - 🚩 **zh**: 将所有测试视为 test.concurrent() 测试
   * - **en**: Treat all tests as `test.concurrent()` tests
   */
  export const test_option_concurrent: string;
  /**
   * - 🚩 **zh**: 生成覆盖率报告
   * - **en**: Generate a coverage profile
   */
  export const test_option_coverage: string;
  /**
   * - 🚩 **zh**: 覆盖率文件目录，默认 'coverage'
   * - **en**: Directory for coverage files. Defaults to 'coverage'.
   */
  export const test_option_coverage_dir: string;
  /**
   * - 🚩 **zh**: 报告覆盖率格式：'text' 和/或 'lcov'。默认 'text'。
   * - **en**: Report coverage in 'text' and/or 'lcov'. Defaults to 'text'.
   */
  export const test_option_coverage_reporter: string;
  /**
   * - 🚩 **zh**: 启用 dots 报告器。--reporter=dots 的简写。
   * - **en**: Enable dots reporter. Shorthand for --reporter=dots.
   */
  export const test_option_dots: string;
  /**
   * - 🚩 **zh**: 在每个干净的全局对象中运行每个测试文件。一个文件泄漏的句柄不会影响另一个。
   * - **en**: Run each test file in a fresh global object. Leaked handles from one file cannot affect another.
   */
  export const test_option_isolate: string;
  /**
   * - 🚩 **zh**: 同时执行的最大并发测试数，默认 20
   * - **en**: Maximum number of concurrent tests to execute at once. Default is 20.
   */
  export const test_option_max_concurrency: string;
  /**
   * - 🚩 **zh**: 只运行标记为 test.only() 或 describe.only() 的测试
   * - **en**: Run only tests that are marked with "test.only()" or "describe.only()"
   */
  export const test_option_only: string;
  /**
   * - 🚩 **zh**: 仅显示失败的测试，隐藏通过的测试
   * - **en**: Only display test failures, hiding passing tests.
   */
  export const test_option_only_failures: string;
  /**
   * - 🚩 **zh**: 使用 N 个工作进程并行运行测试文件。意味着 --isolate。默认为 CPU 核心数。
   * - **en**: Run test files in parallel using N worker processes. Implies --isolate. Defaults to CPU core count.
   */
  export const test_option_parallel: string;
  /**
   * - 🚩 **zh**: 第一个 --parallel 工作进程必须忙碌多少毫秒后才能启动其余进程。0 立即全部启动。默认 5。
   * - **en**: Milliseconds the first --parallel worker must be busy before spawning the rest. 0 spawns all immediately. Default 5.
   */
  export const test_option_parallel_delay: string;
  /**
   * - 🚩 **zh**: 当未找到测试时以代码 0 退出
   * - **en**: Exit with code 0 when no tests are found
   */
  export const test_option_pass_with_no_tests: string;
  /**
   * - 🚩 **zh**: 要忽略的测试文件路径的 glob 模式
   * - **en**: Glob patterns for test file paths to ignore.
   */
  export const test_option_path_ignore_patterns: string;
  /**
   * - 🚩 **zh**: 随机顺序运行测试
   * - **en**: Run tests in random order
   */
  export const test_option_randomize: string;
  /**
   * - 🚩 **zh**: 测试输出报告器格式。可用：'junit'（需要 --reporter-outfile）、'dots'。默认控制台输出。
   * - **en**: Test output reporter format. Available: 'junit' (requires --reporter-outfile), 'dots'. Default: console output.
   */
  export const test_option_reporter: string;
  /**
   * - 🚩 **zh**: 报告器格式的输出文件路径（与 --reporter 一起使用）
   * - **en**: Output file path for the reporter format (required with --reporter).
   */
  export const test_option_reporter_outfile: string;
  /**
   * - 🚩 **zh**: 重新运行每个测试文件 N 次，帮助捕捉某些 bug
   * - **en**: Re-run each test file <NUMBER> times, helps catch certain bugs
   */
  export const test_option_rerun_each: string;
  /**
   * - 🚩 **zh**: 所有测试的默认重试次数，可被每个测试的 { retry: N } 覆盖
   * - **en**: Default retry count for all tests, overridden by per-test { retry: N }
   */
  export const test_option_retry: string;
  /**
   * - 🚩 **zh**: 设置测试随机化的随机种子
   * - **en**: Set the random seed for test randomization
   */
  export const test_option_seed: string;
  /**
   * - 🚩 **zh**: 运行测试文件的子集，例如 '--shard=1/3' 运行三个分片中的第一个。用于在多个 CI 任务间拆分测试。
   * - **en**: Run a subset of test files, e.g. '--shard=1/3' runs the first of three shards. Useful for splitting tests across multiple CI jobs.
   */
  export const test_option_shard: string;
  /**
   * - 🚩 **zh**: 只运行名称匹配给定正则表达式的测试
   * - **en**: Run only tests with a name that matches the given regex.
   */
  export const test_option_test_name_pattern: string;
  /**
   * - 🚩 **zh**: （内部）作为 --parallel 工作进程运行，通过 IPC 接收文件
   * - **en**: (internal) Run as a --parallel worker, receiving files over IPC.
   */
  export const test_option_test_worker: string;
  /**
   * - 🚩 **zh**: 设置每个测试的超时毫秒数，默认 5000
   * - **en**: Set the per-test timeout in milliseconds, default is 5000.
   */
  export const test_option_timeout: string;
  /**
   * - 🚩 **zh**: 包含标记为 test.todo() 的测试
   * - **en**: Include tests that are marked with "test.todo()"
   */
  export const test_option_todo: string;
  /**
   * - 🚩 **zh**: 更新快照文件
   * - **en**: Update snapshot files
   */
  export const test_option_update_snapshots: string;
  /**
   * - 🚩 **zh**: 显示交互式过时包列表以供选择更新
   * - **en**: Show an interactive list of outdated packages to select for update
   */
  export const update_option_interactive: string;
  /**
   * - 🚩 **zh**: 将包更新到最新版本
   * - **en**: Update packages to their latest versions
   */
  export const update_option_latest: string;
  /**
   * - 🚩 **zh**: 更新所有工作区中的包
   * - **en**: Update packages in all workspaces
   */
  export const update_option_recursive: string;
  /**
   * - 🚩 **zh**: 安装最新的 canary 版 Bun
   * - **en**: Install the most recent canary version of Bun
   */
  export const upgrade_option_canary: string;
  /**
   * - 🚩 **zh**: 要显示的依赖树最大深度
   * - **en**: Maximum depth of the dependency tree to display
   */
  export const why_option_depth: string;
  /**
   * - 🚩 **zh**: 仅显示顶层依赖树而不显示嵌套
   * - **en**: Show only the top dependency tree instead of nested ones
   */
  export const why_option_top: string;
  /**
   * - 🚩 **zh**: 当二进制名称与包名称不同时指定要安装的包
   * - **en**: Specify package to install when binary name differs from package name
   */
  export const x_option_package: string;
  /**
   * - 🚩 **zh**: 在安装期间启用详细输出
   * - **en**: Enable verbose output during installation
   */
  export const x_option_verbose: string;
}

declare module "virtual:i18n/git" {
  /**
   * - 🚩 **zh**: 将文件内容添加到暂存区
   * - **en**: Add file contents to the index
   */
  export const cmd_add: string;
  /**
   * - 🚩 **zh**: 用二分查找定位引入 bug 的提交
   * - **en**: Use binary search to find the commit that introduced a bug
   */
  export const cmd_bisect: string;
  /**
   * - 🚩 **zh**: 标记当前提交为有问题
   * - **en**: Mark commit as bad
   */
  export const cmd_bisect_bad: string;
  /**
   * - 🚩 **zh**: 标记当前提交为正常
   * - **en**: Mark commit as good
   */
  export const cmd_bisect_good: string;
  /**
   * - 🚩 **zh**: 查看二分查找日志
   * - **en**: Show bisect log
   */
  export const cmd_bisect_log: string;
  /**
   * - 🚩 **zh**: 结束二分查找
   * - **en**: Finish bisect session
   */
  export const cmd_bisect_reset: string;
  /**
   * - 🚩 **zh**: 运行脚本自动化二分查找
   * - **en**: Run script to automate bisect
   */
  export const cmd_bisect_run: string;
  /**
   * - 🚩 **zh**: 跳过当前提交
   * - **en**: Skip current commit
   */
  export const cmd_bisect_skip: string;
  /**
   * - 🚩 **zh**: 开始二分查找
   * - **en**: Start bisect session
   */
  export const cmd_bisect_start: string;
  /**
   * - 🚩 **zh**: 列出、创建或删除分支
   * - **en**: List, create, or delete branches
   */
  export const cmd_branch: string;
  /**
   * - 🚩 **zh**: 应用已有提交引入的变更
   * - **en**: Apply the changes introduced by some existing commits
   */
  export const cmd_cherry_pick: string;
  /**
   * - 🚩 **zh**: 克隆仓库到新目录
   * - **en**: Clone a repository into a new directory
   */
  export const cmd_clone: string;
  /**
   * - 🚩 **zh**: 记录变更到仓库
   * - **en**: Record changes to the repository
   */
  export const cmd_commit: string;
  /**
   * - 🚩 **zh**: 获取和设置仓库或全局选项
   * - **en**: Get and set repository or global options
   */
  export const cmd_config: string;
  /**
   * - 🚩 **zh**: 在编辑器中打开配置
   * - **en**: Open config in editor
   */
  export const cmd_config_edit: string;
  /**
   * - 🚩 **zh**: 获取配置值
   * - **en**: Get a config value
   */
  export const cmd_config_get: string;
  /**
   * - 🚩 **zh**: 列出所有配置变量
   * - **en**: List all config variables
   */
  export const cmd_config_list: string;
  /**
   * - 🚩 **zh**: 删除配置节
   * - **en**: Remove a config section
   */
  export const cmd_config_remove_section: string;
  /**
   * - 🚩 **zh**: 重命名配置节
   * - **en**: Rename a config section
   */
  export const cmd_config_rename_section: string;
  /**
   * - 🚩 **zh**: 设置配置值
   * - **en**: Set a config value
   */
  export const cmd_config_set: string;
  /**
   * - 🚩 **zh**: 删除配置变量
   * - **en**: Remove a config variable
   */
  export const cmd_config_unset: string;
  /**
   * - 🚩 **zh**: 显示提交之间、提交与工作区之间的差异
   * - **en**: Show changes between commits, commit and working tree, etc
   */
  export const cmd_diff: string;
  /**
   * - 🚩 **zh**: 从另一个仓库下载对象和引用
   * - **en**: Download objects and refs from another repository
   */
  export const cmd_fetch: string;
  /**
   * - 🚩 **zh**: 分布式版本控制系统
   * - **en**: Distributed version control system
   */
  export const cmd_git: string;
  /**
   * - 🚩 **zh**: 打印匹配模式的行
   * - **en**: Print lines matching a pattern
   */
  export const cmd_grep: string;
  /**
   * - 🚩 **zh**: 创建空 Git 仓库或重新初始化已有仓库
   * - **en**: Create an empty Git repository or reinitialize an existing one
   */
  export const cmd_init: string;
  /**
   * - 🚩 **zh**: 显示提交日志
   * - **en**: Show commit logs
   */
  export const cmd_log: string;
  /**
   * - 🚩 **zh**: 合并两个或多个开发历史
   * - **en**: Join two or more development histories together
   */
  export const cmd_merge: string;
  /**
   * - 🚩 **zh**: 移动或重命名文件、目录或符号链接
   * - **en**: Move or rename a file, a directory, or a symlink
   */
  export const cmd_mv: string;
  /**
   * - 🚩 **zh**: 从远程仓库拉取并合并
   * - **en**: Fetch from and integrate with another repository or a local branch
   */
  export const cmd_pull: string;
  /**
   * - 🚩 **zh**: 推送本地引用到远程仓库
   * - **en**: Update remote refs along with associated objects
   */
  export const cmd_push: string;
  /**
   * - 🚩 **zh**: 在另一个基础提交上重新应用提交
   * - **en**: Reapply commits on top of another base tip
   */
  export const cmd_rebase: string;
  /**
   * - 🚩 **zh**: 管理远程仓库
   * - **en**: Manage set of tracked repositories
   */
  export const cmd_remote: string;
  /**
   * - 🚩 **zh**: 添加远程仓库
   * - **en**: Add a remote
   */
  export const cmd_remote_add: string;
  /**
   * - 🚩 **zh**: 获取远程仓库 URL
   * - **en**: Get the URLs for a remote
   */
  export const cmd_remote_get_url: string;
  /**
   * - 🚩 **zh**: 删除过期的远程跟踪分支
   * - **en**: Delete stale remote-tracking branches
   */
  export const cmd_remote_prune: string;
  /**
   * - 🚩 **zh**: 删除远程仓库
   * - **en**: Remove a remote
   */
  export const cmd_remote_remove: string;
  /**
   * - 🚩 **zh**: 重命名远程仓库
   * - **en**: Rename a remote
   */
  export const cmd_remote_rename: string;
  /**
   * - 🚩 **zh**: 修改远程跟踪的分支列表
   * - **en**: Change the list of branches tracked by a remote
   */
  export const cmd_remote_set_branches: string;
  /**
   * - 🚩 **zh**: 设置远程默认分支
   * - **en**: Set the default branch for a remote
   */
  export const cmd_remote_set_head: string;
  /**
   * - 🚩 **zh**: 修改远程仓库 URL
   * - **en**: Change the URLs for a remote
   */
  export const cmd_remote_set_url: string;
  /**
   * - 🚩 **zh**: 显示远程仓库信息
   * - **en**: Show information about a remote
   */
  export const cmd_remote_show: string;
  /**
   * - 🚩 **zh**: 拉取所有远程更新
   * - **en**: Fetch updates for remotes
   */
  export const cmd_remote_update: string;
  /**
   * - 🚩 **zh**: 将 HEAD 或暂存区重置到已知状态
   * - **en**: Set HEAD or the index to a known state
   */
  export const cmd_reset: string;
  /**
   * - 🚩 **zh**: 恢复工作区文件
   * - **en**: Restore working tree files
   */
  export const cmd_restore: string;
  /**
   * - 🚩 **zh**: 撤销已有提交
   * - **en**: Revert some existing commits
   */
  export const cmd_revert: string;
  /**
   * - 🚩 **zh**: 从工作区和暂存区删除文件
   * - **en**: Remove files from the working tree and from the index
   */
  export const cmd_rm: string;
  /**
   * - 🚩 **zh**: 显示各类对象信息
   * - **en**: Show various types of objects
   */
  export const cmd_show: string;
  /**
   * - 🚩 **zh**: 将脏工作区的变更暂存起来
   * - **en**: Stash the changes in a dirty working directory away
   */
  export const cmd_stash: string;
  /**
   * - 🚩 **zh**: 应用暂存条目
   * - **en**: Apply a stash entry
   */
  export const cmd_stash_apply: string;
  /**
   * - 🚩 **zh**: 从暂存创建分支
   * - **en**: Create a branch from a stash
   */
  export const cmd_stash_branch: string;
  /**
   * - 🚩 **zh**: 删除所有暂存条目
   * - **en**: Remove all stash entries
   */
  export const cmd_stash_clear: string;
  /**
   * - 🚩 **zh**: 删除一个暂存条目
   * - **en**: Remove a stash entry
   */
  export const cmd_stash_drop: string;
  /**
   * - 🚩 **zh**: 列出所有暂存条目
   * - **en**: List stash entries
   */
  export const cmd_stash_list: string;
  /**
   * - 🚩 **zh**: 应用并删除暂存条目
   * - **en**: Apply and remove a stash entry
   */
  export const cmd_stash_pop: string;
  /**
   * - 🚩 **zh**: 保存变更到暂存
   * - **en**: Save changes to stash
   */
  export const cmd_stash_push: string;
  /**
   * - 🚩 **zh**: 显示暂存差异
   * - **en**: Show stash diff
   */
  export const cmd_stash_show: string;
  /**
   * - 🚩 **zh**: 显示工作区状态
   * - **en**: Show the working tree status
   */
  export const cmd_status: string;
  /**
   * - 🚩 **zh**: 初始化、更新或检查子模块
   * - **en**: Initialize, update or inspect submodules
   */
  export const cmd_submodule: string;
  /**
   * - 🚩 **zh**: 添加子模块
   * - **en**: Add a submodule
   */
  export const cmd_submodule_add: string;
  /**
   * - 🚩 **zh**: 注销子模块
   * - **en**: Unregister submodules
   */
  export const cmd_submodule_deinit: string;
  /**
   * - 🚩 **zh**: 在每个子模块中运行命令
   * - **en**: Run a command in each submodule
   */
  export const cmd_submodule_foreach: string;
  /**
   * - 🚩 **zh**: 初始化子模块
   * - **en**: Initialize submodules
   */
  export const cmd_submodule_init: string;
  /**
   * - 🚩 **zh**: 设置子模块默认分支
   * - **en**: Set the default branch for a submodule
   */
  export const cmd_submodule_set_branch: string;
  /**
   * - 🚩 **zh**: 设置子模块 URL
   * - **en**: Set the URL for a submodule
   */
  export const cmd_submodule_set_url: string;
  /**
   * - 🚩 **zh**: 显示子模块状态
   * - **en**: Show submodule status
   */
  export const cmd_submodule_status: string;
  /**
   * - 🚩 **zh**: 显示子模块摘要
   * - **en**: Show submodule summary
   */
  export const cmd_submodule_summary: string;
  /**
   * - 🚩 **zh**: 同步子模块 URL
   * - **en**: Sync submodule URLs
   */
  export const cmd_submodule_sync: string;
  /**
   * - 🚩 **zh**: 更新子模块
   * - **en**: Update submodules
   */
  export const cmd_submodule_update: string;
  /**
   * - 🚩 **zh**: 切换分支
   * - **en**: Switch branches
   */
  export const cmd_switch: string;
  /**
   * - 🚩 **zh**: 创建、列出、删除或验证标签
   * - **en**: Create, list, delete or verify tags
   */
  export const cmd_tag: string;
  /**
   * - 🚩 **zh**: 管理多个工作区
   * - **en**: Manage multiple working trees
   */
  export const cmd_worktree: string;
  /**
   * - 🚩 **zh**: 创建新工作区
   * - **en**: Create a new working tree
   */
  export const cmd_worktree_add: string;
  /**
   * - 🚩 **zh**: 列出工作区
   * - **en**: List working trees
   */
  export const cmd_worktree_list: string;
  /**
   * - 🚩 **zh**: 锁定工作区
   * - **en**: Lock a working tree
   */
  export const cmd_worktree_lock: string;
  /**
   * - 🚩 **zh**: 移动工作区
   * - **en**: Move a working tree
   */
  export const cmd_worktree_move: string;
  /**
   * - 🚩 **zh**: 清理工作区信息
   * - **en**: Prune working tree information
   */
  export const cmd_worktree_prune: string;
  /**
   * - 🚩 **zh**: 删除工作区
   * - **en**: Remove a working tree
   */
  export const cmd_worktree_remove: string;
  /**
   * - 🚩 **zh**: 修复工作区管理文件
   * - **en**: Repair working tree administrative files
   */
  export const cmd_worktree_repair: string;
  /**
   * - 🚩 **zh**: 解锁工作区
   * - **en**: Unlock a working tree
   */
  export const cmd_worktree_unlock: string;
  /**
   * - 🚩 **zh**: 中止当前操作
   * - **en**: Abort current operation
   */
  export const opt_abort: string;
  /**
   * - 🚩 **zh**: 添加 URL
   * - **en**: Add URL
   */
  export const opt_add_url: string;
  /**
   * - 🚩 **zh**: 全部
   * - **en**: All
   */
  export const opt_all: string;
  /**
   * - 🚩 **zh**: 允许空提交
   * - **en**: Allow empty commit
   */
  export const opt_allow_empty: string;
  /**
   * - 🚩 **zh**: 允许快进
   * - **en**: Allow fast-forward
   */
  export const opt_allow_ff: string;
  /**
   * - 🚩 **zh**: 修改上一次提交
   * - **en**: Amend previous commit
   */
  export const opt_amend: string;
  /**
   * - 🚩 **zh**: 创建附注标签
   * - **en**: Create annotated tag
   */
  export const opt_annotate: string;
  /**
   * - 🚩 **zh**: 在提交信息中追加原始提交名
   * - **en**: Append commit name to message
   */
  export const opt_append_commit: string;
  /**
   * - 🚩 **zh**: 按作者过滤
   * - **en**: Filter by author
   */
  export const opt_author: string;
  /**
   * - 🚩 **zh**: 自动压缩 fixup 提交
   * - **en**: Auto squash fixup commits
   */
  export const opt_autosquash: string;
  /**
   * - 🚩 **zh**: 自动暂存/恢复
   * - **en**: Auto stash/unstash
   */
  export const opt_autostash: string;
  /**
   * - 🚩 **zh**: 创建裸仓库
   * - **en**: Create bare repository
   */
  export const opt_bare: string;
  /**
   * - 🚩 **zh**: 分支名称
   * - **en**: Branch name
   */
  export const opt_branch: string;
  /**
   * - 🚩 **zh**: 使用缓存/暂存区
   * - **en**: Use cached/index
   */
  export const opt_cached: string;
  /**
   * - 🚩 **zh**: 彩色输出
   * - **en**: Color output
   */
  export const opt_color: string;
  /**
   * - 🚩 **zh**: 提交所有已修改文件
   * - **en**: Commit all changed files
   */
  export const opt_commit_all: string;
  /**
   * - 🚩 **zh**: 设置配置键值
   * - **en**: Set config key=value
   */
  export const opt_config_kv: string;
  /**
   * - 🚩 **zh**: 继续当前操作
   * - **en**: Continue current operation
   */
  export const opt_continue: string;
  /**
   * - 🚩 **zh**: 复制分支
   * - **en**: Copy branch
   */
  export const opt_copy: string;
  /**
   * - 🚩 **zh**: 显示匹配数量
   * - **en**: Show match count
   */
  export const opt_count: string;
  /**
   * - 🚩 **zh**: 创建并切换到新分支
   * - **en**: Create and switch to new branch
   */
  export const opt_create_branch: string;
  /**
   * - 🚩 **zh**: 创建新分支
   * - **en**: Create new branch
   */
  export const opt_create_new_branch: string;
  /**
   * - 🚩 **zh**: 显示引用装饰
   * - **en**: Decorate refs
   */
  export const opt_decorate: string;
  /**
   * - 🚩 **zh**: 删除
   * - **en**: Delete
   */
  export const opt_delete: string;
  /**
   * - 🚩 **zh**: 删除 URL
   * - **en**: Delete URL
   */
  export const opt_delete_url: string;
  /**
   * - 🚩 **zh**: 浅克隆深度
   * - **en**: Shallow clone depth
   */
  export const opt_depth: string;
  /**
   * - 🚩 **zh**: 分离 HEAD
   * - **en**: Detach HEAD
   */
  export const opt_detach: string;
  /**
   * - 🚩 **zh**: 预演，不实际执行
   * - **en**: Dry run
   */
  export const opt_dry_run: string;
  /**
   * - 🚩 **zh**: 编辑信息
   * - **en**: Edit message
   */
  export const opt_edit: string;
  /**
   * - 🚩 **zh**: 每次提交后执行命令
   * - **en**: Run command after each commit
   */
  export const opt_exec: string;
  /**
   * - 🚩 **zh**: 添加后立即拉取
   * - **en**: Fetch after adding
   */
  export const opt_fetch_after_add: string;
  /**
   * - 🚩 **zh**: 仅允许快进合并
   * - **en**: Fast-forward only
   */
  export const opt_ff_only: string;
  /**
   * - 🚩 **zh**: 仅显示文件名
   * - **en**: Show only filenames
   */
  export const opt_files_with_matches: string;
  /**
   * - 🚩 **zh**: 对象过滤器
   * - **en**: Object filter
   */
  export const opt_filter: string;
  /**
   * - 🚩 **zh**: 使用固定字符串匹配
   * - **en**: Use fixed string matching
   */
  export const opt_fixed_value: string;
  /**
   * - 🚩 **zh**: 修正提交
   * - **en**: Fixup commit
   */
  export const opt_fixup: string;
  /**
   * - 🚩 **zh**: 跟踪文件重命名
   * - **en**: Follow file renames
   */
  export const opt_follow: string;
  /**
   * - 🚩 **zh**: 强制执行
   * - **en**: Force
   */
  export const opt_force: string;
  /**
   * - 🚩 **zh**: 强制创建并切换
   * - **en**: Force create and switch
   */
  export const opt_force_create_branch: string;
  /**
   * - 🚩 **zh**: 强制创建/重置分支
   * - **en**: Force create/reset branch
   */
  export const opt_force_create_reset_branch: string;
  /**
   * - 🚩 **zh**: 强制删除分支
   * - **en**: Force delete branch
   */
  export const opt_force_delete: string;
  /**
   * - 🚩 **zh**: 仅在包含远程更新时强制推送
   * - **en**: Force only if remote updates are integrated
   */
  export const opt_force_if_includes: string;
  /**
   * - 🚩 **zh**: 强制重命名分支
   * - **en**: Force rename branch
   */
  export const opt_force_move: string;
  /**
   * - 🚩 **zh**: 带租约检查的强制推送
   * - **en**: Force push with lease check
   */
  export const opt_force_with_lease: string;
  /**
   * - 🚩 **zh**: 获取所有值
   * - **en**: Get all values
   */
  export const opt_get_all: string;
  /**
   * - 🚩 **zh**: 获取匹配正则的值
   * - **en**: Get values matching regexp
   */
  export const opt_get_regexp: string;
  /**
   * - 🚩 **zh**: 设置 git 目录
   * - **en**: Set git dir
   */
  export const opt_git_dir: string;
  /**
   * - 🚩 **zh**: 使用全局配置
   * - **en**: Use global config
   */
  export const opt_global: string;
  /**
   * - 🚩 **zh**: 显示提交图
   * - **en**: Show commit graph
   */
  export const opt_graph: string;
  /**
   * - 🚩 **zh**: 按提交信息过滤
   * - **en**: Filter by commit message
   */
  export const opt_grep_log: string;
  /**
   * - 🚩 **zh**: 重置 HEAD、暂存区和工作区
   * - **en**: Reset HEAD, index and working tree
   */
  export const opt_hard: string;
  /**
   * - 🚩 **zh**: 忽略空白
   * - **en**: Ignore whitespace
   */
  export const opt_ignore_all_space: string;
  /**
   * - 🚩 **zh**: 忽略大小写
   * - **en**: Case insensitive
   */
  export const opt_ignore_case: string;
  /**
   * - 🚩 **zh**: 显示被忽略的文件
   * - **en**: Show ignored files
   */
  export const opt_ignored: string;
  /**
   * - 🚩 **zh**: 包含未跟踪文件
   * - **en**: Include untracked files
   */
  export const opt_include_untracked: string;
  /**
   * - 🚩 **zh**: 同时恢复暂存区
   * - **en**: Restore index too
   */
  export const opt_index: string;
  /**
   * - 🚩 **zh**: 初始化子模块
   * - **en**: Initialize submodules
   */
  export const opt_init: string;
  /**
   * - 🚩 **zh**: 初始分支名称
   * - **en**: Initial branch name
   */
  export const opt_initial_branch: string;
  /**
   * - 🚩 **zh**: 记录将要添加的路径
   * - **en**: Record intent to add
   */
  export const opt_intent_to_add: string;
  /**
   * - 🚩 **zh**: 交互模式
   * - **en**: Interactive mode
   */
  export const opt_interactive: string;
  /**
   * - 🚩 **zh**: 交互式 rebase
   * - **en**: Interactive rebase
   */
  export const opt_interactive_rebase: string;
  /**
   * - 🚩 **zh**: 并行任务数
   * - **en**: Number of parallel jobs
   */
  export const opt_jobs: string;
  /**
   * - 🚩 **zh**: 重置 HEAD 但保留本地变更
   * - **en**: Reset HEAD but keep local changes
   */
  export const opt_keep: string;
  /**
   * - 🚩 **zh**: 保留暂存区
   * - **en**: Keep index
   */
  export const opt_keep_index: string;
  /**
   * - 🚩 **zh**: 限制提交数量
   * - **en**: Limit number of commits
   */
  export const opt_limit: string;
  /**
   * - 🚩 **zh**: 显示行号
   * - **en**: Show line numbers
   */
  export const opt_line_number: string;
  /**
   * - 🚩 **zh**: 列出全部
   * - **en**: List all
   */
  export const opt_list: string;
  /**
   * - 🚩 **zh**: 使用本地配置
   * - **en**: Use local config
   */
  export const opt_local: string;
  /**
   * - 🚩 **zh**: 锁定
   * - **en**: Lock reason
   */
  export const opt_lock: string;
  /**
   * - 🚩 **zh**: 选择主线父提交
   * - **en**: Select mainline parent
   */
  export const opt_mainline: string;
  /**
   * - 🚩 **zh**: 与新分支进行三路合并
   * - **en**: 3-way merge with new branch
   */
  export const opt_merge_3way: string;
  /**
   * - 🚩 **zh**: 使用合并策略
   * - **en**: Use merge strategy
   */
  export const opt_merge_strategy: string;
  /**
   * - 🚩 **zh**: 列出已合并分支
   * - **en**: List merged branches
   */
  export const opt_merged: string;
  /**
   * - 🚩 **zh**: 提交信息
   * - **en**: Commit message
   */
  export const opt_message: string;
  /**
   * - 🚩 **zh**: 镜像仓库
   * - **en**: Mirror repository
   */
  export const opt_mirror: string;
  /**
   * - 🚩 **zh**: 重置 HEAD 和暂存区
   * - **en**: Reset HEAD and index
   */
  export const opt_mixed: string;
  /**
   * - 🚩 **zh**: 重命名分支
   * - **en**: Rename branch
   */
  export const opt_move: string;
  /**
   * - 🚩 **zh**: 仅显示文件名
   * - **en**: Show only file names
   */
  export const opt_name_only: string;
  /**
   * - 🚩 **zh**: 显示文件名和状态
   * - **en**: Show file names and status
   */
  export const opt_name_status: string;
  /**
   * - 🚩 **zh**: 克隆后不检出
   * - **en**: No checkout after clone
   */
  export const opt_no_checkout: string;
  /**
   * - 🚩 **zh**: 不自动提交
   * - **en**: Do not commit
   */
  export const opt_no_commit: string;
  /**
   * - 🚩 **zh**: 禁止快进合并
   * - **en**: No fast-forward
   */
  export const opt_no_ff: string;
  /**
   * - 🚩 **zh**: 列出未合并分支
   * - **en**: List unmerged branches
   */
  export const opt_no_merged: string;
  /**
   * - 🚩 **zh**: 不使用分页器
   * - **en**: Do not pipe to pager
   */
  export const opt_no_pager: string;
  /**
   * - 🚩 **zh**: 不使用替换引用
   * - **en**: Do not use replace refs
   */
  export const opt_no_replace_objects: string;
  /**
   * - 🚩 **zh**: 跳过 pre-commit 和 commit-msg 钩子
   * - **en**: Bypass pre-commit and commit-msg hooks
   */
  export const opt_no_verify: string;
  /**
   * - 🚩 **zh**: 每个提交一行
   * - **en**: One line per commit
   */
  export const opt_oneline: string;
  /**
   * - 🚩 **zh**: 变基到指定提交
   * - **en**: Rebase onto
   */
  export const opt_onto: string;
  /**
   * - 🚩 **zh**: 远程名称
   * - **en**: Remote name
   */
  export const opt_origin: string;
  /**
   * - 🚩 **zh**: 创建孤立分支
   * - **en**: Create orphan branch
   */
  export const opt_orphan: string;
  /**
   * - 🚩 **zh**: 通过分页器输出
   * - **en**: Pipe output to pager
   */
  export const opt_paginate: string;
  /**
   * - 🚩 **zh**: 交互式选择代码块
   * - **en**: Interactively select hunks
   */
  export const opt_patch: string;
  /**
   * - 🚩 **zh**: 匹配模式
   * - **en**: Pattern
   */
  export const opt_pattern: string;
  /**
   * - 🚩 **zh**: 机器可读输出
   * - **en**: Machine-readable output
   */
  export const opt_porcelain: string;
  /**
   * - 🚩 **zh**: 清理过期的远程跟踪分支
   * - **en**: Prune stale remote-tracking branches
   */
  export const opt_prune: string;
  /**
   * - 🚩 **zh**: 清理远程已删除的本地标签
   * - **en**: Prune local tags no longer on remote
   */
  export const opt_prune_tags: string;
  /**
   * - 🚩 **zh**: 推送 URL
   * - **en**: Push URL
   */
  export const opt_push: string;
  /**
   * - 🚩 **zh**: 静默模式
   * - **en**: Be more quiet
   */
  export const opt_quiet: string;
  /**
   * - 🚩 **zh**: 从文件读取提交信息
   * - **en**: Read message from file
   */
  export const opt_read_file: string;
  /**
   * - 🚩 **zh**: 锁定原因
   * - **en**: Lock reason message
   */
  export const opt_reason: string;
  /**
   * - 🚩 **zh**: 使用 rebase 代替 merge
   * - **en**: Rebase instead of merge
   */
  export const opt_rebase: string;
  /**
   * - 🚩 **zh**: 递归处理子模块
   * - **en**: Recurse into submodules
   */
  export const opt_recurse_submodules: string;
  /**
   * - 🚩 **zh**: 递归
   * - **en**: Recursive
   */
  export const opt_recursive: string;
  /**
   * - 🚩 **zh**: 允许递归删除
   * - **en**: Allow recursive removal
   */
  export const opt_recursive_remove: string;
  /**
   * - 🚩 **zh**: 使用远程跟踪分支
   * - **en**: Use remote tracking branch
   */
  export const opt_remote: string;
  /**
   * - 🚩 **zh**: 列出远程分支
   * - **en**: List remote branches
   */
  export const opt_remotes: string;
  /**
   * - 🚩 **zh**: 替换所有匹配值
   * - **en**: Replace all matching values
   */
  export const opt_replace_all: string;
  /**
   * - 🚩 **zh**: 复用指定提交的信息
   * - **en**: Reuse message from commit
   */
  export const opt_reuse_message: string;
  /**
   * - 🚩 **zh**: 在指定路径下运行
   * - **en**: Run as if started in <path>
   */
  export const opt_run_in_path: string;
  /**
   * - 🚩 **zh**: 分离 git 目录
   * - **en**: Separate git dir
   */
  export const opt_separate_git_dir: string;
  /**
   * - 🚩 **zh**: 设置推送/拉取的上游
   * - **en**: Set upstream for push/pull
   */
  export const opt_set_upstream: string;
  /**
   * - 🚩 **zh**: 简短格式
   * - **en**: Short format
   */
  export const opt_short: string;
  /**
   * - 🚩 **zh**: 显示当前分支
   * - **en**: Show current branch
   */
  export const opt_show_current: string;
  /**
   * - 🚩 **zh**: 显示配置来源
   * - **en**: Show config origin
   */
  export const opt_show_origin: string;
  /**
   * - 🚩 **zh**: 显示配置作用域
   * - **en**: Show config scope
   */
  export const opt_show_scope: string;
  /**
   * - 🚩 **zh**: 显示暂存信息
   * - **en**: Show stash info
   */
  export const opt_show_stash: string;
  /**
   * - 🚩 **zh**: GPG 签名
   * - **en**: GPG sign
   */
  export const opt_sign: string;
  /**
   * - 🚩 **zh**: 添加 Signed-off-by 行
   * - **en**: Add Signed-off-by trailer
   */
  export const opt_signoff: string;
  /**
   * - 🚩 **zh**: 显示指定日期之后的提交
   * - **en**: Show commits since date
   */
  export const opt_since: string;
  /**
   * - 🚩 **zh**: 仅克隆单个分支
   * - **en**: Clone single branch
   */
  export const opt_single_branch: string;
  /**
   * - 🚩 **zh**: 跳过当前提交
   * - **en**: Skip current commit
   */
  export const opt_skip: string;
  /**
   * - 🚩 **zh**: 仅重置 HEAD
   * - **en**: Reset only HEAD
   */
  export const opt_soft: string;
  /**
   * - 🚩 **zh**: 从指定树恢复
   * - **en**: Restore from tree-ish
   */
  export const opt_source: string;
  /**
   * - 🚩 **zh**: 稀疏检出
   * - **en**: Sparse checkout
   */
  export const opt_sparse: string;
  /**
   * - 🚩 **zh**: 压缩提交
   * - **en**: Squash commits
   */
  export const opt_squash: string;
  /**
   * - 🚩 **zh**: 仅处理已暂存的变更
   * - **en**: Staged changes only
   */
  export const opt_staged: string;
  /**
   * - 🚩 **zh**: 显示差异统计
   * - **en**: Show diffstat
   */
  export const opt_stat: string;
  /**
   * - 🚩 **zh**: 合并策略
   * - **en**: Merge strategy
   */
  export const opt_strategy: string;
  /**
   * - 🚩 **zh**: 子模块名称
   * - **en**: Submodule name
   */
  export const opt_submodule_name: string;
  /**
   * - 🚩 **zh**: 使用系统配置
   * - **en**: Use system config
   */
  export const opt_system: string;
  /**
   * - 🚩 **zh**: 包含标签
   * - **en**: Include tags
   */
  export const opt_tags: string;
  /**
   * - 🚩 **zh**: 设置分支跟踪
   * - **en**: Set branch tracking
   */
  export const opt_track: string;
  /**
   * - 🚩 **zh**: 配置值类型
   * - **en**: Config value type
   */
  export const opt_type: string;
  /**
   * - 🚩 **zh**: 上下文行数
   * - **en**: Context lines
   */
  export const opt_unified: string;
  /**
   * - 🚩 **zh**: 删除值
   * - **en**: Unset value
   */
  export const opt_unset: string;
  /**
   * - 🚩 **zh**: 删除所有匹配值
   * - **en**: Unset all values
   */
  export const opt_unset_all: string;
  /**
   * - 🚩 **zh**: 取消上游设置
   * - **en**: Unset upstream
   */
  export const opt_unset_upstream: string;
  /**
   * - 🚩 **zh**: 显示指定日期之前的提交
   * - **en**: Show commits until date
   */
  export const opt_until: string;
  /**
   * - 🚩 **zh**: 显示未跟踪文件
   * - **en**: Show untracked files
   */
  export const opt_untracked_files: string;
  /**
   * - 🚩 **zh**: 更新已跟踪文件
   * - **en**: Update tracked files
   */
  export const opt_update: string;
  /**
   * - 🚩 **zh**: 更新指向变基提交的分支
   * - **en**: Update branches pointing to rebased commits
   */
  export const opt_update_refs: string;
  /**
   * - 🚩 **zh**: 使用默认分支
   * - **en**: Use default branch
   */
  export const opt_use_default_branch: string;
  /**
   * - 🚩 **zh**: 显示详细信息
   * - **en**: Be more verbose
   */
  export const opt_verbose: string;
  /**
   * - 🚩 **zh**: 验证标签签名
   * - **en**: Verify tag signature
   */
  export const opt_verify_tag: string;
  /**
   * - 🚩 **zh**: 显示版本
   * - **en**: Print version
   */
  export const opt_version: string;
  /**
   * - 🚩 **zh**: 匹配完整单词
   * - **en**: Match whole words
   */
  export const opt_word_regexp: string;
  /**
   * - 🚩 **zh**: 设置工作区
   * - **en**: Set working tree
   */
  export const opt_work_tree: string;
  /**
   * - 🚩 **zh**: 工作区路径
   * - **en**: Worktree path
   */
  export const opt_worktree: string;
  /**
   * - 🚩 **zh**: 恢复工作区（默认）
   * - **en**: Restore working tree (default)
   */
  export const opt_worktree_restore: string;
}

declare module "virtual:i18n/npm" {
  /**
   * - 🚩 **zh**: 公开
   * - **en**: public
   */
  export const arg_access_public: string;
  /**
   * - 🚩 **zh**: 受限
   * - **en**: restricted
   */
  export const arg_access_restricted: string;
  /**
   * - 🚩 **zh**: 严重
   * - **en**: critical
   */
  export const arg_auditLevel_critical: string;
  /**
   * - 🚩 **zh**: 高
   * - **en**: high
   */
  export const arg_auditLevel_high: string;
  /**
   * - 🚩 **zh**: 信息
   * - **en**: info
   */
  export const arg_auditLevel_info: string;
  /**
   * - 🚩 **zh**: 低
   * - **en**: low
   */
  export const arg_auditLevel_low: string;
  /**
   * - 🚩 **zh**: 中
   * - **en**: moderate
   */
  export const arg_auditLevel_moderate: string;
  /**
   * - 🚩 **zh**: 无
   * - **en**: none
   */
  export const arg_auditLevel_none: string;
  /**
   * - 🚩 **zh**: 传统
   * - **en**: legacy
   */
  export const arg_authType_legacy: string;
  /**
   * - 🚩 **zh**: 网页
   * - **en**: web
   */
  export const arg_authType_web: string;
  /**
   * - 🚩 **zh**: 提升
   * - **en**: hoisted
   */
  export const arg_install_hoisted: string;
  /**
   * - 🚩 **zh**: 链接
   * - **en**: linked
   */
  export const arg_install_linked: string;
  /**
   * - 🚩 **zh**: 嵌套
   * - **en**: nested
   */
  export const arg_install_nested: string;
  /**
   * - 🚩 **zh**: 浅
   * - **en**: shallow
   */
  export const arg_install_shallow: string;
  /**
   * - 🚩 **zh**: 全局
   * - **en**: global
   */
  export const arg_location_global: string;
  /**
   * - 🚩 **zh**: 项目
   * - **en**: project
   */
  export const arg_location_project: string;
  /**
   * - 🚩 **zh**: 用户
   * - **en**: user
   */
  export const arg_location_user: string;
  /**
   * - 🚩 **zh**: CycloneDX
   * - **en**: cyclonedx
   */
  export const arg_sbomFormat_cyclonedx: string;
  /**
   * - 🚩 **zh**: SPDX
   * - **en**: spdx
   */
  export const arg_sbomFormat_spdx: string;
  /**
   * - 🚩 **zh**: 应用
   * - **en**: application
   */
  export const arg_sbomType_application: string;
  /**
   * - 🚩 **zh**: 框架
   * - **en**: framework
   */
  export const arg_sbomType_framework: string;
  /**
   * - 🚩 **zh**: 库
   * - **en**: library
   */
  export const arg_sbomType_library: string;
  /**
   * - 🚩 **zh**: 设置已发布包的访问级别
   * - **en**: Set access level on published packages
   */
  export const cmd_access: string;
  /**
   * - 🚩 **zh**: 获取访问状态
   * - **en**: Get access status
   */
  export const cmd_access_get: string;
  /**
   * - 🚩 **zh**: 授予访问权限
   * - **en**: Grant access
   */
  export const cmd_access_grant: string;
  /**
   * - 🚩 **zh**: 列出访问信息
   * - **en**: List access
   */
  export const cmd_access_list: string;
  /**
   * - 🚩 **zh**: 撤销访问权限
   * - **en**: Revoke access
   */
  export const cmd_access_revoke: string;
  /**
   * - 🚩 **zh**: 设置访问
   * - **en**: Set access
   */
  export const cmd_access_set: string;
  /**
   * - 🚩 **zh**: 添加注册表用户帐户
   * - **en**: Add a registry user account
   */
  export const cmd_adduser: string;
  /**
   * - 🚩 **zh**: 运行安全审计
   * - **en**: Run a security audit
   */
  export const cmd_audit: string;
  /**
   * - 🚩 **zh**: 在浏览器中报告包的 Bug
   * - **en**: Report bugs for a package in a web browser
   */
  export const cmd_bugs: string;
  /**
   * - 🚩 **zh**: 操作包和 npx 缓存
   * - **en**: Manipulates packages and npx cache
   */
  export const cmd_cache: string;
  /**
   * - 🚩 **zh**: 添加包规范
   * - **en**: Add a package spec
   */
  export const cmd_cache_add: string;
  /**
   * - 🚩 **zh**: 清除缓存
   * - **en**: Clean cache
   */
  export const cmd_cache_clean: string;
  /**
   * - 🚩 **zh**: 列出缓存
   * - **en**: List cache
   */
  export const cmd_cache_ls: string;
  /**
   * - 🚩 **zh**: npx 缓存子命令
   * - **en**: npx cache subcommands
   */
  export const cmd_cache_npx: string;
  /**
   * - 🚩 **zh**: 查看 npx 缓存信息
   * - **en**: Info npx cache
   */
  export const cmd_cache_npx_info: string;
  /**
   * - 🚩 **zh**: 列出 npx 缓存
   * - **en**: List npx cache
   */
  export const cmd_cache_npx_ls: string;
  /**
   * - 🚩 **zh**: 删除 npx 缓存
   * - **en**: Remove npx cache
   */
  export const cmd_cache_npx_rm: string;
  /**
   * - 🚩 **zh**: 验证缓存完整性
   * - **en**: Verify cache integrity
   */
  export const cmd_cache_verify: string;
  /**
   * - 🚩 **zh**: 纯净安装项目
   * - **en**: Clean install a project
   */
  export const cmd_ci: string;
  /**
   * - 🚩 **zh**: npm 制表符补全
   * - **en**: Tab Completion for npm
   */
  export const cmd_completion: string;
  /**
   * - 🚩 **zh**: 管理 npm 配置文件
   * - **en**: Manage the npm configuration files
   */
  export const cmd_config: string;
  /**
   * - 🚩 **zh**: 删除配置值
   * - **en**: Delete config values
   */
  export const cmd_config_delete: string;
  /**
   * - 🚩 **zh**: 编辑配置
   * - **en**: Edit config
   */
  export const cmd_config_edit: string;
  /**
   * - 🚩 **zh**: 修复配置
   * - **en**: Fix config
   */
  export const cmd_config_fix: string;
  /**
   * - 🚩 **zh**: 获取配置值
   * - **en**: Get config values
   */
  export const cmd_config_get: string;
  /**
   * - 🚩 **zh**: 列出配置
   * - **en**: List config
   */
  export const cmd_config_list: string;
  /**
   * - 🚩 **zh**: 设置配置值
   * - **en**: Set config values
   */
  export const cmd_config_set: string;
  /**
   * - 🚩 **zh**: 减少包树中的重复
   * - **en**: Reduce duplication in the package tree
   */
  export const cmd_dedupe: string;
  /**
   * - 🚩 **zh**: 将包的某个版本标记为弃用
   * - **en**: Deprecate a version of a package
   */
  export const cmd_deprecate: string;
  /**
   * - 🚩 **zh**: 注册表差异比较命令
   * - **en**: The registry diff command
   */
  export const cmd_diff: string;
  /**
   * - 🚩 **zh**: 修改包的分发标签
   * - **en**: Modify package distribution tags
   */
  export const cmd_distTag: string;
  /**
   * - 🚩 **zh**: 添加标签
   * - **en**: Add tag
   */
  export const cmd_distTag_add: string;
  /**
   * - 🚩 **zh**: 列出标签
   * - **en**: List tags
   */
  export const cmd_distTag_ls: string;
  /**
   * - 🚩 **zh**: 删除标签
   * - **en**: Remove tag
   */
  export const cmd_distTag_rm: string;
  /**
   * - 🚩 **zh**: 在浏览器中打开包的文档
   * - **en**: Open documentation for a package in a web browser
   */
  export const cmd_docs: string;
  /**
   * - 🚩 **zh**: 检查 npm 环境的健康状况
   * - **en**: Check the health of your npm environment
   */
  export const cmd_doctor: string;
  /**
   * - 🚩 **zh**: 编辑已安装的包
   * - **en**: Edit an installed package
   */
  export const cmd_edit: string;
  /**
   * - 🚩 **zh**: 从本地或远程 npm 包运行命令
   * - **en**: Run a command from a local or remote npm package
   */
  export const cmd_exec: string;
  /**
   * - 🚩 **zh**: 解释已安装的包
   * - **en**: Explain installed packages
   */
  export const cmd_explain: string;
  /**
   * - 🚩 **zh**: 浏览已安装的包
   * - **en**: Browse an installed package
   */
  export const cmd_explore: string;
  /**
   * - 🚩 **zh**: 查找包树中的重复
   * - **en**: Find duplication in the package tree
   */
  export const cmd_findDupes: string;
  /**
   * - 🚩 **zh**: 检索资金信息
   * - **en**: Retrieve funding information
   */
  export const cmd_fund: string;
  /**
   * - 🚩 **zh**: 从 npm 配置中获取值
   * - **en**: Get a value from the npm configuration
   */
  export const cmd_get: string;
  /**
   * - 🚩 **zh**: 获取 npm 帮助
   * - **en**: Get help on npm
   */
  export const cmd_help: string;
  /**
   * - 🚩 **zh**: 搜索 npm 帮助文档
   * - **en**: Search npm help documentation
   */
  export const cmd_helpSearch: string;
  /**
   * - 🚩 **zh**: 创建 package_json 文件
   * - **en**: Create a package.json file
   */
  export const cmd_init: string;
  /**
   * - 🚩 **zh**: 安装包
   * - **en**: Install a package
   */
  export const cmd_install: string;
  /**
   * - 🚩 **zh**: 纯净安装项目并运行测试
   * - **en**: Install a project with a clean slate and run tests
   */
  export const cmd_installCiTest: string;
  /**
   * - 🚩 **zh**: 安装包并运行测试
   * - **en**: Install package(s) and run tests
   */
  export const cmd_installTest: string;
  /**
   * - 🚩 **zh**: 符号链接包文件夹
   * - **en**: Symlink a package folder
   */
  export const cmd_link: string;
  /**
   * - 🚩 **zh**: 列出已安装的包
   * - **en**: List installed packages
   */
  export const cmd_ll: string;
  /**
   * - 🚩 **zh**: 登录注册表用户帐户
   * - **en**: Login to a registry user account
   */
  export const cmd_login: string;
  /**
   * - 🚩 **zh**: 退出登录
   * - **en**: Log out of the registry
   */
  export const cmd_logout: string;
  /**
   * - 🚩 **zh**: 列出已安装的包
   * - **en**: List installed packages
   */
  export const cmd_ls: string;
  /**
   * - 🚩 **zh**: Node 包管理器
   * - **en**: Node package manager
   */
  export const cmd_npm: string;
  /**
   * - 🚩 **zh**: 从本地或远程 npm 包运行命令
   * - **en**: Run a command from a local or remote npm package
   */
  export const cmd_npx: string;
  /**
   * - 🚩 **zh**: 管理组织
   * - **en**: Manage orgs
   */
  export const cmd_org: string;
  /**
   * - 🚩 **zh**: 列出成员
   * - **en**: List members
   */
  export const cmd_org_ls: string;
  /**
   * - 🚩 **zh**: 删除成员
   * - **en**: Remove member
   */
  export const cmd_org_rm: string;
  /**
   * - 🚩 **zh**: 设置组织成员
   * - **en**: Set org membership
   */
  export const cmd_org_set: string;
  /**
   * - 🚩 **zh**: 检查过时的包
   * - **en**: Check for outdated packages
   */
  export const cmd_outdated: string;
  /**
   * - 🚩 **zh**: 管理包的所有者
   * - **en**: Manage package owners
   */
  export const cmd_owner: string;
  /**
   * - 🚩 **zh**: 添加所有者
   * - **en**: Add owner
   */
  export const cmd_owner_add: string;
  /**
   * - 🚩 **zh**: 列出所有者
   * - **en**: List owners
   */
  export const cmd_owner_ls: string;
  /**
   * - 🚩 **zh**: 删除所有者
   * - **en**: Remove owner
   */
  export const cmd_owner_rm: string;
  /**
   * - 🚩 **zh**: 从包创建 tar 包
   * - **en**: Create a tarball from a package
   */
  export const cmd_pack: string;
  /**
   * - 🚩 **zh**: Ping npm 注册表
   * - **en**: Ping npm registry
   */
  export const cmd_ping: string;
  /**
   * - 🚩 **zh**: 管理你的 package_json
   * - **en**: Manages your package.json
   */
  export const cmd_pkg: string;
  /**
   * - 🚩 **zh**: 删除键
   * - **en**: Delete keys
   */
  export const cmd_pkg_delete: string;
  /**
   * - 🚩 **zh**: 修复 package_json
   * - **en**: Fix package.json
   */
  export const cmd_pkg_fix: string;
  /**
   * - 🚩 **zh**: 获取 package_json 键
   * - **en**: Get package.json keys
   */
  export const cmd_pkg_get: string;
  /**
   * - 🚩 **zh**: 设置 package_json 值
   * - **en**: Set package.json values
   */
  export const cmd_pkg_set: string;
  /**
   * - 🚩 **zh**: 显示前缀
   * - **en**: Display prefix
   */
  export const cmd_prefix: string;
  /**
   * - 🚩 **zh**: 更改注册表个人资料设置
   * - **en**: Change settings on your registry profile
   */
  export const cmd_profile: string;
  /**
   * - 🚩 **zh**: 禁用双重身份验证
   * - **en**: Disable 2FA
   */
  export const cmd_profile_disable2fa: string;
  /**
   * - 🚩 **zh**: 启用双重身份验证
   * - **en**: Enable 2FA
   */
  export const cmd_profile_enable2fa: string;
  /**
   * - 🚩 **zh**: 获取个人资料键
   * - **en**: Get profile key
   */
  export const cmd_profile_get: string;
  /**
   * - 🚩 **zh**: 设置个人资料键
   * - **en**: Set profile key
   */
  export const cmd_profile_set: string;
  /**
   * - 🚩 **zh**: 删除多余的包
   * - **en**: Remove extraneous packages
   */
  export const cmd_prune: string;
  /**
   * - 🚩 **zh**: 发布包
   * - **en**: Publish a package
   */
  export const cmd_publish: string;
  /**
   * - 🚩 **zh**: 检索过滤后的包列表
   * - **en**: Retrieve a filtered list of packages
   */
  export const cmd_query: string;
  /**
   * - 🚩 **zh**: 重新编译包
   * - **en**: Rebuild a package
   */
  export const cmd_rebuild: string;
  /**
   * - 🚩 **zh**: 在浏览器中打开包的仓库页面
   * - **en**: Open package repository page in the browser
   */
  export const cmd_repo: string;
  /**
   * - 🚩 **zh**: 重启包
   * - **en**: Restart a package
   */
  export const cmd_restart: string;
  /**
   * - 🚩 **zh**: 显示 npm root
   * - **en**: Display npm root
   */
  export const cmd_root: string;
  /**
   * - 🚩 **zh**: 运行任意包脚本
   * - **en**: Run arbitrary package scripts
   */
  export const cmd_run: string;
  /**
   * - 🚩 **zh**: 生成软件物料清单 (SBOM)
   * - **en**: Generate a Software Bill of Materials (SBOM)
   */
  export const cmd_sbom: string;
  /**
   * - 🚩 **zh**: 搜索包
   * - **en**: Search for packages
   */
  export const cmd_search: string;
  /**
   * - 🚩 **zh**: 设置 npm 配置中的值
   * - **en**: Set a value in the npm configuration
   */
  export const cmd_set: string;
  /**
   * - 🚩 **zh**: 锁定依赖版本以进行发布
   * - **en**: Lock down dependency versions for publication
   */
  export const cmd_shrinkwrap: string;
  /**
   * - 🚩 **zh**: 标记你喜欢的包
   * - **en**: Mark your favorite packages
   */
  export const cmd_star: string;
  /**
   * - 🚩 **zh**: 查看标记为收藏的包
   * - **en**: View packages marked as favorites
   */
  export const cmd_stars: string;
  /**
   * - 🚩 **zh**: 启动包
   * - **en**: Start a package
   */
  export const cmd_start: string;
  /**
   * - 🚩 **zh**: 停止包
   * - **en**: Stop a package
   */
  export const cmd_stop: string;
  /**
   * - 🚩 **zh**: 管理组织团队和团队成员
   * - **en**: Manage organization teams and team memberships
   */
  export const cmd_team: string;
  /**
   * - 🚩 **zh**: 添加成员
   * - **en**: Add member
   */
  export const cmd_team_add: string;
  /**
   * - 🚩 **zh**: 创建团队
   * - **en**: Create team
   */
  export const cmd_team_create: string;
  /**
   * - 🚩 **zh**: 解散团队
   * - **en**: Destroy team
   */
  export const cmd_team_destroy: string;
  /**
   * - 🚩 **zh**: 列出团队
   * - **en**: List teams
   */
  export const cmd_team_ls: string;
  /**
   * - 🚩 **zh**: 删除成员
   * - **en**: Remove member
   */
  export const cmd_team_rm: string;
  /**
   * - 🚩 **zh**: 测试包
   * - **en**: Test a package
   */
  export const cmd_test: string;
  /**
   * - 🚩 **zh**: 管理你的身份验证令牌
   * - **en**: Manage your authentication tokens
   */
  export const cmd_token: string;
  /**
   * - 🚩 **zh**: 创建令牌
   * - **en**: Create token
   */
  export const cmd_token_create: string;
  /**
   * - 🚩 **zh**: 列出令牌
   * - **en**: List tokens
   */
  export const cmd_token_list: string;
  /**
   * - 🚩 **zh**: 撤销令牌
   * - **en**: Revoke token
   */
  export const cmd_token_revoke: string;
  /**
   * - 🚩 **zh**: 取消弃用包的某个版本
   * - **en**: Undeprecate a version of a package
   */
  export const cmd_undeprecate: string;
  /**
   * - 🚩 **zh**: 删除包
   * - **en**: Remove a package
   */
  export const cmd_uninstall: string;
  /**
   * - 🚩 **zh**: 从注册表中删除包
   * - **en**: Remove a package from the registry
   */
  export const cmd_unpublish: string;
  /**
   * - 🚩 **zh**: 取消收藏
   * - **en**: Remove an item from your favorite packages
   */
  export const cmd_unstar: string;
  /**
   * - 🚩 **zh**: 更新包
   * - **en**: Update packages
   */
  export const cmd_update: string;
  /**
   * - 🚩 **zh**: 提升包版本号
   * - **en**: Bump a package version
   */
  export const cmd_version: string;
  /**
   * - 🚩 **zh**: 查看注册表信息
   * - **en**: View registry info
   */
  export const cmd_view: string;
  /**
   * - 🚩 **zh**: 显示 npm 用户名
   * - **en**: Display npm username
   */
  export const cmd_whoami: string;
  /**
   * - 🚩 **zh**: 访问级别 (restricted, public)
   * - **en**: Access level (restricted, public)
   */
  export const opt_access: string;
  /**
   * - 🚩 **zh**: 显示全部
   * - **en**: Show all
   */
  export const opt_all: string;
  /**
   * - 🚩 **zh**: 允许相同版本
   * - **en**: Allow same version
   */
  export const opt_allowSameVersion: string;
  /**
   * - 🚩 **zh**: 审计级别
   * - **en**: Audit level
   */
  export const opt_auditLevel: string;
  /**
   * - 🚩 **zh**: 认证类型 (legacy, web)
   * - **en**: Authentication type (legacy, web)
   */
  export const opt_authType: string;
  /**
   * - 🚩 **zh**: 仅安装该日期之前的版本
   * - **en**: Install only versions before date
   */
  export const opt_before: string;
  /**
   * - 🚩 **zh**: 打开的浏览器
   * - **en**: Browser to open
   */
  export const opt_browser: string;
  /**
   * - 🚩 **zh**: 缓存路径
   * - **en**: Cache path
   */
  export const opt_cachePath: string;
  /**
   * - 🚩 **zh**: 以字符串形式运行命令
   * - **en**: Run command as string
   */
  export const opt_call: string;
  /**
   * - 🚩 **zh**: CIDR 列表
   * - **en**: CIDR list
   */
  export const opt_cidr: string;
  /**
   * - 🚩 **zh**: 彩色输出
   * - **en**: Color output
   */
  export const opt_color: string;
  /**
   * - 🚩 **zh**: CPU 过滤器
   * - **en**: CPU filter
   */
  export const opt_cpu: string;
  /**
   * - 🚩 **zh**: 深度
   * - **en**: Depth
   */
  export const opt_depth: string;
  /**
   * - 🚩 **zh**: 与指定包规范对比
   * - **en**: Diff against package spec
   */
  export const opt_diff: string;
  /**
   * - 🚩 **zh**: 目标前缀
   * - **en**: Destination prefix
   */
  export const opt_diffDstPrefix: string;
  /**
   * - 🚩 **zh**: 忽略空白
   * - **en**: Ignore whitespace
   */
  export const opt_diffIgnoreAllSpace: string;
  /**
   * - 🚩 **zh**: 仅显示文件名
   * - **en**: Only show filenames
   */
  export const opt_diffNameOnly: string;
  /**
   * - 🚩 **zh**: 无前缀
   * - **en**: No prefix
   */
  export const opt_diffNoPrefix: string;
  /**
   * - 🚩 **zh**: 源前缀
   * - **en**: Source prefix
   */
  export const opt_diffSrcPrefix: string;
  /**
   * - 🚩 **zh**: 文本差异
   * - **en**: Text diff
   */
  export const opt_diffText: string;
  /**
   * - 🚩 **zh**: 统一差异行数
   * - **en**: Unified diff lines
   */
  export const opt_diffUnified: string;
  /**
   * - 🚩 **zh**: 预演
   * - **en**: Dry run
   */
  export const opt_dryRun: string;
  /**
   * - 🚩 **zh**: 编辑器
   * - **en**: Editor
   */
  export const opt_editor: string;
  /**
   * - 🚩 **zh**: 期望的结果数量
   * - **en**: Expected result count
   */
  export const opt_expectResults: string;
  /**
   * - 🚩 **zh**: 强制执行
   * - **en**: Force
   */
  export const opt_force: string;
  /**
   * - 🚩 **zh**: 在前台运行脚本
   * - **en**: Run scripts in foreground
   */
  export const opt_foregroundScripts: string;
  /**
   * - 🚩 **zh**: 全局模式
   * - **en**: Global mode
   */
  export const opt_global: string;
  /**
   * - 🚩 **zh**: 全局风格布局
   * - **en**: Global style layout
   */
  export const opt_globalStyle: string;
  /**
   * - 🚩 **zh**: 若脚本不存在则跳过
   * - **en**: Skip if script missing
   */
  export const opt_ifPresent: string;
  /**
   * - 🚩 **zh**: 忽略脚本
   * - **en**: Ignore scripts
   */
  export const opt_ignoreScripts: string;
  /**
   * - 🚩 **zh**: 包含依赖类型 (prod, dev, optional, peer)
   * - **en**: Include dependency types (prod, dev, optional, peer)
   */
  export const opt_include: string;
  /**
   * - 🚩 **zh**: 包含工作区根
   * - **en**: Include workspace root
   */
  export const opt_includeWorkspaceRoot: string;
  /**
   * - 🚩 **zh**: 作者名称
   * - **en**: Author name
   */
  export const opt_initAuthorName: string;
  /**
   * - 🚩 **zh**: 作者 URL
   * - **en**: Author URL
   */
  export const opt_initAuthorUrl: string;
  /**
   * - 🚩 **zh**: 许可证
   * - **en**: License
   */
  export const opt_initLicense: string;
  /**
   * - 🚩 **zh**: 模块
   * - **en**: Module
   */
  export const opt_initModule: string;
  /**
   * - 🚩 **zh**: 私有
   * - **en**: Private
   */
  export const opt_initPrivate: string;
  /**
   * - 🚩 **zh**: 类型
   * - **en**: Type
   */
  export const opt_initType: string;
  /**
   * - 🚩 **zh**: 版本
   * - **en**: Version
   */
  export const opt_initVersion: string;
  /**
   * - 🚩 **zh**: 安装链接
   * - **en**: Install links
   */
  export const opt_installLinks: string;
  /**
   * - 🚩 **zh**: 安装策略
   * - **en**: Install strategy
   */
  export const opt_installStrategy: string;
  /**
   * - 🚩 **zh**: 以 JSON 格式输出
   * - **en**: Output as JSON
   */
  export const opt_json: string;
  /**
   * - 🚩 **zh**: 传统捆绑
   * - **en**: Legacy bundling
   */
  export const opt_legacyBundling: string;
  /**
   * - 🚩 **zh**: libc 过滤器
   * - **en**: libc filter
   */
  export const opt_libc: string;
  /**
   * - 🚩 **zh**: 显示链接的包
   * - **en**: Show linked packages
   */
  export const opt_link: string;
  /**
   * - 🚩 **zh**: 配置位置 (global, user, project)
   * - **en**: Config location (global, user, project)
   */
  export const opt_location: string;
  /**
   * - 🚩 **zh**: 长输出
   * - **en**: Long output
   */
  export const opt_long: string;
  /**
   * - 🚩 **zh**: 跳过审计
   * - **en**: Skip audit
   */
  export const opt_noAudit: string;
  /**
   * - 🚩 **zh**: 跳过 bin 链接
   * - **en**: Skip bin links
   */
  export const opt_noBinLinks: string;
  /**
   * - 🚩 **zh**: 跳过提交钩子
   * - **en**: Skip commit hooks
   */
  export const opt_noCommitHooks: string;
  /**
   * - 🚩 **zh**: 省略描述
   * - **en**: Omit descriptions
   */
  export const opt_noDescription: string;
  /**
   * - 🚩 **zh**: 跳过资金信息
   * - **en**: Skip funding messages
   */
  export const opt_noFund: string;
  /**
   * - 🚩 **zh**: 跳过 Git 标签
   * - **en**: Skip git tag
   */
  export const opt_noGitTagVersion: string;
  /**
   * - 🚩 **zh**: 忽略 package-lock
   * - **en**: Ignore package-lock
   */
  export const opt_noPackageLock: string;
  /**
   * - 🚩 **zh**: 禁用 Unicode
   * - **en**: Disable unicode
   */
  export const opt_noUnicode: string;
  /**
   * - 🚩 **zh**: 跳过工作区更新
   * - **en**: Skip workspace update
   */
  export const opt_noWorkspacesUpdate: string;
  /**
   * - 🚩 **zh**: 离线模式
   * - **en**: Offline mode
   */
  export const opt_offline: string;
  /**
   * - 🚩 **zh**: 排除依赖类型 (dev, optional, peer)
   * - **en**: Omit dependency types (dev, optional, peer)
   */
  export const opt_omit: string;
  /**
   * - 🚩 **zh**: 操作系统过滤器
   * - **en**: OS filter
   */
  export const opt_os: string;
  /**
   * - 🚩 **zh**: 一次性密码
   * - **en**: One-time password
   */
  export const opt_otp: string;
  /**
   * - 🚩 **zh**: 打包目标
   * - **en**: Pack destination
   */
  export const opt_packDestination: string;
  /**
   * - 🚩 **zh**: 包规范
   * - **en**: Package spec
   */
  export const opt_packageExec: string;
  /**
   * - 🚩 **zh**: 仅更新 package-lock
   * - **en**: Only update package-lock
   */
  export const opt_packageLockOnly: string;
  /**
   * - 🚩 **zh**: 可解析输出
   * - **en**: Parseable output
   */
  export const opt_parseable: string;
  /**
   * - 🚩 **zh**: 优先去重
   * - **en**: Prefer deduplication
   */
  export const opt_preferDedupe: string;
  /**
   * - 🚩 **zh**: 优先离线
   * - **en**: Prefer offline
   */
  export const opt_preferOffline: string;
  /**
   * - 🚩 **zh**: 优先在线
   * - **en**: Prefer online
   */
  export const opt_preferOnline: string;
  /**
   * - 🚩 **zh**: 预发布标识符
   * - **en**: Prerelease identifier
   */
  export const opt_preid: string;
  /**
   * - 🚩 **zh**: 来源文件
   * - **en**: Provenance file
   */
  export const opt_provenance: string;
  /**
   * - 🚩 **zh**: 只读令牌
   * - **en**: Read-only token
   */
  export const opt_readOnly: string;
  /**
   * - 🚩 **zh**: 注册表 URL
   * - **en**: Registry URL
   */
  export const opt_registry: string;
  /**
   * - 🚩 **zh**: 保存精确版本
   * - **en**: Save exact version
   */
  export const opt_saveExact: string;
  /**
   * - 🚩 **zh**: 保存模式
   * - **en**: Save mode
   */
  export const opt_saveMode: string;
  /**
   * - 🚩 **zh**: SBOM 格式
   * - **en**: SBOM format
   */
  export const opt_sbomFormat: string;
  /**
   * - 🚩 **zh**: SBOM 类型
   * - **en**: SBOM type
   */
  export const opt_sbomType: string;
  /**
   * - 🚩 **zh**: 作用域
   * - **en**: Scope
   */
  export const opt_scope: string;
  /**
   * - 🚩 **zh**: 脚本 Shell
   * - **en**: Script shell
   */
  export const opt_scriptShell: string;
  /**
   * - 🚩 **zh**: 排除搜索
   * - **en**: Exclude search
   */
  export const opt_searchExclude: string;
  /**
   * - 🚩 **zh**: 限制结果数量
   * - **en**: Limit results
   */
  export const opt_searchLimit: string;
  /**
   * - 🚩 **zh**: 搜索选项
   * - **en**: Search options
   */
  export const opt_searchOpts: string;
  /**
   * - 🚩 **zh**: Shell
   * - **en**: Shell
   */
  export const opt_shell: string;
  /**
   * - 🚩 **zh**: 签名 Git 标签
   * - **en**: Sign git tag
   */
  export const opt_signGitTag: string;
  /**
   * - 🚩 **zh**: 对等依赖冲突时报错
   * - **en**: Fail on peer dependency conflicts
   */
  export const opt_strictPeerDeps: string;
  /**
   * - 🚩 **zh**: 标签
   * - **en**: Tag
   */
  export const opt_tag: string;
  /**
   * - 🚩 **zh**: 查看器程序
   * - **en**: Viewer program
   */
  export const opt_viewer: string;
  /**
   * - 🚩 **zh**: 资金来源编号
   * - **en**: Funding source number
   */
  export const opt_which: string;
  /**
   * - 🚩 **zh**: 工作区名称
   * - **en**: Workspace name
   */
  export const opt_workspace: string;
  /**
   * - 🚩 **zh**: 启用所有工作区
   * - **en**: Enable all workspaces
   */
  export const opt_workspaces: string;
  /**
   * - 🚩 **zh**: 跳过提示
   * - **en**: Skip prompts
   */
  export const opt_yes: string;
  /**
   * - 🚩 **zh**: ESLint
   * - **en**: ESLint
   */
  export const pkg_eslint: string;
  /**
   * - 🚩 **zh**: Prettier
   * - **en**: Prettier
   */
  export const pkg_prettier: string;
  /**
   * - 🚩 **zh**: React 库
   * - **en**: React library
   */
  export const pkg_react: string;
  /**
   * - 🚩 **zh**: TypeScript
   * - **en**: TypeScript
   */
  export const pkg_typescript: string;
  /**
   * - 🚩 **zh**: Vue.js
   * - **en**: Vue.js
   */
  export const pkg_vue: string;
}

declare module "virtual:i18n/scoop" {
  /**
   * - 🚩 **zh**: 32 位架构
   * - **en**: 32-bit architecture
   */
  export const arg_32bit: string;
  /**
   * - 🚩 **zh**: 64 位架构
   * - **en**: 64-bit architecture
   */
  export const arg_64bit: string;
  /**
   * - 🚩 **zh**: ARM64 架构
   * - **en**: ARM64 architecture
   */
  export const arg_arm64: string;
  /**
   * - 🚩 **zh**: 更新所有应用
   * - **en**: Update all apps
   */
  export const arg_update_all: string;
  /**
   * - 🚩 **zh**: 管理别名
   * - **en**: Manage scoop aliases
   */
  export const cmd_alias: string;
  /**
   * - 🚩 **zh**: 添加别名
   * - **en**: Add an alias
   */
  export const cmd_alias_add: string;
  /**
   * - 🚩 **zh**: 列出所有别名
   * - **en**: List all aliases
   */
  export const cmd_alias_list: string;
  /**
   * - 🚩 **zh**: 删除别名
   * - **en**: Remove an alias
   */
  export const cmd_alias_rm: string;
  /**
   * - 🚩 **zh**: 管理 bucket
   * - **en**: Manage Scoop buckets
   */
  export const cmd_bucket: string;
  /**
   * - 🚩 **zh**: 添加新 bucket
   * - **en**: Add a new bucket
   */
  export const cmd_bucket_add: string;
  /**
   * - 🚩 **zh**: 列出已知 bucket
   * - **en**: List known buckets
   */
  export const cmd_bucket_known: string;
  /**
   * - 🚩 **zh**: 列出所有 bucket
   * - **en**: List all buckets
   */
  export const cmd_bucket_list: string;
  /**
   * - 🚩 **zh**: 删除 bucket
   * - **en**: Remove a bucket
   */
  export const cmd_bucket_rm: string;
  /**
   * - 🚩 **zh**: 管理下载缓存
   * - **en**: Show or clear the download cache
   */
  export const cmd_cache: string;
  /**
   * - 🚩 **zh**: 移除缓存
   * - **en**: Remove cached downloads
   */
  export const cmd_cache_rm: string;
  /**
   * - 🚩 **zh**: 显示缓存内容
   * - **en**: Show cache contents
   */
  export const cmd_cache_show: string;
  /**
   * - 🚩 **zh**: 显示指定清单的内容
   * - **en**: Show content of specified manifest
   */
  export const cmd_cat: string;
  /**
   * - 🚩 **zh**: 检查潜在问题
   * - **en**: Check for potential problems
   */
  export const cmd_checkup: string;
  /**
   * - 🚩 **zh**: 清理旧版本
   * - **en**: Cleanup apps by removing old versions
   */
  export const cmd_cleanup: string;
  /**
   * - 🚩 **zh**: 获取或设置配置值
   * - **en**: Get or set configuration values
   */
  export const cmd_config: string;
  /**
   * - 🚩 **zh**: 删除配置项
   * - **en**: Remove a configuration setting
   */
  export const cmd_config_rm: string;
  /**
   * - 🚩 **zh**: 创建自定义应用清单
   * - **en**: Create a custom app manifest
   */
  export const cmd_create: string;
  /**
   * - 🚩 **zh**: 列出应用的依赖项
   * - **en**: List dependencies for an app
   */
  export const cmd_depends: string;
  /**
   * - 🚩 **zh**: 下载应用到缓存并验证哈希
   * - **en**: Download apps in the cache folder and verify hashes
   */
  export const cmd_download: string;
  /**
   * - 🚩 **zh**: 导出已安装的应用和 bucket 为 JSON
   * - **en**: Exports installed apps, buckets in JSON format
   */
  export const cmd_export: string;
  /**
   * - 🚩 **zh**: 显示命令帮助
   * - **en**: Show help for a command
   */
  export const cmd_help: string;
  /**
   * - 🚩 **zh**: 锁定应用以禁用更新
   * - **en**: Hold an app to disable updates
   */
  export const cmd_hold: string;
  /**
   * - 🚩 **zh**: 打开应用主页
   * - **en**: Opens the app homepage
   */
  export const cmd_home: string;
  /**
   * - 🚩 **zh**: 从 Scoopfile 导入应用、bucket 和配置
   * - **en**: Imports apps, buckets and configs from a Scoopfile
   */
  export const cmd_import: string;
  /**
   * - 🚩 **zh**: 显示应用信息
   * - **en**: Display information about an app
   */
  export const cmd_info: string;
  /**
   * - 🚩 **zh**: 安装应用
   * - **en**: Install apps
   */
  export const cmd_install: string;
  /**
   * - 🚩 **zh**: 列出已安装的应用
   * - **en**: List installed apps
   */
  export const cmd_list: string;
  /**
   * - 🚩 **zh**: 返回指定应用的路径
   * - **en**: Returns the path to the specified app
   */
  export const cmd_prefix: string;
  /**
   * - 🚩 **zh**: 重置应用以解决冲突
   * - **en**: Reset an app to resolve conflicts
   */
  export const cmd_reset: string;
  /**
   * - 🚩 **zh**: Scoop 命令行安装程序 — Windows 包管理器
   * - **en**: Scoop command-line installer — Windows package manager
   */
  export const cmd_scoop: string;
  /**
   * - 🚩 **zh**: 搜索可用应用
   * - **en**: Search available apps
   */
  export const cmd_search: string;
  /**
   * - 🚩 **zh**: 管理 shim
   * - **en**: Manipulate Scoop shims
   */
  export const cmd_shim: string;
  /**
   * - 🚩 **zh**: 添加自定义 shim
   * - **en**: Add a custom shim
   */
  export const cmd_shim_add: string;
  /**
   * - 🚩 **zh**: 切换 shim 目标源
   * - **en**: Alter a shim's target source
   */
  export const cmd_shim_alter: string;
  /**
   * - 🚩 **zh**: 显示 shim 信息
   * - **en**: Show shim information
   */
  export const cmd_shim_info: string;
  /**
   * - 🚩 **zh**: 列出所有 shim
   * - **en**: List all shims
   */
  export const cmd_shim_list: string;
  /**
   * - 🚩 **zh**: 删除 shim
   * - **en**: Remove shims
   */
  export const cmd_shim_rm: string;
  /**
   * - 🚩 **zh**: 检查状态和更新
   * - **en**: Show status and check for new app versions
   */
  export const cmd_status: string;
  /**
   * - 🚩 **zh**: 解锁应用以启用更新
   * - **en**: Unhold an app to enable updates
   */
  export const cmd_unhold: string;
  /**
   * - 🚩 **zh**: 卸载应用
   * - **en**: Uninstall apps
   */
  export const cmd_uninstall: string;
  /**
   * - 🚩 **zh**: 更新应用或 Scoop 自身
   * - **en**: Update apps, or Scoop itself
   */
  export const cmd_update: string;
  /**
   * - 🚩 **zh**: 在 virustotal.com 上查找应用的哈希或 URL
   * - **en**: Look for app's hash or url on virustotal.com
   */
  export const cmd_virustotal: string;
  /**
   * - 🚩 **zh**: 定位 shim/可执行文件路径
   * - **en**: Locate a shim/executable (similar to 'which' on Linux)
   */
  export const cmd_which: string;
  /**
   * - 🚩 **zh**: 应用于所有应用
   * - **en**: Apply to all apps
   */
  export const opt_all: string;
  /**
   * - 🚩 **zh**: 使用指定架构 (32bit|64bit|arm64)
   * - **en**: Use the specified architecture (32bit|64bit|arm64)
   */
  export const opt_arch: string;
  /**
   * - 🚩 **zh**: 移除过期的下载缓存
   * - **en**: Remove outdated download cache
   */
  export const opt_cache_clean: string;
  /**
   * - 🚩 **zh**: 同时导出配置
   * - **en**: Export the Scoop configuration file too
   */
  export const opt_config: string;
  /**
   * - 🚩 **zh**: 强制执行
   * - **en**: Force execution
   */
  export const opt_force: string;
  /**
   * - 🚩 **zh**: 全局安装/操作
   * - **en**: Install/manipulate globally
   */
  export const opt_global: string;
  /**
   * - 🚩 **zh**: 显示帮助信息
   * - **en**: Show help
   */
  export const opt_help: string;
  /**
   * - 🚩 **zh**: 不自动安装依赖
   * - **en**: Don't install dependencies automatically
   */
  export const opt_independent: string;
  /**
   * - 🚩 **zh**: 仅检查本地应用，不远程获取
   * - **en**: Check locally only, disable remote fetching
   */
  export const opt_local: string;
  /**
   * - 🚩 **zh**: 不使用下载缓存
   * - **en**: Don't use the download cache
   */
  export const opt_no_cache: string;
  /**
   * - 🚩 **zh**: 不检查依赖
   * - **en**: Do not check dependencies
   */
  export const opt_no_depends: string;
  /**
   * - 🚩 **zh**: 如果过期，不先更新 Scoop
   * - **en**: Don't update Scoop before installing if it's outdated
   */
  export const opt_no_update_scoop: string;
  /**
   * - 🚩 **zh**: 返回报告作为对象
   * - **en**: Return reports as objects
   */
  export const opt_passthru: string;
  /**
   * - 🚩 **zh**: 删除所有持久化数据
   * - **en**: Remove all persistent data
   */
  export const opt_purge: string;
  /**
   * - 🚩 **zh**: 隐藏多余消息
   * - **en**: Hide extraneous messages
   */
  export const opt_quiet: string;
  /**
   * - 🚩 **zh**: 上传 URL 以进行分析
   * - **en**: Send download URL for analysis
   */
  export const opt_scan: string;
  /**
   * - 🚩 **zh**: 跳过哈希验证（慎用！）
   * - **en**: Skip hash validation (use with caution!)
   */
  export const opt_skip_hash_check: string;
  /**
   * - 🚩 **zh**: 显示完整路径和 URL
   * - **en**: Show full paths and URLs
   */
  export const opt_verbose: string;
  /**
   * - 🚩 **zh**: 显示版本信息
   * - **en**: Show version information
   */
  export const opt_version: string;
}

declare module "virtual:i18n/sugg" {
  /**
   * - 🚩 **zh**: 列出所有已缓存的顶级命令
   * - **en**: List all cached top-level commands
   */
  export const commands_desc: string;
  /**
   * - 🚩 **zh**: 基于本地缓存运行 Shell 补全
   * - **en**: Run shell completion against the local cache
   */
  export const complete_desc: string;
  /**
   * - 🚩 **zh**: Shell 自动补全引擎
   * - **en**: Shell completion engine
   */
  export const desc: string;
  /**
   * - 🚩 **zh**: 开发工具
   * - **en**: Development utilities
   */
  export const dev_desc: string;
  /**
   * - 🚩 **zh**: 从翻译文件生成 i18n.d.ts 类型声明
   * - **en**: Generate i18n.d.ts type declarations from translation files
   */
  export const dev_i18n_desc: string;
  /**
   * - 🚩 **zh**: 初始化工作区：写出类型定义、指南和 tsconfig
   * - **en**: Initialize workspace: write types, guides, and tsconfig
   */
  export const dev_init_desc: string;
  /**
   * - 🚩 **zh**: 打印此帮助或指定子命令的帮助
   * - **en**: Print this message or the help of the given subcommand
   */
  export const help_desc: string;
  /**
   * - 🚩 **zh**: 打印 Shell 集成脚本
   * - **en**: Print shell integration script
   */
  export const init_desc: string;
  /**
   * - 🚩 **zh**: 覆盖缓存目录
   * - **en**: Override cache directory
   */
  export const opt_cache_dir: string;
  /**
   * - 🚩 **zh**: 补全脚本目录路径
   * - **en**: Path to completions directory
   */
  export const opt_completions_dir: string;
  /**
   * - 🚩 **zh**: 将编译后的 JS bundle 导出到指定目录
   * - **en**: Dump compiled JS bundles to directory
   */
  export const opt_dump_dynamic: string;
  /**
   * - 🚩 **zh**: 打印帮助
   * - **en**: Print help
   */
  export const opt_help: string;
  /**
   * - 🚩 **zh**: i18n 语言（如 en、zh）
   * - **en**: Language for i18n (e.g. en, zh)
   */
  export const opt_lang: string;
  /**
   * - 🚩 **zh**: 最大返回结果数
   * - **en**: Max results to return
   */
  export const opt_max_results: string;
  /**
   * - 🚩 **zh**: 打印版本
   * - **en**: Print version
   */
  export const opt_version: string;
  /**
   * - 🚩 **zh**: 从脚本构建补全缓存
   * - **en**: Build completion cache from scripts
   */
  export const reload_desc: string;
  /**
   * - 🚩 **zh**: 自升级到最新版本
   * - **en**: Self-upgrade to the latest release
   */
  export const upgrade_desc: string;
}
