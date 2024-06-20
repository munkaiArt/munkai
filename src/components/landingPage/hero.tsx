import { useState, useEffect } from "react";
import Image1 from "../../../public/images/img1.png";
import Image2 from "../../../public/images/img2.png";
import Image3 from "../../../public/images/img3.png";
import Image4 from "../../../public/images/imag4.png";
import { Button } from "../ui/button";
import Link from "next/link";

function Hero() {
  const [imageIndex, setImageIndex] = useState(0);
  const backgroundImages = [Image4, Image2, Image3, Image1];

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
        <h1 className="text-4xl md:text-5xl uppercase">
          Discover Rare Digital literature & Collect NFTs
        </h1>
        <p className="px-4 mt-4">
          Munkai is a Read-to-Earn platform on the blockchain, empowering
          creators and fans with a free market for everyone.
        </p>
        <Button className="font-semibold mt-4" size={"lg"}>
          <Link href={"/dashboard/profile"}>Open App</Link>
        </Button>
      </div>
    </section>
  );
}

export default Hero;
