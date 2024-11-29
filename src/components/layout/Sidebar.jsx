import React from "react";
import { Article, AttachMoney, Handshake, Event, Help, Info, AccountCircle, ExitToApp } from "@mui/icons-material";

const Sidebar = () => {
  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen flex flex-col">
      {/* Logo */}
      <div className="flex items-center justify-center py-4 border-b border-gray-200">
        <img
          src="/img/Logo.png" // Ganti dengan path logo
          alt="RelawanKu Logo"
          className="h-6"
        />
      </div>

      {/* Menu Items */}
      <nav className="flex-grow">
        <ul className="mt-4 space-y-2">
          <li className="flex items-center px-4 py-2 bg-custom-green text-white rounded-md">
            <Article className="mr-3" />
            <span>Artikel</span>
          </li>
          <li className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
            <AttachMoney className="mr-3" />
            <span>Donasi</span>
          </li>
          <li className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
            <Handshake className="mr-3" />
            <span>Relawan</span>
          </li>
          <li className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
            <Event className="mr-3" />
            <span>Kegiatanku</span>
          </li>
          <li className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
            <Help className="mr-3" />
            <span>FAQ</span>
          </li>
          <li className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
            <Info className="mr-3" />
            <span>About Us</span>
          </li>
          <li className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
            <AccountCircle className="mr-3" />
            <span>Profil</span>
          </li>
        </ul>
      </nav>

      <div className="flex items-center px-4 py-4 border-t border-gray-200 text-gray-700 hover:bg-gray-100">
        <ExitToApp className="mr-3" />
        <span>Logout</span>
      </div>
    </div>
  );
};

export default Sidebar;
