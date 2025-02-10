import CourseGreetings from "./courses-greeting";
import CoursesListLoader from "../../../_components/courses/courses-list-fetch";
import CoursesCardListSkeleton from "../../../_components/courses/courses-card-list-skeleton";
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
