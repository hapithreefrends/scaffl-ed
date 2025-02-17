import { Skeleton } from "@mantine/core";

export default function ChapterContentSkeleton() {
  return (
    <>
      {Array.from({ length: 4 }, (_, index) => (
        <div key={index}>
          <Skeleton w="40%" h="24" radius="lg" mb="sm" />
          <Skeleton w="60%" h="16" radius="lg" mb="lg"/>
        </div>
      ))}
    </>
  );
}
