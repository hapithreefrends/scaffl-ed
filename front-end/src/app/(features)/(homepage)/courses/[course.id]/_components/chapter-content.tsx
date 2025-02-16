import useContent from "../hooks/use-content";
import classes from "../_styles/course-detail-chapter.module.css";
import Link from "next/link";
import { useContext } from "react";
import { CourseIdContext } from "../page";
import { Stack, Group, Title } from "@mantine/core";
import { IconBook, IconPuzzle } from "@tabler/icons-react";

export default function ChapterContent({ id }: { id: string }) {
  const { data: content } = useContent(id);
  const courseId = useContext(CourseIdContext);
  console.log(courseId);

  return (
    <Link className={classes.container} href={content.type === "lesson" ? `./${courseId}/lessons/${content.slug}` : `./${courseId}/activities/${content.slug}`}>
      <Stack gap="0">
        <Group justify="space-between">
          <Group>
            {content.type === "lesson" ? <IconBook /> : <IconPuzzle />}
            <Title order={4}>{content.name}</Title>
          </Group>
          <span className={classes.xp}>{content.xp} XP</span>
        </Group>
        <Title className={classes.description} order={5}>
          {content.description}
        </Title>
      </Stack>
    </Link>
  );
}
