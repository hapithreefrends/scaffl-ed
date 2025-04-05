"use client";

import { useEffect, useState } from "react";

import ScaffledLogo from "@/app/_components/ScaffledLogo";

import {
  Center,
  Button,
  Paper,
  Stack,
  Stepper,
  Group,
  Image,
  Title
} from "@mantine/core";

import {
  UpdateUserProfileFormProvider,
  useUpdateUserProfileForm,
} from "./_components/update-user-profile-form-context";

import { zodResolver } from "mantine-form-zod-resolver";

import { PersonalDetails } from "./_components/PersonalDetails";
import { AcademicDetails } from "./_components/AcademicDetails";
import { Avatar } from "./_components/Avatar";
import { userProfileUpdateDataSchema } from "@/app/_models/user-profile";

import laptopPhoto from "./_assets/laptop.png";
import { useAuthenticatedUser } from "../../_hooks/use-authenticated-user";

import { createClient } from "@/utilities/supabase/client";
import { useRouter } from "next/navigation";
import { notifications } from "@mantine/notifications";

const supabase = createClient();

export default function Page() {
  const { data } = useAuthenticatedUser();
  const router = useRouter();
  const [active, setActive] = useState(0);

  const hasPrevious = active > 0;
  const hasNext = active < 3;
  const previousStep = () => setActive((current) => (current > 0 ? current - 1 : current));
  const nextStep = () => {
    setActive((current) => (current < 3 ? current + 1 : current))

    if (!hasNext) {  
      form.onSubmit(async (values) => {
        const { data, error } = await supabase.from("UserProfile").upsert({
          user_id: values.id,
          first_name: values.first_name,
          last_name: values.last_name,
          birthday: values.birthday,
          avatar: values.avatar,
          sex_id: values.sex_id,
          school_id: values.school_id,
          degree_program_id: values.degree_program_id,
        }).select(`*`).order("user_id").limit(1).single();

        if (error) {
          console.error("Error updating user profile:", error);
        } else {
          console.log("User profile updated successfully:", data);
          notifications.show({
            title: "Success",
            message: "Your profile has been updated successfully.",
            color: "green",
          });
          router.push("/dashboard");
        }
      })();
    }
  };

  const form = useUpdateUserProfileForm({
    mode: "uncontrolled",
    initialValues: {
      id: "",
      first_name: "",
      last_name: "",
      birthday: new Date(),
      avatar: "",
      sex_id: 0,
      school_id: "",
      degree_program_id: "",
    },
    validate: zodResolver(userProfileUpdateDataSchema),
  });

  useEffect(() => {
    form.setValues({
      id: data?.id,
    });
  }, [data]);

  return (
    <UpdateUserProfileFormProvider form={form}>
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
                <Stack align="center" w="100%">
                  <Title>
                    Welcome to Scaffl.ed!
                  </Title>
                  <Image src={laptopPhoto.src} alt="Scaffy's welcome!" style={{ width: "50%" }} />
                </Stack>
              </Stepper.Completed>
            </Stepper>

            <Group justify="center">
              {hasPrevious && <Button variant="default" onClick={previousStep}>Back</Button>}
              <Button onClick={nextStep}>{hasNext ? "Next" : "Submit"}</Button>
            </Group>
          </Stack>
        </Paper>
      </Center>
    </UpdateUserProfileFormProvider>
  );
}