import { Skeleton, Card, Divider } from "@mantine/core";
import classes from "../../_styles/course-detail-chapter-skeleton.module.css"

export default function CourseDetailChapterSkeleton() {
  return (
    <>
      {Array.from({ length: 2 }, (_, index) => (
        <Card className={classes.courseChapterContainer} radius="md" key={index} w="100%" p="xl">
            <Skeleton w="30%" h="24" radius="lg" mb="sm"/>
            <Skeleton w="100%" h="16" radius="lg" mb="sm"/>
            <Skeleton w="50%" h="16" radius="lg" mb="sm"/>
            <Skeleton w="20%" h="16" radius="lg"/>
        </Card>
      ))}
    </>
  );
}
