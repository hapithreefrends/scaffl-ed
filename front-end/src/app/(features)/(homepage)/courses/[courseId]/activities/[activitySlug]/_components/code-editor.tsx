"use client";

import * as monaco from "monaco-editor";
import classes from "../_styles/code-editor.module.css";
import Editor, { OnMount } from "@monaco-editor/react";
import { Container } from "@mantine/core";
import { useRef } from "react";
import { Space_Mono } from "next/font/google";

import { shikiToMonaco } from "@shikijs/monaco";
import { createHighlighter } from "shiki";

/**
 * CodeEditor component props interface.
 * @interface CodeEditorProps
 * @property {string} code - The code to be displayed in the editor.
 * @property {string} language - The programming language of the code.
 * @property {AOIProps[]} aois - Array of AOI (Area of Interest) objects.
 */

interface CodeEditorProps {
  code: string;
  language: string;
  aois: AOIProps[];
}

/**
 * AOI (Area of Interest) props interface.
 * @interface AOIProps
 * @property {string} id - Unique identifier for the AOI.
 * @property {string} activity_id - Identifier for the associated activity.
 * @property {string} name - Name of the AOI.
 * @property {number} start_line - Starting line number of the AOI.
 * @property {number} start_column - Starting column number of the AOI.
 * @property {number} end_line - Ending line number of the AOI.
 * @property {number} end_column - Ending column number of the AOI.
 */
interface AOIProps {
  id: string;
  activity_id: string;
  name: string;
  start_line: number;
  start_column: number;
  end_line: number;
  end_column: number;
}

/**
 * Initializes the Space Mono font with specified weight and subsets.
 *
 * @constant
 * @type {Object}
 * @property {string} weight - The font weight to be used. Default is "400".
 * @property {string[]} subsets - The subsets of the font to be included. Default is ["latin"].
 */
const spaceMono = Space_Mono({
  weight: "400", // Adjust weight if needed
  subsets: ["latin"],
});

/**
 * CodeEditor component.
 * @component
 * @param {CodeEditorProps} props - Props for the CodeEditor component.
 * @returns {JSX.Element} The rendered CodeEditor component.
 *
 * @example
 * <CodeEditor code="console.log('Hello, world!');" language="javascript" aois={[]} />
 *
 * @remarks
 * This component uses the Monaco Editor to display code with syntax highlighting and read-only mode.
 * It also highlights specific areas of interest (AOIs) and handles click events on these AOIs.
 *
 * @param {string} code - The code to be displayed in the editor.
 * @param {string} language - The programming language of the code.
 * @param {AOIProps[]} aois - Array of AOI (Area of Interest) objects.
 */
export default function CodeEditor({ code, language, aois }: CodeEditorProps) {
  const editorRef = useRef<HTMLDivElement | null>(null);
  const monacoRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);
  const decorationsCollectionRef =
    useRef<monaco.editor.IEditorDecorationsCollection | null>(null);

  const handleEditorDidMount: OnMount = (editor, monacoInstance) => {
    if (!window.webgazer) return;

    const applyShiki = async () => {
      const highlighter = await createHighlighter({
        themes: ["slack-ochin", "catppuccin-latte"],
        langs: ["java"],
      });

      monaco.languages.register({ id: "java" });
      shikiToMonaco(highlighter, monacoInstance);
    };
    applyShiki();

    // focus upon click on editor area
    editor.focus();

    // Decorations
    monacoRef.current = editor;
    decorationsCollectionRef.current = editor.createDecorationsCollection([]);
    decorationsCollectionRef.current.clear();
    applyDecorations();

    // AOI related stuff
    // getAOIBoundingBoxes(editor);

    // console.log(editor?.getModel()?.getAllDecorations())
    const aoiBoxes = getAOIBoundingBoxes(editor);
    // const aoiBoxes = [{ x1: 0, y1: 0, x2: 1000, y2: 1000, id: "DEEZ NUTZ" }];
    let lastAOIViewed: any = null;

    console.log("AOI BOXES: ", aoiBoxes);

    window.webgazer.setGazeListener((data: any, timestamp: any) => {
      // ANG KULIT ANY NA NGA LANG
      if (!data) return;
      if (!aoiBoxes) return;

      // const gazeAOI = isGazeInsideAOI(data.x, data.y, aoiBoxes);
      // if (gazeAOI && lastAOIViewed !== gazeAOI.id) {
      //   console.log(`Gaze entered AOI: ${gazeAOI.id}`);
      //   lastAOIViewed = gazeAOI.id;
      // }
      // console.log("AOI BOXES: ", aoiBoxes);

      const { x, y } = data; // Gaze coordinates
      aoiBoxes.forEach((aoi, index) => {
        if (isGazeInsideAOI(x, y, aoi)) {
          console.log(
            `Gaze entered AOI ${index + 1} at timestamp ${timestamp}`
          );
          // Do something with the gaze detection
        }
      });
    });

    // Add mouse event listener for clicks
    // editor.onMouseDown((event) => handleAOIClick(event, editor));
  };

  // gathers AOI bounding boxes
  const getAOIBoundingBoxes = (editor: monaco.editor.IStandaloneCodeEditor) => {
    const model = editor.getModel();
    if (!model) return;

    const decorations = model.getAllDecorations();

    return decorations
      ?.map((decoration) => {
        const range = decoration?.range;
        console.log(model?.getValueInRange(range));
        console.log("Start column:", range.startColumn);
        console.log("End column:", range.endColumn);
        if (!range) return null;

        const start = editor.getScrolledVisiblePosition({ column: range.startColumn, lineNumber: range.startLineNumber });
        const end = editor.getScrolledVisiblePosition({ column: range.endColumn, lineNumber: range.endLineNumber });

        console.log("START:",start);
        console.log("END:",end);
        console.log(editor.getOffsetForColumn(range.startLineNumber,range.startColumn))
        console.log(editor.getOffsetForColumn(range.endLineNumber,range.endColumn))

        if (!start || !end) return null;

        return {
          x1: start.left, // Top-left corner X
          x2: end.left, // Bottom-right corner X
          y1: start.top, // Top-left corner Y
          y2: end.top,
          // x: start.left,
          // y: start.top,
          // width: end.left - start.left,
          // height: end.top - start.top + 24, // 24 is the set line height, could be coded better of course
          id: decoration?.id,
        };
      })
      .filter(Boolean);
  };

  const isGazeInsideAOI = (x: number, y: number, aoi: any) => {
    return x >= aoi.x1 && x <= aoi.x2 && y >= aoi.y1 && y <= aoi.y2;
  };

  const decorationElement = document.querySelectorAll('.view-line');
  console.log("DECORATION ELEMENTS",decorationElement)
  // const isGazeInsideAOI = (x: number, y: number, aois: any[]) => {
  //   return aois.find(aoi =>
  //     x >= aoi.x1 && x <= aoi.x2 && y >= aoi.y1 && y <= aoi.y2
  //   );
  // }

  // Apply decorations only after the editor is mounted
  const applyDecorations = () => {
    if (!monacoRef.current || !decorationsCollectionRef.current) return;
    decorationsCollectionRef.current.set([
      ...aois.map((aoi: AOIProps) => ({
        range: new monaco.Range(
          aoi.start_line,
          aoi.start_column,
          aoi.end_line,
          aoi.end_column
        ),
        options: {
          isWholeLine: true,
          inlineClassName: classes.aoi,
        },
      })),
    ]);
  };

  // Handle AOI Clicks
  // const handleAOIClick = (event: monaco.editor.IEditorMouseEvent) => {
  //   const position = event.target.position; // Get clicked position
  //   if (!position) return;

  //   // Check if click happened inside an AOI
  //   const aois = decorationsCollectionRef.current?.getRanges();
  //   if (aois?.some((range) => range.containsPosition(position))) {

  //     console.log(position);
  //   }
  // };

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
          // wordWrap: "on", // para di sya magscroll pahiga
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
