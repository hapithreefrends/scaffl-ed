import { Center, Box } from '@mantine/core';

export default function Demo() {
  return (
    <Center h={100} bg="var(--mantine-color-gray-light)">
      <Box bg="var(--mantine-color-blue-light)">All elements inside Center are centered</Box>
    </Center>
  );
}