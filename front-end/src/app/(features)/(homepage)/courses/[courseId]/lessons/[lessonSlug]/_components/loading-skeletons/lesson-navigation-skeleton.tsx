import { Skeleton, Stack } from "@mantine/core";

export default function LessonNavigationSkeleton() {
    return (
        <Stack>
            <Skeleton w="100%" h="16" radius="lg" mb="sm"/>
            <Skeleton w="100%" h="16" radius="lg" mb="sm"/>
            <Skeleton w="100%" h="16" radius="lg" mb="sm"/>
            <Skeleton w="100%" h="16" radius="lg" mb="sm"/>
            <Skeleton w="100%" h="16" radius="lg" mb="sm"/>
        </Stack>
    );
}