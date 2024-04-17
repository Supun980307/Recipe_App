"use client";

import React, { useState } from "react";
import Image from "next/image";
import Logo from "../public/logo.png";
import Link from "next/link";
import ButtonRed from "./Button/ButtonRed";
import { IoIosArrowDown } from "react-icons/io";
import ButtonBlue from "./Button/ButtonBlue";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = () => {
    setIsOpen(false);
  };
  return (
    <div className="bg-blue-900">
      <div className="py-1 sm:py-4 w-full">
        <div className="flex justify-between items-center mx-4">
          <div className="w-24 sm:w-32 h-12 flex items-center">
            <Image src={Logo} alt="Logo" className="h-16" />
          </div>
          <div className="flex gap-6 text-white">
            <Link className="relative hover:text-red-300" href="/">
              Home
            </Link>
            <div className="relative group">
              <Link href="#" passHref>
                <p
                  className="flex cursor-pointer items-center gap-2 group-hover:text-red-300"
                  onClick={handleToggleMenu}
                >
                  <span>Recipe</span>
                  <IoIosArrowDown
                    className={`transition-all ${
                      isOpen ? "rotate-0" : "rotate-180"
                    } group-hover:rotate-0`}
                  />
                </p>
              </Link>
              {isOpen && (
                <div className="absolute top-full right-0 w-auto rounded-lg bg-slate-100 flex-col gap-1 p-3 shadow-md group z-50">
                  <Link href="#">
                    <Link
                      href="#"
                      id="link"
                      className="flex items-center cursor-pointer py-1 pl-6 pr-8 text-black hover:text-blue-500"
                      onClick={handleMenuItemClick}
                    >
                      <span className="whitespace-nowrap pl-3">Breakfast</span>
                    </Link>
                    <Link
                      href="#"
                      id="link"
                      className="flex items-center cursor-pointer py-1 pl-6 pr-8 text-black hover:text-blue-500"
                      onClick={handleMenuItemClick}
                    >
                      <span className="whitespace-nowrap pl-3">Lunch</span>
                    </Link>
                    <Link
                      href="#"
                      id="link"
                      className="flex items-center cursor-pointer py-1 pl-6 pr-8 text-black hover:text-blue-500"
                      onClick={handleMenuItemClick}
                    >
                      <span className="whitespace-nowrap pl-3">Dinner</span>
                    </Link>
                    <Link
                      href="#"
                      id="link"
                      className="flex items-center cursor-pointer py-1 pl-6 pr-8 text-black hover:text-blue-500"
                      onClick={handleMenuItemClick}
                    >
                      <span className="whitespace-nowrap pl-3">Dessert</span>
                    </Link>
                    <Link
                      href="#"
                      id="link"
                      className="flex items-center cursor-pointer py-1 pl-6 pr-8 text-black hover:text-blue-500"
                      onClick={handleMenuItemClick}
                    >
                      <span className="whitespace-nowrap pl-3">Drink</span>
                    </Link>
                    <Link
                      href="#"
                      id="link"
                      className="flex items-center cursor-pointer py-1 pl-6 pr-8 text-black hover:text-blue-500"
                      onClick={handleMenuItemClick}
                    >
                      <span className="whitespace-nowrap pl-3">Seafood</span>
                    </Link>
                    <Link
                      href="#"
                      id="link"
                      className="flex items-center cursor-pointer py-1 pl-6 pr-8 text-black hover:text-blue-500"
                      onClick={handleMenuItemClick}
                    >
                      <span className="whitespace-nowrap pl-3">Meet</span>
                    </Link>
                    <Link
                      href="#"
                      id="link"
                      className="flex items-center cursor-pointer py-1 pl-6 pr-8 text-black hover:text-blue-500"
                      onClick={handleMenuItemClick}
                    >
                      <span className="whitespace-nowrap pl-3">Cake</span>
                    </Link>
                    <Link
                      href="#"
                      id="link"
                      className=" flex items-center cursor-pointer py-1 pl-6 pr-8 text-black hover:text-blue-500"
                      onClick={handleMenuItemClick}
                    >
                      <span className="whitespace-nowrap pl-3">Other</span>
                    </Link>
                  </Link>
                </div>
              )}
            </div>
            <Link className="relative hover:text-red-300" href="/add">
              Add
            </Link>
          </div>
          <div className="flex gap-4">
            <Link href="/signin">
              <ButtonBlue text="Sign In" />
            </Link>
            <Link href="/signup">
              <ButtonBlue text="Sign Up" />
            </Link>
            <Link href="#">
              <ButtonRed text="Logout" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
