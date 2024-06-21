"use client";
import AdminProfile from "@/components/profiles/adminProfile";
import CreatorProfile from "@/components/profiles/creatorProfile";
import UserProfile from "@/components/profiles/userProfile";
import React from "react";

export default function Profile() {
  return (
    <main className="p-8">
      <div>
        <div>
          <h1 className="text-xl my-4">Profile Page</h1>
        </div>
        <UserProfile />
        <CreatorProfile />
        <AdminProfile />
      </div>
    </main>
  );
}
