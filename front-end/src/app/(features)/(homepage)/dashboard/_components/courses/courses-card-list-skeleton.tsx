import CourseCardSkeleton from "./course-card-skeleton";
import { Flex } from "@mantine/core";

export default function CoursesCardListSkeleton() {
  return (
    <Flex gap={32} wrap="wrap">
      {Array.from({ length: 6 }).map((_, index) => (
        <CourseCardSkeleton key={index} />
      ))}
    </Flex>
  );
}
