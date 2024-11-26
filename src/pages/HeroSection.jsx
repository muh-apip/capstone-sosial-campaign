import React from "react";
import HeroImg from "../assets/images/photos/heroimg.png";
import DanationBox from "../assets/images/photos/danationbox.png";

export default function HeroSection() {
  return (
    <div className="min-h-screen flex items-center bg-gray-50">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 xl:gap-20 items-center">
          {/* Text Section */}
          <div className="flex flex-col justify-center text-center md:text-left">
            <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl lg:text-4xl lg:leading-tight">
              Langkah Kecilmu, Awal dari Perubahan Besar.
            </h1>
            <p className="mt-3 text-sm sm:text-base lg:text-lg text-gray-700">
              Bantu wujudkan perubahan melalui donasi sosial, atau{" "}
              <br className="hidden md:block" /> ambil peran aktif sebagai
              relawan lingkungan.
            </p>
            <div className="mt-5 flex flex-col sm:flex-row sm:justify-center md:justify-start gap-3">
              <a
                className="py-3 px-5 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg bg-[#4caf50] text-white hover:bg-[#45a049] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#45a049]"
                href="#"
              >
                Buat Perubahan
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative flex items-center justify-center md:justify-end">
            {/* Main Circle Image */}
            <div className="relative w-40 h-40 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-gray-200 shadow-xl">
              <img
                className="w-full h-full object-cover"
                src={HeroImg}
                alt="Hero Image"
              />
            </div>
            {/* Secondary Floating Image */}
            <div className="absolute top-6 left-1/4 sm:top-0 sm:left-46 lg:top-0 lg:left-36 w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-44 lg:h-44 rounded-full overflow-hidden border-4 border-gray-200 shadow-md">
              <img
                className="w-full h-full object-cover"
                src={DanationBox}
                alt="Donation Box"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
