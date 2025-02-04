'use client';
import { AppShell, Image } from "@mantine/core";
import image from './_assets/scaffled_logo.png';

export default function HomePageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    // implemented app shell here since every feature will have the same layout
    return (
        <AppShell
            header = {{height: 60}}
            navbar = {{
                width: 220,
                breakpoint: 'sm'
            }}
        >
            <AppShell.Header>
                <img src={image.src}></img>
            
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
