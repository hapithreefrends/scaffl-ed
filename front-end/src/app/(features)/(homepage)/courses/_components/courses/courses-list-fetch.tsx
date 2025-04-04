"use client"

import { Flex } from "@mantine/core";

import { useSuspenseQuery } from "@tanstack/react-query";
import { createClient } from "@/utilities/supabase/client";

import CourseCard from "./course-card";

const fetchCourseListData = async () => {
  const supabase = createClient();

  const { data, error } = await supabase.from("Course").select(
    `
      *
    `
  );

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

// in reality does the actual fetching
export default function CoursesListLoader() {
  const { data } = useSuspenseQuery({
    queryKey: ["courses"],
    queryFn: () => fetchCourseListData(),
  });

  return (
    <Flex wrap="wrap" gap={32}>
      {data.map((course) => (
        <CourseCard id={course.id} picture="https://logos-world.net/wp-content/uploads/2023/08/React-Symbol.png" title={course.name} description={course.description} level={course.difficulty} href={`courses/${course.id}`} key={course.id} />
      ))}
    </Flex>
  );
}
