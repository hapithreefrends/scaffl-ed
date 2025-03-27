import Welcome from "./_components/welcome/welcome";
import CoursesSummary from "./_components/courses/courses-summary";
import Tiles from "./_components/tiles/tiles";
import { Stack } from "@mantine/core";

export default function Dashboard() {
  return (
    <Stack p={"lg"} justify="left" mt={{ base: "80", sm: 0 }}>
      <Welcome />
      <CoursesSummary />
      <Tiles />
    </Stack>
  );
}
