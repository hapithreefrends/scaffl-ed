import useChapter from "../_hooks/use-chapters";
import ChapterContent from "./chapter-content";
import {
  Collapse,
  Divider,
  Group,
  Paper,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import classes from "../_styles/course-detail-chapter.module.css";
import ChapterContentSkeleton from "./loading-skeletons/chapter-content-skeleton";
import { IconCaretUp, IconCaretDown } from "@tabler/icons-react";
import { Suspense } from "react";
import { useDisclosure } from "@mantine/hooks";

interface CourseChapterPreviewProps {
  id: string;
}

export default function CourseDetailChapter({ id }: CourseChapterPreviewProps) {
  const [opened, { toggle }] = useDisclosure(true);
  const { data: chapter } = useChapter(id);

  return (
    <Paper className={classes.chapterContainer} radius="md" p="xl" shadow="sm">
      <Stack>
        <Group>
          <Title order={3}>{chapter?.name}</Title>
          {/* <Progress w="200" value={chapter.progress} /> */}
        </Group>
        <Text>{chapter?.description}</Text>
        <Divider bg="gray.6" h="1" w="100%" />
        <Group justify="space-between">
          <Group
            className={classes.toggleChapterDetails}
            component="button"
            onClick={toggle}
          >
            <Title className={classes.toggleChapterDetailsText} order={4}>
              {opened ? "Hide" : "Show"} Chapter Details
            </Title>
            {opened ? <IconCaretUp /> : <IconCaretDown />}
          </Group>
        </Group>
        <Collapse in={opened}>
          <Stack gap="md">
            <Suspense fallback={<ChapterContentSkeleton />}>
              {/* Any data type will be replaced with a proper model later */}
              {chapter?.modules?.map((module: any, index: number) => (
                <ChapterContent key={index} id={module.id} />
              ))}
            </Suspense>
          </Stack>
        </Collapse>
      </Stack>
    </Paper>
  );
}
