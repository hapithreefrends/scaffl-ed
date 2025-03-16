import { Skeleton, Stack } from "@mantine/core";

export default function NavbarProfileSkeleton() {
  return (
    <Stack align="center" gap="22" px="md">
      <Skeleton height={56} circle />

      <Stack align="center" style={{ width: "100%" }} gap="8">
        <Skeleton height={22} radius="xl"/>
        <Skeleton height={16} width="60%" radius="xl"/>
      </Stack>
    </Stack>
  );
}