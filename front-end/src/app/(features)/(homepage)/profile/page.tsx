import FinishedCourses from "./_components/finished_courses/finished_courses";
import Details from "./_components/details/details";
import Badges from "./_components/badges/badges";
import Pictures from "./_components/pictures/pictures";

import { Stack, Flex } from "@mantine/core";
// added comment

export default function Profile() {
  return (
    <Stack w="100%  " justify="left" mt={{ base: "80", sm: 0 }}>
      <Pictures />
      <Stack p={"xl"}>
        <Details />
        <Badges />
        <FinishedCourses />
      </Stack>
    </Stack>
  );
}