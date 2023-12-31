import type { Metadata } from "next";
import '@styles/globals.scss'
import Head from "next/head";
import HeaderDormyinn from "./Headers/HeaderDormyinn";

export default function DromyinnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>My page title</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <body>
        <HeaderDormyinn />
          {children}
      </body>
    </html>
  );
}
