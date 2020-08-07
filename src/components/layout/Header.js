import React from "react";
import { Link } from "react-router-dom";

import Logo from "./Logo";

const Header = () => {
  return (
    <nav className="bg-gray-900 p-2 w-full z-10 top-0">
      <div className="w-11/12 sm:w-9/12 md:w-11/12 lg:w-4/5 mx-auto flex items-center justify-between flex-wrap">
        <div className="flex items-center content-center justify-center flex-shrink-0 text-white mr-6">
          <Link to="/">
            <Logo className="relative" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
