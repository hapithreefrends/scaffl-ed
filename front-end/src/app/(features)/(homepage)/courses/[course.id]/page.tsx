import CourseDetailHeaderLoader from "./_components/course-detail-header-fetch";
import { Stack } from "@mantine/core";
import { Suspense } from "react";

interface CourseDetailParamsProps {
  id: string;
}

export default function CourseDetails({ id }: CourseDetailParamsProps) {
  return (
    <Stack>
      <Suspense fallback={<h1>LOADING</h1>}>
        <CourseDetailHeaderLoader id={id} />
      </Suspense>
    </Stack>
  );
}
