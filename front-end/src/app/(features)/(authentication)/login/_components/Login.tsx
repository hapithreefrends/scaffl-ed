import Link from 'next/link';
import LoginForm from './LoginForm';
import { Text, Button, Checkbox, Group, TextInput, Paper, Box, Flex } from '@mantine/core';

export default function Login() {
  return <div> 
      <Flex direction="column" gap="md">
        <Text size="xl" style={{ fontWeight: 'bold' }}>Log-In</Text>
        <LoginForm/>
        <Text size="xs" >Do not have an account?{' '}
          <Link href="./signup">
            <Text component="a" color="blue" style={{ textDecoration: 'underline', cursor: 'pointer' }}>
              Sign Up
            </Text>
          </Link>
        </Text>
      </Flex>
  </div>;
}
