import React, { useState } from "react";
import Image from "next/image";
import profileImage from "../../../public/images/profile-picture.png";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

function UserProfile() {
  const [activeTab, setActiveTab] = useState("Comics");

  const handleTabClick = (tabName: React.SetStateAction<string>) => {
    setActiveTab(tabName);
  };

  return (
    <div className="">
      <div className="bg-gray-500 h-56"></div>
      <div className="px-10 pt-10 pb-4 bg-secondary relative">
        <div className="absolute -top-16 left-10 w-32 h-32 shadow-md rounded-full">
          <Image
            src={profileImage}
            alt="Profile"
            layout="fill"
            objectFit="cover"
            className="w-32 h-32"
          />
        </div>
        <div className="mt-10 flex">
          <div>
            <div className="flex items-center">
              <h2 className="text-2xl font-bold">Munkai Art</h2>
              <span className="text-primary ml-2">★</span>
            </div>
            <p className="text-base font-semibold text-primary">@munkai</p>
            <p className="text-sm mt-1">124 Publications | 3890 Chapters</p>
          </div>
          <Button size={"lg"} className="ml-auto font-semibold mt-2">
            Create
          </Button>
        </div>
        <div className="mt-10 max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex space-x-4">
            {["Comics", "Books", "Poems", "Articles", "Blogs"].map((tab) => (
              <div
                key={tab}
                className={`cursor-pointer ${
                  activeTab === tab ? "font-semibold text-primary" : ""
                }`}
                onClick={() => handleTabClick(tab)}
              >
                {tab}
              </div>
            ))}
          </div>
          <div>
            <Select>
              <SelectTrigger className="border-none bg-hover w-44">
                <SelectValue placeholder="Filter publications" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="owned">Owned</SelectItem>
                  <SelectItem value="collections">Collections</SelectItem>
                  <SelectItem value="saved">Saved</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <div className="mt-4 h-screen">
        {activeTab === "Comics" && (
          <div className="">Content for Comics goes here</div>
        )}
        {activeTab === "Books" && (
          <div className="">Content for Books goes here</div>
        )}
        {activeTab === "Poems" && (
          <div className="">Content for Poems goes here</div>
        )}
        {activeTab === "Articles" && (
          <div className="">Content for Articles goes here</div>
        )}
        {activeTab === "Blogs" && (
          <div className="">Content for Blogs goes here</div>
        )}
      </div>
    </div>
  );
}

export default UserProfile;
