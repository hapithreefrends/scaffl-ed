import CoursesListLoader from "../../../_components/courses/courses-list-fetch";
import { Suspense } from "react";
import CoursesCardListSkeleton from "../../../_components/courses/courses-card-list-skeleton";
import { Stack, Title } from "@mantine/core";

export default function CoursesSummary() {
  return (
    <Stack>
      <Title order={2}>Ongoing Courses</Title>
      <Suspense fallback={<CoursesCardListSkeleton />}>
        <CoursesListLoader />
      </Suspense>
    </Stack>
  );
}
