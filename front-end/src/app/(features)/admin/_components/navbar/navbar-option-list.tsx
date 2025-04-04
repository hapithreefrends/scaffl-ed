"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { Button, Stack } from "@mantine/core";
import Link from "next/link";
import NavbarOption from "./navbar-option";
import { IconUser, IconBook, IconHome, IconSchool } from "@tabler/icons-react";
import { createClient } from "@/utilities/supabase/client";

const linksList = [
  { link: "dashboard", label: "Dashboard", icon: IconHome },
  { link: "courses", label: "Courses", icon: IconSchool },
  { link: "teachers", label: "Teachers", icon: IconBook },
  { link: "students", label: "Students", icon: IconUser },
];

export default function NavbarLinks() {
  const supabase = createClient();
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
            setActive(link.link);
          }}
        >
          <NavbarOption
            label={link.label}
            icon={link.icon}
            isActive={pathname.startsWith(`/admin/${link.link}`)}
          />
        </Link>
      ))}
      <Stack>
        <Button
          onClick={() => {
            router.push("/dashboard");
          }}
        >
          Student
        </Button>

        <Button
          onClick={async () => {
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
