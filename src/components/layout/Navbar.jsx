import React, { useState } from "react";
import logo from "../../assets/images/logos/Logo.png";

const Navbar = () => {
  // State untuk mengontrol hamburger menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fungsi toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full bg-white border-b border-gray-200 dark:bg-neutral-800 dark:border-neutral-700">
      <nav className="relative max-w-[85rem] w-full mx-auto md:flex md:items-center md:justify-between md:gap-3 py-4 px-16 sm:px-6 lg:px-8">
        {/* Logo Section */}
        <div className="flex justify-between items-center gap-x-6">
          <img src={logo} alt="Brand Logo" className="h-10 w-auto" />
          {/* Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex items-center p-2 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 dark:text-neutral-200"
            aria-label="Toggle navigation"
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Navbar Links and Button Group */}
        <div
          id="hs-header-base"
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:block transition-all duration-300 basis-full grow`}
        >
          <div className="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
            <div className="py-2 md:py-0 flex flex-col md:flex-row md:items-center gap-0.5 md:gap-1">
              <div className="grow">
                <div className="flex flex-col md:flex-row md:justify-end md:items-center gap-4">
                  {/* Navbar Links */}
                  <NavItem
                    href="#"
                     iconPath="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"
                    label="Beranda"
                  />
                  <NavItem href="#"  iconPath="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" label="About us" />
                  <NavItem
                    href="#"
                    iconPath="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"
                    label="Program"
                  />
                  <NavItem
                    href="#"
                    iconPath="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"
                    label="FAQ"
                  />
                  <NavItem
                    href="#"
                    iconPath="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"
                    label="Testimoni"
                  />
                </div>
              </div>

              {/* Divider */}
              <div className="my-2 md:my-0 md:mx-2">
                <div className="w-full h-px md:w-px md:h-4 bg-gray-100 md:bg-gray-300 dark:bg-neutral-700" />
              </div>

              {/* Login Button */}
              <div className="flex flex-wrap items-center gap-x-1.5">
                <a
                  className="py-2 px-2.5 inline-flex items-center font-medium text-sm rounded-lg bg-[#4caf50] text-white hover:bg-[#45a049] focus:outline-none focus:bg-[#45a049] disabled:opacity-50 disabled:pointer-events-none"
                  href="#"
                >
                  Login
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

// Reusable Navbar Link Component
const NavItem = ({ href, iconPath, label }) => (
  <a
    className="p-2 flex items-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
    href={href}
  >
    <svg
      className="shrink-0 size-4 me-3 md:me-2 block md:hidden"
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={iconPath} />
    </svg>
    {label}
  </a>
);

export default Navbar;
