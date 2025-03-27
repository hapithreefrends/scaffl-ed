import Welcome from "./_components/welcome/welcome";
import CoursesSummary from "./_components/courses/courses-summary";
import Tiles from "./_components/tiles/tiles";
import Achievements from "./_components/achievements/achievements";
import { Stack, Flex } from "@mantine/core";

export default function Dashboard() {
  return (
    <Stack p={"lg"} justify="left" mt={{ base: "80", sm: 0 }}>
      <Welcome />
      <Flex
        direction={{ base: "column", md: "row" }} // Column on mobile, row on larger screens
        gap="lg"
        justify="space-between"
        align="flex-start"
      >
        <div
          style={{
            flex: 1,
            width: "100%", // Full width on mobile
          }}
        >
          <Tiles />
        </div>
        <div
          style={{
            flex: 1,
            width: "100%", // Full width on mobile
          }}
        >
          <Achievements />
        </div>
      </Flex>
      <CoursesSummary />
    </Stack>
  );
}