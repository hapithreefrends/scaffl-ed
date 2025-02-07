import { type Metadata } from "next";
import Head from "next/head";

import React from "react";

import {
  ColorSchemeScript,
  mantineHtmlProps,
  MantineProvider,
} from "@mantine/core";
import "@mantine/core/styles.css";
// import '@mantine/form/styles.css';
import "@mantine/dates/styles.css";
import "@mantine/charts/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/code-highlight/styles.css";
import "@mantine/tiptap/styles.css";
import "@mantine/dropzone/styles.css";
// import '@mantine/modals/styles.css';
import "@mantine/nprogress/styles.css";
import "@mantine/spotlight/styles.css";
import "@mantine/carousel/styles.css";

// import { IconContext } from "@phosphor-icons/react";

// import theme from "@/utilities/theme";

import "./_assets/styles/global.css";

import { Actor, Poppins } from "next/font/google";
const bodyFont = Actor({ subsets: ["latin"], weight: "400" });
const headerFont = Actor({ subsets: ["latin"], weight: "400" });
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
        <MantineProvider theme={
          {
            components: {
              Text: {
                styles: { root: { fontFamily: bodyFont.style.fontFamily } },
              },
              Title: {
                styles: { root: { fontFamily: headerFont.style.fontFamily } },
              },
            },
          }
        }>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
