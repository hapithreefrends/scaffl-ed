"use client";

import classes from "../_styles/code-editor.module.css";
import Editor from "@monaco-editor/react";
import { useState } from "react";
import { Container } from "@mantine/core";

import { useEffect, useRef } from "react";
import { OnMount } from "@monaco-editor/react";
import * as monaco from "monaco-editor";

export default function CodeEditor() {
  /*
   * This component is used to render the code editor for the activities.
   * It uses the Monaco Editor to provide a code editor with syntax highlighting.
   * The language are passed from fetched data and the code is stored in the local state.
   * Everything at this point will be hardcoded.
   * Actual implementation will be done in the future.
   */

  const [language, setLanguage] = useState("python");
  const [code, setCode] = useState(`nterms = int(input("How many terms? "))

n1, n2 = 0, 1
count = 0

if nterms <= 0:
  print("Please enter a positive integer")

elif nterms == 1:
  print("Fibonacci sequence upto",nterms,":")
  print(n1)

else:
  print("Fibonacci sequence:")
  while count < nterms:
      print(n1)
      nth = n1 + n2
      # update values
      n1 = n2
      n2 = nth
      count += 1`);

  const monacoRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);
  const decorationsCollectionRef = useRef<monaco.editor.IEditorDecorationsCollection | null>(null);

  const handleEditorDidMount: OnMount = (editor, _monaco) => {
    monacoRef.current = editor;

    // Create a decorations collection
    decorationsCollectionRef.current = editor.createDecorationsCollection([]);

    // Apply decorations after a delay (simulating dynamic updates)
    setTimeout(() => {
      updateDecorations(editor);
    }, 1000);
  };

  // Function to update decorations
  const updateDecorations = (editor: monaco.editor.IStandaloneCodeEditor) => {
    if (!decorationsCollectionRef.current) return;
    // decorationsCollectionRef.current.set([
    //   {
    //     range: new monaco.Range(2, 1, 2, 10), // Highlight line 2
    //     options: {
    //       isWholeLine: true,
    //       className: classes.aoi
    //     },
    //   },
    // ]);
  };

  return (
    <Container w="100%" h="100%" p="0">
      <Editor
        className={classes.codeEditor}
        language={language}
        value={code}
        theme="vs-light"
        onChange={(value) => setCode(value || "")}
        onMount={handleEditorDidMount}
        options={{
          automaticLayout: true,
          fontSize: 16,
          lineHeight: 24,
          minimap: { enabled: false },
          folding: false,
          wordWrap: "on",
          readOnly: true,
          domReadOnly: true,
        }}
      />
    </Container>
  );
}
