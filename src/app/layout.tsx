import type { Metadata } from "next";

import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const space_Grotesk = Space_Grotesk({
  weight: "400",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Munkai",
  description: "",
};

export type LayoutProps = { children: React.ReactNode };

export default async function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={space_Grotesk.className}>{children}</body>
    </html>
  );
}
