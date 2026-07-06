import init, { extract as wasmExtract } from "../../wasm/sugg_wasm.js";
import wasmUrl from "../../wasm/sugg_wasm_bg.wasm?url";

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

export function extract(source: string, path: string): ExtractResult {
  return wasmExtract(source, path) as unknown as ExtractResult;
}
