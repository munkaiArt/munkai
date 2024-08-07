import type { Metadata } from "next";

import { Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "../providers/theme-provider";
import Navbar from "@/components/landingPage/navbar";
import Footer from "@/components/landingPage/footer";
import Header from "@/components/header/Header";
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

export default function RootLayout({ children }: LayoutProps) {
  const isAdmin = false;
  return (
    <html lang="en">
      <body className={space_Grotesk.className}>
        {isAdmin ? <Header /> : <Navbar />}
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
