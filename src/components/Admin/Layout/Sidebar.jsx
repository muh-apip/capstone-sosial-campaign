import React, { useState } from "react";
import {
  Home,
  Article,
  AttachMoney,
  VolunteerActivism,
  AssignmentInd,
  SupportAgent,
  Info,
  Person,
  ArrowBack,
} from "@mui/icons-material";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      {/* Tombol Hamburger */}
      <div
        className={`md:hidden flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200 ${
          isSidebarOpen ? "fixed inset-0 z-30" : ""
        }`}
      >
        <img
          src="/img/Logo.png" // Ganti dengan path logo
          alt="RelawanKu Logo"
          className="h-6"
        />
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:static md:translate-x-0 w-64 bg-white border-r border-gray-200 h-screen flex flex-col`}
      >
        {/* Logo */}
        <div className="flex items-center justify-center py-4 mb-4 border-gray-200">
          <img
            src="/img/Logo.png" 
            alt="RelawanKu Logo"
            className="h-6"
          />
        </div>

        {/* Menu Items */}
        <nav className="flex-grow">
          <ul className="mt-6 space-y-2">
            <li className="flex items-center px-4 py-2 bg-custom-green text-white rounded-md">
              <Home className="mr-3" />
              <span>Beranda</span>
            </li>
            <li className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
              <Article className="mr-3" />
              <span>Artikel</span>
            </li>
            <li className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
              <AttachMoney className="mr-3" />
              <span>Donasi</span>
            </li>
            <li className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
              <VolunteerActivism className="mr-3" />
              <span>Relawan</span>
            </li>
            <li className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
              <AssignmentInd className="mr-3" />
              <span>Kegiatanku</span>
            </li>
            <li className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
              <SupportAgent className="mr-3" />
              <span>FAQ</span>
            </li>
            <li className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
              <Info className="mr-3" />
              <span>Tentang Kami</span>
            </li>
            <li className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
              <Person className="mr-3" />
              <span>Profil</span>
            </li>
          </ul>
        </nav>

        <div className="flex items-center px-4 py-4 border-t border-gray-200 text-gray-700 hover:bg-gray-100">
          <ArrowBack className="mr-3" />
          <span>Logout</span>
        </div>
      </div>

      {/* Overlay (untuk layar kecil) */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;