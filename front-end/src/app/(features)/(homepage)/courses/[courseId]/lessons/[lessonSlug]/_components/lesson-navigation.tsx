'use client'

import { useRouter, useParams } from "next/navigation";

import { Menu } from "@mantine/core";

import classes from "../_styles/lesson-navigation.module.css";

interface LessonNavigationProps {
  lessons: {
    id: string;
    name: string;
    slug: string;
  }[];
}

export default function LessonNavigation({ lessons }: LessonNavigationProps) {
  const router = useRouter();
  const { courseId } = useParams();

  const navigateToSlug = (slug: string) => {
    // Navigate to the selected topic
    router.push(`/courses/${String(courseId)}/lessons/${slug}`);
  };

  return (
    <Menu width={250} position="left">
      {lessons.map((topic, index) => (
        <Menu.Item
          className={classes.tocItem}
          key={index}
          onClick={() => navigateToSlug(topic.slug)}
        >
          {topic.name}
        </Menu.Item>
      ))}
    </Menu>
  );
}
