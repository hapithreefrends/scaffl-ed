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

import useContent from "../../_hooks/use-content";

const MonacoEditor = dynamic(() => import("./_components/code-editor"), {
  ssr: false, // Ensure it's only loaded on the client
});

export default function ActivityEnvironment() {
  const { activitySlug, courseid } = useParams();
  const { data: activityData } = useContent(courseid as string);

  // EXTREMELY HARDCODED
  const items = [
    { title: "Courses", href: "/courses" },
    { title: `Java for Beginners`, href: `/courses/${courseid}` },
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

  const hardCodedTitle = "Primitive Data Types";
  const hardCodedDescriptionHTML = `
  <p>Welcome to your first task on scaffl.ed! Imagine you’re building a friendly
  virtual assistant that will greet users with a personalized message. However,
  the code your friend gave you is full of tiny bugs! Your goal is to fix this
  code so it correctly asks for the user's name and greets them properly. By the
  end, your virtual assistant will be able to say hello to anyone who uses it,
  just as it was meant to! Help your virtual assistant come to life by fixing
  the errors in the code. After debugging, it should ask for the user's name and
  print a warm greeting like:</p>

  <h4>Sample Output: </h4>
  <code>Hello, [name]! Welcome to scaffl.ed.</code>
  `;

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
            title={hardCodedTitle}
            description={hardCodedDescriptionHTML}
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
          <MonacoEditor />
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
