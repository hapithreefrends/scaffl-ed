import { Text, Title, Stack } from "@mantine/core"

export interface CourseDetailHeaderProps {
    title: string,
    description: string
}

export default function CourseDetailHeader({title, description}:CourseDetailHeaderProps) {
    return (
        <Stack>
            <Title order={1}>{title}</Title>
            <Text>{description}</Text>
        </Stack>
    )
}

