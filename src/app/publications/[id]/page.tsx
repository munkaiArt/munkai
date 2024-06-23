"use client";
import React from "react";
import { useParams } from "next/navigation";
import ChapterCard from "@/components/cards/chapterCard";
import { books } from "@/constants/mockData";
import Link from "next/link";

function PublicationChapters() {
  const { id } = useParams();
  const publications = [id as string];

  if (!publications) {
    return <p>This Publication has no Chapter</p>;
  }

  return (
    <main className="p-8">
      <h1 className="text-2xl text-center font-bold mb-4 md:mb-10">
        PUBLICATIONS CHAPTERS
      </h1>
      <ul className="flex flex-row flex-wrap items-center justify-center flex-grow">
        {books.map((book) => (
          <li key={book.id}>
            <Link href={`/publications/chapter-details/${book.id}`}>
              <ChapterCard title={book.title} coverImage={book.image} />
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default PublicationChapters;
