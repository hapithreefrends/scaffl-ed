import CourseGreetings from "../../courses/_components/courses/courses-greeting";
import CoursesListLoader from "./courses-list-fetch";
import CoursesCardListSkeleton from "./courses-card-list-skeleton";
import { Suspense } from "react";
import { Stack } from "@mantine/core";

export default function Courses() {
  return (
    <Stack>
      <CourseGreetings />
      <Suspense fallback={<CoursesCardListSkeleton />}>
        <CoursesListLoader />
      </Suspense>
    </Stack>
  );
}
