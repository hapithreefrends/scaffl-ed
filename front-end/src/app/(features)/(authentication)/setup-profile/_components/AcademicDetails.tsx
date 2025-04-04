import { Stack, TextInput } from "@mantine/core";

export function AcademicDetails() {
    return (
        <Stack style={{ overflowY: "auto" }}>
            <TextInput
                withAsterisk
                label="School"
                placeholder="University of the East"
                required
            />
            <TextInput
                withAsterisk
                label="College Program"
                placeholder="Computer Science"
                required
            />
        </Stack>
    )
}