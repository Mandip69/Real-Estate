import { useState } from "react";
import { FiSearch } from "react-icons/fi";

export default function Navbar() {
  const [isPagesOpen, setIsPagesOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between py-4 px-8 shadow-md">
      {/* Logo */}
      <div className="text-2xl font-bold text-green-500">Estate<span className="text-black">Agency</span></div>

      {/* Nav Links */}
      <ul className="flex space-x-6 text-lg font-semibold">
        <li className="relative">
          <a href="/" className="text-green-500 border-b-2 border-green-500">Home</a>
        </li>
        <li><a href="/AboutPage" className="hover:text-green-500">About</a></li>
        <li><a href="/PropertyList" className="hover:text-green-500">Property</a></li>
        <li><a href="BlogPage" className="hover:text-green-500">Blog</a></li>
        {/* <li className="relative">
          <button
            onClick={() => setIsPagesOpen(!isPagesOpen)}
            className="hover:text-green-500 flex items-center"
          >
            Pages
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          {isPagesOpen && (
            <ul className="absolute top-8 left-0 bg-white shadow-md py-2 w-40">
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Page</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Page 2</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Page 3</a></li>
            </ul>
          )}
        </li> */}
        <li><a href="/contact" className="hover:text-green-500">Contact</a></li>
      </ul>

      {/* Search Icon */}
      <button className="bg-green-500 p-3 rounded-sm text-white">
        <FiSearch className="w-5 h-5" />
      </button>
    </nav>
  );
}
