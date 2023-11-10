import type { Metadata } from "next";
import { Header } from '@components/Headers/Header'

export const metadata: Metadata = {
  title: "Dormyinn",
  keywords: "Dormyinn",
  description: "Dormyinn page all",
};

export default function DromyinnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
          <Header />
          {children}
          <footer></footer>
      </body>
    </html>
  );
}
