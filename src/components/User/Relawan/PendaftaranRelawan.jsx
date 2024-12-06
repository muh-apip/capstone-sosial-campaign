import React, { useState } from "react";
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";

const Relawan = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <div className="sticky top-0 z-50 w-full md:w-[calc(100%-16rem)] ml-0 md:ml-64 bg-white shadow-md">
        <Navbar />
      </div>

      {/* Konten Utama */}
      <div className="flex flex-1">
        {/* Konten Pendaftaran Relawan (Google Form Embed) */}
        <div className="flex-1 p-6 bg-gray-100">
          {/* Breadcrumb */}
          <div className="text-sm text-gray-500 mb-4 text-center">
            Beranda / Relawan / Detail Program /{" "}
            <span className="text-gray-800 font-semibold">Pendaftaran</span>
          </div>

          {/* Judul Halaman */}
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
            Solidaritas Bantu Korban Banjir & Longsor
          </h2>
          <p className="text-sm text-gray-500 mb-2 text-center">
            Desa -/ Senin, 25 November 2024 / 11.00 WIB
          </p>
          <p className="text-lg text-gray-700 mb-4 text-center">
            Ribuan warga terdampak hingga harus kehilangan nyawa. Ayo bantu
            segera!
          </p>
          <p className="text-sm text-gray-500 text-center">
            Program ini bertujuan untuk membantu para korban bencana banjir dan
            longsor di Palu, Sulawesi Tengah. Dengan bergabung, Anda bisa
            membantu memulihkan kondisi pasca-bencana dengan berbagai kegiatan
            sosial.
          </p>

          {/* Embed Google Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg mt-6">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfnU832ULSQLPL-Xr6oFW05ovWk0eMKS36ZvuqNqhbpic_pcQ/viewform?embedded=true"
              width="100%"
              height="900"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="Pendaftaran Relawan"
            >
              Loading…
            </iframe>
          </div>

          {/* Tombol Submit - Custom */}
          <div className="flex justify-end mt-6">
            <button
              onClick={() => alert("Form submitted")}
              className="px-6 py-3 bg-custom-green text-white rounded-md hover:bg-custom-green-dark focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50"
            >
              Kirim Pendaftaran
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Relawan;
