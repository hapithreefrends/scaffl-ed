import CourseGreetings from "./courses-greeting";
import CoursesList from "./courses-list";
import { Suspense } from "react";
import CoursesCardListSkeleton from "./courses-card-list-skeleton";

export default function Courses() {
  return (
    <>
      <CourseGreetings />
      <Suspense fallback={<CoursesCardListSkeleton />}>
        <CoursesList />
      </Suspense>
    </>
  );
}
