"use client";
import React, { useEffect, useState } from "react";
import { books } from "@/constants/mockData";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import BookCard from "../cards/BookCard";
import Link from "next/link";
import { Card, CardContent } from "../ui/card";
import profileImage from "../../../public/images/creepy-ghost.png";
import Image from "next/image";

interface TopArtist {
  image: string | any;
  username: string;
}

const TopArtistsData: TopArtist[] = [
  {
    image: profileImage,
    username: "@halfdobis",
  },
  {
    image: profileImage,
    username: "@eugene",
  },
  {
    image: profileImage,
    username: "@jia-ayo",
  },
  {
    image: profileImage,
    username: "@halfdobis",
  },
  {
    image: profileImage,
    username: "@eugene",
  },
  {
    image: profileImage,
    username: "@jia-ayo",
  },
  {
    image: profileImage,
    username: "@halfdobis",
  },
];

const TopArtists: React.FC = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 8000, stopOnInteraction: true })
  );
  return (
    <section className="mt-20 px-6">
      <div className="flex justify-center items-center mb-10">
        <h1 className="heading text-center mt-10 mb-6 text-2xl font-bold">
          Our Top Artists
        </h1>
      </div>
      <div className="flex justify-center">
        <Carousel
          className="w-full max-w-sm md:max-w-lg"
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="-ml-1">
            {TopArtistsData.map((topArtist, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Link href={"#"}>
                    <Card className="bg bg-secondary border-none">
                      <CardContent className="flex items-center justify-center p-4">
                        <span className="text-2xl font-semibold">
                          <Image
                            src={topArtist.image}
                            alt={topArtist.username}
                            className="w-14 h-14 rounded-full"
                          />
                          <p className="text-sm font-semibold">
                            {topArtist.username}
                          </p>
                        </span>
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default TopArtists;
