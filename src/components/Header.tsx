import { FC } from "react";
import Link from "next/link";

const Header: FC = () => {
  return (
    <header className="flex justify-between items-center px-4 py-4 border-b border-gray-200">
      <div className="flex items-center">
        <h1 className="mr-8 text-2xl font-bold text-gray-900">MunkaiArt</h1>
        <input
          type="text"
          className="px-4 py-2 rounded-full bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-w-[320px]"
          placeholder="Tell me what you like to read and we will get that ...."
        />
      </div>
      <div className="flex items-center">
        <Link href="/dashboard/profile">
          <img
            src="https://imageio.forbes.com/specials-images/imageserve/6244c655b6ecfb569a31a3ba/John-Cena-performing-his-famous--You-Can-t-See-Me--taunt-/0x0.jpg?format=jpg&crop=1200,675,x0,y0,safe&width=960"
            alt="avatar"
            className="w-10 h-10 rounded-full"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
