"use client";

import { useState } from "react";

import ScaffledLogo from "@/app/_components/ScaffledLogo";

import {
  Center,
  Button,
  Paper,
  Stack,
  Stepper,
  Group
} from "@mantine/core";

import {
  UpdateUserProfileFormProvider,
  useUpdateUserProfileForm,
} from "./_components/update-user-profile-form-context";

import { zodResolver } from "mantine-form-zod-resolver";

import { PersonalDetails } from "./_components/PersonalDetails";
import { AcademicDetails } from "./_components/AcademicDetails";
import { Avatar } from "./_components/Avatar";

export default function Page() {
  const [active, setActive] = useState(1);
  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  const form = useUpdateUserProfileForm({
    mode: "uncontrolled",
    initialValues: {
      id: "",
      name: "",
      description: "",
      difficulty_id: 0,
      programming_language_id: "",
      chapters: [],
    },
    validate: zodResolver(userProfileUpdateDataSchema),
  });

  return (
    <Center
      h="100vh"
      style={{ background: "linear-gradient(to right, #0D6E6E, #683598)" }}
    >
      <Paper
        w="50%"
        shadow="md"
        radius="md"
        p={{ base: "md", sm: "xl" }}
        bg="white"
      >
        <Stack align="center" gap="xl">
          <ScaffledLogo size={128} variant="full" color="original" />

          <Stepper active={active} onStepClick={setActive}>
            <Stepper.Step label="Personal Details" description="Tell us who you are">
              <PersonalDetails /> 
            </Stepper.Step>

            <Stepper.Step label="Academic Details" description="Train your mind">
              <AcademicDetails />
            </Stepper.Step>

            <Stepper.Step label="Avatar" description="Show your face">
              <Avatar />
            </Stepper.Step>

            <Stepper.Completed>
              Done!
            </Stepper.Completed>
          </Stepper>

          <Group justify="center">
            <Button variant="default" onClick={prevStep}>Back</Button>
            <Button onClick={nextStep}>Next step</Button>
          </Group>
        </Stack>
      </Paper>
    </Center>
  );
}