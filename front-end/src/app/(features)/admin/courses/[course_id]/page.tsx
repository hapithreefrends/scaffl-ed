"use client";

import { useParams, useRouter } from "next/navigation";

import { Text, Button, Group, TextInput, Stack, Title, Combobox, Textarea, Input, InputBase, useCombobox } from "@mantine/core";
import { useForm } from "@mantine/form";

import { zodResolver } from "mantine-form-zod-resolver";

import { courseCreateDataSchema } from "@/app/_models/course";

import { useFindAllDifficulties, useFindAllProgrammingLanguages } from "@/app/(features)/_hooks/use-constants";
import { useFindCourseById } from "../_hooks/use-courses";

export default function Page() {
    const { course_id } = useParams();
    const router = useRouter();

    const { data } = useFindCourseById(String(course_id));
    const { data: programmingLanguagesList } = useFindAllProgrammingLanguages();
    const { data: difficultiesList } = useFindAllDifficulties();

    const form = useForm({
        mode: "uncontrolled",
        initialValues: {
            name: data?.name || "",
            description: data?.description || "",
            difficulty_id: data?.difficulty_id || 0,
            programming_language_id: data?.programming_language_id || ""
        },
        validate: zodResolver(courseCreateDataSchema)
    });

    const programmingLanguageProps = form.getInputProps("programming_language_id");
    const difficultyProps = form.getInputProps("difficulty_id");

    const programmingLanguageCombobox = useCombobox({});

    const difficultyCombobox = useCombobox({});

    return (
        <Stack w="100%">
            <Title order={2}>
                View Course
            </Title>

            <form>
                <Stack gap="20px">
                    <TextInput
                        withAsterisk
                        label="Course Name"
                        placeholder="Course Name"
                        required
                        error={form.errors.name}
                        withErrorStyles={false}
                        {...form.getInputProps("name")}
                        readOnly
                    />

                    <Textarea
                        withAsterisk
                        label="Course Description"
                        placeholder="Course Description"
                        required
                        error={form.errors.description}
                        withErrorStyles={false}
                        {...form.getInputProps("description")}
                        readOnly
                    />

                    <Combobox
                        store={programmingLanguageCombobox}
                        withinPortal={false}
                        readOnly
                    >
                        <Combobox.Target>
                            <InputBase
                                component="button"
                                type="button"
                                pointer
                                rightSection={<Combobox.Chevron />}
                                rightSectionPointerEvents="none"
                                withAsterisk
                                label="Language"
                                required
                            >
                                {programmingLanguagesList?.find((pl) => pl.id == programmingLanguageProps.defaultValue)?.name || <Input.Placeholder>Pick a Language</Input.Placeholder>}
                            </InputBase>
                        </Combobox.Target>
                    </Combobox>

                    <Combobox
                        store={difficultyCombobox}
                        withinPortal={false}
                    >
                        <Combobox.Target>
                            <InputBase
                                component="button"
                                type="button"
                                pointer
                                rightSection={<Combobox.Chevron />}
                                rightSectionPointerEvents="none"
                                withAsterisk
                                label="Difficulty"
                                required
                            >
                                {difficultiesList?.find((d) => d.id == difficultyProps.defaultValue)?.name || <Input.Placeholder>Pick difficulty</Input.Placeholder>}
                            </InputBase>
                        </Combobox.Target>
                    </Combobox>
                        
                    <Group style={{ flexDirection: "row" }} gap="md">
                        <Button size="md" radius="sm" maw="150px" onClick={() => router.push("/admin/courses")}>
                            <Text>Back</Text>
                        </Button>

                        <Button color="purple" size="md" radius="sm" maw="150px" onClick={() => router.push(`/admin/courses/${course_id}/edit`)}>
                            <Text>Edit</Text>
                        </Button>
                    </Group>
                </Stack>
            </form>
        </Stack>
    );
}