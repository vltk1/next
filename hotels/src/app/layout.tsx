import type { Metadata } from "next";
import '@styles/globals.scss'
import "@styles/axis.scss"

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
          {children}
      </body>
    </html>
  );
}
