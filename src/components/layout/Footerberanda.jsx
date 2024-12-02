import React from "react";
import { Facebook, Twitter, WhatsApp } from "@mui/icons-material";

const Footerberanda = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-6 sm:px-12 py-8 flex flex-wrap justify-between items-start">
        {/* Logo di Tengah Kiri */}
        <div className="flex items-center flex-1 md:flex-initial mb-4 md:mb-0 justify-center sm:justify-start">
          <img
            src="/img/Logo.png" // Ganti dengan path logo Anda
            alt="RelawanKu Logo"
            className="h-10"
          />
        </div>

        {/* Informasi di Tengah */}
        <div className="text-left flex-1 md:flex-initial space-y-4 mb-4 md:mb-0 w-full sm:w-auto">
          <div>
            <p className="text-gray-900 font-bold mb-2">Membutuhkan Bantuan?</p>
            <p className="text-gray-700">
              Kontak Person: <br /> +62 882-5476-8867
            </p>
          </div>
          <div>
            <p className="text-gray-700">
              Email Kami:
              <br />
              <a href="mailto:relawanku@gmail.com" className="text-blue-500">
                relawanku@gmail.com
              </a>
              <br />
              fadhila amalia (Admin):
              <br />
              <a href="mailto:fadhila@gmail.com" className="text-blue-500">
                fadhila@gmail.com
              </a>
            </p>
          </div>
          <div>
            <p className="text-gray-700">
              Alamat Kantor Kami:
              <br />
              <span className="font-bold">
                Jl. Raya Purwokerto No.14 Banyumas
              </span>
            </p>
          </div>
        </div>

        {/* Sosial Media di Tengah Kanan */}
        <div className="flex flex-col items-center justify-center flex-1 md:flex-initial mb-4 md:mb-0 w-full sm:w-auto">
          <p className="text-gray-900 text-xl md:text-2xl font-bold mb-2">IKUTI KAMI</p>
          <div className="flex justify-center space-x-4">
            {/* Ikon Media Sosial */}
            <a href="#" className="text-blue-600 text-2xl md:text-3xl">
              <Facebook />
            </a>
            <a href="#" className="text-blue-400 text-2xl md:text-3xl">
              <Twitter />
            </a>
            <a href="#" className="text-custom-green text-2xl md:text-3xl">
              <WhatsApp />
            </a>
          </div>
        </div>
      </div>
      <div className="bg-secondary-green h-12"></div> {/* Garis Hijau */}
    </footer>
  );
};

export default Footerberanda;
