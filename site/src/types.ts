export interface LineAnnotation {
  line: number;
  type: "danger" | "dynamic" | "safe";
  api?: string;
}

export type FilterType = "all" | "danger" | "dynamic" | "safe";

export interface ExtractResult {
  modified: string;
  dynamic: string;
  func_ids: string[];
}

export interface ApiUsage {
  name: string;
  apis: string[];
}

export interface AnalysisData {
  stem: string;
  anns: LineAnnotation[];
  r: ExtractResult;
  apis: ApiUsage[];
}

export interface ScriptInfo {
  stem: string;
  title: string;
  description: string;
  sourceUrl: string;
  highlightedUrl: string;
  staticAnalysis: LineAnnotation[];
}
