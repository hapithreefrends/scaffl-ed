"use client";

import CourseDetailHeaderLoader from "./_components/course-detail-header-fetch";
import CourseDetailChapterSkeleton from "./_components/loading-skeletons/course-detail-chapter-skeleton";
import CourseDetailHeaderSkeleton from "./_components/loading-skeletons/course-detail-header-skeleton";
import CourseDetailChapter from "./_components/course-detail-chapter";
import useChapterList from "./_hooks/use-chapter-list";
import { Group, Loader, Stack, Title } from "@mantine/core";
import { createContext, Suspense } from "react";
import { IconBook } from "@tabler/icons-react";
import { useParams } from "next/navigation";

interface CourseDetailParamsProps {
  id: string;
}

export const CourseIdContext = createContext<string | null>(null);

/* 
* This component ensures that the top level component is enclosed in a Suspense component
* otherwise, other Suspense components beneath will fail to work properly
* and things like collapsible drawers won"t work
*/
export default function CourseDetailTopLevel() {
  const { courseId } = useParams();
  console.log("ID top level: " + courseId);
  if (!courseId) return (<Title p="xl">NO SITE FOUND</Title>)
  return (
    <Suspense fallback={<Loader color="grape" size="xl" />}>
      <CourseDetails id={String(courseId)} />
    </Suspense>
  );
}

/**
 * This component fetches and displays the details of a course, including its chapters.
 * It uses the course ID to fetch the relevant data and provides it to the child components.
 *
 * @param {CourseDetailParamsProps} props - The props containing the course ID.
 * @returns {JSX.Element} The component displaying the course details and chapters.
 */

function CourseDetails({ id }: CourseDetailParamsProps) {
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
