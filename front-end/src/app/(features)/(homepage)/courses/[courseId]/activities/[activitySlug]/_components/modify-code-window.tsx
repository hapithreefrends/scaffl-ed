"use client";

import * as monaco from "monaco-editor";
import classes from "../_styles/modify-code-window.module.css";
import dynamic from "next/dynamic";
import { IconChecks, IconRestore } from "@tabler/icons-react";
import { Box, Button, Divider, Flex, Group, Stack } from "@mantine/core";
import { Space_Mono } from "next/font/google";
import { act, useEffect, useState } from "react";

/**
 * Initializes the Space Mono font with specified weight and subsets.
 *
 * @constant
 * @type {Object}
 * @property {string} weight - The font weight to be used. Default is "400".
 * @property {string[]} subsets - The subsets of the font to be included. Default is ["latin"].
 */
const spaceMono = Space_Mono({
  weight: "400",
  subsets: ["latin"],
});

/**
 * Dynamically imports the Monaco Editor component for use in the application.
 * 
 * @remarks
 * This component is loaded dynamically to ensure it is not included in the server-side rendering (SSR) process,
 * as Monaco Editor is designed to run only in the browser environment.
 * 
 * @see {@link https://github.com/microsoft/monaco-editor} for more details about the Monaco Editor.
 */
const MonacoEditor = dynamic(() => import("@monaco-editor/react"), {
  ssr: false,
});

/**
 * Represents the properties for an active Area of Interest (AOI) component.
 *
 * @interface ActiveAOIProps
 * @property {string} id - The unique identifier for the AOI.
 * @property {string} code - The code associated with the AOI.
 */
export interface ActiveAOIProps {
    id: string;
    code: string;
}

/**
 * Props for the ModifyCodeWindow component.
 *
 * @interface ModifyCodeWindowProps
 * @property {string} language - The programming language used in the code editor.
 * @property {ActiveAOIProps | undefined} activeAOI - The currently active Area of Interest (AOI), or undefined if none is active.
 * @property {() => void} onCheckTestCasesClick - Callback function triggered when the "Check Test Cases" button is clicked.
 */
interface ModifyCodeWindowProps {
    language: string;
    activeAOI: ActiveAOIProps | undefined;
    onCheckTestCasesClick: () => void;
}

export default function ModifyCodeWindow({language, activeAOI, onCheckTestCasesClick}:ModifyCodeWindowProps) {
  const [AOIText, setAOIText] = useState<string>(activeAOI?.code || "");

  const handleEditorDidMount = (editor: monaco.editor.IStandaloneCodeEditor) => {
    editor.focus();
  };

  useEffect(() => { 
    if (activeAOI) {
        setAOIText(activeAOI.code);
    }
  }, [activeAOI]);

  return (
    <Stack h="100%" gap="0">
      <Box className={classes.editorContainer}>
        <MonacoEditor
          value={AOIText}
          onChange={(value) => setAOIText(value || "")}
          language={language}
          options={{
            fontFamily: `${spaceMono.style.fontFamily}, courier`,
            fontWeight: "bold",
            fontSize: 16,
            minimap: { enabled: false },
            wordWrap: "on",
            scrollBeyondLastLine: false,
            automaticLayout: true,
          }}
          onMount={handleEditorDidMount}
        />
      </Box>

      <Divider my="0" />

      <Flex justify="flex-end" align="center">
        <Group p="md">
          <Button onClick={(e) => setAOIText(activeAOI?.code || "")} variant="outline" color="gray.7">
            <IconRestore />
          </Button>
          <Button onClick={onCheckTestCasesClick} color="violet.5">
            <IconChecks />
            Check Test Cases
          </Button>
        </Group>
      </Flex>
    </Stack>
  );
}
