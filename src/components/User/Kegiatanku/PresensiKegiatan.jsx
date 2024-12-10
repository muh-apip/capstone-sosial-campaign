import React from "react";
import NavbarHome from "../Layout/NavbarHome"; // Pastikan file NavbarHome tersedia

const PresensiKegiatan = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Navbar */}
      <div className="sticky top-0 z-50 w-full bg-white shadow-md">
        <NavbarHome />
      </div>

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4 px-8">
        <p className="text-gray-600 text-sm">
          Relawan / Detail Program /{" "}
          <span className="font-semibold">Presensi</span>
        </p>
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
