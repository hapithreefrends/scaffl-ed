"use client";

import { useRouter } from "next/navigation";
import { BackgroundImage, Button, Container, Group, Overlay, Stack, Text, Title, alpha, getThemeColor, useMantineTheme  } from "@mantine/core";

import image from "./_assets/images/scaffy-hello__half.png";
import classes from "./_assets/styles/Page.module.css";

export default function Page() {
  const router = useRouter();
  const theme = useMantineTheme();

  return (
    <div className={classes.wrapper}>
      <Overlay className={classes.overlayBehindBackground} gradient={`radial-gradient(ellipse at top, ${alpha(getThemeColor("teal.9", theme), 0.95)} 0%, ${alpha(getThemeColor("green.5", theme), 0)} 50%)`} opacity={1} />
      <BackgroundImage className={classes.backgroundImage} src={image.src}>
        <Container className={classes.content}>
          <Stack className={classes.contentStack} justify="flex-end" align="center" pb="8rem" gap="2rem">
            <Title order={1} size="6rem" lh="4rem" ta="center">
              <Text className={classes.highlighted} c="grape.7" fw="bold" span inherit>
                Coming Soon!
              </Text>
            </Title>

            <Text component="div" size="xl" c="dimmed" ta="center">
              <Text>
                <Text variant="gradient" gradient={{ from: "violet", to: "grape", deg: 45 }} fw="bold" span inherit>
                  scaffl.ed
                </Text>, your AI Interactive Tutor, is currently under construction!
              </Text>
              <Text>Please come back again!</Text>
            </Text>

            <Group gap="xl">
              <Button size="md" variant="gradient" gradient={{ from: "teal", to: "grape" }} onClick={() => {
                router.push("/login")
              }}>
                Signup
              </Button>

              <Button size="md" variant="default" onClick={() => {
                router.push("/login")
              }}>
                Login
              </Button>
            </Group>
          </Stack>
        </Container>
      </BackgroundImage>
    </div>
  );
}
