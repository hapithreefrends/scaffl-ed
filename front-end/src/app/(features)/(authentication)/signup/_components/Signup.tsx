import { useRouter } from "next/navigation";
import SignupForm from "./SignupForm";
import { Text, Flex } from "@mantine/core";

export default function Signup() {
  const router = useRouter();
  return <>
    <Flex direction="column" gap="md" w="100%">
      <Text size="xl" style={{
        fontWeight: "bold",
      }}>Sign-Up</Text>
      <SignupForm />
      <Text size="xs"> Do you have an account?{" "}
        <Text
          component="span"
          color="blue"
          style={{ textDecoration: "underline", cursor: "pointer" }}
          onClick={() => router.push("./login")}
        >
          Log In
        </Text>
      </Text>
    </Flex>
  </>;
}
