import React from "react";
import Relawan from "./Relawan"; // Pastikan file Tentang.jsx berada di lokasi yang benar
import Panduan from "./Panduan";
import Gallery from "./Galery";
import NavbarHome from "../Layout/NavbarHome";
import FooterHome from "../Layout/FooterHome";

const TentangKami = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <div className="sticky top-0 z-50 w-full bg-white shadow-md">
        <NavbarHome />
      </div>

      {/* Main Content */}
      <div className="bg-gray-100 flex-grow">
        {/* Breadcrumb */}
        <div className="bg-gray-200 py-4 px-8">
          <p className="text-gray-600 text-sm">
            Beranda /{" "}
            <span className="text-gray-800 font-semibold">Tentang Kami</span>
          </p>
        </div>

        {/* Hero Section */}
        <div className="relative bg-gray-900 text-white h-[579px]">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-60"
            style={{
              backgroundImage: "url('/img/tentangkami.png')", // Pastikan gambar tersedia di folder public/img
            }}
          ></div>

          {/* Overlay Content */}
          <div className="relative z-10 px-8 py-16 h-full flex items-center">
            <div className="max-w-4xl text-left">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Bersama, satu donasi
              </h1>
              <p className="text-3xl md:text-4xl font-bold mb-4">
                dan aksi pada satu waktu
              </p>
              <p className="text-sm md:text-base">
                melalui donasi dan aksi sukarela, menekankan bahwa setiap
                langkah kecil
              </p>
              <p className="text-sm md:text-base">
                bersama dapat membawa dampak besar bagi masyarakat.
              </p>
            </div>
          </div>
        </div>

        {/* Tentang Section */}
        <Relawan />
        <Panduan />
        <Gallery />
      </div>

      {/* Footer */}
      <FooterHome />
    </div>
  );
};

export default TentangKami;
