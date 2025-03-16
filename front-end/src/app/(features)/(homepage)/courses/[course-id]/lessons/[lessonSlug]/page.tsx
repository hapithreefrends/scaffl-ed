'use client'

import { Title } from "@mantine/core";
import { useParams } from "next/navigation";

export default function Lesson() {
  const { courseid, lessonSlug } = useParams();
  console.log("COURSE ID : " + courseid);
  console.log("LESSON ID : " + lessonSlug);

  return <Title p="xl">TBA</Title>;
}
