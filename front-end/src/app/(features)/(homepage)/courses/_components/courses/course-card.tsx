"use client";

import classes from "../../_styles/courses-card.module.css";
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
import Link from "next/link";

interface CourseCardProps {
  id: string;
  picture: string | undefined;
  title: string;
  level: string;
  description: string,
  href: string
}

export default function CourseCard({
  id,
  picture,
  title,
  level,
  description,
  href
}: CourseCardProps) {
  console.log("COURSE ID: " + id)

  return (
    <Link className={classes.container} href={href}>
    <Card
      className={classes.card}
      withBorder
      radius="md"
      w={335}
      h={335}
      p={24}
    >
      <Group justify="flex-start" mb={12}>
        <Image fit="contain" src={picture} alt={title} h={30} maw={"100%"} />
      </Group>
      <Title lineClamp={1} order={3} mb={12}>
        {title}
      </Title>
      <Title lineClamp={1} order={4} mb={12}>
        {level}
      </Title>
      <Text lineClamp={4} mb={12}>{description}</Text>
      <Divider />
      <Group justify="flex-end" mt={12}>
        <Button radius={8} className={classes.learn}>
          {<IconArrowRight />}
          Learn
        </Button>
      </Group>
    </Card>
    </Link>
  );
}