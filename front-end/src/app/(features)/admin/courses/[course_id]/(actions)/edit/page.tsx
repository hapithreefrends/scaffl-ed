"use client";

import { useParams, useRouter } from "next/navigation";
import {
  useFindCourseById,
  useUpdateCourseById,
} from "@/app/(features)/admin/courses/_hooks/use-courses";
import {
  useFindAllDifficulties,
  useFindAllProgrammingLanguages,
} from "@/app/(features)/_hooks/use-constants";

import {
  Text,
  Button,
  Group,
  TextInput,
  Stack,
  Title,
  Combobox,
  Textarea,
  Input,
  InputBase,
  Divider,
  Center
} from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { randomId, useDisclosure } from "@mantine/hooks";

import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

import { zodResolver } from "mantine-form-zod-resolver";

import { courseUpdateDataSchema } from "@/app/_models/course";
import "@mantine/tiptap/styles.css";
import { useEffect, useState } from "react";

import AddLessonModal from "./_components/add-lesson-modal";
import useProgrammingLanguagesCombobox from "./_hooks/use-programming-languages-combobox";
import useDifficultiesCombobox from "./_hooks/use-difficulties-combobox";
import AddActivityModal from "./_components/add-activity-modal";
import Chapter from "./_components/chapter";
import {
  UpdateCourseFormProvider,
  useUpdateCourseForm,
} from "./_components/update-course-form-context";
import { IconPlus, IconGripVertical } from "@tabler/icons-react";

export default function Page() {
  // Get course_id from URL
  const { course_id } = useParams();

  // Get router
  const router = useRouter();

  // Set up hooks for loading initial data and updating
  const { data } = useFindCourseById(String(course_id));
  const updateCourse = useUpdateCourseById();

  // Get list of programming languages and difficulties
  const { data: programmingLanguagesList } = useFindAllProgrammingLanguages();
  const { data: difficultiesList } = useFindAllDifficulties();

  // Set up form
  const form = useUpdateCourseForm({
    mode: "uncontrolled",
    initialValues: {
      id: "",
      name: "",
      description: "",
      difficulty_id: 0,
      programming_language_id: "",
      chapters: [],
    },
    validate: zodResolver(courseUpdateDataSchema),
  });

  // Setting initial form data from fetched existing data
  useEffect(() => {
    if (data) {
      form.setValues({
        id: data.id,
        name: data.name,
        description: data.description,
        difficulty_id: data.difficulty_id,
        programming_language_id: data.programming_language_id,
        chapters: data.chapters,
      });
    }
  }, [data]);

  const programmingLanguageProps = form.getInputProps(
    "programming_language_id"
  );
  const difficultyProps = form.getInputProps("difficulty_id");

  const {
    programmingLanguageSearch,
    setProgrammingLanguageSearch,
    programmingLanguageCombobox,
    programmingLanguageOptions,
  } = useProgrammingLanguagesCombobox(programmingLanguagesList);

  // Set up difficulty combobox
  const {
    difficultySearch,
    setDifficultySearch,
    difficultyCombobox,
    difficultyOptions,
  } = useDifficultiesCombobox(difficultiesList);

  const [
    isAddLessonModalOpen,
    { open: openAddLessonModal, close: closeAddLessonModal },
  ] = useDisclosure();

  const [
    isAddActivityModalOpen,
    { open: openAddActivityModal, close: closeAddActivityModal },
  ] = useDisclosure();

  const [selectedChapterIndex, setSelectedChapterIndex] = useState(-1);
  const [selectedActivityLessonIndex, setSelectedActivityLessonIndex] = useState(-1);

  const chapters = form
    .getValues()
    .chapters.map((chapter, index) => {
      type DraggableChapter = { key: string } & typeof chapter;

      const draggableChapter = chapter as DraggableChapter;

      return (
        <Draggable key={draggableChapter.key} index={index} draggableId={draggableChapter.key}>
          {(provided) => (
            <Group ref={provided.innerRef} {...provided.draggableProps} w="100%">
              <Center {...provided.dragHandleProps}>
                <IconGripVertical size={18} />
              </Center>

              <Chapter
                key={index}
                index={index}
                addLesson={(activityLessonIndex) => {
                  setSelectedChapterIndex(index);
                  setSelectedActivityLessonIndex(activityLessonIndex);

                  openAddLessonModal();
                }}
                addActivity={(activityLessonIndex) => {
                  setSelectedChapterIndex(index);
                  setSelectedActivityLessonIndex(activityLessonIndex);

                  openAddActivityModal();
                }}
              />
            </Group>
          )}
        </Draggable>
      )
    });

  return (
    <UpdateCourseFormProvider form={form}>
      <Stack w="100%">
        <Title order={2}>Edit Course</Title>

        <Text component="pre">
          {JSON.stringify(form.getValues(), null, 2)}
        </Text>

        <form
          onSubmit={form.onSubmit(
            (values) => {
              updateCourse.mutate(values);

              notifications.show({
                title: "Success",
                message: "Course created successfully",
                color: "green",
              });

              router.push("/admin/courses");
            },
            (error) => {
              notifications.show({
                title: "Error",
                message: JSON.stringify(error, null, 2),
                color: "red",
              });
            }
          )}
        >
          <Stack gap="20px">
            <TextInput
              withAsterisk
              label="Course Name"
              placeholder="Course Name"
              required
              error={form.errors.name}
              withErrorStyles={false}
              {...form.getInputProps("name")}
            />

            <Textarea
              withAsterisk
              label="Course Description"
              placeholder="Course Description"
              required
              error={form.errors.description}
              withErrorStyles={false}
              {...form.getInputProps("description")}
            />

            <Combobox
              store={programmingLanguageCombobox}
              withinPortal={false}
              onOptionSubmit={(value) => {
                form.setFieldValue("programming_language_id", value);

                programmingLanguageCombobox.closeDropdown();
              }}
            >
              <Combobox.Target>
                <InputBase
                  component="button"
                  type="button"
                  pointer
                  rightSection={<Combobox.Chevron />}
                  onClick={() => programmingLanguageCombobox.toggleDropdown()}
                  rightSectionPointerEvents="none"
                  withAsterisk
                  label="Language"
                  required
                >
                  {programmingLanguagesList?.find(
                    (pl) => pl.id == programmingLanguageProps.defaultValue
                  )?.name || (
                      <Input.Placeholder>Pick a Language</Input.Placeholder>
                    )}
                </InputBase>
              </Combobox.Target>

              <Combobox.Dropdown>
                <Combobox.Search
                  value={programmingLanguageSearch}
                  onChange={(event) =>
                    setProgrammingLanguageSearch(event.currentTarget.value)
                  }
                  placeholder="Search languages"
                />
                <Combobox.Options>
                  {programmingLanguageOptions &&
                    programmingLanguageOptions.length > 0 ? (
                    programmingLanguageOptions
                  ) : (
                    <Combobox.Empty>Nothing found</Combobox.Empty>
                  )}
                </Combobox.Options>
              </Combobox.Dropdown>
            </Combobox>

            <Combobox
              store={difficultyCombobox}
              withinPortal={false}
              onOptionSubmit={(value) => {
                form.setFieldValue("difficulty_id", parseInt(value));

                difficultyCombobox.closeDropdown();
              }}
            >
              <Combobox.Target>
                <InputBase
                  component="button"
                  type="button"
                  pointer
                  rightSection={<Combobox.Chevron />}
                  onClick={() => difficultyCombobox.toggleDropdown()}
                  rightSectionPointerEvents="none"
                  withAsterisk
                  label="Difficulty"
                  required
                >
                  {difficultiesList?.find(
                    (d) => d.id == difficultyProps.defaultValue
                  )?.name || (
                      <Input.Placeholder>Pick difficulty</Input.Placeholder>
                    )}
                </InputBase>
              </Combobox.Target>
              <Combobox.Dropdown>
                <Combobox.Search
                  value={difficultySearch}
                  onChange={(event) =>
                    setDifficultySearch(event.currentTarget.value)
                  }
                  placeholder="Search difficulty"
                />
                <Combobox.Options>
                  {difficultyOptions && difficultyOptions.length > 0 ? (
                    difficultyOptions
                  ) : (
                    <Combobox.Empty>Nothing found</Combobox.Empty>
                  )}
                </Combobox.Options>
              </Combobox.Dropdown>
            </Combobox>

            <Divider />

            <Stack gap="md">
              <DragDropContext
                onDragEnd={({ destination, source }) => {
                  const value = destination?.index !== undefined && form.reorderListItem("chapters", { from: source.index, to: destination.index });

                  form.getValues().chapters.forEach((_, index) => {
                    form.setFieldValue(
                      `chapters.${index}.chapter_number`, index + 1);
                  });

                  return value;
                }}
              >
                <Droppable droppableId="dnd-list" direction="vertical">
                  {(provided) => (
                    <div {...provided.droppableProps} ref={provided.innerRef}>
                      {chapters}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </DragDropContext>

              <Button
                leftSection={<IconPlus size={18} />}
                onClick={() =>
                  form.insertListItem("chapters", {
                    name: "New Chapter",
                    description: "",

                    chapter_number: form.getValues().chapters.length + 1,

                    activity_lessons: [],

                    key: randomId(),
                  })
                }
              >
                Add Chapter
              </Button>
            </Stack>

            <Group justify="flex-end" style={{ flexDirection: "row" }} gap="md">
              <Button
                size="md"
                radius="sm"
                maw="150px"
                onClick={() => router.push("/admin/courses")}
              >
                <Text>Back</Text>
              </Button>

              <Button
                color="purple"
                size="md"
                radius="sm"
                type="submit"
                maw="150px"
              >
                <Text>Submit</Text>
              </Button>
            </Group>
          </Stack>
        </form>

        <Divider />

        <AddLessonModal
          chapterIndex={selectedChapterIndex}
          activityLessonIndex={selectedActivityLessonIndex}
          isModalOpen={isAddLessonModalOpen}
          closeModal={closeAddLessonModal}
        />
        <AddActivityModal
          chapterIndex={selectedChapterIndex}
          activityLessonIndex={selectedActivityLessonIndex}
          isModalOpen={isAddActivityModalOpen}
          closeModal={closeAddActivityModal}
        />
      </Stack>
    </UpdateCourseFormProvider>
  );
}
