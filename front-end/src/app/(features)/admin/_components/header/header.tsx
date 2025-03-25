import { Burger, Group } from '@mantine/core';

import ScaffledLogo from '@/app/_components/ScaffledLogo';


interface headerProps {
  navbarOpened: boolean,
  navbarOnClick: () => void
}

export default function Header({navbarOpened, navbarOnClick}:headerProps) {
  return (
    <Group h="100%" align="center">
        <Burger opened={navbarOpened} onClick={navbarOnClick} hiddenFrom="sm" size="sm"/>
        <ScaffledLogo variant="full" color="original" />
    </Group>
  )
}