import WebGazerProvider from "./_components/webgazer-provider";

export default function RootLayout({children} : {children: React.ReactNode}) {
    return (
        <WebGazerProvider>{children}</WebGazerProvider>
    )
}