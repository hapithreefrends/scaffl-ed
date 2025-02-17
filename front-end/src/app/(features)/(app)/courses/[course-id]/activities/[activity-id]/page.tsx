'use client';

import { Title, Text, Paper, Group, Stack, } from '@mantine/core';
import { CodeHighlight } from '@mantine/code-highlight';
import { useElementSize } from '@mantine/hooks';

import { Split } from '@gfazioli/mantine-split-pane';

import CodeEditor from '@/app/_components/CodeEditor/CodeEditor';
import CodeConsole from '@/app/_components/CodeConsole/CodeConsole';

import classes from './page.module.css';

export default function Page() {
    const { ref, height } = useElementSize();

    const mockData = {
        problemDescription: {
            title: "Hello, Scaffy!",
            description: `
            Welcome to your first task on scaffl.ed! Imagine you’re building a friendly virtual assistant that will greet users with a personalized message. However, the code your friend gave you is full of tiny bugs!

Your goal is to fix this code so it correctly asks for the user's name and greets them properly. By the end, your virtual assistant will be able to say hello to anyone who uses it, just as it was meant to!

Help your virtual assistant come to life by fixing the errors in the code. After debugging, it should ask for the user's name and print a warm greeting like:
            `,
            exampleCode: `
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, Scaffy!");
    }
}
            `
        },
        problem: {
            initialCode: `
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, Scaffy!");
    }
}
            `,
            testCases: {

            }
        }
    }

    return (
        <Group mih="100vh" mah="100vh" align='stretch'>
            <Stack flex={1}>
                <Paper>
                    <Title>
                        {mockData.problemDescription.title}
                    </Title>

                    <Text>
                        {mockData.problemDescription.description}
                    </Text>

                    <CodeHighlight
                        code={mockData.problemDescription.exampleCode}
                        language="java"
                        copyLabel="Copy button code"
                        copiedLabel="Copied!" />;
                </Paper>
            </Stack>

            <Group align='stretch' flex={2}>
                <Split flex={1} orientation="horizontal" mah="100vh" spacing="md">
                    <Split.Pane initialHeight="50%">
                        <Paper className={classes.container} withBorder w="100%" h="100%" radius="md">
                            <CodeEditor
                                initialContent={mockData.problem.initialCode}
                            />
                        </Paper>
                    </Split.Pane>

                    <Split.Pane grow>
                        <Paper ref={ref} className={classes.container} withBorder w="100%" h="100%" radius="md">
                            <CodeConsole height={height} />
                        </Paper>
                    </Split.Pane>
                </Split>
            </Group>
        </Group>
    );
}