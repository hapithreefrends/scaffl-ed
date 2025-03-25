import {
  Text,
  Title,
  Button,
  Divider,
  Group,
  Stack,
  Paper,
  TextInput,
  Textarea,
  ActionIcon,
} from "@mantine/core";

import { IconBook, IconEdit, IconPlus, IconTrash, IconPuzzle } from "@tabler/icons-react";

import { useUpdateCourseFormContext } from "./update-course-form-context";
import { randomId } from "@mantine/hooks";

interface ChapterProps {
  index: number;
  addLesson: (index: number) => void;
  addActivity: (index: number) => void;
}

export default function Chapter({
  index,
  addLesson,
  addActivity,
}: ChapterProps) {
  const form = useUpdateCourseFormContext();

  const activityLessons = form
    ?.getValues()
    ?.chapters[index]?.activity_lessons?.map(
      (activityLesson, activityLessonIndex) => {
        const type = activityLesson.type_id === 0 ? "Lesson" : "Activity";

        const icon =
          type === "Lesson" ? (
            <IconBook size={18} />
          ) : (
            <IconPuzzle size={18} />
          );

        return (
          <Group justify="space-between" key={activityLessonIndex}>
            <Group gap="md">
              {icon}

              <Text>{activityLesson.name}</Text>
            </Group>

            <Group>
              <ActionIcon color="teal" onClick={() => type === "Lesson" ? addLesson(activityLessonIndex) : addActivity(activityLessonIndex)}>
                <IconEdit size={16} />
              </ActionIcon>

              <ActionIcon
                color="red"
                onClick={() =>
                  form.removeListItem(
                    `chapters.${index}.activity_lessons`,
                    activityLessonIndex
                  )
                }
              >
                <IconTrash size={16} />
              </ActionIcon>
            </Group>
          </Group>
        );
      }
    );

  return (
    <Paper
      style={{
        background: "linear-gradient(0deg, #ffffff 0%,rgb(220, 255, 247) 100%)",
      }}
      shadow="xs"
      radius="md"
      p="md"
      mt="lg"
      key={index}
    >
      <Group justify="space-between">
        <Title order={4}>Chapter #{index + 1}</Title>

        <ActionIcon
          color="red"
          onClick={() => form.removeListItem("chapters", index)}
        >
          <IconTrash size={16} />
        </ActionIcon>
      </Group>

      <Stack gap="md">
        <TextInput
          withAsterisk
          label="Chapter Title"
          placeholder="Chapter Title"
          required
          key={form.key(`chapters.${index}.name`)}
          {...form.getInputProps(`chapters.${index}.name`)}
        />

        <Textarea
          withAsterisk
          label="Chapter Description"
          placeholder="Chapter Description"
          required
          key={form.key(`chapters.${index}.description`)}
          {...form.getInputProps(`chapters.${index}.description`)}
        />

        <Divider />

        <Stack>
          {activityLessons}

          <Group style={{ flexDirection: "row" }} gap="md">
            <Button
              onClick={() => {
                form.insertListItem(`chapters.${index}.activity_lessons`, {
                  name: "New Lesson",
                  description: "",
                  content: "",
                  code: "",
                  experience: 0,

                  type_id: 0,
                  programming_language_id: 0,

                  key: form.key(randomId()),
                });
                addLesson(form.getValues().chapters[index].activity_lessons.length - 1);
              }}
              color="teal"
              size="md"
              radius="sm"
              leftSection={<IconPlus size={18} />}
            >
              Add Lesson
            </Button>

            <Button
              onClick={() => {
                form.insertListItem(`chapters.${index}.activity_lessons`, {
                  name: "New Activity",
                  description: "",
                  content: "",
                  code: "",
                  experience: 0,

                  type_id: 1,
                  programming_language_id: 0,

                  key: randomId(),
                });
                addActivity(form.getValues().chapters[index].activity_lessons.length - 1);
              }}
              color="teal"
              size="md"
              radius="sm"
              leftSection={<IconBook size={18} />}
            >
              Add Activity
            </Button>
          </Group>
        </Stack>
      </Stack>
    </Paper>
  );
}
