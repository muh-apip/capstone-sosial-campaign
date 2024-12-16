import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const NavbarHome = ({ onSearch }) => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [profileImage, setProfileImage] = useState("/images/default-profile.png");
  const [searchTerm, setSearchTerm] = useState("");
  const profileMenuRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const handleToggle = (setter) => () => setter((prev) => !prev);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(event.target)
      ) {
        setIsProfileMenuOpen(false);
      }
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Fetch Profile Data
  useEffect(() => {
    const fetchProfileData = async () => {
      const userId = localStorage.getItem("userId");
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

        if (response.data.status) {
          setProfileImage(
            response.data.data.image_url || "/images/default-profile.png"
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

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
  }, [isMobileMenuOpen]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const navLinks = [
    { href: "/home", label: "Beranda" },
    { href: "/artikel", label: "Artikel" },
    { href: "/donasi", label: "Donasi" },
    { href: "/relawan", label: "Relawan" },
    { href: "/kegiatanku", label: "Kegiatanku" },
    { href: "/user-faq", label: "FAQ" },
    { href: "/tentang-kami", label: "Tentang Kami" },
  ];

  return (
    <nav className="flex items-center justify-between bg-white border-b border-gray-200 px-4 py-3 shadow-sm md:px-6 md:py-4">
      {/* Left Section */}
      <div className="flex items-center justify-between w-full md:w-auto">
        <button
          className="text-gray-500 hover:text-gray-700 md:hidden"
          onClick={handleToggle(setIsMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>

        <div className="relative hidden md:flex items-center ml-4">
          <SearchIcon className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search"
            className="w-[200px] md:w-[300px] pl-10 pr-2 py-1 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div
          className="absolute top-full left-0 w-full bg-white shadow-lg z-50 flex flex-col space-y-2 py-4"
          ref={mobileMenuRef}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`px-6 py-2 text-gray-700 hover:bg-gray-100 ${
                location.pathname === link.href ? "font-bold text-black" : ""
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}

      {/* Desktop Links */}
      <div className="hidden md:flex items-center space-x-6">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            to={link.href}
            className={`text-gray-700 hover:text-blue-500 px-2 py-1 ${
              location.pathname === link.href ? "font-bold text-black" : ""
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Right Section */}
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
              className="h-8 w-8 rounded-full border border-gray-300 object-cover"
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

export default NavbarHome;
