"use client";

import Header from "./_components/header/header";
import NavbarLinks from "./_components/navbar/navbar-option-list";
import NavbarProfileSkeleton from "./_components/navbar/navbar-profile-skeleton";
import { AppShell, Flex, ScrollArea, Stack } from "@mantine/core";
import { Suspense } from "react";
import { useDisclosure } from "@mantine/hooks";
import { usePathname } from "next/navigation";

export default function HomePageLayout({
  children,
  navbarProfileLoader,
}: {
  children: React.ReactNode;
  navbarProfileLoader: React.ReactNode;
}) {
  const [opened, { toggle }] = useDisclosure();
  const pathname = usePathname();
  const isInActivityPage = /^\/courses\/[^/]+\/activities\/[^/]+$/.test(pathname);

  if (isInActivityPage) {
    return <>{children}</>;
  }
  
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 220,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
        padding={{base:0, sm: "md"}}
    >
      <AppShell.Header p="md">
        <Header navbarOpened={opened} navbarOnClick={toggle} />
      </AppShell.Header>

      <AppShell.Navbar px="sm" py="md">
        <Stack justify="space-between">
          <Stack gap="md">
            <Suspense fallback={<NavbarProfileSkeleton />}>
              {navbarProfileLoader}
            </Suspense>
            <Stack gap="0">{<NavbarLinks/>}</Stack>
          </Stack>
        </Stack>
      </AppShell.Navbar>

      <AppShell.Main bg="gray.0" component={ScrollArea}>
        <Flex justify="center">
            {children}
        </Flex>
      </AppShell.Main>
    </AppShell>
  );
}
