import init, { extract as wasmExtract, analyze_apis as wasmAnalyze } from "../wasm/sugg_wasm.js";
import wasmUrl from "../wasm/sugg_wasm_bg.wasm?url";

let ready = false;
let initPromise: Promise<void> | null = null;

export async function ensureWasm(): Promise<void> {
  if (ready) return;
  if (!initPromise) {
    initPromise = init(wasmUrl) as unknown as Promise<void>;
  }
  await initPromise;
  ready = true;
}

export interface ExtractResult {
  modified: string;
  dynamic: string;
  func_ids: string[];
}

export interface ApiUsage {
  name: string;
  apis: string[];
}

export function extract(source: string, path: string): ExtractResult {
  return wasmExtract(source, path) as unknown as ExtractResult;
}

export function analyzeApis(dynamicJs: string): ApiUsage[] {
  return wasmAnalyze(dynamicJs) as unknown as ApiUsage[];
}
