import { Flex, Stack, Image, Title, Text } from "@mantine/core";
import classes from "../../_styles/navbar-profile.module.css"

interface NavbarProfileProps {
  name: string;
  avatar: string;
  honor: string;
  href: string;
}

export default function NavbarProfile({
  name,
  avatar,
  honor,
  href,
}: NavbarProfileProps) {
  return (
    <Flex direction="column" className={classes.profileContainer} align="center" gap="8" component="a" href={href}>
      <Image
        h={72}
        w={72}
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
    </Flex>
  );
}