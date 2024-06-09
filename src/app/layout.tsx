import type { Metadata } from "next";

import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
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
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
