"use client";

/*
 * HOUSES THE MAIN CODE EDITOR WINDOW FOR EYE TRACKING
 * CONTAINS CLICKABLE AOIs
 * CODE EDITOR ITSELF IS NOT EDITABLE
 * IRONIC, HUH?
 */

import * as monaco from "monaco-editor";
import classes from "../_styles/code-editor-read-only.module.css";
import Editor, { OnMount } from "@monaco-editor/react";
import { useRef } from "react";
import { Space_Mono } from "next/font/google";

import { shikiToMonaco } from "@shikijs/monaco";
import { createHighlighter } from "shiki";

import { GazedAOIRangeProps } from "./gazed-aoi-log-item";
import { ActiveAOIProps } from "./modify-code-window";

/**
 * CodeEditor component props interface.
 * @interface CodeEditorProps
 * @property {string} code - The code to be displayed in the editor.
 * @property {string} language - The programming language of the code.
 * @property {AOIProps[]} aois - Array of AOI (Area of Interest) objects.
 * @property {(gazedRange: GazedAOIRangeProps) => void} onGazeDetected - Callback triggered when a gaze is detected within an AOI.
 * @property {(aoi: ActiveAOIProps) => void} onAOIClick - Callback triggered when an AOI is clicked.
 */

interface CodeEditorProps {
  code: string;
  language: string;
  aois: AOIProps[];
  onGazeDetected: (gazedRange: GazedAOIRangeProps) => void;
  onAOIClick: (aoi: ActiveAOIProps) => void;
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
export default function CodeEditor({
  code,
  language,
  aois,
  onGazeDetected,
  onAOIClick,
}: CodeEditorProps) {
  [];
  const monacoRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);
  const decorationsCollectionRef =
    useRef<monaco.editor.IEditorDecorationsCollection | null>(null);

  const handleEditorDidMount: OnMount = (editor, monacoInstance) => {
    if (!window.webgazer) return;

    // Apply Shiki Theme
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
    // Retrieve all the current decorations (ranges) in the editor.
    const decorations = editor.getModel()?.getAllDecorations();

    if (!decorations) return; // Exit if there are no decorations available.

    editor.onMouseDown((event) => {
      handleAOIClick(event, editor);
    });

    // COMMENT MUNA, TANGGALIN KO ULI MAMAYA

    // // ANG KULIT ANY NA NGA LANG
    // window.webgazer.setGazeListener((data: any, timestamp: any) => {
    //   if (!data) return;

    //   const { x, y } = data; // Gaze coordinates

    //   const position = getPositionFromCoordinates(x, y, editor);

    //   // If a valid position (line and column) is obtained from the gaze coordinates,
    //   if (position) {
    //     // Loop through each decoration to check if the gaze position falls within it.
    //     decorations.forEach((decoration) => {
    //       // Check if the current decoration's range contains the gaze-detected position.
    //       if (decoration.range.containsPosition(position)) {
    //         // If the gaze falls within the range, pass the range to the provided onGazeDetected callback.
    //         onGazeDetected({
    //           startLineNumber: decoration.range.startLineNumber,
    //           startColumn: decoration.range.startColumn,
    //           endLineNumber: decoration.range.endLineNumber,
    //           endColumn: decoration.range.endColumn,
    //           text: editor.getModel()?.getValueInRange(decoration.range) || "NaN",
    //           timestamp: timestamp
    //         });
    //       }
    //     });
    //   }
    // });
  };

  const activeAOIRef = useRef<string | null>(null); // Store the ID of the last active AOI

  const handleAOIClick = (
    event: monaco.editor.IEditorMouseEvent,
    editor: monaco.editor.IStandaloneCodeEditor
  ) => {
    const position = event.target.position;
    const aoiDecorations = editor
      .getModel()
      ?.getAllDecorations()
      .filter(
        (decoration) => decoration.options.inlineClassName === classes.aoi
      );

    if (!position || !aoiDecorations) return;

    let selectedAOI: string | null = null;

    aoiDecorations.forEach((decoration) => {
      const decorationRange = decoration.range;

      if (decorationRange.containsPosition(position)) {
        editor.setSelection(decorationRange);

        const code = editor.getModel()?.getValueInRange(decorationRange);
        if (!code) return;

        // Store the selected AOI ID for state tracking
        selectedAOI = decoration.id;

        onAOIClick({ id: decoration.id, code: code });
      }
    });

    // Only update decorations if we found a selected AOI
    if (selectedAOI) {
      activeAOIRef.current = selectedAOI; // Set the active AOI before calling updateDecorations
      updateDecorations(editor);
    }
  };

  const updateDecorations = (editor: monaco.editor.IStandaloneCodeEditor) => {
    if (!monacoRef.current || !decorationsCollectionRef.current) return;

    // Debugging: Log the active AOI and aois array
    // console.log("Active AOI:", activeAOIRef.current);
    // console.log("AOIs:", aois);

    const updatedDecorations = aois.map((aoi: AOIProps, index) => {
      const range = new monaco.Range(
        aoi.start_line,
        aoi.start_column,
        aoi.end_line,
        aoi.end_column
      );

      const aoiId = editor.getModel()?.getAllDecorations()?.[index]?.id;
      const inlineClassName =
        activeAOIRef.current === aoiId ? classes.aoiSelected : classes.aoi;

      console.log(activeAOIRef.current);
      console.log(aoi.id);

      return {
        range,
        options: {
          isWholeLine: true,
          inlineClassName,
        },
      };
    });

    // Apply new decorations, setting styles based on whether the AOI is selected
    decorationsCollectionRef.current.set(updatedDecorations);

    // Debugging: Log the new decorations applied
    // console.log("Updated Decorations:", updatedDecorations);
  };

  // const activeAOIRef = useRef<string | null>(null); // Store the ID of the last active AOI

  // const handleAOIClick = (
  //   event: monaco.editor.IEditorMouseEvent,
  //   editor: monaco.editor.IStandaloneCodeEditor
  // ) => {
  //   const position = event.target.position;
  //   const aoiDecorations = editor
  //     .getModel()
  //     ?.getAllDecorations()
  //     .filter(
  //       (decoration) => decoration.options.inlineClassName === classes.aoi
  //     );

  //   if (!position || !aoiDecorations) return;

  //   let selectedAOI = null;

  //   aoiDecorations.forEach((decoration) => {
  //     const decorationRange = decoration.range;

  //     if (decorationRange.containsPosition(position)) {
  //       editor.setSelection(decorationRange);

  //       const code = editor.getModel()?.getValueInRange(decorationRange);
  //       if (!code) return;

  //       // Store the selected AOI ID for state tracking
  //       selectedAOI = decoration.id;

  //       onAOIClick({ id: decoration.id, code: code });
  //     }
  //   });

  //   if (selectedAOI) {
  //     updateDecorations(selectedAOI);
  //   }
  // };

  // const updateDecorations = (selectedAOI: string) => {
  //   if (!monacoRef.current || !decorationsCollectionRef.current) return;

  //   const updatedDecorations = aois.map((aoi: AOIProps) => {
  //     const range = new monaco.Range(
  //       aoi.start_line,
  //       aoi.start_column,
  //       aoi.end_line,
  //       aoi.end_column
  //     );

  //     const inlineClassName =
  //       activeAOIRef.current === aoi.id ? classes.aoiSelected : classes.aoi;

  //     return {
  //       range,
  //       options: {
  //         isWholeLine: true,
  //         inlineClassName,
  //       },
  //     };
  //   });

  //   // Apply new decorations, setting styles based on whether the AOI is selected
  //   decorationsCollectionRef.current.set(updatedDecorations);

  //   // Update the active AOI reference
  //   activeAOIRef.current = selectedAOI;
  // };

  /**
   * Maps a vertical `y` coordinate to a line number within the Monaco Editor.
   *
   * @param {number} y - The vertical coordinate (absolute on the screen).
   * @param {monaco.editor.IStandaloneCodeEditor} editor - The Monaco Editor instance.
   * @returns {number | null} - The line number at the specified vertical coordinate, or null if not valid.
   *
   * This function considers the editor's scroll position and adjusts the `y` coordinate relative to the editor.
   */
  const getLineNumberFromOffset = (
    y: number,
    editor: monaco.editor.IStandaloneCodeEditor
  ) => {
    const editorRect = editor.getDomNode()?.getBoundingClientRect();
    const editorScrollTop = editor.getScrollTop();

    if (!editorRect) return;

    // Adjust y relative to the editor's top and current scroll position
    const adjustedY = y - editorRect.top + editorScrollTop;

    const model = editor.getModel();
    if (!model) return null;

    const lineCount = model.getLineCount();
    for (let lineNumber = 1; lineNumber <= lineCount; lineNumber++) {
      const lineTop = editor.getTopForLineNumber(lineNumber);
      const nextLineTop = editor.getTopForLineNumber(lineNumber + 1);

      if (adjustedY >= lineTop && adjustedY < nextLineTop) {
        return lineNumber;
      }
    }

    // If y matches the very last line
    return lineCount;
  };

  /**
   * Maps a horizontal `x` coordinate to a column within a specific line in the Monaco Editor.
   *
   * @param {number} x - The horizontal coordinate (absolute on the screen).
   * @param {number} lineNumber - The line number to check.
   * @param {monaco.editor.IStandaloneCodeEditor} editor - The Monaco Editor instance.
   * @returns {number | null} - The column number at the specified horizontal coordinate, or null if not valid.
   *
   * This function adjusts the `x` coordinate relative to the editor's position and scroll state.
   */
  const getColumnFromOffset = (
    x: number,
    lineNumber: number,
    editor: monaco.editor.IStandaloneCodeEditor
  ) => {
    const editorRect = editor.getDomNode()?.getBoundingClientRect();
    const editorScrollLeft = editor.getScrollLeft();

    if (!editorRect) return;

    // Adjust x relative to the editor's left and current scroll position
    const adjustedX = x - editorRect.left + editorScrollLeft;

    const model = editor.getModel();
    if (!model) return null;

    const lineContent = model.getLineContent(lineNumber);
    for (let column = 1; column <= lineContent.length + 1; column++) {
      const columnOffset = editor.getOffsetForColumn(lineNumber, column);

      if (adjustedX < columnOffset) {
        return column - 1;
      }
    }

    return lineContent.length + 1; // Fallback to the end of the line
  };

  /**
   * Converts screen coordinates (`x`, `y`) to a Monaco `Position` object (line number and column).
   *
   * @param {number} x - The horizontal coordinate (absolute on the screen).
   * @param {number} y - The vertical coordinate (absolute on the screen).
   * @param {monaco.editor.IStandaloneCodeEditor} editor - The Monaco Editor instance.
   * @returns {monaco.Position | null} - A Monaco `Position` object representing the line and column, or null if not valid.
   *
   * This function checks if the coordinates are within the editor bounds and then calculates the corresponding position.
   */
  const getPositionFromCoordinates = (
    x: number,
    y: number,
    editor: monaco.editor.IStandaloneCodeEditor
  ) => {
    const lineNumber = getLineNumberFromOffset(y, editor);
    if (!lineNumber) return null;

    const column = getColumnFromOffset(x, lineNumber, editor);
    if (!column) return;
    return new monaco.Position(lineNumber, column);
  };

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

  return (
    <Editor
      width="100%"
      height="100%"
      className="readOnlyEditor"
      language={language}
      value={code}
      theme="catppuccin-latte"
      // onChange={(value) => setCode(value || "")}
      onMount={handleEditorDidMount}
      options={{
        fontSize: 16,
        lineHeight: 28,
        fontFamily: `${spaceMono.style.fontFamily}, courier`,
        fontWeight: "bold",
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
        stickyScroll: { enabled: false },
      }}
    />
  );
}
