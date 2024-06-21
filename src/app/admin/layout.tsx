"use client";
import React from "react";
import { LayoutProps } from "../layout";

const AdminLayout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-row flex-1 overflow-hidden">
        <div className="flex-1 overflow-y-auto scrollbar-hide">
          <div className="container my-4">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
