"use client";

import { Suspense } from "react";
import { Group, Stack } from "@mantine/core";
import { useParams } from "next/navigation";

import LessonContentLoader from "./_components/fetchers/lesson-content-fetch";
import LessonNavigationLoader from "./_components/fetchers/lesson-navigation-fetch";

import LessonContentSkeleton from "./_components/loading-skeletons/lesson-content-skeleton";
import LessonNavigationSkeleton from "./_components/loading-skeletons/lesson-navigation-skeleton";

export default function Page() {
  const { courseId, lessonSlug } = useParams();

  return (
    <Group w="100%">
      <Stack flex={1} h="100%" align="flex-start">
        <Suspense fallback={<LessonNavigationSkeleton />}>
          <LessonNavigationLoader
            courseId={String(courseId)}
            lessonSlug={String(lessonSlug)}
          />
        </Suspense>
      </Stack>

      <Stack flex={5} h="100%" align="flex-start">
        <Suspense fallback={<LessonContentSkeleton />}>
          <LessonContentLoader
            courseId={String(courseId)}
            lessonSlug={String(lessonSlug)}
          />
        </Suspense>
      </Stack>
    </Group>
  );
}
