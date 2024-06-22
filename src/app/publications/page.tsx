"use client";

import React, { FC } from "react";
import BookCard from "@/components/cards/BookCard";
import { books } from "@/constants/mockData";
import Link from "next/link";

const Publications: FC = () => {
  return (
    <main className="p-8">
      <h1 className="text-2xl text-center font-bold mb-4">
        EXPLORE PUBLICATIONS
      </h1>
      <div className="flex justify-center gap-x-2 mb-8">
        <div className="flex flex-col w-1/4">
          <h3 className="font-semibold mb-4">Filter your publications</h3>
          <p>select</p>
        </div>
        <ul className="flex flex-row flex-wrap items-center justify-center">
          {books.map((book) => (
            <li key={book.id}>
              <Link href={`/read/${book.id}`}>
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
