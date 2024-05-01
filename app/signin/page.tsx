"use client";

import React, { useState } from "react";
import { Input } from "@nextui-org/react";
import { EyeFilledIcon } from "../../components/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../../components/EyeSlashFilledIcon";
import Image from "next/image";
import Logo from "../../public/logo.png";
import ButtonBlue from "@components/Button/ButtonBlue";
import { useRouter } from "next/navigation";

const Signin: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  const router = useRouter();

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleSignin = async () => {
    try {
      const response = await fetch("/api/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
      }

      // JSON response
      console.log(response.body);
      const data = await response.json();
      const { token } = data;
      console.log(token);

      localStorage.setItem("token", token);
      //localStorage.clear();

      router.push("/");
    } catch (error: any) {
      console.error("Error logging in:", error.message);
    }
  };

  return (
    <div className="p-4 max-w-2xl mx-auto border-large rounded-xl items-center mt-10">
      <div className="w-24 sm:w-32 h-14 flex items-center mx-auto my-4">
        <Image src={Logo} alt="Logo" className="h-16" />
      </div>
      <div>
        <h1 className="text-3xl mb-6 font-bold text-center">
          Sign In To Your Account
        </h1>
      </div>
      <div className="max-w-2xl mx-auto">
        <Input
          type="email"
          label="Email"
          value={formData.email}
          variant="bordered"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="Enter your email"
        />
        <Input
          label="Password"
          variant="bordered"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          placeholder="Enter your password"
          endContent={
            <button
              className="focus:outline-none"
              type="button"
              onClick={toggleVisibility}
            >
              {isVisible ? (
                <EyeSlashFilledIcon className="text-2xl  text-default-400 pointer-events-none" />
              ) : (
                <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
          type={isVisible ? "text" : "password"}
          className="max-w-2xl mt-4 mb-4"
        />
        <div className="text-center max-w-60 mx-auto">
          <button
            className={`rounded-md px-2 sm:px-4 py-1 text-[15px] md:px-8 md:py-2.5 overflow-hidden group bg-blue-500
    relative text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-400`}
            onClick={handleSignin}
          >
            Sign In
          </button>
        </div>
      </div>
      <div className="text-center mt-4 mb-4">
        Not registered yet?{" "}
        <a
          href="/signup"
          className="text-blue-500 hover:text-blue-600 hover:underline"
        >
          Create an account
        </a>
      </div>
    </div>
  );
};

export default Signin;
