"use client";

import React, { FC } from "react";
import BookCard from "@/components/cards/BookCard";
import { books } from "@/constants/mockData";
import Link from "next/link";
import MultiSelectDropdown from "@/components/ui/MultiSelectDropdown";
import { Checkbox } from "@/components/ui/checkbox";

export interface Option {
  value: string;
  label: string;
}

const publications = [
  { label: "Comics", value: "1" },
  { label: "Books", value: "2" },
  { label: "Peoms", value: "3" },
  { label: "Articles", value: "4" },
  { label: "Blogs", value: "5" },
];

const Publications: FC = () => {
  const handlePublicationChange = () => {
    // logic here
  };

  return (
    <main className="p-8">
      <h1 className="text-2xl text-center font-bold mb-4 md:mb-10">
        EXPLORE PUBLICATIONS
      </h1>
      <div className="flex justify-center gap-x-2 mb-8">
        <div className="flex flex-col w-1/4 sticky top-8 self-start">
          <h3 className="font-semibold mb-4">Filter your publications</h3>
          {/* <MultiSelectDropdown
            label="Filter by..."
            multiValue={true}
            options={publications}
            onChange={handlePublicationChange}
            classname="border-none"
          /> */}
          {publications.map((publication) => (
            <div
              key={publication.value}
              className="flex items-center space-x-2"
            >
              <Checkbox />
              <label>{publication.label}</label>
            </div>
          ))}
        </div>
        <ul className="flex flex-row flex-wrap items-center justify-center flex-grow overflow-y-auto custom-scrollbar h-[80vh]">
          {books.map((book) => (
            <li key={book.id}>
              <Link href={`/publications/${book.id}`}>
                <BookCard title={book.title} coverImage={book.image} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Publications;
