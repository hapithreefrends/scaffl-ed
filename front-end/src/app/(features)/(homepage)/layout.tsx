import { AppShell } from "@mantine/core";

export default function HomePageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    // i want to implement app shell here since every feature will have the same layout
    return (
        <AppShell>
            <AppShell.Header>
                <h1>Header</h1>
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
