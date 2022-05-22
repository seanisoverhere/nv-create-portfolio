import React from "react";
import ThemeToggle from "./ThemeToggle";
import NavLink from "./NavLink";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-24">
        <div className="w-full justify-between flex items-center">
          <div className="flex-shrink-0">
            <Link href="/">
              <div className="tracking-wider font-semibold text-xl cursor-pointer">
                seanisoverhere
              </div>
            </Link>
          </div>
          <div className="ml-10 flex items-end space-x-8 text-sm">
            {/* Create the links to your pages here */}
            <NavLink href="/about">About</NavLink>
            <NavLink href="/work">Work</NavLink>
            {/* End of Navbar */}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;