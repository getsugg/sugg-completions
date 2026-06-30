import { createContext, useContext, type Accessor, type Setter } from "solid-js";
import type { AnalysisData, FilterType } from "~/types";

export interface ScriptContextValue {
  displayAnalysis: Accessor<AnalysisData | undefined>;
  counts: Accessor<{ total: number; unsafe: number; safe: number }>;
  filteredType: Accessor<FilterType>;
  setFilteredType: Setter<FilterType>;
  scrollToLine: (line: number) => void;
  scrollTop: Accessor<number>;
  viewportHeight: Accessor<number>;
}

export const ScriptContext = createContext<ScriptContextValue>();

export function useScriptContext() {
  const ctx = useContext(ScriptContext);
  if (!ctx) throw new Error("useScriptContext must be used within a ScriptContext.Provider");
  return ctx;
}
