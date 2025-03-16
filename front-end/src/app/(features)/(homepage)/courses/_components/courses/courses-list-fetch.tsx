'use client'

import { Flex } from "@mantine/core";

import { useSuspenseQuery } from "@tanstack/react-query";
import { createClient } from "@/utilities/supabase/client";

import CourseCard from "./course-card";

const mockData = [
  {
    id: "1",
    picture:
      "https://logos-world.net/wp-content/uploads/2023/08/React-Symbol.png",
    title: "React Programming",
    level: "intermediate",
    description:
      "Take your React skills further by diving into application development, where you’ll learn to design, build, and deploy complete React applications. ",
  },
  {
    id: "2",
    picture: "https://cdn.worldvectorlogo.com/logos/python-6.svg",
    title: "Basic Python Programming",
    level: "beginner",
    description:
      "Learn to write HTML servlets to create dynamic web applications, handling HTTP requests and responses to deliver interactive content. ",
  },
  {
    id: "3",
    picture:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png",
    title: "HTML5 Web Development",
    level: "beginner",
    description:
      "Learn to write HTML servlets to create dynamic web applications, handling HTTP requests and responses to deliver interactive content. ",
  },
];

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
