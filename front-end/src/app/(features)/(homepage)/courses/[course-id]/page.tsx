"use client";

import CourseDetailHeaderLoader from "./_components/course-detail-header-fetch";
import CourseDetailChapterSkeleton from "./_components/loading-skeletons/course-detail-chapter-skeleton";
import CourseDetailHeaderSkeleton from "./_components/loading-skeletons/course-detail-header-skeleton";
import CourseDetailChapter from "./_components/course-detail-chapter";
import useChapterList from "./_hooks/use-chapter-list";
import { Group, Stack, Title } from "@mantine/core";
import { createContext, Suspense } from "react";
import { IconBook } from "@tabler/icons-react";
import { useParams } from "next/navigation";

interface CourseDetailParamsProps {
  id: string;
}

export const CourseIdContext = createContext<string | null>(null);

export default function CourseDetailTopLevel() {
  const { courseid } = useParams();
  console.log("ID top level: " + courseid);
  if (!courseid) return (<Title p="xl">NO SITE FOUND HERE</Title>)
  return (
    <Suspense fallback={<h1>LOADING...</h1>}>
      <CourseDetails id={String(courseid)} />
    </Suspense>
  );
}

function CourseDetails({ id }: CourseDetailParamsProps) {
  console.log("ID: " + id);
  const { data: chapterList } = useChapterList(id);
  return (
    <CourseIdContext.Provider value={id}>
      <Stack w="100%" p="lg">
        <Suspense fallback={<CourseDetailHeaderSkeleton />}>
          <CourseDetailHeaderLoader id={id} />
        </Suspense>

        <Stack py="lg">
          <Group>
            <IconBook />
            <Title order={2}>Chapters</Title>
          </Group>
        </Stack>
        <Suspense fallback={<CourseDetailChapterSkeleton />}>
          {chapterList.map((chapter) => (
            <CourseDetailChapter key={chapter.id} id={chapter.id} />
          ))}
        </Suspense>
      </Stack>
    </CourseIdContext.Provider>
  );
}