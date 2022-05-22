import React from "react";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="w-full justify-between flex items-center">
          <div className="flex-shrink-0">
            <Link href="/">
              <div className="tracking-wider font-semibold">seanisoverhere</div>
            </Link>
          </div>
          <div className="ml-10 flex items-end space-x-8 font-semibold">
            <Link href="/about">
              <div className="text-sm">About</div>
            </Link>
            <Link href="/work">
              <div className="text-sm">Work</div>
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
