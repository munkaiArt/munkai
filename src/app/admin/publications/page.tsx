"use client";

import { FC } from "react";
import BookCard from "@/components/cards/BookCard";
import { books } from "@/constants/mockData";
import Link from "next/link";

const AllPubs: FC = () => {
  return (
    <main className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-4">ALL PUBLICATIONS</h1>
        <ul className="flex flex-row flex-wrap items-center justify-center">
          {books.map((book) => (
            <li key={book.id}>
              <Link href={`/book/${book.id}`}>
                <BookCard
                  title={book.title}
                  coverImage={book.image}
                  description={book.description}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default AllPubs;
