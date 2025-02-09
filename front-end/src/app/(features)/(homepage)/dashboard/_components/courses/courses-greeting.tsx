"use client";

import { Flex, Stack, Box } from "@mantine/core";
import classes from "../../_styles/courses-greeting.module.css";
import scaffyCourses from "../../_assets/scaffy-courses.png";

export default function CourseGreetings() {
  return (
    <Flex
      className={classes.greetingContainer}
      w= {{base: "90.6vw", sm: "100%"}}
      align="center"
      justify={"space-between"}
    >
      <Stack className={classes.textContainer} gap="0">
        <h1 className={classes.greetingHeader}>Courses</h1>
        <p className={classes.greetingText}>
          It’s time to roll up your sleeves—Scaffl.ed believes we learn best by
          doing. With Scaffl.ed, you'll dive right into hands-on coding
          challenges that adapt to your needs, helping you learn programming
          effectively and confidently.
        </p>
      </Stack>
      <div className={classes.spacer}></div>
      <img
        className={classes.greetingImage}
        src={scaffyCourses.src}
        alt="Scaffy courses greeting hello"
      />
    </Flex>
  );
}
