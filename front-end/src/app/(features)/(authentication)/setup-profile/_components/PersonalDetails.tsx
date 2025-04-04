import { Stack, TextInput } from '@mantine/core';

export function PersonalDetails() {
    return (
        <Stack style={{overflowY: "auto"}}>
            <TextInput
                withAsterisk
                label="First Name"
                placeholder="John"
                required
            />
            <TextInput
                withAsterisk
                label="Last Name"
                placeholder="Doe"
                required
            />
            <TextInput
                withAsterisk
                label="Birth Date"
                placeholder="19/09/2023 23:24"
                required
            />
            <TextInput
                withAsterisk
                label="Sex"
                placeholder="Male"
                required
            />
        </Stack>
    );
}