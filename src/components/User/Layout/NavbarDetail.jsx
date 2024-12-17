import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const NavbarDetail = () => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [profileImage, setProfileImage] = useState(""); // Menyimpan gambar profil
  const profileMenuRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { href: "/home", label: "Beranda" },
    { href: "/artikel", label: "Artikel" },
    { href: "/donasi", label: "Donasi" },
    { href: "/relawan", label: "Relawan" },
    { href: "/kegiatanku", label: "Kegiatanku" },
    { href: "/faq", label: "FAQ" },
    { href: "/tentang-kami", label: "Tentang Kami" },
  ];

  const handleToggle = (setter) => () => setter((prev) => !prev);

  // Fetch Profile Data
  useEffect(() => {
    const fetchProfileData = async () => {
      const userId = localStorage.getItem("userId"); // Ambil `userId` dari localStorage
      if (!userId) {
        navigate("/login");
        return;
      }

      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("Token not found");
        }

        const response = await axios.get(
          `https://relawanku.xyz/api/v1/user/profile/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log("Profile data fetched:", response.data);

        if (response.data.status) {
          setProfileImage(
            response.data.data.image_url || "https://via.placeholder.com/32"
          );
        } else {
          console.error("Failed to fetch profile data:", response.data.message);
        }
      } catch (err) {
        console.error("Error fetching profile data:", err.message || err);
      }
    };

    fetchProfileData();
  }, [navigate]);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <nav className="flex items-center justify-between bg-white border-b border-gray-200 px-4 py-3 shadow-sm md:px-6 md:py-4">
      {/* Mobile Menu Toggle */}
      <div className="flex items-center md:hidden" ref={mobileMenuRef}>
        <button
          className="text-gray-500 hover:text-gray-700"
          onClick={handleToggle(setIsMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg z-50 flex flex-col space-y-2 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`px-6 py-2 ${
                location.pathname === link.href ? "font-bold text-black" : "text-gray-700"
              } hover:bg-gray-100`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}

      {/* Desktop Menu Links */}
      <div className="hidden md:flex items-center space-x-6">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            to={link.href}
            className={`px-2 py-1 ${
              location.pathname === link.href ? "font-bold text-black" : "text-gray-700"
            } hover:text-blue-500`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Icons and Profile Menu */}
      <div className="flex items-center space-x-4">
        <a href="/notifikasi">
          <button
            className="relative text-gray-500 hover:text-gray-700 focus:outline-none"
            aria-label="Notifications"
          >
            <NotificationsOutlinedIcon className="h-6 w-6" />
          </button>
        </a>
        <a href="/chatbot">
          <button
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            aria-label="Help"
          >
            <SupportAgentIcon className="h-6 w-6" />
          </button>
        </a>
        <a href="/laporan">
          <button
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            aria-label="Email"
          >
            <EmailOutlinedIcon className="h-6 w-6" />
          </button>
        </a>

        {/* Profile Menu */}
        <div className="relative flex items-center" ref={profileMenuRef}>
          <button
            className="focus:outline-none"
            onClick={handleToggle(setIsProfileMenuOpen)}
            aria-expanded={isProfileMenuOpen}
            aria-label="Profile menu"
          >
            <img
              src={profileImage}
              alt="Profile"
              className="h-8 w-8 rounded-full border border-gray-300"
            />
          </button>
          {isProfileMenuOpen && (
            <div className="absolute right-0 mt-24 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
              <Link
                to="/profile/:id"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Profile
              </Link>
              <button
                onClick={handleLogout}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavbarDetail;
