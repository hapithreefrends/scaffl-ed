import { Flex } from '@mantine/core';
import scaffyLogo from '../_assets/scaffled-logo.svg';

export default function Header() {
  return (
    <Flex h="100%" align="center" justify="space-between">
        <img src={scaffyLogo.src}/>
    </Flex>
  )
}