"use client";

/*
 * REFERS TO THE TERMINAL WINDOW WHERE THE USER CAN DIRECTLY EDIT AND CORRECT FLAWED AOIs
 * CAN BE COMPILED TO CHECK IF MODIFIED CODE IS CORRECT
 * AS OF NOW, JUST A DUPLICATE OF CODE EDITOR
 * BUT WILL BE UPDATED ACCORDINGLY IN THE FUTUREÍ
 */

import * as monaco from "monaco-editor";
import Editor, { OnMount } from "@monaco-editor/react";
import { Container } from "@mantine/core";
import { useState, useRef, useEffect } from "react";
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

export default function CodeEditorModifyCode({ code, language, aois }: CodeEditorProps) {

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
          scrollBeyondLastLine: false, // disable scrolling pag di kailangan
          wordWrap: "on", // para di sya magscroll pahiga
          cursorBlinking: "solid", // di kailangan, us2 ko lang
          stickyScroll: { enabled : false }
        }}
      />
    </Container>
  );
}
