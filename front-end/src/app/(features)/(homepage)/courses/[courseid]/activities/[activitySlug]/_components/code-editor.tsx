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

/*
 * This component is used to render the code editor for the activities.
 * It uses the Monaco Editor to provide a code editor with syntax highlighting.
 * The language are passed from fetched data and the code is stored in the local state.
 * Everything at this point will be hardcoded.
 * Actual implementation will be done in the future.
 */

"use client";

import * as monaco from "monaco-editor";
import classes from "../_styles/code-editor.module.css";
import Editor, { OnMount } from "@monaco-editor/react";
import { Container } from "@mantine/core";
import { useState, useRef } from "react";

export default function CodeEditor() {
  const [code, setCode] =
    useState<string>(`nterms = int(input("How many terms? "))

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
  const decorationsCollectionRef =
    useRef<monaco.editor.IEditorDecorationsCollection | null>(null);

  // Handle editor mount
  const handleEditorDidMount: OnMount = (editor, monacoInstance) => {
    monacoRef.current = editor;
    decorationsCollectionRef.current = editor.createDecorationsCollection([]);
    applyDecorations();

    // Add mouse event listener for clicks
    editor.onMouseDown((event) => handleAOIClick(event, editor));
  };

  // Apply decorations only after the editor is mounted
  const applyDecorations = () => {
    if (!monacoRef.current || !decorationsCollectionRef.current) return;

    const editor = monacoRef.current;

    decorationsCollectionRef.current.set([

      {
        range: new monaco.Range(1, 1, 1, 9), // Entire first line
        options: {
          isWholeLine: false,
          inlineClassName: classes.aoi,
          className: classes.aoi 
        },
      },

      {
        range: new monaco.Range(1, 10, 1, 14), // Entire first line
        options: {
          isWholeLine: false,
          inlineClassName: classes.aoi, 
        },
      },

      // {
      //   range: new monaco.Range(3, 1, 4, 100),
      //   options: {
      //     isWholeLine: true,
      //     inlineClassName: classes.aoi,
      //     className: classes.aoi, // Custom class for styling
      //   },
      // },

      // {
      //   range: new monaco.Range(6, 1, 7, 100),
      //   options: {
      //     isWholeLine: true,
      //     inlineClassName: classes.aoi,
      //     className: classes.aoi, // Custom class for styling
      //   },
      // },

      // {
      //   range: new monaco.Range(9, 1, 11, 100),
      //   options: {
      //     isWholeLine: true,
      //     inlineClassName: classes.aoi,
      //     className: classes.aoi, // Custom class for styling
      //   },
      // },

      // {
      //   range: new monaco.Range(13, 1, 21, 100),
      //   options: {
      //     isWholeLine: true,
      //     inlineClassName: classes.aoi,
      //     className: classes.aoi, // Custom class for styling
      //   },
      // },

    ]);
  };

  // Handle AOI Clicks
  const handleAOIClick = (event: monaco.editor.IEditorMouseEvent, editor: monaco.editor.IStandaloneCodeEditor) => {
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
