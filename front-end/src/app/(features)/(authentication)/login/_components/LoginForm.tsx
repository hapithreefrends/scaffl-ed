"use client";

import { createClient } from "@/utilities/supabase/client";

import { useRouter } from "next/navigation";

import {
  Button,
  TextInput,
  Flex,
  PasswordInput
} from "@mantine/core";

import { notifications } from "@mantine/notifications";

import { useForm } from "@mantine/form";
import { IconAt, IconLock } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";

export default function LoginForm() {
  const router = useRouter();
  const supabase = createClient();

  async function signInWithEmail(email: string, password: string) {
    return await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })
  }

  const [visible, { toggle }] = useDisclosure(false);

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: {
      email: (value) =>
        /^\S+@\S+\.\S+$/.test(value) ? null : "Invalid email format",
      password: (value) =>
        value.length >= 6 ? null : "Password must be at least 6 characters",
    },
  });

  return (
    <>
      <form
        onSubmit={form.onSubmit(async (values) => {
          const { error } = await signInWithEmail(values.email, values.password);

          if (error) {
            notifications.show({
              title: "Error",
              message: error.message,
              color: "red",
            });

            console.log(error);
          } else {
            notifications.show({
              title: "Success",
              message: `Logged in successfully!`,
              color: "green",
            });

            router.push("/dashboard");
          }
        })}
      >
        <Flex direction="column" style={{ flex: 1 }}>
          <TextInput
            withAsterisk
            label="E-mail"
            placeholder="johndoe@gmail.com"
            required
            leftSection={<IconAt size={18} />}
            pb="sm"
            {...form.getInputProps("email")}
          />

          <PasswordInput
            withAsterisk
            label="Password"
            placeholder="***********"
            required
            leftSection={<IconLock size={18} />}
            // rightSection={<IconEye size={18} />}
            visible={visible}
            onVisibilityChange={toggle}
            pb="sm"
            {...form.getInputProps("password")}
          />
        </Flex>
        <Flex pt="lg">
          <Button color="purple" size="md" radius="sm" type="submit">
            Log-In
          </Button>
        </Flex>
      </form>
    </>
  );
}
