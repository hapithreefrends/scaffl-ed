'use client'

import { Title } from "@mantine/core";
import { useParams } from "next/navigation";

export default function Activities() {
  const { courseid, activitySlug } = useParams();
  console.log("COURSE ID : " + courseid);
  console.log("LESSON ID : " + activitySlug);

  return <Title p="xl">TBA</Title>;
}
