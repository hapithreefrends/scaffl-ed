"use client";

import { useRouter } from "next/navigation";

import { Text, Badge, Button, Group, TextInput, Stack, Title, Combobox, Textarea, Input, InputBase, useCombobox } from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";

import { zodResolver } from "mantine-form-zod-resolver";

import { courseCreateDataSchema } from "@/app/_models/course";

import { useState } from "react";
import { useFindAllDifficulties, useFindAllProgrammingLanguages } from "@/app/(features)/_hooks/use-constants";
import { useCreateCourse } from "../_hooks/use-courses";

export default function Page() {
    const router = useRouter();

    const createCourse = useCreateCourse();
    const { data: programmingLanguagesList } = useFindAllProgrammingLanguages();
    const { data: difficultiesList } = useFindAllDifficulties();

    const form = useForm({
        mode: "uncontrolled",
        initialValues: {
            name: "",
            description: "",
            difficulty_id: 0,
            programming_language_id: ""
        },
        validate: zodResolver(courseCreateDataSchema)
    });

    const programmingLanguageProps = form.getInputProps("programming_language_id");
    const difficultyProps = form.getInputProps("difficulty_id");

    const [programmingLanguageSearch, setProgrammingLanguageSearch] = useState("");
    const [difficultySearch, setDifficultySearch] = useState("");
    
    const programmingLanguageOptions = programmingLanguagesList
        ?.filter((item) => item.name.toLowerCase().includes(programmingLanguageSearch.toLowerCase().trim()))
        .map((item) => (
            <Combobox.Option value={item.id} key={item.id}>
                {item.name}
            </Combobox.Option>
        ));

    const difficultyOptions = difficultiesList
        ?.filter((item) => item.name.toLowerCase().includes(difficultySearch.toLowerCase().trim()))
        .map((item) => {
            const color: Record<string, string> = {
                "Easy": "green",
                "Medium": "yellow",
                "Hard": "red",
            };

            return (
                <Combobox.Option value={`${item.id}`} key={item.id}>
                    <Badge color={color[item.name]}>
                        {item.name}
                    </Badge>
                </Combobox.Option>
            );
        });

    const programmingLanguageCombobox = useCombobox({
        onDropdownClose: () => {
            programmingLanguageCombobox.resetSelectedOption();
            programmingLanguageCombobox.focusTarget();
            setProgrammingLanguageSearch("");
        },

        onDropdownOpen: () => {
            programmingLanguageCombobox.focusSearchInput();
        },
    });

    const difficultyCombobox = useCombobox({
        onDropdownClose: () => {
            difficultyCombobox.resetSelectedOption();
            difficultyCombobox.focusTarget();
            setDifficultySearch("");
        },

        onDropdownOpen: () => {
            difficultyCombobox.focusSearchInput();
        },
    });

    return (
        <Stack w="100%">
            <Title order={2}>
                Create New Course
            </Title>

            <Text component="pre">
                {JSON.stringify(form.getValues(), null, 2)}
                {JSON.stringify(form.errors, null, 2)}
            </Text>

            <form onSubmit={form.onSubmit(
                (values) => {
                    createCourse.mutate(values);

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
                        message: error.message,
                        color: "red",
                    });
                }
            )}>
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
                                {programmingLanguagesList?.find((pl) => pl.id == programmingLanguageProps.defaultValue)?.name || <Input.Placeholder>Pick a Language</Input.Placeholder>}
                            </InputBase>
                        </Combobox.Target>

                        <Combobox.Dropdown>
                            <Combobox.Search
                                value={programmingLanguageSearch}
                                onChange={(event) => setProgrammingLanguageSearch(event.currentTarget.value)}
                                placeholder="Search languages"
                            />
                            <Combobox.Options>
                                {programmingLanguageOptions && programmingLanguageOptions.length > 0 ? programmingLanguageOptions : <Combobox.Empty>Nothing found</Combobox.Empty>}
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
                                {difficultiesList?.find((d) => d.id == difficultyProps.defaultValue)?.name || <Input.Placeholder>Pick difficulty</Input.Placeholder>}
                            </InputBase>
                        </Combobox.Target>

                        <Combobox.Dropdown>
                            <Combobox.Search
                                value={difficultySearch}
                                onChange={(event) => setDifficultySearch(event.currentTarget.value)}
                                placeholder="Search difficulty"
                            />
                            <Combobox.Options>
                                {difficultyOptions && difficultyOptions.length > 0 ? difficultyOptions : <Combobox.Empty>Nothing found</Combobox.Empty>}
                            </Combobox.Options>
                        </Combobox.Dropdown>
                    </Combobox>
                        
                    <Group style={{ flexDirection: "row" }} gap="md">
                        <Button size="md" radius="sm" maw="150px" onClick={() => router.push("/admin/courses")}>
                            <Text>Back</Text>
                        </Button>

                        <Button color="purple" size="md" radius="sm" type="submit" maw="150px">
                            <Text>Submit</Text>
                        </Button>
                    </Group>
                </Stack>
            </form>
        </Stack>
    );
}