"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { Stack } from "@mantine/core";
import Link from "next/link";
import NavbarOption from "./navbar-option";
import { IconHome, IconSourceCode } from "@tabler/icons-react";

const linksList = [
  { link: "/dashboard", label: "Dashboard", icon: IconHome },
  { link: "/playground", label: "Playground", icon: IconSourceCode },
];

export default function NavbarLinks() {
  const pathname = usePathname();
  const [active, setActive] = useState(pathname);

  return (
    <Stack gap="0">
      {linksList.map((link) => (
        <Link
          style={{ textDecoration: "none", color: "darkslategray" }}
          href={link.link}
          key={link.label}
          onClick={() => setActive(link.link)}
        >
          <NavbarOption
            label={link.label}
            icon={link.icon}
            isActive={active === link.link}
          />
        </Link>
      ))}
    </Stack>
  );
}
