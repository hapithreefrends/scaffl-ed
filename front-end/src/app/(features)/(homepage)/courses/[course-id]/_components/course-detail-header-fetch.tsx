"use client";

import CourseDetailHeader from "./course-detail-header";
import { CourseDetailHeaderProps } from "./course-detail-header";
import { useSuspenseQuery } from "@tanstack/react-query";

import courseImage from "../_assets/scaffy-shrug.png"

// parameter to course detail fetching
// no real life implementation yet
interface CourseDetailHeaderFetchProps {
  id: string;
}

// pekeng fetching
const fetchCourseHeader = async (
  course_id: string
): Promise<CourseDetailHeaderProps> => {
  await new Promise((res) => setTimeout(res, 2500));
  return {
    title: "Java for Beginners",
    description:
      "Java is a versatile, object-oriented language known for its “write once, run anywhere” capability. Used in mobile, desktop, and enterprise applications, it offers reliability, security, and cross-platform compatibility. Its modular structure simplifies maintenance and scaling, while extensive libraries and a strong community make it ideal for developers of all levels.",
    image: courseImage.src,
  };
};

//should contain the real life fetching implementation
export default function CourseDetailHeaderLoader({
  id,
}: CourseDetailHeaderFetchProps) {
  const { data: course } = useSuspenseQuery({
    queryKey: ["course", id],
    queryFn: () => fetchCourseHeader(id),
  });

  return (
    <CourseDetailHeader title={course.title} description={course.description} image={course.image} />
  );
}
