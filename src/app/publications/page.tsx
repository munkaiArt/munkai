"use client";

import React, { FC, useState } from "react";
import BookCard from "@/components/cards/BookCard";
import { books } from "@/constants/mockData";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export interface Option {
  value: string;
  label: string;
}

const publications = [
  { label: "Comics", value: "1" },
  { label: "Books", value: "2" },
  { label: "Poems", value: "3" },
  { label: "Articles", value: "4" },
  { label: "Blogs", value: "5" },
];

const status = [
  { label: "New", value: "1" },
  { label: "Trending", value: "2" },
  { label: "Top Artists", value: "3" },
];

const alphabetical = [
  { label: "Ascending", value: "1" },
  { label: "Descending", value: "2" },
];

const Publications: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handlePublicationChange = () => {
    // logic here
  };

  return (
    <main className="p-4 md:p-8">
      <h1 className="text-2xl text-center font-bold mb-4 md:mb-10">
        EXPLORE PUBLICATIONS
      </h1>
      <div className="md:hidden flex justify-between mb-4">
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-x-2 mb-8 relative">
        <div
          className={`absolute flex flex-col w-3/4 md:w-1/4 bg-secondary rounded-md md:bg-transparent md:sticky self-start p-4 md:p-0 space-y-4 left-0 top-1 md:top-0 ${
            menuOpen ? "block" : "hidden md:block"
          }`}
        >
          <h3 className="font-semibold mb-4">Filter your publications</h3>
          <div className="mb-4">
            <h4 className="font-semibold my-2 text-sm">Alphabetically</h4>
            {alphabetical.map((publication) => (
              <div
                key={publication.value}
                className="flex items-center space-x-2"
              >
                <Checkbox />
                <label>{publication.label}</label>
              </div>
            ))}
          </div>

          <div className="mb-4">
            <h4 className="font-semibold my-2 text-sm">By Status</h4>
            {status.map((publication) => (
              <div
                key={publication.value}
                className="flex items-center space-x-2"
              >
                <Checkbox />
                <label>{publication.label}</label>
              </div>
            ))}
          </div>

          <div>
            <h4 className="font-semibold my-2 text-sm">By Literature</h4>
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
