"use client";
import Link from "next/link";
import { AppShell, ScrollArea, Stack } from "@mantine/core";
import Header from "./_components/header";
import NavbarOption from "./_components/navbar-option";
import { IconHome, IconStars, IconSourceCode } from "@tabler/icons-react";
import { useState } from "react";
import NavbarProfile from "./_components/navbar-profile-info";

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
  const [active, setActive] = useState("Dashboard");

  const links = linksList.map((link) => (
    <Link
      style={{ textDecoration: "none", color: "darkslategray" }}
      href={link.link}
      key={link.label}
      onClick={() => {
        setActive(link.label);
      }}
    >
      <NavbarOption
        label={link.label}
        icon={link.icon}
        isActive={active === link.label}
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
      <AppShell.Header p="md">
        <Header />
      </AppShell.Header>

      <AppShell.Navbar py="md">
        <Stack justify="space-between">
          <Stack gap="md">
            {/* HARDCODED DATA TO BE REPLACED */}
            <NavbarProfile
              name="Adrian Cruz"
              avatar="https://upload.wikimedia.org/wikipedia/en/e/ed/Nyan_cat_250px_frame.PNG"
              honor="Explorer"
            />
            <Stack gap="0">{links}</Stack>
          </Stack>
        </Stack>
      </AppShell.Navbar>

      <AppShell.Main component={ScrollArea}>{children}</AppShell.Main>
    </AppShell>
  );
}
