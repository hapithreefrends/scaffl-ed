import { Title, Divider, Text } from "@mantine/core";

interface ProblemDescriptionProps {
    title: string,
    content: string,
    instructions: string,
}

export default function ProblemDescription({ title, content, instructions, ...props }: ProblemDescriptionProps) {
    // Render problem description here. Content might be tricky, depends on how rich text is stored. For now, plain text as placeholder.

    return (
        <>
            <Title>
                {title}
            </Title>

            <Text>
                {content}
            </Text>

            <Divider />

            <Text>
                {instructions}
            </Text>
        </>
    );
}