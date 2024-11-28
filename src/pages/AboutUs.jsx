// src/pages/HeroSection.jsx
import React from "react";

const AboutUs = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-gray-100 p-8 relative">
      {/* Gambar di sebelah kiri */}
      <div className="md:w-1/2">
        <img
          src="/img/orang.png"
          alt="Gambar"
          className="rounded-lg w-full h-auto object-cover"
        />
      </div>

      {/* Gambar sebagai latar belakang */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url('/img/pulau.jpeg')" }}
      ></div>

      {/* Teks di sebelah kanan */}
      <div className="md:w-1/2 md:pl-8 mt-6 md:mt-0 relative z-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Mari berkontribusi bersama di Relawanku
        </h2>
        <h3 className="text-xl font-semibold mb-2 text-gray-800">
          Bersama, Kita Bisa Mengubah Dunia!
        </h3>
        <p className="mb-4 text-gray-800">
          "Bersama, kita bisa mengubah dunia! Relawanku menghubungkanmu dengan
          peluang untuk berdonasi untuk membangun sekolah, menyediakan air
          bersih, atau menjadi relawan di program penghijauan."
        </p>
        <button className="bg-green-500 text-white px-4 py-2 rounded">
          Lihat selengkapnya
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
