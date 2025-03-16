'use client';

import { Text, Button, Checkbox, Group, TextInput, Stack, Title, Combobox, Textarea, Input, InputBase, useCombobox } from '@mantine/core';
import { useForm } from '@mantine/form';

import { zodResolver } from 'mantine-form-zod-resolver';

import { courseDataSchema } from '@/app/_models/course';

import { useState } from 'react';

const languages = [
    'Java',
    'Python',
    'Javascript',
    'React',
    'Rust',
    'HTML',
];

const difficulty = [
    'Easy',
    'Medium',
    'Difficult'
];

export default function Page() {
    // const [search, setSearch] = useState('');

    const [languageSearch, setLanguageSearch] = useState('');
    const [difficultySearch, setDifficultySearch] = useState('');

    const languageCombobox = useCombobox({
        onDropdownClose: () => {
            languageCombobox.resetSelectedOption();
            languageCombobox.focusTarget();
            setLanguageSearch('');
        },

        onDropdownOpen: () => {
            languageCombobox.focusSearchInput();
        },
    });

    // const [value, setValue] = useState<string | null>(null);

    const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
    const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);

    const options = languages
        .filter((item) => item.toLowerCase().includes(languageSearch.toLowerCase().trim()))
        .map((item) => (
            <Combobox.Option value={item} key={item}>
                {item}
            </Combobox.Option>
        ));

    const options1 = difficulty
        .filter((item) => item.toLowerCase().includes(difficultySearch.toLowerCase().trim()))
        .map((item) => (
            <Combobox.Option value={item} key={item}>
                {item}
            </Combobox.Option>
        ));

    const difficultyCombobox = useCombobox({
        onDropdownClose: () => {
            difficultyCombobox.resetSelectedOption();
            difficultyCombobox.focusTarget();
            setDifficultySearch('');
        },

        onDropdownOpen: () => {
            difficultyCombobox.focusSearchInput();
        },
    });


    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
            name: '',
            description: '',
            difficultyId: 0,
            programmingLanguageId: 0
        },
        validate: zodResolver(courseDataSchema)
    });

    return (
        <Stack w="100%">
            <Title order={2}>
                View Course
            </Title>
            <form>
                <Stack gap='20px'>
                    <TextInput
                        withAsterisk
                        label="Course Name"
                        placeholder="Course Name"
                        required
                    // leftSection={<IconAt size={18} />}
                    // pb="sm"
                    // {...form.getInputProps("email")}
                    />
                    <Textarea
                        withAsterisk
                        label="Course Description"
                        // description="Course Description"
                        placeholder="Course Description"
                        required

                    // leftSection={<IconAt size={18} />}
                    // pb="sm"
                    // {...form.getInputProps("email")}
                    />
                    <Combobox
                        store={languageCombobox}
                        withinPortal={false}
                        onOptionSubmit={(val) => {
                            setSelectedLanguage(val);
                            languageCombobox.closeDropdown();
                        }}

                    >
                        <Combobox.Target>
                            <InputBase
                                component="button"
                                type="button"
                                pointer
                                rightSection={<Combobox.Chevron />}
                                onClick={() => languageCombobox.toggleDropdown()}
                                rightSectionPointerEvents="none"
                                withAsterisk
                                label="Language"
                                required
                            >
                                {selectedLanguage || <Input.Placeholder>Pick a Language</Input.Placeholder>}
                            </InputBase>

                        </Combobox.Target>

                        <Combobox.Dropdown>
                            <Combobox.Search
                                value={languageSearch}
                                onChange={(event) => setLanguageSearch(event.currentTarget.value)}
                                placeholder="Search languages"
                            />
                            <Combobox.Options>
                                {options.length > 0 ? options : <Combobox.Empty>Nothing found</Combobox.Empty>}
                            </Combobox.Options>
                        </Combobox.Dropdown>
                    </Combobox>


                    <Combobox
                        store={difficultyCombobox}
                        withinPortal={false}
                        onOptionSubmit={(val) => {
                            setSelectedDifficulty(val);
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
                                {selectedDifficulty || <Input.Placeholder>Pick its difficulty</Input.Placeholder>}
                            </InputBase>
                        </Combobox.Target>

                        <Combobox.Dropdown>
                            <Combobox.Search
                                value={difficultySearch}
                                onChange={(event) => setDifficultySearch(event.currentTarget.value)}
                                placeholder="Search difficulty"
                            />
                            <Combobox.Options>
                                {options1.length > 0 ? options1 : <Combobox.Empty>Nothing found</Combobox.Empty>}
                            </Combobox.Options>
                        </Combobox.Dropdown>
                    </Combobox>
                    <Group style={{ flexDirection: 'row' }} gap="md">
                        <Button color="gray" size="md" radius="sm" maw="150px">
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