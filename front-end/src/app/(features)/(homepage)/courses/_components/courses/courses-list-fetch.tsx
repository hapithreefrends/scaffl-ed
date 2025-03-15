import { Flex, SimpleGrid } from "@mantine/core";
import { lazy } from "react";
import Link from "next/link";

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

// Simulates a delay in loading the CourseCard component
const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Applies the simulated delay
const LazyCourseCard = lazy(() =>
  wait(4000).then(() => import("./course-card"))
);

// in reality does the actual fetching
export default async function CoursesListLoader() {
  return (
    <Flex wrap="wrap" gap={32}>
      {mockData.map((course) => (
          <LazyCourseCard {...course} href={`courses/${course.id}`} key={course.id} />
      ))}
    </Flex>
  );
}
