"use client";

import React from "react";

import { useSuspenseQuery } from "@tanstack/react-query";
import { createClient } from "@/utilities/supabase/client";

import LessonNavigation from "../lesson-navigation";

interface LessonNavigationLoaderProps {
  courseId: string;
  lessonSlug: string;
}

const fetchLessonNavigationData = async (courseId: string) => {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("ActivityLesson")
    .select(
      `
        *,
        ...Chapter!inner(course_id),
        ...Type!inner(type_name: name)
      `
    )
    .eq("Type.name", "Lesson")
    .eq("Chapter.course_id", courseId);

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export default function LessonNavigationLoader({
  courseId,
}: LessonNavigationLoaderProps) {
  const { data } = useSuspenseQuery({
    queryKey: ["courses", courseId, "lessonsz",],
    queryFn: () => fetchLessonNavigationData(courseId),
  });

  return <LessonNavigation lessons={data} />;
}
