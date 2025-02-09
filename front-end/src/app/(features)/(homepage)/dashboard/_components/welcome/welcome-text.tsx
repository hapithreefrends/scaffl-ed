import { Stack, Text, Title } from "@mantine/core";
import classes from "../../_styles/welcome.module.css";

interface welcomeProps {
  name: string;
  affirmation: string;
}

export default function WelcomeText({ name, affirmation }: welcomeProps) {
  return (
    <Stack gap="0" pr={{ base: 0, md: 50 }} className={classes.greetingText}>
      <Title order={1} className={classes.greetingHeader}>
        Hi, {name}!
      </Title>
      <Text className={classes.greetingBody}>
        {affirmation.length !== 0
          ? affirmation
          : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et."}
      </Text>
    </Stack>
  );
}


