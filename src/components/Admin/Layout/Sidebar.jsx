import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Home,
  Article,
  VolunteerActivism,
  Person,
  ArrowBack,
} from "@mui/icons-material";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import CreditCardIcon from "@mui/icons-material/CreditCard";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation(); // Mendapatkan lokasi saat ini
  const navigate = useNavigate(); // Untuk mengarahkan ke halaman login setelah logout

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  function isActive(paths) {
    const location = useLocation();
  
    // Jika paths adalah string, ubah menjadi array
    const pathsArray = Array.isArray(paths) ? paths : [paths];
  
    return pathsArray.some((path) => {
      if (path.includes(":")) {
        // Jika path dinamis, ubah ke regex
        const regex = new RegExp(`^${path.replace(":id", "[^/]+")}$`);
        return regex.test(location.pathname);
      }
      // Untuk path statis
      return location.pathname === path;
    });
  }
  // Fungsi untuk logout
  const handleLogout = () => {
    // Hapus data autentikasi (token atau sesi pengguna) dari storage
    localStorage.removeItem("authToken"); // atau sessionStorage, tergantung implementasi Anda
    // Redirect ke halaman login
    navigate("/login");
  };

  return (
    <div>
      {/* Tombol Hamburger */}
      <div className="md:hidden flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200">
        <img
          src="/img/Logo.png" // Ganti dengan path logo
          alt="RelawanKu Logo"
          className="h-6"
        />
        <button
          onClick={toggleSidebar}
          className="text-gray-700 focus:outline-none"
        >
          <span className="sr-only">Open Sidebar</span>
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
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
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:static md:translate-x-0 w-64 bg-white border-r border-gray-200 h-screen flex flex-col`}
      >
        {/* Logo */}
        <div className="flex items-center justify-center py-12 border-gray-200">
          <img src="/img/Logo.png" alt="RelawanKu Logo" className="h-6" />
        </div>

        {/* Menu Items */}
        <nav className="flex-grow">
          <ul className="mt-6 space-y-2">
            <li>
              <Link
                to="/dashboard"
                className={`flex items-center px-4 py-2 border-xl ${
                  isActive("/dashboard")
                    ? "bg-custom-green text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Home className="mr-3" />
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to="/artikel-admin"
                className={`flex items-center px-4 py-2 ${
                  isActive([
                    "/artikel-admin",
                    "/tambah-artikel",
                    "/edit-artikel/:id",
                  ])
                    ? "bg-custom-green text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Article className="mr-3" />
                <span>Artikel</span>
              </Link>
            </li>
            <li>
              <Link
                to="/donasi-admin"
                className={`flex items-center px-4 py-2 ${
                  isActive([
                    "/donasi-admin",
                    "/tambah-donasi",
                    "/edit-donasi/:id"
                  ])
                    ? "bg-custom-green text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <VolunteerActivism className="mr-3" />
                <span>Donasi</span>
              </Link>
            </li>
            <li>
              <Link
                to="/relawan-admin"
                className={`flex items-center px-4 py-2 ${
                  isActive([
                    "/relawan-tambah",
                    "/relawan-admin",
                    "/relawan-edit/:id",

                  ])
                    ? "bg-custom-green text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <AssignmentIndIcon className="mr-3" />
                <span>Relawan</span>
              </Link>
            </li>
            <li>
              <Link
                to="/invoices-admin"
                className={`flex items-center px-4 py-2 ${
                  isActive("/invoices-admin")
                    ? "bg-custom-green text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <CreditCardIcon className="mr-3" />
                <span>Invoice</span>
              </Link>
            </li>
            <li>
              <Link
                to="/clients"
                className={`flex items-center px-4 py-2 ${
                  isActive("/clients")
                    ? "bg-custom-green text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Person className="mr-3" />
                <span>Clients</span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Tombol Logout */}
        <div
          className="flex items-center px-4 py-4 border-t border-gray-200 text-gray-700 hover:bg-gray-100 cursor-pointer"
          onClick={handleLogout} // Menambahkan fungsi logout
        >
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
