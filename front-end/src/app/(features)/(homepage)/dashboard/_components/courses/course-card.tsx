import {
  Card,
  Divider,
  Image,
  Group,
  Button,
  Text,
  Title,
} from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import classes from "../../_styles/courses-card.module.css";

interface CourseCardProps {
  id: number;
  picture: string | undefined;
  title: string;
  level: string;
  description: string;
  href: string;
}

export default function CourseCard({
  id,
  picture,
  title,
  level,
  description,
  href,
}: CourseCardProps) {
  return (
    <Card
      className={classes.card}
      withBorder
      radius="md"
      w={359}
      h={335}
      component="a"
      href={href}
      p={24}
    >
      <Group justify="flex-start" mb={12}>
        <Image fit="contain" src={picture} alt={title} h={30} maw={"100%"} />
      </Group>
      <Title lineClamp={1} order={2} mb={12}>
        {title}
      </Title>
      <Title lineClamp={1} order={4} mb={12}>
        {level}
      </Title>
      <Text lineClamp={4} mb={12}>{description}</Text>
      <Divider />
      <Group justify="flex-end" mt={12}>
        <Button radius={22} className={classes.learn}>
          {<IconArrowRight />}
          Learn
        </Button>
      </Group>
    </Card>
  );
}
