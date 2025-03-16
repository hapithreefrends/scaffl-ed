// "use client";

// import classes from "../_styles/code-editor.module.css";
// import Editor from "@monaco-editor/react";
// import { useState } from "react";
// import { Container } from "@mantine/core";

// import { useEffect, useRef } from "react";
// import { OnMount } from "@monaco-editor/react";

// import * as monaco from "monaco-editor";

// // Ensure workers are properly registered
// self.MonacoEnvironment = {
//   getWorker: function (_workerId, label) {
//     if (label === "json") {
//       return new Worker(new URL("monaco-editor/esm/vs/language/json/json.worker", import.meta.url));
//     }
//     if (label === "css" || label === "scss" || label === "less") {
//       return new Worker(new URL("monaco-editor/esm/vs/language/css/css.worker", import.meta.url));
//     }
//     if (label === "html" || label === "handlebars" || label === "razor") {
//       return new Worker(new URL("monaco-editor/esm/vs/language/html/html.worker", import.meta.url));
//     }
//     if (label === "typescript" || label === "javascript") {
//       return new Worker(new URL("monaco-editor/esm/vs/language/typescript/ts.worker", import.meta.url));
//     }
//     return new Worker(new URL("monaco-editor/esm/vs/editor/editor.worker", import.meta.url));
//   },
// };

// export default function CodeEditor() {
//   /*
//    * This component is used to render the code editor for the activities.
//    * It uses the Monaco Editor to provide a code editor with syntax highlighting.
//    * The language are passed from fetched data and the code is stored in the local state.
//    * Everything at this point will be hardcoded.
//    * Actual implementation will be done in the future.
//    */
//   const [code, setCode] = useState(`nterms = int(input("How many terms? "))

// n1, n2 = 0, 1
// count = 0

// if nterms <= 0:
//   print("Please enter a positive integer")

// elif nterms == 1:
//   print("Fibonacci sequence upto",nterms,":")
//   print(n1)

// else:
//   print("Fibonacci sequence:")
//   while count < nterms:
//       print(n1)
//       nth = n1 + n2
//       # update values
//       n1 = n2
//       n2 = nth
//       count += 1`);

//   const monacoRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);
//   const decorationsCollectionRef = useRef<monaco.editor.IEditorDecorationsCollection | null>(null);

//   const handleEditorDidMount: OnMount = (editor, _monaco) => {
//     monacoRef.current = editor;

//     // Create a decorations collection
//     decorationsCollectionRef.current = editor.createDecorationsCollection([]);

//     // Apply decorations after a delay (simulating dynamic updates)
//     updateDecorations(editor);
//   };

//   // Function to update decorations
//   const updateDecorations = (editor: monaco.editor.IStandaloneCodeEditor) => {
//     const range = new monaco.Range(1, 1, 1, 10); 
//     if (!decorationsCollectionRef.current) return;

//     decorationsCollectionRef.current.set([
//       {
//         range: range, // Highlight line 2
//         options: {
       
//         },
//       },
//     ]);

//   };

//   return (
//     <Container w="100%" h="100%" p="0">
//       <Editor
//         className={classes.codeEditor}
//         language={"python"}
//         value={code}
//         theme="vs-light"
//         onChange={(value) => setCode(value || "")}
//         onMount={handleEditorDidMount}
//         options={{
//           automaticLayout: true,
//           fontSize: 16,
//           lineHeight: 24,
//           minimap: { enabled: false },
//           folding: false,
//           wordWrap: "on",
//           readOnly: true,
//           domReadOnly: true,
//         }}
//       />
//     </Container>
//   );
// }


"use client";

import { useState, useRef, useEffect } from "react";
import Editor, { OnMount } from "@monaco-editor/react";
import { Container } from "@mantine/core";
import * as monaco from "monaco-editor";
import classes from "../_styles/code-editor.module.css";

export default function CodeEditor() {
  const [code, setCode] = useState<string>(`nterms = int(input("How many terms? "))

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

  // Handle editor mount
  const handleEditorDidMount: OnMount = (editor, monacoInstance) => {
    monacoRef.current = editor;
    decorationsCollectionRef.current = editor.createDecorationsCollection([]);
    applyDecorations();
  };

  // Apply decorations only after the editor is mounted
  const applyDecorations = () => {
    if (!monacoRef.current || !decorationsCollectionRef.current) return;

    const editor = monacoRef.current;
    const range = new monaco.Range(1, 1, 2, 100); // Highlight full line 2

    decorationsCollectionRef.current.set([
      {
        range,
        options: {
          isWholeLine: false,
          inlineClassName: classes.aoi,
          className: classes.aoi, // Custom class for styling
        },
      },
    ]);
  };

  return (
    <Container w="100%" h="100%" p="0">
      <Editor
        language="python"
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
