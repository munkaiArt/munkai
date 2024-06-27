import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function ChapterDetails() {
  const ChapterImage =
    "https://marketplace.canva.com/EAFXKFIDad4/1/0/1003w/canva-brown-mystery-novel-book-cover-cSu1pdo96zA.jpg";

  return (
    <div className="flex items-center justify-center md:h-screen mt-10 md:mt-0">
      <Card className="bg-transparent md:bg-secondary shadow-none border-none flex flex-col md:flex-row items-center justify-center md:gap-x-10 max-w-3xl mx-auto p-12 md:p-8">
        <div className="w-full md:w-1/3 flex justify-center">
          <Image
            src={ChapterImage}
            alt="Chapter Image"
            className="rounded-md shadow-md shadow-primary w-48 h-72 object-cover"
            width={48}
            height={72}
          />
        </div>
        <div className="w-full md:w-2/3 text-center md:text-start mt-8 md:mt-0">
          <h2 className="text-xl md:text-2xl font-bold">Run</h2>
          <p className="text-sm md:text-base">CHAPTER 1</p>
          <Link href="#" className="text-primary font-semibold">
            halfdobis
          </Link>
          <p className="mt-3 w-full md:w-3/4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis semper
            risus ac dolor condimentum, ut rhoncus.
          </p>
          <div className="flex items-center justify-center md:justify-start mt-6 space-x-3">
            <span className="bg-card px-4 py-2 rounded-md">20 U$DT</span>
            <Button>Collect</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default ChapterDetails;
