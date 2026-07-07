import { createContext, useContext, type Accessor, type Setter } from "solid-js";
import type { AnalysisData, FilterType, LineAnnotation } from "~/types";

export interface MergedAnnotation extends LineAnnotation {
  fileId: string;
  filename: string;
}

export interface ScriptContextValue {
  stem: Accessor<string | null>;
  activeFile: Accessor<string | null>;
  displayAnalysis: Accessor<AnalysisData | undefined>;
  mergedAnnotations: Accessor<MergedAnnotation[]>;
  counts: Accessor<{ total: number; unsafe: number; safe: number }>;
  filteredType: Accessor<FilterType>;
  setFilteredType: Setter<FilterType>;
  scrollToLine: (line: number, fileId?: string) => void;
  getCenterLine: () => number;
  getLastJumpedLine: () => number;
}

export const ScriptContext = createContext<ScriptContextValue>();

export function useScriptContext() {
  const ctx = useContext(ScriptContext);
  if (!ctx) throw new Error("useScriptContext must be used within a ScriptContext.Provider");
  return ctx;
}
