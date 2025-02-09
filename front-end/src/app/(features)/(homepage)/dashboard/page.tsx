import Welcome from "./_components/welcome/welcome";
import Courses from "./_components/courses/courses";
import { Stack } from "@mantine/core";

export default function Dashboard() {
  return (
    <Stack p={"lg"} align="center" mt={{base: "80", sm: 0}}>
      <Welcome />
      <Courses />
    </Stack>
  );
}
