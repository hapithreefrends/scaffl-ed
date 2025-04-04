"use client";

import {
  Button,
  InputBase,
  TextInput,
  Stack,
  Input,
  Modal,
  Textarea,
  NumberInput,
  Combobox,
} from "@mantine/core";

import { RichTextEditor, Link } from "@mantine/tiptap";
import { useEditor } from "@tiptap/react";
import Highlight from "@tiptap/extension-highlight";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import Superscript from "@tiptap/extension-superscript";
import SubScript from "@tiptap/extension-subscript";

import { useUpdateCourseFormContext } from "./update-course-form-context";
import useProgrammingLanguagesCombobox from "../_hooks/use-programming-languages-combobox";

import { useEffect } from "react";
import { useFindAllProgrammingLanguages } from "@/app/(features)/_hooks/use-constants";

interface AddLessonModalProps {
  chapterIndex: number;
  activityLessonIndex: number;
  isModalOpen: boolean;
  closeModal: () => void;
}

export default function AddLessonModal({
  chapterIndex,
  activityLessonIndex,
  isModalOpen,
  closeModal,
}: AddLessonModalProps) {
  const form = useUpdateCourseFormContext();

  const { data: programmingLanguagesList } = useFindAllProgrammingLanguages();

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link,
      Superscript,
      SubScript,
      Highlight,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
    ],
    content: `
      <h1>Lesson Content</h1>
      <p>Start writing your lesson content here...</p>
    `,
    immediatelyRender: true
  });

  useEffect(
    () => {
      editor.commands.setContent(
        <>
          {form?.getValues()?.chapters?.[chapterIndex]?.activity_lessons?.[activityLessonIndex]?.content}
        </>
      )
    },
    [chapterIndex, activityLessonIndex]
  );

  useEffect(
    () => {
      form.setFieldValue(
        `chapters.${chapterIndex}.activity_lessons.${activityLessonIndex}.content`,
        editor.getHTML()
      );
    }, [editor.getHTML()]
  );

  const programmingLanguageProps = form.getInputProps(
    `chapters.${chapterIndex}.activity_lessons.${activityLessonIndex}.programming_language_id`
  );

  const {
    programmingLanguageSearch,
    setProgrammingLanguageSearch,
    programmingLanguageCombobox,
    programmingLanguageOptions,
  } = useProgrammingLanguagesCombobox(programmingLanguagesList);

  return (
    <Modal
      opened={isModalOpen}
      onClose={() => closeModal()}
      title="Add Lesson"
      size="xl"
    >
      <Stack>
        <TextInput
          withAsterisk
          label="Activity Slug"
          placeholder="Activity Slug"
          required
          key={form.key(
            `chapters.${chapterIndex}.activity_lessons.${activityLessonIndex}.slug`
          )}
          {...form.getInputProps(
            `chapters.${chapterIndex}.activity_lessons.${activityLessonIndex}.slug`
          )}
        />

        <TextInput
          withAsterisk
          label="Lesson Title"
          placeholder="Lesson Title"
          required
          key={form.key(
            `chapters.${chapterIndex}.activity_lessons.${activityLessonIndex}.name`
          )}
          {...form.getInputProps(
            `chapters.${chapterIndex}.activity_lessons.${activityLessonIndex}.name`
          )}
        />

        <Textarea
          withAsterisk
          label="Lesson Description"
          placeholder="Lesson Description"
          required
          key={form.key(
            `chapters.${chapterIndex}.activity_lessons.${activityLessonIndex}.description`
          )}
          {...form.getInputProps(
            `chapters.${chapterIndex}.activity_lessons.${activityLessonIndex}.description`
          )}
        />

        <NumberInput
          withAsterisk
          label="Experience Points"
          placeholder="0"
          suffix=" XP"
          required
          key={form.key(
            `chapters.${chapterIndex}.activity_lessons.${activityLessonIndex}.experience`
          )}
          {...form.getInputProps(
            `chapters.${chapterIndex}.activity_lessons.${activityLessonIndex}.experience`
          )}
        />

        <Combobox
          store={programmingLanguageCombobox}
          withinPortal={false}
          onOptionSubmit={(value) => {
            form.setFieldValue(
              `chapters.${chapterIndex}.activity_lessons.${activityLessonIndex}.programming_language_id`,
              value
            );

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
              )?.name || <Input.Placeholder>Pick a Language</Input.Placeholder>}
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

        <RichTextEditor editor={editor}>
          <RichTextEditor.Toolbar sticky stickyOffset={60}>
            <RichTextEditor.ControlsGroup>
              <RichTextEditor.Bold />
              <RichTextEditor.Italic />
              <RichTextEditor.Underline />
              <RichTextEditor.Strikethrough />
              <RichTextEditor.ClearFormatting />
              <RichTextEditor.Highlight />
              <RichTextEditor.Code />
            </RichTextEditor.ControlsGroup>

            <RichTextEditor.ControlsGroup>
              <RichTextEditor.H1 />
              <RichTextEditor.H2 />
              <RichTextEditor.H3 />
              <RichTextEditor.H4 />
            </RichTextEditor.ControlsGroup>

            <RichTextEditor.ControlsGroup>
              <RichTextEditor.Blockquote />
              <RichTextEditor.Hr />
              <RichTextEditor.BulletList />
              <RichTextEditor.OrderedList />
              <RichTextEditor.Subscript />
              <RichTextEditor.Superscript />
            </RichTextEditor.ControlsGroup>

            <RichTextEditor.ControlsGroup>
              <RichTextEditor.Link />
              <RichTextEditor.Unlink />
            </RichTextEditor.ControlsGroup>

            <RichTextEditor.ControlsGroup>
              <RichTextEditor.AlignLeft />
              <RichTextEditor.AlignCenter />
              <RichTextEditor.AlignJustify />
              <RichTextEditor.AlignRight />
            </RichTextEditor.ControlsGroup>

            <RichTextEditor.ControlsGroup>
              <RichTextEditor.Undo />
              <RichTextEditor.Redo />
            </RichTextEditor.ControlsGroup>
          </RichTextEditor.Toolbar>

          <RichTextEditor.Content />
        </RichTextEditor>
        <Button color="purple" onClick={() => closeModal()}>
          Close
        </Button>
      </Stack>
    </Modal>
  );
}
