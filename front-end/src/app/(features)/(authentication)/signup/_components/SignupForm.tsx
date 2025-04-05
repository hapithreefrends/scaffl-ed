"use client";

import { useRouter } from "next/navigation";

import {
  Button,
  TextInput,
  Flex,
  PasswordInput,
} from "@mantine/core";

import { notifications } from "@mantine/notifications";

import { useForm } from "@mantine/form";
import { IconAt, IconLock } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import { useSignup } from "@/app/(features)/_hooks/use-signup";

export default function SignupForm() {
  const router = useRouter();
  const signup = useSignup();

  const [isVisiblePassword, { toggle: toggleVisiblePassword }] = useDisclosure(false);
  const [isVisibleConfirmPassword, { toggle: toggleVisibleConfirmPassword }] = useDisclosure(false);

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: ""
    },
    validate: {
      email: (value) =>
        /^\S+@\S+\.\S+$/.test(value) ? null : "Invalid email format",
      password: (value) =>
        value.length >= 6 ? null : "Password must be at least 6 characters",
      confirmPassword: (value, values) =>
        value === values.password ? null : "Password is not the same",
    },
  });

  return (
    <>
      <form
        onSubmit={form.onSubmit(async (values) => {
          const { error } = await signup.mutateAsync({ email: values.email, password: values.password });

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
              message: `Signed up successfully!`,
              color: "green",
            });

            router.push(`verify-email?email=${values.email}`);
          }
        })}
      >
        <Flex direction="column" style={{ flex: 1, marginRight: "50px", }}>
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
            visible={isVisiblePassword}
            onVisibilityChange={toggleVisiblePassword}
            pb="sm"
            {...form.getInputProps("password")}
          />

          {
            <PasswordInput
              display={form.getDirty().password ? "block" : "none"}
              withAsterisk
              label="Confirm Password"
              placeholder="***********"
              required
              leftSection={<IconLock size={18} />}
              visible={isVisibleConfirmPassword}
              onVisibilityChange={toggleVisibleConfirmPassword}
              pb="sm"
              {...form.getInputProps("confirmPassword")}
            />
          }
        </Flex>
        <Flex pt="lg">
          <Button color="purple" size="md" radius="sm" type="submit">
            Sign-Up
          </Button>
        </Flex>
      </form >
    </>
  );
}
