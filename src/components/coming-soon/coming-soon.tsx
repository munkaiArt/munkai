import React from "react";
import Image from "next/image";
import comingSoonImage from "../../../public/images/profile-picture.png";

function ComingSoon() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 p-6">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-md w-full">
        <div className="relative h-48">
          <Image
            src={comingSoonImage}
            alt="Coming Soon"
            layout="fill"
            objectFit="cover"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6 text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Coming Soon</h1>
          <p className="text-gray-600 mb-4">
            We're working hard to bring you something amazing! Stay tuned for
            updates.
          </p>
          <button className="px-4 py-2 bg-purple-500 text-white rounded-full shadow-md hover:bg-purple-600 transition-colors duration-300">
            Notify Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default ComingSoon;
