import scaffy from "../../_assets/scaffy-welcome-transparent.png";
import classes from "../../_styles/welcome.module.css";
import WelcomeTextLoader from "./welcome-text-fetch";
import WelcomeTextSkeleton from "./welcome-text-skeleton";
import { Flex, Stack, Title, Text } from "@mantine/core";
import { Suspense } from "react";

export default function Welcome() {
  return (
    <Flex
      p="lg"
      className={classes.greetingContainer}
      w={{ base: "90.6vw", sm: "100%" }}
      align="center"
      justify={"space-between"}
    >
      <Suspense fallback={<WelcomeTextSkeleton />}>
        <WelcomeTextLoader />
      </Suspense>
      <img
        className={classes.greetingImage}
        src={scaffy.src}
        alt="Scaffy courses greeting hello"
      />
    </Flex>
  );
}
