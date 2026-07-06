import { readJson, scanPath } from "sugg";

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
