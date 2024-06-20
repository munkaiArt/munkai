"use client";
import { useState, useEffect } from "react";
import Connect from "../../../public/vectors/connect.svg";
import Fund from "../../../public/vectors/fund.svg";
import Explore from "../../../public/vectors/explore.svg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Image from "next/image";

const Started = () => {
  const [viewportWidth, setViewportWidth] = useState(0);

  useEffect(() => {
    setViewportWidth(window.innerWidth);
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const carouselItems = [
    {
      img: Fund,
      text: "Create Profile - Connect Wallet",
    },
    {
      img: Connect,
      text: "Fund Wallet",
    },
    {
      img: Explore,
      text: "Explore Publications",
    },
  ];

  return (
    <section className="mt-20 px-6">
      <div className="flex justify-center items-center">
        <h1 className="text-center font-bold mb-8">GETTING STARTED</h1>
      </div>

      {viewportWidth < 768 ? (
        <div className="container max-w-sm">
          <Carousel>
            <CarouselContent className="flex">
              {carouselItems.map((item, index) => (
                <CarouselItem key={index} className="mx-4 flex-shrink-0">
                  <div className="flex flex-col items-center">
                    <Image
                      src={item.img}
                      alt="get_started"
                      className="h-56 w-56 object-cover bg-[#e1f5fa]"
                    />
                    <div className="w-56 bg-secondary text-center text-sm p-2">
                      <h6 className="font-roboto">{item.text}</h6>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      ) : (
        <div className="flex justify-center items-center gap-x-6">
          {carouselItems.map((item, index) => (
            <div key={index} className="mx-8 flex-shrink-0">
              <div className="flex flex-col items-center">
                <Image
                  src={item.img}
                  alt="get_started"
                  className="h-56 w-56 object-cover bg-[#e1f5fa]"
                />
                <div className="w-56 bg-secondary text-center text-sm p-2">
                  <h6 className="font-semibold">{item.text}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Started;
