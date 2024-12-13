import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50 px-8 py-11 border-t border-gray-200">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8 text-center relative">
        {/* Contact Section */}
        <div className="flex-1 flex flex-col items-center">
          <h3 className="text-lg font-bold mb-2">CONTACT</h3>
          <p className="text-gray-600 mb-4 text-center">
            Hubungi kami untuk bantuan atau <br></br> informasi lebih lanjut.
          </p>
          <Link to="/login">
          <button className="bg-[#4caf50] font-semibold text-white px-4 py-2 rounded hover:bg-[#45a049] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#45a049]">
            Contact Support
          </button>
          </Link>
        </div>

        {/* Vertical Line */}
        <div className="hidden md:block w-px bg-gray-300 h-full absolute left-1/3 transform -translate-y-1/2 top-1/2"></div>

        {/* Follow Us Section */}
        <div className="flex-1 flex flex-col items-center">
          <h3 className="text-lg font-bold mb-2">FOLLOW US</h3>
          <p className="text-gray-600 mb-4 text-center">
            Tetap terhubung dengan kami di media <br></br>sosial!
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-700"
              aria-label="Facebook"
            >
              <FacebookIcon></FacebookIcon>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-700"
              aria-label="Instagram"
            >
              <InstagramIcon></InstagramIcon>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-700"
              aria-label="Email"
            >
              <XIcon></XIcon>
            </a>
          </div>
        </div>

        {/* Vertical Line */}
        <div className="hidden md:block w-px bg-gray-300 h-full absolute left-2/3 transform -translate-y-1/2 top-1/2"></div>

        {/* Join Us Section */}
        <div className="flex-1 flex flex-col items-center">
          <h3 className="text-lg font-bold mb-2">Join US</h3>
          <p className="text-gray-600 mb-4 text-center">
            "Bergabunglah bersama kami sekarang <br></br>juga!"
          </p>
          <Link to="/login">
          <button className="bg-[#4caf50] font-semibold text-white px-4 py-2 rounded hover:bg-[#45a049] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#45a049]">
            Get Started
          </button>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
