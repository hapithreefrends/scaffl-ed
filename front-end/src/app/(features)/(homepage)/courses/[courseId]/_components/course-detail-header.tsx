import { Group, Image, Text, Title, Stack } from "@mantine/core";
import classes from "../_styles/course-detail-header.module.css"

export interface CourseDetailHeaderProps {
  title: string;
  description: string;
  image: string;
}

export default function CourseDetailHeader({
  title,
  description,
  image
}: CourseDetailHeaderProps) {
  return (
    <Group>
      <Stack className={classes.textContainer}>
        <Title order={1}>{title}</Title>
        <Text>{description}</Text>
      </Stack>
      <Image h="208" src={image}/>
    </Group>
  );
}
