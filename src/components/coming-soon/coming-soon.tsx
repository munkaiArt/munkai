import React from "react";
import Image from "next/image";
import comingSoonImage from "../../../public/images/munk.png";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

function ComingSoon() {
  return (
    <Card className="flex flex-col items-center justify-center p-6 bg-secondary border-none rounded-md max-w-6xl mx-auto">
      <div className="">
        <Image
          src={comingSoonImage}
          alt="Coming Soon"
          className="w-64 h-64 object-cover"
        />
      </div>
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-2">Coming Soon</h1>
        <p className="mb-4">
          We're working hard to bring you something amazing! Stay tuned for
          updates.
        </p>
      </div>
    </Card>
  );
}

export default ComingSoon;
