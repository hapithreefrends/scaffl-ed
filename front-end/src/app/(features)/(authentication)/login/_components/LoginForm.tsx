import { Button, Checkbox, Group, TextInput, Paper, Box, Flex } from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconAt, IconEye, IconLock } from '@tabler/icons-react'; 

export default function LoginForm() {
    const form = useForm({
        initialValues: {
            email: '',
            password: ''
        },
        validate: {
            email: (value) => (/^\S+@\S+\.\S+$/.test(value) ? null : 'Invalid email format'),
            password: (value) => (value.length >= 6 ? null : 'Password must be at least 6 characters'),
          },
    });

    return <>
        <form onSubmit={form.onSubmit(async (values) => {
            console.log(values);
        })}>
            <Flex direction="column" style={{ flex: 1}}>
                <TextInput
                    withAsterisk
                    label="E-mail"
                    placeholder="johndoe@gmail.com"
                    required
                    leftSection={<IconAt size={18} />}
                    pb="sm"
                    {...form.getInputProps('email')}
                />

                <TextInput
                    withAsterisk
                    label="Password"
                    placeholder="***********"
                    required
                    leftSection={<IconLock size={18} />}
                    rightSection={<IconEye size={18} />}
                    pb="sm"
                    {...form.getInputProps('password')}
                />
            </Flex>
            <Flex pt="lg">
                <Button color="purple" size="md" radius="sm" 
                type="submit">
                    Log-In
                </Button >
            </Flex>
        </form>
    </>
}