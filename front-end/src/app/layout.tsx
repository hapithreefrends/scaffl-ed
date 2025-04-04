import { type Metadata } from "next";
import Head from "next/head";
import Providers from "./providers";

import React from "react";

import {
  ColorSchemeScript,
  mantineHtmlProps,
  MantineProvider,
} from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";

import "@mantine/core/styles.layer.css";
// import "@mantine/form/styles.layer.css";
import "@mantine/dates/styles.layer.css";
import "@mantine/charts/styles.layer.css";
import "@mantine/notifications/styles.layer.css";
import "@mantine/code-highlight/styles.layer.css";
import "@mantine/tiptap/styles.layer.css";
import "@mantine/dropzone/styles.layer.css";
// import "@mantine/modals/styles.layer.css";
import "@mantine/nprogress/styles.layer.css";
import "@mantine/spotlight/styles.layer.css";
import "@mantine/carousel/styles.layer.css";

import "@mantine/core/styles.layer.css";
import "mantine-datatable/styles.layer.css";
// import { IconContext } from "@phosphor-icons/react";

import theme from "@/utilities/theme";

import "./_assets/styles/global.css";

// import { Actor, Poppins } from "next/font/google";
// const bodyFont = Actor({ subsets: ["latin"], weight: "400" });
// const headerFont = Actor({ subsets: ["latin"], weight: "400" });
// const headerFont = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "scaffl-ed",
  description: "Scaffold your learning!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <Head>
        <ColorSchemeScript />
      </Head>

      <body>
        <MantineProvider theme={theme}>
          {/* <IconContext value={{
                            size: 32,
                            weight: "regular"
                        }}> */}
          <ModalsProvider>
            <Providers>{children}</Providers>
          </ModalsProvider>
          {/* </IconContext> */}
        </MantineProvider>
      </body>
    </html>
  );
}
