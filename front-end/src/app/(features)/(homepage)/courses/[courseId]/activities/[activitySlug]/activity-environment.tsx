"use client";

/*
 * This page contains the home page for the course activity
 * It contains problem title, problem description, and the prewritten buggy code in the code editor
 * Prewritten code are segmented in AOI (Area of Interest) and the buggy code is in the AOI
 * The user can edit the code in the AOI on a window below and run the code to see the output
 */

import classes from "./_styles/activity.module.css";
import dynamic from "next/dynamic";
import ProblemInfo from "./_components/problem-info";
import ScaffyFeedbackWindow from "./_components/scaffy-feedback-window";
import TestCaseWindow from "./_components/test-cases-window";
import { useParams } from "next/navigation";
import {
  Group,
  Flex,
  Anchor,
  Breadcrumbs,
  Text,
  Stack,
  Center,
  Code,
} from "@mantine/core";

import useActivity from "../_hooks/use-activity";
import useAoi from "../_hooks/use-aoi";
import useCourseHeader from "../../_hooks/use-course-header";

// Ensure it's only loaded on the client
const MonacoEditor = dynamic(() => import("./_components/code-editor"), {
  ssr: false
})

export default function ActivityEnvironment() {
  const { activitySlug, courseId } = useParams();
  
  const { data: activityData } = useActivity(activitySlug as string);
  const { data: aoiData } = useAoi(activityData.id)
  const { data: courseData } = useCourseHeader(courseId as string);

  const items = [
    { title: "Courses", href: "/courses" },
    { title: `${courseData.name}`, href: `/courses/${courseId}` },
    { title: `${activityData.name}`, href: null },
  ].map((item, index) =>
    item.href ? (
      <Anchor href={item.href} key={index}>
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
      <Group p="md" w="100vw" h="50" className={classes.header}>
        <Breadcrumbs>{items}</Breadcrumbs>
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

        {/* MAIN IDE */}
        <Stack className={classes.window}>
          <Flex className={classes.windowHeader}>
            <Center className={classes.headerTextContainer} p="md">
              <Code className={classes.headerText}>helloWorld.java</Code>
            </Center>
          </Flex>
          <MonacoEditor code={activityData.code} language={activityData.language} aois={[...aoiData]}/>
        </Stack>

        {/* OUTPUT AND FEEDBACK */}
        <div className={`${classes.sideWindow} ${classes.window} ${classes.multiWindow}`}>
          <ScaffyFeedbackWindow />
          <TestCaseWindow />
        </div>
      </div>
    </Flex>
  );
}
