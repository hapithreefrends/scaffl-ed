'use client';

import { Box, Text, Button, Checkbox, Group, TextInput, Stack, Title, Combobox, Textarea, Input, InputBase, useCombobox, Divider, Modal } from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconPlus, IconBook, IconCheck, IconX } from '@tabler/icons-react';

import { zodResolver } from 'mantine-form-zod-resolver';

import { courseDataSchema } from '@/app/_models/course';
import '@mantine/tiptap/styles.css';
import { useState } from 'react';
import { RichTextEditor, Link } from '@mantine/tiptap';
import { useEditor } from '@tiptap/react';
import Highlight from '@tiptap/extension-highlight';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import Superscript from '@tiptap/extension-superscript';
import SubScript from '@tiptap/extension-subscript';


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
const content =
    '<h2 style="text-align: center;">Welcome to Mantine rich text editor</h2><p><code>RichTextEditor</code> component focuses on usability and is designed to be as simple as possible to bring a familiar editing experience to regular users. <code>RichTextEditor</code> is based on <a href="https://tiptap.dev/" rel="noopener noreferrer" target="_blank">Tiptap.dev</a> and supports all of its features:</p><ul><li>General text formatting: <strong>bold</strong>, <em>italic</em>, <u>underline</u>, <s>strike-through</s> </li><li>Headings (h1-h6)</li><li>Sub and super scripts (<sup>&lt;sup /&gt;</sup> and <sub>&lt;sub /&gt;</sub> tags)</li><li>Ordered and bullet lists</li><li>Text align&nbsp;</li><li>And all <a href="https://tiptap.dev/extensions" target="_blank" rel="noopener noreferrer">other extensions</a></li></ul>';

export default function Page() {

    const editor = useEditor({
        extensions: [
            StarterKit,
            Underline,
            Link,
            Superscript,
            SubScript,
            Highlight,
            TextAlign.configure({ types: ['heading', 'paragraph'] }),
        ],
        content,
    });

    const [languageSearch, setLanguageSearch] = useState('');
    const [difficultySearch, setDifficultySearch] = useState('');
    const [modalOpened, setModalOpened] = useState(false);

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
                Edit Course
            </Title>
            <form>
                <Stack gap='20px'>
                    <TextInput
                        withAsterisk
                        label="Course Name"
                        placeholder="Course Name"
                        required
                    />
                    <Textarea
                        withAsterisk
                        label="Course Description"
                        placeholder="Course Description"
                        required
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
                </Stack>
            </form>
            <Box
                style={{
                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                    borderRadius: '10px',
                    background: 'linear-gradient(0deg, #ffffff 0%,rgb(220, 255, 247) 100%)'
                }} p="md" mt="lg">
                <Box style={{
                    display: 'flex',
                    justifyContent: 'flex-end'
                }}>
                    <IconX size={18} />
                </Box>
                <Stack gap="md">
                    <TextInput
                        withAsterisk
                        label="Chapter Title"
                        placeholder="Chapter Title"
                        required
                    />
                    <Textarea
                        withAsterisk
                        label="Chapter Description"
                        placeholder="Chapter Description"
                        required
                    />
                    <Divider />
                    <Group style={{ flexDirection: 'row' }} gap="md">
                        <Button onClick={() => setModalOpened(true)} color="teal" size="md" radius="sm" maw="150px">
                            <IconPlus size={18} />
                            <Text>Add Lesson</Text>
                        </Button>
                        <Button color="teal" size="md" radius="sm" maw="150px">
                            <IconBook size={18} />
                            <Text>Add Quiz</Text>
                        </Button>
                        <Button color="purple" size="md" radius="sm" maw="150px">
                            <IconCheck size={18} />
                            <Text>Submit</Text>
                        </Button>
                    </Group>
                </Stack>
            </Box>
            <Divider />

            <Modal
                opened={modalOpened}
                onClose={() => setModalOpened(false)}
                title="Add Lesson"
            >
                <Stack>
                    <TextInput
                        withAsterisk
                        label="Lesson Title"
                        placeholder="Lesson Title"
                        required
                    />
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
                    <Button color='purple' onClick={() => setModalOpened(false)}>Save</Button>
                </Stack>
            </Modal>
        </Stack>
    );
}

