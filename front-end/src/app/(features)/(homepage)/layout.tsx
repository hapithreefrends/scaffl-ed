'use client';
import { AppShell, Image } from "@mantine/core";

export default function HomePageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    // i want to implement app shell here since every feature will have the same layout
    return (
        <AppShell
            header = {{height: 60}}
            navbar = {{
                width: 220,
                breakpoint: 'sm'
            }}
        >
            <AppShell.Header>
                <img src="/_assets/scaffled_logo.png"></img>
            
            </AppShell.Header>
            
            <AppShell.Navbar>
            </AppShell.Navbar>

            <AppShell.Main>
                {children}
            </AppShell.Main>

        </AppShell>
    )
//   return <div>{children}</div>;
}
