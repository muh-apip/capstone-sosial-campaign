import React, { useState, useEffect, useRef } from "react";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const NavbarAdmin = () => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");  // Define the searchTerm state
  const profileMenuRef = useRef(null);

  // Nama pengguna (bisa diganti sesuai dengan data dinamis jika ada)
  const userName = "Admin";

  const handleToggleProfileMenu = () => {
    setIsProfileMenuOpen((prev) => !prev);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value); // Update searchTerm when the input changes
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
        <div className="relative hidden md:flex items-center ml-4">
          <SearchIcon className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}  // Handle change for search input
            placeholder="Search"
            className="w-[200px] md:w-[300px] pl-10 pr-2 py-1 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
          />
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
        <div
          className="relative flex items-center space-x-3"
          ref={profileMenuRef}
        >
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
        </div>
      </div>
    </nav>
  );
};

export default NavbarAdmin;
