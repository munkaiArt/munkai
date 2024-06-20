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
    <div className="mt-28">
      <div className="flex justify-center items-center">
        <div className="block">
          <h1 className="text-center font-bold mb-8">GETTING STARTED</h1>

          {viewportWidth < 768 ? (
            <Carousel className="relative">
              <CarouselContent className="flex">
                {carouselItems.map((item, index) => (
                  <CarouselItem key={index} className="mx-8">
                    <Image
                      src={item.img}
                      alt="get_started"
                      className="h-56 w-56 object-cover bg-[#e1f5fa]"
                    />
                    <div className="whitespace-nowrap bg-secondary text-center text-sm p-2">
                      <h6 className="font-roboto">{item.text}</h6>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          ) : (
            <div className="flex justify-between items-center">
              {carouselItems.map((item, index) => (
                <div key={index} className="mx-8">
                  <Image
                    src={item.img}
                    alt="get_started"
                    className="h-56 w-56 object-cover bg-[#e1f5fa]"
                  />
                  <div className="whitespace-nowrap bg-secondary text-center text-sm p-2">
                    <h6 className="font-semibold">{item.text}</h6>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Started;
