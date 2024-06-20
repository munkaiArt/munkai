import React from "react";
import Image from "next/image";

import Finance from "../../../public/vectors/finance.svg";
import Send from "../../../public/vectors/send.svg";
import Bag from "../../../public/vectors/bag.svg";

const infoData = [
  {
    image: Finance,
    alt: "book",
    title: "Read To Earn (R2E)",
    description:
      "Munkai is the first read-to-earn comic platform on the blockchain. As a reader, you will earn the Munkai token from paying to read comics on the platform thereby becoming a $MUNK holder.",
  },
  {
    image: Send,
    alt: "send",
    title: "Publish To Earn (P2E)",
    description:
      "Artists/creators can upload and publish their comics on the platform and make money from readers when they pay to access and read their work.",
  },
  {
    image: Bag,
    alt: "bag",
    title: "NFT Marketplace",
    description:
      "We are developing an NFT Marketplace where the characters from the comics can be minted and sold as NFTs. Creating a platform that easily onboards artists to join the NFT revolution.",
  },
];

const Info: React.FC = () => {
  return (
    <section className="bg-hover mt-20">
      <div className="container flex justify-center items-center">
        <div className="flex flex-wrap justify-between items-center w-full max-w-screen-xl px-4 md:p-16">
          {infoData.map((info, index) => (
            <div key={index} className="w-full md:w-1/3 p-4">
              <div className="flex justify-center items-center mb-4">
                <Image src={info.image} alt={info.alt} className="w-10 h-10" />
              </div>
              <h6 className="text-center font-bold">{info.title}</h6>
              <p className="text-center text-sm font-normal">
                {info.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Info;
