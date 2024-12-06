import React from "react";
import { Facebook, Twitter, WhatsApp } from "@mui/icons-material";

const FooterHome = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 lg:py-12 py-8 flex flex-col md:flex-row justify-between items-center">
        {/* Logo dan Slogan */}
        <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
          <img
            src="/img/Logo.png" // Ganti dengan path logo Anda
            alt="RelawanKu Logo"
            className="h-10 mb-2"
          />
          <p className="text-gray-700 text-center md:text-left">
            Peduli, Beraksi, Menginspirasi!
          </p>
        </div>

        {/* Keamanan Transaksi */}
        <div className="flex flex-col items-center mb-6 md:mb-0">
          <p className="text-gray-900 text-lg md:text-xl font-bold mb-4 text-center">
            KEAMANAN TRANSAKSIMU
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/img/footer/dana.png"
              alt="DANA"
              className="h-8 w-auto"
            />
            <img
              src="/img/footer/bsi.png"
              alt="BSI"
              className="h-8 w-auto"
            />
            <img
              src="/img/footer/ovo.png"
              alt="OVO"
              className="h-8 w-auto"
            />
            <img
              src="/img/footer/bri.png"
              alt="BRI"
              className="h-8 w-auto"
            />
          </div>
        </div>

        {/* Ikuti Kami */}
        <div className="flex flex-col items-center">
          <p className="text-gray-900 text-lg md:text-xl font-bold mb-4 text-center">
            IKUTI KAMI
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-blue-600 text-2xl">
              <Facebook />
            </a>
            <a href="#" className="text-blue-400 text-2xl">
              <Twitter />
            </a>
            <a href="#" className="text-green-600 text-2xl">
              <WhatsApp />
            </a>
          </div>
        </div>
      </div>

      {/* Garis Hijau */}
      <div className="bg-secondary-green h-8"></div>
    </footer>
  );
};

export default FooterHome;
