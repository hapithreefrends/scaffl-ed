import { Flex, Stack, Image } from "@mantine/core";
import scaffy from "../_assets/scaffy-greeting.png";
import classes from "../_styles/welcome.module.css";

interface welcomeProps {
  name: string;
  affirmation: string;
}
export default function Welcome({ name, affirmation }: welcomeProps) {
  return (
    <Flex direction={{base: 'column', md: 'row'}} w="100%" align="center" justify={"space-between"}>
      <Stack gap="0" pr={50}>
        <h1 className={classes.greetingHeader}>Hi, {name}!</h1>
        <p className={classes.greetingText}>
          {affirmation.length !== 0
            ? affirmation
            : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et."}
        </p>
      </Stack>

      <img className={classes.greetingImage} src={scaffy.src} alt="Scaffy greeting hello" />
    </Flex>
  );
}
