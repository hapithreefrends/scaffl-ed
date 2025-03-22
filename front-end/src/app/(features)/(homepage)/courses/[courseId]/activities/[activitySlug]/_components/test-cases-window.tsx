import classes from "../_styles/test-cases.module.css";
import { Center, Code, Flex, Stack, Text } from "@mantine/core";

//TODO
export default function TestCaseWindow() {
  return (
    <Stack className={classes.container}>
      <Flex className={classes.header}>
        <Center className={classes.headerTextContainer} p="md">
            <Code className={classes.headerText}>Test Cases</Code>
        </Center>
      </Flex>
      <Flex className={classes.windowArea}>l;k;lkl;'k';js</Flex>
    </Stack>
  );
}
