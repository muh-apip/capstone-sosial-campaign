import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const NavbarHome = () => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const profileMenuRef = useRef(null);

  const handleToggle = (setter) => () => setter((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(event.target)
      ) {
        setIsProfileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navLinks = [
    { href: "/home", label: "Beranda" },
    { href: "/artikel", label: "Artikel" },
    { href: "/donasi", label: "Donasi" },
    { href: "/relawan", label: "Relawan" },
    { href: "/kegiatanku", label: "Kegiatanku" },
    { href: "/faq", label: "FAQ" },
    { href: "/tentang-kami", label: "Tentang Kami" },
  ];

  return (
    <nav className="flex flex-col md:flex-row items-center justify-between bg-white border-b border-gray-200 p-4 shadow-sm">
      {/* Bagian Kiri - Logo atau Search */}
      <div className="flex justify-between items-center w-full md:w-auto">
        {/* Mobile Menu Button */}
        <button
          className="block md:hidden text-gray-500 hover:text-gray-700"
          onClick={handleToggle(setIsMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>

        {/* Search Bar */}
        <div className="hidden md:flex items-center ml-4">
          <SearchIcon className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search"
            className="w-[200px] md:w-[300px] pl-4 pr-2 py-1 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
      </div>

      {/* Navbar Links */}
      {isMobileMenuOpen && (
        <div className="flex flex-col md:hidden mt-4 space-y-2 text-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="hover:text-blue-500 py-1"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}

      <div className="hidden md:flex space-x-6 text-gray-700">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            to={link.href}
            className="hover:text-blue-500 py-2"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Bagian Kanan - Ikon dan Profil */}
      <div className="flex items-center space-x-4 mt-4 md:mt-0">
        <button
          className="relative text-gray-500 hover:text-gray-700 focus:outline-none"
          aria-label="Notifications"
        >
          <NotificationsOutlinedIcon className="h-6 w-6" />
        </button>

        <button
          className="text-gray-500 hover:text-gray-700 focus:outline-none"
          aria-label="Help"
        >
          <HelpOutlineIcon className="h-6 w-6" />
        </button>
        <button
          className="text-gray-500 hover:text-gray-700 focus:outline-none"
          aria-label="Email"
        >
          <EmailOutlinedIcon className="h-6 w-6" />
        </button>

        <div className="relative flex items-center" ref={profileMenuRef}>
          <button
            className="focus:outline-none"
            onClick={handleToggle(setIsProfileMenuOpen)}
            aria-expanded={isProfileMenuOpen}
            aria-label="Profile menu"
          >
            <img
              src="https://via.placeholder.com/32"
              alt="Profile"
              className="h-8 w-8 rounded-full border border-gray-300"
            />
          </button>
          {isProfileMenuOpen && (
            <div className="absolute right-0 top-[calc(100%-10px)] w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
              <Link
                to="/profile"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Profile
              </Link>
              <Link
                to="/logout"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Logout
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavbarHome;
