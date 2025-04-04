"use client";

import classes from "../_styles/scaffy-feedback-window.module.css";
import GazedAOILogItem from "./gazed-aoi-log-item";
import { Center, Code, Flex, Stack, Text } from "@mantine/core";
import { GazedAOIRangeProps } from "./gazed-aoi-log-item";
import { useEffect, useRef } from "react";

// TODO
export default function ScaffyFeedbackWindow({
  gazedAOIRangeList,
}: {
  gazedAOIRangeList: GazedAOIRangeProps[];
}) {
  const stackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (stackRef.current) {
      stackRef.current.scrollTop = stackRef.current.scrollHeight 
    }

    console.log("SCROLLL!!")
  }, [gazedAOIRangeList]);

  return (
    <Stack className={classes.container}>
      <Flex className={classes.header}>
        <Center className={classes.headerTextContainer} p="md">
          <Code className={classes.headerText}>Scaffy"s Corner</Code>
        </Center>
      </Flex>
      <Stack ref={stackRef} className={classes.windowArea}>
        {/* NAKAWRAP SANA AS CHILDREN PROP KUNG SA BACKEND YUNG FETCHING NG gazedAOIRangeList
         * SO MAWAWALA RIN UNG gazedAOIRangeList PROP DITO SA ScaffyFeedbackWindow
         * PERO DITO MUNA SIYA FOR NOW DAHIL ANG FETCHING NETO AS OF NOW AY PURELY ON CLIENT SIDE
         */}
        {gazedAOIRangeList.map((gazedAOIRange, index) => (
          <GazedAOILogItem gazedAOIRange={gazedAOIRange} key={index} />
        ))}
      </Stack>
    </Stack>
  );
}
