import React, { useState } from 'react';
import logo from '../assets/img/logo.svg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent p-4 px-5 md:px-20 z-20" style={{maxWidth: '1440px'}}>
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white text-2xl font-bold">
          <img className='w-40' src={logo} alt="Logo" />
        </div>

        {/* Hamburger Button (hanya muncul di perangkat mobile) */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-blue-300 focus:outline-none"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Menu (hanya muncul di perangkat desktop) */}
        <ul
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } lg:flex lg:space-x-10 text-white mt-4 lg:mt-0`}
        >
          <li>
            <a href="#" className="hover:text-blue-300">
              Projects
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-300">
              Estimasi
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-300">
              Partner
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-300">
              About Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;


