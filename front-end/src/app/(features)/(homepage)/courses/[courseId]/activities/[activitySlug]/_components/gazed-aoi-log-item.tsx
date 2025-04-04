"use client";

import { Code, Stack } from "@mantine/core";
import classes from "../_styles/gazed-aoi-log-item.module.css"

// ONLY FOR TESTING PURPOSES
export interface GazedAOIRangeProps {
  startLineNumber: number;
  startColumn: number;
  endLineNumber: number;
  endColumn: number;
  text: string;
  timestamp: number;
}

export default function GazedAOILogItem({gazedAOIRange} : {gazedAOIRange : GazedAOIRangeProps}) {
    return (
        <Stack gap="0px" className={classes.container} p="md">
            <Code color="transparent">Gaze recorded at: {gazedAOIRange.timestamp}</Code>
            <Code color="transparent">Column Start: {gazedAOIRange.startColumn}</Code>
            <Code color="transparent">Line Start: {gazedAOIRange.startLineNumber}</Code>
            <Code color="transparent">Column End: {gazedAOIRange.endColumn}</Code>
            <Code color="transparent">Line End: {gazedAOIRange.endLineNumber}</Code>
            <Code>Code: {gazedAOIRange.text}</Code>
        </Stack>
    )
}