import { useEffect, useState } from "react";
import MunkaiCard from "../cards/munkaiCard";
import Arrow from "../../../public/vectors/arrow.svg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"; // Adjust this import based on the actual path
import Link from "next/link";
import Image from "next/image";

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
    <section className="max-w-[880px] mx-auto mt-28">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-lg font-bold">MUNKAI ART</h1>

        <Link href={"/"} className="flex items-center text-sm font-bold">
          <p className="flex items-center">
            View More
            <Image src={Arrow} alt="arrow" className="ml-2 w-4" />
          </p>
        </Link>
      </div>

      {viewportWidth < 768 ? (
        <div className="flex flex-col items-center">
          <Carousel className="relative" orientation="horizontal">
            <CarouselContent className="flex">
              {comics.slice(0, 4).map((comic) => (
                <CarouselItem key={comic.id} className="pl-4">
                  <MunkaiCard {...comic} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute -left-12 top-1/2 transform -translate-y-1/2" />
            <CarouselNext className="absolute -right-12 top-1/2 transform -translate-y-1/2" />
          </Carousel>
        </div>
      ) : (
        <div className="flex justify-center items-center gap-5">
          {comics.slice(0, 4).map((comic) => (
            <MunkaiCard key={comic.id} {...comic} />
          ))}
        </div>
      )}
    </section>
  );
};

export default MunkaiPubs;
