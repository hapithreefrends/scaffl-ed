import { useRouter } from "next/navigation";
import LoginForm from "./LoginForm";
import { Text, Flex } from "@mantine/core";

export default function Login() {
  const router = useRouter();
  return <div> 
      <Flex direction="column" gap="md">
        <Text size="xl" style={{ fontWeight: "bold" }}>Log-In</Text>
        <LoginForm/>
        <Text size="xs" >Do not have an account?{" "}
          <Text
            component="span"
            color="blue"
            style={{ textDecoration: "underline", cursor: "pointer" }}
            onClick={() => router.push("/signup")}
          >
            Sign Up
          </Text>
        </Text>
      </Flex>
  </div>;
}
