import React from "react";

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
          <li className="flex items-center px-4 py-2 bg-green-500 text-white rounded-md">
            <i className="fas fa-file-alt mr-3"></i>
            <span>Artikel</span>
          </li>
          <li className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
            <i className="fas fa-donate mr-3"></i>
            <span>Donasi</span>
          </li>
          <li className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
            <i className="fas fa-hands-helping mr-3"></i>
            <span>Relawan</span>
          </li>
          <li className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
            <i className="fas fa-calendar-check mr-3"></i>
            <span>Kegiatanku</span>
          </li>
          <li className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
            <i className="fas fa-question-circle mr-3"></i>
            <span>FAQ</span>
          </li>
          <li className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
            <i className="fas fa-info-circle mr-3"></i>
            <span>About Us</span>
          </li>
          <li className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
            <i className="fas fa-user mr-3"></i>
            <span>Profil</span>
          </li>
        </ul>
      </nav>

      <div className="flex items-center px-4 py-4 border-t border-gray-200 text-gray-700 hover:bg-gray-100">
        <i className="fas fa-sign-out-alt mr-3"></i>
        <span>Logout</span>
      </div>
    </div>
  );
};

export default Sidebar;
