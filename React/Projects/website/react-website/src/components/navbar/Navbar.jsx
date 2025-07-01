import React from "react";
import reactLogo from "../../assets/react.svg";
import { FiSearch, FiSun, FiGlobe, FiGithub } from "react-icons/fi";
import "./Navbar.css";
import { RiTranslateAi2 } from "react-icons/ri";
import { IoLogoGithub } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-gray-400 text-[18px]">
      {/* React logo */}

      <div className="flex items-center gap-2">
        <img
          src={reactLogo}
          alt="React Logo"
          className="h-9 w-9 cursor-pointer"
        />
        <span className="text-[16px] cursor-pointer">v19.1</span>
      </div>

      {/* Search Bar */}

      <div className="flex w-3xl items-center gap-2 bg-gray-700 px-2 py-1 rounded">
        <FiSearch />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent text-gray-300 outline-none w-32"
        />
      </div>

      {/* List Items */}

      <div className="flex gap-4 items-center">
        <a href="#" className="hover:underline">
          Learn
        </a>
        <a href="#" className="hover:underline">
          Reference
        </a>
        <a href="#" className="hover:underline">
          Community
        </a>
        <a href="#" className="hover:underline">
          Blog
        </a>

        {/* Recat Icons */}

        <FiSun className="navIcons cursor-pointer hover:text-cyan-400" />
        <RiTranslateAi2 className="navIcons cursor-pointer hover:text-cyan-500" />
        <IoLogoGithub className="navIcons cursor-pointer hover:text-cyan-400" />
      </div>
    </nav>
  );
};

export default Navbar;
