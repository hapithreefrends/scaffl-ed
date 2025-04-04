"use client";

import CourseDetailHeader from "./course-detail-header";
import { CourseDetailHeaderProps } from "./course-detail-header";
import { useSuspenseQuery } from "@tanstack/react-query";
import { createClient } from "@/utilities/supabase/client";

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
  const supabase = createClient();
  const { data, error } = await supabase
    .from("Course")
    .select(
      `
        name,
        description
      `
    )
    .eq("id", course_id)
    .limit(1)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return {
    title: data.name,
    description: data.description,
    image: courseImage.src
  };
};

//should contain the real life fetching implementation
export default function CourseDetailHeaderLoader({
  id,
}: CourseDetailHeaderFetchProps) {
  const { data: course } = useSuspenseQuery({
    queryKey: ["course", "header", id],
    queryFn: () => fetchCourseHeader(id),
  });

  return (
    <CourseDetailHeader title={course.title} description={course.description} image={course.image} />
  );
}
