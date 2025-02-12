import { Button, Card, Group, Image, Progress, Title } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import classes from "../../_styles/courses-card.module.css";

interface CourseCardPreviewProps {
  id: number;
  picture: string | undefined;
  title: string;
  level: string;
  description: string;
  href: string;
  progress: number;
}

export default function CourseCardPreview({
  id,
  picture,
  title,
  level,
  href,
  progress,
}: CourseCardPreviewProps) {
  return (
    <Card
      className={classes.card}
      withBorder
      radius="md"
      w={335}
      component="a"
      href={href}
      p={24}
    >
      <Group justify="flex-start" mb={12}>
        <Image fit="contain" src={picture} alt={title} h={30} maw={"100%"} />
      </Group>
      <Title lineClamp={1} order={3} mb={12}>
        {title}
      </Title>
      <Title c={"white"} size={12} className={classes.difficulty} py={2} px={4} w={"fit-content"}  bg={level === "beginner" ? "green.6": level === "intermediate" ? "yellow.6" : "red.6"} lineClamp={1} order={6} mb={12}>
        {level}
      </Title>
      <Group>
        <Progress className={classes.progressBar} color="violet.6" value={progress} />
        <Title order={5}>{progress}%</Title>
      </Group>
      <Group justify="flex-end" mt={12}>
        <Button radius={8} className={classes.learn}>
          {<IconArrowRight />}
          Learn
        </Button>
      </Group>
    </Card>
  );
}
