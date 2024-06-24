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
import BookCard from "../cards/BookCard";
import Link from "next/link";
import { Card, CardContent } from "../ui/card";

const TopArtists: React.FC = () => {
  return (
    <section className="mt-20 px-6">
      <div className="flex justify-center items-center mb-10">
        <h1 className="heading text-center mt-10 mb-6 text-2xl font-bold">
          Our Top Artists
        </h1>
      </div>
      <div className="flex justify-center">
        <Carousel className="w-full max-w-sm md:max-w-lg">
          <CarouselContent className="-ml-1">
            {Array.from({ length: 7 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Link href={"#"}>
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-2xl font-semibold">
                          {index + 1}
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
