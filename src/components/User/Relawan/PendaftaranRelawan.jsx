import React from "react";
import Navbar from "../Layout/NavbarDetail";

const Relawan = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Navbar */}
      <div className="sticky top-0 z-50 w-full bg-white shadow-md">
        <Navbar />
      </div>

      {/* Konten Utama */}
      <div className="w-full bg-white p-6 rounded-lg shadow-lg space-y-6 mx-auto">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 text-left mb-4">
          Beranda / Relawan / Detail Program /{" "}
          <span className="text-gray-800 font-semibold">Pendaftaran</span>
        </div>

        {/* Judul Halaman */}
        <h2 className="text-3xl font-semibold text-gray-900 text-center">
          Solidaritas Bantu Korban Banjir & Longsor
        </h2>
        <p className="text-sm text-gray-500 text-center">
          Desa -/ Senin, 25 November 2024 / 11.00 WIB
        </p>
        <p className="text-lg text-gray-700 text-center">
          Ribuan warga terdampak hingga harus kehilangan nyawa. Ayo bantu
          segera!
        </p>
        <p className="text-sm text-gray-500 text-center">
          Program ini bertujuan untuk membantu para korban bencana banjir dan
          longsor di Palu, Sulawesi Tengah. Dengan bergabung, Anda bisa membantu
          memulihkan kondisi pasca-bencana dengan berbagai kegiatan sosial.
        </p>

        {/* Embed Google Form */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mt-6">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfnU832ULSQLPL-Xr6oFW05ovWk0eMKS36ZvuqNqhbpic_pcQ/viewform"
            width="100%"
            height="600"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="Pendaftaran Relawan"
            className="rounded-lg"
          >
            Loading…
          </iframe>
        </div>

        {/* Tombol Submit */}
        <div className="flex justify-end mt-6">
          <button
            onClick={() => alert("Form submitted")}
            className="px-8 py-3 bg-custom-green text-white rounded-md hover:bg-custom-green-dark focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50 transition duration-300"
          >
            Kirim Pendaftaran
          </button>
        </div>
      </div>
    </div>
  );
};

export default Relawan;
