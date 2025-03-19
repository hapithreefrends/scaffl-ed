"use client";

import { useState } from "react";
import { IconHome, IconSourceCode, IconSchool } from "@tabler/icons-react";

import { Button, Stack } from "@mantine/core";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

import { createClient } from "@/utilities/supabase/client";

import NavbarOption from "./navbar-option";

const linksList = [
  { link: "/dashboard", label: "Dashboard", icon: IconHome },
  { link: "/courses", label: "Courses", icon: IconSchool },
  { link: "/playground", label: "Playground", icon: IconSourceCode },
];

export default function NavbarLinks() {
  const router = useRouter();
  const pathname = usePathname();
  const [, setActive] = useState(pathname);
  const supabase = createClient();

  return (
    <Stack h="100%" justify="space-between">
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
              isActive={pathname.startsWith(link.link)}
            />
          </Link>
        ))}
      </Stack>
      <Stack>
        <Button onClick={async () => {
          await supabase.auth.signOut();
          router.push("/login");
        }} 
          color="red"
        >
          Logout
        </Button>
      </Stack>
    </Stack>
  );
}
