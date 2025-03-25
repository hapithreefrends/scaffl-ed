import scaffy from "@/app/(features)/(homepage)/dashboard/_assets/scaffy-welcome-transparent.png";
import classes from "../_styles/lesson-header.module.css";
import { Flex, Stack, Text, Title } from "@mantine/core";

interface LessonHeaderProps {
  name: string;
  description: string;
}

export default function LessonHeader({
  name,
  description
}: LessonHeaderProps) {
  return (
    <Flex
      p="lg"
      className={classes.greetingContainer}
      w={{ base: "90.6vw", sm: "100%" }}
      align="center"
      justify={"space-between"}
    >
      <Stack className={classes.textContainer} gap="0">
        <Title order={1} className={classes.greetingHeader}>
          {name}
        </Title>
        <Text className={classes.greetingText} fs="italic">
          {description ?? "No description provided."}
        </Text>
      </Stack>
      <img
        className={classes.greetingImage}
        src={scaffy.src}
        alt="Scaffy courses greeting hello"
      />
    </Flex>
  );
}
