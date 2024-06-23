import React, { FC } from "react";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

interface BookCardProps {
  title: string;
  coverImage: string;
  onClick?: () => void;
}

const ChapterCard: FC<BookCardProps> = ({ title, coverImage, onClick }) => {
  return (
    <div
      className="w-48 p-4 m-3 rounded-md bg-secondary shadow-md cursor-pointer group"
      onClick={onClick}
    >
      <img
        src={coverImage}
        alt={title}
        className="w-full aspect-square rounded-md transition-all duration-1000 group-hover:scale-105"
      />
      <div className="mt-4">
        <h3 className="text-lg font-bold text-primary">{title}</h3>
        <p className="text-sm mt-1">Chapter 2</p>
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center justify-center gap-x-1">
            <FontAwesomeIcon icon={faEye} className="h-3.5 w-3.5" />
            <p className="text-xs">32</p>
          </div>
          <Link
            href={"#"}
            className="text-sm hover:text-primary transition-all duration-500"
          >
            halfdobis
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChapterCard;
