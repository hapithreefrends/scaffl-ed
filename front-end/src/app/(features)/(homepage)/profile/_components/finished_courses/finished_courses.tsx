import java from "../../_assets/java.png";
import react from "../../_assets/react.png";
import html from "../../_assets/html.png";
import python from "../../_assets/python.png";
import php from "../../_assets/php.png";
import mysql from "../../_assets/mysql.png";

import { Flex, Stack, Title, Text, Card } from "@mantine/core";

export default function FinishedCourses() {
  const courses = [
    { src: java.src, title: "Basic Java Programming", level: "Basic" },
    { src: react.src, title: "React Development", level: "Intermediate" },
    { src: html.src, title: "HTML Fundamentals", level: "Basic" },
    { src: python.src, title: "Python for Data Science", level: "Advanced" },
    { src: php.src, title: "PHP Styling Techniques", level: "Intermediate" },
    { src: mysql.src, title: "MySql Essentials", level: "Advanced" },
  ];

  return (
    <Stack>
      <Title size="h4" align="flex-start">FINISHED COURSES</Title>
      <Flex
        wrap="wrap"
        justify="flex-start"
        gap="lg"

      >
        {courses.map((course, index) => (
          <Card
            key={index}
            shadow="sm"
            padding="lg"
            style={{
              width: "200px",
              textAlign: "center",
              border: "1px solid #ddd",
              borderRadius: "8px",
            }}
          >
            <img
              src={course.src}
              alt={course.title}
              style={{
                width: "100px",
                height: "40px",
                objectFit: "cover",
                margin: "0 auto",
                borderRadius: "8px",
              }}
            />
            <Text mt="md" weight={500}>
              {course.title}
            </Text>
            <Text size="sm" color="dimmed">
              {course.level}
            </Text>
          </Card>
        ))}
      </Flex>
    </Stack>
  );
}