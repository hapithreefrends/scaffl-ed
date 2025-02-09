import scaffy from "../../_assets/scaffy-greeting.png";
import classes from "../../_styles/welcome.module.css";
import WelcomeTextLoader from "./welcome-text-fetch";
import WelcomeTextSkeleton from "./welcome-text-skeleton";
import { Flex } from "@mantine/core";
import { Suspense } from "react";

export default function Welcome() {
  return (
    <>
      <Flex
        direction={{ base: "column", md: "row" }}
        w={{ base: "90.6vw", sm: "100%" }}
        align="center"
        justify={"space-between"}
      >
        <Suspense fallback={<WelcomeTextSkeleton />}>
          <WelcomeTextLoader />
        </Suspense>

        {/* I plan to make this an animating video that asyncly loads on its own but no skeleton */}
        <img
          className={classes.greetingImage}
          src={scaffy.src}
          alt="Scaffy greeting hello"
        />
      </Flex>
    </>
  );
}
