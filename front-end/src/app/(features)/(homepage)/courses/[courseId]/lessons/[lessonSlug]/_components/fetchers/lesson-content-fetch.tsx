"use client";

import React from "react";
import { useSuspenseQuery } from "@tanstack/react-query";

import { createClient } from "@/utilities/supabase/client";
import LessonContent from "../lesson-content";

interface LessonContentLoaderProps {
  courseId: string;
  lessonSlug: string;
}

const fetchLessonContentData = async (courseId: string, lessonSlug: string) => {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("ActivityLesson")
    .select(
      `
        *,
        ...Chapter(course_id)
      `
    )
    .eq("Chapter.course_id", courseId)
    .eq("slug", lessonSlug)
    .limit(1)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export default function LessonContentLoader({
  courseId,
  lessonSlug,
}: LessonContentLoaderProps) {
  const { data } = useSuspenseQuery({
    queryKey: ["lesson", courseId, lessonSlug],
    queryFn: () => fetchLessonContentData(courseId, lessonSlug),
  });

  console.log(data);

  return <LessonContent name={data?.name} description={data?.description} htmlContent={data?.content} />;
}
