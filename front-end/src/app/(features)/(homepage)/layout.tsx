"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AppShell, AppShellMain, AppShellHeader, AppShellNavbar, ScrollArea, Stack } from "@mantine/core";
import { IconHome, IconStars, IconSourceCode } from "@tabler/icons-react";
import Header from "./_components/header/header";
import NavbarOption from "./_components/navbar/navbar-option";
import NavbarProfileLoader from "./_components/navbar/navbar-profile-loader";

const linksList = [
  { link: "/dashboard", label: "Dashboard", icon: IconHome },
  { link: "/courses", label: "Courses", icon: IconStars },
  { link: "/playground", label: "Playground", icon: IconSourceCode },
];

export default function HomePageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [active, setActive] = useState(pathname);

  const links = linksList.map((link) => (
    <Link
      style={{ textDecoration: "none", color: "darkslategray" }}
      href={link.link}
      key={link.label}
      onClick={() => {
        setActive(link.link);
      }}
    >
      <NavbarOption
        label={link.label}
        icon={link.icon}
        isActive={active === link.link}
        
      />
    </Link>
  ));

  // implemented app shell here since every feature will have the same layout
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 220,
        breakpoint: "sm",
      }}
      padding="md"
    >
      <AppShellHeader p="md">
        <Header />
      </AppShellHeader>

      <AppShellNavbar py="md">
        <Stack justify="space-between">
          <Stack gap="md">
            <NavbarProfileLoader />
            <Stack gap="0">{links}</Stack>
          </Stack>
        </Stack>
      </AppShellNavbar>

      <AppShellMain component={ScrollArea}>{children}</AppShellMain>
    </AppShell>
  );
}
