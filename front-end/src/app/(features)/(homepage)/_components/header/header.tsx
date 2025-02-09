import { Burger, Group } from '@mantine/core';
import scaffyLogo from '../../_assets/scaffled-logo.svg';


interface headerProps {
  navbarOpened: boolean,
  navbarOnClick: () => void
}

export default function Header({navbarOpened, navbarOnClick}:headerProps) {
  return (
    <Group h="100%" align="center">
        <Burger opened={navbarOpened} onClick={navbarOnClick} hiddenFrom="sm" size="sm"/>
        <img src={scaffyLogo.src}/>
    </Group>
  )
}