export interface LineAnnotation {
  line: number;
  type: "unsafe" | "safe";
  api?: string;
}

export type FilterType = "all" | "unsafe" | "safe";

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
  staticHtml: string;
  dynamicHtml: string;
}

export interface ScriptAnalysis {
  staticAnalysis: LineAnnotation[];
  dynamicAnalysis?: {
    extractResult: ExtractResult;
    apis: ApiUsage[];
  };
  staticHtml: string;
  dynamicHtml: string;
}

export interface TokenSpan {
  content: string;
  color?: string;
  fontStyle?: number;
  hover?: HoverInfo;
}

export interface HoverInfo {
  text: string;
  docs?: string;
  tags?: [name: string, text: string | undefined][];
  textTokens?: { content: string; color?: string; fontStyle?: number }[][];
}

export interface LineData {
  text: string;
  tokens: TokenSpan[];
}

export interface FileState {
  id: string;
  filename: string;
  linesUrl: string;
  anns: LineAnnotation[];
}

export interface ScriptInfo {
  stem: string;
  title: string;
  description: string;
  sourceUrl: string;
  linesUrl: string;
  unsafeCount: number;
  files: FileState[];
}
