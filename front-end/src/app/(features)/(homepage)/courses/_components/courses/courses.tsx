import CourseGreetings from "./courses-greeting";
import CoursesListLoader from "./courses-list-fetch";
import CoursesCardListSkeleton from "./courses-card-list-skeleton";
import { Suspense } from "react";
import { Stack } from "@mantine/core";
import UntakenCoursesListLoader from "./untaken-course-list";

export default function Courses() {
  return (
    <Stack>
      <CourseGreetings />
      <Suspense fallback={<CoursesCardListSkeleton />}>
        <CoursesListLoader />
        <UntakenCoursesListLoader />
      </Suspense>
    </Stack>
  );
}
