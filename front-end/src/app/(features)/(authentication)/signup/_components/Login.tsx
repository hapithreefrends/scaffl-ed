import LoginForm from './LoginForm';
import { Text, Button, Checkbox, Group, TextInput, Paper, Box, Flex } from '@mantine/core';

export default function Login() {
  return <> 
      <Flex direction="column" gap="md" w= '100%'>
        <Text size="xl" style={{ fontWeight: 'bold',
}}>Sign-Up</Text>
        <LoginForm/>
        <Text size="xs" >Do you have an account? Log in</Text>
      </Flex>
  </>;
}
