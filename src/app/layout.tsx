import type { Metadata } from "next";

import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/landingPage/navbar";
import Footer from "@/components/landingPage/footer";

const space_Grotesk = Space_Grotesk({
  weight: "400",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Munkai",
  description: "",
};

export type LayoutProps = { children: React.ReactNode };

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={space_Grotesk.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
