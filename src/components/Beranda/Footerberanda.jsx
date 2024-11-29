import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-8 flex justify-between items-center">
        {/* Logo di Paling Kiri */}
        <div className="flex items-start">
          {/* Tempat Logo RelawanKu */}
          <img
            src="/img/Logo.png" // Ganti dengan path logo Anda
            alt="RelawanKu Logo"
            className="h-10"
          />
        </div>

        {/* Informasi di Tengah */}
        <div className="text-left">
          <p className="text-gray-900 font-bold mb-2">Membutuhkan Bantuan?</p>
          <p className="text-gray-700">
            Kontak Person: <br /> +62 882-5476-8867
          </p>
          <p className="text-gray-700 mt-2">
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
          <p className="text-gray-700 mt-2">
            Alamat Kantor Kami:
            <br />
            <span className="font-bold">
              Jl. Raya Purwokerto No.14 Banyumas
            </span>
          </p>
        </div>

        {/* Sosial Media di Kanan */}
        <div className="text-right">
          <p className="text-gray-900 font-bold mb-2">IKUTI KAMI</p>
          <div className="flex space-x-4 justify-end">
            {/* Ikon Media Sosial */}
            <a href="#" className="text-blue-600 text-xl">
              <i className="fab fa-facebook"></i> {/* Facebook */}
            </a>
            <a href="#" className="text-blue-400 text-xl">
              <i className="fab fa-twitter"></i> {/* Twitter */}
            </a>
            <a href="#" className="text-green-500 text-xl">
              <i className="fab fa-whatsapp"></i> {/* WhatsApp */}
            </a>
          </div>
        </div>
      </div>
      <div className="bg-green-500 h-12"></div> {/* Garis Hijau */}
    </footer>
  );
};

export default Footer;
