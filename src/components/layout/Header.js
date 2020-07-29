import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = (props) => {
  const { branding } = props;
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6 fixed w-full z-10 top-0">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link
          className="text-white no-underline hover:text-white hover:no-underline"
          to="/"
        >
          <span className="text-2xl pl-2">
            <i className="em em-grinning"></i> {branding}
          </span>
        </Link>
      </div>

      <div className="block lg:hidden">
        <button
          id="nav-toggle"
          className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div
        className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block pt-6 lg:pt-0"
        id="nav-content"
      >
        <ul className="list-reset lg:flex justify-end flex-1 items-center">
          <li className="mr-3">
            <Link
              className="inline-block py-2 px-4 text-white no-underline"
              to="#"
            >
              Active
            </Link>
          </li>
          <li className="mr-3">
            <Link
              className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
              to="/contact"
            >
              contact
            </Link>
          </li>
          <li className="mr-3">
            <Link
              className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
              to="#"
            >
              link
            </Link>
          </li>
          <li className="mr-3">
            <Link
              className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
              to="/about"
            >
              about
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  branding: "My App",
};

Header.propTypes = {
  branding: PropTypes.string.isRequired,
};

export default Header;