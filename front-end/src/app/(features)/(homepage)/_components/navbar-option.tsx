'use client'

import { Group } from "@mantine/core";
import classes from "../_styles/navbar-option.module.css";

interface navbarOptionProps {
    label: string,
    icon: React.ElementType,
    isActive?: boolean
}

export default function NavbarOption({label, icon: Icon, isActive}: navbarOptionProps) {
    return (
        <Group className={isActive ? classes.navbarOptionActive : classes.navbarOptionInactive} px="md" py="sm" gap="xs">
            {<Icon height="20" />}
            {label}
        </Group>
    )
}