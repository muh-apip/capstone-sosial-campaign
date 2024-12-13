import React from "react";
import HeroImg from "../../../assets/images/photos/heroimg.png";
import DanationBox from "../../../assets/images/photos/danationbox.png";
import BackgroundImage from "../../../assets/images/photos/backgroundimage.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "../../../index.css";
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <div
      className="min-h-screen flex items-center bg-gray-50 bg-cover bg-center"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
      }}
    >
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-20"> {/* Menambahkan padding atas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 xl:gap-20 items-center">
          {/* Text Section */}
          <div className="flex flex-col justify-center text-center md:text-left order-2 md:order-1">
            {/* Heading Section */}
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-white leading-tight drop-shadow-lg">
              Langkah Kecilmu, Awal dari Perubahan Besar.
            </h1>

            {/* Paragraph Section */}
            <p className="mt-3 font-normal text-sm sm:text-base md:text-lg text-white leading-relaxed">
              Bantu wujudkan perubahan melalui donasi sosial, atau{" "}
              <br className="hidden md:block" /> ambil peran aktif sebagai
              relawan lingkungan.
            </p>

            {/* Button Section */}
            <div className="mt-6 flex flex-col sm:flex-row sm:justify-center md:justify-start gap-3">
            <Link to="/login">
              <button className="w-full sm:w-auto py-2 px-4 text-sm font-semibold rounded-lg bg-[#4caf50] text-white hover:bg-[#45a049] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#45a049]">
                Buat Perubahan
                <ArrowForwardIosIcon className="ml-1 sm:ml-2" fontSize="small" />
              </button>
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative flex items-center justify-center md:justify-end order-1 md:order-2">
            {/* Main Circle Image */}
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-white shadow-xl">
              <img
                className="w-full h-full object-cover"
                src={HeroImg}
                alt="Hero Image"
              />
            </div>

            {/* Secondary Floating Image (Donation Box) */}
            <div className="absolute -top-6 left-1/4 sm:top-4 sm:left- lg:top-2 lg:left-33 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 rounded-full overflow-hidden border-8 border-white shadow-md">
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
