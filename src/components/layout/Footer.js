import React from "react";

export default function Footer() {
  return (
    <footer className="p-5 text-sm text-gray-600 text-center items-center w-full mt-4">
      <a
        href="https://www.themoviedb.org"
        target="_new"
        className="text-teal-600 font-semibold flex justify-center items-center w-full"
      >
        <p>
          This product uses the TMDb API but is not endorsed or certified by
        </p>
        <img
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
          alt="The Movie DB"
        />
      </a>
    </footer>
  );
}