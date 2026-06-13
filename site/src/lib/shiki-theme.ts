export const suggTheme = {
  name: "sugg-dark",
  type: "dark" as const,
  colors: {
    "editor.background": "#0c0a0e",
    "editor.foreground": "#e8e4ea",
  },
  tokenColors: [
    { scope: "keyword", settings: { foreground: "#c586c0" } },
    { scope: "storage", settings: { foreground: "#c586c0" } },
    { scope: "string", settings: { foreground: "#ce9178" } },
    { scope: "comment", settings: { foreground: "#5a4b68", fontStyle: "italic" } },
    { scope: ["entity.name.function", "support.function"], settings: { foreground: "#f0d98c" } },
    { scope: ["entity.name.type", "support.type"], settings: { foreground: "#4fc1ff" } },
    { scope: "constant.numeric", settings: { foreground: "#b5cea8" } },
    { scope: "constant.builtin", settings: { foreground: "#4fc1ff" } },
    { scope: "variable.language", settings: { foreground: "#c586c0" } },
    { scope: "variable.parameter", settings: { foreground: "#9CDCFE" } },
  ],
};
