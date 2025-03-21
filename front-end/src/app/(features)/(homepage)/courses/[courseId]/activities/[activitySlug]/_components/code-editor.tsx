"use client";

import * as monaco from "monaco-editor";
import classes from "../_styles/code-editor.module.css";
import Editor, { OnMount } from "@monaco-editor/react";
import { Container } from "@mantine/core";
import { useRef } from "react";
import { Space_Mono } from "next/font/google";

import { shikiToMonaco } from "@shikijs/monaco";
import { createHighlighter } from "shiki";

interface CodeEditorProps {
  code: string;
  language: string;
  aois: AOIProps[];
}

interface AOIProps {
  id: string;
  activity_id: string;
  name: string;
  start_line: number;
  start_column: number;
  end_line: number;
  end_column: number;
}

const spaceMono = Space_Mono({
  weight: "400", // Adjust weight if needed
  subsets: ["latin"],
});

export default function CodeEditor({ code, language, aois }: CodeEditorProps) {
  const editorRef = useRef<HTMLDivElement | null>(null);
  const monacoRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);
  const decorationsCollectionRef =
    useRef<monaco.editor.IEditorDecorationsCollection | null>(null);

  const handleEditorDidMount: OnMount = (editor, monacoInstance) => {
    const apply = async () => {

      const highlighter = await createHighlighter({
        themes: [
          "slack-ochin",
          "catppuccin-latte",
        ],
        langs: [
          "java",
        ],
      })

      monaco.languages.register({id: "java"})
      shikiToMonaco(highlighter, monacoInstance)
    }

    apply()

    // focus upon click on editor area
    editor.focus();

    // Decorations
    monacoRef.current = editor;
    decorationsCollectionRef.current = editor.createDecorationsCollection([]);
    applyDecorations();

    // Add mouse event listener for clicks
    editor.onMouseDown((event) => handleAOIClick(event, editor));

    // Apply theme
    // defineCustomMonacoLightTheme(monacoInstance);
  };

  // Apply decorations only after the editor is mounted
  const applyDecorations = () => {
    if (!monacoRef.current || !decorationsCollectionRef.current) return;
    const editor = monacoRef.current;

    decorationsCollectionRef.current.set([
      ...aois.map((aoi: AOIProps) => ({
        range: new monaco.Range(aoi.start_line, aoi.start_column, aoi.end_line, aoi.end_column),
        options: {
          isWholeLine: true,
          inlineClassName: classes.aoi,
        },
      }))
    ]);
  };

  // Handle AOI Clicks
  const handleAOIClick = (
    event: monaco.editor.IEditorMouseEvent,
    editor: monaco.editor.IStandaloneCodeEditor
  ) => {
    const position = event.target.position; // Get clicked position
    if (!position) return;

    // Check if click happened inside an AOI
    const aois = decorationsCollectionRef.current?.getRanges();
    if (aois?.some((range) => range.containsPosition(position))) {
      alert(`Clicked on AOI at line ${position.lineNumber}!`);
    }
  };

  return (
    <Container w="100%" h="100%" p="0">
      <Editor
        language={language}
        value={code}
        theme="catppuccin-latte"
        // onChange={(value) => setCode(value || "")}
        onMount={handleEditorDidMount}
        options={{
          fontSize: 16,
          lineHeight: 24,
          fontFamily: `${spaceMono.style.fontFamily}, roboto`,
          fontWeight: "700",
          automaticLayout: true,
          minimap: { enabled: false },
          folding: false,
          readOnly: true,
          domReadOnly: true, // di lumabas yung read-only message pagnagtytype
          scrollBeyondLastLine: false, // disable scrolling pag di kailangan
          wordWrap: "on", // para di sya magscroll pahiga
          cursorBlinking: "solid", // di kailangan, us2 ko lang
          occurrencesHighlight: "off", // lahat ng occurences ng variables di nakahighlight
          renderLineHighlight: "none", // hindi lumalabas ng gray highlight pag nagselect ng line
          selectionHighlight: false, // parang occurrencesHighlight pero pag nakaselect
          matchBrackets: "never", // disable bracket matching highlight
        }}
      />
    </Container>
  );
}
