import CourseGreetings from "./courses-greeting";
import CoursesListLoader from "./courses-list-fetch";
import { Suspense } from "react";
import CoursesCardListSkeleton from "./courses-card-list-skeleton";

export default function Courses() {
  return (
    <>
      <CourseGreetings />
      <Suspense fallback={<CoursesCardListSkeleton />}>
        <CoursesListLoader />
      </Suspense>
    </>
  );
}
