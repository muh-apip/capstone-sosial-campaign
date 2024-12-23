import React from "react";
import { Link } from 'react-router-dom';

const Fitur = () => {
  return (
    <div className="relative bg-gray-100 py-10 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-24">
      <div className="container mx-auto">
        {/* Judul dan Deskripsi */}
        <div className="text-center mb-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 text-gray-800">
            Program Kami
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
            Kami berkomitmen untuk memberikan dampak positif bagi masyarakat dan
            lingkungan melalui berbagai program yang dapat kamu ikuti.
          </p>
        </div>

        {/* Grid Program */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {/* Donasi untuk Perubahan */}
          <div className="bg-white shadow-lg overflow-hidden rounded-tr-3xl rounded-bl-3xl">
            <img
              src="/img/Fitur1.png"
              alt="Group of volunteers working together"
              className="w-full h-40 sm:h-48 object-cover"
            />
            <div className="p-6 text-center">
              <h2 className="text-lg sm:text-xl font-bold mb-4 text-gray-800">
                Donasi untuk Perubahan
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
                Bantu kami memberikan dukungan finansial untuk program sosial
                dan lingkungan yang membutuhkan.
              </p>
              <Link to="/login">
              <button className="font-semibold bg-[#4caf50] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-[#45a049] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#45a049]">
                Lihat selengkapnya
              </button>
              </Link>
            </div>
          </div>

          {/* Bergabung sebagai Relawan */}
          <div className="bg-white shadow-lg overflow-hidden rounded-tr-3xl rounded-bl-3xl">
            <img
              src="/img/Fitur2.png"
              alt="Volunteers celebrating together"
              className="w-full h-40 sm:h-48 object-cover"
            />
            <div className="p-6 text-center">
              <h2 className="text-lg sm:text-xl font-bold mb-4 text-gray-800">
                Bergabung sebagai Relawan
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
                Ayo ambil bagian dalam kegiatan relawan untuk menjaga dan
                memperbaiki kondisi lingkungan sekitar.
              </p>
              <Link to="/login">
              <button className="font-semibold bg-[#4caf50] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-[#45a049] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#45a049]">
                Lihat selengkapnya
              </button>
              </Link>
            </div>
          </div>

          {/* Berita Terbaru */}
          <div className="bg-white shadow-lg overflow-hidden rounded-tr-3xl rounded-bl-3xl">
            <img
              src="/img/Fitur3.png"
              alt="Person reading news on a laptop"
              className="w-full h-40 sm:h-48 object-cover"
            />
            <div className="p-6 text-center">
              <h2 className="text-lg sm:text-xl font-bold mb-4 text-gray-800">
                Berita Terbaru
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
                Temukan artikel terbaru yang membahas isu sosial dan lingkungan
                serta cara-cara untuk mengatasi masalah tersebut.
              </p>
              <Link to="/login">
              <button className="font-semibold bg-[#4caf50] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-[#45a049] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#45a049]">
                Lihat selengkapnya
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fitur;
