declare module "virtual:i18n/bun" {
  /**
   * - 🚩 **en**: Only print advisories with severity greater than or equal to <level> (low, moderate, high, critical)
   * - **zh-CN**: 仅打印严重性大于或等于 <level> 的建议（low、moderate、high、critical）
   */
  export const audit_option_audit_level: string;
  /**
   * - 🚩 **en**: Ignore specific CVE IDs from audit
   * - **zh-CN**: 忽略审计中的特定 CVE ID
   */
  export const audit_option_ignore: string;
  /**
   * - 🚩 **en**: Output in JSON format
   * - **zh-CN**: 以 JSON 格式输出
   */
  export const audit_option_json: string;
  /**
   * - 🚩 **en**: Allow unresolved dynamic import()/require() specifiers matching these glob patterns. Use '<empty>' for opaque specifiers. Default is '*' (allow all).
   * - **zh-CN**: 允许无法解析的动态 import()/require() 标识符，默认为 '*'（允许所有）
   */
  export const build_option_allow_unresolved: string;
  /**
   * - 🚩 **en**: (EXPERIMENTAL) Build a web app for production using Bun Bake.
   * - **zh-CN**: （实验性）使用 Bun Bake 构建生产环境的 Web 应用
   */
  export const build_option_app: string;
  /**
   * - 🚩 **en**: Customize asset filenames. Defaults to "[name]-[hash].[ext]"
   * - **zh-CN**: 自定义资源文件名。默认为 "[name]-[hash].[ext]"
   */
  export const build_option_asset_naming: string;
  /**
   * - 🚩 **en**: Add a banner to the bundled output such as "use client"; for a bundle being used with RSCs
   * - **zh-CN**: 为打包输出添加横幅，例如 "use client"
   */
  export const build_option_banner: string;
  /**
   * - 🚩 **en**: Use a bytecode cache
   * - **zh-CN**: 使用字节码缓存
   */
  export const build_option_bytecode: string;
  /**
   * - 🚩 **en**: Customize chunk filenames. Defaults to "[name]-[hash].[ext]"
   * - **zh-CN**: 自定义块文件名。默认为 "[name]-[hash].[ext]"
   */
  export const build_option_chunk_naming: string;
  /**
   * - 🚩 **en**: Generate a standalone Bun executable containing your bundled code. Implies --production
   * - **zh-CN**: 生成包含打包代码的独立 Bun 可执行文件。意味着 --production
   */
  export const build_option_compile: string;
  /**
   * - 🚩 **en**: Enable autoloading of bunfig.toml in standalone executable (default: true)
   * - **zh-CN**: 在独立可执行文件中启用自动加载 bunfig.toml（默认 true）
   */
  export const build_option_compile_autoload_bunfig: string;
  /**
   * - 🚩 **en**: Enable autoloading of .env files in standalone executable (default: true)
   * - **zh-CN**: 在独立可执行文件中启用自动加载 .env 文件（默认 true）
   */
  export const build_option_compile_autoload_dotenv: string;
  /**
   * - 🚩 **en**: Enable autoloading of package.json at runtime in standalone executable (default: false)
   * - **zh-CN**: 在独立可执行文件中启用运行时自动加载 package.json（默认 false）
   */
  export const build_option_compile_autoload_package_json: string;
  /**
   * - 🚩 **en**: Enable autoloading of tsconfig.json at runtime in standalone executable (default: false)
   * - **zh-CN**: 在独立可执行文件中启用运行时自动加载 tsconfig.json（默认 false）
   */
  export const build_option_compile_autoload_tsconfig: string;
  /**
   * - 🚩 **en**: Prepend arguments to the standalone executable's execArgv
   * - **zh-CN**: 预置独立可执行文件的 execArgv 参数
   */
  export const build_option_compile_exec_argv: string;
  /**
   * - 🚩 **en**: Path to a Bun executable to use for cross-compilation instead of downloading
   * - **zh-CN**: 用于交叉编译的 Bun 可执行文件路径，代替下载
   */
  export const build_option_compile_executable_path: string;
  /**
   * - 🚩 **en**: Chunk CSS files together to reduce duplicated CSS loaded in a browser. Only has an effect when multiple entrypoints import CSS
   * - **zh-CN**: 将 CSS 文件合并以减少浏览器加载的重复 CSS
   */
  export const build_option_css_chunking: string;
  /**
   * - 🚩 **en**: Re-emit DCE annotations in bundles. Enabled by default unless --minify-whitespace is passed.
   * - **zh-CN**: 在打包中重新输出 DCE 注释。默认启用，除非传递 --minify-whitespace
   */
  export const build_option_emit_dce_annotations: string;
  /**
   * - 🚩 **en**: Customize entry point filenames. Defaults to "[dir]/[name].[ext]"
   * - **zh-CN**: 自定义入口点文件名。默认为 "[dir]/[name].[ext]"
   */
  export const build_option_entry_naming: string;
  /**
   * - 🚩 **en**: Inline environment variables into the bundle as process.env.${name}. Defaults to 'disable'. To inline environment variables matching a prefix, use my prefix like 'FOO_PUBLIC_*'.
   * - **zh-CN**: 将环境变量内联到包中作为 process.env.${name}。默认 'disable'
   */
  export const build_option_env: string;
  /**
   * - 🚩 **en**: Exclude module from transpilation (can use * wildcards). ex: -e react
   * - **zh-CN**: 从转译中排除模块（可使用 * 通配符），例如 -e react
   */
  export const build_option_external: string;
  /**
   * - 🚩 **en**: Add a footer to the bundled output such as // built with bun!
   * - **zh-CN**: 为打包输出添加页脚，例如 // built with bun!
   */
  export const build_option_footer: string;
  /**
   * - 🚩 **en**: Specifies the module format to build to. "esm", "cjs" and "iife" are supported. Defaults to "esm", or "cjs" with --bytecode.
   * - **zh-CN**: 指定构建的模块格式。支持 "esm"、"cjs" 和 "iife"。默认 "esm"，若使用 --bytecode 则为 "cjs"。
   */
  export const build_option_format: string;
  /**
   * - 🚩 **en**: Preserve original function and class names when minifying
   * - **zh-CN**: 压缩时保留原始函数和类名
   */
  export const build_option_keep_names: string;
  /**
   * - 🚩 **en**: Write a JSON file with metadata about the build
   * - **zh-CN**: 写入包含构建元数据的 JSON 文件
   */
  export const build_option_metafile: string;
  /**
   * - 🚩 **en**: Write a markdown file with a visualization of the module graph (LLM-friendly)
   * - **zh-CN**: 写入模块图可视化 markdown 文件（LLM 友好）
   */
  export const build_option_metafile_md: string;
  /**
   * - 🚩 **en**: Enable all minification flags
   * - **zh-CN**: 启用所有压缩标志
   */
  export const build_option_minify: string;
  /**
   * - 🚩 **en**: Minify identifiers
   * - **zh-CN**: 压缩标识符
   */
  export const build_option_minify_identifiers: string;
  /**
   * - 🚩 **en**: Minify syntax and inline data
   * - **zh-CN**: 压缩语法和内联数据
   */
  export const build_option_minify_syntax: string;
  /**
   * - 🚩 **en**: Minify whitespace
   * - **zh-CN**: 压缩空白字符
   */
  export const build_option_minify_whitespace: string;
  /**
   * - 🚩 **en**: Transpile file only, do not bundle
   * - **zh-CN**: 仅转译文件，不打包
   */
  export const build_option_no_bundle: string;
  /**
   * - 🚩 **en**: Disable autoloading of bunfig.toml in standalone executable
   * - **zh-CN**: 禁止在独立可执行文件中自动加载 bunfig.toml
   */
  export const build_option_no_compile_autoload_bunfig: string;
  /**
   * - 🚩 **en**: Disable autoloading of .env files in standalone executable
   * - **zh-CN**: 禁止在独立可执行文件中自动加载 .env 文件
   */
  export const build_option_no_compile_autoload_dotenv: string;
  /**
   * - 🚩 **en**: Disable autoloading of package.json at runtime in standalone executable
   * - **zh-CN**: 禁止在独立可执行文件中运行时自动加载 package.json
   */
  export const build_option_no_compile_autoload_package_json: string;
  /**
   * - 🚩 **en**: Disable autoloading of tsconfig.json at runtime in standalone executable
   * - **zh-CN**: 禁止在独立可执行文件中运行时自动加载 tsconfig.json
   */
  export const build_option_no_compile_autoload_tsconfig: string;
  /**
   * - 🚩 **en**: Default to "dist" if multiple files
   * - **zh-CN**: 多个文件时默认输出到 "dist"
   */
  export const build_option_outdir: string;
  /**
   * - 🚩 **en**: Write to a file
   * - **zh-CN**: 写入文件
   */
  export const build_option_outfile: string;
  /**
   * - 🚩 **en**: Add dependencies to bundle or keep them external. "external", "bundle" is supported. Defaults to "bundle".
   * - **zh-CN**: 将依赖添加到包中或保持外部导入。支持 "external"、"bundle"。默认为 "bundle"
   */
  export const build_option_packages: string;
  /**
   * - 🚩 **en**: Set NODE_ENV=production and enable minification
   * - **zh-CN**: 设置 NODE_ENV=production 并启用压缩
   */
  export const build_option_production: string;
  /**
   * - 🚩 **en**: A prefix to be appended to any import paths in bundled code
   * - **zh-CN**: 附加到打包代码中所有导入路径的前缀
   */
  export const build_option_public_path: string;
  /**
   * - 🚩 **en**: Enable React Fast Refresh transform (does not emit hot-module code, use this for testing)
   * - **zh-CN**: 启用 React Fast Refresh 转换
   */
  export const build_option_react_fast_refresh: string;
  /**
   * - 🚩 **en**: Fail the build on any dynamic import()/require() specifier that cannot be resolved at build time.
   * - **zh-CN**: 在构建时任何无法解析的动态 import()/require() 标识符都导致构建失败
   */
  export const build_option_reject_unresolved: string;
  /**
   * - 🚩 **en**: Root directory used for multiple entry points
   * - **zh-CN**: 多入口点使用的根目录
   */
  export const build_option_root: string;
  /**
   * - 🚩 **en**: (EXPERIMENTAL) Enable server components
   * - **zh-CN**: （实验性）启用服务端组件
   */
  export const build_option_server_components: string;
  /**
   * - 🚩 **en**: Build with sourcemaps - 'linked', 'inline', 'external', or 'none'
   * - **zh-CN**: 构建 sourcemap - 'linked'、'inline'、'external' 或 'none'
   */
  export const build_option_sourcemap: string;
  /**
   * - 🚩 **en**: Enable code splitting
   * - **zh-CN**: 启用代码拆分
   */
  export const build_option_splitting: string;
  /**
   * - 🚩 **en**: The intended execution environment for the bundle. "browser", "bun" or "node"
   * - **zh-CN**: 捆绑包的目标执行环境："browser"、"bun" 或 "node"
   */
  export const build_option_target: string;
  /**
   * - 🚩 **en**: When using --compile targeting Windows, set the executable copyright
   * - **zh-CN**: 当使用 --compile 针对 Windows 时，设置可执行文件版权
   */
  export const build_option_windows_copyright: string;
  /**
   * - 🚩 **en**: When using --compile targeting Windows, set the executable description
   * - **zh-CN**: 当使用 --compile 针对 Windows 时，设置可执行文件描述
   */
  export const build_option_windows_description: string;
  /**
   * - 🚩 **en**: When using --compile targeting Windows, prevent a Command prompt from opening alongside the executable
   * - **zh-CN**: 当使用 --compile 针对 Windows 时，防止可执行文件打开命令提示符窗口
   */
  export const build_option_windows_hide_console: string;
  /**
   * - 🚩 **en**: When using --compile targeting Windows, assign an executable icon
   * - **zh-CN**: 当使用 --compile 针对 Windows 时，分配可执行文件图标
   */
  export const build_option_windows_icon: string;
  /**
   * - 🚩 **en**: When using --compile targeting Windows, set the executable company name
   * - **zh-CN**: 当使用 --compile 针对 Windows 时，设置可执行文件公司名称
   */
  export const build_option_windows_publisher: string;
  /**
   * - 🚩 **en**: When using --compile targeting Windows, set the executable product name
   * - **zh-CN**: 当使用 --compile 针对 Windows 时，设置可执行文件产品名称
   */
  export const build_option_windows_title: string;
  /**
   * - 🚩 **en**: When using --compile targeting Windows, set the executable version (e.g. 1.2.3.4)
   * - **zh-CN**: 当使用 --compile 针对 Windows 时，设置可执行文件版本（例如 1.2.3.4）
   */
  export const build_option_windows_version: string;
  /**
   * - 🚩 **en**: Add a dependency to package.json (bun a)
   * - **zh-CN**: 向 package.json 添加依赖（bun a）
   */
  export const cmd_add_desc: string;
  /**
   * - 🚩 **en**: Check installed packages for vulnerabilities
   * - **zh-CN**: 检查已安装包的安全漏洞
   */
  export const cmd_audit_desc: string;
  /**
   * - 🚩 **en**: Bundle TypeScript & JavaScript into a single file
   * - **zh-CN**: 将 TypeScript 和 JavaScript 打包成单个文件
   */
  export const cmd_build_desc: string;
  /**
   * - 🚩 **en**: Create a new project from a template (bun c)
   * - **zh-CN**: 从模板创建新项目（bun c）
   */
  export const cmd_create_desc: string;
  /**
   * - 🚩 **en**: Run a shell script directly with Bun
   * - **zh-CN**: 直接运行 Shell 脚本
   */
  export const cmd_exec_desc: string;
  /**
   * - 🚩 **en**: Provide feedback to the Bun team
   * - **zh-CN**: 向 Bun 团队提供反馈
   */
  export const cmd_feedback_desc: string;
  /**
   * - 🚩 **en**: Display package metadata from the registry
   * - **zh-CN**: 显示注册表中的包元数据
   */
  export const cmd_info_desc: string;
  /**
   * - 🚩 **en**: Start an empty Bun project from a built-in template
   * - **zh-CN**: 从内置模板启动一个空的 Bun 项目
   */
  export const cmd_init_desc: string;
  /**
   * - 🚩 **en**: Install dependencies for a package.json (bun i)
   * - **zh-CN**: 安装 package.json 中的依赖（bun i）
   */
  export const cmd_install_desc: string;
  /**
   * - 🚩 **en**: Register or link a local npm package
   * - **zh-CN**: 注册或链接本地 npm 包
   */
  export const cmd_link_desc: string;
  /**
   * - 🚩 **en**: Display latest versions of outdated dependencies
   * - **zh-CN**: 显示过时依赖的最新版本
   */
  export const cmd_outdated_desc: string;
  /**
   * - 🚩 **en**: Prepare a package for patching
   * - **zh-CN**: 准备一个包以进行补丁
   */
  export const cmd_patch_desc: string;
  /**
   * - 🚩 **en**: Additional package management utilities
   * - **zh-CN**: 额外的包管理工具
   */
  export const cmd_pm_desc: string;
  /**
   * - 🚩 **en**: Publish a package to the npm registry
   * - **zh-CN**: 发布包到 npm 注册表
   */
  export const cmd_publish_desc: string;
  /**
   * - 🚩 **en**: Remove a dependency from package.json (bun rm)
   * - **zh-CN**: 从 package.json 移除依赖（bun rm）
   */
  export const cmd_remove_desc: string;
  /**
   * - 🚩 **en**: Start a REPL session with Bun
   * - **zh-CN**: 启动 REPL 会话
   */
  export const cmd_repl_desc: string;
  /**
   * - 🚩 **en**: Execute a file with Bun or run a package.json script
   * - **zh-CN**: 执行一个文件或运行 package.json 脚本
   */
  export const cmd_run_desc: string;
  /**
   * - 🚩 **en**: Run unit tests with Bun
   * - **zh-CN**: 运行单元测试
   */
  export const cmd_test_desc: string;
  /**
   * - 🚩 **en**: Unregister a local npm package
   * - **zh-CN**: 注销本地 npm 包
   */
  export const cmd_unlink_desc: string;
  /**
   * - 🚩 **en**: Update outdated dependencies
   * - **zh-CN**: 更新过时的依赖
   */
  export const cmd_update_desc: string;
  /**
   * - 🚩 **en**: Upgrade to latest version of Bun
   * - **zh-CN**: 升级到最新版本的 Bun
   */
  export const cmd_upgrade_desc: string;
  /**
   * - 🚩 **en**: Explain why a package is installed
   * - **zh-CN**: 解释为什么安装了某个包
   */
  export const cmd_why_desc: string;
  /**
   * - 🚩 **en**: Execute a package binary (CLI), installing if needed (bunx)
   * - **zh-CN**: 执行包二进制文件（CLI），必要时安装（bunx）
   */
  export const cmd_x_desc: string;
  /**
   * - 🚩 **en**: Show help
   * - **zh-CN**: 显示帮助
   */
  export const create_option_help: string;
  /**
   * - 🚩 **en**: Fast JavaScript runtime, package manager, bundler, and test runner.
   * - **zh-CN**: 快速的 JavaScript 运行时、包管理器、打包器和测试运行器。
   */
  export const description: string;
  /**
   * - 🚩 **en**: Set the email address used for this submission
   * - **zh-CN**: 设置此提交使用的电子邮件地址
   */
  export const feedback_option_email: string;
  /**
   * - 🚩 **en**: Output in JSON format
   * - **zh-CN**: 以 JSON 格式输出
   */
  export const info_option_json: string;
  /**
   * - 🚩 **en**: Only initialize type definitions
   * - **zh-CN**: 仅初始化类型定义
   */
  export const init_option_minimal: string;
  /**
   * - 🚩 **en**: Initialize a React project
   * - **zh-CN**: 初始化 React 项目
   */
  export const init_option_react: string;
  /**
   * - 🚩 **en**: Initialize a React project with @shadcn/ui and TailwindCSS
   * - **zh-CN**: 使用 @shadcn/ui 和 TailwindCSS 初始化 React 项目
   */
  export const init_option_react_shadcn: string;
  /**
   * - 🚩 **en**: Initialize a React project with TailwindCSS
   * - **zh-CN**: 使用 TailwindCSS 初始化 React 项目
   */
  export const init_option_react_tailwind: string;
  /**
   * - 🚩 **en**: Accept all default options
   * - **zh-CN**: 接受所有默认选项
   */
  export const init_option_yes: string;
  /**
   * - 🚩 **en**: Analyze & install all dependencies of files passed as arguments recursively (using Bun's bundler)
   * - **zh-CN**: 递归分析并安装作为参数传递的所有文件的依赖（使用 Bun 的打包器）
   */
  export const install_option_analyze: string;
  /**
   * - 🚩 **en**: Platform-specific optimizations for installing dependencies. Possible values: "hardlink" (default), "symlink", "copyfile"
   * - **zh-CN**: 安装依赖的平台特定优化。可选值："hardlink"（默认）、"symlink"、"copyfile"
   */
  export const install_option_backend: string;
  /**
   * - 🚩 **en**: Provide a Certificate Authority signing certificate
   * - **zh-CN**: 提供证书颁发机构签名证书
   */
  export const install_option_ca: string;
  /**
   * - 🚩 **en**: Store & load cached data from a specific directory path
   * - **zh-CN**: 将缓存数据存储/加载到指定目录
   */
  export const install_option_cache_dir: string;
  /**
   * - 🚩 **en**: The same as --ca, but is a file path to the certificate
   * - **zh-CN**: 与 --ca 相同，但为证书文件路径
   */
  export const install_option_cafile: string;
  /**
   * - 🚩 **en**: Maximum number of concurrent jobs for lifecycle scripts (default: 2x CPU cores)
   * - **zh-CN**: 生命周期脚本的最大并发作业数（默认 2x CPU 核心数）
   */
  export const install_option_concurrent_scripts: string;
  /**
   * - 🚩 **en**: Override CPU architecture for optional dependencies (e.g., x64, arm64, * for all)
   * - **zh-CN**: 覆盖可选依赖的 CPU 架构（例如 x64、arm64、* 表示所有）
   */
  export const install_option_cpu: string;
  /**
   * - 🚩 **en**: Add dependency to "devDependencies"
   * - **zh-CN**: 添加到 "devDependencies"
   */
  export const install_option_dev: string;
  /**
   * - 🚩 **en**: Perform a dry run without making changes
   * - **zh-CN**: 执行试运行而不做任何更改
   */
  export const install_option_dry_run: string;
  /**
   * - 🚩 **en**: Add the exact version instead of the ^range
   * - **zh-CN**: 添加确切版本而不是 ^range
   */
  export const install_option_exact: string;
  /**
   * - 🚩 **en**: Install packages for the matching workspaces
   * - **zh-CN**: 为匹配的工作区安装包
   */
  export const install_option_filter: string;
  /**
   * - 🚩 **en**: Always request the latest versions from the registry & reinstall all dependencies
   * - **zh-CN**: 始终从注册表请求最新版本并重新安装所有依赖
   */
  export const install_option_force: string;
  /**
   * - 🚩 **en**: Disallow changes to lockfile
   * - **zh-CN**: 禁止更改 lockfile
   */
  export const install_option_frozen_lockfile: string;
  /**
   * - 🚩 **en**: Install globally
   * - **zh-CN**: 全局安装
   */
  export const install_option_global: string;
  /**
   * - 🚩 **en**: Skip lifecycle scripts in the project's package.json (dependency scripts are never run)
   * - **zh-CN**: 跳过项目 package.json 中的生命周期脚本（依赖脚本从不运行）
   */
  export const install_option_ignore_scripts: string;
  /**
   * - 🚩 **en**: Linker strategy (one of "isolated" or "hoisted")
   * - **zh-CN**: 链接器策略（"isolated" 或 "hoisted"）
   */
  export const install_option_linker: string;
  /**
   * - 🚩 **en**: Generate a lockfile without installing dependencies
   * - **zh-CN**: 仅生成 lockfile 而不安装依赖
   */
  export const install_option_lockfile_only: string;
  /**
   * - 🚩 **en**: Only install packages published at least N seconds ago (security feature)
   * - **zh-CN**: 只安装至少 N 秒前发布的包（安全特性）
   */
  export const install_option_minimum_release_age: string;
  /**
   * - 🚩 **en**: Maximum number of concurrent network requests (default 48)
   * - **zh-CN**: 最大并发网络请求数（默认 48）
   */
  export const install_option_network_concurrency: string;
  /**
   * - 🚩 **en**: Ignore manifest cache entirely
   * - **zh-CN**: 完全忽略清单缓存
   */
  export const install_option_no_cache: string;
  /**
   * - 🚩 **en**: Disable the progress bar
   * - **zh-CN**: 禁用进度条
   */
  export const install_option_no_progress: string;
  /**
   * - 🚩 **en**: Don't update package.json or save a lockfile
   * - **zh-CN**: 不更新 package.json 或保存 lockfile
   */
  export const install_option_no_save: string;
  /**
   * - 🚩 **en**: Don't print a summary
   * - **zh-CN**: 不打印摘要
   */
  export const install_option_no_summary: string;
  /**
   * - 🚩 **en**: Skip verifying integrity of newly downloaded packages
   * - **zh-CN**: 跳过验证新下载包的完整性
   */
  export const install_option_no_verify: string;
  /**
   * - 🚩 **en**: Exclude 'dev', 'optional', or 'peer' dependencies from install
   * - **zh-CN**: 从安装中排除 'dev'、'optional' 或 'peer' 依赖
   */
  export const install_option_omit: string;
  /**
   * - 🚩 **en**: Only add dependencies to package.json if they are not already present
   * - **zh-CN**: 仅当 package.json 中尚不存在依赖时才添加
   */
  export const install_option_only_missing: string;
  /**
   * - 🚩 **en**: Add dependency to "optionalDependencies"
   * - **zh-CN**: 添加到 "optionalDependencies"
   */
  export const install_option_optional: string;
  /**
   * - 🚩 **en**: Override operating system for optional dependencies (e.g., linux, darwin, * for all)
   * - **zh-CN**: 覆盖可选依赖的操作系统（例如 linux、darwin、* 表示所有）
   */
  export const install_option_os: string;
  /**
   * - 🚩 **en**: Add dependency to "peerDependencies"
   * - **zh-CN**: 添加到 "peerDependencies"
   */
  export const install_option_peer: string;
  /**
   * - 🚩 **en**: Don't install devDependencies
   * - **zh-CN**: 不安装 devDependencies
   */
  export const install_option_production: string;
  /**
   * - 🚩 **en**: Only show tarball name when packing
   * - **zh-CN**: 打包时仅显示 tarball 名称
   */
  export const install_option_quiet: string;
  /**
   * - 🚩 **en**: Use a specific registry by default, overriding .npmrc, bunfig.toml and environment variables
   * - **zh-CN**: 默认使用特定注册表，覆盖 .npmrc、bunfig.toml 和环境变量
   */
  export const install_option_registry: string;
  /**
   * - 🚩 **en**: Save to package.json (true by default)
   * - **zh-CN**: 保存到 package.json（默认 true）
   */
  export const install_option_save: string;
  /**
   * - 🚩 **en**: Save a text-based lockfile
   * - **zh-CN**: 保存基于文本的 lockfile
   */
  export const install_option_save_text_lockfile: string;
  /**
   * - 🚩 **en**: Add to trustedDependencies in the project's package.json and install the package(s)
   * - **zh-CN**: 添加到项目的 package.json 中的 trustedDependencies 并安装包
   */
  export const install_option_trust: string;
  /**
   * - 🚩 **en**: Excessively verbose logging
   * - **zh-CN**: 极其详细的日志
   */
  export const install_option_verbose: string;
  /**
   * - 🚩 **en**: Write a yarn.lock file (yarn v1)
   * - **zh-CN**: 写入 yarn.lock 文件（yarn v1）
   */
  export const install_option_yarn: string;
  /**
   * - 🚩 **en**: Force a script or package to use Bun's runtime instead of Node.js (via symlinking node)
   * - **zh-CN**: 强制脚本或包使用 Bun 运行时代替 Node.js（通过 symlinking node）
   */
  export const option_bun: string;
  /**
   * - 🚩 **en**: Pass custom conditions to resolve
   * - **zh-CN**: 传递自定义条件以解析
   */
  export const option_conditions: string;
  /**
   * - 🚩 **en**: Specify path to Bun config file. Default $cwd/bunfig.toml
   * - **zh-CN**: 指定 Bun 配置文件的路径。默认 $cwd/bunfig.toml
   */
  export const option_config: string;
  /**
   * - 🚩 **en**: Set the default depth for console.log object inspection (default: 2)
   * - **zh-CN**: 设置 console.log 对象检查的默认深度（默认 2）
   */
  export const option_console_depth: string;
  /**
   * - 🚩 **en**: Start CPU profiler and write profile to disk on exit
   * - **zh-CN**: 启动 CPU 分析器，退出时将分析文件写入磁盘
   */
  export const option_cpu_prof: string;
  /**
   * - 🚩 **en**: Specify the directory where the CPU profile will be saved
   * - **zh-CN**: 指定 CPU 分析文件保存目录
   */
  export const option_cpu_prof_dir: string;
  /**
   * - 🚩 **en**: Specify the sampling interval in microseconds for CPU profiling (default: 1000)
   * - **zh-CN**: 指定 CPU 分析的采样间隔微秒数（默认 1000）
   */
  export const option_cpu_prof_interval: string;
  /**
   * - 🚩 **en**: Output CPU profile in markdown format (grep-friendly, designed for LLM analysis)
   * - **zh-CN**: 以 markdown 格式输出 CPU 分析（面向 LLM 分析，grep 友好）
   */
  export const option_cpu_prof_md: string;
  /**
   * - 🚩 **en**: Specify the name of the CPU profile file
   * - **zh-CN**: 指定 CPU 分析文件名
   */
  export const option_cpu_prof_name: string;
  /**
   * - 🚩 **en**: Cron period for cron execution mode
   * - **zh-CN**: cron 执行模式的周期
   */
  export const option_cron_period: string;
  /**
   * - 🚩 **en**: Title for cron execution mode
   * - **zh-CN**: cron 执行模式的标题
   */
  export const option_cron_title: string;
  /**
   * - 🚩 **en**: Absolute path to resolve files & entry points from. This just changes the process' cwd.
   * - **zh-CN**: 解析文件和入口点的绝对路径。仅更改进程的 cwd。
   */
  export const option_cwd: string;
  /**
   * - 🚩 **en**: Set the default order of DNS lookup results. Valid orders: verbatim (default), ipv4first, ipv6first
   * - **zh-CN**: 设置 DNS 查找结果的默认顺序。有效值：verbatim（默认）、ipv4first、ipv6first
   */
  export const option_dns_result_order: string;
  /**
   * - 🚩 **en**: Number of lines of script output shown when using --filter (default: 10). Set to 0 to show all lines.
   * - **zh-CN**: 使用 --filter 时显示的脚本输出行数（默认 10）。设为 0 显示所有行。
   */
  export const option_elide_lines: string;
  /**
   * - 🚩 **en**: Load environment variables from the specified file(s)
   * - **zh-CN**: 从指定文件加载环境变量
   */
  export const option_env_file: string;
  /**
   * - 🚩 **en**: Evaluate argument as a script
   * - **zh-CN**: 将参数作为脚本执行
   */
  export const option_eval: string;
  /**
   * - 🚩 **en**: Expose gc() on the global object. Has no effect on Bun.gc().
   * - **zh-CN**: 在全局对象上暴露 gc()。对 Bun.gc() 无效。
   */
  export const option_expose_gc: string;
  /**
   * - 🚩 **en**: Preconnect to a URL while code is loading
   * - **zh-CN**: 在代码加载时预连接到 URL
   */
  export const option_fetch_preconnect: string;
  /**
   * - 🚩 **en**: Run a script in all workspace packages matching the pattern
   * - **zh-CN**: 在所有匹配模式的工作区包中运行脚本
   */
  export const option_filter: string;
  /**
   * - 🚩 **en**: Generate V8 heap snapshot on exit (.heapsnapshot)
   * - **zh-CN**: 退出时生成 V8 堆快照 (.heapsnapshot)
   */
  export const option_heap_prof: string;
  /**
   * - 🚩 **en**: Specify the directory where the heap profile will be saved
   * - **zh-CN**: 指定堆分析文件保存目录
   */
  export const option_heap_prof_dir: string;
  /**
   * - 🚩 **en**: Generate markdown heap profile on exit (for CLI analysis)
   * - **zh-CN**: 退出时生成 markdown 堆分析（用于 CLI 分析）
   */
  export const option_heap_prof_md: string;
  /**
   * - 🚩 **en**: Specify the name of the heap profile file
   * - **zh-CN**: 指定堆分析文件名
   */
  export const option_heap_prof_name: string;
  /**
   * - 🚩 **en**: Display this help menu
   * - **zh-CN**: 显示此帮助菜单
   */
  export const option_help: string;
  /**
   * - 🚩 **en**: Enable auto reload in the Bun runtime, test runner, or bundler
   * - **zh-CN**: 在 Bun 运行时、测试运行器或打包器中启用自动重载
   */
  export const option_hot: string;
  /**
   * - 🚩 **en**: Auto-install dependencies during execution. Equivalent to --install=fallback.
   * - **zh-CN**: 执行时自动安装依赖。相当于 --install=fallback。
   */
  export const option_i: string;
  /**
   * - 🚩 **en**: Exit without an error if the entrypoint does not exist
   * - **zh-CN**: 如果入口点不存在则退出而不报错
   */
  export const option_if_present: string;
  /**
   * - 🚩 **en**: Activate Bun's debugger
   * - **zh-CN**: 激活 Bun 的调试器
   */
  export const option_inspect: string;
  /**
   * - 🚩 **en**: Activate Bun's debugger, set breakpoint on first line of code and wait
   * - **zh-CN**: 激活 Bun 的调试器，在第一行代码设置断点并等待
   */
  export const option_inspect_brk: string;
  /**
   * - 🚩 **en**: Activate Bun's debugger, wait for a connection before executing
   * - **zh-CN**: 激活 Bun 的调试器，等待连接后再执行
   */
  export const option_inspect_wait: string;
  /**
   * - 🚩 **en**: Configure auto-install behavior. One of "auto" (default, auto-installs when no node_modules), "fallback" (missing packages only), "force" (always).
   * - **zh-CN**: 配置自动安装行为。可选值："auto"（默认，当没有 node_modules 时自动安装）、"fallback"（仅缺失的包）、"force"（总是）
   */
  export const option_install: string;
  /**
   * - 🚩 **en**: Set the maximum size of HTTP headers in bytes. Default is 16KiB
   * - **zh-CN**: 设置 HTTP 头的最大字节数，默认 16KiB
   */
  export const option_max_http_header_size: string;
  /**
   * - 🚩 **en**: Throw an error if process.dlopen is called, and disable export condition "node-addons"
   * - **zh-CN**: 如果调用 process.dlopen 则抛出错误，并禁用导出条件 "node-addons"
   */
  export const option_no_addons: string;
  /**
   * - 🚩 **en**: Disable clearing the terminal screen on reload when --hot or --watch is enabled
   * - **zh-CN**: 当启用 --hot 或 --watch 时，禁止清屏
   */
  export const option_no_clear_screen: string;
  /**
   * - 🚩 **en**: Suppress all reporting of the custom deprecation.
   * - **zh-CN**: 禁止所有自定义弃用报告
   */
  export const option_no_deprecation: string;
  /**
   * - 🚩 **en**: Disable automatic loading of .env files
   * - **zh-CN**: 禁用自动加载 .env 文件
   */
  export const option_no_env_file: string;
  /**
   * - 🚩 **en**: Continue running other scripts when one fails (with --parallel/--sequential)
   * - **zh-CN**: 当一个脚本失败时继续运行其他脚本（与 --parallel/--sequential 一起使用）
   */
  export const option_no_exit_on_error: string;
  /**
   * - 🚩 **en**: Disable auto install in the Bun runtime
   * - **zh-CN**: 禁用 Bun 运行时的自动安装
   */
  export const option_no_install: string;
  /**
   * - 🚩 **en**: Run multiple scripts concurrently with Foreman-style output
   * - **zh-CN**: 使用 Foreman 风格的输出并发运行多个脚本
   */
  export const option_parallel: string;
  /**
   * - 🚩 **en**: Set the default port for Bun.serve
   * - **zh-CN**: 设置 Bun.serve 的默认端口
   */
  export const option_port: string;
  /**
   * - 🚩 **en**: Use the latest matching versions of packages in the Bun runtime, always checking npm
   * - **zh-CN**: 在 Bun 运行时中使用最新的匹配版本，始终检查 npm
   */
  export const option_prefer_latest: string;
  /**
   * - 🚩 **en**: Skip staleness checks for packages in the Bun runtime and resolve from disk
   * - **zh-CN**: 跳过 Bun 运行时中的包陈旧检查，从磁盘解析
   */
  export const option_prefer_offline: string;
  /**
   * - 🚩 **en**: Import a module before other modules are loaded
   * - **zh-CN**: 在其他模块加载前导入一个模块
   */
  export const option_preload: string;
  /**
   * - 🚩 **en**: Evaluate argument as a script and print the result
   * - **zh-CN**: 将参数作为脚本执行并打印结果
   */
  export const option_print: string;
  /**
   * - 🚩 **en**: Preconnect to $REDIS_URL at startup
   * - **zh-CN**: 启动时预连接到 $REDIS_URL
   */
  export const option_redis_preconnect: string;
  /**
   * - 🚩 **en**: Print version with revision and exit
   * - **zh-CN**: 打印带修订号的版本并退出
   */
  export const option_revision: string;
  /**
   * - 🚩 **en**: Run multiple scripts sequentially with Foreman-style output
   * - **zh-CN**: 使用 Foreman 风格的输出顺序运行多个脚本
   */
  export const option_sequential: string;
  /**
   * - 🚩 **en**: Control the shell used for package.json scripts. Supports either 'bun' or 'system'
   * - **zh-CN**: 控制 package.json 脚本使用的 shell。支持 'bun' 或 'system'
   */
  export const option_shell: string;
  /**
   * - 🚩 **en**: Don't print the script command
   * - **zh-CN**: 不打印脚本命令
   */
  export const option_silent: string;
  /**
   * - 🚩 **en**: Use less memory, but run garbage collection more often
   * - **zh-CN**: 使用更少内存，但更频繁地运行垃圾回收
   */
  export const option_smol: string;
  /**
   * - 🚩 **en**: Preconnect to PostgreSQL at startup
   * - **zh-CN**: 启动时预连接到 PostgreSQL
   */
  export const option_sql_preconnect: string;
  /**
   * - 🚩 **en**: Determine whether or not deprecation warnings result in errors.
   * - **zh-CN**: 决定弃用警告是否导致错误
   */
  export const option_throw_deprecation: string;
  /**
   * - 🚩 **en**: Set the process title
   * - **zh-CN**: 设置进程标题
   */
  export const option_title: string;
  /**
   * - 🚩 **en**: One of "strict", "throw", "warn", "none", or "warn-with-error-code"
   * - **zh-CN**: 可选值："strict"、"throw"、"warn"、"none" 或 "warn-with-error-code"
   */
  export const option_unhandled_rejections: string;
  /**
   * - 🚩 **en**: Use bundled CA store
   * - **zh-CN**: 使用捆绑的 CA 存储
   */
  export const option_use_bundled_ca: string;
  /**
   * - 🚩 **en**: Use OpenSSL's default CA store
   * - **zh-CN**: 使用 OpenSSL 的默认 CA 存储
   */
  export const option_use_openssl_ca: string;
  /**
   * - 🚩 **en**: Use the system's trusted certificate authorities
   * - **zh-CN**: 使用系统的可信证书颁发机构
   */
  export const option_use_system_ca: string;
  /**
   * - 🚩 **en**: Set the default User-Agent header for HTTP requests
   * - **zh-CN**: 设置 HTTP 请求的默认 User-Agent 头
   */
  export const option_user_agent: string;
  /**
   * - 🚩 **en**: Print version and exit
   * - **zh-CN**: 打印版本并退出
   */
  export const option_version: string;
  /**
   * - 🚩 **en**: Automatically restart the process on file change
   * - **zh-CN**: 文件变化时自动重启进程
   */
  export const option_watch: string;
  /**
   * - 🚩 **en**: Run a script in all workspace packages (from the "workspaces" field in package.json)
   * - **zh-CN**: 在所有工作区包中运行脚本（来自 package.json 中的 "workspaces" 字段）
   */
  export const option_workspaces: string;
  /**
   * - 🚩 **en**: Boolean to force Buffer.allocUnsafe(size) to be zero-filled.
   * - **zh-CN**: 强制 Buffer.allocUnsafe(size) 零填充
   */
  export const option_zero_fill_buffers: string;
  /**
   * - 🚩 **en**: Check outdated packages in all workspaces
   * - **zh-CN**: 检查所有工作区中的过时包
   */
  export const outdated_option_recursive: string;
  /**
   * - 🚩 **en**: Install a package containing modifications in `dir`
   * - **zh-CN**: 安装包含 `dir` 中修改的包
   */
  export const patch_option_commit: string;
  /**
   * - 🚩 **en**: The directory to put the patch file in (only if --commit is used)
   * - **zh-CN**: 放置补丁文件的目录（仅当使用 --commit 时）
   */
  export const patch_option_patches_dir: string;
  /**
   * - 🚩 **en**: print the path to bin folder
   * - **zh-CN**: 打印 bin 文件夹的路径
   */
  export const pm_bin_desc: string;
  /**
   * - 🚩 **en**: print the global path to bin folder
   * - **zh-CN**: 打印全局 bin 文件夹路径
   */
  export const pm_bin_option_g: string;
  /**
   * - 🚩 **en**: print the path to the cache folder
   * - **zh-CN**: 打印缓存文件夹的路径
   */
  export const pm_cache_desc: string;
  /**
   * - 🚩 **en**: clear the cache
   * - **zh-CN**: 清空缓存
   */
  export const pm_cache_rm_desc: string;
  /**
   * - 🚩 **en**: print the default trusted dependencies list
   * - **zh-CN**: 打印默认的可信依赖列表
   */
  export const pm_default_trusted_desc: string;
  /**
   * - 🚩 **en**: generate & print the hash of the current lockfile
   * - **zh-CN**: 生成并打印当前 lockfile 的哈希值
   */
  export const pm_hash_desc: string;
  /**
   * - 🚩 **en**: print the hash stored in the current lockfile
   * - **zh-CN**: 打印当前 lockfile 中存储的哈希值
   */
  export const pm_hash_print_desc: string;
  /**
   * - 🚩 **en**: print the string used to hash the lockfile
   * - **zh-CN**: 打印用于哈希 lockfile 的字符串
   */
  export const pm_hash_string_desc: string;
  /**
   * - 🚩 **en**: list the dependency tree according to the current lockfile
   * - **zh-CN**: 列出当前 lockfile 的依赖树
   */
  export const pm_list_desc: string;
  /**
   * - 🚩 **en**: list the entire dependency tree according to the current lockfile
   * - **zh-CN**: 列出当前 lockfile 的完整依赖树
   */
  export const pm_list_option_all: string;
  /**
   * - 🚩 **en**: migrate another package manager's lockfile without installing anything
   * - **zh-CN**: 迁移其他包管理器的 lockfile 而不安装任何东西
   */
  export const pm_migrate_desc: string;
  /**
   * - 🚩 **en**: create a tarball of the current workspace
   * - **zh-CN**: 创建当前工作区的 tarball
   */
  export const pm_pack_desc: string;
  /**
   * - 🚩 **en**: the directory the tarball will be saved in
   * - **zh-CN**: tarball 保存到的目录
   */
  export const pm_pack_option_destination: string;
  /**
   * - 🚩 **en**: the name of the tarball
   * - **zh-CN**: tarball 的名称
   */
  export const pm_pack_option_filename: string;
  /**
   * - 🚩 **en**: specify a custom compression level for gzip (0-9, default is 9)
   * - **zh-CN**: 指定 gzip 压缩级别（0-9，默认 9）
   */
  export const pm_pack_option_gzip_level: string;
  /**
   * - 🚩 **en**: don't run pre/postpack and prepare scripts
   * - **zh-CN**: 不运行 pre/postpack 和 prepare 脚本
   */
  export const pm_pack_option_ignore_scripts: string;
  /**
   * - 🚩 **en**: only output the tarball filename
   * - **zh-CN**: 仅输出 tarball 文件名
   */
  export const pm_pack_option_quiet: string;
  /**
   * - 🚩 **en**: manage data in package.json
   * - **zh-CN**: 管理 package.json 中的数据
   */
  export const pm_pkg_desc: string;
  /**
   * - 🚩 **en**: scan all packages in lockfile for security vulnerabilities
   * - **zh-CN**: 扫描 lockfile 中所有包的安全漏洞
   */
  export const pm_scan_desc: string;
  /**
   * - 🚩 **en**: run scripts for untrusted dependencies and add to `trustedDependencies`
   * - **zh-CN**: 为不可信依赖运行脚本并添加到 `trustedDependencies`
   */
  export const pm_trust_desc: string;
  /**
   * - 🚩 **en**: trust all untrusted dependencies
   * - **zh-CN**: 信任所有不可信的依赖
   */
  export const pm_trust_option_all: string;
  /**
   * - 🚩 **en**: print current untrusted dependencies with scripts
   * - **zh-CN**: 打印当前带有脚本的不可信依赖
   */
  export const pm_untrusted_desc: string;
  /**
   * - 🚩 **en**: bump the version in package.json and create a git tag
   * - **zh-CN**: 提升 package.json 中的版本并创建 git 标签
   */
  export const pm_version_desc: string;
  /**
   * - 🚩 **en**: version increment: patch, minor, major, prepatch, preminor, premajor, prerelease, from-git, or a specific version
   * - **zh-CN**: 版本增量：patch、minor、major、prepatch、preminor、premajor、prerelease、from-git 或特定版本
   */
  export const pm_version_increment: string;
  /**
   * - 🚩 **en**: view package metadata from the registry (use `bun info` instead)
   * - **zh-CN**: 查看注册表中的包元数据（改用 `bun info`）
   */
  export const pm_view_desc: string;
  /**
   * - 🚩 **en**: print the current npm username
   * - **zh-CN**: 打印当前 npm 用户名
   */
  export const pm_whoami_desc: string;
  /**
   * - 🚩 **en**: show dependency tree explaining why a package is installed
   * - **zh-CN**: 显示解释为什么安装了某个包的依赖树
   */
  export const pm_why_desc: string;
  /**
   * - 🚩 **en**: Set access level for scoped packages
   * - **zh-CN**: 设置作用域包的访问级别
   */
  export const publish_option_access: string;
  /**
   * - 🚩 **en**: Specify the type of one-time password authentication (default is 'web')
   * - **zh-CN**: 指定一次性密码身份验证类型（默认 'web'）
   */
  export const publish_option_auth_type: string;
  /**
   * - 🚩 **en**: Specify a custom compression level for gzip. Default is 9.
   * - **zh-CN**: 指定 gzip 的自定义压缩级别。默认 9。
   */
  export const publish_option_gzip_level: string;
  /**
   * - 🚩 **en**: Provide a one-time password for authentication
   * - **zh-CN**: 提供一次性密码进行身份验证
   */
  export const publish_option_otp: string;
  /**
   * - 🚩 **en**: Tag the release. Default is "latest"
   * - **zh-CN**: 标记发布版本。默认 "latest"
   */
  export const publish_option_tag: string;
  /**
   * - 🚩 **en**: Don't exit with code 1 when republishing over an existing version number
   * - **zh-CN**: 重新发布到现有版本号时不退出并返回代码 1
   */
  export const publish_option_tolerate_republish: string;
  /**
   * - 🚩 **en**: Substitute K:V while parsing, e.g. --define process.env.NODE_ENV:"development". Values are parsed as JSON.
   * - **zh-CN**: 解析时替换 K:V，例如 --define process.env.NODE_ENV:"development"，值被解析为 JSON
   */
  export const run_option_define: string;
  /**
   * - 🚩 **en**: Remove function calls, e.g. --drop=console removes all console.* calls.
   * - **zh-CN**: 移除函数调用，例如 --drop=console 移除所有 console.* 调用
   */
  export const run_option_drop: string;
  /**
   * - 🚩 **en**: Defaults to: .tsx,.ts,.jsx,.js,.json
   * - **zh-CN**: 默认为：.tsx,.ts,.jsx,.js,.json
   */
  export const run_option_extension_order: string;
  /**
   * - 🚩 **en**: Enable a feature flag for dead-code elimination, e.g. --feature=SUPER_SECRET
   * - **zh-CN**: 为死代码消除启用特性标志，例如 --feature=SUPER_SECRET
   */
  export const run_option_feature: string;
  /**
   * - 🚩 **en**: Ignore tree-shaking annotations such as @__PURE__
   * - **zh-CN**: 忽略树摇注释，例如 @__PURE__
   */
  export const run_option_ignore_dce_annotations: string;
  /**
   * - 🚩 **en**: Changes the function called when compiling JSX elements using the classic JSX runtime
   * - **zh-CN**: 更改使用经典 JSX 运行时编译 JSX 元素时调用的函数
   */
  export const run_option_jsx_factory: string;
  /**
   * - 🚩 **en**: Changes the function called when compiling JSX fragments
   * - **zh-CN**: 更改编译 JSX 片段时调用的函数
   */
  export const run_option_jsx_fragment: string;
  /**
   * - 🚩 **en**: Declares the module specifier to be used for importing the jsx and jsxs factory functions. Default: "react"
   * - **zh-CN**: 声明用于导入 jsx 和 jsxs 工厂函数的模块标识符。默认："react"
   */
  export const run_option_jsx_import_source: string;
  /**
   * - 🚩 **en**: "automatic" (default) or "classic"
   * - **zh-CN**: "automatic"（默认）或 "classic"
   */
  export const run_option_jsx_runtime: string;
  /**
   * - 🚩 **en**: Treat JSX elements as having side effects (disable pure annotations)
   * - **zh-CN**: 将 JSX 元素视为具有副作用（禁用纯注释）
   */
  export const run_option_jsx_side_effects: string;
  /**
   * - 🚩 **en**: Parse files with .ext:loader, e.g. --loader .js:jsx. Valid loaders: js, jsx, ts, tsx, json, toml, text, file, wasm, napi
   * - **zh-CN**: 使用 .ext:loader 解析文件，例如 --loader .js:jsx。有效加载器：js, jsx, ts, tsx, json, toml, text, file, wasm, napi
   */
  export const run_option_loader: string;
  /**
   * - 🚩 **en**: Main fields to lookup in package.json. Defaults to --target dependent
   * - **zh-CN**: package.json 中查找的主字段。默认取决于 --target
   */
  export const run_option_main_fields: string;
  /**
   * - 🚩 **en**: Disable macros from being executed in the bundler, transpiler and runtime
   * - **zh-CN**: 禁止在打包器、转译器和运行时中执行宏
   */
  export const run_option_no_macros: string;
  /**
   * - 🚩 **en**: Preserve symlinks when resolving files
   * - **zh-CN**: 解析文件时保留符号链接
   */
  export const run_option_preserve_symlinks: string;
  /**
   * - 🚩 **en**: Preserve symlinks when resolving the main entry point
   * - **zh-CN**: 解析主入口点时保留符号链接
   */
  export const run_option_preserve_symlinks_main: string;
  /**
   * - 🚩 **en**: Specify custom tsconfig.json. Default $cwd/tsconfig.json
   * - **zh-CN**: 指定自定义 tsconfig.json。默认 $cwd/tsconfig.json
   */
  export const run_option_tsconfig_override: string;
  /**
   * - 🚩 **en**: file
   * - **zh-CN**: 文件
   */
  export const suggestion_file: string;
  /**
   * - 🚩 **en**: globally installed
   * - **zh-CN**: 全局已安装
   */
  export const suggestion_global_installed: string;
  /**
   * - 🚩 **en**: installed
   * - **zh-CN**: 已安装
   */
  export const suggestion_installed: string;
  /**
   * - 🚩 **en**: package bin
   * - **zh-CN**: 包可执行文件
   */
  export const suggestion_package_bin: string;
  /**
   * - 🚩 **en**: package from registry
   * - **zh-CN**: 来自注册表的包
   */
  export const suggestion_package_from_registry: string;
  /**
   * - 🚩 **en**: script
   * - **zh-CN**: 脚本
   */
  export const suggestion_script: string;
  /**
   * - 🚩 **en**: Exit the test suite after <NUMBER> failures. If you do not specify a number, it defaults to 1.
   * - **zh-CN**: 在 N 次失败后退出测试套件。未指定数字时默认为 1。
   */
  export const test_option_bail: string;
  /**
   * - 🚩 **en**: Only run test files affected by changed files according to git. Optionally pass a commit or branch to compare against.
   * - **zh-CN**: 只运行受 git 更改影响的测试文件。可选传递要比较的提交或分支。
   */
  export const test_option_changed: string;
  /**
   * - 🚩 **en**: Treat all tests as `test.concurrent()` tests
   * - **zh-CN**: 将所有测试视为 test.concurrent() 测试
   */
  export const test_option_concurrent: string;
  /**
   * - 🚩 **en**: Generate a coverage profile
   * - **zh-CN**: 生成覆盖率报告
   */
  export const test_option_coverage: string;
  /**
   * - 🚩 **en**: Directory for coverage files. Defaults to 'coverage'.
   * - **zh-CN**: 覆盖率文件目录，默认 'coverage'
   */
  export const test_option_coverage_dir: string;
  /**
   * - 🚩 **en**: Report coverage in 'text' and/or 'lcov'. Defaults to 'text'.
   * - **zh-CN**: 报告覆盖率格式：'text' 和/或 'lcov'。默认 'text'。
   */
  export const test_option_coverage_reporter: string;
  /**
   * - 🚩 **en**: Enable dots reporter. Shorthand for --reporter=dots.
   * - **zh-CN**: 启用 dots 报告器。--reporter=dots 的简写。
   */
  export const test_option_dots: string;
  /**
   * - 🚩 **en**: Run each test file in a fresh global object. Leaked handles from one file cannot affect another.
   * - **zh-CN**: 在每个干净的全局对象中运行每个测试文件。一个文件泄漏的句柄不会影响另一个。
   */
  export const test_option_isolate: string;
  /**
   * - 🚩 **en**: Maximum number of concurrent tests to execute at once. Default is 20.
   * - **zh-CN**: 同时执行的最大并发测试数，默认 20
   */
  export const test_option_max_concurrency: string;
  /**
   * - 🚩 **en**: Run only tests that are marked with "test.only()" or "describe.only()"
   * - **zh-CN**: 只运行标记为 test.only() 或 describe.only() 的测试
   */
  export const test_option_only: string;
  /**
   * - 🚩 **en**: Only display test failures, hiding passing tests.
   * - **zh-CN**: 仅显示失败的测试，隐藏通过的测试
   */
  export const test_option_only_failures: string;
  /**
   * - 🚩 **en**: Run test files in parallel using N worker processes. Implies --isolate. Defaults to CPU core count.
   * - **zh-CN**: 使用 N 个工作进程并行运行测试文件。意味着 --isolate。默认为 CPU 核心数。
   */
  export const test_option_parallel: string;
  /**
   * - 🚩 **en**: Milliseconds the first --parallel worker must be busy before spawning the rest. 0 spawns all immediately. Default 5.
   * - **zh-CN**: 第一个 --parallel 工作进程必须忙碌多少毫秒后才能启动其余进程。0 立即全部启动。默认 5。
   */
  export const test_option_parallel_delay: string;
  /**
   * - 🚩 **en**: Exit with code 0 when no tests are found
   * - **zh-CN**: 当未找到测试时以代码 0 退出
   */
  export const test_option_pass_with_no_tests: string;
  /**
   * - 🚩 **en**: Glob patterns for test file paths to ignore.
   * - **zh-CN**: 要忽略的测试文件路径的 glob 模式
   */
  export const test_option_path_ignore_patterns: string;
  /**
   * - 🚩 **en**: Run tests in random order
   * - **zh-CN**: 随机顺序运行测试
   */
  export const test_option_randomize: string;
  /**
   * - 🚩 **en**: Test output reporter format. Available: 'junit' (requires --reporter-outfile), 'dots'. Default: console output.
   * - **zh-CN**: 测试输出报告器格式。可用：'junit'（需要 --reporter-outfile）、'dots'。默认控制台输出。
   */
  export const test_option_reporter: string;
  /**
   * - 🚩 **en**: Output file path for the reporter format (required with --reporter).
   * - **zh-CN**: 报告器格式的输出文件路径（与 --reporter 一起使用）
   */
  export const test_option_reporter_outfile: string;
  /**
   * - 🚩 **en**: Re-run each test file <NUMBER> times, helps catch certain bugs
   * - **zh-CN**: 重新运行每个测试文件 N 次，帮助捕捉某些 bug
   */
  export const test_option_rerun_each: string;
  /**
   * - 🚩 **en**: Default retry count for all tests, overridden by per-test { retry: N }
   * - **zh-CN**: 所有测试的默认重试次数，可被每个测试的 { retry: N } 覆盖
   */
  export const test_option_retry: string;
  /**
   * - 🚩 **en**: Set the random seed for test randomization
   * - **zh-CN**: 设置测试随机化的随机种子
   */
  export const test_option_seed: string;
  /**
   * - 🚩 **en**: Run a subset of test files, e.g. '--shard=1/3' runs the first of three shards. Useful for splitting tests across multiple CI jobs.
   * - **zh-CN**: 运行测试文件的子集，例如 '--shard=1/3' 运行三个分片中的第一个。用于在多个 CI 任务间拆分测试。
   */
  export const test_option_shard: string;
  /**
   * - 🚩 **en**: Run only tests with a name that matches the given regex.
   * - **zh-CN**: 只运行名称匹配给定正则表达式的测试
   */
  export const test_option_test_name_pattern: string;
  /**
   * - 🚩 **en**: (internal) Run as a --parallel worker, receiving files over IPC.
   * - **zh-CN**: （内部）作为 --parallel 工作进程运行，通过 IPC 接收文件
   */
  export const test_option_test_worker: string;
  /**
   * - 🚩 **en**: Set the per-test timeout in milliseconds, default is 5000.
   * - **zh-CN**: 设置每个测试的超时毫秒数，默认 5000
   */
  export const test_option_timeout: string;
  /**
   * - 🚩 **en**: Include tests that are marked with "test.todo()"
   * - **zh-CN**: 包含标记为 test.todo() 的测试
   */
  export const test_option_todo: string;
  /**
   * - 🚩 **en**: Update snapshot files
   * - **zh-CN**: 更新快照文件
   */
  export const test_option_update_snapshots: string;
  /**
   * - 🚩 **en**: Show an interactive list of outdated packages to select for update
   * - **zh-CN**: 显示交互式过时包列表以供选择更新
   */
  export const update_option_interactive: string;
  /**
   * - 🚩 **en**: Update packages to their latest versions
   * - **zh-CN**: 将包更新到最新版本
   */
  export const update_option_latest: string;
  /**
   * - 🚩 **en**: Update packages in all workspaces
   * - **zh-CN**: 更新所有工作区中的包
   */
  export const update_option_recursive: string;
  /**
   * - 🚩 **en**: Install the most recent canary version of Bun
   * - **zh-CN**: 安装最新的 canary 版 Bun
   */
  export const upgrade_option_canary: string;
  /**
   * - 🚩 **en**: Maximum depth of the dependency tree to display
   * - **zh-CN**: 要显示的依赖树最大深度
   */
  export const why_option_depth: string;
  /**
   * - 🚩 **en**: Show only the top dependency tree instead of nested ones
   * - **zh-CN**: 仅显示顶层依赖树而不显示嵌套
   */
  export const why_option_top: string;
  /**
   * - 🚩 **en**: Specify package to install when binary name differs from package name
   * - **zh-CN**: 当二进制名称与包名称不同时指定要安装的包
   */
  export const x_option_package: string;
  /**
   * - 🚩 **en**: Enable verbose output during installation
   * - **zh-CN**: 在安装期间启用详细输出
   */
  export const x_option_verbose: string;
}

declare module "virtual:i18n/docker" {
  /**
   * - 🚩 **en**: Attach local standard input, output, and error streams to a running container
   * - **zh-CN**: 将本地标准输入输出错误流附加到运行中的容器
   */
  export const cmd_attach: string;
  /**
   * - 🚩 **en**: Build from a file
   * - **zh-CN**: 从文件构建
   */
  export const cmd_bake: string;
  /**
   * - 🚩 **en**: Build an image from a Dockerfile
   * - **zh-CN**: 从 Dockerfile 构建镜像
   */
  export const cmd_build: string;
  /**
   * - 🚩 **en**: Manage builds
   * - **zh-CN**: 管理构建
   */
  export const cmd_builder: string;
  /**
   * - 🚩 **en**: Build from a file
   * - **zh-CN**: 从文件构建
   */
  export const cmd_builder_bake: string;
  /**
   * - 🚩 **en**: Start a build
   * - **zh-CN**: 开始构建
   */
  export const cmd_builder_build: string;
  /**
   * - 🚩 **en**: Create a new builder instance
   * - **zh-CN**: 创建新的构建器实例
   */
  export const cmd_builder_create: string;
  /**
   * - 🚩 **en**: Start debug adapter protocol compatible debugger
   * - **zh-CN**: 启动调试适配器协议兼容调试器
   */
  export const cmd_builder_dap: string;
  /**
   * - 🚩 **en**: Proxy current stdio streams to builder instance
   * - **zh-CN**: 将当前 stdio 流代理到构建器实例
   */
  export const cmd_builder_dial_stdio: string;
  /**
   * - 🚩 **en**: Disk usage
   * - **zh-CN**: 磁盘使用情况
   */
  export const cmd_builder_du: string;
  /**
   * - 🚩 **en**: Commands to work on build records
   * - **zh-CN**: 构建记录相关命令
   */
  export const cmd_builder_history: string;
  /**
   * - 🚩 **en**: Commands to work on images in registry
   * - **zh-CN**: 注册表中镜像相关命令
   */
  export const cmd_builder_imagetools: string;
  /**
   * - 🚩 **en**: Inspect current builder instance
   * - **zh-CN**: 检查当前构建器实例
   */
  export const cmd_builder_inspect: string;
  /**
   * - 🚩 **en**: List builder instances
   * - **zh-CN**: 列出构建器实例
   */
  export const cmd_builder_ls: string;
  /**
   * - 🚩 **en**: Commands for working with build policies
   * - **zh-CN**: 构建策略相关命令
   */
  export const cmd_builder_policy: string;
  /**
   * - 🚩 **en**: Remove build cache
   * - **zh-CN**: 删除构建缓存
   */
  export const cmd_builder_prune: string;
  /**
   * - 🚩 **en**: Remove one or more builder instances
   * - **zh-CN**: 删除一个或多个构建器实例
   */
  export const cmd_builder_rm: string;
  /**
   * - 🚩 **en**: Stop builder instance
   * - **zh-CN**: 停止构建器实例
   */
  export const cmd_builder_stop: string;
  /**
   * - 🚩 **en**: Set the current builder instance
   * - **zh-CN**: 设置当前构建器实例
   */
  export const cmd_builder_use: string;
  /**
   * - 🚩 **en**: Show buildx version information
   * - **zh-CN**: 显示构建版本信息
   */
  export const cmd_builder_version: string;
  /**
   * - 🚩 **en**: Manage checkpoints
   * - **zh-CN**: 管理检查点
   */
  export const cmd_checkpoint: string;
  /**
   * - 🚩 **en**: Create a checkpoint from a running container
   * - **zh-CN**: 从运行中的容器创建检查点
   */
  export const cmd_checkpoint_create: string;
  /**
   * - 🚩 **en**: List checkpoints for a container
   * - **zh-CN**: 列出容器的检查点
   */
  export const cmd_checkpoint_ls: string;
  /**
   * - 🚩 **en**: Remove a checkpoint
   * - **zh-CN**: 删除检查点
   */
  export const cmd_checkpoint_rm: string;
  /**
   * - 🚩 **en**: Create a new image from a container's changes
   * - **zh-CN**: 从容器的变更创建新镜像
   */
  export const cmd_commit: string;
  /**
   * - 🚩 **en**: Docker Compose
   * - **zh-CN**: Docker Compose 多容器应用
   */
  export const cmd_compose: string;
  /**
   * - 🚩 **en**: Attach local standard input, output, and error streams to a service's running container
   * - **zh-CN**: 将本地标准输入输出错误流附加到服务的运行中容器
   */
  export const cmd_compose_attach: string;
  /**
   * - 🚩 **en**: Convert compose files into another model
   * - **zh-CN**: 将 Compose 文件转换为其他模型
   */
  export const cmd_compose_bridge: string;
  /**
   * - 🚩 **en**: Build or rebuild services
   * - **zh-CN**: 构建或重建服务
   */
  export const cmd_compose_build: string;
  /**
   * - 🚩 **en**: Create a new image from a service container's changes
   * - **zh-CN**: 从容器的变更创建新镜像
   */
  export const cmd_compose_commit: string;
  /**
   * - 🚩 **en**: Validate and view the Compose file
   * - **zh-CN**: 验证并查看 Compose 文件
   */
  export const cmd_compose_config: string;
  /**
   * - 🚩 **en**: Copy files/folders between a service container and the local filesystem
   * - **zh-CN**: 在服务容器和本地文件系统之间复制文件
   */
  export const cmd_compose_cp: string;
  /**
   * - 🚩 **en**: Create containers
   * - **zh-CN**: 创建容器
   */
  export const cmd_compose_create: string;
  /**
   * - 🚩 **en**: Stop and remove containers, networks
   * - **zh-CN**: 停止并删除容器、网络
   */
  export const cmd_compose_down: string;
  /**
   * - 🚩 **en**: Receive real time events from containers
   * - **zh-CN**: 接收容器的实时事件
   */
  export const cmd_compose_events: string;
  /**
   * - 🚩 **en**: Execute a command in a running container
   * - **zh-CN**: 在运行中的容器内执行命令
   */
  export const cmd_compose_exec: string;
  /**
   * - 🚩 **en**: Export a service container's filesystem as a tar archive
   * - **zh-CN**: 将服务容器的文件系统导出为 tar 归档
   */
  export const cmd_compose_export: string;
  /**
   * - 🚩 **en**: List images used by the created containers
   * - **zh-CN**: 列出已创建容器使用的镜像
   */
  export const cmd_compose_images: string;
  /**
   * - 🚩 **en**: Kill containers
   * - **zh-CN**: 杀死容器
   */
  export const cmd_compose_kill: string;
  /**
   * - 🚩 **en**: View output from containers
   * - **zh-CN**: 查看容器输出
   */
  export const cmd_compose_logs: string;
  /**
   * - 🚩 **en**: List running compose projects
   * - **zh-CN**: 列出运行中的 compose 项目
   */
  export const cmd_compose_ls: string;
  /**
   * - 🚩 **en**: Pause services
   * - **zh-CN**: 暂停服务
   */
  export const cmd_compose_pause: string;
  /**
   * - 🚩 **en**: Print the public port for a port binding
   * - **zh-CN**: 打印端口绑定的公共端口
   */
  export const cmd_compose_port: string;
  /**
   * - 🚩 **en**: List containers
   * - **zh-CN**: 列出容器
   */
  export const cmd_compose_ps: string;
  /**
   * - 🚩 **en**: Publish compose application
   * - **zh-CN**: 发布 compose 应用
   */
  export const cmd_compose_publish: string;
  /**
   * - 🚩 **en**: Pull service images
   * - **zh-CN**: 拉取服务镜像
   */
  export const cmd_compose_pull: string;
  /**
   * - 🚩 **en**: Push service images
   * - **zh-CN**: 推送服务镜像
   */
  export const cmd_compose_push: string;
  /**
   * - 🚩 **en**: Restart services
   * - **zh-CN**: 重启服务
   */
  export const cmd_compose_restart: string;
  /**
   * - 🚩 **en**: Remove stopped service containers
   * - **zh-CN**: 删除已停止的服务容器
   */
  export const cmd_compose_rm: string;
  /**
   * - 🚩 **en**: Run a one-off command
   * - **zh-CN**: 运行一次性命令
   */
  export const cmd_compose_run: string;
  /**
   * - 🚩 **en**: Set number of containers for a service
   * - **zh-CN**: 设置服务的容器数量
   */
  export const cmd_compose_scale: string;
  /**
   * - 🚩 **en**: Start services
   * - **zh-CN**: 启动服务
   */
  export const cmd_compose_start: string;
  /**
   * - 🚩 **en**: Display a live stream of container(s) resource usage statistics
   * - **zh-CN**: 实时显示容器的资源使用统计
   */
  export const cmd_compose_stats: string;
  /**
   * - 🚩 **en**: Stop services
   * - **zh-CN**: 停止服务
   */
  export const cmd_compose_stop: string;
  /**
   * - 🚩 **en**: Display the running processes
   * - **zh-CN**: 显示运行中的进程
   */
  export const cmd_compose_top: string;
  /**
   * - 🚩 **en**: Unpause services
   * - **zh-CN**: 恢复服务
   */
  export const cmd_compose_unpause: string;
  /**
   * - 🚩 **en**: Create and start containers
   * - **zh-CN**: 创建并启动容器
   */
  export const cmd_compose_up: string;
  /**
   * - 🚩 **en**: Show version information
   * - **zh-CN**: 显示版本信息
   */
  export const cmd_compose_version: string;
  /**
   * - 🚩 **en**: List volumes
   * - **zh-CN**: 列出卷
   */
  export const cmd_compose_volumes: string;
  /**
   * - 🚩 **en**: Block until containers of all (or specified) services stop
   * - **zh-CN**: 等待所有（或指定）服务的容器停止
   */
  export const cmd_compose_wait: string;
  /**
   * - 🚩 **en**: Watch build context for service and rebuild/refresh containers when files are updated
   * - **zh-CN**: 监视构建上下文并在文件更新时重建/刷新容器
   */
  export const cmd_compose_watch: string;
  /**
   * - 🚩 **en**: Manage Swarm configs
   * - **zh-CN**: 管理 Swarm 配置
   */
  export const cmd_config: string;
  /**
   * - 🚩 **en**: Create a config from a file or STDIN
   * - **zh-CN**: 从文件或 STDIN 创建配置
   */
  export const cmd_config_create: string;
  /**
   * - 🚩 **en**: Display detailed information on one or more configs
   * - **zh-CN**: 查看配置详细信息
   */
  export const cmd_config_inspect: string;
  /**
   * - 🚩 **en**: List configs
   * - **zh-CN**: 列出配置
   */
  export const cmd_config_ls: string;
  /**
   * - 🚩 **en**: Remove one or more configs
   * - **zh-CN**: 删除一个或多个配置
   */
  export const cmd_config_rm: string;
  /**
   * - 🚩 **en**: Manage containers
   * - **zh-CN**: 管理容器
   */
  export const cmd_container: string;
  /**
   * - 🚩 **en**: Attach local standard input, output, and error streams to a running container
   * - **zh-CN**: 附加到运行中的容器
   */
  export const cmd_container_attach: string;
  /**
   * - 🚩 **en**: Create a new image from a container's changes
   * - **zh-CN**: 从容器的变更创建新镜像
   */
  export const cmd_container_commit: string;
  /**
   * - 🚩 **en**: Copy files/folders between a container and the local filesystem
   * - **zh-CN**: 复制文件到/从容器
   */
  export const cmd_container_cp: string;
  /**
   * - 🚩 **en**: Create a new container
   * - **zh-CN**: 创建新容器
   */
  export const cmd_container_create: string;
  /**
   * - 🚩 **en**: Inspect changes to files or directories on a container's filesystem
   * - **zh-CN**: 检查容器文件系统变更
   */
  export const cmd_container_diff: string;
  /**
   * - 🚩 **en**: Execute a command in a running container
   * - **zh-CN**: 在容器中执行命令
   */
  export const cmd_container_exec: string;
  /**
   * - 🚩 **en**: Return low-level information on a container
   * - **zh-CN**: 查看容器详细信息
   */
  export const cmd_container_inspect: string;
  /**
   * - 🚩 **en**: Kill one or more running containers
   * - **zh-CN**: 杀死运行中的容器
   */
  export const cmd_container_kill: string;
  /**
   * - 🚩 **en**: Fetch the logs of a container
   * - **zh-CN**: 获取容器日志
   */
  export const cmd_container_logs: string;
  /**
   * - 🚩 **en**: List containers
   * - **zh-CN**: 列出容器
   */
  export const cmd_container_ls: string;
  /**
   * - 🚩 **en**: Pause all processes within one or more containers
   * - **zh-CN**: 暂停容器进程
   */
  export const cmd_container_pause: string;
  /**
   * - 🚩 **en**: List port mappings or a specific mapping for the container
   * - **zh-CN**: 列出端口映射
   */
  export const cmd_container_port: string;
  /**
   * - 🚩 **en**: Remove all stopped containers
   * - **zh-CN**: 删除所有已停止的容器
   */
  export const cmd_container_prune: string;
  /**
   * - 🚩 **en**: Rename a container
   * - **zh-CN**: 重命名容器
   */
  export const cmd_container_rename: string;
  /**
   * - 🚩 **en**: Restart one or more containers
   * - **zh-CN**: 重启容器
   */
  export const cmd_container_restart: string;
  /**
   * - 🚩 **en**: Remove one or more containers
   * - **zh-CN**: 删除容器
   */
  export const cmd_container_rm: string;
  /**
   * - 🚩 **en**: Create and run a new container from an image
   * - **zh-CN**: 创建并启动一个新容器
   */
  export const cmd_container_run: string;
  /**
   * - 🚩 **en**: Start one or more stopped containers
   * - **zh-CN**: 启动已停止的容器
   */
  export const cmd_container_start: string;
  /**
   * - 🚩 **en**: Display a live stream of container(s) resource usage statistics
   * - **zh-CN**: 查看容器资源统计
   */
  export const cmd_container_stats: string;
  /**
   * - 🚩 **en**: Stop one or more running containers
   * - **zh-CN**: 停止运行中的容器
   */
  export const cmd_container_stop: string;
  /**
   * - 🚩 **en**: Display the running processes of a container
   * - **zh-CN**: 显示容器的运行中进程
   */
  export const cmd_container_top: string;
  /**
   * - 🚩 **en**: Unpause all processes within one or more containers
   * - **zh-CN**: 恢复容器进程
   */
  export const cmd_container_unpause: string;
  /**
   * - 🚩 **en**: Update configuration of one or more containers
   * - **zh-CN**: 更新一个或多个容器的配置
   */
  export const cmd_container_update: string;
  /**
   * - 🚩 **en**: Block until one or more containers stop, then print their exit codes
   * - **zh-CN**: 等待容器停止
   */
  export const cmd_container_wait: string;
  /**
   * - 🚩 **en**: Manage contexts
   * - **zh-CN**: 管理上下文
   */
  export const cmd_context: string;
  /**
   * - 🚩 **en**: Create a context
   * - **zh-CN**: 创建上下文
   */
  export const cmd_context_create: string;
  /**
   * - 🚩 **en**: Export a context to a tar archive FILE or a tar stream on STDOUT
   * - **zh-CN**: 将上下文导出为 tar 归档
   */
  export const cmd_context_export: string;
  /**
   * - 🚩 **en**: Import a context from a tar or zip file
   * - **zh-CN**: 从 tar 或 zip 文件导入上下文
   */
  export const cmd_context_import: string;
  /**
   * - 🚩 **en**: Display detailed information on one or more contexts
   * - **zh-CN**: 查看上下文详细信息
   */
  export const cmd_context_inspect: string;
  /**
   * - 🚩 **en**: List contexts
   * - **zh-CN**: 列出上下文
   */
  export const cmd_context_ls: string;
  /**
   * - 🚩 **en**: Remove one or more contexts
   * - **zh-CN**: 删除一个或多个上下文
   */
  export const cmd_context_rm: string;
  /**
   * - 🚩 **en**: Print the name of the current context
   * - **zh-CN**: 显示当前上下文名称
   */
  export const cmd_context_show: string;
  /**
   * - 🚩 **en**: Update a context
   * - **zh-CN**: 更新上下文
   */
  export const cmd_context_update: string;
  /**
   * - 🚩 **en**: Set the default docker context
   * - **zh-CN**: 设置默认 docker 上下文
   */
  export const cmd_context_use: string;
  /**
   * - 🚩 **en**: Copy files/folders between a container and the local filesystem
   * - **zh-CN**: 在容器和本地文件系统之间复制文件/文件夹
   */
  export const cmd_cp: string;
  /**
   * - 🚩 **en**: Create a new container
   * - **zh-CN**: 创建新容器
   */
  export const cmd_create: string;
  /**
   * - 🚩 **en**: Inspect changes to files or directories on a container's filesystem
   * - **zh-CN**: 检查容器文件系统的变更
   */
  export const cmd_diff: string;
  /**
   * - 🚩 **en**: A self-sufficient runtime for containers
   * - **zh-CN**: 容器化运行时环境
   */
  export const cmd_docker: string;
  /**
   * - 🚩 **en**: Get real time events from the server
   * - **zh-CN**: 从服务器获取实时事件
   */
  export const cmd_events: string;
  /**
   * - 🚩 **en**: Execute a command in a running container
   * - **zh-CN**: 在运行中的容器内执行命令
   */
  export const cmd_exec: string;
  /**
   * - 🚩 **en**: Export a container's filesystem as a tar archive
   * - **zh-CN**: 将容器的文件系统导出为 tar 归档
   */
  export const cmd_export: string;
  /**
   * - 🚩 **en**: Show the history of an image
   * - **zh-CN**: 显示镜像的构建历史
   */
  export const cmd_history: string;
  /**
   * - 🚩 **en**: Manage images
   * - **zh-CN**: 管理镜像
   */
  export const cmd_image: string;
  /**
   * - 🚩 **en**: Build an image from a Dockerfile
   * - **zh-CN**: 从 Dockerfile 构建镜像
   */
  export const cmd_image_build: string;
  /**
   * - 🚩 **en**: Show the history of an image
   * - **zh-CN**: 查看镜像构建历史
   */
  export const cmd_image_history: string;
  /**
   * - 🚩 **en**: Import the contents from a tarball to create a filesystem image
   * - **zh-CN**: 从 tarball 导入创建镜像
   */
  export const cmd_image_import: string;
  /**
   * - 🚩 **en**: Return low-level information on an image
   * - **zh-CN**: 查看镜像详细信息
   */
  export const cmd_image_inspect: string;
  /**
   * - 🚩 **en**: Load an image from a tar archive or STDIN
   * - **zh-CN**: 从 tar 归档加载镜像
   */
  export const cmd_image_load: string;
  /**
   * - 🚩 **en**: List images
   * - **zh-CN**: 列出镜像
   */
  export const cmd_image_ls: string;
  /**
   * - 🚩 **en**: Remove unused images
   * - **zh-CN**: 删除未使用的镜像
   */
  export const cmd_image_prune: string;
  /**
   * - 🚩 **en**: Download an image from a registry
   * - **zh-CN**: 从 registry 下载镜像
   */
  export const cmd_image_pull: string;
  /**
   * - 🚩 **en**: Upload an image to a registry
   * - **zh-CN**: 上传镜像到 registry
   */
  export const cmd_image_push: string;
  /**
   * - 🚩 **en**: Remove one or more images
   * - **zh-CN**: 删除一个或多个镜像
   */
  export const cmd_image_rm: string;
  /**
   * - 🚩 **en**: Save one or more images to a tar archive
   * - **zh-CN**: 保存镜像为 tar 归档
   */
  export const cmd_image_save: string;
  /**
   * - 🚩 **en**: Create a tag TARGET_IMAGE that refers to SOURCE_IMAGE
   * - **zh-CN**: 为镜像打标签
   */
  export const cmd_image_tag: string;
  /**
   * - 🚩 **en**: List images
   * - **zh-CN**: 列出镜像
   */
  export const cmd_images: string;
  /**
   * - 🚩 **en**: Import the contents from a tarball to create a filesystem image
   * - **zh-CN**: 从 tarball 导入内容创建文件系统镜像
   */
  export const cmd_import: string;
  /**
   * - 🚩 **en**: Display system-wide information
   * - **zh-CN**: 显示系统信息
   */
  export const cmd_info: string;
  /**
   * - 🚩 **en**: Return low-level information on Docker objects
   * - **zh-CN**: 查看 Docker 对象的底层信息
   */
  export const cmd_inspect: string;
  /**
   * - 🚩 **en**: Kill one or more running containers
   * - **zh-CN**: 杀死一个或多个运行中的容器
   */
  export const cmd_kill: string;
  /**
   * - 🚩 **en**: Load an image from a tar archive or STDIN
   * - **zh-CN**: 从 tar 归档或 STDIN 加载镜像
   */
  export const cmd_load: string;
  /**
   * - 🚩 **en**: Authenticate to a registry
   * - **zh-CN**: 登录到 registry
   */
  export const cmd_login: string;
  /**
   * - 🚩 **en**: Log out from a registry
   * - **zh-CN**: 从 registry 登出
   */
  export const cmd_logout: string;
  /**
   * - 🚩 **en**: Fetch the logs of a container
   * - **zh-CN**: 获取容器的日志
   */
  export const cmd_logs: string;
  /**
   * - 🚩 **en**: Manage Docker image manifests and manifest lists
   * - **zh-CN**: 管理镜像清单和清单列表
   */
  export const cmd_manifest: string;
  /**
   * - 🚩 **en**: Add additional information to a local image manifest
   * - **zh-CN**: 向本地镜像清单添加附加信息
   */
  export const cmd_manifest_annotate: string;
  /**
   * - 🚩 **en**: Create a local manifest list for annotating and pushing to a registry
   * - **zh-CN**: 创建本地清单列表
   */
  export const cmd_manifest_create: string;
  /**
   * - 🚩 **en**: Display an image manifest, or manifest list
   * - **zh-CN**: 显示镜像清单或清单列表
   */
  export const cmd_manifest_inspect: string;
  /**
   * - 🚩 **en**: Push a manifest list to a repository
   * - **zh-CN**: 推送清单列表到仓库
   */
  export const cmd_manifest_push: string;
  /**
   * - 🚩 **en**: Delete one or more manifest lists from local storage
   * - **zh-CN**: 从本地存储删除清单列表
   */
  export const cmd_manifest_rm: string;
  /**
   * - 🚩 **en**: Manage networks
   * - **zh-CN**: 管理网络
   */
  export const cmd_network: string;
  /**
   * - 🚩 **en**: Connect a container to a network
   * - **zh-CN**: 将容器连接到网络
   */
  export const cmd_network_connect: string;
  /**
   * - 🚩 **en**: Create a network
   * - **zh-CN**: 创建网络
   */
  export const cmd_network_create: string;
  /**
   * - 🚩 **en**: Disconnect a container from a network
   * - **zh-CN**: 将容器从网络断开
   */
  export const cmd_network_disconnect: string;
  /**
   * - 🚩 **en**: Return low-level information on a network
   * - **zh-CN**: 查看网络详细信息
   */
  export const cmd_network_inspect: string;
  /**
   * - 🚩 **en**: List networks
   * - **zh-CN**: 列出网络
   */
  export const cmd_network_ls: string;
  /**
   * - 🚩 **en**: Remove all unused networks
   * - **zh-CN**: 删除所有未使用的网络
   */
  export const cmd_network_prune: string;
  /**
   * - 🚩 **en**: Remove one or more networks
   * - **zh-CN**: 删除一个或多个网络
   */
  export const cmd_network_rm: string;
  /**
   * - 🚩 **en**: Manage Swarm nodes
   * - **zh-CN**: 管理 Swarm 节点
   */
  export const cmd_node: string;
  /**
   * - 🚩 **en**: Demote one or more nodes from manager in the swarm
   * - **zh-CN**: 将节点从管理角色降级
   */
  export const cmd_node_demote: string;
  /**
   * - 🚩 **en**: Display detailed information on one or more nodes
   * - **zh-CN**: 查看节点详细信息
   */
  export const cmd_node_inspect: string;
  /**
   * - 🚩 **en**: List nodes in the swarm
   * - **zh-CN**: 列出 Swarm 中的节点
   */
  export const cmd_node_ls: string;
  /**
   * - 🚩 **en**: Promote one or more nodes to manager in the swarm
   * - **zh-CN**: 将节点提升为管理角色
   */
  export const cmd_node_promote: string;
  /**
   * - 🚩 **en**: List tasks running on one or more nodes, defaults to current node
   * - **zh-CN**: 列出节点上运行的任务
   */
  export const cmd_node_ps: string;
  /**
   * - 🚩 **en**: Remove one or more nodes from the swarm
   * - **zh-CN**: 从 Swarm 中移除节点
   */
  export const cmd_node_rm: string;
  /**
   * - 🚩 **en**: Update a node
   * - **zh-CN**: 更新节点
   */
  export const cmd_node_update: string;
  /**
   * - 🚩 **en**: Pause all processes within one or more containers
   * - **zh-CN**: 暂停一个或多个容器中的所有进程
   */
  export const cmd_pause: string;
  /**
   * - 🚩 **en**: Manage plugins
   * - **zh-CN**: 管理插件
   */
  export const cmd_plugin: string;
  /**
   * - 🚩 **en**: Create a plugin from a rootfs and configuration. Plugin data directory must contain config.json and rootfs directory
   * - **zh-CN**: 创建插件
   */
  export const cmd_plugin_create: string;
  /**
   * - 🚩 **en**: Disable a plugin
   * - **zh-CN**: 禁用插件
   */
  export const cmd_plugin_disable: string;
  /**
   * - 🚩 **en**: Enable a plugin
   * - **zh-CN**: 启用插件
   */
  export const cmd_plugin_enable: string;
  /**
   * - 🚩 **en**: Display detailed information on one or more plugins
   * - **zh-CN**: 查看插件详细信息
   */
  export const cmd_plugin_inspect: string;
  /**
   * - 🚩 **en**: Install a plugin
   * - **zh-CN**: 安装插件
   */
  export const cmd_plugin_install: string;
  /**
   * - 🚩 **en**: List plugins
   * - **zh-CN**: 列出插件
   */
  export const cmd_plugin_ls: string;
  /**
   * - 🚩 **en**: Push a plugin to a registry
   * - **zh-CN**: 推送插件到注册表
   */
  export const cmd_plugin_push: string;
  /**
   * - 🚩 **en**: Remove one or more plugins
   * - **zh-CN**: 删除一个或多个插件
   */
  export const cmd_plugin_rm: string;
  /**
   * - 🚩 **en**: Change settings for a plugin
   * - **zh-CN**: 更改插件设置
   */
  export const cmd_plugin_set: string;
  /**
   * - 🚩 **en**: Upgrade an existing plugin
   * - **zh-CN**: 升级现有插件
   */
  export const cmd_plugin_upgrade: string;
  /**
   * - 🚩 **en**: List port mappings or a specific mapping for the container
   * - **zh-CN**: 列出端口映射
   */
  export const cmd_port: string;
  /**
   * - 🚩 **en**: List containers
   * - **zh-CN**: 列出容器
   */
  export const cmd_ps: string;
  /**
   * - 🚩 **en**: Download an image from a registry
   * - **zh-CN**: 从 registry 下载镜像
   */
  export const cmd_pull: string;
  /**
   * - 🚩 **en**: Upload an image to a registry
   * - **zh-CN**: 将镜像上传到 registry
   */
  export const cmd_push: string;
  /**
   * - 🚩 **en**: Rename a container
   * - **zh-CN**: 重命名容器
   */
  export const cmd_rename: string;
  /**
   * - 🚩 **en**: Restart one or more containers
   * - **zh-CN**: 重启一个或多个容器
   */
  export const cmd_restart: string;
  /**
   * - 🚩 **en**: Remove one or more containers
   * - **zh-CN**: 删除一个或多个容器
   */
  export const cmd_rm: string;
  /**
   * - 🚩 **en**: Remove one or more images
   * - **zh-CN**: 删除一个或多个镜像
   */
  export const cmd_rmi: string;
  /**
   * - 🚩 **en**: Create and run a new container from an image
   * - **zh-CN**: 创建并启动一个新容器
   */
  export const cmd_run: string;
  /**
   * - 🚩 **en**: Save one or more images to a tar archive
   * - **zh-CN**: 将一个或多个镜像保存为 tar 归档
   */
  export const cmd_save: string;
  /**
   * - 🚩 **en**: Docker Scout
   * - **zh-CN**: Docker Scout 镜像分析
   */
  export const cmd_scout: string;
  /**
   * - 🚩 **en**: Search Docker Hub for images
   * - **zh-CN**: 在 Docker Hub 搜索镜像
   */
  export const cmd_search: string;
  /**
   * - 🚩 **en**: Manage Swarm secrets
   * - **zh-CN**: 管理 Swarm 密钥
   */
  export const cmd_secret: string;
  /**
   * - 🚩 **en**: Create a secret from a file or STDIN as content
   * - **zh-CN**: 从文件或 STDIN 创建密钥
   */
  export const cmd_secret_create: string;
  /**
   * - 🚩 **en**: Display detailed information on one or more secrets
   * - **zh-CN**: 查看密钥详细信息
   */
  export const cmd_secret_inspect: string;
  /**
   * - 🚩 **en**: List secrets
   * - **zh-CN**: 列出密钥
   */
  export const cmd_secret_ls: string;
  /**
   * - 🚩 **en**: Remove one or more secrets
   * - **zh-CN**: 删除一个或多个密钥
   */
  export const cmd_secret_rm: string;
  /**
   * - 🚩 **en**: Manage Swarm services
   * - **zh-CN**: 管理 Swarm 服务
   */
  export const cmd_service: string;
  /**
   * - 🚩 **en**: Create a new service
   * - **zh-CN**: 创建新服务
   */
  export const cmd_service_create: string;
  /**
   * - 🚩 **en**: Display detailed information on one or more services
   * - **zh-CN**: 查看服务详细信息
   */
  export const cmd_service_inspect: string;
  /**
   * - 🚩 **en**: Fetch the logs of a service or task
   * - **zh-CN**: 获取服务或任务的日志
   */
  export const cmd_service_logs: string;
  /**
   * - 🚩 **en**: List services
   * - **zh-CN**: 列出服务
   */
  export const cmd_service_ls: string;
  /**
   * - 🚩 **en**: List the tasks of one or more services
   * - **zh-CN**: 列出一个或多个服务的任务
   */
  export const cmd_service_ps: string;
  /**
   * - 🚩 **en**: Remove one or more services
   * - **zh-CN**: 删除一个或多个服务
   */
  export const cmd_service_rm: string;
  /**
   * - 🚩 **en**: Revert changes to a service's configuration
   * - **zh-CN**: 恢复服务配置的变更
   */
  export const cmd_service_rollback: string;
  /**
   * - 🚩 **en**: Scale one or multiple replicated services
   * - **zh-CN**: 扩展一个或多个复制服务
   */
  export const cmd_service_scale: string;
  /**
   * - 🚩 **en**: Update a service
   * - **zh-CN**: 更新服务
   */
  export const cmd_service_update: string;
  /**
   * - 🚩 **en**: Manage Swarm stacks
   * - **zh-CN**: 管理 Swarm 堆栈
   */
  export const cmd_stack: string;
  /**
   * - 🚩 **en**: Outputs the final config file, after doing merges and interpolations
   * - **zh-CN**: 输出最终的配置文件
   */
  export const cmd_stack_config: string;
  /**
   * - 🚩 **en**: Deploy a new stack or update an existing stack
   * - **zh-CN**: 部署新堆栈或更新现有堆栈
   */
  export const cmd_stack_deploy: string;
  /**
   * - 🚩 **en**: List stacks
   * - **zh-CN**: 列出堆栈
   */
  export const cmd_stack_ls: string;
  /**
   * - 🚩 **en**: List the tasks in the stack
   * - **zh-CN**: 列出堆栈中的任务
   */
  export const cmd_stack_ps: string;
  /**
   * - 🚩 **en**: Remove one or more stacks
   * - **zh-CN**: 删除一个或多个堆栈
   */
  export const cmd_stack_rm: string;
  /**
   * - 🚩 **en**: List the services in the stack
   * - **zh-CN**: 列出堆栈中的服务
   */
  export const cmd_stack_services: string;
  /**
   * - 🚩 **en**: Start one or more stopped containers
   * - **zh-CN**: 启动一个或多个已停止的容器
   */
  export const cmd_start: string;
  /**
   * - 🚩 **en**: Display a live stream of container(s) resource usage statistics
   * - **zh-CN**: 实时显示容器的资源使用统计
   */
  export const cmd_stats: string;
  /**
   * - 🚩 **en**: Stop one or more running containers
   * - **zh-CN**: 停止一个或多个运行中的容器
   */
  export const cmd_stop: string;
  /**
   * - 🚩 **en**: Manage Swarm
   * - **zh-CN**: 管理 Swarm
   */
  export const cmd_swarm: string;
  /**
   * - 🚩 **en**: Display and rotate the root CA
   * - **zh-CN**: 显示和轮换根 CA
   */
  export const cmd_swarm_ca: string;
  /**
   * - 🚩 **en**: Initialize a swarm
   * - **zh-CN**: 初始化 Swarm
   */
  export const cmd_swarm_init: string;
  /**
   * - 🚩 **en**: Join a swarm as a node and/or manager
   * - **zh-CN**: 以节点或管理角色加入 Swarm
   */
  export const cmd_swarm_join: string;
  /**
   * - 🚩 **en**: Manage join tokens
   * - **zh-CN**: 管理加入令牌
   */
  export const cmd_swarm_join_token: string;
  /**
   * - 🚩 **en**: Leave the swarm
   * - **zh-CN**: 离开 Swarm
   */
  export const cmd_swarm_leave: string;
  /**
   * - 🚩 **en**: Unlock swarm
   * - **zh-CN**: 解锁 Swarm
   */
  export const cmd_swarm_unlock: string;
  /**
   * - 🚩 **en**: Manage the unlock key
   * - **zh-CN**: 管理解锁密钥
   */
  export const cmd_swarm_unlock_key: string;
  /**
   * - 🚩 **en**: Update the swarm
   * - **zh-CN**: 更新 Swarm
   */
  export const cmd_swarm_update: string;
  /**
   * - 🚩 **en**: Manage Docker
   * - **zh-CN**: 管理 Docker 系统
   */
  export const cmd_system: string;
  /**
   * - 🚩 **en**: Show docker disk usage
   * - **zh-CN**: 查看 Docker 磁盘使用情况
   */
  export const cmd_system_df: string;
  /**
   * - 🚩 **en**: Get real time events from the server
   * - **zh-CN**: 从服务器获取实时事件
   */
  export const cmd_system_events: string;
  /**
   * - 🚩 **en**: Display system-wide information
   * - **zh-CN**: 显示系统信息
   */
  export const cmd_system_info: string;
  /**
   * - 🚩 **en**: Remove unused data
   * - **zh-CN**: 删除未使用的数据
   */
  export const cmd_system_prune: string;
  /**
   * - 🚩 **en**: Show the Docker version information
   * - **zh-CN**: 显示 Docker 版本信息
   */
  export const cmd_system_version: string;
  /**
   * - 🚩 **en**: Create a tag TARGET_IMAGE that refers to SOURCE_IMAGE
   * - **zh-CN**: 为镜像创建标签
   */
  export const cmd_tag: string;
  /**
   * - 🚩 **en**: Display the running processes of a container
   * - **zh-CN**: 显示容器的运行中进程
   */
  export const cmd_top: string;
  /**
   * - 🚩 **en**: Manage trust on Docker images
   * - **zh-CN**: 管理 Docker 镜像信任
   */
  export const cmd_trust: string;
  /**
   * - 🚩 **en**: Unpause all processes within one or more containers
   * - **zh-CN**: 恢复一个或多个容器中的所有进程
   */
  export const cmd_unpause: string;
  /**
   * - 🚩 **en**: Update configuration of one or more containers
   * - **zh-CN**: 更新一个或多个容器的配置
   */
  export const cmd_update: string;
  /**
   * - 🚩 **en**: Show the Docker version information
   * - **zh-CN**: 显示 Docker 版本信息
   */
  export const cmd_version: string;
  /**
   * - 🚩 **en**: Manage volumes
   * - **zh-CN**: 管理卷
   */
  export const cmd_volume: string;
  /**
   * - 🚩 **en**: Create a volume
   * - **zh-CN**: 创建卷
   */
  export const cmd_volume_create: string;
  /**
   * - 🚩 **en**: Return low-level information on a volume
   * - **zh-CN**: 查看卷详细信息
   */
  export const cmd_volume_inspect: string;
  /**
   * - 🚩 **en**: List volumes
   * - **zh-CN**: 列出卷
   */
  export const cmd_volume_ls: string;
  /**
   * - 🚩 **en**: Remove all unused local volumes
   * - **zh-CN**: 删除所有未使用的本地卷
   */
  export const cmd_volume_prune: string;
  /**
   * - 🚩 **en**: Remove one or more volumes
   * - **zh-CN**: 删除一个或多个卷
   */
  export const cmd_volume_rm: string;
  /**
   * - 🚩 **en**: Update a volume (cluster volumes only)
   * - **zh-CN**: 更新卷（仅集群卷）
   */
  export const cmd_volume_update: string;
  /**
   * - 🚩 **en**: Block until one or more containers stop, then print their exit codes
   * - **zh-CN**: 阻塞直到容器停止，然后打印退出码
   */
  export const cmd_wait: string;
  /**
   * - 🚩 **en**: Stops all containers if any container was stopped
   * - **zh-CN**: 如果有容器停止则停止所有容器
   */
  export const opt_abort_on_container_exit: string;
  /**
   * - 🚩 **en**: Stops all containers if any container exited with failure
   * - **zh-CN**: 如果有容器异常退出则停止所有容器
   */
  export const opt_abort_on_container_failure: string;
  /**
   * - 🚩 **en**: Add a custom host-to-IP mapping (host:ip)
   * - **zh-CN**: 添加自定义 host-to-IP 映射
   */
  export const opt_add_host: string;
  /**
   * - 🚩 **en**: Advertised address
   * - **zh-CN**: 广播地址
   */
  export const opt_advertise_addr: string;
  /**
   * - 🚩 **en**: Add network-scoped alias for the container
   * - **zh-CN**: 为容器添加网络作用域别名
   */
  export const opt_alias: string;
  /**
   * - 🚩 **en**: Add an alias for the plugin
   * - **zh-CN**: 为插件添加别名
   */
  export const opt_alias_plugin: string;
  /**
   * - 🚩 **en**: Show all containers/images (default shows just running)
   * - **zh-CN**: 显示所有容器/镜像
   */
  export const opt_all: string;
  /**
   * - 🚩 **en**: Include containers created by the run command
   * - **zh-CN**: 包含由 run 命令创建的容器
   */
  export const opt_all_cp: string;
  /**
   * - 🚩 **en**: Remove all inactive builders
   * - **zh-CN**: 移除所有非活跃构建器
   */
  export const opt_all_inactive: string;
  /**
   * - 🚩 **en**: Include all resources, even those not used by services
   * - **zh-CN**: 包含所有资源，即使未被服务使用
   */
  export const opt_all_resources: string;
  /**
   * - 🚩 **en**: Push/pull all tags of an image
   * - **zh-CN**: 推送/拉取镜像的所有标签
   */
  export const opt_all_tags: string;
  /**
   * - 🚩 **en**: Allow extra privileged entitlement (e.g., network.host, security.insecure, device)
   * - **zh-CN**: 允许额外的特权授权
   */
  export const opt_allow: string;
  /**
   * - 🚩 **en**: Recreate dependent containers
   * - **zh-CN**: 重新创建依赖容器
   */
  export const opt_always_recreate_deps: string;
  /**
   * - 🚩 **en**: Amend an existing manifest
   * - **zh-CN**: 修改现有 manifest
   */
  export const opt_amend: string;
  /**
   * - 🚩 **en**: Add an annotation to the container
   * - **zh-CN**: 为容器添加注解
   */
  export const opt_annotation: string;
  /**
   * - 🚩 **en**: Add annotation to the image
   * - **zh-CN**: 为镜像添加注解
   */
  export const opt_annotation_build: string;
  /**
   * - 🚩 **en**: Control when to print ANSI control characters
   * - **zh-CN**: 控制何时打印 ANSI 控制字符
   */
  export const opt_ansi: string;
  /**
   * - 🚩 **en**: Append a node to builder instead of changing it
   * - **zh-CN**: 向构建器追加节点而非修改
   */
  export const opt_append: string;
  /**
   * - 🚩 **en**: Target architecture
   * - **zh-CN**: 目标架构
   */
  export const opt_arch: string;
  /**
   * - 🚩 **en**: Archive mode (copy all uid/gid information)
   * - **zh-CN**: 归档模式（保留所有 uid/gid 信息）
   */
  export const opt_archive: string;
  /**
   * - 🚩 **en**: Attach to STDIN, STDOUT or STDERR
   * - **zh-CN**: 附加到 STDIN/STDOUT/STDERR
   */
  export const opt_attach: string;
  /**
   * - 🚩 **en**: Restrict attaching to the specified services
   * - **zh-CN**: 限制仅附加到指定服务
   */
  export const opt_attach_compose: string;
  /**
   * - 🚩 **en**: Automatically attach to log output of dependent services
   * - **zh-CN**: 自动附加到依赖服务的日志输出
   */
  export const opt_attach_deps: string;
  /**
   * - 🚩 **en**: Enable manual container attachment
   * - **zh-CN**: 启用手动容器附加
   */
  export const opt_attachable: string;
  /**
   * - 🚩 **en**: Attestation parameters (format: type=sbom,generator=image)
   * - **zh-CN**: 证明参数
   */
  export const opt_attest: string;
  /**
   * - 🚩 **en**: Author (e.g., "John Hannibal Smith <hannibal@a-team.com>")
   * - **zh-CN**: 作者
   */
  export const opt_author: string;
  /**
   * - 🚩 **en**: Enable manager autolocking
   * - **zh-CN**: 启用管理器自动锁定
   */
  export const opt_autolock: string;
  /**
   * - 🚩 **en**: Auxiliary IPv4 or IPv6 addresses used by Network driver
   * - **zh-CN**: 网络驱动使用的辅助 IPv4 或 IPv6 地址
   */
  export const opt_aux_address: string;
  /**
   * - 🚩 **en**: Availability of the node (active|pause|drain)
   * - **zh-CN**: 节点的可用性（active|pause|drain）
   */
  export const opt_availability: string;
  /**
   * - 🚩 **en**: Block IO (relative weight), between 10 and 1000
   * - **zh-CN**: 块 IO 权重（10-1000）
   */
  export const opt_blkio_weight: string;
  /**
   * - 🚩 **en**: Block IO weight (relative device weight)
   * - **zh-CN**: 块 IO 设备权重
   */
  export const opt_blkio_weight_device: string;
  /**
   * - 🚩 **en**: Boot builder after creation
   * - **zh-CN**: 创建后启动构建器
   */
  export const opt_bootstrap: string;
  /**
   * - 🚩 **en**: Branch for the service
   * - **zh-CN**: 服务的分支
   */
  export const opt_branch: string;
  /**
   * - 🚩 **en**: Set build-time variables
   * - **zh-CN**: 设置构建时变量
   */
  export const opt_build_arg: string;
  /**
   * - 🚩 **en**: Build images before creating containers
   * - **zh-CN**: 创建容器前构建镜像
   */
  export const opt_build_compose: string;
  /**
   * - 🚩 **en**: Additional build contexts
   * - **zh-CN**: 额外的构建上下文
   */
  export const opt_build_context: string;
  /**
   * - 🚩 **en**: Override the configured builder instance
   * - **zh-CN**: 覆盖配置的构建器实例
   */
  export const opt_builder: string;
  /**
   * - 🚩 **en**: Override the default timeout for loading
   * - **zh-CN**: 覆盖加载的默认超时时间
   */
  export const opt_builder_timeout: string;
  /**
   * - 🚩 **en**: BuildKit daemon config file
   * - **zh-CN**: BuildKit 守护进程配置文件
   */
  export const opt_buildkitd_config: string;
  /**
   * - 🚩 **en**: BuildKit daemon flags
   * - **zh-CN**: BuildKit 守护进程标志
   */
  export const opt_buildkitd_flags: string;
  /**
   * - 🚩 **en**: Path to the PEM-encoded root CA certificate for the swarm
   * - **zh-CN**: swarm 的 PEM 编码根 CA 证书路径
   */
  export const opt_ca_cert: string;
  /**
   * - 🚩 **en**: Path to the PEM-encoded CA key for the swarm
   * - **zh-CN**: swarm 的 PEM 编码 CA 密钥路径
   */
  export const opt_ca_key: string;
  /**
   * - 🚩 **en**: External cache sources
   * - **zh-CN**: 外部缓存来源
   */
  export const opt_cache_from: string;
  /**
   * - 🚩 **en**: Cache export destinations
   * - **zh-CN**: 缓存导出目标
   */
  export const opt_cache_to: string;
  /**
   * - 🚩 **en**: Set method for evaluating build (check|outline|targets)
   * - **zh-CN**: 设置构建评估方法
   */
  export const opt_call: string;
  /**
   * - 🚩 **en**: Add Linux capabilities
   * - **zh-CN**: 添加 Linux 内核能力
   */
  export const opt_cap_add: string;
  /**
   * - 🚩 **en**: Drop Linux capabilities
   * - **zh-CN**: 删除 Linux 内核能力
   */
  export const opt_cap_drop: string;
  /**
   * - 🚩 **en**: Validity period for node certificates
   * - **zh-CN**: 节点证书的有效期
   */
  export const opt_cert_expiry: string;
  /**
   * - 🚩 **en**: Optional parent cgroup for the container
   * - **zh-CN**: 容器的可选父 cgroup
   */
  export const opt_cgroup_parent: string;
  /**
   * - 🚩 **en**: Cgroup namespace to use (host|private)
   * - **zh-CN**: cgroup 命名空间模式（host|private）
   */
  export const opt_cgroupns: string;
  /**
   * - 🚩 **en**: Apply Dockerfile instruction to the created image
   * - **zh-CN**: 对创建的镜像应用 Dockerfile 指令
   */
  export const opt_change: string;
  /**
   * - 🚩 **en**: Shorthand for --call=check
   * - **zh-CN**: --call=check 的简写
   */
  export const opt_check: string;
  /**
   * - 🚩 **en**: Restore from this checkpoint
   * - **zh-CN**: 从该检查点恢复
   */
  export const opt_checkpoint: string;
  /**
   * - 🚩 **en**: Use a custom checkpoint storage directory
   * - **zh-CN**: 自定义检查点存储目录
   */
  export const opt_checkpoint_dir: string;
  /**
   * - 🚩 **en**: Write the container ID to the file
   * - **zh-CN**: 将容器 ID 写入文件
   */
  export const opt_cidfile: string;
  /**
   * - 🚩 **en**: Display only cluster volumes, and use cluster volume list formatting
   * - **zh-CN**: 仅显示集群卷，并使用集群卷列表格式
   */
  export const opt_cluster_vol: string;
  /**
   * - 🚩 **en**: Attempt to down-level the compose file for older engine versions
   * - **zh-CN**: 尝试向下兼容旧引擎版本
   */
  export const opt_compatibility: string;
  /**
   * - 🚩 **en**: Compose file to use
   * - **zh-CN**: 使用的 Compose 文件
   */
  export const opt_compose_file: string;
  /**
   * - 🚩 **en**: Compress the plugin tarball
   * - **zh-CN**: 压缩插件 tarball
   */
  export const opt_compress: string;
  /**
   * - 🚩 **en**: Compress the build context using gzip
   * - **zh-CN**: 使用 gzip 压缩构建上下文
   */
  export const opt_compressed: string;
  /**
   * - 🚩 **en**: Compose configuration files
   * - **zh-CN**: Compose 配置文件
   */
  export const opt_config: string;
  /**
   * - 🚩 **en**: The network from which to copy the configuration
   * - **zh-CN**: 从中复制配置的网络
   */
  export const opt_config_from: string;
  /**
   * - 🚩 **en**: Location of client config files
   * - **zh-CN**: 客户端配置文件位置
   */
  export const opt_config_global: string;
  /**
   * - 🚩 **en**: Create a configuration only network
   * - **zh-CN**: 创建仅配置网络
   */
  export const opt_config_only: string;
  /**
   * - 🚩 **en**: Placement constraints
   * - **zh-CN**: 放置约束
   */
  export const opt_constraint: string;
  /**
   * - 🚩 **en**: Container labels
   * - **zh-CN**: 容器标签
   */
  export const opt_container_label: string;
  /**
   * - 🚩 **en**: Name of the context to use to connect to the daemon
   * - **zh-CN**: 连接到守护进程的上下文名称
   */
  export const opt_context_global: string;
  /**
   * - 🚩 **en**: CPU count (Windows only)
   * - **zh-CN**: CPU 数量（仅 Windows）
   */
  export const opt_cpu_count: string;
  /**
   * - 🚩 **en**: CPU percent (Windows only)
   * - **zh-CN**: CPU 百分比（仅 Windows）
   */
  export const opt_cpu_percent: string;
  /**
   * - 🚩 **en**: Limit CPU CFS (Completely Fair Scheduler) period
   * - **zh-CN**: 限制 CPU CFS 调度周期
   */
  export const opt_cpu_period: string;
  /**
   * - 🚩 **en**: Limit CPU CFS (Completely Fair Scheduler) quota
   * - **zh-CN**: 限制 CPU CFS 调度配额
   */
  export const opt_cpu_quota: string;
  /**
   * - 🚩 **en**: Limit CPU real-time period in microseconds
   * - **zh-CN**: 限制 CPU 实时周期（微秒）
   */
  export const opt_cpu_rt_period: string;
  /**
   * - 🚩 **en**: Limit CPU real-time runtime in microseconds
   * - **zh-CN**: 限制 CPU 实时运行时间（微秒）
   */
  export const opt_cpu_rt_runtime: string;
  /**
   * - 🚩 **en**: CPU shares (relative weight)
   * - **zh-CN**: CPU 份额（相对权重）
   */
  export const opt_cpu_shares: string;
  /**
   * - 🚩 **en**: Number of CPUs
   * - **zh-CN**: CPU 数量
   */
  export const opt_cpus: string;
  /**
   * - 🚩 **en**: CPUs in which to allow execution (0-3, 0,1)
   * - **zh-CN**: 允许执行的 CPU（0-3, 0,1）
   */
  export const opt_cpuset_cpus: string;
  /**
   * - 🚩 **en**: MEMs in which to allow execution (0-3, 0,1)
   * - **zh-CN**: 允许执行的内存节点（0-3, 0,1）
   */
  export const opt_cpuset_mems: string;
  /**
   * - 🚩 **en**: Address or interface to use for data path traffic
   * - **zh-CN**: 用于数据路径流量的地址或接口
   */
  export const opt_data_path_addr: string;
  /**
   * - 🚩 **en**: Enable debug mode
   * - **zh-CN**: 启用调试模式
   */
  export const opt_debug: string;
  /**
   * - 🚩 **en**: Set builder as default for current context
   * - **zh-CN**: 将构建器设置为当前上下文的默认值
   */
  export const opt_default_builder: string;
  /**
   * - 🚩 **en**: Description of the context
   * - **zh-CN**: 上下文的描述
   */
  export const opt_description_context: string;
  /**
   * - 🚩 **en**: Run container in background
   * - **zh-CN**: 后台运行容器
   */
  export const opt_detach: string;
  /**
   * - 🚩 **en**: Override the key sequence for detaching a container
   * - **zh-CN**: 覆盖分离容器的按键序列
   */
  export const opt_detach_keys: string;
  /**
   * - 🚩 **en**: Show extra details provided to logs
   * - **zh-CN**: 显示日志额外详情
   */
  export const opt_details: string;
  /**
   * - 🚩 **en**: Add a host device to the container
   * - **zh-CN**: 添加宿主机设备到容器
   */
  export const opt_device: string;
  /**
   * - 🚩 **en**: Add a rule to the cgroup allowed devices list
   * - **zh-CN**: 添加到 cgroup 允许设备列表的规则
   */
  export const opt_device_cgroup_rule: string;
  /**
   * - 🚩 **en**: Limit read rate (bytes per second) from a device
   * - **zh-CN**: 限制设备的读取速率（字节/秒）
   */
  export const opt_device_read_bps: string;
  /**
   * - 🚩 **en**: Limit read rate (IO per second) from a device
   * - **zh-CN**: 限制设备的读取速率（IO/秒）
   */
  export const opt_device_read_iops: string;
  /**
   * - 🚩 **en**: Limit write rate (bytes per second) to a device
   * - **zh-CN**: 限制设备的写入速率（字节/秒）
   */
  export const opt_device_write_bps: string;
  /**
   * - 🚩 **en**: Limit write rate (IO per second) to a device
   * - **zh-CN**: 限制设备的写入速率（IO/秒）
   */
  export const opt_device_write_iops: string;
  /**
   * - 🚩 **en**: Show digests
   * - **zh-CN**: 显示摘要
   */
  export const opt_digests: string;
  /**
   * - 🚩 **en**: Disable the plugin after installing
   * - **zh-CN**: 安装后禁用插件
   */
  export const opt_disable_plugin: string;
  /**
   * - 🚩 **en**: Dispatcher heartbeat period
   * - **zh-CN**: 调度器心跳周期
   */
  export const opt_dispatcher_heartbeat: string;
  /**
   * - 🚩 **en**: Set custom DNS servers
   * - **zh-CN**: 设置自定义 DNS 服务器
   */
  export const opt_dns: string;
  /**
   * - 🚩 **en**: Set DNS options
   * - **zh-CN**: 设置 DNS 选项
   */
  export const opt_dns_option: string;
  /**
   * - 🚩 **en**: Set custom DNS search domains
   * - **zh-CN**: 设置自定义 DNS 搜索域
   */
  export const opt_dns_search: string;
  /**
   * - 🚩 **en**: Set the docker endpoint
   * - **zh-CN**: 设置 Docker 端点
   */
  export const opt_docker_context: string;
  /**
   * - 🚩 **en**: Container NIS domain name
   * - **zh-CN**: 容器 NIS 域名
   */
  export const opt_domainname: string;
  /**
   * - 🚩 **en**: Drops project when the first container stops
   * - **zh-CN**: 首个容器停止时放弃项目
   */
  export const opt_down_project: string;
  /**
   * - 🚩 **en**: Driver to manage the Volume/Network
   * - **zh-CN**: 卷/网络的驱动
   */
  export const opt_driver: string;
  /**
   * - 🚩 **en**: driver options for the network
   * - **zh-CN**: 网络的驱动选项
   */
  export const opt_driver_opt: string;
  /**
   * - 🚩 **en**: Options for the driver
   * - **zh-CN**: 驱动的选项
   */
  export const opt_driver_opt_builder: string;
  /**
   * - 🚩 **en**: Execute command in dry run mode
   * - **zh-CN**: 预演模式执行
   */
  export const opt_dry_run: string;
  /**
   * - 🚩 **en**: Encrypt the traffic among the local network
   * - **zh-CN**: 加密本地网络中的流量
   */
  export const opt_encrypt: string;
  /**
   * - 🚩 **en**: Endpoint mode (vip|dnsrr)
   * - **zh-CN**: 端点模式 (vip|dnsrr)
   */
  export const opt_endpoint_mode: string;
  /**
   * - 🚩 **en**: Overwrite the default ENTRYPOINT of the image
   * - **zh-CN**: 覆盖镜像的默认 ENTRYPOINT
   */
  export const opt_entrypoint: string;
  /**
   * - 🚩 **en**: Set environment variables
   * - **zh-CN**: 设置环境变量
   */
  export const opt_env: string;
  /**
   * - 🚩 **en**: Read in a file of environment variables
   * - **zh-CN**: 从文件读取环境变量
   */
  export const opt_env_file: string;
  /**
   * - 🚩 **en**: Set environment variables from file
   * - **zh-CN**: 从文件设置环境变量
   */
  export const opt_env_from_file: string;
  /**
   * - 🚩 **en**: Print environment used for interpolation
   * - **zh-CN**: 打印用于插值的环境变量
   */
  export const opt_environment: string;
  /**
   * - 🚩 **en**: Return the exit code of the selected service
   * - **zh-CN**: 返回指定服务的退出码
   */
  export const opt_exit_code_from: string;
  /**
   * - 🚩 **en**: Expose a port or a range of ports
   * - **zh-CN**: 暴露端口或端口范围
   */
  export const opt_expose: string;
  /**
   * - 🚩 **en**: Specifications of one or more certificate signing endpoints
   * - **zh-CN**: 一个或多个证书签名端点的规格
   */
  export const opt_external_ca: string;
  /**
   * - 🚩 **en**: Name of the Dockerfile
   * - **zh-CN**: Dockerfile 的名称
   */
  export const opt_file: string;
  /**
   * - 🚩 **en**: Filter output based on conditions provided
   * - **zh-CN**: 根据条件过滤输出
   */
  export const opt_filter: string;
  /**
   * - 🚩 **en**: Follow log output
   * - **zh-CN**: 跟随日志输出
   */
  export const opt_follow: string;
  /**
   * - 🚩 **en**: Always follow symlinks in SRC_PATH
   * - **zh-CN**: 始终跟踪 SRC_PATH 中的符号链接
   */
  export const opt_follow_link: string;
  /**
   * - 🚩 **en**: Do not prompt for confirmation
   * - **zh-CN**: 不提示确认
   */
  export const opt_force: string;
  /**
   * - 🚩 **en**: Recreate containers even if their configuration and image haven't changed
   * - **zh-CN**: 即使配置和镜像未更改也重新创建容器
   */
  export const opt_force_recreate: string;
  /**
   * - 🚩 **en**: Always remove intermediate containers
   * - **zh-CN**: 始终删除中间容器
   */
  export const opt_force_rm: string;
  /**
   * - 🚩 **en**: Format output using a custom template
   * - **zh-CN**: 使用自定义模板格式化输出
   */
  export const opt_format: string;
  /**
   * - 🚩 **en**: Format the output (yaml|json)
   * - **zh-CN**: 设置输出格式（yaml|json）
   */
  export const opt_format_config: string;
  /**
   * - 🚩 **en**: Create context from a named context
   * - **zh-CN**: 从命名上下文创建上下文
   */
  export const opt_from_context: string;
  /**
   * - 🚩 **en**: IPv4 or IPv6 Gateway for the master subnet
   * - **zh-CN**: 主子网的 IPv4 或 IPv6 网关
   */
  export const opt_gateway: string;
  /**
   * - 🚩 **en**: Builder persists context changes
   * - **zh-CN**: 构建器持久化上下文变更
   */
  export const opt_global_builder: string;
  /**
   * - 🚩 **en**: GPU devices to add to the container
   * - **zh-CN**: 要添加到容器的 GPU 设备
   */
  export const opt_gpu: string;
  /**
   * - 🚩 **en**: Grant all permissions necessary to run the plugin
   * - **zh-CN**: 授予运行插件所需的所有权限
   */
  export const opt_grant_all_permissions: string;
  /**
   * - 🚩 **en**: Add additional groups to join
   * - **zh-CN**: 添加附加组
   */
  export const opt_group_add: string;
  /**
   * - 🚩 **en**: Service group
   * - **zh-CN**: 服务组
   */
  export const opt_group_svc: string;
  /**
   * - 🚩 **en**: Volume group
   * - **zh-CN**: 卷组
   */
  export const opt_group_vol: string;
  /**
   * - 🚩 **en**: Highest gw-priority provides the default gateway
   * - **zh-CN**: 最高 gw-priority 提供默认网关
   */
  export const opt_gw_priority: string;
  /**
   * - 🚩 **en**: Hash of the service configuration
   * - **zh-CN**: 服务配置的哈希值
   */
  export const opt_hash: string;
  /**
   * - 🚩 **en**: Command to run to check health
   * - **zh-CN**: 健康检查命令
   */
  export const opt_health_cmd: string;
  /**
   * - 🚩 **en**: Time between running the check (ms|s|m|h)
   * - **zh-CN**: 健康检查间隔
   */
  export const opt_health_interval: string;
  /**
   * - 🚩 **en**: Consecutive failures needed to report unhealthy
   * - **zh-CN**: 连续失败次数判定为不健康
   */
  export const opt_health_retries: string;
  /**
   * - 🚩 **en**: Time between running the check during the start period (ms|s|m|h)
   * - **zh-CN**: 启动期间健康检查间隔（ms|s|m|h）
   */
  export const opt_health_start_interval: string;
  /**
   * - 🚩 **en**: Start period for the container to initialize before starting health-retries countdown (ms|s|m|h)
   * - **zh-CN**: 容器启动后的健康检查预热时间
   */
  export const opt_health_start_period: string;
  /**
   * - 🚩 **en**: Start period for health checks
   * - **zh-CN**: 健康检查的启动时间
   */
  export const opt_health_start_period_svc: string;
  /**
   * - 🚩 **en**: Maximum time to allow one check to run (ms|s|m|h)
   * - **zh-CN**: 单次健康检查超时
   */
  export const opt_health_timeout: string;
  /**
   * - 🚩 **en**: Print usage
   * - **zh-CN**: 打印帮助信息
   */
  export const opt_help: string;
  /**
   * - 🚩 **en**: Daemon socket to connect to
   * - **zh-CN**: 守护进程 socket 地址
   */
  export const opt_host: string;
  /**
   * - 🚩 **en**: Container host name
   * - **zh-CN**: 容器主机名
   */
  export const opt_hostname: string;
  /**
   * - 🚩 **en**: Print sizes and dates in human readable format
   * - **zh-CN**: 以人类可读格式显示大小和日期
   */
  export const opt_human: string;
  /**
   * - 🚩 **en**: Ignore images that can be built
   * - **zh-CN**: 忽略可以构建的镜像
   */
  export const opt_ignore_buildable: string;
  /**
   * - 🚩 **en**: Pull what it can and ignore images without access
   * - **zh-CN**: 尽量拉取，忽略无权限的镜像
   */
  export const opt_ignore_pull_failures: string;
  /**
   * - 🚩 **en**: Push what it can and ignores images with push failures
   * - **zh-CN**: 推送可推送的镜像，忽略推送失败的镜像
   */
  export const opt_ignore_push_failures: string;
  /**
   * - 🚩 **en**: Write the image ID to the file
   * - **zh-CN**: 将镜像 ID 写入文件
   */
  export const opt_iidfile: string;
  /**
   * - 🚩 **en**: Print the image names, one per line
   * - **zh-CN**: 打印镜像名称，每行一个
   */
  export const opt_images_config: string;
  /**
   * - 🚩 **en**: Also pull services declared as dependencies
   * - **zh-CN**: 同时拉取声明为依赖的服务
   */
  export const opt_include_deps: string;
  /**
   * - 🚩 **en**: Index of the container if service has multiple replicas
   * - **zh-CN**: 服务多副本时的容器索引
   */
  export const opt_index: string;
  /**
   * - 🚩 **en**: Swarm ingress network
   * - **zh-CN**: Swarm 入口网络
   */
  export const opt_ingress: string;
  /**
   * - 🚩 **en**: Run an init inside the container that forwards signals and reaps processes
   * - **zh-CN**: 在容器内运行 init 进程
   */
  export const opt_init: string;
  /**
   * - 🚩 **en**: Read from tar archive file, instead of STDIN
   * - **zh-CN**: 从 tar 归档文件读取而不是 STDIN
   */
  export const opt_input: string;
  /**
   * - 🚩 **en**: Allow communication with an insecure registry
   * - **zh-CN**: 允许与不安全的 registry 通信
   */
  export const opt_insecure: string;
  /**
   * - 🚩 **en**: Keep STDIN open even if not attached
   * - **zh-CN**: 保持 STDIN 打开
   */
  export const opt_interactive: string;
  /**
   * - 🚩 **en**: Restrict external access to the network
   * - **zh-CN**: 限制网络的外部访问
   */
  export const opt_internal: string;
  /**
   * - 🚩 **en**: Maximum IO bandwidth limit for the system drive (Windows only)
   * - **zh-CN**: 系统盘最大 IO 带宽限制（仅 Windows）
   */
  export const opt_io_maxbandwidth: string;
  /**
   * - 🚩 **en**: Maximum IOps limit for the system drive (Windows only)
   * - **zh-CN**: 系统盘最大 IOps 限制（仅 Windows）
   */
  export const opt_io_maxiops: string;
  /**
   * - 🚩 **en**: IPv4 address
   * - **zh-CN**: IPv4 地址
   */
  export const opt_ip: string;
  /**
   * - 🚩 **en**: IPv6 address
   * - **zh-CN**: IPv6 地址
   */
  export const opt_ip6: string;
  /**
   * - 🚩 **en**: Allocate container ip from a sub-range
   * - **zh-CN**: 从子范围内分配容器 IP
   */
  export const opt_ip_range: string;
  /**
   * - 🚩 **en**: IP Address Management Driver
   * - **zh-CN**: IP 地址管理驱动
   */
  export const opt_ipam_driver: string;
  /**
   * - 🚩 **en**: Set IPAM driver specific options
   * - **zh-CN**: 设置 IPAM 驱动特定选项
   */
  export const opt_ipam_opt: string;
  /**
   * - 🚩 **en**: IPC mode to use
   * - **zh-CN**: IPC 模式
   */
  export const opt_ipc: string;
  /**
   * - 🚩 **en**: Enable or disable IPv4 address assignment
   * - **zh-CN**: 启用或禁用 IPv4 地址分配
   */
  export const opt_ipv4: string;
  /**
   * - 🚩 **en**: Enable or disable IPv6 address assignment
   * - **zh-CN**: 启用或禁用 IPv6 地址分配
   */
  export const opt_ipv6: string;
  /**
   * - 🚩 **en**: Container isolation technology
   * - **zh-CN**: 容器隔离技术
   */
  export const opt_isolation: string;
  /**
   * - 🚩 **en**: Output events as a stream of json objects
   * - **zh-CN**: 以 JSON 对象流输出事件
   */
  export const opt_json: string;
  /**
   * - 🚩 **en**: Keep the BuildKit daemon running
   * - **zh-CN**: 保持 BuildKit 守护进程运行
   */
  export const opt_keep_daemon: string;
  /**
   * - 🚩 **en**: Keep BuildKit state
   * - **zh-CN**: 保持 BuildKit 状态
   */
  export const opt_keep_state: string;
  /**
   * - 🚩 **en**: Set meta data on a container
   * - **zh-CN**: 设置容器元数据
   */
  export const opt_label: string;
  /**
   * - 🚩 **en**: Add or update a node label (key=value)
   * - **zh-CN**: 添加或更新节点标签 (key=value)
   */
  export const opt_label_add_node: string;
  /**
   * - 🚩 **en**: Read in a line delimited file of labels
   * - **zh-CN**: 从文件读取标签
   */
  export const opt_label_file: string;
  /**
   * - 🚩 **en**: Remove a node label if exists
   * - **zh-CN**: 删除节点标签（如果存在）
   */
  export const opt_label_rm_node: string;
  /**
   * - 🚩 **en**: Show n last created containers
   * - **zh-CN**: 显示最近 N 个创建的容器
   */
  export const opt_last: string;
  /**
   * - 🚩 **en**: Show the latest created container
   * - **zh-CN**: 显示最新创建的容器
   */
  export const opt_latest: string;
  /**
   * - 🚩 **en**: Remove a node from builder instead of changing it
   * - **zh-CN**: 从构建器中移除节点而非修改
   */
  export const opt_leave_builder: string;
  /**
   * - 🚩 **en**: Leave the container running after checkpoint creation
   * - **zh-CN**: 创建检查点后保持容器运行
   */
  export const opt_leave_running: string;
  /**
   * - 🚩 **en**: Minimum size of the volume in bytes
   * - **zh-CN**: 卷的最小字节数
   */
  export const opt_limit_bytes: string;
  /**
   * - 🚩 **en**: Limit CPUs
   * - **zh-CN**: 限制 CPU
   */
  export const opt_limit_cpu: string;
  /**
   * - 🚩 **en**: Limit Memory
   * - **zh-CN**: 限制内存
   */
  export const opt_limit_memory: string;
  /**
   * - 🚩 **en**: Limit maximum number of processes
   * - **zh-CN**: 限制最大进程数
   */
  export const opt_limit_pids: string;
  /**
   * - 🚩 **en**: Max number of search results
   * - **zh-CN**: 最大搜索结果数
   */
  export const opt_limit_search: string;
  /**
   * - 🚩 **en**: Add link to another container
   * - **zh-CN**: 链接到另一个容器
   */
  export const opt_link: string;
  /**
   * - 🚩 **en**: Container IPv4/IPv6 link-local addresses
   * - **zh-CN**: 容器 IPv4/IPv6 链路本地地址
   */
  export const opt_link_local_ip: string;
  /**
   * - 🚩 **en**: Remove the specified link
   * - **zh-CN**: 删除指定链接
   */
  export const opt_link_rm: string;
  /**
   * - 🚩 **en**: List targets or variables
   * - **zh-CN**: 列出目标或变量
   */
  export const opt_list: string;
  /**
   * - 🚩 **en**: Listen address
   * - **zh-CN**: 监听地址
   */
  export const opt_listen_addr: string;
  /**
   * - 🚩 **en**: Shorthand for --output=type=docker
   * - **zh-CN**: --output=type=docker 的简写
   */
  export const opt_load: string;
  /**
   * - 🚩 **en**: Produces an override file with image digests
   * - **zh-CN**: 生成包含镜像摘要的覆盖文件
   */
  export const opt_lock_image_digests: string;
  /**
   * - 🚩 **en**: Logging driver for the container
   * - **zh-CN**: 容器的日志驱动
   */
  export const opt_log_driver: string;
  /**
   * - 🚩 **en**: Set the logging level (debug|info|warn|error|fatal)
   * - **zh-CN**: 设置日志级别
   */
  export const opt_log_level: string;
  /**
   * - 🚩 **en**: Log driver options
   * - **zh-CN**: 日志驱动选项
   */
  export const opt_log_opt: string;
  /**
   * - 🚩 **en**: Container MAC address
   * - **zh-CN**: 容器 MAC 地址
   */
  export const opt_mac_address: string;
  /**
   * - 🚩 **en**: Maximum number of concurrent jobs
   * - **zh-CN**: 最大并发作业数
   */
  export const opt_max_concurrent: string;
  /**
   * - 🚩 **en**: Number of additional Raft snapshots to retain
   * - **zh-CN**: 保留的额外 Raft 快照数量
   */
  export const opt_max_snapshots: string;
  /**
   * - 🚩 **en**: Maximum amount of disk space allowed to be used for the build data
   * - **zh-CN**: 构建数据允许使用的最大磁盘空间量
   */
  export const opt_max_used_space: string;
  /**
   * - 🚩 **en**: Memory limit
   * - **zh-CN**: 内存限制
   */
  export const opt_memory: string;
  /**
   * - 🚩 **en**: Memory soft limit
   * - **zh-CN**: 内存软限制
   */
  export const opt_memory_reservation: string;
  /**
   * - 🚩 **en**: Swap limit equal to memory plus swap
   * - **zh-CN**: 交换限制（内存+交换）
   */
  export const opt_memory_swap: string;
  /**
   * - 🚩 **en**: Tune container memory swappiness (0 to 100)
   * - **zh-CN**: 调整容器内存 swappiness（0-100）
   */
  export const opt_memory_swappiness: string;
  /**
   * - 🚩 **en**: Enable interactive shortcuts when running attached
   * - **zh-CN**: 附加运行时启用交互式快捷键
   */
  export const opt_menu: string;
  /**
   * - 🚩 **en**: Commit message
   * - **zh-CN**: 提交信息
   */
  export const opt_message: string;
  /**
   * - 🚩 **en**: Write build result metadata to a file
   * - **zh-CN**: 将构建结果元数据写入文件
   */
  export const opt_metadata_file: string;
  /**
   * - 🚩 **en**: Target amount of free disk space after pruning
   * - **zh-CN**: 清理后的目标可用磁盘空间量
   */
  export const opt_min_free_space: string;
  /**
   * - 🚩 **en**: Service mode (replicated|global)
   * - **zh-CN**: 服务模式 (replicated|global)
   */
  export const opt_mode: string;
  /**
   * - 🚩 **en**: Print the model names, one per line
   * - **zh-CN**: 打印模型名称，每行一个
   */
  export const opt_models: string;
  /**
   * - 🚩 **en**: Attach a filesystem mount to the container
   * - **zh-CN**: 附加文件系统挂载到容器
   */
  export const opt_mount: string;
  /**
   * - 🚩 **en**: Assign a name to the container
   * - **zh-CN**: 为容器指定名称
   */
  export const opt_name: string;
  /**
   * - 🚩 **en**: Connect a container to a network
   * - **zh-CN**: 将容器连接到网络
   */
  export const opt_network: string;
  /**
   * - 🚩 **en**: Driver to manage the Network
   * - **zh-CN**: 网络驱动
   */
  export const opt_network_driver: string;
  /**
   * - 🚩 **en**: Print the network names, one per line
   * - **zh-CN**: 打印网络名称，每行一个
   */
  export const opt_networks: string;
  /**
   * - 🚩 **en**: Do not attach (stream logs) to the specified services
   * - **zh-CN**: 不附加（流日志）到指定服务
   */
  export const opt_no_attach: string;
  /**
   * - 🚩 **en**: Don't build an image, even if it's missing
   * - **zh-CN**: 即使镜像缺失也不构建
   */
  export const opt_no_build: string;
  /**
   * - 🚩 **en**: Do not use cache when building the image
   * - **zh-CN**: 构建镜像时不使用缓存
   */
  export const opt_no_cache: string;
  /**
   * - 🚩 **en**: Do not cache specified stages
   * - **zh-CN**: 不缓存指定阶段
   */
  export const opt_no_cache_filter: string;
  /**
   * - 🚩 **en**: Produce monochrome output
   * - **zh-CN**: 单色输出
   */
  export const opt_no_color: string;
  /**
   * - 🚩 **en**: Don't check model consistency
   * - **zh-CN**: 不检查模型一致性
   */
  export const opt_no_consistency: string;
  /**
   * - 🚩 **en**: Don't start linked services
   * - **zh-CN**: 不启动链接的服务
   */
  export const opt_no_deps: string;
  /**
   * - 🚩 **en**: Don't resolve service env files
   * - **zh-CN**: 不解析服务环境文件
   */
  export const opt_no_env_resolution: string;
  /**
   * - 🚩 **en**: Disable any container-specified HEALTHCHECK
   * - **zh-CN**: 禁用容器 HEALTHCHECK
   */
  export const opt_no_healthcheck: string;
  /**
   * - 🚩 **en**: Don't interpolate environment variables
   * - **zh-CN**: 不插值环境变量
   */
  export const opt_no_interpolate: string;
  /**
   * - 🚩 **en**: Don't prefix log entries with timestamps
   * - **zh-CN**: 不在日志前加时间戳前缀
   */
  export const opt_no_log_prefix: string;
  /**
   * - 🚩 **en**: Don't normalize compose model
   * - **zh-CN**: 不标准化 compose 模型
   */
  export const opt_no_normalize: string;
  /**
   * - 🚩 **en**: Don't resolve file paths
   * - **zh-CN**: 不解析文件路径
   */
  export const opt_no_path_resolution: string;
  /**
   * - 🚩 **en**: Disable pausing container during commit
   * - **zh-CN**: 提交期间不暂停容器
   */
  export const opt_no_pause: string;
  /**
   * - 🚩 **en**: Do not delete untagged parents
   * - **zh-CN**: 不删除未标记的父镜像
   */
  export const opt_no_prune: string;
  /**
   * - 🚩 **en**: If containers already exist, don't recreate them
   * - **zh-CN**: 如果容器已存在，不重新创建
   */
  export const opt_no_recreate: string;
  /**
   * - 🚩 **en**: Do not map IDs to names
   * - **zh-CN**: 不将 ID 映射为名称
   */
  export const opt_no_resolve: string;
  /**
   * - 🚩 **en**: Don't start the service after creating containers
   * - **zh-CN**: 创建容器后不启动
   */
  export const opt_no_start: string;
  /**
   * - 🚩 **en**: Do not attach STDIN
   * - **zh-CN**: 不附加 STDIN
   */
  export const opt_no_stdin: string;
  /**
   * - 🚩 **en**: Disable streaming stats and only pull the first result
   * - **zh-CN**: 禁用流式统计，仅拉取第一个结果
   */
  export const opt_no_stream: string;
  /**
   * - 🚩 **en**: Do not include task IDs
   * - **zh-CN**: 不包含任务 ID
   */
  export const opt_no_task_ids: string;
  /**
   * - 🚩 **en**: Don't truncate output
   * - **zh-CN**: 不截断输出
   */
  export const opt_no_trunc: string;
  /**
   * - 🚩 **en**: Do not allocate a pseudo-TTY
   * - **zh-CN**: 不分配伪 TTY
   */
  export const opt_no_tty: string;
  /**
   * - 🚩 **en**: Do not build and start services before watching
   * - **zh-CN**: 不构建和启动服务
   */
  export const opt_no_up: string;
  /**
   * - 🚩 **en**: Create/modify node with given name
   * - **zh-CN**: 创建/修改指定名称的节点
   */
  export const opt_node_builder: string;
  /**
   * - 🚩 **en**: Disable OOM Killer
   * - **zh-CN**: 禁用 OOM Killer
   */
  export const opt_oom_kill_disable: string;
  /**
   * - 🚩 **en**: Tune host's OOM preferences (-1000 to 1000)
   * - **zh-CN**: 调整宿主机 OOM 优先级（-1000 到 1000）
   */
  export const opt_oom_score_adj: string;
  /**
   * - 🚩 **en**: Set driver specific options
   * - **zh-CN**: 设置驱动特定选项
   */
  export const opt_opt: string;
  /**
   * - 🚩 **en**: Include orphaned services (not declared by project)
   * - **zh-CN**: 包含孤立服务（非项目声明的）
   */
  export const opt_orphans: string;
  /**
   * - 🚩 **en**: Target operating system
   * - **zh-CN**: 目标操作系统
   */
  export const opt_os: string;
  /**
   * - 🚩 **en**: OS features
   * - **zh-CN**: 操作系统特性
   */
  export const opt_os_features: string;
  /**
   * - 🚩 **en**: OS version
   * - **zh-CN**: 操作系统版本
   */
  export const opt_os_version: string;
  /**
   * - 🚩 **en**: Output destination (format: type=local,dest=path)
   * - **zh-CN**: 输出目标
   */
  export const opt_output: string;
  /**
   * - 🚩 **en**: Write to a file, instead of STDOUT
   * - **zh-CN**: 写入文件而不是 STDOUT
   */
  export const opt_output_file: string;
  /**
   * - 🚩 **en**: Control max parallelism, -1 for unlimited
   * - **zh-CN**: 控制最大并行数，-1 为无限制
   */
  export const opt_parallel: string;
  /**
   * - 🚩 **en**: Password or Personal Access Token (PAT)
   * - **zh-CN**: 密码或个人访问令牌（PAT）
   */
  export const opt_password: string;
  /**
   * - 🚩 **en**: Take the Password or Personal Access Token (PAT) from stdin
   * - **zh-CN**: 从 stdin 读取密码或 PAT
   */
  export const opt_password_stdin: string;
  /**
   * - 🚩 **en**: PID namespace to use
   * - **zh-CN**: PID 命名空间
   */
  export const opt_pid: string;
  /**
   * - 🚩 **en**: Tune container pids limit (set -1 for unlimited)
   * - **zh-CN**: 调整容器 PID 限制（-1 为无限制）
   */
  export const opt_pids_limit: string;
  /**
   * - 🚩 **en**: Add a placement preference
   * - **zh-CN**: 添加放置偏好
   */
  export const opt_placement_pref: string;
  /**
   * - 🚩 **en**: Set platform if server is multi-platform capable
   * - **zh-CN**: 设置平台
   */
  export const opt_platform: string;
  /**
   * - 🚩 **en**: Policy configuration for build
   * - **zh-CN**: 构建的策略配置
   */
  export const opt_policy: string;
  /**
   * - 🚩 **en**: Pull policy (always|missing|never|build)
   * - **zh-CN**: 拉取策略
   */
  export const opt_policy_compose: string;
  /**
   * - 🚩 **en**: Print the information in a human friendly format
   * - **zh-CN**: 以人类友好的格式打印信息
   */
  export const opt_pretty_inspect: string;
  /**
   * - 🚩 **en**: Print equivalent bake file
   * - **zh-CN**: 打印等效的 bake 文件
   */
  export const opt_print: string;
  /**
   * - 🚩 **en**: Give extended privileges to this container
   * - **zh-CN**: 赋予容器扩展权限
   */
  export const opt_privileged: string;
  /**
   * - 🚩 **en**: Specify a profile to enable
   * - **zh-CN**: 指定要启用的 profile
   */
  export const opt_profile: string;
  /**
   * - 🚩 **en**: Display profiles
   * - **zh-CN**: 显示 profiles
   */
  export const opt_profiles: string;
  /**
   * - 🚩 **en**: Set type of progress output
   * - **zh-CN**: 设置进度输出类型
   */
  export const opt_progress: string;
  /**
   * - 🚩 **en**: Work directory
   * - **zh-CN**: 工作目录
   */
  export const opt_project_dir: string;
  /**
   * - 🚩 **en**: Project name
   * - **zh-CN**: 项目名称
   */
  export const opt_project_name: string;
  /**
   * - 🚩 **en**: Protocol (tcp|udp)
   * - **zh-CN**: 协议（tcp|udp）
   */
  export const opt_protocol: string;
  /**
   * - 🚩 **en**: Shorthand for --attest=type=provenance
   * - **zh-CN**: --attest=type=provenance 的简写
   */
  export const opt_provenance: string;
  /**
   * - 🚩 **en**: Prune services that are no longer referenced
   * - **zh-CN**: 清理不再被引用的服务
   */
  export const opt_prune_stack: string;
  /**
   * - 🚩 **en**: Prune dangling images on rebuild
   * - **zh-CN**: 重建时清理悬空镜像
   */
  export const opt_prune_watch: string;
  /**
   * - 🚩 **en**: Publish a container's port(s) to the host
   * - **zh-CN**: 发布容器端口到宿主机
   */
  export const opt_publish: string;
  /**
   * - 🚩 **en**: Publish all exposed ports to random ports
   * - **zh-CN**: 将所有暴露端口发布到随机端口
   */
  export const opt_publish_all: string;
  /**
   * - 🚩 **en**: Always attempt to pull a newer version of the image
   * - **zh-CN**: 始终尝试拉取镜像新版本
   */
  export const opt_pull: string;
  /**
   * - 🚩 **en**: Pull image before running (always|missing|never)
   * - **zh-CN**: 运行前拉取镜像（always|missing|never）
   */
  export const opt_pull_compose_up: string;
  /**
   * - 🚩 **en**: Remove the manifest list from local storage
   * - **zh-CN**: 从本地存储中移除 manifest 列表
   */
  export const opt_purge: string;
  /**
   * - 🚩 **en**: Shorthand for --output=type=registry
   * - **zh-CN**: --output=type=registry 的简写
   */
  export const opt_push_build: string;
  /**
   * - 🚩 **en**: Only display IDs
   * - **zh-CN**: 仅显示 ID
   */
  export const opt_quiet: string;
  /**
   * - 🚩 **en**: Suppress the build output
   * - **zh-CN**: 抑制构建输出
   */
  export const opt_quiet_build: string;
  /**
   * - 🚩 **en**: Pull without printing progress information
   * - **zh-CN**: 拉取时不打印进度信息
   */
  export const opt_quiet_pull: string;
  /**
   * - 🚩 **en**: Do not truncate output
   * - **zh-CN**: 不截断输出
   */
  export const opt_raw: string;
  /**
   * - 🚩 **en**: Mount the container's root filesystem as read only
   * - **zh-CN**: 将容器根文件系统挂载为只读
   */
  export const opt_read_only: string;
  /**
   * - 🚩 **en**: Remove containers for services not defined in the Compose file
   * - **zh-CN**: 删除未在 Compose 文件中定义的服务容器
   */
  export const opt_remove_orphans: string;
  /**
   * - 🚩 **en**: Re-create anonymous volumes instead of retrieving data from the previous containers
   * - **zh-CN**: 重新创建匿名卷
   */
  export const opt_renew_anon_volumes: string;
  /**
   * - 🚩 **en**: Number of replicas
   * - **zh-CN**: 副本数量
   */
  export const opt_replicas: string;
  /**
   * - 🚩 **en**: Required size of the volume in bytes
   * - **zh-CN**: 卷的所需字节数
   */
  export const opt_required_bytes: string;
  /**
   * - 🚩 **en**: Reserve CPUs
   * - **zh-CN**: 预留 CPU
   */
  export const opt_reserve_cpu: string;
  /**
   * - 🚩 **en**: Reserve Memory
   * - **zh-CN**: 预留内存
   */
  export const opt_reserve_memory: string;
  /**
   * - 🚩 **en**: Amount of disk space always allowed to be used for build data
   * - **zh-CN**: 始终允许用于构建数据的磁盘空间量
   */
  export const opt_reserved_space: string;
  /**
   * - 🚩 **en**: Query the registry to resolve image digest and supported platforms
   * - **zh-CN**: 查询 registry 以解析镜像摘要和受支持的平台
   */
  export const opt_resolve_image: string;
  /**
   * - 🚩 **en**: Pin image tags to digests
   * - **zh-CN**: 将镜像标签固定为摘要
   */
  export const opt_resolve_image_digests: string;
  /**
   * - 🚩 **en**: Resource limits for build containers
   * - **zh-CN**: 构建容器的资源限制
   */
  export const opt_resource: string;
  /**
   * - 🚩 **en**: Restart policy to apply when a container exits
   * - **zh-CN**: 容器退出时的重启策略
   */
  export const opt_restart: string;
  /**
   * - 🚩 **en**: Restart when condition is met (none|on-failure|any)
   * - **zh-CN**: 重启条件 (none|on-failure|any)
   */
  export const opt_restart_condition: string;
  /**
   * - 🚩 **en**: Delay between restart attempts
   * - **zh-CN**: 重启尝试之间的延迟
   */
  export const opt_restart_delay: string;
  /**
   * - 🚩 **en**: Maximum number of restart attempts
   * - **zh-CN**: 最大重启尝试次数
   */
  export const opt_restart_max_attempts: string;
  /**
   * - 🚩 **en**: Window used to evaluate restart attempts
   * - **zh-CN**: 评估重启尝试的窗口时间
   */
  export const opt_restart_window: string;
  /**
   * - 🚩 **en**: Automatically remove the container when it exits
   * - **zh-CN**: 容器退出时自动删除
   */
  export const opt_rm: string;
  /**
   * - 🚩 **en**: Remove intermediate containers after a successful build
   * - **zh-CN**: 构建成功后删除中间容器
   */
  export const opt_rm_cache: string;
  /**
   * - 🚩 **en**: Remove images used by services (local|all)
   * - **zh-CN**: 删除服务使用的镜像（local|all）
   */
  export const opt_rmi_type: string;
  /**
   * - 🚩 **en**: Role of the node (worker|manager)
   * - **zh-CN**: 节点角色 (worker|manager)
   */
  export const opt_role_node: string;
  /**
   * - 🚩 **en**: Delay between rollback attempts
   * - **zh-CN**: 回滚尝试之间的延迟
   */
  export const opt_rollback_delay: string;
  /**
   * - 🚩 **en**: Action on rollback failure (pause|continue)
   * - **zh-CN**: 回滚失败时的操作 (pause|continue)
   */
  export const opt_rollback_failure_action: string;
  /**
   * - 🚩 **en**: Failure rate to tolerate during rollback
   * - **zh-CN**: 回滚期间可容忍的失败率
   */
  export const opt_rollback_max_failure_ratio: string;
  /**
   * - 🚩 **en**: Duration after each task to monitor for failure
   * - **zh-CN**: 每个任务后监视失败的持续时间
   */
  export const opt_rollback_monitor: string;
  /**
   * - 🚩 **en**: Rollback order (start-first|stop-first)
   * - **zh-CN**: 回滚顺序 (start-first|stop-first)
   */
  export const opt_rollback_order: string;
  /**
   * - 🚩 **en**: Maximum number of tasks rolled back simultaneously
   * - **zh-CN**: 同时回滚的最大任务数
   */
  export const opt_rollback_parallelism: string;
  /**
   * - 🚩 **en**: Rotate the swarm CA - if no certificate or key are provided, new ones will be generated
   * - **zh-CN**: 轮换 swarm CA——如果未提供证书或密钥，将生成新的
   */
  export const opt_rotate: string;
  /**
   * - 🚩 **en**: Runtime to use for this container
   * - **zh-CN**: 容器使用的运行时
   */
  export const opt_runtime: string;
  /**
   * - 🚩 **en**: Shorthand for --attest=type=sbom
   * - **zh-CN**: --attest=type=sbom 的简写
   */
  export const opt_sbom: string;
  /**
   * - 🚩 **en**: Set number of containers for a service
   * - **zh-CN**: 设置服务的容器数量
   */
  export const opt_scale: string;
  /**
   * - 🚩 **en**: Set the scope of the network
   * - **zh-CN**: 设置网络范围
   */
  export const opt_scope: string;
  /**
   * - 🚩 **en**: Volume scope (single|multi)
   * - **zh-CN**: 卷范围（single|multi）
   */
  export const opt_scope_vol: string;
  /**
   * - 🚩 **en**: Secret file to expose to the build
   * - **zh-CN**: 暴露给构建的密钥文件
   */
  export const opt_secret: string;
  /**
   * - 🚩 **en**: Secret used to create the volume
   * - **zh-CN**: 用于创建卷的密钥
   */
  export const opt_secret_vol: string;
  /**
   * - 🚩 **en**: Security Options
   * - **zh-CN**: 安全选项
   */
  export const opt_security_opt: string;
  /**
   * - 🚩 **en**: Fetch the logs of a service or task
   * - **zh-CN**: 获取服务或任务的日志
   */
  export const opt_service_logs: string;
  /**
   * - 🚩 **en**: Run command with the service's ports enabled and mapped to the host
   * - **zh-CN**: 启用服务端口并映射到宿主机运行命令
   */
  export const opt_service_ports: string;
  /**
   * - 🚩 **en**: Display services
   * - **zh-CN**: 显示服务
   */
  export const opt_services: string;
  /**
   * - 🚩 **en**: Override target value (e.g., targetpattern.key=value)
   * - **zh-CN**: 覆盖目标值（例如 targetpattern.key=value）
   */
  export const opt_set: string;
  /**
   * - 🚩 **en**: Volume sharing (none|readonly|onewriter|all)
   * - **zh-CN**: 卷共享模式（none|readonly|onewriter|all）
   */
  export const opt_sharing: string;
  /**
   * - 🚩 **en**: Size of /dev/shm
   * - **zh-CN**: /dev/shm 的大小
   */
  export const opt_shm_size: string;
  /**
   * - 🚩 **en**: Show only version number
   * - **zh-CN**: 仅显示版本号
   */
  export const opt_short: string;
  /**
   * - 🚩 **en**: Proxy received signals to the process
   * - **zh-CN**: 将接收到的信号代理到进程
   */
  export const opt_sig_proxy: string;
  /**
   * - 🚩 **en**: Signal to send to the container
   * - **zh-CN**: 发送给容器的信号
   */
  export const opt_signal: string;
  /**
   * - 🚩 **en**: Show logs since timestamp
   * - **zh-CN**: 显示自某个时间戳起的日志
   */
  export const opt_since: string;
  /**
   * - 🚩 **en**: Display total file sizes
   * - **zh-CN**: 显示总文件大小
   */
  export const opt_size: string;
  /**
   * - 🚩 **en**: Skip interpolation of environment variables
   * - **zh-CN**: 跳过环境变量插值
   */
  export const opt_skip_interpolation: string;
  /**
   * - 🚩 **en**: Do not check if the plugin is available remotely
   * - **zh-CN**: 不检查插件是否在远程可用
   */
  export const opt_skip_remote_check: string;
  /**
   * - 🚩 **en**: Number of log entries between Raft snapshots
   * - **zh-CN**: Raft 快照之间的日志条目数
   */
  export const opt_snapshot_interval: string;
  /**
   * - 🚩 **en**: Squash newly built layers into a single new layer
   * - **zh-CN**: 将新构建的层压缩为单个新层
   */
  export const opt_squash: string;
  /**
   * - 🚩 **en**: SSH agent socket or keys to expose to the build
   * - **zh-CN**: 暴露给构建的 SSH agent socket 或密钥
   */
  export const opt_ssh: string;
  /**
   * - 🚩 **en**: Filter by status (paused|running|stopped|removing|exited)
   * - **zh-CN**: 按状态过滤
   */
  export const opt_status: string;
  /**
   * - 🚩 **en**: Stop the containers before removing
   * - **zh-CN**: 移除前停止容器
   */
  export const opt_stop_compose: string;
  /**
   * - 🚩 **en**: Time to wait before force killing the container
   * - **zh-CN**: 强制终止容器前的等待时间
   */
  export const opt_stop_grace_period: string;
  /**
   * - 🚩 **en**: Signal to stop the container
   * - **zh-CN**: 停止容器的信号
   */
  export const opt_stop_signal: string;
  /**
   * - 🚩 **en**: Timeout (in seconds) to stop the container
   * - **zh-CN**: 停止容器的超时时间（秒）
   */
  export const opt_stop_timeout: string;
  /**
   * - 🚩 **en**: Storage driver options for the container
   * - **zh-CN**: 容器的存储驱动选项
   */
  export const opt_storage_opt: string;
  /**
   * - 🚩 **en**: Subnet in CIDR format
   * - **zh-CN**: CIDR 格式的子网
   */
  export const opt_subnet: string;
  /**
   * - 🚩 **en**: Sysctl options
   * - **zh-CN**: Sysctl 选项
   */
  export const opt_sysctl: string;
  /**
   * - 🚩 **en**: Tag for the image
   * - **zh-CN**: 镜像标签
   */
  export const opt_tag: string;
  /**
   * - 🚩 **en**: Number of lines to show from the end of the logs
   * - **zh-CN**: 从日志末尾显示的行数
   */
  export const opt_tail: string;
  /**
   * - 🚩 **en**: Set the target build stage to build
   * - **zh-CN**: 设置目标构建阶段
   */
  export const opt_target: string;
  /**
   * - 🚩 **en**: Task history retention limit
   * - **zh-CN**: 任务历史保留限制
   */
  export const opt_task_history_limit: string;
  /**
   * - 🚩 **en**: Template driver
   * - **zh-CN**: 模板驱动
   */
  export const opt_template_driver: string;
  /**
   * - 🚩 **en**: Timeout in seconds
   * - **zh-CN**: 超时时间（秒）
   */
  export const opt_timeout: string;
  /**
   * - 🚩 **en**: Show timestamps
   * - **zh-CN**: 显示时间戳
   */
  export const opt_timestamps: string;
  /**
   * - 🚩 **en**: Use TLS; implied by --tlsverify
   * - **zh-CN**: 使用 TLS
   */
  export const opt_tls: string;
  /**
   * - 🚩 **en**: Trust certs signed only by this CA
   * - **zh-CN**: 信任仅由此 CA 签发的证书
   */
  export const opt_tlscacert: string;
  /**
   * - 🚩 **en**: Path to TLS certificate file
   * - **zh-CN**: TLS 证书文件路径
   */
  export const opt_tlscert: string;
  /**
   * - 🚩 **en**: Path to TLS key file
   * - **zh-CN**: TLS 密钥文件路径
   */
  export const opt_tlskey: string;
  /**
   * - 🚩 **en**: Use TLS and verify the remote
   * - **zh-CN**: 使用 TLS 并验证远程端
   */
  export const opt_tlsverify: string;
  /**
   * - 🚩 **en**: Mount a tmpfs directory
   * - **zh-CN**: 挂载 tmpfs 目录
   */
  export const opt_tmpfs: string;
  /**
   * - 🚩 **en**: Token for entry into the swarm
   * - **zh-CN**: 加入 swarm 的令牌
   */
  export const opt_token: string;
  /**
   * - 🚩 **en**: Topology that the volume should be provisioned in
   * - **zh-CN**: 卷应配置到的拓扑
   */
  export const opt_topology_preferred: string;
  /**
   * - 🚩 **en**: Topology that the volume must be provisioned in
   * - **zh-CN**: 卷必须配置到的拓扑
   */
  export const opt_topology_required: string;
  /**
   * - 🚩 **en**: List multi-platform images as a tree (EXPERIMENTAL)
   * - **zh-CN**: 以树形列出多平台镜像（实验性）
   */
  export const opt_tree: string;
  /**
   * - 🚩 **en**: Allocate a pseudo-TTY
   * - **zh-CN**: 分配伪 TTY
   */
  export const opt_tty: string;
  /**
   * - 🚩 **en**: Return JSON for specified type
   * - **zh-CN**: 返回指定类型的 JSON
   */
  export const opt_type: string;
  /**
   * - 🚩 **en**: Volume type (block|file|mount)
   * - **zh-CN**: 卷类型（block|file|mount）
   */
  export const opt_type_vol: string;
  /**
   * - 🚩 **en**: Ulimit options
   * - **zh-CN**: Ulimit 选项
   */
  export const opt_ulimit: string;
  /**
   * - 🚩 **en**: Show logs before timestamp
   * - **zh-CN**: 显示某个时间戳之前的日志
   */
  export const opt_until: string;
  /**
   * - 🚩 **en**: Delay between updates
   * - **zh-CN**: 更新之间的延迟
   */
  export const opt_update_delay: string;
  /**
   * - 🚩 **en**: Action on update failure (pause|continue|rollback)
   * - **zh-CN**: 更新失败时的操作 (pause|continue|rollback)
   */
  export const opt_update_failure_action: string;
  /**
   * - 🚩 **en**: Failure rate to tolerate during update
   * - **zh-CN**: 更新期间可容忍的失败率
   */
  export const opt_update_max_failure_ratio: string;
  /**
   * - 🚩 **en**: Duration after each task to monitor for failure
   * - **zh-CN**: 每个任务后监视失败的持续时间
   */
  export const opt_update_monitor: string;
  /**
   * - 🚩 **en**: Update order (start-first|stop-first)
   * - **zh-CN**: 更新顺序 (start-first|stop-first)
   */
  export const opt_update_order: string;
  /**
   * - 🚩 **en**: Maximum number of tasks updated simultaneously
   * - **zh-CN**: 同时更新的最大任务数
   */
  export const opt_update_parallelism: string;
  /**
   * - 🚩 **en**: Use the service's network aliases in the network(s) the container connects to
   * - **zh-CN**: 使用服务的网络别名
   */
  export const opt_use_aliases: string;
  /**
   * - 🚩 **en**: Bind mount Docker API socket and required auth
   * - **zh-CN**: 挂载 Docker API 套接字和所需认证
   */
  export const opt_use_api_socket: string;
  /**
   * - 🚩 **en**: Set the current builder instance
   * - **zh-CN**: 设置当前构建器实例
   */
  export const opt_use_builder: string;
  /**
   * - 🚩 **en**: Username or UID (format: <name|uid>[:<group|gid>])
   * - **zh-CN**: 用户名或 UID
   */
  export const opt_user: string;
  /**
   * - 🚩 **en**: Username
   * - **zh-CN**: 用户名
   */
  export const opt_username: string;
  /**
   * - 🚩 **en**: User namespace to use
   * - **zh-CN**: 用户命名空间
   */
  export const opt_userns: string;
  /**
   * - 🚩 **en**: UTS namespace to use
   * - **zh-CN**: UTS 命名空间
   */
  export const opt_uts: string;
  /**
   * - 🚩 **en**: Set a variable value (e.g., name=value)
   * - **zh-CN**: 设置变量值（例如 name=value）
   */
  export const opt_var: string;
  /**
   * - 🚩 **en**: Print model variables and default values
   * - **zh-CN**: 打印模型变量和默认值
   */
  export const opt_variables: string;
  /**
   * - 🚩 **en**: Variant of the CPU architecture
   * - **zh-CN**: CPU 架构变体
   */
  export const opt_variant: string;
  /**
   * - 🚩 **en**: Show verbose output
   * - **zh-CN**: 显示详细输出
   */
  export const opt_verbose: string;
  /**
   * - 🚩 **en**: Show additional information
   * - **zh-CN**: 显示额外信息
   */
  export const opt_verbose_manifest: string;
  /**
   * - 🚩 **en**: Print version information and quit
   * - **zh-CN**: 打印版本信息并退出
   */
  export const opt_version_global: string;
  /**
   * - 🚩 **en**: Bind mount a volume
   * - **zh-CN**: 挂载卷
   */
  export const opt_volume: string;
  /**
   * - 🚩 **en**: Optional volume driver for the container
   * - **zh-CN**: 可选卷驱动
   */
  export const opt_volume_driver: string;
  /**
   * - 🚩 **en**: Driver to manage the Volume
   * - **zh-CN**: 卷驱动
   */
  export const opt_volume_driver_create: string;
  /**
   * - 🚩 **en**: Update a volume (cluster volumes only)
   * - **zh-CN**: 更新卷（仅集群卷）
   */
  export const opt_volume_update: string;
  /**
   * - 🚩 **en**: Remove named volumes declared in the anonymous volumes section
   * - **zh-CN**: 删除匿名卷中声明的命名卷
   */
  export const opt_volumes: string;
  /**
   * - 🚩 **en**: Display volumes
   * - **zh-CN**: 显示卷
   */
  export const opt_volumes_compose: string;
  /**
   * - 🚩 **en**: Mount volumes from the specified container(s)
   * - **zh-CN**: 从指定容器挂载卷
   */
  export const opt_volumes_from: string;
  /**
   * - 🚩 **en**: Remove anonymous volumes associated with the container
   * - **zh-CN**: 删除与容器关联的匿名卷
   */
  export const opt_volumes_rm: string;
  /**
   * - 🚩 **en**: Prune volumes
   * - **zh-CN**: 清理卷
   */
  export const opt_volumes_system: string;
  /**
   * - 🚩 **en**: Maximum duration in seconds to wait for the project to be running|healthy
   * - **zh-CN**: 等待项目变为 running|healthy 的最大秒数
   */
  export const opt_wait_timeout: string;
  /**
   * - 🚩 **en**: Wait for services to be running|healthy
   * - **zh-CN**: 等待服务变为 running|healthy
   */
  export const opt_wait_up: string;
  /**
   * - 🚩 **en**: Watch source code and rebuild/refresh containers when files are updated
   * - **zh-CN**: 监视源代码并在文件更新时重建/刷新容器
   */
  export const opt_watch_up: string;
  /**
   * - 🚩 **en**: Also build dependencies (transitively)
   * - **zh-CN**: 同时构建依赖（传递性）
   */
  export const opt_with_dependencies: string;
  /**
   * - 🚩 **en**: Send registry authentication details to swarm agents
   * - **zh-CN**: 向 swarm 代理发送 registry 认证信息
   */
  export const opt_with_registry_auth: string;
  /**
   * - 🚩 **en**: Send registry authentication details to Swarm agents
   * - **zh-CN**: 向 Swarm 代理发送 registry 认证信息
   */
  export const opt_with_registry_auth_svc: string;
  /**
   * - 🚩 **en**: Working directory inside the container
   * - **zh-CN**: 容器内的工作目录
   */
  export const opt_workdir: string;
  /**
   * - 🚩 **en**: Assume "yes" as answer to all prompts and run non-interactively
   * - **zh-CN**: 对所有提示回答"是"并以非交互模式运行
   */
  export const opt_yes: string;
}

declare module "virtual:i18n/git" {
  /**
   * - 🚩 **en**: Add file contents to the index
   * - **zh-CN**: 将文件内容添加到暂存区
   */
  export const cmd_add: string;
  /**
   * - 🚩 **en**: Use binary search to find the commit that introduced a bug
   * - **zh-CN**: 用二分查找定位引入 bug 的提交
   */
  export const cmd_bisect: string;
  /**
   * - 🚩 **en**: Mark commit as bad
   * - **zh-CN**: 标记当前提交为有问题
   */
  export const cmd_bisect_bad: string;
  /**
   * - 🚩 **en**: Mark commit as good
   * - **zh-CN**: 标记当前提交为正常
   */
  export const cmd_bisect_good: string;
  /**
   * - 🚩 **en**: Show bisect log
   * - **zh-CN**: 查看二分查找日志
   */
  export const cmd_bisect_log: string;
  /**
   * - 🚩 **en**: Finish bisect session
   * - **zh-CN**: 结束二分查找
   */
  export const cmd_bisect_reset: string;
  /**
   * - 🚩 **en**: Run script to automate bisect
   * - **zh-CN**: 运行脚本自动化二分查找
   */
  export const cmd_bisect_run: string;
  /**
   * - 🚩 **en**: Skip current commit
   * - **zh-CN**: 跳过当前提交
   */
  export const cmd_bisect_skip: string;
  /**
   * - 🚩 **en**: Start bisect session
   * - **zh-CN**: 开始二分查找
   */
  export const cmd_bisect_start: string;
  /**
   * - 🚩 **en**: List, create, or delete branches
   * - **zh-CN**: 列出、创建或删除分支
   */
  export const cmd_branch: string;
  /**
   * - 🚩 **en**: Apply the changes introduced by some existing commits
   * - **zh-CN**: 应用已有提交引入的变更
   */
  export const cmd_cherry_pick: string;
  /**
   * - 🚩 **en**: Clone a repository into a new directory
   * - **zh-CN**: 克隆仓库到新目录
   */
  export const cmd_clone: string;
  /**
   * - 🚩 **en**: Record changes to the repository
   * - **zh-CN**: 记录变更到仓库
   */
  export const cmd_commit: string;
  /**
   * - 🚩 **en**: Get and set repository or global options
   * - **zh-CN**: 获取和设置仓库或全局选项
   */
  export const cmd_config: string;
  /**
   * - 🚩 **en**: Open config in editor
   * - **zh-CN**: 在编辑器中打开配置
   */
  export const cmd_config_edit: string;
  /**
   * - 🚩 **en**: Get a config value
   * - **zh-CN**: 获取配置值
   */
  export const cmd_config_get: string;
  /**
   * - 🚩 **en**: List all config variables
   * - **zh-CN**: 列出所有配置变量
   */
  export const cmd_config_list: string;
  /**
   * - 🚩 **en**: Remove a config section
   * - **zh-CN**: 删除配置节
   */
  export const cmd_config_remove_section: string;
  /**
   * - 🚩 **en**: Rename a config section
   * - **zh-CN**: 重命名配置节
   */
  export const cmd_config_rename_section: string;
  /**
   * - 🚩 **en**: Set a config value
   * - **zh-CN**: 设置配置值
   */
  export const cmd_config_set: string;
  /**
   * - 🚩 **en**: Remove a config variable
   * - **zh-CN**: 删除配置变量
   */
  export const cmd_config_unset: string;
  /**
   * - 🚩 **en**: Show changes between commits, commit and working tree, etc
   * - **zh-CN**: 显示提交之间、提交与工作区之间的差异
   */
  export const cmd_diff: string;
  /**
   * - 🚩 **en**: Download objects and refs from another repository
   * - **zh-CN**: 从另一个仓库下载对象和引用
   */
  export const cmd_fetch: string;
  /**
   * - 🚩 **en**: Distributed version control system
   * - **zh-CN**: 分布式版本控制系统
   */
  export const cmd_git: string;
  /**
   * - 🚩 **en**: Print lines matching a pattern
   * - **zh-CN**: 打印匹配模式的行
   */
  export const cmd_grep: string;
  /**
   * - 🚩 **en**: Create an empty Git repository or reinitialize an existing one
   * - **zh-CN**: 创建空 Git 仓库或重新初始化已有仓库
   */
  export const cmd_init: string;
  /**
   * - 🚩 **en**: Show commit logs
   * - **zh-CN**: 显示提交日志
   */
  export const cmd_log: string;
  /**
   * - 🚩 **en**: Join two or more development histories together
   * - **zh-CN**: 合并两个或多个开发历史
   */
  export const cmd_merge: string;
  /**
   * - 🚩 **en**: Move or rename a file, a directory, or a symlink
   * - **zh-CN**: 移动或重命名文件、目录或符号链接
   */
  export const cmd_mv: string;
  /**
   * - 🚩 **en**: Fetch from and integrate with another repository or a local branch
   * - **zh-CN**: 从远程仓库拉取并合并
   */
  export const cmd_pull: string;
  /**
   * - 🚩 **en**: Update remote refs along with associated objects
   * - **zh-CN**: 推送本地引用到远程仓库
   */
  export const cmd_push: string;
  /**
   * - 🚩 **en**: Reapply commits on top of another base tip
   * - **zh-CN**: 在另一个基础提交上重新应用提交
   */
  export const cmd_rebase: string;
  /**
   * - 🚩 **en**: Manage set of tracked repositories
   * - **zh-CN**: 管理远程仓库
   */
  export const cmd_remote: string;
  /**
   * - 🚩 **en**: Add a remote
   * - **zh-CN**: 添加远程仓库
   */
  export const cmd_remote_add: string;
  /**
   * - 🚩 **en**: Get the URLs for a remote
   * - **zh-CN**: 获取远程仓库 URL
   */
  export const cmd_remote_get_url: string;
  /**
   * - 🚩 **en**: Delete stale remote-tracking branches
   * - **zh-CN**: 删除过期的远程跟踪分支
   */
  export const cmd_remote_prune: string;
  /**
   * - 🚩 **en**: Remove a remote
   * - **zh-CN**: 删除远程仓库
   */
  export const cmd_remote_remove: string;
  /**
   * - 🚩 **en**: Rename a remote
   * - **zh-CN**: 重命名远程仓库
   */
  export const cmd_remote_rename: string;
  /**
   * - 🚩 **en**: Change the list of branches tracked by a remote
   * - **zh-CN**: 修改远程跟踪的分支列表
   */
  export const cmd_remote_set_branches: string;
  /**
   * - 🚩 **en**: Set the default branch for a remote
   * - **zh-CN**: 设置远程默认分支
   */
  export const cmd_remote_set_head: string;
  /**
   * - 🚩 **en**: Change the URLs for a remote
   * - **zh-CN**: 修改远程仓库 URL
   */
  export const cmd_remote_set_url: string;
  /**
   * - 🚩 **en**: Show information about a remote
   * - **zh-CN**: 显示远程仓库信息
   */
  export const cmd_remote_show: string;
  /**
   * - 🚩 **en**: Fetch updates for remotes
   * - **zh-CN**: 拉取所有远程更新
   */
  export const cmd_remote_update: string;
  /**
   * - 🚩 **en**: Set HEAD or the index to a known state
   * - **zh-CN**: 将 HEAD 或暂存区重置到已知状态
   */
  export const cmd_reset: string;
  /**
   * - 🚩 **en**: Restore working tree files
   * - **zh-CN**: 恢复工作区文件
   */
  export const cmd_restore: string;
  /**
   * - 🚩 **en**: Revert some existing commits
   * - **zh-CN**: 撤销已有提交
   */
  export const cmd_revert: string;
  /**
   * - 🚩 **en**: Remove files from the working tree and from the index
   * - **zh-CN**: 从工作区和暂存区删除文件
   */
  export const cmd_rm: string;
  /**
   * - 🚩 **en**: Show various types of objects
   * - **zh-CN**: 显示各类对象信息
   */
  export const cmd_show: string;
  /**
   * - 🚩 **en**: Stash the changes in a dirty working directory away
   * - **zh-CN**: 将脏工作区的变更暂存起来
   */
  export const cmd_stash: string;
  /**
   * - 🚩 **en**: Apply a stash entry
   * - **zh-CN**: 应用暂存条目
   */
  export const cmd_stash_apply: string;
  /**
   * - 🚩 **en**: Create a branch from a stash
   * - **zh-CN**: 从暂存创建分支
   */
  export const cmd_stash_branch: string;
  /**
   * - 🚩 **en**: Remove all stash entries
   * - **zh-CN**: 删除所有暂存条目
   */
  export const cmd_stash_clear: string;
  /**
   * - 🚩 **en**: Remove a stash entry
   * - **zh-CN**: 删除一个暂存条目
   */
  export const cmd_stash_drop: string;
  /**
   * - 🚩 **en**: List stash entries
   * - **zh-CN**: 列出所有暂存条目
   */
  export const cmd_stash_list: string;
  /**
   * - 🚩 **en**: Apply and remove a stash entry
   * - **zh-CN**: 应用并删除暂存条目
   */
  export const cmd_stash_pop: string;
  /**
   * - 🚩 **en**: Save changes to stash
   * - **zh-CN**: 保存变更到暂存
   */
  export const cmd_stash_push: string;
  /**
   * - 🚩 **en**: Show stash diff
   * - **zh-CN**: 显示暂存差异
   */
  export const cmd_stash_show: string;
  /**
   * - 🚩 **en**: Show the working tree status
   * - **zh-CN**: 显示工作区状态
   */
  export const cmd_status: string;
  /**
   * - 🚩 **en**: Initialize, update or inspect submodules
   * - **zh-CN**: 初始化、更新或检查子模块
   */
  export const cmd_submodule: string;
  /**
   * - 🚩 **en**: Add a submodule
   * - **zh-CN**: 添加子模块
   */
  export const cmd_submodule_add: string;
  /**
   * - 🚩 **en**: Unregister submodules
   * - **zh-CN**: 注销子模块
   */
  export const cmd_submodule_deinit: string;
  /**
   * - 🚩 **en**: Run a command in each submodule
   * - **zh-CN**: 在每个子模块中运行命令
   */
  export const cmd_submodule_foreach: string;
  /**
   * - 🚩 **en**: Initialize submodules
   * - **zh-CN**: 初始化子模块
   */
  export const cmd_submodule_init: string;
  /**
   * - 🚩 **en**: Set the default branch for a submodule
   * - **zh-CN**: 设置子模块默认分支
   */
  export const cmd_submodule_set_branch: string;
  /**
   * - 🚩 **en**: Set the URL for a submodule
   * - **zh-CN**: 设置子模块 URL
   */
  export const cmd_submodule_set_url: string;
  /**
   * - 🚩 **en**: Show submodule status
   * - **zh-CN**: 显示子模块状态
   */
  export const cmd_submodule_status: string;
  /**
   * - 🚩 **en**: Show submodule summary
   * - **zh-CN**: 显示子模块摘要
   */
  export const cmd_submodule_summary: string;
  /**
   * - 🚩 **en**: Sync submodule URLs
   * - **zh-CN**: 同步子模块 URL
   */
  export const cmd_submodule_sync: string;
  /**
   * - 🚩 **en**: Update submodules
   * - **zh-CN**: 更新子模块
   */
  export const cmd_submodule_update: string;
  /**
   * - 🚩 **en**: Switch branches
   * - **zh-CN**: 切换分支
   */
  export const cmd_switch: string;
  /**
   * - 🚩 **en**: Create, list, delete or verify tags
   * - **zh-CN**: 创建、列出、删除或验证标签
   */
  export const cmd_tag: string;
  /**
   * - 🚩 **en**: Manage multiple working trees
   * - **zh-CN**: 管理多个工作区
   */
  export const cmd_worktree: string;
  /**
   * - 🚩 **en**: Create a new working tree
   * - **zh-CN**: 创建新工作区
   */
  export const cmd_worktree_add: string;
  /**
   * - 🚩 **en**: List working trees
   * - **zh-CN**: 列出工作区
   */
  export const cmd_worktree_list: string;
  /**
   * - 🚩 **en**: Lock a working tree
   * - **zh-CN**: 锁定工作区
   */
  export const cmd_worktree_lock: string;
  /**
   * - 🚩 **en**: Move a working tree
   * - **zh-CN**: 移动工作区
   */
  export const cmd_worktree_move: string;
  /**
   * - 🚩 **en**: Prune working tree information
   * - **zh-CN**: 清理工作区信息
   */
  export const cmd_worktree_prune: string;
  /**
   * - 🚩 **en**: Remove a working tree
   * - **zh-CN**: 删除工作区
   */
  export const cmd_worktree_remove: string;
  /**
   * - 🚩 **en**: Repair working tree administrative files
   * - **zh-CN**: 修复工作区管理文件
   */
  export const cmd_worktree_repair: string;
  /**
   * - 🚩 **en**: Unlock a working tree
   * - **zh-CN**: 解锁工作区
   */
  export const cmd_worktree_unlock: string;
  /**
   * - 🚩 **en**: Abort current operation
   * - **zh-CN**: 中止当前操作
   */
  export const opt_abort: string;
  /**
   * - 🚩 **en**: Add URL
   * - **zh-CN**: 添加 URL
   */
  export const opt_add_url: string;
  /**
   * - 🚩 **en**: All
   * - **zh-CN**: 全部
   */
  export const opt_all: string;
  /**
   * - 🚩 **en**: Allow empty commit
   * - **zh-CN**: 允许空提交
   */
  export const opt_allow_empty: string;
  /**
   * - 🚩 **en**: Allow fast-forward
   * - **zh-CN**: 允许快进
   */
  export const opt_allow_ff: string;
  /**
   * - 🚩 **en**: Amend previous commit
   * - **zh-CN**: 修改上一次提交
   */
  export const opt_amend: string;
  /**
   * - 🚩 **en**: Create annotated tag
   * - **zh-CN**: 创建附注标签
   */
  export const opt_annotate: string;
  /**
   * - 🚩 **en**: Append commit name to message
   * - **zh-CN**: 在提交信息中追加原始提交名
   */
  export const opt_append_commit: string;
  /**
   * - 🚩 **en**: Filter by author
   * - **zh-CN**: 按作者过滤
   */
  export const opt_author: string;
  /**
   * - 🚩 **en**: Auto squash fixup commits
   * - **zh-CN**: 自动压缩 fixup 提交
   */
  export const opt_autosquash: string;
  /**
   * - 🚩 **en**: Auto stash/unstash
   * - **zh-CN**: 自动暂存/恢复
   */
  export const opt_autostash: string;
  /**
   * - 🚩 **en**: Create bare repository
   * - **zh-CN**: 创建裸仓库
   */
  export const opt_bare: string;
  /**
   * - 🚩 **en**: Branch name
   * - **zh-CN**: 分支名称
   */
  export const opt_branch: string;
  /**
   * - 🚩 **en**: Use cached/index
   * - **zh-CN**: 使用缓存/暂存区
   */
  export const opt_cached: string;
  /**
   * - 🚩 **en**: Color output
   * - **zh-CN**: 彩色输出
   */
  export const opt_color: string;
  /**
   * - 🚩 **en**: Commit all changed files
   * - **zh-CN**: 提交所有已修改文件
   */
  export const opt_commit_all: string;
  /**
   * - 🚩 **en**: Set config key=value
   * - **zh-CN**: 设置配置键值
   */
  export const opt_config_kv: string;
  /**
   * - 🚩 **en**: Continue current operation
   * - **zh-CN**: 继续当前操作
   */
  export const opt_continue: string;
  /**
   * - 🚩 **en**: Copy branch
   * - **zh-CN**: 复制分支
   */
  export const opt_copy: string;
  /**
   * - 🚩 **en**: Show match count
   * - **zh-CN**: 显示匹配数量
   */
  export const opt_count: string;
  /**
   * - 🚩 **en**: Create and switch to new branch
   * - **zh-CN**: 创建并切换到新分支
   */
  export const opt_create_branch: string;
  /**
   * - 🚩 **en**: Create new branch
   * - **zh-CN**: 创建新分支
   */
  export const opt_create_new_branch: string;
  /**
   * - 🚩 **en**: Decorate refs
   * - **zh-CN**: 显示引用装饰
   */
  export const opt_decorate: string;
  /**
   * - 🚩 **en**: Delete
   * - **zh-CN**: 删除
   */
  export const opt_delete: string;
  /**
   * - 🚩 **en**: Delete URL
   * - **zh-CN**: 删除 URL
   */
  export const opt_delete_url: string;
  /**
   * - 🚩 **en**: Shallow clone depth
   * - **zh-CN**: 浅克隆深度
   */
  export const opt_depth: string;
  /**
   * - 🚩 **en**: Detach HEAD
   * - **zh-CN**: 分离 HEAD
   */
  export const opt_detach: string;
  /**
   * - 🚩 **en**: Dry run
   * - **zh-CN**: 预演，不实际执行
   */
  export const opt_dry_run: string;
  /**
   * - 🚩 **en**: Edit message
   * - **zh-CN**: 编辑信息
   */
  export const opt_edit: string;
  /**
   * - 🚩 **en**: Run command after each commit
   * - **zh-CN**: 每次提交后执行命令
   */
  export const opt_exec: string;
  /**
   * - 🚩 **en**: Fetch after adding
   * - **zh-CN**: 添加后立即拉取
   */
  export const opt_fetch_after_add: string;
  /**
   * - 🚩 **en**: Fast-forward only
   * - **zh-CN**: 仅允许快进合并
   */
  export const opt_ff_only: string;
  /**
   * - 🚩 **en**: Show only filenames
   * - **zh-CN**: 仅显示文件名
   */
  export const opt_files_with_matches: string;
  /**
   * - 🚩 **en**: Object filter
   * - **zh-CN**: 对象过滤器
   */
  export const opt_filter: string;
  /**
   * - 🚩 **en**: Use fixed string matching
   * - **zh-CN**: 使用固定字符串匹配
   */
  export const opt_fixed_value: string;
  /**
   * - 🚩 **en**: Fixup commit
   * - **zh-CN**: 修正提交
   */
  export const opt_fixup: string;
  /**
   * - 🚩 **en**: Follow file renames
   * - **zh-CN**: 跟踪文件重命名
   */
  export const opt_follow: string;
  /**
   * - 🚩 **en**: Force
   * - **zh-CN**: 强制执行
   */
  export const opt_force: string;
  /**
   * - 🚩 **en**: Force create and switch
   * - **zh-CN**: 强制创建并切换
   */
  export const opt_force_create_branch: string;
  /**
   * - 🚩 **en**: Force create/reset branch
   * - **zh-CN**: 强制创建/重置分支
   */
  export const opt_force_create_reset_branch: string;
  /**
   * - 🚩 **en**: Force delete branch
   * - **zh-CN**: 强制删除分支
   */
  export const opt_force_delete: string;
  /**
   * - 🚩 **en**: Force only if remote updates are integrated
   * - **zh-CN**: 仅在包含远程更新时强制推送
   */
  export const opt_force_if_includes: string;
  /**
   * - 🚩 **en**: Force rename branch
   * - **zh-CN**: 强制重命名分支
   */
  export const opt_force_move: string;
  /**
   * - 🚩 **en**: Force push with lease check
   * - **zh-CN**: 带租约检查的强制推送
   */
  export const opt_force_with_lease: string;
  /**
   * - 🚩 **en**: Get all values
   * - **zh-CN**: 获取所有值
   */
  export const opt_get_all: string;
  /**
   * - 🚩 **en**: Get values matching regexp
   * - **zh-CN**: 获取匹配正则的值
   */
  export const opt_get_regexp: string;
  /**
   * - 🚩 **en**: Set git dir
   * - **zh-CN**: 设置 git 目录
   */
  export const opt_git_dir: string;
  /**
   * - 🚩 **en**: Use global config
   * - **zh-CN**: 使用全局配置
   */
  export const opt_global: string;
  /**
   * - 🚩 **en**: Show commit graph
   * - **zh-CN**: 显示提交图
   */
  export const opt_graph: string;
  /**
   * - 🚩 **en**: Filter by commit message
   * - **zh-CN**: 按提交信息过滤
   */
  export const opt_grep_log: string;
  /**
   * - 🚩 **en**: Reset HEAD, index and working tree
   * - **zh-CN**: 重置 HEAD、暂存区和工作区
   */
  export const opt_hard: string;
  /**
   * - 🚩 **en**: Ignore whitespace
   * - **zh-CN**: 忽略空白
   */
  export const opt_ignore_all_space: string;
  /**
   * - 🚩 **en**: Case insensitive
   * - **zh-CN**: 忽略大小写
   */
  export const opt_ignore_case: string;
  /**
   * - 🚩 **en**: Show ignored files
   * - **zh-CN**: 显示被忽略的文件
   */
  export const opt_ignored: string;
  /**
   * - 🚩 **en**: Include untracked files
   * - **zh-CN**: 包含未跟踪文件
   */
  export const opt_include_untracked: string;
  /**
   * - 🚩 **en**: Restore index too
   * - **zh-CN**: 同时恢复暂存区
   */
  export const opt_index: string;
  /**
   * - 🚩 **en**: Initialize submodules
   * - **zh-CN**: 初始化子模块
   */
  export const opt_init: string;
  /**
   * - 🚩 **en**: Initial branch name
   * - **zh-CN**: 初始分支名称
   */
  export const opt_initial_branch: string;
  /**
   * - 🚩 **en**: Record intent to add
   * - **zh-CN**: 记录将要添加的路径
   */
  export const opt_intent_to_add: string;
  /**
   * - 🚩 **en**: Interactive mode
   * - **zh-CN**: 交互模式
   */
  export const opt_interactive: string;
  /**
   * - 🚩 **en**: Interactive rebase
   * - **zh-CN**: 交互式 rebase
   */
  export const opt_interactive_rebase: string;
  /**
   * - 🚩 **en**: Number of parallel jobs
   * - **zh-CN**: 并行任务数
   */
  export const opt_jobs: string;
  /**
   * - 🚩 **en**: Reset HEAD but keep local changes
   * - **zh-CN**: 重置 HEAD 但保留本地变更
   */
  export const opt_keep: string;
  /**
   * - 🚩 **en**: Keep index
   * - **zh-CN**: 保留暂存区
   */
  export const opt_keep_index: string;
  /**
   * - 🚩 **en**: Limit number of commits
   * - **zh-CN**: 限制提交数量
   */
  export const opt_limit: string;
  /**
   * - 🚩 **en**: Show line numbers
   * - **zh-CN**: 显示行号
   */
  export const opt_line_number: string;
  /**
   * - 🚩 **en**: List all
   * - **zh-CN**: 列出全部
   */
  export const opt_list: string;
  /**
   * - 🚩 **en**: Use local config
   * - **zh-CN**: 使用本地配置
   */
  export const opt_local: string;
  /**
   * - 🚩 **en**: Lock reason
   * - **zh-CN**: 锁定
   */
  export const opt_lock: string;
  /**
   * - 🚩 **en**: Select mainline parent
   * - **zh-CN**: 选择主线父提交
   */
  export const opt_mainline: string;
  /**
   * - 🚩 **en**: 3-way merge with new branch
   * - **zh-CN**: 与新分支进行三路合并
   */
  export const opt_merge_3way: string;
  /**
   * - 🚩 **en**: Use merge strategy
   * - **zh-CN**: 使用合并策略
   */
  export const opt_merge_strategy: string;
  /**
   * - 🚩 **en**: List merged branches
   * - **zh-CN**: 列出已合并分支
   */
  export const opt_merged: string;
  /**
   * - 🚩 **en**: Commit message
   * - **zh-CN**: 提交信息
   */
  export const opt_message: string;
  /**
   * - 🚩 **en**: Mirror repository
   * - **zh-CN**: 镜像仓库
   */
  export const opt_mirror: string;
  /**
   * - 🚩 **en**: Reset HEAD and index
   * - **zh-CN**: 重置 HEAD 和暂存区
   */
  export const opt_mixed: string;
  /**
   * - 🚩 **en**: Rename branch
   * - **zh-CN**: 重命名分支
   */
  export const opt_move: string;
  /**
   * - 🚩 **en**: Show only file names
   * - **zh-CN**: 仅显示文件名
   */
  export const opt_name_only: string;
  /**
   * - 🚩 **en**: Show file names and status
   * - **zh-CN**: 显示文件名和状态
   */
  export const opt_name_status: string;
  /**
   * - 🚩 **en**: No checkout after clone
   * - **zh-CN**: 克隆后不检出
   */
  export const opt_no_checkout: string;
  /**
   * - 🚩 **en**: Do not commit
   * - **zh-CN**: 不自动提交
   */
  export const opt_no_commit: string;
  /**
   * - 🚩 **en**: No fast-forward
   * - **zh-CN**: 禁止快进合并
   */
  export const opt_no_ff: string;
  /**
   * - 🚩 **en**: List unmerged branches
   * - **zh-CN**: 列出未合并分支
   */
  export const opt_no_merged: string;
  /**
   * - 🚩 **en**: Do not pipe to pager
   * - **zh-CN**: 不使用分页器
   */
  export const opt_no_pager: string;
  /**
   * - 🚩 **en**: Do not use replace refs
   * - **zh-CN**: 不使用替换引用
   */
  export const opt_no_replace_objects: string;
  /**
   * - 🚩 **en**: Bypass pre-commit and commit-msg hooks
   * - **zh-CN**: 跳过 pre-commit 和 commit-msg 钩子
   */
  export const opt_no_verify: string;
  /**
   * - 🚩 **en**: One line per commit
   * - **zh-CN**: 每个提交一行
   */
  export const opt_oneline: string;
  /**
   * - 🚩 **en**: Rebase onto
   * - **zh-CN**: 变基到指定提交
   */
  export const opt_onto: string;
  /**
   * - 🚩 **en**: Remote name
   * - **zh-CN**: 远程名称
   */
  export const opt_origin: string;
  /**
   * - 🚩 **en**: Create orphan branch
   * - **zh-CN**: 创建孤立分支
   */
  export const opt_orphan: string;
  /**
   * - 🚩 **en**: Pipe output to pager
   * - **zh-CN**: 通过分页器输出
   */
  export const opt_paginate: string;
  /**
   * - 🚩 **en**: Interactively select hunks
   * - **zh-CN**: 交互式选择代码块
   */
  export const opt_patch: string;
  /**
   * - 🚩 **en**: Pattern
   * - **zh-CN**: 匹配模式
   */
  export const opt_pattern: string;
  /**
   * - 🚩 **en**: Machine-readable output
   * - **zh-CN**: 机器可读输出
   */
  export const opt_porcelain: string;
  /**
   * - 🚩 **en**: Prune stale remote-tracking branches
   * - **zh-CN**: 清理过期的远程跟踪分支
   */
  export const opt_prune: string;
  /**
   * - 🚩 **en**: Prune local tags no longer on remote
   * - **zh-CN**: 清理远程已删除的本地标签
   */
  export const opt_prune_tags: string;
  /**
   * - 🚩 **en**: Push URL
   * - **zh-CN**: 推送 URL
   */
  export const opt_push: string;
  /**
   * - 🚩 **en**: Be more quiet
   * - **zh-CN**: 静默模式
   */
  export const opt_quiet: string;
  /**
   * - 🚩 **en**: Read message from file
   * - **zh-CN**: 从文件读取提交信息
   */
  export const opt_read_file: string;
  /**
   * - 🚩 **en**: Lock reason message
   * - **zh-CN**: 锁定原因
   */
  export const opt_reason: string;
  /**
   * - 🚩 **en**: Rebase instead of merge
   * - **zh-CN**: 使用 rebase 代替 merge
   */
  export const opt_rebase: string;
  /**
   * - 🚩 **en**: Recurse into submodules
   * - **zh-CN**: 递归处理子模块
   */
  export const opt_recurse_submodules: string;
  /**
   * - 🚩 **en**: Recursive
   * - **zh-CN**: 递归
   */
  export const opt_recursive: string;
  /**
   * - 🚩 **en**: Allow recursive removal
   * - **zh-CN**: 允许递归删除
   */
  export const opt_recursive_remove: string;
  /**
   * - 🚩 **en**: Use remote tracking branch
   * - **zh-CN**: 使用远程跟踪分支
   */
  export const opt_remote: string;
  /**
   * - 🚩 **en**: List remote branches
   * - **zh-CN**: 列出远程分支
   */
  export const opt_remotes: string;
  /**
   * - 🚩 **en**: Replace all matching values
   * - **zh-CN**: 替换所有匹配值
   */
  export const opt_replace_all: string;
  /**
   * - 🚩 **en**: Reuse message from commit
   * - **zh-CN**: 复用指定提交的信息
   */
  export const opt_reuse_message: string;
  /**
   * - 🚩 **en**: Run as if started in <path>
   * - **zh-CN**: 在指定路径下运行
   */
  export const opt_run_in_path: string;
  /**
   * - 🚩 **en**: Separate git dir
   * - **zh-CN**: 分离 git 目录
   */
  export const opt_separate_git_dir: string;
  /**
   * - 🚩 **en**: Set upstream for push/pull
   * - **zh-CN**: 设置推送/拉取的上游
   */
  export const opt_set_upstream: string;
  /**
   * - 🚩 **en**: Short format
   * - **zh-CN**: 简短格式
   */
  export const opt_short: string;
  /**
   * - 🚩 **en**: Show current branch
   * - **zh-CN**: 显示当前分支
   */
  export const opt_show_current: string;
  /**
   * - 🚩 **en**: Show config origin
   * - **zh-CN**: 显示配置来源
   */
  export const opt_show_origin: string;
  /**
   * - 🚩 **en**: Show config scope
   * - **zh-CN**: 显示配置作用域
   */
  export const opt_show_scope: string;
  /**
   * - 🚩 **en**: Show stash info
   * - **zh-CN**: 显示暂存信息
   */
  export const opt_show_stash: string;
  /**
   * - 🚩 **en**: GPG sign
   * - **zh-CN**: GPG 签名
   */
  export const opt_sign: string;
  /**
   * - 🚩 **en**: Add Signed-off-by trailer
   * - **zh-CN**: 添加 Signed-off-by 行
   */
  export const opt_signoff: string;
  /**
   * - 🚩 **en**: Show commits since date
   * - **zh-CN**: 显示指定日期之后的提交
   */
  export const opt_since: string;
  /**
   * - 🚩 **en**: Clone single branch
   * - **zh-CN**: 仅克隆单个分支
   */
  export const opt_single_branch: string;
  /**
   * - 🚩 **en**: Skip current commit
   * - **zh-CN**: 跳过当前提交
   */
  export const opt_skip: string;
  /**
   * - 🚩 **en**: Reset only HEAD
   * - **zh-CN**: 仅重置 HEAD
   */
  export const opt_soft: string;
  /**
   * - 🚩 **en**: Restore from tree-ish
   * - **zh-CN**: 从指定树恢复
   */
  export const opt_source: string;
  /**
   * - 🚩 **en**: Sparse checkout
   * - **zh-CN**: 稀疏检出
   */
  export const opt_sparse: string;
  /**
   * - 🚩 **en**: Squash commits
   * - **zh-CN**: 压缩提交
   */
  export const opt_squash: string;
  /**
   * - 🚩 **en**: Staged changes only
   * - **zh-CN**: 仅处理已暂存的变更
   */
  export const opt_staged: string;
  /**
   * - 🚩 **en**: Show diffstat
   * - **zh-CN**: 显示差异统计
   */
  export const opt_stat: string;
  /**
   * - 🚩 **en**: Merge strategy
   * - **zh-CN**: 合并策略
   */
  export const opt_strategy: string;
  /**
   * - 🚩 **en**: Submodule name
   * - **zh-CN**: 子模块名称
   */
  export const opt_submodule_name: string;
  /**
   * - 🚩 **en**: Use system config
   * - **zh-CN**: 使用系统配置
   */
  export const opt_system: string;
  /**
   * - 🚩 **en**: Include tags
   * - **zh-CN**: 包含标签
   */
  export const opt_tags: string;
  /**
   * - 🚩 **en**: Set branch tracking
   * - **zh-CN**: 设置分支跟踪
   */
  export const opt_track: string;
  /**
   * - 🚩 **en**: Config value type
   * - **zh-CN**: 配置值类型
   */
  export const opt_type: string;
  /**
   * - 🚩 **en**: Context lines
   * - **zh-CN**: 上下文行数
   */
  export const opt_unified: string;
  /**
   * - 🚩 **en**: Unset value
   * - **zh-CN**: 删除值
   */
  export const opt_unset: string;
  /**
   * - 🚩 **en**: Unset all values
   * - **zh-CN**: 删除所有匹配值
   */
  export const opt_unset_all: string;
  /**
   * - 🚩 **en**: Unset upstream
   * - **zh-CN**: 取消上游设置
   */
  export const opt_unset_upstream: string;
  /**
   * - 🚩 **en**: Show commits until date
   * - **zh-CN**: 显示指定日期之前的提交
   */
  export const opt_until: string;
  /**
   * - 🚩 **en**: Show untracked files
   * - **zh-CN**: 显示未跟踪文件
   */
  export const opt_untracked_files: string;
  /**
   * - 🚩 **en**: Update tracked files
   * - **zh-CN**: 更新已跟踪文件
   */
  export const opt_update: string;
  /**
   * - 🚩 **en**: Update branches pointing to rebased commits
   * - **zh-CN**: 更新指向变基提交的分支
   */
  export const opt_update_refs: string;
  /**
   * - 🚩 **en**: Use default branch
   * - **zh-CN**: 使用默认分支
   */
  export const opt_use_default_branch: string;
  /**
   * - 🚩 **en**: Be more verbose
   * - **zh-CN**: 显示详细信息
   */
  export const opt_verbose: string;
  /**
   * - 🚩 **en**: Verify tag signature
   * - **zh-CN**: 验证标签签名
   */
  export const opt_verify_tag: string;
  /**
   * - 🚩 **en**: Print version
   * - **zh-CN**: 显示版本
   */
  export const opt_version: string;
  /**
   * - 🚩 **en**: Match whole words
   * - **zh-CN**: 匹配完整单词
   */
  export const opt_word_regexp: string;
  /**
   * - 🚩 **en**: Set working tree
   * - **zh-CN**: 设置工作区
   */
  export const opt_work_tree: string;
  /**
   * - 🚩 **en**: Worktree path
   * - **zh-CN**: 工作区路径
   */
  export const opt_worktree: string;
  /**
   * - 🚩 **en**: Restore working tree (default)
   * - **zh-CN**: 恢复工作区（默认）
   */
  export const opt_worktree_restore: string;
}

declare module "virtual:i18n/npm" {
  /**
   * - 🚩 **en**: public
   * - **zh-CN**: 公开
   */
  export const arg_access_public: string;
  /**
   * - 🚩 **en**: restricted
   * - **zh-CN**: 受限
   */
  export const arg_access_restricted: string;
  /**
   * - 🚩 **en**: critical
   * - **zh-CN**: 严重
   */
  export const arg_auditLevel_critical: string;
  /**
   * - 🚩 **en**: high
   * - **zh-CN**: 高
   */
  export const arg_auditLevel_high: string;
  /**
   * - 🚩 **en**: info
   * - **zh-CN**: 信息
   */
  export const arg_auditLevel_info: string;
  /**
   * - 🚩 **en**: low
   * - **zh-CN**: 低
   */
  export const arg_auditLevel_low: string;
  /**
   * - 🚩 **en**: moderate
   * - **zh-CN**: 中
   */
  export const arg_auditLevel_moderate: string;
  /**
   * - 🚩 **en**: none
   * - **zh-CN**: 无
   */
  export const arg_auditLevel_none: string;
  /**
   * - 🚩 **en**: legacy
   * - **zh-CN**: 传统
   */
  export const arg_authType_legacy: string;
  /**
   * - 🚩 **en**: web
   * - **zh-CN**: 网页
   */
  export const arg_authType_web: string;
  /**
   * - 🚩 **en**: hoisted
   * - **zh-CN**: 提升
   */
  export const arg_install_hoisted: string;
  /**
   * - 🚩 **en**: linked
   * - **zh-CN**: 链接
   */
  export const arg_install_linked: string;
  /**
   * - 🚩 **en**: nested
   * - **zh-CN**: 嵌套
   */
  export const arg_install_nested: string;
  /**
   * - 🚩 **en**: shallow
   * - **zh-CN**: 浅
   */
  export const arg_install_shallow: string;
  /**
   * - 🚩 **en**: global
   * - **zh-CN**: 全局
   */
  export const arg_location_global: string;
  /**
   * - 🚩 **en**: project
   * - **zh-CN**: 项目
   */
  export const arg_location_project: string;
  /**
   * - 🚩 **en**: user
   * - **zh-CN**: 用户
   */
  export const arg_location_user: string;
  /**
   * - 🚩 **en**: cyclonedx
   * - **zh-CN**: CycloneDX
   */
  export const arg_sbomFormat_cyclonedx: string;
  /**
   * - 🚩 **en**: spdx
   * - **zh-CN**: SPDX
   */
  export const arg_sbomFormat_spdx: string;
  /**
   * - 🚩 **en**: application
   * - **zh-CN**: 应用
   */
  export const arg_sbomType_application: string;
  /**
   * - 🚩 **en**: framework
   * - **zh-CN**: 框架
   */
  export const arg_sbomType_framework: string;
  /**
   * - 🚩 **en**: library
   * - **zh-CN**: 库
   */
  export const arg_sbomType_library: string;
  /**
   * - 🚩 **en**: Set access level on published packages
   * - **zh-CN**: 设置已发布包的访问级别
   */
  export const cmd_access: string;
  /**
   * - 🚩 **en**: Get access status
   * - **zh-CN**: 获取访问状态
   */
  export const cmd_access_get: string;
  /**
   * - 🚩 **en**: Grant access
   * - **zh-CN**: 授予访问权限
   */
  export const cmd_access_grant: string;
  /**
   * - 🚩 **en**: List access
   * - **zh-CN**: 列出访问信息
   */
  export const cmd_access_list: string;
  /**
   * - 🚩 **en**: Revoke access
   * - **zh-CN**: 撤销访问权限
   */
  export const cmd_access_revoke: string;
  /**
   * - 🚩 **en**: Set access
   * - **zh-CN**: 设置访问
   */
  export const cmd_access_set: string;
  /**
   * - 🚩 **en**: Add a registry user account
   * - **zh-CN**: 添加注册表用户帐户
   */
  export const cmd_adduser: string;
  /**
   * - 🚩 **en**: Run a security audit
   * - **zh-CN**: 运行安全审计
   */
  export const cmd_audit: string;
  /**
   * - 🚩 **en**: Fix vulnerabilities
   * - **zh-CN**: 修复漏洞
   */
  export const cmd_audit_fix: string;
  /**
   * - 🚩 **en**: Verify package signatures
   * - **zh-CN**: 验证包签名
   */
  export const cmd_audit_signatures: string;
  /**
   * - 🚩 **en**: Report bugs for a package in a web browser
   * - **zh-CN**: 在浏览器中报告包的 Bug
   */
  export const cmd_bugs: string;
  /**
   * - 🚩 **en**: Manipulates packages and npx cache
   * - **zh-CN**: 操作包和 npx 缓存
   */
  export const cmd_cache: string;
  /**
   * - 🚩 **en**: Add a package spec
   * - **zh-CN**: 添加包规范
   */
  export const cmd_cache_add: string;
  /**
   * - 🚩 **en**: Clean cache
   * - **zh-CN**: 清除缓存
   */
  export const cmd_cache_clean: string;
  /**
   * - 🚩 **en**: List cache
   * - **zh-CN**: 列出缓存
   */
  export const cmd_cache_ls: string;
  /**
   * - 🚩 **en**: npx cache subcommands
   * - **zh-CN**: npx 缓存子命令
   */
  export const cmd_cache_npx: string;
  /**
   * - 🚩 **en**: Info npx cache
   * - **zh-CN**: 查看 npx 缓存信息
   */
  export const cmd_cache_npx_info: string;
  /**
   * - 🚩 **en**: List npx cache
   * - **zh-CN**: 列出 npx 缓存
   */
  export const cmd_cache_npx_ls: string;
  /**
   * - 🚩 **en**: Remove npx cache
   * - **zh-CN**: 删除 npx 缓存
   */
  export const cmd_cache_npx_rm: string;
  /**
   * - 🚩 **en**: Verify cache integrity
   * - **zh-CN**: 验证缓存完整性
   */
  export const cmd_cache_verify: string;
  /**
   * - 🚩 **en**: Clean install a project
   * - **zh-CN**: 纯净安装项目
   */
  export const cmd_ci: string;
  /**
   * - 🚩 **en**: Tab Completion for npm
   * - **zh-CN**: npm 制表符补全
   */
  export const cmd_completion: string;
  /**
   * - 🚩 **en**: Manage the npm configuration files
   * - **zh-CN**: 管理 npm 配置文件
   */
  export const cmd_config: string;
  /**
   * - 🚩 **en**: Delete config values
   * - **zh-CN**: 删除配置值
   */
  export const cmd_config_delete: string;
  /**
   * - 🚩 **en**: Edit config
   * - **zh-CN**: 编辑配置
   */
  export const cmd_config_edit: string;
  /**
   * - 🚩 **en**: Fix config
   * - **zh-CN**: 修复配置
   */
  export const cmd_config_fix: string;
  /**
   * - 🚩 **en**: Get config values
   * - **zh-CN**: 获取配置值
   */
  export const cmd_config_get: string;
  /**
   * - 🚩 **en**: List config
   * - **zh-CN**: 列出配置
   */
  export const cmd_config_list: string;
  /**
   * - 🚩 **en**: Set config values
   * - **zh-CN**: 设置配置值
   */
  export const cmd_config_set: string;
  /**
   * - 🚩 **en**: Reduce duplication in the package tree
   * - **zh-CN**: 减少包树中的重复
   */
  export const cmd_dedupe: string;
  /**
   * - 🚩 **en**: Deprecate a version of a package
   * - **zh-CN**: 将包的某个版本标记为弃用
   */
  export const cmd_deprecate: string;
  /**
   * - 🚩 **en**: The registry diff command
   * - **zh-CN**: 注册表差异比较命令
   */
  export const cmd_diff: string;
  /**
   * - 🚩 **en**: Modify package distribution tags
   * - **zh-CN**: 修改包的分发标签
   */
  export const cmd_distTag: string;
  /**
   * - 🚩 **en**: Add tag
   * - **zh-CN**: 添加标签
   */
  export const cmd_distTag_add: string;
  /**
   * - 🚩 **en**: List tags
   * - **zh-CN**: 列出标签
   */
  export const cmd_distTag_ls: string;
  /**
   * - 🚩 **en**: Remove tag
   * - **zh-CN**: 删除标签
   */
  export const cmd_distTag_rm: string;
  /**
   * - 🚩 **en**: Open documentation for a package in a web browser
   * - **zh-CN**: 在浏览器中打开包的文档
   */
  export const cmd_docs: string;
  /**
   * - 🚩 **en**: Check the health of your npm environment
   * - **zh-CN**: 检查 npm 环境的健康状况
   */
  export const cmd_doctor: string;
  /**
   * - 🚩 **en**: Edit an installed package
   * - **zh-CN**: 编辑已安装的包
   */
  export const cmd_edit: string;
  /**
   * - 🚩 **en**: Run a command from a local or remote npm package
   * - **zh-CN**: 从本地或远程 npm 包运行命令
   */
  export const cmd_exec: string;
  /**
   * - 🚩 **en**: Explain installed packages
   * - **zh-CN**: 解释已安装的包
   */
  export const cmd_explain: string;
  /**
   * - 🚩 **en**: Browse an installed package
   * - **zh-CN**: 浏览已安装的包
   */
  export const cmd_explore: string;
  /**
   * - 🚩 **en**: Find duplication in the package tree
   * - **zh-CN**: 查找包树中的重复
   */
  export const cmd_findDupes: string;
  /**
   * - 🚩 **en**: Retrieve funding information
   * - **zh-CN**: 检索资金信息
   */
  export const cmd_fund: string;
  /**
   * - 🚩 **en**: Get a value from the npm configuration
   * - **zh-CN**: 从 npm 配置中获取值
   */
  export const cmd_get: string;
  /**
   * - 🚩 **en**: Get help on npm
   * - **zh-CN**: 获取 npm 帮助
   */
  export const cmd_help: string;
  /**
   * - 🚩 **en**: Search npm help documentation
   * - **zh-CN**: 搜索 npm 帮助文档
   */
  export const cmd_helpSearch: string;
  /**
   * - 🚩 **en**: Manage registry hooks
   * - **zh-CN**: 管理注册表钩子
   */
  export const cmd_hook: string;
  /**
   * - 🚩 **en**: Add a hook
   * - **zh-CN**: 添加钩子
   */
  export const cmd_hook_add: string;
  /**
   * - 🚩 **en**: List hooks
   * - **zh-CN**: 列出钩子
   */
  export const cmd_hook_ls: string;
  /**
   * - 🚩 **en**: Remove a hook
   * - **zh-CN**: 删除钩子
   */
  export const cmd_hook_rm: string;
  /**
   * - 🚩 **en**: Update a hook
   * - **zh-CN**: 更新钩子
   */
  export const cmd_hook_update: string;
  /**
   * - 🚩 **en**: Create a package.json file
   * - **zh-CN**: 创建 package.json 文件
   */
  export const cmd_init: string;
  /**
   * - 🚩 **en**: Install a package
   * - **zh-CN**: 安装包
   */
  export const cmd_install: string;
  /**
   * - 🚩 **en**: Install a project with a clean slate and run tests
   * - **zh-CN**: 纯净安装项目并运行测试
   */
  export const cmd_installCiTest: string;
  /**
   * - 🚩 **en**: Install package(s) and run tests
   * - **zh-CN**: 安装包并运行测试
   */
  export const cmd_installTest: string;
  /**
   * - 🚩 **en**: Symlink a package folder
   * - **zh-CN**: 符号链接包文件夹
   */
  export const cmd_link: string;
  /**
   * - 🚩 **en**: List installed packages
   * - **zh-CN**: 列出已安装的包
   */
  export const cmd_ll: string;
  /**
   * - 🚩 **en**: Login to a registry user account
   * - **zh-CN**: 登录注册表用户帐户
   */
  export const cmd_login: string;
  /**
   * - 🚩 **en**: Log out of the registry
   * - **zh-CN**: 退出登录
   */
  export const cmd_logout: string;
  /**
   * - 🚩 **en**: List installed packages
   * - **zh-CN**: 列出已安装的包
   */
  export const cmd_ls: string;
  /**
   * - 🚩 **en**: Node package manager
   * - **zh-CN**: Node 包管理器
   */
  export const cmd_npm: string;
  /**
   * - 🚩 **en**: Run a command from a local or remote npm package
   * - **zh-CN**: 从本地或远程 npm 包运行命令
   */
  export const cmd_npx: string;
  /**
   * - 🚩 **en**: Manage orgs
   * - **zh-CN**: 管理组织
   */
  export const cmd_org: string;
  /**
   * - 🚩 **en**: List members
   * - **zh-CN**: 列出成员
   */
  export const cmd_org_ls: string;
  /**
   * - 🚩 **en**: Remove member
   * - **zh-CN**: 删除成员
   */
  export const cmd_org_rm: string;
  /**
   * - 🚩 **en**: Set org membership
   * - **zh-CN**: 设置组织成员
   */
  export const cmd_org_set: string;
  /**
   * - 🚩 **en**: Check for outdated packages
   * - **zh-CN**: 检查过时的包
   */
  export const cmd_outdated: string;
  /**
   * - 🚩 **en**: Manage package owners
   * - **zh-CN**: 管理包的所有者
   */
  export const cmd_owner: string;
  /**
   * - 🚩 **en**: Add owner
   * - **zh-CN**: 添加所有者
   */
  export const cmd_owner_add: string;
  /**
   * - 🚩 **en**: List owners
   * - **zh-CN**: 列出所有者
   */
  export const cmd_owner_ls: string;
  /**
   * - 🚩 **en**: Remove owner
   * - **zh-CN**: 删除所有者
   */
  export const cmd_owner_rm: string;
  /**
   * - 🚩 **en**: Create a tarball from a package
   * - **zh-CN**: 从包创建 tar 包
   */
  export const cmd_pack: string;
  /**
   * - 🚩 **en**: Ping npm registry
   * - **zh-CN**: Ping npm 注册表
   */
  export const cmd_ping: string;
  /**
   * - 🚩 **en**: Manages your package.json
   * - **zh-CN**: 管理你的 package_json
   */
  export const cmd_pkg: string;
  /**
   * - 🚩 **en**: Delete keys
   * - **zh-CN**: 删除键
   */
  export const cmd_pkg_delete: string;
  /**
   * - 🚩 **en**: Fix package.json
   * - **zh-CN**: 修复 package_json
   */
  export const cmd_pkg_fix: string;
  /**
   * - 🚩 **en**: Get package.json keys
   * - **zh-CN**: 获取 package_json 键
   */
  export const cmd_pkg_get: string;
  /**
   * - 🚩 **en**: Set package.json values
   * - **zh-CN**: 设置 package_json 值
   */
  export const cmd_pkg_set: string;
  /**
   * - 🚩 **en**: Display prefix
   * - **zh-CN**: 显示前缀
   */
  export const cmd_prefix: string;
  /**
   * - 🚩 **en**: Change settings on your registry profile
   * - **zh-CN**: 更改注册表个人资料设置
   */
  export const cmd_profile: string;
  /**
   * - 🚩 **en**: Disable 2FA
   * - **zh-CN**: 禁用双重身份验证
   */
  export const cmd_profile_disable2fa: string;
  /**
   * - 🚩 **en**: Enable 2FA
   * - **zh-CN**: 启用双重身份验证
   */
  export const cmd_profile_enable2fa: string;
  /**
   * - 🚩 **en**: Get profile key
   * - **zh-CN**: 获取个人资料键
   */
  export const cmd_profile_get: string;
  /**
   * - 🚩 **en**: Set profile key
   * - **zh-CN**: 设置个人资料键
   */
  export const cmd_profile_set: string;
  /**
   * - 🚩 **en**: Remove extraneous packages
   * - **zh-CN**: 删除多余的包
   */
  export const cmd_prune: string;
  /**
   * - 🚩 **en**: Publish a package
   * - **zh-CN**: 发布包
   */
  export const cmd_publish: string;
  /**
   * - 🚩 **en**: Retrieve a filtered list of packages
   * - **zh-CN**: 检索过滤后的包列表
   */
  export const cmd_query: string;
  /**
   * - 🚩 **en**: Rebuild a package
   * - **zh-CN**: 重新编译包
   */
  export const cmd_rebuild: string;
  /**
   * - 🚩 **en**: Open package repository page in the browser
   * - **zh-CN**: 在浏览器中打开包的仓库页面
   */
  export const cmd_repo: string;
  /**
   * - 🚩 **en**: Restart a package
   * - **zh-CN**: 重启包
   */
  export const cmd_restart: string;
  /**
   * - 🚩 **en**: Display npm root
   * - **zh-CN**: 显示 npm root
   */
  export const cmd_root: string;
  /**
   * - 🚩 **en**: Run arbitrary package scripts
   * - **zh-CN**: 运行任意包脚本
   */
  export const cmd_run: string;
  /**
   * - 🚩 **en**: Generate a Software Bill of Materials (SBOM)
   * - **zh-CN**: 生成软件物料清单 (SBOM)
   */
  export const cmd_sbom: string;
  /**
   * - 🚩 **en**: Search for packages
   * - **zh-CN**: 搜索包
   */
  export const cmd_search: string;
  /**
   * - 🚩 **en**: Set a value in the npm configuration
   * - **zh-CN**: 设置 npm 配置中的值
   */
  export const cmd_set: string;
  /**
   * - 🚩 **en**: Lock down dependency versions for publication
   * - **zh-CN**: 锁定依赖版本以进行发布
   */
  export const cmd_shrinkwrap: string;
  /**
   * - 🚩 **en**: Mark your favorite packages
   * - **zh-CN**: 标记你喜欢的包
   */
  export const cmd_star: string;
  /**
   * - 🚩 **en**: View packages marked as favorites
   * - **zh-CN**: 查看标记为收藏的包
   */
  export const cmd_stars: string;
  /**
   * - 🚩 **en**: Start a package
   * - **zh-CN**: 启动包
   */
  export const cmd_start: string;
  /**
   * - 🚩 **en**: Stop a package
   * - **zh-CN**: 停止包
   */
  export const cmd_stop: string;
  /**
   * - 🚩 **en**: Manage organization teams and team memberships
   * - **zh-CN**: 管理组织团队和团队成员
   */
  export const cmd_team: string;
  /**
   * - 🚩 **en**: Add member
   * - **zh-CN**: 添加成员
   */
  export const cmd_team_add: string;
  /**
   * - 🚩 **en**: Create team
   * - **zh-CN**: 创建团队
   */
  export const cmd_team_create: string;
  /**
   * - 🚩 **en**: Destroy team
   * - **zh-CN**: 解散团队
   */
  export const cmd_team_destroy: string;
  /**
   * - 🚩 **en**: List teams
   * - **zh-CN**: 列出团队
   */
  export const cmd_team_ls: string;
  /**
   * - 🚩 **en**: Remove member
   * - **zh-CN**: 删除成员
   */
  export const cmd_team_rm: string;
  /**
   * - 🚩 **en**: Test a package
   * - **zh-CN**: 测试包
   */
  export const cmd_test: string;
  /**
   * - 🚩 **en**: Manage your authentication tokens
   * - **zh-CN**: 管理你的身份验证令牌
   */
  export const cmd_token: string;
  /**
   * - 🚩 **en**: Create token
   * - **zh-CN**: 创建令牌
   */
  export const cmd_token_create: string;
  /**
   * - 🚩 **en**: List tokens
   * - **zh-CN**: 列出令牌
   */
  export const cmd_token_list: string;
  /**
   * - 🚩 **en**: Revoke token
   * - **zh-CN**: 撤销令牌
   */
  export const cmd_token_revoke: string;
  /**
   * - 🚩 **en**: Undeprecate a version of a package
   * - **zh-CN**: 取消弃用包的某个版本
   */
  export const cmd_undeprecate: string;
  /**
   * - 🚩 **en**: Remove a package
   * - **zh-CN**: 删除包
   */
  export const cmd_uninstall: string;
  /**
   * - 🚩 **en**: Remove a package from the registry
   * - **zh-CN**: 从注册表中删除包
   */
  export const cmd_unpublish: string;
  /**
   * - 🚩 **en**: Remove an item from your favorite packages
   * - **zh-CN**: 取消收藏
   */
  export const cmd_unstar: string;
  /**
   * - 🚩 **en**: Update packages
   * - **zh-CN**: 更新包
   */
  export const cmd_update: string;
  /**
   * - 🚩 **en**: Bump a package version
   * - **zh-CN**: 提升包版本号
   */
  export const cmd_version: string;
  /**
   * - 🚩 **en**: View registry info
   * - **zh-CN**: 查看注册表信息
   */
  export const cmd_view: string;
  /**
   * - 🚩 **en**: Display npm username
   * - **zh-CN**: 显示 npm 用户名
   */
  export const cmd_whoami: string;
  /**
   * - 🚩 **en**: Access level (restricted, public)
   * - **zh-CN**: 访问级别 (restricted, public)
   */
  export const opt_access: string;
  /**
   * - 🚩 **en**: Show all
   * - **zh-CN**: 显示全部
   */
  export const opt_all: string;
  /**
   * - 🚩 **en**: Allow same version
   * - **zh-CN**: 允许相同版本
   */
  export const opt_allowSameVersion: string;
  /**
   * - 🚩 **en**: Audit level
   * - **zh-CN**: 审计级别
   */
  export const opt_auditLevel: string;
  /**
   * - 🚩 **en**: Authentication type (legacy, web)
   * - **zh-CN**: 认证类型 (legacy, web)
   */
  export const opt_authType: string;
  /**
   * - 🚩 **en**: Install only versions before date
   * - **zh-CN**: 仅安装该日期之前的版本
   */
  export const opt_before: string;
  /**
   * - 🚩 **en**: Browser to open
   * - **zh-CN**: 打开的浏览器
   */
  export const opt_browser: string;
  /**
   * - 🚩 **en**: Cache path
   * - **zh-CN**: 缓存路径
   */
  export const opt_cachePath: string;
  /**
   * - 🚩 **en**: Run command as string
   * - **zh-CN**: 以字符串形式运行命令
   */
  export const opt_call: string;
  /**
   * - 🚩 **en**: CIDR list
   * - **zh-CN**: CIDR 列表
   */
  export const opt_cidr: string;
  /**
   * - 🚩 **en**: Color output
   * - **zh-CN**: 彩色输出
   */
  export const opt_color: string;
  /**
   * - 🚩 **en**: CPU filter
   * - **zh-CN**: CPU 过滤器
   */
  export const opt_cpu: string;
  /**
   * - 🚩 **en**: Depth
   * - **zh-CN**: 深度
   */
  export const opt_depth: string;
  /**
   * - 🚩 **en**: Diff against package spec
   * - **zh-CN**: 与指定包规范对比
   */
  export const opt_diff: string;
  /**
   * - 🚩 **en**: Destination prefix
   * - **zh-CN**: 目标前缀
   */
  export const opt_diffDstPrefix: string;
  /**
   * - 🚩 **en**: Ignore whitespace
   * - **zh-CN**: 忽略空白
   */
  export const opt_diffIgnoreAllSpace: string;
  /**
   * - 🚩 **en**: Only show filenames
   * - **zh-CN**: 仅显示文件名
   */
  export const opt_diffNameOnly: string;
  /**
   * - 🚩 **en**: No prefix
   * - **zh-CN**: 无前缀
   */
  export const opt_diffNoPrefix: string;
  /**
   * - 🚩 **en**: Source prefix
   * - **zh-CN**: 源前缀
   */
  export const opt_diffSrcPrefix: string;
  /**
   * - 🚩 **en**: Text diff
   * - **zh-CN**: 文本差异
   */
  export const opt_diffText: string;
  /**
   * - 🚩 **en**: Unified diff lines
   * - **zh-CN**: 统一差异行数
   */
  export const opt_diffUnified: string;
  /**
   * - 🚩 **en**: Dry run
   * - **zh-CN**: 预演
   */
  export const opt_dryRun: string;
  /**
   * - 🚩 **en**: Editor
   * - **zh-CN**: 编辑器
   */
  export const opt_editor: string;
  /**
   * - 🚩 **en**: Expected result count
   * - **zh-CN**: 期望的结果数量
   */
  export const opt_expectResults: string;
  /**
   * - 🚩 **en**: Force
   * - **zh-CN**: 强制执行
   */
  export const opt_force: string;
  /**
   * - 🚩 **en**: Run scripts in foreground
   * - **zh-CN**: 在前台运行脚本
   */
  export const opt_foregroundScripts: string;
  /**
   * - 🚩 **en**: Global mode
   * - **zh-CN**: 全局模式
   */
  export const opt_global: string;
  /**
   * - 🚩 **en**: Global style layout
   * - **zh-CN**: 全局风格布局
   */
  export const opt_globalStyle: string;
  /**
   * - 🚩 **en**: Skip if script missing
   * - **zh-CN**: 若脚本不存在则跳过
   */
  export const opt_ifPresent: string;
  /**
   * - 🚩 **en**: Ignore scripts
   * - **zh-CN**: 忽略脚本
   */
  export const opt_ignoreScripts: string;
  /**
   * - 🚩 **en**: Include dependency types (prod, dev, optional, peer)
   * - **zh-CN**: 包含依赖类型 (prod, dev, optional, peer)
   */
  export const opt_include: string;
  /**
   * - 🚩 **en**: Include workspace root
   * - **zh-CN**: 包含工作区根
   */
  export const opt_includeWorkspaceRoot: string;
  /**
   * - 🚩 **en**: Author name
   * - **zh-CN**: 作者名称
   */
  export const opt_initAuthorName: string;
  /**
   * - 🚩 **en**: Author URL
   * - **zh-CN**: 作者 URL
   */
  export const opt_initAuthorUrl: string;
  /**
   * - 🚩 **en**: License
   * - **zh-CN**: 许可证
   */
  export const opt_initLicense: string;
  /**
   * - 🚩 **en**: Module
   * - **zh-CN**: 模块
   */
  export const opt_initModule: string;
  /**
   * - 🚩 **en**: Private
   * - **zh-CN**: 私有
   */
  export const opt_initPrivate: string;
  /**
   * - 🚩 **en**: Type
   * - **zh-CN**: 类型
   */
  export const opt_initType: string;
  /**
   * - 🚩 **en**: Version
   * - **zh-CN**: 版本
   */
  export const opt_initVersion: string;
  /**
   * - 🚩 **en**: Install links
   * - **zh-CN**: 安装链接
   */
  export const opt_installLinks: string;
  /**
   * - 🚩 **en**: Install strategy
   * - **zh-CN**: 安装策略
   */
  export const opt_installStrategy: string;
  /**
   * - 🚩 **en**: Output as JSON
   * - **zh-CN**: 以 JSON 格式输出
   */
  export const opt_json: string;
  /**
   * - 🚩 **en**: Legacy bundling
   * - **zh-CN**: 传统捆绑
   */
  export const opt_legacyBundling: string;
  /**
   * - 🚩 **en**: libc filter
   * - **zh-CN**: libc 过滤器
   */
  export const opt_libc: string;
  /**
   * - 🚩 **en**: Show linked packages
   * - **zh-CN**: 显示链接的包
   */
  export const opt_link: string;
  /**
   * - 🚩 **en**: Config location (global, user, project)
   * - **zh-CN**: 配置位置 (global, user, project)
   */
  export const opt_location: string;
  /**
   * - 🚩 **en**: Long output
   * - **zh-CN**: 长输出
   */
  export const opt_long: string;
  /**
   * - 🚩 **en**: Skip audit
   * - **zh-CN**: 跳过审计
   */
  export const opt_noAudit: string;
  /**
   * - 🚩 **en**: Skip bin links
   * - **zh-CN**: 跳过 bin 链接
   */
  export const opt_noBinLinks: string;
  /**
   * - 🚩 **en**: Skip commit hooks
   * - **zh-CN**: 跳过提交钩子
   */
  export const opt_noCommitHooks: string;
  /**
   * - 🚩 **en**: Omit descriptions
   * - **zh-CN**: 省略描述
   */
  export const opt_noDescription: string;
  /**
   * - 🚩 **en**: Skip funding messages
   * - **zh-CN**: 跳过资金信息
   */
  export const opt_noFund: string;
  /**
   * - 🚩 **en**: Skip git tag
   * - **zh-CN**: 跳过 Git 标签
   */
  export const opt_noGitTagVersion: string;
  /**
   * - 🚩 **en**: Ignore package-lock
   * - **zh-CN**: 忽略 package-lock
   */
  export const opt_noPackageLock: string;
  /**
   * - 🚩 **en**: Disable unicode
   * - **zh-CN**: 禁用 Unicode
   */
  export const opt_noUnicode: string;
  /**
   * - 🚩 **en**: Skip workspace update
   * - **zh-CN**: 跳过工作区更新
   */
  export const opt_noWorkspacesUpdate: string;
  /**
   * - 🚩 **en**: Offline mode
   * - **zh-CN**: 离线模式
   */
  export const opt_offline: string;
  /**
   * - 🚩 **en**: Omit dependency types (dev, optional, peer)
   * - **zh-CN**: 排除依赖类型 (dev, optional, peer)
   */
  export const opt_omit: string;
  /**
   * - 🚩 **en**: OS filter
   * - **zh-CN**: 操作系统过滤器
   */
  export const opt_os: string;
  /**
   * - 🚩 **en**: One-time password
   * - **zh-CN**: 一次性密码
   */
  export const opt_otp: string;
  /**
   * - 🚩 **en**: Pack destination
   * - **zh-CN**: 打包目标
   */
  export const opt_packDestination: string;
  /**
   * - 🚩 **en**: Package spec
   * - **zh-CN**: 包规范
   */
  export const opt_packageExec: string;
  /**
   * - 🚩 **en**: Only update package-lock
   * - **zh-CN**: 仅更新 package-lock
   */
  export const opt_packageLockOnly: string;
  /**
   * - 🚩 **en**: Parseable output
   * - **zh-CN**: 可解析输出
   */
  export const opt_parseable: string;
  /**
   * - 🚩 **en**: Prefer deduplication
   * - **zh-CN**: 优先去重
   */
  export const opt_preferDedupe: string;
  /**
   * - 🚩 **en**: Prefer offline
   * - **zh-CN**: 优先离线
   */
  export const opt_preferOffline: string;
  /**
   * - 🚩 **en**: Prefer online
   * - **zh-CN**: 优先在线
   */
  export const opt_preferOnline: string;
  /**
   * - 🚩 **en**: Prerelease identifier
   * - **zh-CN**: 预发布标识符
   */
  export const opt_preid: string;
  /**
   * - 🚩 **en**: Provenance file
   * - **zh-CN**: 来源文件
   */
  export const opt_provenance: string;
  /**
   * - 🚩 **en**: Read-only token
   * - **zh-CN**: 只读令牌
   */
  export const opt_readOnly: string;
  /**
   * - 🚩 **en**: Registry URL
   * - **zh-CN**: 注册表 URL
   */
  export const opt_registry: string;
  /**
   * - 🚩 **en**: Save exact version
   * - **zh-CN**: 保存精确版本
   */
  export const opt_saveExact: string;
  /**
   * - 🚩 **en**: Save mode
   * - **zh-CN**: 保存模式
   */
  export const opt_saveMode: string;
  /**
   * - 🚩 **en**: SBOM format
   * - **zh-CN**: SBOM 格式
   */
  export const opt_sbomFormat: string;
  /**
   * - 🚩 **en**: SBOM type
   * - **zh-CN**: SBOM 类型
   */
  export const opt_sbomType: string;
  /**
   * - 🚩 **en**: Scope
   * - **zh-CN**: 作用域
   */
  export const opt_scope: string;
  /**
   * - 🚩 **en**: Script shell
   * - **zh-CN**: 脚本 Shell
   */
  export const opt_scriptShell: string;
  /**
   * - 🚩 **en**: Exclude search
   * - **zh-CN**: 排除搜索
   */
  export const opt_searchExclude: string;
  /**
   * - 🚩 **en**: Limit results
   * - **zh-CN**: 限制结果数量
   */
  export const opt_searchLimit: string;
  /**
   * - 🚩 **en**: Search options
   * - **zh-CN**: 搜索选项
   */
  export const opt_searchOpts: string;
  /**
   * - 🚩 **en**: Shell
   * - **zh-CN**: Shell
   */
  export const opt_shell: string;
  /**
   * - 🚩 **en**: Sign git tag
   * - **zh-CN**: 签名 Git 标签
   */
  export const opt_signGitTag: string;
  /**
   * - 🚩 **en**: Fail on peer dependency conflicts
   * - **zh-CN**: 对等依赖冲突时报错
   */
  export const opt_strictPeerDeps: string;
  /**
   * - 🚩 **en**: Tag
   * - **zh-CN**: 标签
   */
  export const opt_tag: string;
  /**
   * - 🚩 **en**: Viewer program
   * - **zh-CN**: 查看器程序
   */
  export const opt_viewer: string;
  /**
   * - 🚩 **en**: Funding source number
   * - **zh-CN**: 资金来源编号
   */
  export const opt_which: string;
  /**
   * - 🚩 **en**: Workspace name
   * - **zh-CN**: 工作区名称
   */
  export const opt_workspace: string;
  /**
   * - 🚩 **en**: Enable all workspaces
   * - **zh-CN**: 启用所有工作区
   */
  export const opt_workspaces: string;
  /**
   * - 🚩 **en**: Skip prompts
   * - **zh-CN**: 跳过提示
   */
  export const opt_yes: string;
  /**
   * - 🚩 **en**: global package
   * - **zh-CN**: 全局包
   */
  export const suggestion_global: string;
  /**
   * - 🚩 **en**: installed package
   * - **zh-CN**: 已安装的包
   */
  export const suggestion_installed: string;
  /**
   * - 🚩 **en**: package.json field
   * - **zh-CN**: package.json 字段
   */
  export const suggestion_packageJsonField: string;
  /**
   * - 🚩 **en**: npm script
   * - **zh-CN**: npm 脚本
   */
  export const suggestion_script: string;
  /**
   * - 🚩 **en**: workspace
   * - **zh-CN**: 工作区
   */
  export const suggestion_workspace: string;
}

declare module "virtual:i18n/nub" {
  /**
   * - 🚩 **en**: Delete metadata cache for specified package(s)
   * - **zh-CN**: 删除指定包的元数据缓存
   */
  export const cache_delete: string;
  /**
   * - 🚩 **en**: List available packages in the metadata cache
   * - **zh-CN**: 列出元数据缓存中的可用包
   */
  export const cache_list: string;
  /**
   * - 🚩 **en**: List configured registries
   * - **zh-CN**: 列出已配置的注册表
   */
  export const cache_list_registries: string;
  /**
   * - 🚩 **en**: Remove stale extracted primer files
   * - **zh-CN**: 移除过期的元数据缓存文件
   */
  export const cache_prune: string;
  /**
   * - 🚩 **en**: View cached metadata for a single package
   * - **zh-CN**: 查看单个包的缓存元数据
   */
  export const cache_view: string;
  /**
   * - 🚩 **en**: Add dependencies
   * - **zh-CN**: 添加依赖
   */
  export const cmd_add: string;
  /**
   * - 🚩 **en**: Manage build-script approval
   * - **zh-CN**: 管理构建脚本审批
   */
  export const cmd_approve_builds: string;
  /**
   * - 🚩 **en**: Audit installed packages for security issues
   * - **zh-CN**: 审计已安装包的安全漏洞
   */
  export const cmd_audit: string;
  /**
   * - 🚩 **en**: Print bin directory path
   * - **zh-CN**: 打印 bin 目录路径
   */
  export const cmd_bin: string;
  /**
   * - 🚩 **en**: Manage metadata cache
   * - **zh-CN**: 管理元数据缓存
   */
  export const cmd_cache: string;
  /**
   * - 🚩 **en**: Check for dependency issues
   * - **zh-CN**: 检查依赖问题
   */
  export const cmd_check: string;
  /**
   * - 🚩 **en**: Clean, strict install from the lockfile
   * - **zh-CN**: 从 lockfile 执行干净、严格的安装
   */
  export const cmd_ci: string;
  /**
   * - 🚩 **en**: Manage configuration
   * - **zh-CN**: 管理配置
   */
  export const cmd_config: string;
  /**
   * - 🚩 **en**: Remove duplicated packages
   * - **zh-CN**: 移除重复的包
   */
  export const cmd_dedupe: string;
  /**
   * - 🚩 **en**: Manage dist-tags for a package
   * - **zh-CN**: 管理包的 dist-tag
   */
  export const cmd_dist_tag: string;
  /**
   * - 🚩 **en**: Fetch-and-run a package's bin
   * - **zh-CN**: 获取并运行一个包的二进制文件
   */
  export const cmd_dlx: string;
  /**
   * - 🚩 **en**: Run a node_modules/.bin binary
   * - **zh-CN**: 运行 node_modules/.bin 中的二进制文件
   */
  export const cmd_exec: string;
  /**
   * - 🚩 **en**: Print the effective value of a config key
   * - **zh-CN**: 打印配置键的值
   */
  export const cmd_get: string;
  /**
   * - 🚩 **en**: Manage ignored builds
   * - **zh-CN**: 管理已忽略的构建
   */
  export const cmd_ignored_builds: string;
  /**
   * - 🚩 **en**: Generate a lockfile from another PM's lockfile
   * - **zh-CN**: 从另一个包管理器的 lockfile 生成锁文件
   */
  export const cmd_import: string;
  /**
   * - 🚩 **en**: Scaffold a new TypeScript-first project
   * - **zh-CN**: 搭建一个新的 TypeScript 项目
   */
  export const cmd_init: string;
  /**
   * - 🚩 **en**: Install dependencies from package.json + lockfile
   * - **zh-CN**: 从 package.json + lockfile 安装依赖
   */
  export const cmd_install: string;
  /**
   * - 🚩 **en**: Check licenses of installed packages
   * - **zh-CN**: 检查已安装包的许可证
   */
  export const cmd_licenses: string;
  /**
   * - 🚩 **en**: Link a local package
   * - **zh-CN**: 链接本地包
   */
  export const cmd_link: string;
  /**
   * - 🚩 **en**: List installed packages
   * - **zh-CN**: 列出已安装的包
   */
  export const cmd_list: string;
  /**
   * - 🚩 **en**: Login to the registry
   * - **zh-CN**: 登录到注册表
   */
  export const cmd_login: string;
  /**
   * - 🚩 **en**: Logout from the registry
   * - **zh-CN**: 从注册表登出
   */
  export const cmd_logout: string;
  /**
   * - 🚩 **en**: Manage Node versions
   * - **zh-CN**: 管理 Node 版本
   */
  export const cmd_node: string;
  /**
   * - 🚩 **en**: Check outdated packages
   * - **zh-CN**: 检查过时的包
   */
  export const cmd_outdated: string;
  /**
   * - 🚩 **en**: Manage package maintainers
   * - **zh-CN**: 管理包维护者
   */
  export const cmd_owner: string;
  /**
   * - 🚩 **en**: Create a package tarball
   * - **zh-CN**: 创建包 tarball
   */
  export const cmd_pack: string;
  /**
   * - 🚩 **en**: Author a package patch
   * - **zh-CN**: 编写一个包补丁
   */
  export const cmd_patch: string;
  /**
   * - 🚩 **en**: Commit a package patch
   * - **zh-CN**: 提交一个包补丁
   */
  export const cmd_patch_commit: string;
  /**
   * - 🚩 **en**: Remove a package patch
   * - **zh-CN**: 移除包补丁
   */
  export const cmd_patch_remove: string;
  /**
   * - 🚩 **en**: Manage the project's package manager
   * - **zh-CN**: 管理项目的包管理器
   */
  export const cmd_pm: string;
  /**
   * - 🚩 **en**: Remove extraneous packages
   * - **zh-CN**: 移除无关的包
   */
  export const cmd_prune: string;
  /**
   * - 🚩 **en**: Publish a package to the registry
   * - **zh-CN**: 发布包到注册表
   */
  export const cmd_publish: string;
  /**
   * - 🚩 **en**: Query the dependency graph
   * - **zh-CN**: 使用选择器查询依赖图
   */
  export const cmd_query: string;
  /**
   * - 🚩 **en**: Rebuild native modules
   * - **zh-CN**: 重新构建原生模块
   */
  export const cmd_rebuild: string;
  /**
   * - 🚩 **en**: Remove dependencies
   * - **zh-CN**: 移除依赖
   */
  export const cmd_remove: string;
  /**
   * - 🚩 **en**: Print project root directory
   * - **zh-CN**: 打印项目根目录路径
   */
  export const cmd_root: string;
  /**
   * - 🚩 **en**: Run a package.json script (workspace-aware)
   * - **zh-CN**: 运行 package.json 脚本（工作区感知）
   */
  export const cmd_run: string;
  /**
   * - 🚩 **en**: Generate software bill of materials
   * - **zh-CN**: 生成软件物料清单
   */
  export const cmd_sbom: string;
  /**
   * - 🚩 **en**: Search registry for packages
   * - **zh-CN**: 在注册表中搜索包
   */
  export const cmd_search: string;
  /**
   * - 🚩 **en**: Write a key=value pair to config
   * - **zh-CN**: 写入配置键值对
   */
  export const cmd_set: string;
  /**
   * - 🚩 **en**: Manage the content-addressable store
   * - **zh-CN**: 管理内容寻址存储
   */
  export const cmd_store: string;
  /**
   * - 🚩 **en**: Manage auth tokens
   * - **zh-CN**: 管理认证令牌
   */
  export const cmd_token: string;
  /**
   * - 🚩 **en**: Unlink a local package
   * - **zh-CN**: 取消链接本地包
   */
  export const cmd_unlink: string;
  /**
   * - 🚩 **en**: Update within range
   * - **zh-CN**: 在范围内更新依赖
   */
  export const cmd_update: string;
  /**
   * - 🚩 **en**: Upgrade nub itself
   * - **zh-CN**: 升级 nub 自身
   */
  export const cmd_upgrade: string;
  /**
   * - 🚩 **en**: Manage package version
   * - **zh-CN**: 管理包版本
   */
  export const cmd_version: string;
  /**
   * - 🚩 **en**: View package metadata from registry
   * - **zh-CN**: 查看注册表中的包元数据
   */
  export const cmd_view: string;
  /**
   * - 🚩 **en**: Run a file in watch mode
   * - **zh-CN**: 以监视模式运行文件
   */
  export const cmd_watch: string;
  /**
   * - 🚩 **en**: Print the current npm username
   * - **zh-CN**: 打印当前 npm 用户名
   */
  export const cmd_whoami: string;
  /**
   * - 🚩 **en**: Explain why a package is installed
   * - **zh-CN**: 解释为何安装了某个包
   */
  export const cmd_why: string;
  /**
   * - 🚩 **en**: Delete a key from nub config
   * - **zh-CN**: 删除配置键
   */
  export const config_delete: string;
  /**
   * - 🚩 **en**: Explain a known setting
   * - **zh-CN**: 解释已知配置项
   */
  export const config_explain: string;
  /**
   * - 🚩 **en**: Search known settings by name, source key, or description
   * - **zh-CN**: 搜索配置项
   */
  export const config_find: string;
  /**
   * - 🚩 **en**: Print the effective value of a key
   * - **zh-CN**: 打印配置键的值
   */
  export const config_get: string;
  /**
   * - 🚩 **en**: Print every key/value from nub config
   * - **zh-CN**: 列出所有配置
   */
  export const config_list: string;
  /**
   * - 🚩 **en**: Write a key=value pair to nub config
   * - **zh-CN**: 写入配置键值对
   */
  export const config_set: string;
  /**
   * - 🚩 **en**: Browse known settings in an interactive terminal UI
   * - **zh-CN**: 交互式浏览配置
   */
  export const config_tui: string;
  /**
   * - 🚩 **en**: nub — the all-in-one Node.js toolkit
   * - **zh-CN**: nub — Node.js 全功能工具包
   */
  export const description: string;
  /**
   * - 🚩 **en**: Add or update a dist-tag on a package
   * - **zh-CN**: 添加或更新 dist-tag
   */
  export const dtag_add: string;
  /**
   * - 🚩 **en**: List every dist-tag for a package
   * - **zh-CN**: 列出所有 dist-tag
   */
  export const dtag_ls: string;
  /**
   * - 🚩 **en**: Remove a dist-tag from a package
   * - **zh-CN**: 移除 dist-tag
   */
  export const dtag_rm: string;
  /**
   * - 🚩 **en**: Provision version(s) into nub's cache
   * - **zh-CN**: 安装指定版本的 Node
   */
  export const node_install: string;
  /**
   * - 🚩 **en**: List versions in nub's cache
   * - **zh-CN**: 列出缓存的 Node 版本
   */
  export const node_ls: string;
  /**
   * - 🚩 **en**: Write the project's Node pin
   * - **zh-CN**: 写入项目的 Node 版本锁定
   */
  export const node_pin: string;
  /**
   * - 🚩 **en**: Make `node` on PATH resolve through nub
   * - **zh-CN**: 创建 node 的 shim
   */
  export const node_shim: string;
  /**
   * - 🚩 **en**: Remove a version from nub's cache
   * - **zh-CN**: 移除缓存的 Node 版本
   */
  export const node_uninstall: string;
  /**
   * - 🚩 **en**: Remove the `node` shim and its PATH block
   * - **zh-CN**: 移除 node 的 shim
   */
  export const node_unshim: string;
  /**
   * - 🚩 **en**: Print the resolved Node binary path
   * - **zh-CN**: 打印已解析的 Node 二进制路径
   */
  export const node_which: string;
  /**
   * - 🚩 **en**: Activate inspector and break at start
   * - **zh-CN**: 激活调试器并在启动时中断
   */
  export const opt_activate_inspector_and_break_at_start: string;
  /**
   * - 🚩 **en**: Activate the inspector
   * - **zh-CN**: 激活调试器
   */
  export const opt_activate_the_inspector: string;
  /**
   * - 🚩 **en**: Add as dev dependency
   * - **zh-CN**: 作为开发依赖添加
   */
  export const opt_add_as_dev_dependency: string;
  /**
   * - 🚩 **en**: Add as optional dependency
   * - **zh-CN**: 作为可选依赖添加
   */
  export const opt_add_as_optional_dependency: string;
  /**
   * - 🚩 **en**: Add as peer dependency
   * - **zh-CN**: 作为 peer 依赖添加
   */
  export const opt_add_as_peer_dependency: string;
  /**
   * - 🚩 **en**: Add to workspace root
   * - **zh-CN**: 添加到工作区根包
   */
  export const opt_add_to_workspace_root: string;
  /**
   * - 🚩 **en**: Allow setting to current value
   * - **zh-CN**: 允许设置为当前值
   */
  export const opt_allow_setting_to_current_value: string;
  /**
   * - 🚩 **en**: Also remove optionalDependencies
   * - **zh-CN**: 同时移除 optionalDependencies
   */
  export const opt_also_remove_optionaldependencies: string;
  /**
   * - 🚩 **en**: Authentication flow: legacy or web
   * - **zh-CN**: 认证方式：legacy 或 web
   */
  export const opt_authentication_flow_legacy_or_web: string;
  /**
   * - 🚩 **en**: Buffer output and flush on completion
   * - **zh-CN**: 缓冲输出并在完成时刷新
   */
  export const opt_buffer_output_and_flush_on_completion: string;
  /**
   * - 🚩 **en**: Change to directory before running
   * - **zh-CN**: 运行前切换目录
   */
  export const opt_change_to_directory_before_running: string;
  /**
   * - 🚩 **en**: Check whether dedupe would change lockfile
   * - **zh-CN**: 检查 dedupe 是否会修改 lockfile
   */
  export const opt_check_whether_dedupe_would_change_lockfile: string;
  /**
   * - 🚩 **en**: Commit message template
   * - **zh-CN**: 提交消息模板
   */
  export const opt_commit_message_template: string;
  /**
   * - 🚩 **en**: Deny lifecycle scripts
   * - **zh-CN**: 拒绝生命周期脚本
   */
  export const opt_deny_lifecycle_scripts: string;
  /**
   * - 🚩 **en**: Directory to extract the writable copy into
   * - **zh-CN**: 可写副本的提取目录
   */
  export const opt_directory_to_extract_the_writable_copy_into: string;
  /**
   * - 🚩 **en**: Directory to write tarball into
   * - **zh-CN**: tarball 文件的输出目录
   */
  export const opt_directory_to_write_tarball_into: string;
  /**
   * - 🚩 **en**: Don't create git commit or tag
   * - **zh-CN**: 不创建 git 提交或标签
   */
  export const opt_dont_create_git_commit_or_tag: string;
  /**
   * - 🚩 **en**: Don't stop on first failure
   * - **zh-CN**: 遇到失败时不停止运行
   */
  export const opt_dont_stop_on_first_failure: string;
  /**
   * - 🚩 **en**: Drop advisories matching ID
   * - **zh-CN**: 忽略匹配 ID 的公告
   */
  export const opt_drop_advisories_matching_id: string;
  /**
   * - 🚩 **en**: Drop advisories with no non-vulnerable upgrade
   * - **zh-CN**: 忽略没有非易受攻击版本升级的公告
   */
  export const opt_drop_advisories_with_no_nonvulnerable_upgrade: string;
  /**
   * - 🚩 **en**: Drop the <dir> <script>: prefix from streamed output
   * - **zh-CN**: 从流式输出中去掉 <目录> <脚本>: 前缀
   */
  export const opt_drop_the_dir_script_prefix_from_streamed_output: string;
  /**
   * - 🚩 **en**: Enable source-map support
   * - **zh-CN**: 启用 source-map 支持
   */
  export const opt_enable_sourcemap_support: string;
  /**
   * - 🚩 **en**: Evaluate <code>
   * - **zh-CN**: 求值指定代码
   */
  export const opt_evaluate_code: string;
  /**
   * - 🚩 **en**: Evaluate <code> and print
   * - **zh-CN**: 求值指定代码并打印
   */
  export const opt_evaluate_code_and_print: string;
  /**
   * - 🚩 **en**: Exponential backoff factor between retries
   * - **zh-CN**: 重试指数退避因子
   */
  export const opt_exponential_backoff_factor_between_retries: string;
  /**
   * - 🚩 **en**: Fix advisories
   * - **zh-CN**: 修复公告
   */
  export const opt_fix_advisories: string;
  /**
   * - 🚩 **en**: Force shared global virtual store off
   * - **zh-CN**: 强制关闭共享全局虚拟存储
   */
  export const opt_force_shared_global_virtual_store_off: string;
  /**
   * - 🚩 **en**: Force shared global virtual store on
   * - **zh-CN**: 强制开启共享全局虚拟存储
   */
  export const opt_force_shared_global_virtual_store_on: string;
  /**
   * - 🚩 **en**: Generate SLSA provenance attestation
   * - **zh-CN**: 生成 SLSA 来源证明
   */
  export const opt_generate_slsa_provenance_attestation: string;
  /**
   * - 🚩 **en**: GPG-sign the tag
   * - **zh-CN**: 用 GPG 签名标签
   */
  export const opt_gpgsign_the_tag: string;
  /**
   * - 🚩 **en**: Ignore any existing patch entry
   * - **zh-CN**: 忽略任何已有的补丁条目
   */
  export const opt_ignore_any_existing_patch_entry: string;
  /**
   * - 🚩 **en**: Install without persisting to package.json
   * - **zh-CN**: 安装但不写入 package.json
   */
  export const opt_install_without_persisting_to_packagejson: string;
  /**
   * - 🚩 **en**: Interactive update picker
   * - **zh-CN**: 交互式更新选择器
   */
  export const opt_interactive_update_picker: string;
  /**
   * - 🚩 **en**: JavaScript variant, no tsconfig
   * - **zh-CN**: JavaScript 变体，无 tsconfig
   */
  export const opt_javascript_variant_no_tsconfig: string;
  /**
   * - 🚩 **en**: Lower bound for retry backoff (ms)
   * - **zh-CN**: 重试退避下限（毫秒）
   */
  export const opt_lower_bound_for_retry_backoff_ms: string;
  /**
   * - 🚩 **en**: Max concurrent packages per chunk
   * - **zh-CN**: 每个块的最大并发包数
   */
  export const opt_max_concurrent_packages_per_chunk: string;
  /**
   * - 🚩 **en**: Max concurrent packages per topological chunk
   * - **zh-CN**: 每个拓扑块的最大并发包数
   */
  export const opt_max_concurrent_packages_per_topological_chunk: string;
  /**
   * - 🚩 **en**: Maximum number of results
   * - **zh-CN**: 最大结果数量
   */
  export const opt_maximum_number_of_results: string;
  /**
   * - 🚩 **en**: npm-style member selection
   * - **zh-CN**: npm 风格的成员选择
   */
  export const opt_npmstyle_member_selection: string;
  /**
   * - 🚩 **en**: Only audit devDependencies
   * - **zh-CN**: 仅审计 devDependencies
   */
  export const opt_only_audit_devdependencies: string;
  /**
   * - 🚩 **en**: Only audit production deps
   * - **zh-CN**: 仅审计生产依赖
   */
  export const opt_only_audit_production_deps: string;
  /**
   * - 🚩 **en**: Only follow devDependency chains
   * - **zh-CN**: 仅追踪 devDependency 链
   */
  export const opt_only_follow_devdependency_chains: string;
  /**
   * - 🚩 **en**: Only follow prod chains
   * - **zh-CN**: 仅追踪生产依赖链
   */
  export const opt_only_follow_prod_chains: string;
  /**
   * - 🚩 **en**: Only match devDependency roots
   * - **zh-CN**: 仅匹配 devDependency 根包
   */
  export const opt_only_match_devdependency_roots: string;
  /**
   * - 🚩 **en**: Only match production roots
   * - **zh-CN**: 仅匹配生产依赖根包
   */
  export const opt_only_match_production_roots: string;
  /**
   * - 🚩 **en**: Only print advisories at or above this severity
   * - **zh-CN**: 仅打印等于或高于此严重程度的公告
   */
  export const opt_only_print_advisories_at_or_above_this_severity: string;
  /**
   * - 🚩 **en**: Operate on workspace root
   * - **zh-CN**: 在工作区根包上操作
   */
  export const opt_operate_on_workspace_root: string;
  /**
   * - 🚩 **en**: Output format: default, json, or parseable
   * - **zh-CN**: 输出格式：default、json 或 parseable
   */
  export const opt_output_format_default_json_or_parseable: string;
  /**
   * - 🚩 **en**: Output reporter: default, silent, or ndjson
   * - **zh-CN**: 输出报告器：default、silent 或 ndjson
   */
  export const opt_output_reporter_default_silent_or_ndjson: string;
  /**
   * - 🚩 **en**: Override the shell used to invoke the script
   * - **zh-CN**: 覆盖用于调用脚本的 shell
   */
  export const opt_override_the_shell_used_to_invoke_the_script: string;
  /**
   * - 🚩 **en**: Overwrite existing files
   * - **zh-CN**: 覆盖已有文件
   */
  export const opt_overwrite_existing_files: string;
  /**
   * - 🚩 **en**: Overwrite existing lockfile
   * - **zh-CN**: 覆盖已有的 lockfile
   */
  export const opt_overwrite_existing_lockfile: string;
  /**
   * - 🚩 **en**: Pick advisories to fix interactively
   * - **zh-CN**: 交互式选择要修复的公告
   */
  export const opt_pick_advisories_to_fix_interactively: string;
  /**
   * - 🚩 **en**: Pin exact version
   * - **zh-CN**: 锁定精确版本
   */
  export const opt_pin_exact_version: string;
  /**
   * - 🚩 **en**: Pin to exact version
   * - **zh-CN**: 锁定到精确版本
   */
  export const opt_pin_to_exact_version: string;
  /**
   * - 🚩 **en**: Pre-approve lifecycle scripts
   * - **zh-CN**: 预批准生命周期脚本
   */
  export const opt_preapprove_lifecycle_scripts: string;
  /**
   * - 🚩 **en**: Preload a CommonJS module
   * - **zh-CN**: 预加载一个 CommonJS 模块
   */
  export const opt_preload_a_commonjs_module: string;
  /**
   * - 🚩 **en**: Preload an ES module
   * - **zh-CN**: 预加载一个 ES 模块
   */
  export const opt_preload_an_es_module: string;
  /**
   * - 🚩 **en**: Prerelease identifier
   * - **zh-CN**: 预发布标识符
   */
  export const opt_prerelease_identifier: string;
  /**
   * - 🚩 **en**: Project name
   * - **zh-CN**: 项目名称
   */
  export const opt_project_name: string;
  /**
   * - 🚩 **en**: Publish as public or restricted
   * - **zh-CN**: 发布为公共或受限
   */
  export const opt_publish_as_public_or_restricted: string;
  /**
   * - 🚩 **en**: Refresh lockfile without rewriting package.json
   * - **zh-CN**: 刷新 lockfile 而不重写 package.json
   */
  export const opt_refresh_lockfile_without_rewriting_packagejson: string;
  /**
   * - 🚩 **en**: Remove devDependencies
   * - **zh-CN**: 移除 devDependencies
   */
  export const opt_remove_devdependencies: string;
  /**
   * - 🚩 **en**: Remove from devDependencies
   * - **zh-CN**: 从 devDependencies 中移除
   */
  export const opt_remove_from_devdependencies: string;
  /**
   * - 🚩 **en**: Remove from workspace root
   * - **zh-CN**: 从工作区根包中移除
   */
  export const opt_remove_from_workspace_root: string;
  /**
   * - 🚩 **en**: Republish even when version exists
   * - **zh-CN**: 即使版本已存在也重新发布
   */
  export const opt_republish_even_when_version_exists: string;
  /**
   * - 🚩 **en**: Reverse topological order
   * - **zh-CN**: 反转拓扑排序
   */
  export const opt_reverse_topological_order: string;
  /**
   * - 🚩 **en**: Run all packages concurrently
   * - **zh-CN**: 在所有包中并行运行
   */
  export const opt_run_all_packages_concurrently: string;
  /**
   * - 🚩 **en**: Run from workspace root
   * - **zh-CN**: 从工作区根目录运行
   */
  export const opt_run_from_workspace_root: string;
  /**
   * - 🚩 **en**: Run in all packages concurrently
   * - **zh-CN**: 在所有包中并行运行
   */
  export const opt_run_in_all_packages_concurrently: string;
  /**
   * - 🚩 **en**: Run in watch mode
   * - **zh-CN**: 以监视模式运行
   */
  export const opt_run_in_watch_mode: string;
  /**
   * - 🚩 **en**: Run packages strictly one at a time
   * - **zh-CN**: 严格按顺序逐个运行包
   */
  export const opt_run_packages_strictly_one_at_a_time: string;
  /**
   * - 🚩 **en**: Scope to bind this registry to
   * - **zh-CN**: 绑定此注册表的 scope
   */
  export const opt_scope_to_bind_this_registry_to: string;
  /**
   * - 🚩 **en**: Scope whose registry mapping to remove
   * - **zh-CN**: 要移除注册表映射的 scope
   */
  export const opt_scope_whose_registry_mapping_to_remove: string;
  /**
   * - 🚩 **en**: Show only devDependencies
   * - **zh-CN**: 仅显示 devDependencies
   */
  export const opt_show_only_devdependencies: string;
  /**
   * - 🚩 **en**: Show only production deps
   * - **zh-CN**: 仅显示生产依赖
   */
  export const opt_show_only_production_deps: string;
  /**
   * - 🚩 **en**: Skip clean working tree check
   * - **zh-CN**: 跳过工作目录清洁检查
   */
  export const opt_skip_clean_working_tree_check: string;
  /**
   * - 🚩 **en**: Skip git hooks
   * - **zh-CN**: 跳过 git hooks
   */
  export const opt_skip_git_hooks: string;
  /**
   * - 🚩 **en**: Skip git init
   * - **zh-CN**: 跳过 git init
   */
  export const opt_skip_git_init: string;
  /**
   * - 🚩 **en**: Skip nub install step
   * - **zh-CN**: 跳过 nub install 步骤
   */
  export const opt_skip_nub_install_step: string;
  /**
   * - 🚩 **en**: Skip packages that don't have the named script
   * - **zh-CN**: 跳过没有该脚本的包
   */
  export const opt_skip_packages_that_dont_have_the_named_script: string;
  /**
   * - 🚩 **en**: Skip prepack/prepare/postpack scripts
   * - **zh-CN**: 跳过 prepack/prepare/postpack 脚本
   */
  export const opt_skip_prepackpreparepostpack_scripts: string;
  /**
   * - 🚩 **en**: Skip pre-run dependency-freshness check
   * - **zh-CN**: 跳过运行前的依赖新鲜度检查
   */
  export const opt_skip_prerun_check: string;
  /**
   * - 🚩 **en**: Skip pre-run install step
   * - **zh-CN**: 跳过运行前的安装步骤
   */
  export const opt_skip_prerun_install: string;
  /**
   * - 🚩 **en**: Skip publish lifecycle scripts
   * - **zh-CN**: 跳过发布生命周期脚本
   */
  export const opt_skip_publish_lifecycle_scripts: string;
  /**
   * - 🚩 **en**: Skip topological predecessors of <pkg>
   * - **zh-CN**: 跳过 <包> 的拓扑前置包
   */
  export const opt_skip_topological_predecessors_of_pkg: string;
  /**
   * - 🚩 **en**: Skip topological sort
   * - **zh-CN**: 跳过拓扑排序
   */
  export const opt_skip_topological_sort: string;
  /**
   * - 🚩 **en**: Skip version lifecycle scripts
   * - **zh-CN**: 跳过版本生命周期脚本
   */
  export const opt_skip_version_lifecycle_scripts: string;
  /**
   * - 🚩 **en**: Stop the run on first failure
   * - **zh-CN**: 遇到第一个失败时停止运行
   */
  export const opt_stop_the_run_on_first_failure: string;
  /**
   * - 🚩 **en**: Stream output with package-name prefix
   * - **zh-CN**: 以包名为前缀流式输出
   */
  export const opt_stream_output_with_packagename_prefix: string;
  /**
   * - 🚩 **en**: Syntax-check the script
   * - **zh-CN**: 对脚本进行语法检查
   */
  export const opt_syntaxcheck_the_script: string;
  /**
   * - 🚩 **en**: Target version
   * - **zh-CN**: 目标版本
   */
  export const opt_target_version: string;
  /**
   * - 🚩 **en**: Update in workspace root
   * - **zh-CN**: 在工作区根包中更新
   */
  export const opt_update_in_workspace_root: string;
  /**
   * - 🚩 **en**: Update only devDependencies
   * - **zh-CN**: 仅更新 devDependencies
   */
  export const opt_update_only_devdependencies: string;
  /**
   * - 🚩 **en**: Update past manifest range
   * - **zh-CN**: 更新超出 manifest 范围的版本
   */
  export const opt_update_past_manifest_range: string;
  /**
   * - 🚩 **en**: Upgrade to latest canary
   * - **zh-CN**: 升级到最新 canary 版本
   */
  export const opt_upgrade_to_latest_canary: string;
  /**
   * - 🚩 **en**: Upgrade to latest stable
   * - **zh-CN**: 升级到最新稳定版本
   */
  export const opt_upgrade_to_latest_stable: string;
  /**
   * - 🚩 **en**: Upper bound for retry backoff (ms)
   * - **zh-CN**: 重试退避上限（毫秒）
   */
  export const opt_upper_bound_for_retry_backoff_ms: string;
  /**
   * - 🚩 **en**: Use exit code 0 if registry responds with error
   * - **zh-CN**: 注册表返回错误时仍使用退出码 0
   */
  export const opt_use_exit_code_0_if_registry_responds_with_error: string;
  /**
   * - 🚩 **en**: Where to write the generated .patch file
   * - **zh-CN**: 生成的 .patch 文件的写入位置
   */
  export const opt_where_to_write_the_generated_patch_file: string;
  /**
   * - 🚩 **en**: Write only the converted lockfile
   * - **zh-CN**: 仅写入转换后的 lockfile
   */
  export const opt_write_only_the_converted_lockfile: string;
  /**
   * - 🚩 **en**: Select all
   * - **zh-CN**: 选择全部
   */
  export const option_all: string;
  /**
   * - 🚩 **en**: Color mode: auto (default), always, never
   * - **zh-CN**: 颜色模式：auto（默认）、always、never
   */
  export const option_color: string;
  /**
   * - 🚩 **en**: Run as if started in <dir>
   * - **zh-CN**: 指定工作目录
   */
  export const option_cwd: string;
  /**
   * - 🚩 **en**: Traversal depth
   * - **zh-CN**: 依赖遍历深度
   */
  export const option_depth: string;
  /**
   * - 🚩 **en**: Install only devDependencies
   * - **zh-CN**: 仅安装开发依赖
   */
  export const option_dev: string;
  /**
   * - 🚩 **en**: Show what would happen without doing it
   * - **zh-CN**: 试运行，不实际执行
   */
  export const option_dry_run: string;
  /**
   * - 🚩 **en**: Load environment variables from <file>
   * - **zh-CN**: 从文件加载环境变量
   */
  export const option_env_file: string;
  /**
   * - 🚩 **en**: Like --env-file, but skip silently if absent
   * - **zh-CN**: 从文件加载环境变量（文件不存在时静默跳过）
   */
  export const option_env_file_if_exists: string;
  /**
   * - 🚩 **en**: Error when a workspace selector matches no packages
   * - **zh-CN**: 筛选器未匹配时出错
   */
  export const option_fail_if_no_match: string;
  /**
   * - 🚩 **en**: Number of retry attempts for registry fetches
   * - **zh-CN**: 注册表获取的重试次数
   */
  export const option_fetch_retries: string;
  /**
   * - 🚩 **en**: Per-request HTTP timeout in milliseconds
   * - **zh-CN**: HTTP 请求超时毫秒数
   */
  export const option_fetch_timeout: string;
  /**
   * - 🚩 **en**: Filter workspace packages by name or glob
   * - **zh-CN**: 按名称或 glob 过滤工作区包
   */
  export const option_filter: string;
  /**
   * - 🚩 **en**: Production-only variant of --filter
   * - **zh-CN**: 生产环境版本的 --filter
   */
  export const option_filter_prod: string;
  /**
   * - 🚩 **en**: Re-resolve and relink even when up-to-date
   * - **zh-CN**: 强制执行操作
   */
  export const option_force: string;
  /**
   * - 🚩 **en**: Hard-fail if the lockfile is out of date
   * - **zh-CN**: lockfile 过期时硬失败
   */
  export const option_frozen_lockfile: string;
  /**
   * - 🚩 **en**: Operate globally
   * - **zh-CN**: 全局安装/操作
   */
  export const option_global: string;
  /**
   * - 🚩 **en**: Print help
   * - **zh-CN**: 打印帮助信息
   */
  export const option_help: string;
  /**
   * - 🚩 **en**: Skip all lifecycle scripts
   * - **zh-CN**: 跳过生命周期脚本
   */
  export const option_ignore_scripts: string;
  /**
   * - 🚩 **en**: Include the workspace root in recursive set
   * - **zh-CN**: 包含工作区根包
   */
  export const option_include_workspace_root: string;
  /**
   * - 🚩 **en**: Emit output as JSON
   * - **zh-CN**: 以 JSON 格式输出
   */
  export const option_json: string;
  /**
   * - 🚩 **en**: Shortcut for --location project
   * - **zh-CN**: 项目级配置的快捷方式
   */
  export const option_local: string;
  /**
   * - 🚩 **en**: Which config location to use
   * - **zh-CN**: 配置位置
   */
  export const option_location: string;
  /**
   * - 🚩 **en**: Write lockfile only, skip linking
   * - **zh-CN**: 仅写入 lockfile，跳过 node_modules
   */
  export const option_lockfile_only: string;
  /**
   * - 🚩 **en**: Log level
   * - **zh-CN**: 日志级别
   */
  export const option_loglevel: string;
  /**
   * - 🚩 **en**: Show additional details
   * - **zh-CN**: 显示更多细节
   */
  export const option_long: string;
  /**
   * - 🚩 **en**: Load no env files
   * - **zh-CN**: 不加载任何 .env 文件
   */
  export const option_no_env_file: string;
  /**
   * - 🚩 **en**: Always re-resolve, even if lockfile is fresh
   * - **zh-CN**: 即使 lockfile 是最新的也重新解析
   */
  export const option_no_frozen_lockfile: string;
  /**
   * - 🚩 **en**: Skip optionalDependencies
   * - **zh-CN**: 跳过可选依赖
   */
  export const option_no_optional: string;
  /**
   * - 🚩 **en**: Run on plain Node, no augmentation
   * - **zh-CN**: 使用纯 Node 运行，不进行增强
   */
  export const option_node: string;
  /**
   * - 🚩 **en**: node_modules layout: isolated or hoisted
   * - **zh-CN**: node_modules 布局：isolated 或 hoisted
   */
  export const option_node_linker: string;
  /**
   * - 🚩 **en**: Never hit the network
   * - **zh-CN**: 从不访问网络
   */
  export const option_offline: string;
  /**
   * - 🚩 **en**: One-time password
   * - **zh-CN**: 一次性密码
   */
  export const option_otp: string;
  /**
   * - 🚩 **en**: Tab-separated output
   * - **zh-CN**: 以可解析格式输出
   */
  export const option_parseable: string;
  /**
   * - 🚩 **en**: Use lockfile when fresh, re-resolve when stale
   * - **zh-CN**: lockfile 最新时使用，过期时重新解析
   */
  export const option_prefer_frozen_lockfile: string;
  /**
   * - 🚩 **en**: Use cached packages when available
   * - **zh-CN**: 优先使用缓存的包
   */
  export const option_prefer_offline: string;
  /**
   * - 🚩 **en**: Skip devDependencies
   * - **zh-CN**: 仅安装生产依赖
   */
  export const option_prod: string;
  /**
   * - 🚩 **en**: Run across every workspace package
   * - **zh-CN**: 在所有工作区包中运行
   */
  export const option_recursive: string;
  /**
   * - 🚩 **en**: Override registry URL
   * - **zh-CN**: 覆盖注册表 URL
   */
  export const option_registry: string;
  /**
   * - 🚩 **en**: Output format
   * - **zh-CN**: 输出格式
   */
  export const option_reporter: string;
  /**
   * - 🚩 **en**: Suppress nub's non-error output
   * - **zh-CN**: 抑制 nub 的非错误输出
   */
  export const option_silent: string;
  /**
   * - 🚩 **en**: Dist-tag to publish under
   * - **zh-CN**: 指定 dist-tag
   */
  export const option_tag: string;
  /**
   * - 🚩 **en**: Increase nub's log verbosity (repeatable)
   * - **zh-CN**: 增加日志详细程度（可重复）
   */
  export const option_verbose: string;
  /**
   * - 🚩 **en**: Print the nub version
   * - **zh-CN**: 打印 nub 版本
   */
  export const option_version: string;
  /**
   * - 🚩 **en**: Run from workspace root
   * - **zh-CN**: 从工作区根目录运行
   */
  export const option_workspace_root: string;
  /**
   * - 🚩 **en**: Skip confirmation prompt
   * - **zh-CN**: 跳过确认提示
   */
  export const option_yes: string;
  /**
   * - 🚩 **en**: Add a maintainer to a package
   * - **zh-CN**: 添加包维护者
   */
  export const owner_add: string;
  /**
   * - 🚩 **en**: List the maintainers of a package
   * - **zh-CN**: 列出包维护者
   */
  export const owner_ls: string;
  /**
   * - 🚩 **en**: Remove a maintainer from a package
   * - **zh-CN**: 移除包维护者
   */
  export const owner_rm: string;
  /**
   * - 🚩 **en**: List cached package managers (or clear the cache)
   * - **zh-CN**: 列出或清除缓存的包管理器
   */
  export const pm_cache: string;
  /**
   * - 🚩 **en**: Lock this project to an exact nub version
   * - **zh-CN**: 锁定项目的 nub 版本
   */
  export const pm_pin: string;
  /**
   * - 🚩 **en**: Link npm/pnpm/yarn shims into ~/.nub/shims
   * - **zh-CN**: 创建包管理器 shim
   */
  export const pm_shim: string;
  /**
   * - 🚩 **en**: Remove the shims and their PATH block
   * - **zh-CN**: 移除包管理器 shim
   */
  export const pm_unshim: string;
  /**
   * - 🚩 **en**: Re-resolve within the pinned range and bump the pin
   * - **zh-CN**: 重新解析并更新锁定版本
   */
  export const pm_update: string;
  /**
   * - 🚩 **en**: Declare the project's package manager (npm|pnpm|yarn|bun|nub)
   * - **zh-CN**: 声明项目的包管理器
   */
  export const pm_use: string;
  /**
   * - 🚩 **en**: Print the resolved package-manager path
   * - **zh-CN**: 打印已解析的包管理器路径
   */
  export const pm_which: string;
  /**
   * - 🚩 **en**: Add packages to the global store without linking
   * - **zh-CN**: 将包添加到全局存储而不链接
   */
  export const store_add: string;
  /**
   * - 🚩 **en**: Show the store path
   * - **zh-CN**: 显示存储路径
   */
  export const store_path: string;
  /**
   * - 🚩 **en**: Remove unreferenced packages from the global store
   * - **zh-CN**: 移除全局存储中未引用的包
   */
  export const store_prune: string;
  /**
   * - 🚩 **en**: Verify the store against cached package indexes
   * - **zh-CN**: 验证存储完整性
   */
  export const store_status: string;
  /**
   * - 🚩 **en**: Create a new auth token
   * - **zh-CN**: 创建认证令牌
   */
  export const token_create: string;
  /**
   * - 🚩 **en**: List the account's auth tokens
   * - **zh-CN**: 列出认证令牌
   */
  export const token_list: string;
  /**
   * - 🚩 **en**: Revoke a token
   * - **zh-CN**: 撤销认证令牌
   */
  export const token_revoke: string;
}

declare module "virtual:i18n/pm2" {
  /**
   * - 🚩 **en**: Attach stdin/stdout to application identified by pm_id
   * - **zh-CN**: 将 stdin/stdout 挂载到指定 pm_id 的应用
   */
  export const cmd_attach: string;
  /**
   * - 🚩 **en**: Install module automatically
   * - **zh-CN**: 自动安装模块
   */
  export const cmd_autoinstall: string;
  /**
   * - 🚩 **en**: Downgrades repository to the previous commit for a given app
   * - **zh-CN**: 回退仓库到上一个提交
   */
  export const cmd_backward: string;
  /**
   * - 🚩 **en**: Create empty dump file
   * - **zh-CN**: 创建空的转储文件
   */
  export const cmd_cleardump: string;
  /**
   * - 🚩 **en**: Install or uninstall tab completion
   * - **zh-CN**: 安装或卸载 Tab 补全
   */
  export const cmd_completion: string;
  /**
   * - 🚩 **en**: Get / set module config values
   * - **zh-CN**: 获取 / 设置模块配置值
   */
  export const cmd_conf: string;
  /**
   * - 🚩 **en**: Get / set module config values
   * - **zh-CN**: 获取 / 设置模块配置值
   */
  export const cmd_config: string;
  /**
   * - 🚩 **en**: Create a boilerplate
   * - **zh-CN**: 创建一个样板应用
   */
  export const cmd_create: string;
  /**
   * - 🚩 **en**: Launch dashboard with monitoring and logs
   * - **zh-CN**: 启动带监控和日志的面板
   */
  export const cmd_dashboard: string;
  /**
   * - 🚩 **en**: Performs a deep update of PM2
   * - **zh-CN**: 深度更新 PM2
   */
  export const cmd_deep_update: string;
  /**
   * - 🚩 **en**: Stop and delete a process from pm2 process list
   * - **zh-CN**: 停止并从 pm2 进程列表删除
   */
  export const cmd_delete: string;
  /**
   * - 🚩 **en**: Deploy your json
   * - **zh-CN**: 部署 json
   */
  export const cmd_deploy: string;
  /**
   * - 🚩 **en**: Describe all parameters of a process
   * - **zh-CN**: 描述进程的所有参数
   */
  export const cmd_describe: string;
  /**
   * - 🚩 **en**: Dump all processes for resurrecting them later
   * - **zh-CN**: 转储所有进程以便稍后恢复
   */
  export const cmd_dump: string;
  /**
   * - 🚩 **en**: List all environment variables of a process id
   * - **zh-CN**: 列出指定进程 id 的所有环境变量
   */
  export const cmd_env: string;
  /**
   * - 🚩 **en**: Display pm2 usage examples
   * - **zh-CN**: 显示 pm2 使用示例
   */
  export const cmd_examples: string;
  /**
   * - 🚩 **en**: Flush logs
   * - **zh-CN**: 清空日志
   */
  export const cmd_flush: string;
  /**
   * - 🚩 **en**: Updates repository to the next commit for a given app
   * - **zh-CN**: 更新仓库到下一个提交
   */
  export const cmd_forward: string;
  /**
   * - 🚩 **en**: Get value for key
   * - **zh-CN**: 获取 key 的值
   */
  export const cmd_get: string;
  /**
   * - 🚩 **en**: Get process id by name
   * - **zh-CN**: 按名称获取进程 id
   */
  export const cmd_id: string;
  /**
   * - 🚩 **en**: Launch legacy termcaps monitoring
   * - **zh-CN**: 启动旧版 termcaps 监控
   */
  export const cmd_imonit: string;
  /**
   * - 🚩 **en**: Generate a process conf file
   * - **zh-CN**: 生成进程配置文件
   */
  export const cmd_init: string;
  /**
   * - 🚩 **en**: Inspect a process
   * - **zh-CN**: 检查进程
   */
  export const cmd_inspect: string;
  /**
   * - 🚩 **en**: Install or update a module and run it forever
   * - **zh-CN**: 安装或更新一个模块并永久运行
   */
  export const cmd_install: string;
  /**
   * - 🚩 **en**: Install OpenTelemetry tracing packages
   * - **zh-CN**: 安装 OpenTelemetry 追踪包
   */
  export const cmd_install_otel: string;
  /**
   * - 🚩 **en**: List all processes in JSON format
   * - **zh-CN**: 以 JSON 格式列出所有进程
   */
  export const cmd_jlist: string;
  /**
   * - 🚩 **en**: Kill daemon
   * - **zh-CN**: 终止守护进程
   */
  export const cmd_kill: string;
  /**
   * - 🚩 **en**: Link with the pm2 monitoring dashboard
   * - **zh-CN**: 关联 pm2 监控面板
   */
  export const cmd_link: string;
  /**
   * - 🚩 **en**: List all processes
   * - **zh-CN**: 列出所有进程
   */
  export const cmd_list_all: string;
  /**
   * - 🚩 **en**: Login to pm2 plus
   * - **zh-CN**: 登录 pm2 plus
   */
  export const cmd_login: string;
  /**
   * - 🚩 **en**: Logout from pm2 plus
   * - **zh-CN**: 登出 pm2 plus
   */
  export const cmd_logout: string;
  /**
   * - 🚩 **en**: Copy default logrotate configuration
   * - **zh-CN**: 复制默认 logrotate 配置
   */
  export const cmd_logrotate: string;
  /**
   * - 🚩 **en**: Stream logs file. Default stream all logs
   * - **zh-CN**: 流式输出日志文件，默认输出全部日志
   */
  export const cmd_logs: string;
  /**
   * - 🚩 **en**: Generate a sample module in current folder
   * - **zh-CN**: 在当前文件夹生成模块示例
   */
  export const cmd_module_generate: string;
  /**
   * - 🚩 **en**: Update a module and run it forever
   * - **zh-CN**: 更新模块并永久运行
   */
  export const cmd_module_update: string;
  /**
   * - 🚩 **en**: Launch termcaps monitoring
   * - **zh-CN**: 启动 termcaps 监控
   */
  export const cmd_monit: string;
  /**
   * - 🚩 **en**: Monitor target process
   * - **zh-CN**: 监控目标进程
   */
  export const cmd_monitor: string;
  /**
   * - 🚩 **en**: Multiset eg 'key1 val1 key2 val2'
   * - **zh-CN**: 多重设置，如 "key1 val1 key2 val2"
   */
  export const cmd_multiset: string;
  /**
   * - 🚩 **en**: Open the pm2 monitoring dashboard
   * - **zh-CN**: 打开 pm2 监控面板
   */
  export const cmd_open: string;
  /**
   * - 🚩 **en**: Check & Package TAR type module
   * - **zh-CN**: 检查并打包 TAR 类型模块
   */
  export const cmd_package: string;
  /**
   * - 🚩 **en**: Return pid of app name or all
   * - **zh-CN**: 返回指定应用或所有进程的 pid
   */
  export const cmd_pid: string;
  /**
   * - 🚩 **en**: Ping pm2 daemon - if not up it will launch it
   * - **zh-CN**: Ping pm2 守护进程 - 若未启动则启动之
   */
  export const cmd_ping: string;
  /**
   * - 🚩 **en**: Enable pm2 plus
   * - **zh-CN**: 启用 pm2 plus
   */
  export const cmd_plus: string;
  /**
   * - 🚩 **en**: Print json in a prettified JSON
   * - **zh-CN**: 以美化后的 JSON 输出
   */
  export const cmd_prettylist: string;
  /**
   * - 🚩 **en**: Profile PM2 cpu
   * - **zh-CN**: 分析 PM2 CPU
   */
  export const cmd_profile_cpu: string;
  /**
   * - 🚩 **en**: Sample PM2 heap memory
   * - **zh-CN**: 采样 PM2 堆内存
   */
  export const cmd_profile_mem: string;
  /**
   * - 🚩 **en**: Publish the module you are currently on
   * - **zh-CN**: 发布当前所在的模块
   */
  export const cmd_publish: string;
  /**
   * - 🚩 **en**: Updates repository for a given app
   * - **zh-CN**: 更新指定应用的仓库
   */
  export const cmd_pull: string;
  /**
   * - 🚩 **en**: Reload processes (for apps using HTTP/HTTPS)
   * - **zh-CN**: 平滑重载进程（适用于 HTTP/HTTPS 应用）
   */
  export const cmd_reload: string;
  /**
   * - 🚩 **en**: Reload all logs
   * - **zh-CN**: 重载所有日志
   */
  export const cmd_reload_logs: string;
  /**
   * - 🚩 **en**: Give a full pm2 report
   * - **zh-CN**: 生成完整的 pm2 报告
   */
  export const cmd_report: string;
  /**
   * - 🚩 **en**: Reset counters for process
   * - **zh-CN**: 重置进程计数器
   */
  export const cmd_reset: string;
  /**
   * - 🚩 **en**: Restart a process
   * - **zh-CN**: 重启进程
   */
  export const cmd_restart: string;
  /**
   * - 🚩 **en**: Resurrect previously dumped processes
   * - **zh-CN**: 恢复此前转储的进程
   */
  export const cmd_resurrect: string;
  /**
   * - 🚩 **en**: Scale up/down a process in cluster mode
   * - **zh-CN**: 在集群模式下按参数扩缩进程
   */
  export const cmd_scale: string;
  /**
   * - 🚩 **en**: Send stdin to pm_id
   * - **zh-CN**: 向 pm_id 发送 stdin
   */
  export const cmd_send: string;
  /**
   * - 🚩 **en**: Send a system signal to the target process
   * - **zh-CN**: 向目标进程发送系统信号
   */
  export const cmd_send_signal: string;
  /**
   * - 🚩 **en**: Serve a directory over http via port
   * - **zh-CN**: 通过 http 端口托管目录
   */
  export const cmd_serve: string;
  /**
   * - 🚩 **en**: Set the specified config key value
   * - **zh-CN**: 设置指定的配置键值
   */
  export const cmd_set: string;
  /**
   * - 🚩 **en**: Start and daemonize an app
   * - **zh-CN**: 启动并守护化一个应用
   */
  export const cmd_start: string;
  /**
   * - 🚩 **en**: Start or gracefully reload JSON file
   * - **zh-CN**: 启动或优雅重载 JSON 文件
   */
  export const cmd_start_or_graceful_reload: string;
  /**
   * - 🚩 **en**: Start or gracefully reload JSON file
   * - **zh-CN**: 启动或平滑重载 JSON 文件
   */
  export const cmd_start_or_reload: string;
  /**
   * - 🚩 **en**: Start or restart JSON file
   * - **zh-CN**: 启动或重启 JSON 文件
   */
  export const cmd_start_or_restart: string;
  /**
   * - 🚩 **en**: Enable the pm2 startup hook
   * - **zh-CN**: 启用 pm2 开机启动钩子
   */
  export const cmd_startup: string;
  /**
   * - 🚩 **en**: Stop a process
   * - **zh-CN**: 停止进程
   */
  export const cmd_stop: string;
  /**
   * - 🚩 **en**: List system infos in JSON
   * - **zh-CN**: 以 JSON 格式列出系统信息
   */
  export const cmd_sysinfos: string;
  /**
   * - 🚩 **en**: Trigger process action
   * - **zh-CN**: 触发进程动作
   */
  export const cmd_trigger: string;
  /**
   * - 🚩 **en**: Stop and uninstall a module
   * - **zh-CN**: 停止并卸载模块
   */
  export const cmd_uninstall: string;
  /**
   * - 🚩 **en**: Remove OpenTelemetry tracing packages
   * - **zh-CN**: 移除 OpenTelemetry 追踪包
   */
  export const cmd_uninstall_otel: string;
  /**
   * - 🚩 **en**: Unlink with the pm2 monitoring dashboard
   * - **zh-CN**: 取消关联 pm2 监控面板
   */
  export const cmd_unlink: string;
  /**
   * - 🚩 **en**: Unmonitor target process
   * - **zh-CN**: 取消监控目标进程
   */
  export const cmd_unmonitor: string;
  /**
   * - 🚩 **en**: Clear the specified config key
   * - **zh-CN**: 清除指定的配置 key
   */
  export const cmd_unset: string;
  /**
   * - 🚩 **en**: Disable the pm2 startup hook
   * - **zh-CN**: 禁用 pm2 开机启动钩子
   */
  export const cmd_unstartup: string;
  /**
   * - 🚩 **en**: Update in-memory PM2 with local PM2
   * - **zh-CN**: 用本地 PM2 更新内存中的 PM2
   */
  export const cmd_update: string;
  /**
   * - 🚩 **en**: Production process manager for Node.js applications
   * - **zh-CN**: Node.js 应用的生产级进程管理器
   */
  export const description: string;
  /**
   * - 🚩 **en**: Attach logging after your start/restart/stop/reload
   * - **zh-CN**: 在 start/restart/stop/reload 后附加日志输出
   */
  export const opt_attach: string;
  /**
   * - 🚩 **en**: Restart a running process based on a cron pattern
   * - **zh-CN**: 基于 cron 模式重启运行中的进程
   */
  export const opt_cron: string;
  /**
   * - 🚩 **en**: Run target script from path cwd
   * - **zh-CN**: 从指定路径运行目标脚本
   */
  export const opt_cwd: string;
  /**
   * - 🚩 **en**: Enable all monitoring tools (equivalent to --v8 --event-loop-inspector --trace)
   * - **zh-CN**: 启用所有监控工具（等价于 --v8 --event-loop-inspector --trace）
   */
  export const opt_deep_monitoring: string;
  /**
   * - 🚩 **en**: Disable all logs storage
   * - **zh-CN**: 禁用所有日志存储
   */
  export const opt_disable_logs: string;
  /**
   * - 🚩 **en**: Disable source map support
   * - **zh-CN**: 禁用 source map 支持
   */
  export const opt_disable_source_map_support: string;
  /**
   * - 🚩 **en**: Disable transaction tracing with km
   * - **zh-CN**: 禁用 km 事务追踪
   */
  export const opt_disable_trace: string;
  /**
   * - 🚩 **en**: Force deletion of dump file, even if empty
   * - **zh-CN**: 即使为空也强制删除转储文件
   */
  export const opt_dump_force: string;
  /**
   * - 🚩 **en**: Specify which set of environment variables from ecosystem file must be injected
   * - **zh-CN**: 指定注入的 ecosystem 文件环境变量集
   */
  export const opt_env: string;
  /**
   * - 🚩 **en**: Specify log file for stderr
   * - **zh-CN**: 指定 stderr 的日志文件
   */
  export const opt_error: string;
  /**
   * - 🚩 **en**: Enable event-loop-inspector dump in pmx
   * - **zh-CN**: 在 pmx 中启用事件循环检查器转储
   */
  export const opt_event_loop_inspector: string;
  /**
   * - 🚩 **en**: Execute a program using fork system
   * - **zh-CN**: 使用 fork 系统执行程序
   */
  export const opt_execute_command: string;
  /**
   * - 🚩 **en**: Specify a delay between restarts (in milliseconds)
   * - **zh-CN**: 指定重启间隔（毫秒）
   */
  export const opt_exp_backoff_restart_delay: string;
  /**
   * - 🚩 **en**: Filter out outgoing global values that contain provided strings
   * - **zh-CN**: 过滤掉包含指定字符串的全局环境变量
   */
  export const opt_filter_env: string;
  /**
   * - 🚩 **en**: Force actions
   * - **zh-CN**: 强制执行动作
   */
  export const opt_force: string;
  /**
   * - 🚩 **en**: Run target script with gid rights
   * - **zh-CN**: 以 gid 权限运行目标脚本
   */
  export const opt_gid: string;
  /**
   * - 🚩 **en**: Output usage information
   * - **zh-CN**: 输出使用信息
   */
  export const opt_help: string;
  /**
   * - 🚩 **en**: Define home path when generating startup script
   * - **zh-CN**: 生成启动脚本时指定 home 路径
   */
  export const opt_hp: string;
  /**
   * - 🚩 **en**: List of paths to ignore (name or regex)
   * - **zh-CN**: 需要忽略的路径列表（名称或正则）
   */
  export const opt_ignore_watch: string;
  /**
   * - 🚩 **en**: Is docker container
   * - **zh-CN**: 是否为 docker 容器
   */
  export const opt_install_docker: string;
  /**
   * - 🚩 **en**: Run yarn install before starting module
   * - **zh-CN**: 启动模块前运行 yarn install
   */
  export const opt_install_install: string;
  /**
   * - 🚩 **en**: Keep module backup, if new module fail = restore with previous
   * - **zh-CN**: 保留模块备份，新模块失败则回滚
   */
  export const opt_install_safe: string;
  /**
   * - 🚩 **en**: Is local tarball
   * - **zh-CN**: 是否为本地 tarball
   */
  export const opt_install_tarball: string;
  /**
   * - 🚩 **en**: Install module in v1 manner (do not use it)
   * - **zh-CN**: 以 v1 方式安装模块（不要使用）
   */
  export const opt_install_v1: string;
  /**
   * - 🚩 **en**: Launch number instances (for networked app, load balanced)
   * - **zh-CN**: 启动指定数量的实例（网络应用负载均衡）
   */
  export const opt_instances: string;
  /**
   * - 🚩 **en**: Set a specific interpreter to use for executing app, default: node
   * - **zh-CN**: 指定执行应用的解释器，默认：node
   */
  export const opt_interpreter: string;
  /**
   * - 🚩 **en**: Set arguments to pass to the interpreter (alias of --node-args)
   * - **zh-CN**: 设置传给解释器的参数（--node-args 的别名）
   */
  export const opt_interpreter_args: string;
  /**
   * - 🚩 **en**: Delay before sending final SIGKILL signal to process
   * - **zh-CN**: 发送最终 SIGKILL 信号前的延迟
   */
  export const opt_kill_timeout: string;
  /**
   * - 🚩 **en**: Set url info node
   * - **zh-CN**: 设置 info node 地址
   */
  export const opt_link_info_node: string;
  /**
   * - 🚩 **en**: Listen timeout on application reload
   * - **zh-CN**: 应用重载时的监听超时
   */
  export const opt_listen_timeout: string;
  /**
   * - 🚩 **en**: Specify log file which gathers both stdout and stderr
   * - **zh-CN**: 指定同时收集 stdout 与 stderr 的日志文件
   */
  export const opt_log: string;
  /**
   * - 🚩 **en**: Add custom prefix timestamp to logs
   * - **zh-CN**: 为日志添加自定义时间戳前缀
   */
  export const opt_log_date_format: string;
  /**
   * - 🚩 **en**: Specify log output style (raw by default, json optional)
   * - **zh-CN**: 指定日志输出格式（默认为 raw，可选 json）
   */
  export const opt_log_type: string;
  /**
   * - 🚩 **en**: Only shows error output
   * - **zh-CN**: 仅显示错误输出
   */
  export const opt_logs_err: string;
  /**
   * - 🚩 **en**: Formated log output
   * - **zh-CN**: 格式化日志输出
   */
  export const opt_logs_format: string;
  /**
   * - 🚩 **en**: Highlights the given value
   * - **zh-CN**: 高亮给定值
   */
  export const opt_logs_highlight: string;
  /**
   * - 🚩 **en**: Json log output
   * - **zh-CN**: JSON 日志输出
   */
  export const opt_logs_json: string;
  /**
   * - 🚩 **en**: Output the last N lines, instead of the last 15 by default
   * - **zh-CN**: 输出最后 N 行，默认最后 15 行
   */
  export const opt_logs_lines: string;
  /**
   * - 🚩 **en**: Print logs without launching the log stream
   * - **zh-CN**: 打印日志但不启动日志流
   */
  export const opt_logs_nostream: string;
  /**
   * - 🚩 **en**: Only shows standard output
   * - **zh-CN**: 仅显示标准输出
   */
  export const opt_logs_out: string;
  /**
   * - 🚩 **en**: Raw output
   * - **zh-CN**: 原始输出
   */
  export const opt_logs_raw: string;
  /**
   * - 🚩 **en**: Add timestamps (default format YYYY-MM-DD-HH:mm:ss)
   * - **zh-CN**: 添加时间戳（默认格式 YYYY-MM-DD-HH:mm:ss）
   */
  export const opt_logs_timestamp: string;
  /**
   * - 🚩 **en**: Restart the app if an amount of memory is exceeded (in bytes)
   * - **zh-CN**: 内存超过指定值（字节）时重启应用
   */
  export const opt_max_memory_restart: string;
  /**
   * - 🚩 **en**: Only restart the script COUNT times
   * - **zh-CN**: 仅重启脚本 COUNT 次
   */
  export const opt_max_restarts: string;
  /**
   * - 🚩 **en**: Merge logs from different instances but keep error and out separated
   * - **zh-CN**: 合并多实例日志，但保持错误与标准输出分离
   */
  export const opt_merge_logs: string;
  /**
   * - 🚩 **en**: Display a compacted list without formatting
   * - **zh-CN**: 显示精简列表，不进行格式化
   */
  export const opt_mini_list: string;
  /**
   * - 🚩 **en**: Set a name for the process in the process list
   * - **zh-CN**: 在进程列表中为进程设置名称
   */
  export const opt_name: string;
  /**
   * - 🚩 **en**: Start application within specified namespace
   * - **zh-CN**: 在指定的命名空间内启动应用
   */
  export const opt_namespace: string;
  /**
   * - 🚩 **en**: Start an app without pmx
   * - **zh-CN**: 不启用 pmx 启动应用
   */
  export const opt_no_automation: string;
  /**
   * - 🚩 **en**: Start an app without automatic restart
   * - **zh-CN**: 启动应用但不自动重启
   */
  export const opt_no_autorestart: string;
  /**
   * - 🚩 **en**: Add an app without automatic start
   * - **zh-CN**: 添加应用但不自动启动
   */
  export const opt_no_autostart: string;
  /**
   * - 🚩 **en**: Skip colors
   * - **zh-CN**: 跳过颜色
   */
  export const opt_no_color: string;
  /**
   * - 🚩 **en**: Run pm2 daemon in the foreground if it doesn't exist already
   * - **zh-CN**: 若守护进程不存在，则在前台运行
   */
  export const opt_no_daemon: string;
  /**
   * - 🚩 **en**: Start an app without pmx
   * - **zh-CN**: 不启用 pmx 启动应用
   */
  export const opt_no_pmx: string;
  /**
   * - 🚩 **en**: Only kill the main process, not detached children
   * - **zh-CN**: 仅杀死主进程而不杀死子进程
   */
  export const opt_no_treekill: string;
  /**
   * - 🚩 **en**: Start an app without vizion feature (versioning control)
   * - **zh-CN**: 不启用 vizion（版本控制）功能启动应用
   */
  export const opt_no_vizion: string;
  /**
   * - 🚩 **en**: Space delimited arguments to pass to node
   * - **zh-CN**: 传给 node 的以空格分隔的参数
   */
  export const opt_node_args: string;
  /**
   * - 🚩 **en**: With json declaration, allow to only act on one application
   * - **zh-CN**: 使用 json 声明时，仅作用于一个应用
   */
  export const opt_only: string;
  /**
   * - 🚩 **en**: Specify log file for stdout
   * - **zh-CN**: 指定 stdout 的日志文件
   */
  export const opt_output: string;
  /**
   * - 🚩 **en**: Number of parallel actions (for restart/reload)
   * - **zh-CN**: 并行执行的动作数量（用于重启/重载）
   */
  export const opt_parallel: string;
  /**
   * - 🚩 **en**: Specify pid file
   * - **zh-CN**: 指定 pid 文件
   */
  export const opt_pid: string;
  /**
   * - 🚩 **en**: Silent mode
   * - **zh-CN**: 静默模式
   */
  export const opt_plus_discrete: string;
  /**
   * - 🚩 **en**: Set url info node for on-premise pm2 plus
   * - **zh-CN**: 为内网部署的 pm2 plus 设置 info node 地址
   */
  export const opt_plus_info_node: string;
  /**
   * - 🚩 **en**: Install all modules (force yes)
   * - **zh-CN**: 安装所有模块（强制确认）
   */
  export const opt_plus_install_all: string;
  /**
   * - 🚩 **en**: Publish on npm
   * - **zh-CN**: 发布到 npm
   */
  export const opt_publish_npm: string;
  /**
   * - 🚩 **en**: Specify a delay between restarts (in milliseconds)
   * - **zh-CN**: 指定重启间隔（毫秒）
   */
  export const opt_restart_delay: string;
  /**
   * - 🚩 **en**: Toggle watching folder for changes
   * - **zh-CN**: 切换监视文件夹变化
   */
  export const opt_restart_watch: string;
  /**
   * - 🚩 **en**: Set basic auth password
   * - **zh-CN**: 设置 basic auth 密码
   */
  export const opt_serve_basic_auth_password: string;
  /**
   * - 🚩 **en**: Set basic auth username
   * - **zh-CN**: 设置 basic auth 用户名
   */
  export const opt_serve_basic_auth_username: string;
  /**
   * - 🚩 **en**: Directory listing like python http.server
   * - **zh-CN**: 类似 python http.server 的目录列表
   */
  export const opt_serve_ftp: string;
  /**
   * - 🚩 **en**: Frontend app monitoring (auto integrate snippet on html files)
   * - **zh-CN**: 前端应用监控（自动在 html 文件中集成代码片段）
   */
  export const opt_serve_monitor: string;
  /**
   * - 🚩 **en**: Specify port to listen to
   * - **zh-CN**: 指定监听端口
   */
  export const opt_serve_port: string;
  /**
   * - 🚩 **en**: Always serving index.html on inexistant sub path
   * - **zh-CN**: 在不存在子路径时始终提供 index.html
   */
  export const opt_serve_spa: string;
  /**
   * - 🚩 **en**: Define service name when generating startup script
   * - **zh-CN**: 生成启动脚本时指定服务名
   */
  export const opt_service_name: string;
  /**
   * - 🚩 **en**: Shutdown an application with process.send('shutdown') instead of process.kill(pid, SIGINT)
   * - **zh-CN**: 通过 process.send('shutdown') 而非 process.kill(pid, SIGINT) 关闭应用
   */
  export const opt_shutdown_with_message: string;
  /**
   * - 🚩 **en**: Hide all messages
   * - **zh-CN**: 隐藏所有消息
   */
  export const opt_silent: string;
  /**
   * - 🚩 **en**: Sort process according to field's name
   * - **zh-CN**: 按指定字段排序进程
   */
  export const opt_sort: string;
  /**
   * - 🚩 **en**: Force source map support
   * - **zh-CN**: 强制启用 source map 支持
   */
  export const opt_source_map_support: string;
  /**
   * - 🚩 **en**: Start application in container mode
   * - **zh-CN**: 以容器模式启动应用
   */
  export const opt_start_container: string;
  /**
   * - 🚩 **en**: Run container in Daemon mode (debug purposes)
   * - **zh-CN**: 以守护模式运行容器（调试目的）
   */
  export const opt_start_daemon: string;
  /**
   * - 🚩 **en**: With --container; change local Dockerfile to containerize all files in current directory
   * - **zh-CN**: 配合 --container 使用；修改本地 Dockerfile 以容器化当前目录所有文件
   */
  export const opt_start_dist: string;
  /**
   * - 🚩 **en**: For debugging purpose
   * - **zh-CN**: 用于调试
   */
  export const opt_start_dockerdaemon: string;
  /**
   * - 🚩 **en**: Rebuild Dockerfile
   * - **zh-CN**: 重建 Dockerfile
   */
  export const opt_start_fresh: string;
  /**
   * - 🚩 **en**: With --dist; set the exported image name
   * - **zh-CN**: 配合 --dist 使用；设置导出的镜像名称
   */
  export const opt_start_image_name: string;
  /**
   * - 🚩 **en**: With --container, set a specific major Node.js version
   * - **zh-CN**: 配合 --container 使用，指定 Node.js 大版本
   */
  export const opt_start_node_version: string;
  /**
   * - 🚩 **en**: Watch folder for changes
   * - **zh-CN**: 监视文件夹变化
   */
  export const opt_start_watch: string;
  /**
   * - 🚩 **en**: Specify a list of exit codes that should skip automatic restart
   * - **zh-CN**: 指定应跳过自动重启的退出码列表
   */
  export const opt_stop_exit_codes: string;
  /**
   * - 🚩 **en**: Stop watching folder for changes
   * - **zh-CN**: 停止监视文件夹变化
   */
  export const opt_stop_watch: string;
  /**
   * - 🚩 **en**: Show as tree
   * - **zh-CN**: 以树状显示
   */
  export const opt_sysinfos_tree: string;
  /**
   * - 🚩 **en**: Enable time logging
   * - **zh-CN**: 启用时间记录
   */
  export const opt_time: string;
  /**
   * - 🚩 **en**: Enable transaction tracing with km
   * - **zh-CN**: 启用 km 事务追踪
   */
  export const opt_trace: string;
  /**
   * - 🚩 **en**: Run target script with uid rights
   * - **zh-CN**: 以 uid 权限运行目标脚本
   */
  export const opt_uid: string;
  /**
   * - 🚩 **en**: Force an update of the environment with restart/reload
   * - **zh-CN**: 重启/重载时强制刷新环境变量
   */
  export const opt_update_env: string;
  /**
   * - 🚩 **en**: Define user when generating startup script
   * - **zh-CN**: 生成启动脚本时指定用户
   */
  export const opt_user: string;
  /**
   * - 🚩 **en**: Enable v8 data collecting
   * - **zh-CN**: 启用 v8 数据收集
   */
  export const opt_v8: string;
  /**
   * - 🚩 **en**: Output the version number
   * - **zh-CN**: 输出版本号
   */
  export const opt_version: string;
  /**
   * - 🚩 **en**: Override systemd script to wait for full internet connectivity to launch pm2
   * - **zh-CN**: 覆盖 systemd 脚本以等待网络完全连通后再启动 pm2
   */
  export const opt_wait_ip: string;
  /**
   * - 🚩 **en**: Ask pm2 to wait for ready event from your app
   * - **zh-CN**: 要求 pm2 等待应用发出 ready 事件
   */
  export const opt_wait_ready: string;
  /**
   * - 🚩 **en**: Watch application folder for changes
   * - **zh-CN**: 监视应用目录变化
   */
  export const opt_watch: string;
  /**
   * - 🚩 **en**: Specify a restart delay after changing files (--watch-delay 4 (in sec) or 4000ms)
   * - **zh-CN**: 指定文件变化后的重启延迟（--watch-delay 4（秒）或 4000ms）
   */
  export const opt_watch_delay: string;
  /**
   * - 🚩 **en**: Watch only this file extensions
   * - **zh-CN**: 仅监视这些文件扩展名
   */
  export const opt_watch_ext: string;
  /**
   * - 🚩 **en**: Write configuration in local folder
   * - **zh-CN**: 将配置写入本地文件
   */
  export const opt_write: string;
  /**
   * - 🚩 **en**: All processes
   * - **zh-CN**: 所有进程
   */
  export const sugg_all: string;
  /**
   * - 🚩 **en**: Process id
   * - **zh-CN**: 进程 id
   */
  export const sugg_id: string;
}

declare module "virtual:i18n/pnpm" {
  /**
   * - 🚩 **en**: Installs a package and any packages that it depends on. By default, any new package is installed as a prod dependency
   * - **zh-CN**: 安装包及其依赖
   */
  export const cmd_add: string;
  /**
   * - 🚩 **en**: Checks for known security issues with the installed packages
   * - **zh-CN**: 检查已安装包的安全问题
   */
  export const cmd_audit: string;
  /**
   * - 🚩 **en**: Print the directory where pnpm will install executables
   * - **zh-CN**: 打印可执行文件安装目录
   */
  export const cmd_bin: string;
  /**
   * - 🚩 **en**: Prints the contents of a file based on the hash value stored in the index file
   * - **zh-CN**: 根据索引文件中的哈希值打印文件内容
   */
  export const cmd_catFile: string;
  /**
   * - 🚩 **en**: Prints the index file of a specific package from the store
   * - **zh-CN**: 打印存储中指定包的索引文件
   */
  export const cmd_catIndex: string;
  /**
   * - 🚩 **en**: Manage the pnpm configuration files
   * - **zh-CN**: 管理 pnpm 配置文件
   */
  export const cmd_config: string;
  /**
   * - 🚩 **en**: Remove the config key from the config file
   * - **zh-CN**: 删除配置键
   */
  export const cmd_config_delete: string;
  /**
   * - 🚩 **en**: Print the config value for the provided key
   * - **zh-CN**: 打印配置值
   */
  export const cmd_config_get: string;
  /**
   * - 🚩 **en**: Show all the config settings
   * - **zh-CN**: 显示所有配置
   */
  export const cmd_config_list: string;
  /**
   * - 🚩 **en**: Set the config key to the value provided
   * - **zh-CN**: 设置配置键值
   */
  export const cmd_config_set: string;
  /**
   * - 🚩 **en**: Creates a project from a `create-*` starter kit
   * - **zh-CN**: 从 create-* 模板创建项目
   */
  export const cmd_create: string;
  /**
   * - 🚩 **en**: Perform an install removing older dependencies in the lockfile if a newer version can be used
   * - **zh-CN**: 消除 lockfile 中的重复依赖
   */
  export const cmd_dedupe: string;
  /**
   * - 🚩 **en**: Run a package in a temporary environment
   * - **zh-CN**: 在临时环境中运行包
   */
  export const cmd_dlx: string;
  /**
   * - 🚩 **en**: Checks for known common issues
   * - **zh-CN**: 检查常见的已知问题
   */
  export const cmd_doctor: string;
  /**
   * - 🚩 **en**: Manage Node.js versions
   * - **zh-CN**: 管理 Node.js 版本
   */
  export const cmd_env: string;
  /**
   * - 🚩 **en**: Installs the specified version(s) of Node.js without activating them as the current version
   * - **zh-CN**: 安装指定版本 Node.js
   */
  export const cmd_env_add: string;
  /**
   * - 🚩 **en**: List Node.js versions available locally or remotely
   * - **zh-CN**: 列出本地或远程 Node.js 版本
   */
  export const cmd_env_list: string;
  /**
   * - 🚩 **en**: Removes the specified version(s) of Node.js
   * - **zh-CN**: 删除指定版本 Node.js
   */
  export const cmd_env_remove: string;
  /**
   * - 🚩 **en**: Installs the specified version of Node.js. The npm CLI bundled with the given Node.js version gets installed as well. This sets this version of Node.js as the current version
   * - **zh-CN**: 安装并切换 Node.js 版本
   */
  export const cmd_env_use: string;
  /**
   * - 🚩 **en**: Executes a shell command in scope of a project
   * - **zh-CN**: 在项目范围内执行 shell 命令
   */
  export const cmd_exec: string;
  /**
   * - 🚩 **en**: Fetch packages from a lockfile into virtual store, package manifest is ignored
   * - **zh-CN**: 从 lockfile 中获取包到虚拟 store
   */
  export const cmd_fetch: string;
  /**
   * - 🚩 **en**: Experimental! Lists the packages that include the file with the specified hash
   * - **zh-CN**: 实验性：列出包含指定哈希文件的包
   */
  export const cmd_findHash: string;
  /**
   * - 🚩 **en**: Generates pnpm-lock.yaml from an npm package-lock.json (or npm-shrinkwrap.json, yarn.lock) file
   * - **zh-CN**: 从 npm/yarn lockfile 生成 pnpm-lock.yaml
   */
  export const cmd_import: string;
  /**
   * - 🚩 **en**: Install all dependencies for a project
   * - **zh-CN**: 安装项目所有依赖
   */
  export const cmd_install: string;
  /**
   * - 🚩 **en**: Runs a `pnpm install` followed immediately by a `pnpm test`. It takes exactly the same arguments as `pnpm install`
   * - **zh-CN**: 运行 install 后立即执行 test
   */
  export const cmd_installTest: string;
  /**
   * - 🚩 **en**: Check licenses in consumed packages
   * - **zh-CN**: 检查已安装包的许可证
   */
  export const cmd_licenses: string;
  /**
   * - 🚩 **en**: Check the licenses of the installed packages
   * - **zh-CN**: 列出许可证信息
   */
  export const cmd_licenses_list: string;
  /**
   * - 🚩 **en**: Connect the local project to another one
   * - **zh-CN**: 将本地项目链接到另一个项目
   */
  export const cmd_link: string;
  /**
   * - 🚩 **en**: Print all the versions of packages that are installed, as well as their dependencies, in a tree-structure
   * - **zh-CN**: 以树状结构打印已安装包的版本
   */
  export const cmd_list: string;
  /**
   * - 🚩 **en**: Check for outdated packages
   * - **zh-CN**: 检查过时的包
   */
  export const cmd_outdated: string;
  /**
   * - 🚩 **en**: Create a tarball from a package
   * - **zh-CN**: 从包创建 tarball
   */
  export const cmd_pack: string;
  /**
   * - 🚩 **en**: Prepare a package for patching
   * - **zh-CN**: 准备修补包
   */
  export const cmd_patch: string;
  /**
   * - 🚩 **en**: Generate a patch out of a directory
   * - **zh-CN**: 从目录生成补丁
   */
  export const cmd_patchCommit: string;
  /**
   * - 🚩 **en**: Fast, disk space efficient package manager
   * - **zh-CN**: 快速、节省磁盘空间的包管理器
   */
  export const cmd_pnpm: string;
  /**
   * - 🚩 **en**: Removes extraneous packages
   * - **zh-CN**: 删除无关的包
   */
  export const cmd_prune: string;
  /**
   * - 🚩 **en**: Publishes a package to the registry
   * - **zh-CN**: 将包发布到注册表
   */
  export const cmd_publish: string;
  /**
   * - 🚩 **en**: Rebuild a package
   * - **zh-CN**: 重新构建包
   */
  export const cmd_rebuild: string;
  /**
   * - 🚩 **en**: Concurrently performs some actions in all subdirectories with a `package.json` (excluding node_modules). A `pnpm-workspace.yaml` file may be used to control what directories are searched for packages
   * - **zh-CN**: 在子目录或 workspace 中并发执行操作
   */
  export const cmd_recursive: string;
  /**
   * - 🚩 **en**: Removes packages from `node_modules` and from the project's `package.json`
   * - **zh-CN**: 删除包
   */
  export const cmd_remove: string;
  /**
   * - 🚩 **en**: Print the effective `node_modules` directory
   * - **zh-CN**: 打印有效的 node_modules 目录
   */
  export const cmd_root: string;
  /**
   * - 🚩 **en**: Runs a defined package script
   * - **zh-CN**: 运行定义在 package.json 中的脚本
   */
  export const cmd_run: string;
  /**
   * - 🚩 **en**: Manage a store server
   * - **zh-CN**: 管理 store 服务器
   */
  export const cmd_server: string;
  /**
   * - 🚩 **en**: Starts a service that does all interactions with the store. Other commands will delegate any store-related tasks to this service
   * - **zh-CN**: 启动 store 服务器
   */
  export const cmd_server_start: string;
  /**
   * - 🚩 **en**: Prints information about the running server
   * - **zh-CN**: 打印服务器信息
   */
  export const cmd_server_status: string;
  /**
   * - 🚩 **en**: Stops the store server
   * - **zh-CN**: 停止 store 服务器
   */
  export const cmd_server_stop: string;
  /**
   * - 🚩 **en**: Sets up pnpm
   * - **zh-CN**: 设置 pnpm
   */
  export const cmd_setup: string;
  /**
   * - 🚩 **en**: Runs an arbitrary command specified in the package's "start" property of its "scripts" object
   * - **zh-CN**: 运行包的 start 脚本
   */
  export const cmd_start: string;
  /**
   * - 🚩 **en**: Reads and performs actions on pnpm store that is on the current filesystem
   * - **zh-CN**: 读取和执行 store 操作
   */
  export const cmd_store: string;
  /**
   * - 🚩 **en**: Adds new packages to the pnpm store directly. Does not modify any projects or files outside the store
   * - **zh-CN**: 直接添加新包到 store
   */
  export const cmd_store_add: string;
  /**
   * - 🚩 **en**: Returns the path to the active store directory
   * - **zh-CN**: 打印 store 目录路径
   */
  export const cmd_store_path: string;
  /**
   * - 🚩 **en**: Removes unreferenced (extraneous, orphan) packages from the store. Pruning the store is not harmful, but might slow down future installations
   * - **zh-CN**: 删除 store 中未引用的包
   */
  export const cmd_store_prune: string;
  /**
   * - 🚩 **en**: Checks for modified packages in the store. Returns exit code 0 if the content of the package is the same as it was at the time of unpacking
   * - **zh-CN**: 检查 store 中已修改的包
   */
  export const cmd_store_status: string;
  /**
   * - 🚩 **en**: Runs a package's "test" script, if one was provided
   * - **zh-CN**: 运行包的 test 脚本
   */
  export const cmd_test: string;
  /**
   * - 🚩 **en**: Removes the link created by `pnpm link` and reinstalls package if it is saved in `package.json`
   * - **zh-CN**: 取消链接包
   */
  export const cmd_unlink: string;
  /**
   * - 🚩 **en**: Updates packages to their latest version based on the specified range. You can use "*" in package name to update all packages with the same pattern
   * - **zh-CN**: 更新包到最新版本
   */
  export const cmd_update: string;
  /**
   * - 🚩 **en**: Shows the packages that depend on <pkg>
   * - **zh-CN**: 显示哪些包依赖于指定包
   */
  export const cmd_why: string;
  /**
   * - 🚩 **en**: Tells the registry whether this package should be published as public or restricted
   * - **zh-CN**: 包访问级别
   */
  export const opt_access: string;
  /**
   * - 🚩 **en**: Aggregate output from child processes that are run in parallel, and only print output when child process is finished. It makes reading large logs after running `pnpm recursive` with `--parallel` or with `--workspace-concurrency` much easier (especially on CI). Only `--reporter=append-only` is supported
   * - **zh-CN**: 聚合并行子进程的输出
   */
  export const opt_aggregateOutput: string;
  /**
   * - 🚩 **en**: A list of package names that are allowed to run postinstall scripts during installation
   * - **zh-CN**: 允许运行 postinstall 脚本的包名列表
   */
  export const opt_allowBuild: string;
  /**
   * - 🚩 **en**: Add overrides to the package.json file in order to force non-vulnerable versions of the dependencies
   * - **zh-CN**: 添加 override 修复漏洞
   */
  export const opt_auditFix: string;
  /**
   * - 🚩 **en**: Ignore a vulnerability by CVE
   * - **zh-CN**: 按 CVE 忽略漏洞
   */
  export const opt_auditIgnore: string;
  /**
   * - 🚩 **en**: Only print advisories with severity greater than or equal to one of the following: low|moderate|high|critical. Default: low
   * - **zh-CN**: 最低安全建议等级
   */
  export const opt_auditLevel: string;
  /**
   * - 🚩 **en**: Runs the server in the background
   * - **zh-CN**: 后台运行服务器
   */
  export const opt_background: string;
  /**
   * - 🚩 **en**: Defines files to ignore when filtering for changed projects since the specified commit/branch
   * - **zh-CN**: 过滤变更项目时忽略的文件
   */
  export const opt_changedFilesIgnorePattern: string;
  /**
   * - 🚩 **en**: Controls the number of child processes run parallelly to build node modules
   * - **zh-CN**: 并行构建 node_modules 的子进程数
   */
  export const opt_childConcurrency: string;
  /**
   * - 🚩 **en**: Controls colors in the output. By default, output is always colored when it goes directly to a terminal
   * - **zh-CN**: 控制输出颜色
   */
  export const opt_color: string;
  /**
   * - 🚩 **en**: Print only versions that satisfy specs in package.json
   * - **zh-CN**: 仅打印满足 package.json 规范的版本
   */
  export const opt_compatible: string;
  /**
   * - 🚩 **en**: Save the dependency to configurational dependencies
   * - **zh-CN**: 保存到 configurational dependencies
   */
  export const opt_configDep: string;
  /**
   * - 🚩 **en**: Check if running dedupe would result in changes without installing packages or editing the lockfile. Exits with a non-zero status code if changes are possible
   * - **zh-CN**: 检查执行 dedupe 是否会产生变更
   */
  export const opt_dedupeCheck: string;
  /**
   * - 🚩 **en**: Max display depth of the dependency tree
   * - **zh-CN**: 依赖树最大显示深度
   */
  export const opt_depth: string;
  /**
   * - 🚩 **en**: Only `devDependencies` are installed
   * - **zh-CN**: 仅处理 devDependencies
   */
  export const opt_dev: string;
  /**
   * - 🚩 **en**: Change to directory <dir>
   * - **zh-CN**: 切换到指定目录
   */
  export const opt_dir: string;
  /**
   * - 🚩 **en**: The package to install before running the command
   * - **zh-CN**: 运行命令前安装的包
   */
  export const opt_dlxPackage: string;
  /**
   * - 🚩 **en**: Does everything a publish would do except actually publishing to the registry
   * - **zh-CN**: 试运行模式
   */
  export const opt_dryRun: string;
  /**
   * - 🚩 **en**: The package that needs to be modified will be extracted to this directory
   * - **zh-CN**: 要修补的包提取到该目录
   */
  export const opt_editDir: string;
  /**
   * - 🚩 **en**: Exclude peer dependencies
   * - **zh-CN**: 排除 peer 依赖
   */
  export const opt_excludePeers: string;
  /**
   * - 🚩 **en**: If no projects are matched by the command, exit with exit code 1 (fail)
   * - **zh-CN**: 无匹配项目时退出码 1
   */
  export const opt_failIfNoMatch: string;
  /**
   * - 🚩 **en**: Restricts the scope to package names matching the given pattern. E.g.: foo, "@bar/*"
   * - **zh-CN**: 按包名模式过滤范围
   */
  export const opt_filter: string;
  /**
   * - 🚩 **en**: Restricts the scope to package names matching the given pattern similar to --filter, but it ignores devDependencies when searching for dependencies and dependents
   * - **zh-CN**: 类似 --filter 但忽略 devDependencies
   */
  export const opt_filterProd: string;
  /**
   * - 🚩 **en**: Fix broken lockfile entries automatically
   * - **zh-CN**: 自动修复损坏的 lockfile
   */
  export const opt_fixLockfile: string;
  /**
   * - 🚩 **en**: Force reinstall dependencies: refetch packages modified in store, recreate a lockfile and/or modules directory created by a non-compatible version of pnpm. Install all optionalDependencies even they don't satisfy the current environment(cpu, os, arch)
   * - **zh-CN**: 强制重新安装依赖
   */
  export const opt_force: string;
  /**
   * - 🚩 **en**: Don't generate a lockfile and fail if an update is needed. This setting is on by default in CI environments, so use --no-frozen-lockfile if you need to disable it for some reason
   * - **zh-CN**: 不生成 lockfile，更新时报错
   */
  export const opt_frozenLockfile: string;
  /**
   * - 🚩 **en**: Install as a global package
   * - **zh-CN**: 全局操作
   */
  export const opt_global: string;
  /**
   * - 🚩 **en**: Specify a custom directory to store global packages
   * - **zh-CN**: 指定全局包存储目录
   */
  export const opt_globalDir: string;
  /**
   * - 🚩 **en**: Output usage information
   * - **zh-CN**: 输出使用信息
   */
  export const opt_help: string;
  /**
   * - 🚩 **en**: Hoist all dependencies matching the pattern to `node_modules/.pnpm/node_modules`. The default pattern is * and matches everything. Hoisted packages can be required by any dependencies, so it is an emulation of a flat node_modules
   * - **zh-CN**: 提升依赖匹配到 node_modules/.pnpm
   */
  export const opt_hoistPattern: string;
  /**
   * - 🚩 **en**: Avoid exiting with a non-zero exit code when the script is undefined
   * - **zh-CN**: 脚本未定义时也不报错
   */
  export const opt_ifPresent: string;
  /**
   * - 🚩 **en**: Ignore existing patch files when patching
   * - **zh-CN**: 修补时忽略已有补丁文件
   */
  export const opt_ignoreExisting: string;
  /**
   * - 🚩 **en**: Disable pnpm hooks defined in .pnpmfile.cjs
   * - **zh-CN**: 禁用 .pnpmfile.cjs 钩子
   */
  export const opt_ignorePnpmfile: string;
  /**
   * - 🚩 **en**: Use exit code 0 if the registry responds with an error. Useful when audit checks are used in CI. A build should fail because the registry has issues
   * - **zh-CN**: 注册表报错时仍用退出码 0
   */
  export const opt_ignoreRegistryErrors: string;
  /**
   * - 🚩 **en**: Don't run lifecycle scripts
   * - **zh-CN**: 不运行生命周期脚本
   */
  export const opt_ignoreScripts: string;
  /**
   * - 🚩 **en**: Disallows stopping the server using `pnpm server stop`
   * - **zh-CN**: 禁止通过 pnpm server stop 停止
   */
  export const opt_ignoreStopRequests: string;
  /**
   * - 🚩 **en**: Ignore all CVEs with no resolution
   * - **zh-CN**: 忽略所有无法修复的 CVE
   */
  export const opt_ignoreUnfixable: string;
  /**
   * - 🚩 **en**: Disallows creating new side effect cache during install
   * - **zh-CN**: 禁止在安装时创建 side effect 缓存
   */
  export const opt_ignoreUploadRequests: string;
  /**
   * - 🚩 **en**: Ignore pnpm-workspace.yaml if exists in the parent directory, and treat the installation as normal non-workspace installation
   * - **zh-CN**: 忽略 pnpm-workspace.yaml
   */
  export const opt_ignoreWorkspace: string;
  /**
   * - 🚩 **en**: When executing commands recursively in a workspace, execute them on the root workspace project as well
   * - **zh-CN**: 包含根 workspace 项目
   */
  export const opt_includeWorkspaceRoot: string;
  /**
   * - 🚩 **en**: Show outdated dependencies and select which ones to update
   * - **zh-CN**: 交互式选择要更新的包
   */
  export const opt_interactive: string;
  /**
   * - 🚩 **en**: Show information in JSON format
   * - **zh-CN**: 以 JSON 格式输出
   */
  export const opt_json: string;
  /**
   * - 🚩 **en**: Ignore version ranges in package.json
   * - **zh-CN**: 忽略 package.json 中的版本范围
   */
  export const opt_latest: string;
  /**
   * - 🚩 **en**: Locally available packages are linked to node_modules instead of being downloaded from the registry. Convenient to use in a multi-package repository
   * - **zh-CN**: 本地可用包链接到 node_modules
   */
  export const opt_linkWorkspacePackages: string;
  /**
   * - 🚩 **en**: When set to "project", the .npmrc file at the nearest package.json will be used. If no .npmrc file is present in the directory, the setting will be written to a pnpm-workspace.yaml file
   * - **zh-CN**: 配置位置
   */
  export const opt_location: string;
  /**
   * - 🚩 **en**: Enable/disable lock
   * - **zh-CN**: 启用/禁用锁
   */
  export const opt_lock: string;
  /**
   * - 🚩 **en**: The directory in which the pnpm-lock.yaml of the package will be created. Several projects may share a single lockfile
   * - **zh-CN**: pnpm-lock.yaml 创建目录
   */
  export const opt_lockfileDir: string;
  /**
   * - 🚩 **en**: Dependencies are not downloaded. Only `pnpm-lock.yaml` is updated
   * - **zh-CN**: 仅更新 pnpm-lock.yaml，不下载依赖
   */
  export const opt_lockfileOnly: string;
  /**
   * - 🚩 **en**: What level of logs to report. Any logs at or higher than the given level will be shown. Levels (lowest to highest): debug, info, warn, error. Or use "--silent" to turn off all logging
   * - **zh-CN**: 设置日志级别：debug, info, warn, error
   */
  export const opt_loglevel: string;
  /**
   * - 🚩 **en**: Show extended information
   * - **zh-CN**: 显示详细信息
   */
  export const opt_long: string;
  /**
   * - 🚩 **en**: Merge lockfiles were generated on git branch
   * - **zh-CN**: 合并 git 分支生成的 lockfile
   */
  export const opt_mergeGitBranchLockfiles: string;
  /**
   * - 🚩 **en**: The directory in which dependencies will be installed (instead of node_modules)
   * - **zh-CN**: 依赖安装目录
   */
  export const opt_modulesDir: string;
  /**
   * - 🚩 **en**: Maximum number of concurrent network requests
   * - **zh-CN**: 最大并发网络请求数
   */
  export const opt_networkConcurrency: string;
  /**
   * - 🚩 **en**: Continues executing other tasks even if a task threw an error
   * - **zh-CN**: 出错后继续执行
   */
  export const opt_noBail: string;
  /**
   * - 🚩 **en**: Don't check if current branch is your publish branch, clean, and up to date
   * - **zh-CN**: 不检查 git 分支
   */
  export const opt_noGitChecks: string;
  /**
   * - 🚩 **en**: Dependencies inside the modules directory will have access only to their listed dependencies
   * - **zh-CN**: 依赖只能访问自身声明的依赖
   */
  export const opt_noHoist: string;
  /**
   * - 🚩 **en**: Don't read or generate a `pnpm-lock.yaml` file
   * - **zh-CN**: 不读取或生成 pnpm-lock.yaml
   */
  export const opt_noLockfile: string;
  /**
   * - 🚩 **en**: Don't display packages from `optionalDependencies`
   * - **zh-CN**: 不处理 optionalDependencies
   */
  export const opt_noOptional: string;
  /**
   * - 🚩 **en**: Prints the outdated packages in a list. Good for small consoles
   * - **zh-CN**: 以列表形式打印
   */
  export const opt_noTable: string;
  /**
   * - 🚩 **en**: Trigger an error if any required dependencies are not available in local store
   * - **zh-CN**: 离线模式下报错
   */
  export const opt_offline: string;
  /**
   * - 🚩 **en**: Display only dependencies that are also projects within the workspace
   * - **zh-CN**: 仅显示 workspace 内的项目依赖
   */
  export const opt_onlyProjects: string;
  /**
   * - 🚩 **en**: Skip reinstall if the workspace state is up-to-date
   * - **zh-CN**: 跳过最新状态的重复安装
   */
  export const opt_optimisticRepeatInstall: string;
  /**
   * - 🚩 **en**: When publishing packages that require two-factor authentication, this option can specify a one-time password
   * - **zh-CN**: 一次性密码（两步验证）
   */
  export const opt_otp: string;
  /**
   * - 🚩 **en**: Customizes the output path for the tarball. Use `%s` and `%v` to include the package name and version, e.g., `%s.tgz` or `some-dir/%s-%v.tgz`. By default, the tarball is saved in the current working directory with the name `<package-name>-<version>.tgz`
   * - **zh-CN**: 自定义 tarball 输出路径
   */
  export const opt_out: string;
  /**
   * - 🚩 **en**: Prints the outdated dependencies in the given format. Default is "table". Supported options: "table, list, json"
   * - **zh-CN**: 过时依赖的输出格式
   */
  export const opt_outdatedFormat: string;
  /**
   * - 🚩 **en**: Directory in which `pnpm pack` will save tarballs. The default is the current working directory
   * - **zh-CN**: tarball 保存目录
   */
  export const opt_packDestination: string;
  /**
   * - 🚩 **en**: Clones/hardlinks or copies packages. The selected method depends from the file system
   * - **zh-CN**: 包导入方式
   */
  export const opt_packageImportMethod: string;
  /**
   * - 🚩 **en**: Show parseable output instead of tree view
   * - **zh-CN**: 以可解析格式输出
   */
  export const opt_parseable: string;
  /**
   * - 🚩 **en**: The generated patch file will be saved to this directory
   * - **zh-CN**: 补丁文件保存目录
   */
  export const opt_patchesDir: string;
  /**
   * - 🚩 **en**: Rebuild packages that were not build during installation. Packages are not build when installing with the --ignore-scripts flag
   * - **zh-CN**: 重建安装时未构建的包
   */
  export const opt_pending: string;
  /**
   * - 🚩 **en**: The port number to use, when TCP is used for communication
   * - **zh-CN**: TCP 通信端口
   */
  export const opt_port: string;
  /**
   * - 🚩 **en**: If the available `pnpm-lock.yaml` satisfies the `package.json` then perform a headless installation
   * - **zh-CN**: 满足条件时执行 headless 安装
   */
  export const opt_preferFrozenLockfile: string;
  /**
   * - 🚩 **en**: Skip staleness checks for cached data, but request missing data from the server
   * - **zh-CN**: 优先使用缓存数据
   */
  export const opt_preferOffline: string;
  /**
   * - 🚩 **en**: Packages in `devDependencies` won't be installed
   * - **zh-CN**: 仅处理 dependencies 和 optionalDependencies
   */
  export const opt_prod: string;
  /**
   * - 🚩 **en**: The communication protocol used by the server
   * - **zh-CN**: 服务器通信协议
   */
  export const opt_protocol: string;
  /**
   * - 🚩 **en**: Hoist all dependencies matching the pattern to the root of the modules directory
   * - **zh-CN**: 提升模式匹配到根 node_modules
   */
  export const opt_publicHoistPattern: string;
  /**
   * - 🚩 **en**: Sets branch name to publish. Default is master
   * - **zh-CN**: 发布分支名
   */
  export const opt_publishBranch: string;
  /**
   * - 🚩 **en**: Run the command for each project in the workspace
   * - **zh-CN**: 递归执行命令
   */
  export const opt_recursive: string;
  /**
   * - 🚩 **en**: List the remote versions of Node.js
   * - **zh-CN**: 列出远程 Node.js 版本
   */
  export const opt_remote: string;
  /**
   * - 🚩 **en**: Save the execution results of every package to "pnpm-exec-summary.json". Useful to inspect the execution time and status of each package
   * - **zh-CN**: 保存执行结果到摘要 JSON
   */
  export const opt_reportSummary: string;
  /**
   * - 🚩 **en**: The output is always appended to the end. No cursor manipulations are performed
   * - **zh-CN**: 输出格式
   */
  export const opt_reporter: string;
  /**
   * - 🚩 **en**: Hide project name prefix from output of running scripts. Useful when running in CI like GitHub Actions and the output from a script may create an annotation
   * - **zh-CN**: 隐藏输出中的项目名前缀
   */
  export const opt_reporterHidePrefix: string;
  /**
   * - 🚩 **en**: Re-runs resolution: useful for printing out peer dependency issues
   * - **zh-CN**: 仅重新解析依赖
   */
  export const opt_resolutionOnly: string;
  /**
   * - 🚩 **en**: Command executed from given package
   * - **zh-CN**: 从指定包开始执行命令
   */
  export const opt_resumeFrom: string;
  /**
   * - 🚩 **en**: Reverse the order that packages get ordered in. Disabled by default
   * - **zh-CN**: 反转包顺序
   */
  export const opt_reverse: string;
  /**
   * - 🚩 **en**: Completely disregard concurrency and topological sorting, running a given script immediately in all matching packages with prefixed streaming output. This is the preferred flag for long-running processes such as watch run over many packages
   * - **zh-CN**: 完全忽略并发和拓扑排序立即运行
   */
  export const opt_runParallel: string;
  /**
   * - 🚩 **en**: Save package to the default catalog
   * - **zh-CN**: 保存包到默认目录
   */
  export const opt_saveCatalog: string;
  /**
   * - 🚩 **en**: Save package to the specified catalog
   * - **zh-CN**: 保存包到指定目录
   */
  export const opt_saveCatalogName: string;
  /**
   * - 🚩 **en**: Save package to your `devDependencies`
   * - **zh-CN**: 保存到 devDependencies
   */
  export const opt_saveDev: string;
  /**
   * - 🚩 **en**: Install exact version
   * - **zh-CN**: 安装精确版本
   */
  export const opt_saveExact: string;
  /**
   * - 🚩 **en**: Save package to your `optionalDependencies`
   * - **zh-CN**: 保存到 optionalDependencies
   */
  export const opt_saveOptional: string;
  /**
   * - 🚩 **en**: Save package to your `peerDependencies` and `devDependencies`
   * - **zh-CN**: 保存到 peerDependencies
   */
  export const opt_savePeer: string;
  /**
   * - 🚩 **en**: Save package to your `dependencies`. The default behavior
   * - **zh-CN**: 保存到 dependencies
   */
  export const opt_saveProd: string;
  /**
   * - 🚩 **en**: Save packages from the workspace with a "workspace:" protocol. True by default
   * - **zh-CN**: 从 workspace 包使用 workspace: 协议
   */
  export const opt_saveWorkspaceProtocol: string;
  /**
   * - 🚩 **en**: Run the specified scripts one by one
   * - **zh-CN**: 按顺序运行脚本
   */
  export const opt_sequential: string;
  /**
   * - 🚩 **en**: Override the PNPM_HOME env variable in case it already exists
   * - **zh-CN**: 覆盖已有的 PNPM_HOME 环境变量
   */
  export const opt_setupForce: string;
  /**
   * - 🚩 **en**: All the subdeps will be hoisted into the root node_modules. Your code will have access to them
   * - **zh-CN**: 所有子依赖提升到根 node_modules
   */
  export const opt_shamefullyHoist: string;
  /**
   * - 🚩 **en**: Creates a single pnpm-lock.yaml file in the root of the workspace. A shared lockfile also means that all dependencies of all projects will be in a single node_modules
   * - **zh-CN**: 在 workspace 根目录创建共享 lockfile
   */
  export const opt_sharedWorkspaceLockfile: string;
  /**
   * - 🚩 **en**: Runs the script inside of a shell. Uses /bin/sh on UNIX and \cmd.exe on Windows
   * - **zh-CN**: 在 shell 中运行脚本
   */
  export const opt_shellMode: string;
  /**
   * - 🚩 **en**: Use or cache the results of (pre/post)install hooks
   * - **zh-CN**: 使用或缓存 pre/postinstall 钩子结果
   */
  export const opt_sideEffectsCache: string;
  /**
   * - 🚩 **en**: Only use the side effects cache if present, do not create it for new packages
   * - **zh-CN**: 只读使用 side effects 缓存
   */
  export const opt_sideEffectsCacheReadonly: string;
  /**
   * - 🚩 **en**: No output is logged to the console, not even fatal errors
   * - **zh-CN**: 不输出任何日志
   */
  export const opt_silent: string;
  /**
   * - 🚩 **en**: Sort packages topologically (dependencies before dependents). Pass --no-sort to disable
   * - **zh-CN**: 按拓扑排序包
   */
  export const opt_sort: string;
  /**
   * - 🚩 **en**: Specify the sorting method. Currently only `name` is supported
   * - **zh-CN**: 排序方式
   */
  export const opt_sortBy: string;
  /**
   * - 🚩 **en**: The directory in which all the packages are saved on the disk
   * - **zh-CN**: 包在磁盘上的存储目录
   */
  export const opt_storeDir: string;
  /**
   * - 🚩 **en**: Stream output from child processes immediately, prefixed with the originating package directory. This allows output from different packages to be interleaved
   * - **zh-CN**: 立即流式输出子进程结果
   */
  export const opt_stream: string;
  /**
   * - 🚩 **en**: Fail on missing or invalid peer dependencies
   * - **zh-CN**: 缺少或不匹配的 peer 依赖时报错
   */
  export const opt_strictPeerDependencies: string;
  /**
   * - 🚩 **en**: Registers the published package with the given tag. By default, the "latest" tag is used
   * - **zh-CN**: 发布标签
   */
  export const opt_tag: string;
  /**
   * - 🚩 **en**: Defines files related to tests. Useful with the changed since filter. When selecting only changed packages and their dependent packages, the dependent packages will be ignored in case a package has changes only in tests
   * - **zh-CN**: 定义与测试相关的文件
   */
  export const opt_testPattern: string;
  /**
   * - 🚩 **en**: How deep should levels of dependencies be inspected. Infinity is default. 0 would mean top-level dependencies only
   * - **zh-CN**: 更新依赖的深度
   */
  export const opt_updateDepth: string;
  /**
   * - 🚩 **en**: Only allows installation with a store server. If no store server is running, installation will fail
   * - **zh-CN**: 仅允许配合运行中的 store 服务器安装
   */
  export const opt_useRunningStoreServer: string;
  /**
   * - 🚩 **en**: Divert all output to stderr
   * - **zh-CN**: 将所有输出重定向到 stderr
   */
  export const opt_useStderr: string;
  /**
   * - 🚩 **en**: Starts a store server in the background. The store server will keep running after installation is done. To stop the store server, run `pnpm server stop`
   * - **zh-CN**: 启动后台 store 服务器
   */
  export const opt_useStoreServer: string;
  /**
   * - 🚩 **en**: If false, doesn't check whether packages in the store were mutated
   * - **zh-CN**: 检查 store 中包是否被修改
   */
  export const opt_verifyStoreIntegrity: string;
  /**
   * - 🚩 **en**: The directory with links to the store (default is node_modules/.pnpm). All direct and indirect dependencies of the project are linked into this directory
   * - **zh-CN**: 指向 store 的链接目录
   */
  export const opt_virtualStoreDir: string;
  /**
   * - 🚩 **en**: Only adds the new dependency if it is found in the workspace
   * - **zh-CN**: 仅当新依赖在 workspace 中时添加
   */
  export const opt_workspace: string;
  /**
   * - 🚩 **en**: Set the maximum number of concurrency. Default is 4. For unlimited concurrency use Infinity
   * - **zh-CN**: 最大并发数
   */
  export const opt_workspaceConcurrency: string;
  /**
   * - 🚩 **en**: Run the command on the root workspace project
   * - **zh-CN**: 在根 workspace 项目上运行命令
   */
  export const opt_workspaceRoot: string;
}

declare module "virtual:i18n/scoop" {
  /**
   * - 🚩 **en**: 32-bit architecture
   * - **zh-CN**: 32 位架构
   */
  export const arg_32bit: string;
  /**
   * - 🚩 **en**: 64-bit architecture
   * - **zh-CN**: 64 位架构
   */
  export const arg_64bit: string;
  /**
   * - 🚩 **en**: ARM64 architecture
   * - **zh-CN**: ARM64 架构
   */
  export const arg_arm64: string;
  /**
   * - 🚩 **en**: Update all apps
   * - **zh-CN**: 更新所有应用
   */
  export const arg_update_all: string;
  /**
   * - 🚩 **en**: Manage scoop aliases
   * - **zh-CN**: 管理别名
   */
  export const cmd_alias: string;
  /**
   * - 🚩 **en**: Add an alias
   * - **zh-CN**: 添加别名
   */
  export const cmd_alias_add: string;
  /**
   * - 🚩 **en**: List all aliases
   * - **zh-CN**: 列出所有别名
   */
  export const cmd_alias_list: string;
  /**
   * - 🚩 **en**: Remove an alias
   * - **zh-CN**: 删除别名
   */
  export const cmd_alias_rm: string;
  /**
   * - 🚩 **en**: Manage Scoop buckets
   * - **zh-CN**: 管理 bucket
   */
  export const cmd_bucket: string;
  /**
   * - 🚩 **en**: Add a new bucket
   * - **zh-CN**: 添加新 bucket
   */
  export const cmd_bucket_add: string;
  /**
   * - 🚩 **en**: List known buckets
   * - **zh-CN**: 列出已知 bucket
   */
  export const cmd_bucket_known: string;
  /**
   * - 🚩 **en**: List all buckets
   * - **zh-CN**: 列出所有 bucket
   */
  export const cmd_bucket_list: string;
  /**
   * - 🚩 **en**: Remove a bucket
   * - **zh-CN**: 删除 bucket
   */
  export const cmd_bucket_rm: string;
  /**
   * - 🚩 **en**: Show or clear the download cache
   * - **zh-CN**: 管理下载缓存
   */
  export const cmd_cache: string;
  /**
   * - 🚩 **en**: Remove cached downloads
   * - **zh-CN**: 移除缓存
   */
  export const cmd_cache_rm: string;
  /**
   * - 🚩 **en**: Show cache contents
   * - **zh-CN**: 显示缓存内容
   */
  export const cmd_cache_show: string;
  /**
   * - 🚩 **en**: Show content of specified manifest
   * - **zh-CN**: 显示指定清单的内容
   */
  export const cmd_cat: string;
  /**
   * - 🚩 **en**: Check for potential problems
   * - **zh-CN**: 检查潜在问题
   */
  export const cmd_checkup: string;
  /**
   * - 🚩 **en**: Cleanup apps by removing old versions
   * - **zh-CN**: 清理旧版本
   */
  export const cmd_cleanup: string;
  /**
   * - 🚩 **en**: Get or set configuration values
   * - **zh-CN**: 获取或设置配置值
   */
  export const cmd_config: string;
  /**
   * - 🚩 **en**: Remove a configuration setting
   * - **zh-CN**: 删除配置项
   */
  export const cmd_config_rm: string;
  /**
   * - 🚩 **en**: Create a custom app manifest
   * - **zh-CN**: 创建自定义应用清单
   */
  export const cmd_create: string;
  /**
   * - 🚩 **en**: List dependencies for an app
   * - **zh-CN**: 列出应用的依赖项
   */
  export const cmd_depends: string;
  /**
   * - 🚩 **en**: Download apps in the cache folder and verify hashes
   * - **zh-CN**: 下载应用到缓存并验证哈希
   */
  export const cmd_download: string;
  /**
   * - 🚩 **en**: Exports installed apps, buckets in JSON format
   * - **zh-CN**: 导出已安装的应用和 bucket 为 JSON
   */
  export const cmd_export: string;
  /**
   * - 🚩 **en**: Show help for a command
   * - **zh-CN**: 显示命令帮助
   */
  export const cmd_help: string;
  /**
   * - 🚩 **en**: Hold an app to disable updates
   * - **zh-CN**: 锁定应用以禁用更新
   */
  export const cmd_hold: string;
  /**
   * - 🚩 **en**: Opens the app homepage
   * - **zh-CN**: 打开应用主页
   */
  export const cmd_home: string;
  /**
   * - 🚩 **en**: Imports apps, buckets and configs from a Scoopfile
   * - **zh-CN**: 从 Scoopfile 导入应用、bucket 和配置
   */
  export const cmd_import: string;
  /**
   * - 🚩 **en**: Display information about an app
   * - **zh-CN**: 显示应用信息
   */
  export const cmd_info: string;
  /**
   * - 🚩 **en**: Install apps
   * - **zh-CN**: 安装应用
   */
  export const cmd_install: string;
  /**
   * - 🚩 **en**: List installed apps
   * - **zh-CN**: 列出已安装的应用
   */
  export const cmd_list: string;
  /**
   * - 🚩 **en**: Returns the path to the specified app
   * - **zh-CN**: 返回指定应用的路径
   */
  export const cmd_prefix: string;
  /**
   * - 🚩 **en**: Reset an app to resolve conflicts
   * - **zh-CN**: 重置应用以解决冲突
   */
  export const cmd_reset: string;
  /**
   * - 🚩 **en**: Scoop command-line installer — Windows package manager
   * - **zh-CN**: Scoop 命令行安装程序 — Windows 包管理器
   */
  export const cmd_scoop: string;
  /**
   * - 🚩 **en**: Search available apps
   * - **zh-CN**: 搜索可用应用
   */
  export const cmd_search: string;
  /**
   * - 🚩 **en**: Manipulate Scoop shims
   * - **zh-CN**: 管理 shim
   */
  export const cmd_shim: string;
  /**
   * - 🚩 **en**: Add a custom shim
   * - **zh-CN**: 添加自定义 shim
   */
  export const cmd_shim_add: string;
  /**
   * - 🚩 **en**: Alter a shim's target source
   * - **zh-CN**: 切换 shim 目标源
   */
  export const cmd_shim_alter: string;
  /**
   * - 🚩 **en**: Show shim information
   * - **zh-CN**: 显示 shim 信息
   */
  export const cmd_shim_info: string;
  /**
   * - 🚩 **en**: List all shims
   * - **zh-CN**: 列出所有 shim
   */
  export const cmd_shim_list: string;
  /**
   * - 🚩 **en**: Remove shims
   * - **zh-CN**: 删除 shim
   */
  export const cmd_shim_rm: string;
  /**
   * - 🚩 **en**: Show status and check for new app versions
   * - **zh-CN**: 检查状态和更新
   */
  export const cmd_status: string;
  /**
   * - 🚩 **en**: Unhold an app to enable updates
   * - **zh-CN**: 解锁应用以启用更新
   */
  export const cmd_unhold: string;
  /**
   * - 🚩 **en**: Uninstall apps
   * - **zh-CN**: 卸载应用
   */
  export const cmd_uninstall: string;
  /**
   * - 🚩 **en**: Update apps, or Scoop itself
   * - **zh-CN**: 更新应用或 Scoop 自身
   */
  export const cmd_update: string;
  /**
   * - 🚩 **en**: Look for app's hash or url on virustotal.com
   * - **zh-CN**: 在 virustotal.com 上查找应用的哈希或 URL
   */
  export const cmd_virustotal: string;
  /**
   * - 🚩 **en**: Locate a shim/executable (similar to 'which' on Linux)
   * - **zh-CN**: 定位 shim/可执行文件路径
   */
  export const cmd_which: string;
  /**
   * - 🚩 **en**: Apply to all apps
   * - **zh-CN**: 应用于所有应用
   */
  export const opt_all: string;
  /**
   * - 🚩 **en**: Use the specified architecture (32bit|64bit|arm64)
   * - **zh-CN**: 使用指定架构 (32bit|64bit|arm64)
   */
  export const opt_arch: string;
  /**
   * - 🚩 **en**: Remove outdated download cache
   * - **zh-CN**: 移除过期的下载缓存
   */
  export const opt_cache_clean: string;
  /**
   * - 🚩 **en**: Export the Scoop configuration file too
   * - **zh-CN**: 同时导出配置
   */
  export const opt_config: string;
  /**
   * - 🚩 **en**: Force execution
   * - **zh-CN**: 强制执行
   */
  export const opt_force: string;
  /**
   * - 🚩 **en**: Install/manipulate globally
   * - **zh-CN**: 全局安装/操作
   */
  export const opt_global: string;
  /**
   * - 🚩 **en**: Show help
   * - **zh-CN**: 显示帮助信息
   */
  export const opt_help: string;
  /**
   * - 🚩 **en**: Don't install dependencies automatically
   * - **zh-CN**: 不自动安装依赖
   */
  export const opt_independent: string;
  /**
   * - 🚩 **en**: Check locally only, disable remote fetching
   * - **zh-CN**: 仅检查本地应用，不远程获取
   */
  export const opt_local: string;
  /**
   * - 🚩 **en**: Don't use the download cache
   * - **zh-CN**: 不使用下载缓存
   */
  export const opt_no_cache: string;
  /**
   * - 🚩 **en**: Do not check dependencies
   * - **zh-CN**: 不检查依赖
   */
  export const opt_no_depends: string;
  /**
   * - 🚩 **en**: Don't update Scoop before installing if it's outdated
   * - **zh-CN**: 如果过期，不先更新 Scoop
   */
  export const opt_no_update_scoop: string;
  /**
   * - 🚩 **en**: Return reports as objects
   * - **zh-CN**: 返回报告作为对象
   */
  export const opt_passthru: string;
  /**
   * - 🚩 **en**: Remove all persistent data
   * - **zh-CN**: 删除所有持久化数据
   */
  export const opt_purge: string;
  /**
   * - 🚩 **en**: Hide extraneous messages
   * - **zh-CN**: 隐藏多余消息
   */
  export const opt_quiet: string;
  /**
   * - 🚩 **en**: Send download URL for analysis
   * - **zh-CN**: 上传 URL 以进行分析
   */
  export const opt_scan: string;
  /**
   * - 🚩 **en**: Skip hash validation (use with caution!)
   * - **zh-CN**: 跳过哈希验证（慎用！）
   */
  export const opt_skip_hash_check: string;
  /**
   * - 🚩 **en**: Show full paths and URLs
   * - **zh-CN**: 显示完整路径和 URL
   */
  export const opt_verbose: string;
  /**
   * - 🚩 **en**: Show version information
   * - **zh-CN**: 显示版本信息
   */
  export const opt_version: string;
}

declare module "virtual:i18n/sugg" {
  /**
   * - 🚩 **en**: List all cached top-level commands
   * - **zh-CN**: 列出所有已缓存的顶级命令
   */
  export const commands_desc: string;
  /**
   * - 🚩 **en**: Run shell completion against the local cache
   * - **zh-CN**: 基于本地缓存运行 Shell 补全
   */
  export const complete_desc: string;
  /**
   * - 🚩 **en**: Shell completion engine
   * - **zh-CN**: Shell 自动补全引擎
   */
  export const desc: string;
  /**
   * - 🚩 **en**: Development utilities
   * - **zh-CN**: 开发工具
   */
  export const dev_desc: string;
  /**
   * - 🚩 **en**: Generate i18n.d.ts type declarations from translation files
   * - **zh-CN**: 从翻译文件生成 i18n.d.ts 类型声明
   */
  export const dev_i18n_desc: string;
  /**
   * - 🚩 **en**: Initialize workspace: write types, guides, and tsconfig
   * - **zh-CN**: 初始化工作区：写出类型定义、指南和 tsconfig
   */
  export const dev_init_desc: string;
  /**
   * - 🚩 **en**: Watch completions directory and automatically rebuild on changes
   * - **zh-CN**: 监听补全脚本目录并自动重新构建
   */
  export const dev_watch_desc: string;
  /**
   * - 🚩 **en**: Print this message or the help of the given subcommand
   * - **zh-CN**: 打印此帮助或指定子命令的帮助
   */
  export const help_desc: string;
  /**
   * - 🚩 **en**: Print shell integration script
   * - **zh-CN**: 打印 Shell 集成脚本
   */
  export const init_desc: string;
  /**
   * - 🚩 **en**: Install completion scripts from registry
   * - **zh-CN**: 从 registry 安装补全脚本
   */
  export const install_desc: string;
  /**
   * - 🚩 **en**: Install all available scripts
   * - **zh-CN**: 安装所有可用脚本
   */
  export const opt_all: string;
  /**
   * - 🚩 **en**: Override cache directory
   * - **zh-CN**: 覆盖缓存目录
   */
  export const opt_cache_dir: string;
  /**
   * - 🚩 **en**: Path to completions directory
   * - **zh-CN**: 补全脚本目录路径
   */
  export const opt_completions_dir: string;
  /**
   * - 🚩 **en**: Dump compiled JS bundles to directory
   * - **zh-CN**: 将编译后的 JS bundle 导出到指定目录
   */
  export const opt_dump_dynamic: string;
  /**
   * - 🚩 **en**: Force overwrite existing files
   * - **zh-CN**: 强制覆盖已有文件
   */
  export const opt_force: string;
  /**
   * - 🚩 **en**: Print help
   * - **zh-CN**: 打印帮助
   */
  export const opt_help: string;
  /**
   * - 🚩 **en**: Language for i18n (e.g. en, zh)
   * - **zh-CN**: i18n 语言（如 en、zh）
   */
  export const opt_lang: string;
  /**
   * - 🚩 **en**: List all available scripts
   * - **zh-CN**: 列出所有可用脚本
   */
  export const opt_list: string;
  /**
   * - 🚩 **en**: Max results to return
   * - **zh-CN**: 最大返回结果数
   */
  export const opt_max_results: string;
  /**
   * - 🚩 **en**: Print version
   * - **zh-CN**: 打印版本
   */
  export const opt_version: string;
  /**
   * - 🚩 **en**: Build completion cache from scripts
   * - **zh-CN**: 从脚本构建补全缓存
   */
  export const reload_desc: string;
  /**
   * - 🚩 **en**: Self-upgrade to the latest release
   * - **zh-CN**: 自升级到最新版本
   */
  export const upgrade_desc: string;
}

declare module "virtual:i18n/vp" {
  /**
   * - 🚩 **en**: Allowed build scripts
   * - **zh-CN**: 允许的构建脚本
   */
  export const add_opt_allow_build: string;
  /**
   * - 🚩 **en**: Default catalog
   * - **zh-CN**: 默认 catalog
   */
  export const add_opt_catalog: string;
  /**
   * - 🚩 **en**: Catalog name
   * - **zh-CN**: catalog 名称
   */
  export const add_opt_catalog_name: string;
  /**
   * - 🚩 **en**: Parallel installs
   * - **zh-CN**: 并行安装数
   */
  export const add_opt_concurrency: string;
  /**
   * - 🚩 **en**: Node.js version
   * - **zh-CN**: Node.js 版本
   */
  export const add_opt_node: string;
  /**
   * - 🚩 **en**: Save to devDependencies
   * - **zh-CN**: 保存到 devDependencies
   */
  export const add_opt_save_dev: string;
  /**
   * - 🚩 **en**: Save exact version
   * - **zh-CN**: 保存确切版本
   */
  export const add_opt_save_exact: string;
  /**
   * - 🚩 **en**: Save to optionalDependencies
   * - **zh-CN**: 保存到 optionalDependencies
   */
  export const add_opt_save_optional: string;
  /**
   * - 🚩 **en**: Save to peerDependencies
   * - **zh-CN**: 保存到 peerDependencies
   */
  export const add_opt_save_peer: string;
  /**
   * - 🚩 **en**: Save to dependencies
   * - **zh-CN**: 保存到 dependencies
   */
  export const add_opt_save_prod: string;
  /**
   * - 🚩 **en**: Workspace only
   * - **zh-CN**: 仅工作区
   */
  export const add_opt_workspace: string;
  /**
   * - 🚩 **en**: Config file
   * - **zh-CN**: 配置文件
   */
  export const build_opt_config: string;
  /**
   * - 🚩 **en**: Minification
   * - **zh-CN**: 压缩方式
   */
  export const build_opt_minify: string;
  /**
   * - 🚩 **en**: Env mode
   * - **zh-CN**: 环境模式
   */
  export const build_opt_mode: string;
  /**
   * - 🚩 **en**: Output directory
   * - **zh-CN**: 输出目录
   */
  export const build_opt_outdir: string;
  /**
   * - 🚩 **en**: Source maps
   * - **zh-CN**: Source map
   */
  export const build_opt_sourcemap: string;
  /**
   * - 🚩 **en**: Transpile target
   * - **zh-CN**: 编译目标
   */
  export const build_opt_target: string;
  /**
   * - 🚩 **en**: Watch mode
   * - **zh-CN**: 监听模式
   */
  export const build_opt_watch: string;
  /**
   * - 🚩 **en**: Clean up all the cache
   * - **zh-CN**: 清理所有缓存
   */
  export const cache_cmd_clean: string;
  /**
   * - 🚩 **en**: Auto-fix issues
   * - **zh-CN**: 自动修复问题
   */
  export const check_opt_fix: string;
  /**
   * - 🚩 **en**: No error on unmatched
   * - **zh-CN**: 不匹配时无错误
   */
  export const check_opt_no_error: string;
  /**
   * - 🚩 **en**: Skip format check
   * - **zh-CN**: 跳过格式检查
   */
  export const check_opt_no_fmt: string;
  /**
   * - 🚩 **en**: Skip lint
   * - **zh-CN**: 跳过 lint
   */
  export const check_opt_no_lint: string;
  /**
   * - 🚩 **en**: Add packages to dependencies
   * - **zh-CN**: 添加包到依赖
   */
  export const cmd_add: string;
  /**
   * - 🚩 **en**: Build for production
   * - **zh-CN**: 构建生产版本
   */
  export const cmd_build: string;
  /**
   * - 🚩 **en**: Manage the task cache
   * - **zh-CN**: 管理任务缓存
   */
  export const cmd_cache: string;
  /**
   * - 🚩 **en**: Run format, lint, and type checks
   * - **zh-CN**: 运行格式化、lint 和类型检查
   */
  export const cmd_check: string;
  /**
   * - 🚩 **en**: Configure hooks and agent integration
   * - **zh-CN**: 配置钩子和代理集成
   */
  export const cmd_config: string;
  /**
   * - 🚩 **en**: Create a new project from a template
   * - **zh-CN**: 从模板创建新项目
   */
  export const cmd_create: string;
  /**
   * - 🚩 **en**: Deduplicate dependencies
   * - **zh-CN**: 去重依赖
   */
  export const cmd_dedupe: string;
  /**
   * - 🚩 **en**: Run the development server
   * - **zh-CN**: 启动开发服务器
   */
  export const cmd_dev: string;
  /**
   * - 🚩 **en**: Execute a package binary without installing it
   * - **zh-CN**: 无需安装即可执行包命令
   */
  export const cmd_dlx: string;
  /**
   * - 🚩 **en**: Manage Node.js versions
   * - **zh-CN**: 管理 Node.js 版本
   */
  export const cmd_env: string;
  /**
   * - 🚩 **en**: Execute a command from local node_modules/.bin
   * - **zh-CN**: 从 node_modules/.bin 执行命令
   */
  export const cmd_exec: string;
  /**
   * - 🚩 **en**: Format code
   * - **zh-CN**: 格式化代码
   */
  export const cmd_fmt: string;
  /**
   * - 🚩 **en**: Remove vp and all related data
   * - **zh-CN**: 彻底移除 vp
   */
  export const cmd_implode: string;
  /**
   * - 🚩 **en**: View package information from the registry
   * - **zh-CN**: 查看包注册信息
   */
  export const cmd_info: string;
  /**
   * - 🚩 **en**: Install all dependencies, or add packages if package names are provided
   * - **zh-CN**: 安装所有依赖或添加包
   */
  export const cmd_install: string;
  /**
   * - 🚩 **en**: Link packages for local development
   * - **zh-CN**: 链接包用于本地开发
   */
  export const cmd_link: string;
  /**
   * - 🚩 **en**: Lint code
   * - **zh-CN**: 代码检查
   */
  export const cmd_lint: string;
  /**
   * - 🚩 **en**: List installed packages
   * - **zh-CN**: 列出已安装的包
   */
  export const cmd_list: string;
  /**
   * - 🚩 **en**: Migrate an existing project to Vite+
   * - **zh-CN**: 迁移现有项目到 Vite+
   */
  export const cmd_migrate: string;
  /**
   * - 🚩 **en**: Run a Node.js script
   * - **zh-CN**: 运行 Node.js 脚本
   */
  export const cmd_node: string;
  /**
   * - 🚩 **en**: Check for outdated packages
   * - **zh-CN**: 检查过期包
   */
  export const cmd_outdated: string;
  /**
   * - 🚩 **en**: Build library
   * - **zh-CN**: 构建库
   */
  export const cmd_pack: string;
  /**
   * - 🚩 **en**: Forward a command to the package manager
   * - **zh-CN**: 转发命令到包管理器
   */
  export const cmd_pm: string;
  /**
   * - 🚩 **en**: Preview production build
   * - **zh-CN**: 预览生产构建
   */
  export const cmd_preview: string;
  /**
   * - 🚩 **en**: Rebuild native modules
   * - **zh-CN**: 重建原生模块
   */
  export const cmd_rebuild: string;
  /**
   * - 🚩 **en**: Remove packages from dependencies
   * - **zh-CN**: 从依赖中移除包
   */
  export const cmd_remove: string;
  /**
   * - 🚩 **en**: Run tasks
   * - **zh-CN**: 运行任务
   */
  export const cmd_run: string;
  /**
   * - 🚩 **en**: Run linters on staged files
   * - **zh-CN**: 对暂存文件运行 linter
   */
  export const cmd_staged: string;
  /**
   * - 🚩 **en**: Run tests
   * - **zh-CN**: 运行测试
   */
  export const cmd_test: string;
  /**
   * - 🚩 **en**: Unlink packages
   * - **zh-CN**: 取消链接包
   */
  export const cmd_unlink: string;
  /**
   * - 🚩 **en**: Update packages to their latest versions
   * - **zh-CN**: 更新包到最新版本
   */
  export const cmd_update: string;
  /**
   * - 🚩 **en**: Update vp itself to the latest version
   * - **zh-CN**: 更新 vp 自身
   */
  export const cmd_upgrade: string;
  /**
   * - 🚩 **en**: Show why a package is installed
   * - **zh-CN**: 显示包的安装原因
   */
  export const cmd_why: string;
  /**
   * - 🚩 **en**: Delete configuration key
   * - **zh-CN**: 删除配置键
   */
  export const config_cmd_delete: string;
  /**
   * - 🚩 **en**: Get configuration value
   * - **zh-CN**: 获取配置值
   */
  export const config_cmd_get: string;
  /**
   * - 🚩 **en**: List all configuration
   * - **zh-CN**: 列出所有配置
   */
  export const config_cmd_list: string;
  /**
   * - 🚩 **en**: Set configuration value
   * - **zh-CN**: 设置配置值
   */
  export const config_cmd_set: string;
  /**
   * - 🚩 **en**: Custom hooks directory
   * - **zh-CN**: 自定义钩子目录
   */
  export const config_opt_hooks_dir: string;
  /**
   * - 🚩 **en**: Skip agent
   * - **zh-CN**: 跳过代理
   */
  export const config_opt_no_agent: string;
  /**
   * - 🚩 **en**: Skip hooks
   * - **zh-CN**: 跳过钩子
   */
  export const config_opt_no_hooks: string;
  /**
   * - 🚩 **en**: Coding agent instructions
   * - **zh-CN**: 编码代理指令
   */
  export const create_opt_agent: string;
  /**
   * - 🚩 **en**: Approve build scripts
   * - **zh-CN**: 批准构建脚本
   */
  export const create_opt_approve_builds: string;
  /**
   * - 🚩 **en**: Target directory
   * - **zh-CN**: 目标目录
   */
  export const create_opt_directory: string;
  /**
   * - 🚩 **en**: Editor config
   * - **zh-CN**: 编辑器配置
   */
  export const create_opt_editor: string;
  /**
   * - 🚩 **en**: Init git repo
   * - **zh-CN**: 初始化 git 仓库
   */
  export const create_opt_git: string;
  /**
   * - 🚩 **en**: Set up pre-commit hooks
   * - **zh-CN**: 设置 pre-commit 钩子
   */
  export const create_opt_hooks: string;
  /**
   * - 🚩 **en**: List available templates
   * - **zh-CN**: 列出可用模板
   */
  export const create_opt_list: string;
  /**
   * - 🚩 **en**: Skip agent instructions
   * - **zh-CN**: 跳过代理指令
   */
  export const create_opt_no_agent: string;
  /**
   * - 🚩 **en**: Skip editor config
   * - **zh-CN**: 跳过编辑器配置
   */
  export const create_opt_no_editor: string;
  /**
   * - 🚩 **en**: Skip git init
   * - **zh-CN**: 跳过 git 初始化
   */
  export const create_opt_no_git: string;
  /**
   * - 🚩 **en**: Skip hooks
   * - **zh-CN**: 跳过钩子
   */
  export const create_opt_no_hooks: string;
  /**
   * - 🚩 **en**: Non-interactive mode
   * - **zh-CN**: 非交互模式
   */
  export const create_opt_no_interactive: string;
  /**
   * - 🚩 **en**: Package manager
   * - **zh-CN**: 包管理器
   */
  export const create_opt_pm: string;
  /**
   * - 🚩 **en**: Verbose output
   * - **zh-CN**: 详细输出
   */
  export const create_opt_verbose: string;
  /**
   * - 🚩 **en**: Check only
   * - **zh-CN**: 仅检查
   */
  export const dedupe_opt_check: string;
  /**
   * - 🚩 **en**: Vite+ - Unified development toolkit
   * - **zh-CN**: Vite+ - 统一开发工具集
   */
  export const desc: string;
  /**
   * - 🚩 **en**: Public base path
   * - **zh-CN**: 公共基础路径
   */
  export const dev_opt_base: string;
  /**
   * - 🚩 **en**: Config file
   * - **zh-CN**: 配置文件
   */
  export const dev_opt_config: string;
  /**
   * - 🚩 **en**: Hostname
   * - **zh-CN**: 主机名
   */
  export const dev_opt_host: string;
  /**
   * - 🚩 **en**: Env mode
   * - **zh-CN**: 环境模式
   */
  export const dev_opt_mode: string;
  /**
   * - 🚩 **en**: Open browser
   * - **zh-CN**: 打开浏览器
   */
  export const dev_opt_open: string;
  /**
   * - 🚩 **en**: Port
   * - **zh-CN**: 端口
   */
  export const dev_opt_port: string;
  /**
   * - 🚩 **en**: Exit if port in use
   * - **zh-CN**: 端口占用时退出
   */
  export const dev_opt_strict_port: string;
  /**
   * - 🚩 **en**: Add a distribution tag
   * - **zh-CN**: 添加分发标签
   */
  export const dist_tag_cmd_add: string;
  /**
   * - 🚩 **en**: List distribution tags
   * - **zh-CN**: 列出分发标签
   */
  export const dist_tag_cmd_list: string;
  /**
   * - 🚩 **en**: Remove a distribution tag
   * - **zh-CN**: 移除分发标签
   */
  export const dist_tag_cmd_rm: string;
  /**
   * - 🚩 **en**: Package name
   * - **zh-CN**: 包名
   */
  export const dlx_opt_package: string;
  /**
   * - 🚩 **en**: Shell mode
   * - **zh-CN**: Shell 模式
   */
  export const dlx_opt_shell: string;
  /**
   * - 🚩 **en**: Suppress output
   * - **zh-CN**: 静默输出
   */
  export const dlx_opt_silent: string;
  /**
   * - 🚩 **en**: Show current environment information
   * - **zh-CN**: 显示当前环境信息
   */
  export const env_cmd_current: string;
  /**
   * - 🚩 **en**: Set or show the global default Node.js version
   * - **zh-CN**: 设置或显示全局默认 Node.js 版本
   */
  export const env_cmd_default: string;
  /**
   * - 🚩 **en**: Run diagnostics and show environment status
   * - **zh-CN**: 运行诊断并显示环境状态
   */
  export const env_cmd_doctor: string;
  /**
   * - 🚩 **en**: Execute a command with a specific Node.js version
   * - **zh-CN**: 使用指定 Node.js 版本执行命令
   */
  export const env_cmd_exec: string;
  /**
   * - 🚩 **en**: Install a Node.js version
   * - **zh-CN**: 安装 Node.js 版本
   */
  export const env_cmd_install: string;
  /**
   * - 🚩 **en**: List locally installed Node.js versions
   * - **zh-CN**: 列出本地已安装的 Node.js 版本
   */
  export const env_cmd_list: string;
  /**
   * - 🚩 **en**: List available Node.js versions from the registry
   * - **zh-CN**: 列出可用的 Node.js 版本
   */
  export const env_cmd_list_remote: string;
  /**
   * - 🚩 **en**: Enable system-first mode
   * - **zh-CN**: 启用系统优先模式
   */
  export const env_cmd_off: string;
  /**
   * - 🚩 **en**: Enable managed mode
   * - **zh-CN**: 启用托管模式
   */
  export const env_cmd_on: string;
  /**
   * - 🚩 **en**: Pin a Node.js version in the current directory
   * - **zh-CN**: 在当前目录固定 Node.js 版本
   */
  export const env_cmd_pin: string;
  /**
   * - 🚩 **en**: Print shell snippet to set environment for current session
   * - **zh-CN**: 打印当前会话环境配置
   */
  export const env_cmd_print: string;
  /**
   * - 🚩 **en**: Run a command with a specific Node.js version
   * - **zh-CN**: 使用指定 Node.js 版本运行命令
   */
  export const env_cmd_run: string;
  /**
   * - 🚩 **en**: Create or update shims in VP_HOME/bin
   * - **zh-CN**: 在 VP_HOME/bin 中创建或更新 shims
   */
  export const env_cmd_setup: string;
  /**
   * - 🚩 **en**: Uninstall a Node.js version
   * - **zh-CN**: 卸载 Node.js 版本
   */
  export const env_cmd_uninstall: string;
  /**
   * - 🚩 **en**: Remove the Node.js pin from the current directory
   * - **zh-CN**: 移除当前目录的版本固定
   */
  export const env_cmd_unpin: string;
  /**
   * - 🚩 **en**: Use a specific Node.js version for this shell session
   * - **zh-CN**: 为当前会话使用指定 Node.js 版本
   */
  export const env_cmd_use: string;
  /**
   * - 🚩 **en**: Show path to the tool that would be executed
   * - **zh-CN**: 显示将要执行的工具路径
   */
  export const env_cmd_which: string;
  /**
   * - 🚩 **en**: Fail on no match
   * - **zh-CN**: 不匹配时失败
   */
  export const exec_opt_fail_no_match: string;
  /**
   * - 🚩 **en**: Run concurrently
   * - **zh-CN**: 并发运行
   */
  export const exec_opt_parallel: string;
  /**
   * - 🚩 **en**: All workspace packages
   * - **zh-CN**: 所有工作区包
   */
  export const exec_opt_recursive: string;
  /**
   * - 🚩 **en**: Resume from package
   * - **zh-CN**: 从指定包继续
   */
  export const exec_opt_resume: string;
  /**
   * - 🚩 **en**: Reverse order
   * - **zh-CN**: 反转顺序
   */
  export const exec_opt_reverse: string;
  /**
   * - 🚩 **en**: Shell mode
   * - **zh-CN**: Shell 模式
   */
  export const exec_opt_shell: string;
  /**
   * - 🚩 **en**: Save summary
   * - **zh-CN**: 保存摘要
   */
  export const exec_opt_summary: string;
  /**
   * - 🚩 **en**: Transitive deps
   * - **zh-CN**: 传递依赖
   */
  export const exec_opt_transitive: string;
  /**
   * - 🚩 **en**: Check only
   * - **zh-CN**: 仅检查
   */
  export const fmt_opt_check: string;
  /**
   * - 🚩 **en**: Ignore file path
   * - **zh-CN**: 忽略文件路径
   */
  export const fmt_opt_ignore_path: string;
  /**
   * - 🚩 **en**: List changed files
   * - **zh-CN**: 列出变更文件
   */
  export const fmt_opt_list_diff: string;
  /**
   * - 🚩 **en**: Thread count
   * - **zh-CN**: 线程数
   */
  export const fmt_opt_threads: string;
  /**
   * - 🚩 **en**: Write in place
   * - **zh-CN**: 原地写入
   */
  export const fmt_opt_write: string;
  /**
   * - 🚩 **en**: Skip confirmation
   * - **zh-CN**: 跳过确认
   */
  export const implode_opt_yes: string;
  /**
   * - 🚩 **en**: JSON output
   * - **zh-CN**: JSON 输出
   */
  export const info_opt_json: string;
  /**
   * - 🚩 **en**: Parallel installs
   * - **zh-CN**: 并行安装数
   */
  export const install_opt_concurrency: string;
  /**
   * - 🚩 **en**: Dev dependencies only
   * - **zh-CN**: 仅开发依赖
   */
  export const install_opt_dev: string;
  /**
   * - 🚩 **en**: Fix lockfile
   * - **zh-CN**: 修复锁文件
   */
  export const install_opt_fix_lockfile: string;
  /**
   * - 🚩 **en**: Force reinstall
   * - **zh-CN**: 强制重装
   */
  export const install_opt_force: string;
  /**
   * - 🚩 **en**: CI mode
   * - **zh-CN**: CI 模式
   */
  export const install_opt_frozen: string;
  /**
   * - 🚩 **en**: Flat node_modules
   * - **zh-CN**: 平铺模块目录
   */
  export const install_opt_hoist: string;
  /**
   * - 🚩 **en**: Skip scripts
   * - **zh-CN**: 跳过脚本
   */
  export const install_opt_ignore_scripts: string;
  /**
   * - 🚩 **en**: Lockfile only
   * - **zh-CN**: 仅锁文件
   */
  export const install_opt_lockfile_only: string;
  /**
   * - 🚩 **en**: Allow lockfile updates
   * - **zh-CN**: 允许更新锁文件
   */
  export const install_opt_no_frozen: string;
  /**
   * - 🚩 **en**: No lockfile
   * - **zh-CN**: 不使用锁文件
   */
  export const install_opt_no_lockfile: string;
  /**
   * - 🚩 **en**: Skip optional deps
   * - **zh-CN**: 跳过可选依赖
   */
  export const install_opt_no_optional: string;
  /**
   * - 🚩 **en**: Node.js version
   * - **zh-CN**: Node.js 版本
   */
  export const install_opt_node: string;
  /**
   * - 🚩 **en**: Offline mode
   * - **zh-CN**: 离线模式
   */
  export const install_opt_offline: string;
  /**
   * - 🚩 **en**: Use cache
   * - **zh-CN**: 使用缓存
   */
  export const install_opt_prefer_offline: string;
  /**
   * - 🚩 **en**: Skip devDependencies
   * - **zh-CN**: 跳过 devDependencies
   */
  export const install_opt_prod: string;
  /**
   * - 🚩 **en**: Re-run resolution
   * - **zh-CN**: 重新解析依赖
   */
  export const install_opt_resolution: string;
  /**
   * - 🚩 **en**: Save to default catalog
   * - **zh-CN**: 保存到默认 catalog
   */
  export const install_opt_save_catalog: string;
  /**
   * - 🚩 **en**: Save exact version
   * - **zh-CN**: 保存确切版本
   */
  export const install_opt_save_exact: string;
  /**
   * - 🚩 **en**: Save to optionalDependencies
   * - **zh-CN**: 保存到 optionalDependencies
   */
  export const install_opt_save_optional: string;
  /**
   * - 🚩 **en**: Save to peerDependencies
   * - **zh-CN**: 保存到对等依赖
   */
  export const install_opt_save_peer: string;
  /**
   * - 🚩 **en**: Silent mode
   * - **zh-CN**: 静默模式
   */
  export const install_opt_silent: string;
  /**
   * - 🚩 **en**: Auto-fix
   * - **zh-CN**: 自动修复
   */
  export const lint_opt_fix: string;
  /**
   * - 🚩 **en**: Import plugin
   * - **zh-CN**: 导入插件
   */
  export const lint_opt_import_plugin: string;
  /**
   * - 🚩 **en**: List rules
   * - **zh-CN**: 列出规则
   */
  export const lint_opt_rules: string;
  /**
   * - 🚩 **en**: TS config path
   * - **zh-CN**: TS 配置路径
   */
  export const lint_opt_tsconfig: string;
  /**
   * - 🚩 **en**: Type-aware rules
   * - **zh-CN**: 类型感知规则
   */
  export const lint_opt_type_aware: string;
  /**
   * - 🚩 **en**: Dependency depth
   * - **zh-CN**: 依赖深度
   */
  export const list_opt_depth: string;
  /**
   * - 🚩 **en**: Dev only
   * - **zh-CN**: 仅开发依赖
   */
  export const list_opt_dev: string;
  /**
   * - 🚩 **en**: Exclude peers
   * - **zh-CN**: 排除 peer 依赖
   */
  export const list_opt_exclude_peers: string;
  /**
   * - 🚩 **en**: Finder function
   * - **zh-CN**: 查找函数
   */
  export const list_opt_find_by: string;
  /**
   * - 🚩 **en**: JSON output
   * - **zh-CN**: JSON 输出
   */
  export const list_opt_json: string;
  /**
   * - 🚩 **en**: Extended info
   * - **zh-CN**: 详细信息
   */
  export const list_opt_long: string;
  /**
   * - 🚩 **en**: Skip optional
   * - **zh-CN**: 跳过可选依赖
   */
  export const list_opt_no_optional: string;
  /**
   * - 🚩 **en**: Projects only
   * - **zh-CN**: 仅项目包
   */
  export const list_opt_only_projects: string;
  /**
   * - 🚩 **en**: Parseable output
   * - **zh-CN**: 可解析输出
   */
  export const list_opt_parseable: string;
  /**
   * - 🚩 **en**: Prod only
   * - **zh-CN**: 仅生产依赖
   */
  export const list_opt_prod: string;
  /**
   * - 🚩 **en**: Recursive
   * - **zh-CN**: 递归
   */
  export const list_opt_recursive: string;
  /**
   * - 🚩 **en**: Agent instructions
   * - **zh-CN**: 代理指令
   */
  export const migrate_opt_agent: string;
  /**
   * - 🚩 **en**: Editor config
   * - **zh-CN**: 编辑器配置
   */
  export const migrate_opt_editor: string;
  /**
   * - 🚩 **en**: Set up hooks
   * - **zh-CN**: 设置钩子
   */
  export const migrate_opt_hooks: string;
  /**
   * - 🚩 **en**: Skip agent
   * - **zh-CN**: 跳过代理
   */
  export const migrate_opt_no_agent: string;
  /**
   * - 🚩 **en**: Skip editor
   * - **zh-CN**: 跳过编辑器
   */
  export const migrate_opt_no_editor: string;
  /**
   * - 🚩 **en**: Skip hooks
   * - **zh-CN**: 跳过钩子
   */
  export const migrate_opt_no_hooks: string;
  /**
   * - 🚩 **en**: Non-interactive mode
   * - **zh-CN**: 非交互模式
   */
  export const migrate_opt_no_interactive: string;
  /**
   * - 🚩 **en**: Node.js version
   * - **zh-CN**: Node.js 版本
   */
  export const node_opt_node: string;
  /**
   * - 🚩 **en**: npm version
   * - **zh-CN**: npm 版本
   */
  export const node_opt_npm: string;
  /**
   * - 🚩 **en**: Access level
   * - **zh-CN**: 访问级别
   */
  export const opt_access: string;
  /**
   * - 🚩 **en**: Show all versions
   * - **zh-CN**: 显示所有版本
   */
  export const opt_all: string;
  /**
   * - 🚩 **en**: Approve all pending
   * - **zh-CN**: 批准所有待处理的
   */
  export const opt_all_pending: string;
  /**
   * - 🚩 **en**: Preview without publishing
   * - **zh-CN**: 预览而不发布
   */
  export const opt_dry_run: string;
  /**
   * - 🚩 **en**: Only create env files
   * - **zh-CN**: 仅创建环境文件
   */
  export const opt_env_only: string;
  /**
   * - 🚩 **en**: Match packages by name, directory, or glob pattern
   * - **zh-CN**: 按名称、目录或 glob 匹配包
   */
  export const opt_filter: string;
  /**
   * - 🚩 **en**: Filter packages
   * - **zh-CN**: 过滤包
   */
  export const opt_filter_pkg: string;
  /**
   * - 🚩 **en**: Auto-fix vulnerabilities
   * - **zh-CN**: 自动修复漏洞
   */
  export const opt_fix: string;
  /**
   * - 🚩 **en**: Overwrite without confirmation
   * - **zh-CN**: 覆盖而不确认
   */
  export const opt_force: string;
  /**
   * - 🚩 **en**: Force publish
   * - **zh-CN**: 强制发布
   */
  export const opt_force_publish: string;
  /**
   * - 🚩 **en**: Operate on global packages
   * - **zh-CN**: 操作全局包
   */
  export const opt_global: string;
  /**
   * - 🚩 **en**: Gzip compression level
   * - **zh-CN**: Gzip 压缩级别
   */
  export const opt_gzip_level: string;
  /**
   * - 🚩 **en**: Print help
   * - **zh-CN**: 显示帮助
   */
  export const opt_help: string;
  /**
   * - 🚩 **en**: JSON output
   * - **zh-CN**: JSON 输出
   */
  export const opt_json: string;
  /**
   * - 🚩 **en**: JSON output
   * - **zh-CN**: JSON 输出
   */
  export const opt_json_out: string;
  /**
   * - 🚩 **en**: Minimum severity level
   * - **zh-CN**: 最低严重级别
   */
  export const opt_level: string;
  /**
   * - 🚩 **en**: Extended information
   * - **zh-CN**: 详细信息
   */
  export const opt_long: string;
  /**
   * - 🚩 **en**: Show only LTS versions
   * - **zh-CN**: 仅显示 LTS 版本
   */
  export const opt_lts: string;
  /**
   * - 🚩 **en**: Skip git checks
   * - **zh-CN**: 跳过 git 检查
   */
  export const opt_no_git_checks: string;
  /**
   * - 🚩 **en**: Skip pre-downloading
   * - **zh-CN**: 跳过预下载
   */
  export const opt_no_install: string;
  /**
   * - 🚩 **en**: Skip auto-installation
   * - **zh-CN**: 跳过自动安装
   */
  export const opt_no_install_auto: string;
  /**
   * - 🚩 **en**: Node.js version to use
   * - **zh-CN**: Node.js 版本
   */
  export const opt_node: string;
  /**
   * - 🚩 **en**: npm version to use
   * - **zh-CN**: npm 版本
   */
  export const opt_npm: string;
  /**
   * - 🚩 **en**: One-time password
   * - **zh-CN**: 一次性密码
   */
  export const opt_otp: string;
  /**
   * - 🚩 **en**: Output path
   * - **zh-CN**: 输出路径
   */
  export const opt_out: string;
  /**
   * - 🚩 **en**: Tarball directory
   * - **zh-CN**: tarball 目录
   */
  export const opt_pack_dest: string;
  /**
   * - 🚩 **en**: Production only
   * - **zh-CN**: 仅生产依赖
   */
  export const opt_production: string;
  /**
   * - 🚩 **en**: Publish with provenance
   * - **zh-CN**: 附带来源发布
   */
  export const opt_provenance: string;
  /**
   * - 🚩 **en**: Branch name
   * - **zh-CN**: 分支名称
   */
  export const opt_publish_branch: string;
  /**
   * - 🚩 **en**: Recursive
   * - **zh-CN**: 递归
   */
  export const opt_recursive: string;
  /**
   * - 🚩 **en**: Publish all workspace packages
   * - **zh-CN**: 发布所有工作区包
   */
  export const opt_recursive_publish: string;
  /**
   * - 🚩 **en**: Force refresh shims even if they exist
   * - **zh-CN**: 强制刷新 shims
   */
  export const opt_refresh: string;
  /**
   * - 🚩 **en**: Registry URL
   * - **zh-CN**: 注册表 URL
   */
  export const opt_registry: string;
  /**
   * - 🚩 **en**: Remove devDependencies
   * - **zh-CN**: 移除 devDependencies
   */
  export const opt_remove_dev: string;
  /**
   * - 🚩 **en**: Remove optional dependencies
   * - **zh-CN**: 移除 optionalDependencies
   */
  export const opt_remove_optional: string;
  /**
   * - 🚩 **en**: Save publish summary
   * - **zh-CN**: 保存发布摘要
   */
  export const opt_report_summary: string;
  /**
   * - 🚩 **en**: Scope
   * - **zh-CN**: 作用域
   */
  export const opt_scope: string;
  /**
   * - 🚩 **en**: Suppress output if already active
   * - **zh-CN**: 版本相同时静默
   */
  export const opt_silent_if_unchanged: string;
  /**
   * - 🚩 **en**: Sort order (asc, desc)
   * - **zh-CN**: 排序方式 (asc, desc)
   */
  export const opt_sort: string;
  /**
   * - 🚩 **en**: Publish tag
   * - **zh-CN**: 发布标签
   */
  export const opt_tag: string;
  /**
   * - 🚩 **en**: Write target (node-version, dev-engines)
   * - **zh-CN**: 写入目标 (node-version, dev-engines)
   */
  export const opt_target: string;
  /**
   * - 🚩 **en**: Pin source to remove
   * - **zh-CN**: 要移除的固定来源
   */
  export const opt_target_remove: string;
  /**
   * - 🚩 **en**: Remove the pin
   * - **zh-CN**: 移除固定
   */
  export const opt_unpin: string;
  /**
   * - 🚩 **en**: Remove session override
   * - **zh-CN**: 移除会话覆盖
   */
  export const opt_unset: string;
  /**
   * - 🚩 **en**: Print version
   * - **zh-CN**: 显示版本号
   */
  export const opt_version: string;
  /**
   * - 🚩 **en**: Select workspace root
   * - **zh-CN**: 选择工作区根目录
   */
  export const opt_workspace_root: string;
  /**
   * - 🚩 **en**: Compatible only
   * - **zh-CN**: 仅兼容版本
   */
  export const outdated_opt_compatible: string;
  /**
   * - 🚩 **en**: Parallel checks
   * - **zh-CN**: 并行检查数
   */
  export const outdated_opt_concurrency: string;
  /**
   * - 🚩 **en**: Dev only
   * - **zh-CN**: 仅开发依赖
   */
  export const outdated_opt_dev: string;
  /**
   * - 🚩 **en**: Output format
   * - **zh-CN**: 输出格式
   */
  export const outdated_opt_format: string;
  /**
   * - 🚩 **en**: Extended info
   * - **zh-CN**: 详细信息
   */
  export const outdated_opt_long: string;
  /**
   * - 🚩 **en**: Skip optional
   * - **zh-CN**: 跳过可选依赖
   */
  export const outdated_opt_no_optional: string;
  /**
   * - 🚩 **en**: Prod only
   * - **zh-CN**: 仅生产依赖
   */
  export const outdated_opt_prod: string;
  /**
   * - 🚩 **en**: Recursive
   * - **zh-CN**: 递归
   */
  export const outdated_opt_recursive: string;
  /**
   * - 🚩 **en**: Sort field
   * - **zh-CN**: 排序字段
   */
  export const outdated_opt_sort: string;
  /**
   * - 🚩 **en**: Add package owner
   * - **zh-CN**: 添加包所有者
   */
  export const owner_cmd_add: string;
  /**
   * - 🚩 **en**: List package owners
   * - **zh-CN**: 列出包所有者
   */
  export const owner_cmd_list: string;
  /**
   * - 🚩 **en**: Remove package owner
   * - **zh-CN**: 移除包所有者
   */
  export const owner_cmd_rm: string;
  /**
   * - 🚩 **en**: Generate dts
   * - **zh-CN**: 生成类型声明
   */
  export const pack_opt_dts: string;
  /**
   * - 🚩 **en**: Bundle format
   * - **zh-CN**: 打包格式
   */
  export const pack_opt_format: string;
  /**
   * - 🚩 **en**: Minify
   * - **zh-CN**: 压缩
   */
  export const pack_opt_minify: string;
  /**
   * - 🚩 **en**: Output directory
   * - **zh-CN**: 输出目录
   */
  export const pack_opt_outdir: string;
  /**
   * - 🚩 **en**: Generate source map
   * - **zh-CN**: 生成 source map
   */
  export const pack_opt_sourcemap: string;
  /**
   * - 🚩 **en**: Watch mode
   * - **zh-CN**: 监听模式
   */
  export const pack_opt_watch: string;
  /**
   * - 🚩 **en**: Clean cache
   * - **zh-CN**: 清理缓存
   */
  export const pm_cache_cmd_clean: string;
  /**
   * - 🚩 **en**: Show cache directory
   * - **zh-CN**: 显示缓存目录
   */
  export const pm_cache_cmd_dir: string;
  /**
   * - 🚩 **en**: Show cache path
   * - **zh-CN**: 显示缓存路径
   */
  export const pm_cache_cmd_path: string;
  /**
   * - 🚩 **en**: Approve dependency lifecycle scripts to run
   * - **zh-CN**: 批准依赖生命周期脚本运行
   */
  export const pm_cmd_approve_builds: string;
  /**
   * - 🚩 **en**: Run a security audit
   * - **zh-CN**: 运行安全审计
   */
  export const pm_cmd_audit: string;
  /**
   * - 🚩 **en**: Manage package cache
   * - **zh-CN**: 管理包缓存
   */
  export const pm_cmd_cache: string;
  /**
   * - 🚩 **en**: Manage package manager configuration
   * - **zh-CN**: 管理包管理器配置
   */
  export const pm_cmd_config: string;
  /**
   * - 🚩 **en**: Deprecate a package version
   * - **zh-CN**: 弃用包版本
   */
  export const pm_cmd_deprecate: string;
  /**
   * - 🚩 **en**: Manage distribution tags
   * - **zh-CN**: 管理分发标签
   */
  export const pm_cmd_dist_tag: string;
  /**
   * - 🚩 **en**: Show funding information for installed packages
   * - **zh-CN**: 显示已安装包的资助信息
   */
  export const pm_cmd_fund: string;
  /**
   * - 🚩 **en**: View package information from the registry
   * - **zh-CN**: 查看包注册信息
   */
  export const pm_cmd_info: string;
  /**
   * - 🚩 **en**: List installed packages
   * - **zh-CN**: 列出已安装的包
   */
  export const pm_cmd_list: string;
  /**
   * - 🚩 **en**: Log in to a registry
   * - **zh-CN**: 登录注册表
   */
  export const pm_cmd_login: string;
  /**
   * - 🚩 **en**: Log out from a registry
   * - **zh-CN**: 登出注册表
   */
  export const pm_cmd_logout: string;
  /**
   * - 🚩 **en**: Manage package owners
   * - **zh-CN**: 管理包所有者
   */
  export const pm_cmd_owner: string;
  /**
   * - 🚩 **en**: Create a tarball of the package
   * - **zh-CN**: 创建包的 tarball
   */
  export const pm_cmd_pack: string;
  /**
   * - 🚩 **en**: Ping the registry
   * - **zh-CN**: 测试注册表连接
   */
  export const pm_cmd_ping: string;
  /**
   * - 🚩 **en**: Remove unnecessary packages
   * - **zh-CN**: 移除不需要的包
   */
  export const pm_cmd_prune: string;
  /**
   * - 🚩 **en**: Publish package to registry
   * - **zh-CN**: 发布包到注册表
   */
  export const pm_cmd_publish: string;
  /**
   * - 🚩 **en**: Search for packages in the registry
   * - **zh-CN**: 搜索注册表中的包
   */
  export const pm_cmd_search: string;
  /**
   * - 🚩 **en**: Stage a package for publishing
   * - **zh-CN**: 暂存包以供发布
   */
  export const pm_cmd_stage: string;
  /**
   * - 🚩 **en**: Manage authentication tokens
   * - **zh-CN**: 管理认证令牌
   */
  export const pm_cmd_token: string;
  /**
   * - 🚩 **en**: Show the current logged-in user
   * - **zh-CN**: 显示当前登录用户
   */
  export const pm_cmd_whoami: string;
  /**
   * - 🚩 **en**: Config file
   * - **zh-CN**: 配置文件
   */
  export const preview_opt_config: string;
  /**
   * - 🚩 **en**: Hostname
   * - **zh-CN**: 主机名
   */
  export const preview_opt_host: string;
  /**
   * - 🚩 **en**: Env mode
   * - **zh-CN**: 环境模式
   */
  export const preview_opt_mode: string;
  /**
   * - 🚩 **en**: Open browser
   * - **zh-CN**: 打开浏览器
   */
  export const preview_opt_open: string;
  /**
   * - 🚩 **en**: Output directory
   * - **zh-CN**: 输出目录
   */
  export const preview_opt_outdir: string;
  /**
   * - 🚩 **en**: Port
   * - **zh-CN**: 端口
   */
  export const preview_opt_port: string;
  /**
   * - 🚩 **en**: Exit if port in use
   * - **zh-CN**: 端口占用时退出
   */
  export const preview_opt_strict_port: string;
  /**
   * - 🚩 **en**: Dev only
   * - **zh-CN**: 仅开发依赖
   */
  export const remove_opt_dev: string;
  /**
   * - 🚩 **en**: Preview
   * - **zh-CN**: 预览
   */
  export const remove_opt_dry_run: string;
  /**
   * - 🚩 **en**: Optional only
   * - **zh-CN**: 仅可选依赖
   */
  export const remove_opt_optional: string;
  /**
   * - 🚩 **en**: Prod only
   * - **zh-CN**: 仅生产依赖
   */
  export const remove_opt_prod: string;
  /**
   * - 🚩 **en**: Recursive
   * - **zh-CN**: 递归
   */
  export const remove_opt_recursive: string;
  /**
   * - 🚩 **en**: Force cache on
   * - **zh-CN**: 强制开启缓存
   */
  export const run_opt_cache: string;
  /**
   * - 🚩 **en**: Max concurrent tasks
   * - **zh-CN**: 最大并发任务数
   */
  export const run_opt_concurrency: string;
  /**
   * - 🚩 **en**: Fail on no match
   * - **zh-CN**: 不匹配时失败
   */
  export const run_opt_fail_no_match: string;
  /**
   * - 🚩 **en**: Ignore dependsOn
   * - **zh-CN**: 忽略依赖关系
   */
  export const run_opt_ignore_depends: string;
  /**
   * - 🚩 **en**: Last run details
   * - **zh-CN**: 上次运行详情
   */
  export const run_opt_last: string;
  /**
   * - 🚩 **en**: Output mode
   * - **zh-CN**: 输出模式
   */
  export const run_opt_log: string;
  /**
   * - 🚩 **en**: Force cache off
   * - **zh-CN**: 强制关闭缓存
   */
  export const run_opt_no_cache: string;
  /**
   * - 🚩 **en**: Unlimited concurrency
   * - **zh-CN**: 无限制并发
   */
  export const run_opt_parallel: string;
  /**
   * - 🚩 **en**: All workspace packages
   * - **zh-CN**: 所有工作区包
   */
  export const run_opt_recursive: string;
  /**
   * - 🚩 **en**: Transitive deps
   * - **zh-CN**: 传递依赖
   */
  export const run_opt_transitive: string;
  /**
   * - 🚩 **en**: Verbose summary
   * - **zh-CN**: 详细摘要
   */
  export const run_opt_verbose: string;
  /**
   * - 🚩 **en**: Promote a staged version to the live registry
   * - **zh-CN**: 推送到正式注册表
   */
  export const stage_cmd_approve: string;
  /**
   * - 🚩 **en**: Download the staged tarball for inspection
   * - **zh-CN**: 下载暂存 tarball
   */
  export const stage_cmd_download: string;
  /**
   * - 🚩 **en**: List staged versions
   * - **zh-CN**: 列出已暂存的版本
   */
  export const stage_cmd_list: string;
  /**
   * - 🚩 **en**: Stage a package for publishing
   * - **zh-CN**: 暂存包以发布
   */
  export const stage_cmd_publish: string;
  /**
   * - 🚩 **en**: Discard a staged version
   * - **zh-CN**: 丢弃暂存版本
   */
  export const stage_cmd_reject: string;
  /**
   * - 🚩 **en**: Show details about a staged version
   * - **zh-CN**: 查看已暂存版本的详情
   */
  export const stage_cmd_view: string;
  /**
   * - 🚩 **en**: Allow empty commits
   * - **zh-CN**: 允许空提交
   */
  export const staged_opt_allow_empty: string;
  /**
   * - 🚩 **en**: Concurrent tasks
   * - **zh-CN**: 并发任务数
   */
  export const staged_opt_concurrent: string;
  /**
   * - 🚩 **en**: Run all tasks
   * - **zh-CN**: 运行所有任务
   */
  export const staged_opt_continue: string;
  /**
   * - 🚩 **en**: Working directory
   * - **zh-CN**: 工作目录
   */
  export const staged_opt_cwd: string;
  /**
   * - 🚩 **en**: Debug output
   * - **zh-CN**: 调试输出
   */
  export const staged_opt_debug: string;
  /**
   * - 🚩 **en**: Git diff override
   * - **zh-CN**: git diff 覆盖
   */
  export const staged_opt_diff: string;
  /**
   * - 🚩 **en**: Diff filter
   * - **zh-CN**: diff 过滤器
   */
  export const staged_opt_diff_filter: string;
  /**
   * - 🚩 **en**: Fail on changes
   * - **zh-CN**: 变更时失败
   */
  export const staged_opt_fail_changes: string;
  /**
   * - 🚩 **en**: Hide unstaged changes from partially staged files
   * - **zh-CN**: 隐藏部分暂存文件的未暂存更改
   */
  export const staged_opt_hide_partial: string;
  /**
   * - 🚩 **en**: Hide all unstaged changes before running tasks
   * - **zh-CN**: 运行任务前隐藏所有未暂存更改
   */
  export const staged_opt_hide_unstaged: string;
  /**
   * - 🚩 **en**: Disable backup stash
   * - **zh-CN**: 禁用备份 stash
   */
  export const staged_opt_no_stash: string;
  /**
   * - 🚩 **en**: Disable output
   * - **zh-CN**: 禁用输出
   */
  export const staged_opt_quiet: string;
  /**
   * - 🚩 **en**: Relative paths
   * - **zh-CN**: 相对路径
   */
  export const staged_opt_relative: string;
  /**
   * - 🚩 **en**: Revert on error
   * - **zh-CN**: 出错时还原
   */
  export const staged_opt_revert: string;
  /**
   * - 🚩 **en**: Show task output
   * - **zh-CN**: 显示任务输出
   */
  export const staged_opt_verbose: string;
  /**
   * - 🚩 **en**: Globally installed package
   * - **zh-CN**: 全局安装的包
   */
  export const suggestion_global_installed: string;
  /**
   * - 🚩 **en**: Installed package
   * - **zh-CN**: 已安装的包
   */
  export const suggestion_installed: string;
  /**
   * - 🚩 **en**: Package from registry
   * - **zh-CN**: 注册表中的包
   */
  export const suggestion_package_from_registry: string;
  /**
   * - 🚩 **en**: Package script
   * - **zh-CN**: 包脚本
   */
  export const suggestion_script: string;
  /**
   * - 🚩 **en**: Run benchmarks
   * - **zh-CN**: 运行基准测试
   */
  export const test_cmd_bench: string;
  /**
   * - 🚩 **en**: Run tests in development mode
   * - **zh-CN**: 开发模式运行测试
   */
  export const test_cmd_dev: string;
  /**
   * - 🚩 **en**: Initialize Vitest config
   * - **zh-CN**: 初始化 Vitest 配置
   */
  export const test_cmd_init: string;
  /**
   * - 🚩 **en**: List matching tests
   * - **zh-CN**: 列出匹配的测试
   */
  export const test_cmd_list: string;
  /**
   * - 🚩 **en**: Run tests related to changed files
   * - **zh-CN**: 运行与变更文件相关的测试
   */
  export const test_cmd_related: string;
  /**
   * - 🚩 **en**: Run tests once
   * - **zh-CN**: 运行一次测试
   */
  export const test_cmd_run: string;
  /**
   * - 🚩 **en**: Run tests in watch mode
   * - **zh-CN**: 监听模式运行测试
   */
  export const test_cmd_watch: string;
  /**
   * - 🚩 **en**: Config path
   * - **zh-CN**: 配置路径
   */
  export const test_opt_config: string;
  /**
   * - 🚩 **en**: Enable coverage
   * - **zh-CN**: 启用覆盖率
   */
  export const test_opt_coverage: string;
  /**
   * - 🚩 **en**: Test name pattern
   * - **zh-CN**: 测试名模式
   */
  export const test_opt_name_pattern: string;
  /**
   * - 🚩 **en**: Reporter
   * - **zh-CN**: 报告器
   */
  export const test_opt_reporter: string;
  /**
   * - 🚩 **en**: Enable UI
   * - **zh-CN**: 启用 UI
   */
  export const test_opt_ui: string;
  /**
   * - 🚩 **en**: Watch mode
   * - **zh-CN**: 监听模式
   */
  export const test_opt_watch: string;
  /**
   * - 🚩 **en**: Create a new authentication token
   * - **zh-CN**: 创建新认证令牌
   */
  export const token_cmd_create: string;
  /**
   * - 🚩 **en**: List all known tokens
   * - **zh-CN**: 列出所有令牌
   */
  export const token_cmd_list: string;
  /**
   * - 🚩 **en**: Revoke an authentication token
   * - **zh-CN**: 吊销认证令牌
   */
  export const token_cmd_revoke: string;
  /**
   * - 🚩 **en**: Parallel updates
   * - **zh-CN**: 并行更新数
   */
  export const update_opt_concurrency: string;
  /**
   * - 🚩 **en**: Dev only
   * - **zh-CN**: 仅开发依赖
   */
  export const update_opt_dev: string;
  /**
   * - 🚩 **en**: Skip mismatched
   * - **zh-CN**: 跳过版本不匹配
   */
  export const update_opt_ignore: string;
  /**
   * - 🚩 **en**: Interactive
   * - **zh-CN**: 交互模式
   */
  export const update_opt_interactive: string;
  /**
   * - 🚩 **en**: Latest version
   * - **zh-CN**: 最新版本
   */
  export const update_opt_latest: string;
  /**
   * - 🚩 **en**: Skip optional
   * - **zh-CN**: 跳过可选依赖
   */
  export const update_opt_no_optional: string;
  /**
   * - 🚩 **en**: Lockfile only
   * - **zh-CN**: 仅更新锁文件
   */
  export const update_opt_no_save: string;
  /**
   * - 🚩 **en**: Prod only
   * - **zh-CN**: 仅生产依赖
   */
  export const update_opt_prod: string;
  /**
   * - 🚩 **en**: Recursive
   * - **zh-CN**: 递归
   */
  export const update_opt_recursive: string;
  /**
   * - 🚩 **en**: Reinstall mismatched
   * - **zh-CN**: 重新安装版本不匹配
   */
  export const update_opt_reinstall: string;
  /**
   * - 🚩 **en**: Workspace only
   * - **zh-CN**: 仅工作区
   */
  export const update_opt_workspace: string;
  /**
   * - 🚩 **en**: Check for updates
   * - **zh-CN**: 检查更新
   */
  export const upgrade_opt_check: string;
  /**
   * - 🚩 **en**: Force reinstall
   * - **zh-CN**: 强制重装
   */
  export const upgrade_opt_force: string;
  /**
   * - 🚩 **en**: Registry URL
   * - **zh-CN**: 注册表 URL
   */
  export const upgrade_opt_registry: string;
  /**
   * - 🚩 **en**: Revert to previous
   * - **zh-CN**: 回退到上一版本
   */
  export const upgrade_opt_rollback: string;
  /**
   * - 🚩 **en**: Suppress output
   * - **zh-CN**: 静默输出
   */
  export const upgrade_opt_silent: string;
  /**
   * - 🚩 **en**: npm dist-tag
   * - **zh-CN**: npm dist-tag
   */
  export const upgrade_opt_tag: string;
  /**
   * - 🚩 **en**: Tree depth
   * - **zh-CN**: 树深度
   */
  export const why_opt_depth: string;
  /**
   * - 🚩 **en**: Dev only
   * - **zh-CN**: 仅开发依赖
   */
  export const why_opt_dev: string;
  /**
   * - 🚩 **en**: Exclude peers
   * - **zh-CN**: 排除 peer 依赖
   */
  export const why_opt_exclude_peers: string;
  /**
   * - 🚩 **en**: Finder function
   * - **zh-CN**: 查找函数
   */
  export const why_opt_find_by: string;
  /**
   * - 🚩 **en**: JSON output
   * - **zh-CN**: JSON 输出
   */
  export const why_opt_json: string;
  /**
   * - 🚩 **en**: Extended info
   * - **zh-CN**: 详细信息
   */
  export const why_opt_long: string;
  /**
   * - 🚩 **en**: Skip optional
   * - **zh-CN**: 跳过可选依赖
   */
  export const why_opt_no_optional: string;
  /**
   * - 🚩 **en**: Parseable
   * - **zh-CN**: 可解析输出
   */
  export const why_opt_parseable: string;
  /**
   * - 🚩 **en**: Prod only
   * - **zh-CN**: 仅生产依赖
   */
  export const why_opt_prod: string;
  /**
   * - 🚩 **en**: Recursive
   * - **zh-CN**: 递归
   */
  export const why_opt_recursive: string;
}

