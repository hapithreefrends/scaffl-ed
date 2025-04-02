import classes from "../_styles/test-cases.module.css";
import { Center, Code, Flex, Stack, Text } from "@mantine/core";

//TODO
export default function TestCaseWindow() {
  return (
    <Stack className={classes.container}>
      {/* <Flex className={classes.header}>
        <Center className={classes.headerTextContainer} p="md">
            <Code className={classes.headerText}>Test Cases</Code>
        </Center>
      </Flex> */}
      <Center bg="teal.6" c="white" w="100%"><Code className={classes.headerText} bg="transparent" c="white">Test Cases</Code></Center>
      <Flex className={classes.windowArea}>TO BE ADDED</Flex>
    </Stack>
  );
}
