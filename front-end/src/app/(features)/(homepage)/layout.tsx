import {
  AppShell,
  AppShellMain,
  AppShellHeader,
  AppShellNavbar,
  ScrollArea,
  Stack,
} from "@mantine/core";
import Header from "./_components/header/header";
import NavbarProfileLoader from "./_components/navbar/navbar-profile-loader";
import NavbarLinks from "./_components/navbar/navbar-option-list";
import { Suspense } from "react";

import NavbarProfileSkeleton from "./_components/navbar/navbar-profile-skeleton";

export default function HomePageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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

      <AppShellNavbar px="sm" py="md">
        <Stack justify="space-between">
          <Stack gap="md">
            <Suspense fallback={<NavbarProfileSkeleton />}>
              <NavbarProfileLoader />
            </Suspense>
            <Stack gap="0">{<NavbarLinks />}</Stack>
          </Stack>
        </Stack>
      </AppShellNavbar>

      <AppShellMain component={ScrollArea}>{children}</AppShellMain>
    </AppShell>
  );
}
