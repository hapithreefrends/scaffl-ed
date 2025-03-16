import { Skeleton, Stack } from "@mantine/core";

export default function CourseDetailHeaderSkeleton() {
  return (
    <Stack w="100%">
      <Skeleton w="40%" h="30" radius="lg" />
      <Skeleton w="75%" h="16" radius="lg" />
      <Skeleton w="75%" h="16" radius="lg" />
      <Skeleton w="55%" h="16" radius="lg" />
    </Stack>
  );
}
