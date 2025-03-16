// "use client";

// import { useEffect, useRef, useState } from "react";
// import { Container, Card } from "@mantine/core";
// import Editor from "@monaco-editor/react";
// import classes from "../_styles/code-editor.module.css";

// export default function CodeEditor() {
//   /**
//    * Renders a Monaco-based code editor for activities.
//    * - Uses local state for code storage (to be replaced with fetched data).
//    * - Dynamically resizes on window resize.
//    */

//   const [language, setLanguage] = useState("javascript");
//   const [code, setCode] = useState("// Write your code here...\n\tfdgdfgdg");
//   const editorRef = useRef<any>(null);

//   // Save Monaco instance when editor mounts
//   function handleEditorDidMount(editor: any) {
//     editorRef.current = editor;
//   }

//   // Resize Monaco Editor when the window resizes
//   useEffect(() => {
//     function handleResize() {
//       editorRef.current?.layout();
//     }
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <Container w="100%" h="100%" p="0">
//       <Editor
//           className={classes.codeEditor}
//           language={language}
//           value={code}
//           theme="vs-dark"
//           onMount={handleEditorDidMount}
//           onChange={(value) => setCode(value || "")}
//           options={{
//             automaticLayout: true,
//             fontSize: 14,
//             minimap: { enabled: false },
//             folding: false,
//             wordWrap: "on",
//           }}
//         />
//     </Container>
//   );
// }



"use client";

import classes from "../_styles/code-editor.module.css";
import Editor from "@monaco-editor/react";
import { useState } from "react";
import { Container, Card } from "@mantine/core";

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
      count += 1
    `);

  return (
    <Container w="100%" h="100%" p="0">
      <Editor
        className={classes.codeEditor}
        language={language}
        value={code}
        theme="vs-light"
        onChange={(value) => setCode(value || "")}
        options={{
          automaticLayout: true,
          fontSize: 16,
          lineHeight: 24,
          minimap: { enabled: false },
          folding: false,
          wordWrap: "on",
          readOnly: true
        }}
      />
    </Container>
  );
}

