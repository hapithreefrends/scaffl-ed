"use client";

import CourseDetailHeaderLoader from "./_components/course-detail-header-fetch";
import { Button, Collapse, Group, Stack, Title } from "@mantine/core";
import { Suspense, useEffect, useState } from "react";
import { IconBook } from "@tabler/icons-react";
import CourseDetailChapter from "./_components/course-detail-chapter";
import { useDisclosure } from "@mantine/hooks";
import useChapterList from "./hooks/use-chapter-list";
import { useMemo } from "react";

interface CourseDetailParamsProps {
  id: string;
}

export default function CourseDetails({ id }: CourseDetailParamsProps) {
  const { data: chapterList } = useChapterList(id);
  const [opened, { toggle }] = useDisclosure();
  // const [state, setState] = useState(0);

  return (
    <Stack p="lg">
      {/* <Button onClick={() => setState(state + 1)}>{state}</Button>
      <Button onClick={toggle}>CLICK ME</Button>
      <Collapse in={opened}></Collapse> */}
      <Suspense fallback={<h1>LOADING</h1>}>
        <CourseDetailHeaderLoader id={id} />
      </Suspense>

      <Stack py="lg">
        <Group>
          <IconBook />
          <Title order={2}>Chapters</Title>
        </Group>
      </Stack>
      <Suspense fallback={<h1>LOADING...</h1>}>
        {chapterList.map((chapter) => (
          <CourseDetailChapter id={chapter.id} />
        ))}
      </Suspense>
    </Stack>
  );
}
