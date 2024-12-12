import React from "react";
import NavbarHome from "../Layout/NavbarHome"; 
import { Link } from "react-router-dom";

const PresensiKegiatan = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Navbar */}
      <div className="sticky top-0 z-50 w-full bg-white shadow-md">
        <NavbarHome />
      </div>

      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 p-6 mb-6">
            <Link to="/kegiatanku" className="hover:text-gray-800">
              KegiatanKu /
            </Link>
            <span className="font-semibold text-gray-800"> Presensi</span>
          </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center flex-grow">
        <div
          className="relative bg-white shadow-md rounded-md mt-6"
          style={{ width: "905px", height: "671px" }}
        >
          {/* Embed Google Form */}
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfnU832ULSQLPL-Xr6oFW05ovWk0eMKS36ZvuqNqhbpic_pcQ/viewform"
            title="Pendaftaran Relawan"
            className="w-full h-full border-0 rounded-lg"
            allowFullScreen
          >
            Loading…
          </iframe>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end w-[905px] mt-4">
          <button className="bg-green-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-green-700">
            Selesai
          </button>
        </div>
      </div>
    </div>
  );
};

export default PresensiKegiatan;
