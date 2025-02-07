import { Skeleton, Stack } from "@mantine/core";

export default function NavbarProfileSkeleton() {
  return (
    <Stack align="center" gap="22">
      <Skeleton height={56} circle />
      <Stack gap="0">
        <Skeleton height={24} radius="xl"/>
        <Skeleton height={16} radius="xl"/>
      </Stack>
    </Stack>
  );
}
