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

const TopPublications: React.FC = () => {
  return (
    <section className="mt-20 px-6">
      <div className="flex justify-center items-center mb-10">
        <h1 className="heading text-center mt-10 mb-6 text-2xl font-bold">
          Top Publications
        </h1>
      </div>
      <div className="flex justify-center">
        <Carousel className="w-full max-w-xs md:max-w-2xl">
          <CarouselContent className="-ml-1">
            {books.map((book) => (
              <CarouselItem
                key={book.id}
                className="pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Link href={`/publications/${book.id}`}>
                    <BookCard title={book.title} coverImage={book.image} />
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

export default TopPublications;
