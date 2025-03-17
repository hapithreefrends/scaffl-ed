import classes from "../_styles/scaffy-feedback-window.module.css";
import { Center, Code, Flex, Stack, Text } from "@mantine/core";

export default function ScaffyFeedbackWindow() {
  return (
    <Stack className={classes.container}>
      <Flex className={classes.header}>
        <Center className={classes.headerTextContainer} p="md">
            <Code className={classes.headerText}>Scaffy's Corner</Code>
        </Center>
      </Flex>
      <Flex className={classes.windowArea}>dfkjsdfk;js</Flex>
    </Stack>
  );
}
