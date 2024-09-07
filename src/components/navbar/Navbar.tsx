import { Link } from "react-router-dom";
import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  // const handleDropdown = () => {
  //   setIsDropdownOpen(!isDropdownOpen);
  // };

  return (
    <div className="w-full min-h-[90px] flex justify-between items-center  sticky top-0 z-10 text-blue-600 bg-white">
      {/* Desktop Navigation */}

      <h1>Enfedam Academy</h1>
      <ul className="hidden sm:flex px-4 font-poppins space-x-8">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about" className="font-poppins">About Us</Link>
        </li>
        {/* Sections dropdown */}

       
         <li className="relative group">
          <Link to="#" className="focus:outline-none">
            Sections
          </Link>

          {/* Dropdown menu */}
          <ul className="absolute left-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg py-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 invisible group-hover:visible">
            <li className="hover:bg-gray-100 px-4 py-2">
              <Link to="/creche">Creche</Link>
            </li>
            <li className="hover:bg-gray-100 px-4 py-2">
              <Link to="/nursery">Nursery</Link>
            </li>
            <li className="hover:bg-gray-100 px-4 py-2">
              <Link to="/primary">Primary</Link>
            </li>
            <li className="hover:bg-gray-100 px-4 py-2">
              <Link to="/secondary">Secondary</Link>
            </li>
          </ul>
        </li>
  
        <li>
          <Link to="/news">News & Events</Link>
        </li>
        <li>
          <Link to="/gallery"> Gallery</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      {/* Social Media Icons */}
      <div className="flex space-x-4 cursor-pointer">
        <FaFacebookF />
        <FaInstagram />
        <FaLinkedinIn />
        <FaTwitter />
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="sm:hidden z-10" onClick={handleNav}>
        {nav ? (
          <FaTimes size={20} className="mr-4 cursor-pointer" />
        ) : (
          <FaBars size={20} className="mr-4 cursor-pointer" />
        )}
      </div>

      {/* Mobile Navigation */}
      <div
        className={
          nav
            ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/90 text-gray-300 px-4 py-7 flex flex-col items-center ease-in duration-300"
            : "fixed left-[-100%] top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col items-center ease-in duration-300"
        }
      >
        <ul className="w-full text-center space-y-8">
          <li className="text-2xl">
            <Link onClick={handleNav} to="/">
              Home
            </Link>
          </li>
          <li className="text-2xl">
            <Link onClick={handleNav} to="/about">
              About Us
            </Link>
          </li>
          <li className="text-2xl">
            <Link onClick={handleNav} to="/sections">
              Sections
            </Link>
          </li>
          <li className="text-2xl">
            <Link onClick={handleNav} to="/contact">
              Contact
            </Link>
          </li>

          <li className="text-2xl">
            <Link onClick={handleNav} to="/news">
              News&Events
            </Link>
          </li>
          <li className="text-2xl">
            <Link onClick={handleNav} to="/gallery">
              Gallery
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
