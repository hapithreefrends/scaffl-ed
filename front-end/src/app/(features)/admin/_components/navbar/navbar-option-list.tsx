"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { Stack, Text } from "@mantine/core";
import Link from "next/link";
import NavbarOption from "./navbar-option";
import { IconHome, IconSourceCode, IconSchool } from "@tabler/icons-react";

const linksList = [
  { link: "dashboard", label: "Dashboard", icon: IconHome },
  { link: "courses", label: "Courses", icon: IconSchool },
  { link: "teachers", label: "Teachers", icon: IconSourceCode },
  { link: "students", label: "Students", icon: IconSourceCode },
];

export default function NavbarLinks() {
  const router = useRouter();
  const pathname = usePathname();
  const [, setActive] = useState(pathname);

  return (
    <Stack gap="0">
      {linksList.map((link) => (
        <Link
          style={{ textDecoration: "none", color: "darkslategray" }}
          href={link.link}
          key={link.label}
          onClick={(e) => {
            e.preventDefault();
            router.push(`/admin/${link.link}`);
            setActive(link.link)
          }}
        >
          <NavbarOption
            label={link.label}
            icon={link.icon}
            isActive={pathname.startsWith(`/admin/${link.link}`)}
          />
        </Link>
      ))}
    </Stack>
  );
}