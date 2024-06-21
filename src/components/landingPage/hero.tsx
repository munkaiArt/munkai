import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import Link from "next/link";

function Hero() {
  const [imageIndex, setImageIndex] = useState(0);

  const backgroundImages = [
    require("../../../public/images/img1.png").default.src,
    require("../../../public/images/img2.png").default.src,
    require("../../../public/images/img3.png").default.src,
    require("../../../public/images/imag4.png").default.src,
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      setImageIndex((prev) => (prev === 3 ? 0 : prev + 1));
    }, 10000);

    return () => clearTimeout(timeout);
  }, [imageIndex]);

  return (
    <section
      className="relative bg-cover bg-center h-screen md:px-6 flex items-center justify-center transition-all duration-1000"
      style={{
        height: "85vh",
        backgroundImage: `linear-gradient(rgba(0,0,0,0.60), rgba(0,0,0,0.60)), url(${backgroundImages[imageIndex]})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      <div className="text-center w-full max-w-screen-lg mx-auto">
        <h1 className="text-4xl md:text-5xl uppercase text-[#DAEAF7]">
          Discover Rare Digital literature & Collect NFTs
        </h1>
        <p className="px-4 mt-4  text-white text-lg max-w-2xl mx-auto">
          Munkai is a Read-to-Earn platform on the blockchain, empowering
          creators and fans with a free market for everyone.
        </p>
        <Button className="font-semibold mt-4" size={"lg"}>
          <Link href={"/signUp"}>Get Started</Link>
        </Button>
      </div>
    </section>
  );
}

export default Hero;
