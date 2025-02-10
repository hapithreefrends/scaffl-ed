import { Stack, Text, Title } from "@mantine/core";
import classes from "../../_styles/welcome.module.css";

interface welcomeProps {
  name: string;
  affirmation: string;
}

export default function WelcomeText({ name, affirmation }: welcomeProps) {
  return (
    <Stack className={classes.textContainer} gap="0">
    <Title order={1} className={classes.greetingHeader}>Hi {name}!</Title>
    <Text className={classes.greetingText}>
      {affirmation}
    </Text>
  </Stack>
  );
}


