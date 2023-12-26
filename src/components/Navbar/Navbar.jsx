import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="flex justify-between items-center bg-slate-500 p-4 container mx-auto">
        <div className="logo">Logo</div>
        <div className="lg:block hidden">
          <ul className="flex space-x-8">
            <li>
              <Link to="/" className="text-[#2f234f] font-normal hover:text-[#574c4c] transition-colors duration-300">
                Hero
              </Link>
            </li>
            <li>
              <Link to="/blogs" className="text-[#2f234f] font-normal hover:text-[#574c4c] transition-colors duration-300">
                Blogs
              </Link>
            </li>
            <li>
              <Link to="/note" className="text-[#2f234f] font-normal hover:text-[#574c4c] transition-colors duration-300">
                Note
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-[#2f234f] font-normal hover:text-[#574c4c] transition-colors duration-300">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-[#2f234f] font-normal hover:text-[#574c4c]  transition-colors duration-300">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="lg:hidden block">
          <button
            onClick={toggleMenu}
            className="menu-icon focus:outline-none"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
        <div
          className={`lg:hidden absolute top-16 right-0 bg-fef7e5 w-0 h-screen transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "w-48" : ""
          }`}
        >
          <ul className="flex flex-col p-4">
            <li className="my-2">
              <Link
                to="/"
                className="text-2f234f font-normal hover:text-574c4c transition-colors duration-300"
              >
                Hero
              </Link>
            </li>
            <li className="my-2">
              <Link
                to="/blogs"
                className="text-2f234f font-normal hover:text-574c4c transition-colors duration-300"
              >
                Blogs
              </Link>
            </li>
            <li className="my-2">
              <Link
                to="/note"
                className="text-2f234f font-normal hover:text-574c4c transition-colors duration-300"
              >
                Note
              </Link>
            </li>
            <li className="my-2">
              <Link
                to="/about"
                className="text-2f234f font-normal hover:text-574c4c transition-colors duration-300"
              >
                About
              </Link>
            </li>
            <li className="my-2">
              <Link
                to="/contact"
                className="text-2f234f font-normal hover:text-574c4c transition-colors duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
