"use client"

import CourseDetailHeader from "./course-detail-header";
import { CourseDetailHeaderProps } from "./course-detail-header";
import { useSuspenseQuery } from "@tanstack/react-query";

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
      "Java is a powerful, versatile programming language known for its “write once, run anywhere” capability. It’s widely used across various industries to develop applications ranging from mobile and desktop applications to large-scale enterprise systems. Java’s object-oriented structure allows developers to create modular, reusable code, making it easier to maintain and scale applications over time. Known for its reliability, security, and cross-platform compatibility, Java is a top choice for applications that demand high performance and stability. With extensive libraries and a vibrant community, Java remains a foundational language for both beginners and experienced developers.",
  };
};

//should contain the real life fetching implementation
export default function CourseDetailHeaderLoader({
  id,
}: CourseDetailHeaderFetchProps) {
    const { data : course } = useSuspenseQuery({
        queryKey: ["course", id],
        queryFn: () => fetchCourseHeader(id),
    });

    return  (<CourseDetailHeader title={course.title} description={course.description}/>)
}