import useChapter from "../hooks/use-chapters";
import ChapterContent from "./chapter-content";
import {
  Collapse,
  Divider,
  Group,
  Paper,
  Progress,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { IconCaretUp, IconCaretDown } from "@tabler/icons-react";
import { Suspense, useState } from "react";
import classes from "../_styles/course-detail-chapter.module.css";

interface CourseChapterPreviewProps {
  id: string;
}

export default function CourseDetailChapter({ id }: CourseChapterPreviewProps) {
  const [opened, setOpen] = useState(true);
  const { data: chapter } = useChapter(id);
  console.log(opened);
  return (
    <Paper className={classes.chapterContainer} radius="md" p="xl" shadow="sm">
      <Stack>
        <Group>
          <Title order={3}>{chapter.name}</Title>
          <Progress value={chapter.progress} />
        </Group>
        <Text>{chapter.description}</Text>
        <Divider />
        <Group justify="space-between">
          <Group component="button" onClick={() => setOpen((prev) => !prev)}>
            <Title order={4}>Hide Chapter Details</Title>
            {opened ? <IconCaretUp /> : <IconCaretDown />}
          </Group>
        </Group>
        <Collapse in={opened}>
          Text
          <Stack gap="md">
            <Suspense fallback={<h3>LOADING....</h3>}>
              {chapter.modules.map((module) => (
                <ChapterContent id={module} />
              ))}
            </Suspense>
          </Stack>
        </Collapse>
      </Stack>
    </Paper>
  );
}
