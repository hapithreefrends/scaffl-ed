import { Skeleton, Stack } from "@mantine/core";

export default function LessonContentSkeleton() {
  return (
    <Stack>
      <Stack>
        <Skeleton w="100%" h="16" radius="lg" mb="sm" />
        <Skeleton w="100%" h="16" radius="lg" mb="sm" />
        <Skeleton w="100%" h="16" radius="lg" mb="sm" />
        <Skeleton w="100%" h="16" radius="lg" mb="sm" />
        <Skeleton w="50%" h="16" radius="lg" mb="sm" />
      </Stack>

      <Stack>
        <Skeleton w="100%" h="16" radius="lg" mb="sm" />
        <Skeleton w="100%" h="16" radius="lg" mb="sm" />
        <Skeleton w="100%" h="16" radius="lg" mb="sm" />
        <Skeleton w="100%" h="16" radius="lg" mb="sm" />
        <Skeleton w="50%" h="16" radius="lg" mb="sm" />
      </Stack>
    </Stack>
  );
}
