"use client"

import React, { useState } from "react";

import { redirect } from "next/navigation";
import { HomeIcon, Menu, Rocket } from "lucide-react";
import { Button } from "./ui/button";
// import { HamburgerMenuIcon } from "@radix-ui/react-icons";

const Navbar = () => {
  // const {userId} = auth();

  // if(!userId) {
  //   redirect('/sign-in')
  // };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const paths = [
    { name: "Home", path: "/", icon: <HomeIcon size={24} /> },
    { name: "About", path: "/about", icon: <HomeIcon size={24} /> },
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
              <p className="text-lg font-sans font-semibold">{path.name}</p>
            </div>
          ))}
        </div>
        <div className="hidden md:block ml-auto">
          {/* button goes here */}
          <Button>Get Started</Button>
        </div>
      </div>
      {/* mobile menu */}
      {isMenuOpen && (
        
        <div className="flex flex-col md:hidden bg-gray-100 border px-5 py-2 space-y-2">
          {paths.map((path, index) => (
            <div key={index} className="cursor-pointer flex items-center border-b p-2 mb-2 hover:bg-black transition ease-in-out hover:text-white rounded-md">
              <p className="text-lg font-sans font-semibold mr-4  ">{path.name}</p>
              {path.icon}
            </div>
          ))}
        </div>
      
      )}
    </div>
  );
};

export default Navbar;
