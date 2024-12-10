import React, { useState, useEffect, useRef } from "react";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const NavbarAdmin = () => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const profileMenuRef = useRef(null);

  // Nama pengguna (bisa diganti sesuai dengan data dinamis jika ada)
  const userName = "Admin";

  const handleToggleProfileMenu = () => {
    setIsProfileMenuOpen((prev) => !prev);
  };

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

  return (
    <nav className="flex justify-between items-center bg-white shadow px-6 py-3 border-b border-gray-200">
      {/* Bagian Kiri */}
      <div className="flex items-center">
        <div className="relative hidden lg:block">
          <input
            type="text"
            placeholder="Search"
            className="w-[300px] pl-4 pr-10 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
          <SearchIcon className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500" />
        </div>
      </div>

      {/* Bagian Kanan */}
      <div className="flex items-center space-x-4">
        {/* Ikon Notifikasi */}
        <button className="relative text-gray-600 hover:text-blue-600 focus:outline-none">
          <NotificationsOutlinedIcon />
          <span className="absolute top-0 right-0 inline-flex items-center justify-center w-2 h-2 bg-red-500 rounded-full text-white text-xs"></span>
        </button>

        {/* Ikon Email */}
        <button className="relative text-gray-600 hover:text-blue-600 focus:outline-none">
          <EmailOutlinedIcon />
          <span className="absolute top-0 right-0 inline-flex items-center justify-center w-2 h-2 bg-red-500 rounded-full text-white text-xs"></span>
        </button>

        {/* Ikon Support */}
        <button className="text-gray-600 hover:text-blue-600 focus:outline-none">
          <SupportAgentIcon />
        </button>

        {/* Menu Profil */}
        <div className="relative flex items-center space-x-3" ref={profileMenuRef}>
          <button
            className="focus:outline-none flex items-center"
            onClick={handleToggleProfileMenu}
            aria-expanded={isProfileMenuOpen}
            aria-label="Profile menu"
          >
            <img
              src="https://via.placeholder.com/32"
              alt="Profile"
              className="h-8 w-8 rounded-full border border-gray-300"
            />
            <span className="ml-2 text-sm font-medium text-gray-700">
              {userName}
            </span>
          </button>
          {isProfileMenuOpen && (
            <div className="absolute right-0 mt-12 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
              <div className="block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100">
                Profile
              </div>
              <div className="block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100">
                Logout
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavbarAdmin;
