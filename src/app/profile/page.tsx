"use client";
import AdminProfile from "@/components/profiles/adminProfile";
import CreatorProfile from "@/components/profiles/creatorProfile";
import UserProfile from "@/components/profiles/userProfile";
import React from "react";

export default function Profile() {
  return (
    <div>
      <UserProfile />
      {/* <CreatorProfile /> */}
      {/* <AdminProfile /> */}
    </div>
  );
}
