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
import defineCustomMonacoLightTheme from "./custom-monaco-theme";
import Editor, { OnMount } from "@monaco-editor/react";
import { Container } from "@mantine/core";
import { useState, useRef, useEffect } from "react";
import { Space_Mono } from "next/font/google";

const spaceMono = Space_Mono({
  weight: "400", // Adjust weight if needed
  subsets: ["latin"],
});

export default function CodeEditor() {
  const [code, setCode] = useState<string>(`public class AverageCalculator { 
    public static void main(String[] args) {
        int[] numbers = {10, 20, 30, 40, 50};  
        int sum = 0;  
        
        for (int i = 0; i < numbers.length; i++) { 
            sum += numbers[i]; 
        }

        int average = sum / numbers.length;  
        System.out.println("The average is: " + average); 
    }
}`);

  const monacoRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);
  const decorationsCollectionRef =
    useRef<monaco.editor.IEditorDecorationsCollection | null>(null);

  const handleEditorDidMount: OnMount = (editor, monacoInstance) => {
    editor.focus();

    // Decorations
    monacoRef.current = editor;
    decorationsCollectionRef.current = editor.createDecorationsCollection([]);
    applyDecorations();

    // Add mouse event listener for clicks
    editor.onMouseDown((event) => handleAOIClick(event, editor));

    // Apply theme
    defineCustomMonacoLightTheme(monacoInstance);
  };

  // Apply decorations only after the editor is mounted
  const applyDecorations = () => {
    if (!monacoRef.current || !decorationsCollectionRef.current) return;
    const editor = monacoRef.current;

    decorationsCollectionRef.current.set([
      // {
      //   range: new monaco.Range(1, 1, 1, 9), // Entire first line
      //   options: {
      //     isWholeLine: false,
      //     inlineClassName: classes.aoi,
      //     className: classes.aoi,
      //   },
      // },

      // {
      //   range: new monaco.Range(7, 1, 7, 43), // Entire first line
      //   options: {
      //     isWholeLine: false,
      //     inlineClassName: classes.aoi,
      //   },
      // },

      
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
        language="java"
        value={code}
        theme="scaffyTheme"
        onChange={(value) => setCode(value || "")}
        onMount={handleEditorDidMount}
        options={{
          fontSize: 16,
          lineHeight: 24,
          fontFamily: `${spaceMono.style.fontFamily}, roboto`,
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
