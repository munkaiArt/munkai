"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faWallet,
  faSun,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import MunkaiLogoDark from "../../../public/images/monkai-logo-white.png";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Placeholder functions for icon actions (e.g., toggle theme, open notifications, open wallet)
  const handleToggleTheme = () => {
    // Implement theme toggle logic
  };

  const handleOpenNotifications = () => {
    // Implement notifications logic
  };

  const handleConnectWallet = () => {
    // Implement wallet logic
  };

  return (
    <nav className="shadow-md bg-secondary py-2 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link href="/">
          <Image
            src={MunkaiLogoDark}
            alt="Logo"
            className="h-6 w-24 md:h-8 md:w-32 cursor-pointer"
          />
        </Link>

        <div className="hidden md:flex space-x-6 ">
          <Link
            href="/publications"
            className="hover:text-primary transition-all duration-500"
          >
            Publications
          </Link>
          <Link
            href="/chapters"
            className="hover:text-primary transition-all duration-500"
          >
            Chapters
          </Link>
          <Link
            href="/nft-marketplace"
            className="hover:text-primary transition-all duration-500"
          >
            Nft Marketplace
          </Link>
        </div>

        <div className="hidden md:flex">
          <Button
            variant={"transparent"}
            size={"icon"}
            className="text-foreground hover:rounded-full"
            onClick={handleToggleTheme}
          >
            <FontAwesomeIcon icon={faMoon} className="h-5 w-5" />
          </Button>

          <Button
            variant={"transparent"}
            size={"icon"}
            className="text-foreground hover:rounded-full"
            onClick={handleOpenNotifications}
          >
            <FontAwesomeIcon icon={faBell} className="h-5 w-5" />
          </Button>

          <Button
            variant={"transparent"}
            size={"icon"}
            className="text-foreground hover:rounded-full"
            onClick={handleConnectWallet}
          >
            <FontAwesomeIcon icon={faWallet} className="h-5 w-5" />
          </Button>
        </div>

        {/* Hamburger menu for mobile */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
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
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute right-0 top-13 w-48 bg-secondary shadow-lg rounded-md transition-all duration-700 md:hidden">
          <div className="flex flex-col items-start space-y-2 p-4">
            <Link href="/publications" passHref>
              <span className="hover:text-primary transition-all duration-500">
                Publications
              </span>
            </Link>
            <Link href="/chapters" passHref>
              <span className="hover:text-primary transition-all duration-500">
                Chapters
              </span>
            </Link>
            <Link href="/nft-marketplace" passHref>
              <span className="hover:text-primary transition-all duration-500">
                NFT Marketplace
              </span>
            </Link>
            <hr className="my-2 w-full border-t border-gray-300" />
            <div className="flex">
              <Button
                variant={"transparent"}
                size={"icon"}
                className="text-foreground hover:rounded-full"
                onClick={handleToggleTheme}
              >
                <FontAwesomeIcon icon={faMoon} className="h-5 w-5" />
              </Button>

              <Button
                variant={"transparent"}
                size={"icon"}
                className="text-foreground hover:rounded-full"
                onClick={handleOpenNotifications}
              >
                <FontAwesomeIcon icon={faBell} className="h-5 w-5" />
              </Button>

              <Button
                variant={"transparent"}
                size={"icon"}
                className="text-foreground hover:rounded-full"
                onClick={handleConnectWallet}
              >
                <FontAwesomeIcon icon={faWallet} className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
