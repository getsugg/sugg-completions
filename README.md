# Sugg Completions

补全脚本合集 + 安全审计网站。纯客户端，WASM 在浏览器里做 AST 分离。

## 快速开始

```bash
# 1. 装依赖
bun install

# 2. 启动开发服务器
bun run dev
# → 浏览器打开 http://localhost:5173
# → 左侧脚本列表，点击任一脚本查看源码
# → 点"安全审计"按钮，WASM 在浏览器里提取动态函数 + API 分析

# 3. 构建静态站点
bun run build
# → 产物在 dist/，可部署到 GitHub Pages
```

## 目录

```
public/completions/    补全脚本（.ts，用户可提交 PR 添加）
wasm/                  sugg-wasm 的自编译 WASM（extract + analyze_apis）
src/
├── App.tsx            主页面：列表 + 源码 + 审计面板
├── parser.ts          WASM 包装（ensureWasm → extract → analyzeApis）
└── scripts.ts         脚本列表，自动生成
scripts/generate-scripts.js  扫描 completions/ 生成 src/scripts.ts
```

## 添加新脚本

1. 把 `.ts` 文件放进 `public/completions/`
2. 运行 `bun run generate-scripts` 更新脚本列表
3. 提交 PR

## 更新 WASM

sugg 项目侧 AST 逻辑变更后：

```bash
# 在 sugg 项目根目录执行
wasm-pack build crates/sugg-wasm --target web --no-opt --out-dir ../../wasm-pkg

# 复制到本仓库
cp ../sugg/wasm-pkg/* wasm/
```

## 审计功能

点脚本 → "安全审计" → WASM 执行：

| 结果 | 说明 |
|---|---|
| 静态命令树 | 标记后的源码，`dynamic()` 被替换为 `{__is_dynamic, id}` |
| 动态函数列表 | 每个 `__dyn_*` 函数及其使用的 sugg API |
| API 安全标记 | `exec`/`execFile`/`fetch` 标红(⚠️)，`readFile`/`readJson` 标绿(✅) |
