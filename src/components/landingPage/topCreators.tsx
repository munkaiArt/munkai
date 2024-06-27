"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Card, CardContent } from "../ui/card";
import profileImage from "../../../public/images/creepy-ghost.png";
import Image from "next/image";

interface TopCreatorsValue {
  image: string | any;
  username: string;
  publications: number;
}

const TopCreatorsData: TopCreatorsValue[] = [
  {
    image: profileImage,
    username: "@halfdobis",
    publications: 42,
  },
  {
    image: profileImage,
    username: "@eugene",
    publications: 12,
  },
  {
    image: profileImage,
    username: "@jia-ayo",
    publications: 62,
  },
  {
    image: profileImage,
    username: "@halfdobis",
    publications: 13,
  },
  {
    image: profileImage,
    username: "@eugene",
    publications: 52,
  },
  {
    image: profileImage,
    username: "@jia-ayo",
    publications: 17,
  },
  {
    image: profileImage,
    username: "@halfdobis",
    publications: 100,
  },
  {
    image: profileImage,
    username: "@jia-ayo",
    publications: 17,
  },
];

const TopCreators: React.FC = () => {
  return (
    <section className="mt-20 px-6">
      <div className="flex justify-center items-center mb-10">
        <h1 className="heading text-center mt-10 text-2xl font-bold">
          Our Top Creators
        </h1>
      </div>
      <div className="flex flex-wrap mx-auto justify-center items-center max-w-4xl">
        {TopCreatorsData.map((topCreator, index) => (
          <Link href={"#"} key={index}>
            <Card className="bg-secondary border-none shadow-none flex items-center justify-center gap-x-4 py-4 px-6 m-2">
              <div className="flex items-center justify-center border-2 border-primary rounded-full h-11 w-11">
                <Image
                  src={topCreator.image}
                  alt={topCreator.username}
                  className="w-12 h-12 bg-hover rounded-full"
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-primary">
                  {topCreator.username}
                </p>
                <p className="text-xs font-normal">
                  {topCreator.publications} Publications
                </p>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default TopCreators;
