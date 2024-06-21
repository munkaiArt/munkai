"use client";
import { useEffect, useState } from "react";
import MunkaiCard from "../cards/munkaiCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const MunkaiPubs: React.FC = () => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Dummy comics data
  const comics = [
    { id: 1, title: "Comic 1", description: "Description 1" },
    { id: 2, title: "Comic 2", description: "Description 2" },
    { id: 3, title: "Comic 3", description: "Description 3" },
    { id: 4, title: "Comic 4", description: "Description 4" },
  ];

  return (
    <section className="mx-auto mt-20 px-6">
      <div className="flex justify-center items-center mb-10">
        <h1 className="heading text-center mt-10 mb-6 text-2xl font-bold">
          Top Publications
        </h1>
      </div>

      {viewportWidth < 768 ? (
        <div className="container max-w-sm">
          <Carousel orientation="horizontal">
            <CarouselContent className="flex">
              {comics.map((comic) => (
                <CarouselItem key={comic.id} className="pl-4">
                  <MunkaiCard {...comic} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      ) : (
        <div className="flex justify-center items-center gap-5">
          {comics.map((comic) => (
            <MunkaiCard key={comic.id} {...comic} />
          ))}
        </div>
      )}
    </section>
  );
};

export default MunkaiPubs;
