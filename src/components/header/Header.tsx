"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faWallet,
  faSun,
  faMoon,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import MunkaiLogoDark from "../../../public/images/monkai-logo-white.png";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../ui/dropdown-menu";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Placeholder functions for icon actions (e.g., toggle theme, open notifications, open wallet)
  const handleToggleTheme = () => {
    // Implement theme toggle logic
  };

  const handleOpenNotifications = () => {
    // Implement notifications logic
  };

  const handleOpenWallet = () => {
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

        <div className="hidden md:flex space-x-6">
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
          <DropdownMenu>
            <DropdownMenuTrigger
              className="hover:text-primary transition-all duration-500 outline-none"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <div className="flex items-center">
                App Settings
                <FontAwesomeIcon
                  icon={dropdownOpen ? faChevronUp : faChevronDown}
                  className="ml-1"
                />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-secondary shadow-lg rounded-md">
              <DropdownMenuItem>
                <Link href="/admin/users">Users</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/admin/creators">Creators</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/admin/publications">Publications</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/admin/chapters">Chapters</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/admin/nfts">Nfts</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/admin/admins">Admins</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/admin/settings">Settings</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/admin/reports">Reports</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
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
            onClick={handleOpenWallet}
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
            <hr className="my-2 w-full border-t border-primary" />
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
                onClick={handleOpenWallet}
              >
                <FontAwesomeIcon icon={faWallet} className="h-5 w-5" />
              </Button>
            </div>
            <hr className="my-2 w-full border-t border-primary" />
            <Link href="/admin/users" passHref>
              <span className="hover:text-primary transition-all duration-500">
                Users
              </span>
            </Link>
            <Link href="/admin/creators" passHref>
              <span className="hover:text-primary transition-all duration-500">
                Creators
              </span>
            </Link>
            <Link href="/admin/publications" passHref>
              <span className="hover:text-primary transition-all duration-500">
                Publications
              </span>
            </Link>
            <Link href="/admin/chapters" passHref>
              <span className="hover:text-primary transition-all duration-500">
                Chapters
              </span>
            </Link>
            <Link href="/admin/nfts" passHref>
              <span className="hover:text-primary transition-all duration-500">
                Nfts
              </span>
            </Link>
            <Link href="/admin/admins" passHref>
              <span className="hover:text-primary transition-all duration-500">
                Admins
              </span>
            </Link>
            <Link href="/admin/settings" passHref>
              <span className="hover:text-primary transition-all duration-500">
                Settings
              </span>
            </Link>
            <Link href="/admin/reports" passHref>
              <span className="hover:text-primary transition-all duration-500">
                Reports
              </span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
