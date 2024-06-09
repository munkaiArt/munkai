import { FC } from "react";

interface BookCardProps {
  title: string;
  description: string;
  coverImage: string;
  onClick?: () => void;
}

const BookCard: FC<BookCardProps> = ({
  title,
  description,
  coverImage,
  onClick,
}) => {
  return (
    <div
      className="w-48 p-4 m-3 rounded-md bg-background shadow-md cursor-pointer hover:scale-105 transition-all duration-1000"
      onClick={onClick}
    >
      <img
        src={coverImage}
        alt={title}
        className="w-full aspect-square rounded-md"
      />
      <div className="mt-4">
        <h3 className="text-lg font-bold text-primary">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export default BookCard;
