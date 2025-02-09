import { Flex, SimpleGrid } from "@mantine/core";
import { lazy } from "react";

const mockData = [
  {
    id: 1,
    picture:
      "https://logos-world.net/wp-content/uploads/2023/08/React-Symbol.png",
    title: "React Programming",
    level: "intermediate",
    description:
      "Take your React skills further by diving into application development, where you’ll learn to design, build, and deploy complete React applications. ",
    href: "",
  },
  {
    id: 2,
    picture: "https://cdn.worldvectorlogo.com/logos/python-6.svg",
    title: "Basic Python Programming",
    level: "beginner",
    description:
      "Learn to write HTML servlets to create dynamic web applications, handling HTTP requests and responses to deliver interactive content. ",
    href: "",
  },
  {
    id: 3,
    picture:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png",
    title: "HTML5 Web Development",
    level: "beginner",
    description:
      "Learn to write HTML servlets to create dynamic web applications, handling HTTP requests and responses to deliver interactive content. ",
    href: "",
  },
];

// Simulates a delay in loading the CourseCard component
const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Applies the simulated delay
const LazyCoursesList = lazy(() =>
  wait(10000).then(() => import("./course-card"))
);

export default function CoursesList() {
  return (
    // <SimpleGrid 
    // spacing={32}
    // cols={{ base: 1, md: 2, lg: 3 }}
    // >
    //   {mockData.map((course) => (
    //     <LazyCoursesList {...course} key={course.id} />
    //   ))}
    // </SimpleGrid>
    <Flex wrap="wrap" gap={32}>
      {mockData.map((course) => (
        <LazyCoursesList {...course} key={course.id} />
      ))}
    </Flex>
  );
}
