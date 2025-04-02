/**
 * @fileoverview This file contains the main component for the course activity environment page.
 * It includes the problem title, problem description, and the prewritten buggy code in the code editor.
 * The prewritten code is segmented into Areas of Interest (AOI), and the buggy code is in the AOI.
 * Users can edit the code in the AOI in a window below and run the code to see the output.
 *
 * @module ActivityEnvironment
 */

import classes from "./_styles/activity.module.css";
import dynamic from "next/dynamic";
import ProblemInfo from "./_components/problem-info";
import ScaffyFeedbackWindow from "./_components/scaffy-feedback-window";
import TestCaseWindow from "./_components/test-cases-window";
import { useParams } from "next/navigation";
import { useState } from "react";
import { GazedAOIRangeProps } from "./_components/gazed-aoi-log-item";
import {
  Group,
  Flex,
  Anchor,
  Breadcrumbs,
  Text,
  Stack,
  Center,
  Code,
  Box,
  Image,
  Title,
} from "@mantine/core";

import scaffyLogo from "../../../../../../_assets/images/logos/icon/logo-icon-flat.svg";

import useActivity from "../_hooks/use-activity";
import useAoi from "../_hooks/use-aoi";
import useCourseHeader from "../../_hooks/use-course-header";
import ModifyCodeWindow, {
  ActiveAOIProps,
} from "./_components/modify-code-window";
import { Range } from "monaco-editor";

// Ensure it's only loaded on the client
const MonacoEditor = dynamic(
  () => import("./_components/code-editor-read-only-window"),
  {
    ssr: false,
  }
);

/**
 * The main component for the course activity environment page.
 *
 * @component
 * @returns {JSX.Element} The rendered component.
 */
export default function ActivityEnvironment() {
  const { activitySlug, courseId } = useParams();
  const { data: activityData } = useActivity(activitySlug as string);
  const { data: aoiData } = useAoi(activityData.id);
  const { data: courseData } = useCourseHeader(courseId as string);

  const [gazeRange, setGazeRange] = useState<GazedAOIRangeProps[]>([]);
  const [activeAOI, setActiveAOI] = useState<ActiveAOIProps | undefined>(
    undefined
  );

  const items = [
    { title: "Courses", href: "/courses" },
    { title: `${courseData.name}`, href: `/courses/${courseId}` },
    { title: `${activityData.name}`, href: null },
  ].map((item, index) =>
    item.href ? (
      <Anchor c="teal.9" href={item.href} key={index}>
        {item.title}
      </Anchor>
    ) : (
      <Text className={classes.breadcrumbsCurrentLink} key={index}>
        {item.title}
      </Text>
    )
  );

  return (
    <Flex direction="column" h="100vh">
      {/* HEADER */}
      <Group justify="space-between" p="sm" w="100vw" h="50">
        <Group h="100%">
          <Image h="100%" src={scaffyLogo.src} />
          <Breadcrumbs>{items}</Breadcrumbs>
        </Group>

        <Group h="100%">
          {/* HARCODED LOL 😂 */}
          <Title order={5}>Daily XP: 5</Title>
        </Group>
      </Group>

      {/* IDE ACTIVITY AREA */}
      <div className={classes.activityContainer}>
        {/* PROBLEM INFO */}
        <div
          className={`${classes.sideWindow} ${classes.problemWindow} ${classes.window}`}
        >
          <ProblemInfo
            title={activityData.name}
            description={activityData.content}
            xp={100}
          />
        </div>

        {/* MAIN IDE CODE EDITOR */}
        <Stack
          className={`${classes.window} ${classes.codeWindowContainer}`}
          gap="0"
        >
          {/* CLICK AOI WINDOW */}
          <Stack h="70%" gap="0" className={classes.codeWindow}>
            <Flex className={classes.windowHeader}>
              <Center className={classes.headerTextContainer} p="md">
                <Code c="black" className={classes.headerText}>
                  helloWorld.java
                </Code>
              </Center>
            </Flex>

            <Box className={classes.editorContainer} pt="sm">
              <MonacoEditor
                code={activityData.code}
                language={activityData.language}
                aois={[...aoiData]}
                onGazeDetected={(range) =>
                  setGazeRange((prev) => [...prev, range])
                }
                onAOIClick={(activeAOI) => setActiveAOI(activeAOI)}
              />
            </Box>
          </Stack>

          <Stack flex="1" gap="0" className={classes.codeWindow}>
            {/* <Flex className={classes.windowHeader}>
              <Center className={classes.headerTextContainer} p="md">
                <Code className={classes.headerText}>Modify Code</Code>
              </Center>
            </Flex> */}
            <Center bg="violet.5" c="white" w="100%">
              <Code
                className={classes.modifyCodeText}
                bg="transparent"
                c="white"
              >
                Modify Code
              </Code>
            </Center>
            <Box className={classes.editorContainer}>
              <ModifyCodeWindow
                language={activityData.language}
                activeAOI={activeAOI || undefined}
                onResetClick={() => console.log("CLICKED RESET")}
                onCheckTestCasesClick={() =>
                  console.log("CLICKED CHECK TEST CASES")
                }
              />
            </Box>
          </Stack>
        </Stack>

        {/* OUTPUT AND FEEDBACK */}
        <div
          className={`${classes.sideWindow} ${classes.window} ${classes.multiWindow}`}
        >
          <ScaffyFeedbackWindow gazedAOIRangeList={gazeRange} />
          <TestCaseWindow />
        </div>
      </div>
    </Flex>
  );
}
