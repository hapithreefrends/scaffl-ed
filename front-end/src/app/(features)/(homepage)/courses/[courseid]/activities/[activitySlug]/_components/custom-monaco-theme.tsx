import * as monaco from "monaco-editor";

export default function defineCustomMonacoLightTheme(
  monacoInstance: typeof monaco
) {

  monacoInstance.editor.defineTheme("scaffyTheme", {
    base: "vs", // Light mode base
    inherit: true,
    rules: [
      { token: "keyword", foreground: "#364FC7", fontStyle: "bold" },
      { token: "type", foreground: "#0D6E6E" },
      { token: "string", foreground: "#D9480F" },
      { token: "number", foreground: "#4CAF50" },
      { token: "comment", foreground: "#616161", fontStyle: "italic" },
      { token: "function", foreground: "#F08C00" },
      { token: "variable", foreground: "#339AF0" },
    ],
    colors: {
      "editor.background": "#FFFFFF",
      "editor.foreground": "#333333",
      "editorCursor.foreground": "#D84315",
      "editor.lineHighlightBackground": "#F5F5F5",
      "editor.selectionBackground": "#C5CAE9",
      "editorIndentGuide.background": "#E0E0E0",
    },
  });

  monacoInstance.editor.setTheme("scaffyTheme");
}
