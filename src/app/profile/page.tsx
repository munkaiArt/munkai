"use client";
import CreatorProfile from "@/components/profiles/creatorProfile";
import UserProfile from "@/components/profiles/userProfile";
import React from "react";

export default function Profile() {
  const isCreator = false;
  return (
    <div>
      {!isCreator ? (
        <>
          <UserProfile />
        </>
      ) : (
        <>
          <CreatorProfile />
        </>
      )}
    </div>
  );
}
