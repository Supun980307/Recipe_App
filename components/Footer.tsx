import Image from "next/image";
import React from "react";
import Logo from "../public/logo.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 bottom-0 w-full mt-6">
      <div className="mx-auto w-full max-w-screen-xl p-5 py-6 lg:py-8">
        <div className="md:flex md:justify-between mr-10 flex lg:flex-row flex-col">
          <div className="ml-0 mb-12 lg:ml-10">
            <Image src={Logo} alt="Logo" width={238} height={12} className="w-60 h-32" />

            <div className="text-white sm:w-[400px] mt-0">
              <p>
              Explore thousands of recipes with our user-friendly app! From appetizers to desserts, 
              we've got you covered with step-by-step instructions and handy cooking tips. 
              Save your favorites, create shopping lists, and share your creations.
              </p>
            </div>
          </div>
          
          <div className="gap-8 sm:gap-24 xl:gap-32 flex flex-col md:flex-row">
            <div>
              <h2 className="mb-6 mt-6 text-lg font-semibold uppercase text-white">
                Recipes
              </h2>
              <ul className="text-white font-medium">
                <li className="mb-2">
                  <a href="#" className="hover:underline ">
                    Find a Recipe
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Submit a Recipe
                  </a>
                </li>
                </ul>
            </div>
            <div className="">
              <h2 className="mb-6 mt-6 text-lg font-semibold  uppercase text-white">
                Connect
              </h2>
              <ul className="text-white font-medium w-auto xl:w-56">
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Contact Us
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Facebook
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" border-white mt-10 h-[0.5px] bg-white mx-1 md:mx-10 lg:mx-56 xl:mx-80" />

        <div className="flex gap-4 items-center justify-center text-white mt-3">
          <span>Privacy Policy</span>
           <p>|</p>
          <span>Terms & Conditions</span> 
        </div>
      </div>
    </footer>
  );
}

export default Footer;
