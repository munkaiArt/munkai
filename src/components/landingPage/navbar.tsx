import React, { useState } from "react";
import MunkaiLogo from "../../../public/images/munkai-logo.png";
import MunkaiLogoDark from "../../../public/images/monkai-logo-white.png";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link href="/">
          <Image src={MunkaiLogo} alt="Logo" className="h-12 w-32" />
        </Link>
        <div className="hidden md:flex space-x-6">
          <Button>
            <Link href="#">Sign Up</Link>
          </Button>
          <Button variant={"outline2"}>
            <Link href="#">Sign In</Link>
          </Button>
        </div>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
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
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <Link href="#started" className="block px-4 py-2">
            Sign Up
          </Link>
          <Link href="#info" className="block px-4 py-2 ">
            Log In
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
