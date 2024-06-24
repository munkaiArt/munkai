import React, { FC } from "react";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";

interface BookCardProps {
  title: string;
  coverImage: string;
  onClick?: () => void;
}

const BookCard: FC<BookCardProps> = ({ title, coverImage, onClick }) => {
  return (
    <Card
      className="w-48 p-4 m-2 rounded-md bg-secondary shadow-md cursor-pointer group"
      onClick={onClick}
    >
      <img
        src={coverImage}
        alt={title}
        className="w-full aspect-square rounded-md transition-all duration-1000 group-hover:scale-105"
      />
      <CardContent className="mt-4 p-0">
        <h3 className="text-lg font-bold text-primary">{title}</h3>
        <div className="flex items-center justify-between mt-3">
          <p className="text-sm">0 chapters</p>
          <FontAwesomeIcon icon={faBookmark} className="h-3.5 w-3.5" />
        </div>
      </CardContent>
    </Card>
  );
};

export default BookCard;
