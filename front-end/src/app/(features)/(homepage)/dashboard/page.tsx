import Welcome from "./_components/welcome";
import Courses from "./_components/courses/courses";
import { Stack } from "@mantine/core";

export default function Dashboard() {
  return (
    <Stack p={"lg"}>
      <Welcome name="Adrian" affirmation="" />
      <Courses />
    </Stack>
  );
}
