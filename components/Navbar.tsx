"use client"

import React, { useState } from "react";

import { redirect } from "next/navigation";
import { HomeIcon, Menu, Rocket } from "lucide-react";
import { Button } from "./ui/button";
import { ThemeToggle } from "./theme-toggle";
import Link from "next/link";
// import { HamburgerMenuIcon } from "@radix-ui/react-icons";

const Navbar = () => {
  // const {userId} = auth();

  // if(!userId) {
  //   redirect('/sign-in')
  // };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const paths = [
    { name: "Home", path: "/", icon: <HomeIcon size={24} /> },
    { name: "Templates", path: "/templates", icon: <HomeIcon size={24} /> },
    { name: "Contact", path: "/contact", icon: <HomeIcon size={24} /> },
  ];

  return (
    <div className="border-b ">
      <div className=" mx-4 flex h-16 items-center px-4">
        <Rocket size={32} className="text-rose-600" />

        <Button variant="ghost"  className="md:hidden ml-auto" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <Menu size={24} />
        </Button>
        <div
          
          className={`  ${isMenuOpen ? 'flex' : 'hidden'} hidden flex-col md:flex-row md:flex ml-auto items-center space-x-0 md:space-x-4 bg-gray-100 rounded-full px-5 py-2 md:bg-transparent`}
        >
          {paths.map((path, index) => (
            <div key={index} className="cursor-pointer">
              <Link href={path.path} className="text-lg font-sans font-semibold">{path.name}</Link>
            </div>
          ))}
        </div>
        <div className="hidden md:block ml-auto">
          <div className="flex gap-3">
          <Button>Get Started</Button>
          <ThemeToggle />

          </div>
          {/* button goes here */}
        </div>
      </div>
      {/* mobile menu */}
      {isMenuOpen && (
        
        <div className="flex flex-col md:hidden bg-gray-100 dark:bg-gray-700 border px-5 py-2 space-y-2">
          {paths.map((path, index) => (
            <div key={index} className="cursor-pointer flex items-center border-b p-2 mb-2 hover:bg-black transition ease-in-out hover:text-white dark:hover:bg-white dark:hover:text-black rounded-md">
              <p className="text-lg font-sans font-semibold mr-4  ">{path.name}</p>
              {path.icon}
            </div>
          ))}
          <ThemeToggle />
        </div>
      
      )}
    </div>
  );
};

export default Navbar;
