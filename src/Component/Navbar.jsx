import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { logo } from "../assets/img/index";

const menuNavbar = [
  {
    title: "Project",
    href: "/project",
  },
  {
    title: "Estimasi",
    href: "/estimasi",
  },
  {
    title: "Kerjasama",
    href: "#",
  },
  {
    title: "Tentang Kami",
    href: "/tentang-kami",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isGoldNavbar, setIsGoldNavbar] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 60) {
        setIsGoldNavbar(true);
      } else {
        setIsGoldNavbar(false);
      }
    };

    // Tambahkan event listener untuk scroll
    const projectPathRegex = /^\/project\/\d+$/;
    if (
      location.pathname === "/" ||
      projectPathRegex.test(location.pathname) ||
      location.pathname === "/estimasi" ||
      location.pathname === "/service" ||
      location.pathname === "/bisnis-tarakota"
    ) {
      window.addEventListener("scroll", handleScroll);
    } else {
      setIsGoldNavbar(true);
    }

    // Hapus event listener saat komponen dibongkar
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarStyle = {
    backgroundColor: isGoldNavbar ? "#F9F5EC" : "transparent",
    color: isGoldNavbar ? "#373131" : "white",
    boxShadow: isGoldNavbar
      ? "7px 11px 30px 0px rgba(212, 183, 84, 0.50)"
      : "none",
    // maxWidth: "1440px",
    transition: "background-color 0.3s ease-in-out", // Tambahkan efek transisi
  };

  const navbarClasses = isGoldNavbar ? "fade-in" : "";

  return (
    <nav
      className={`fixed top-0 left-0 bg-red-200 w-full bg-transparent z-20 ${navbarClasses}`}
      
    >
      <div className="max-w-[1440px] mx-auto p-4 px-5 md:px-20"
      style={navbarStyle}
      >
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-white text-2xl font-bold">
            <img
              onClick={() => navigate("/")}
              className="w-40 hover:cursor-pointer"
              src={logo}
              alt="Logo"
            />
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
              isMenuOpen ? "block" : "hidden"
            } lg:flex lg:space-x-10 mt-4 lg:mt-0`}
          >
            {menuNavbar.map((data, index) => (
              <li key={index}>
                <a href={data.href} className="hover:text-blue-300 text-xl">
                  {data.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
