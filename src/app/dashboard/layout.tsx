"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { LayoutProps } from "../layout";
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import styles from "../page.module.css";

const DashboardLayout = ({ children }: LayoutProps) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-row flex-1">
        <section className="p-4 mr-4">
          <SideBar />
        </section>
        <div className="flex-1 overflow-y-scroll scrollbar-hide">
          <div className="container my-4">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
