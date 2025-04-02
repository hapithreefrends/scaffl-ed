import { Burger, Group, Image } from '@mantine/core';
import scaffyLogo from '../../../../_assets/images/logos/full/logo-full-flat.svg';


interface headerProps {
  navbarOpened: boolean,
  navbarOnClick: () => void
}

export default function Header({navbarOpened, navbarOnClick}:headerProps) {
  return (
    <Group p="sm" h="100%" align="center">
        <Burger opened={navbarOpened} onClick={navbarOnClick} hiddenFrom="sm" size="sm"/>
        <Image h="100%" src={scaffyLogo.src}/>
    </Group>
  )
}