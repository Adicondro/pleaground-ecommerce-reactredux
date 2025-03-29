import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { IoCart, IoHeart } from "react-icons/io5";
import { Separator } from "./ui/separator";

const Header = () => {
  return (
    <header className="h-16 border-b flex items-center justify-between px-8">
      {/* BRAND */}
      <p className="text-2xl font-bold hover:cursor-pointer">Pleaground</p>

      {/* Search Bar */}
      <Input className="max-w-[600px]" placeholder="Search Products.."></Input>

      {/* Buttons */}
      <div className="flex space-x-4 h-5 items-center">
        <div className="flex space-x-2">
          <Button variant={"ghost"} size={"icon"}>
            <IoCart className="h-6 w-6" />
          </Button>
          <Button variant={"ghost"} size={"icon"}>
            <IoHeart className="h-6 w-6" />
          </Button>
        </div>

        <Separator orientation="vertical" className={"h-full"} />

        <div className="flex space-x-2">
          <Button>Sign In</Button>
          <Button variant="outline">Sign Up</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
