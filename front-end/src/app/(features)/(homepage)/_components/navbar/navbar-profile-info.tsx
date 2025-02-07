import { Stack, Image, Title, Text } from "@mantine/core";

interface NavbarProfileProps {
  name: string;
  avatar: string;
  honor: string;
}

export default function NavbarProfile({
  name,
  avatar,
  honor,
}: NavbarProfileProps) {
  return (
    <Stack align="center" gap="22">
      <Image
        h={56}
        w={56}
        radius="50%"
        src={avatar}
        alt={name}
        fallbackSrc="https://static.thenounproject.com/png/4366918-200.png"
      />
      <Stack gap="0">
        <Title order={3} ta="center">
          {name}
        </Title>
        <Text ta="center">{honor}</Text>
      </Stack>
    </Stack>
  );
}
