import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavbarHome from "../Layout/NavbarHome";
import FooterHome from "../Layout/FooterHome";

const Donasi = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const campaigns = [
    {
      id: 1,
      title: "Solidaritas Bantu Korban Banjir & Longsor",
      location: "Palu, Sulawesi Tengah",
      description:
        "Ribuan warga terdampak hingga harus kehilangan nyawa. Ayo bantu segera!",
      collected: "Rp. 65.353.625",
      remainingDays: 7,
      image: "/img/donasi1.png",
    },
    {
      id: 2,
      title: "Bantu Warga Terdampak Erupsi Gunung",
      location: "Palu, Sulawesi Tengah",
      description:
        "10.295 warga terdampak, ratusan rumah rusak. Ayo bantu segera!",
      collected: "Rp. 65.353.625",
      remainingDays: 7,
      image: "/img/donasi2.png",
    },
    {
      id: 3,
      title: "Puluhan Tahun Dijajah, Palestina Tak Pernah Menyerah",
      location: "Palu, Sulawesi Tengah",
      description:
        "Dukungan Zakat bisa disalurkan untuk saudara kita di Palestina.",
      collected: "Rp. 65.353.625",
      remainingDays: 7,
      image: "/img/donasi3.png",
    },
    {
      id: 4,
      title: "Bantuan Modal, Pejuang mencari Nafkah",
      location: "Palu, Sulawesi Tengah",
      description:
        "Berjuang hingga usia senja demi keluarga. Bantu kuatkan pejuang keluarga mencari nafkah!",
      collected: "Rp. 65.353.625",
      remainingDays: 7,
      image: "/img/donasi4.png",
    },
    {
      id: 5,
      title: "Panen Pahala jariyah, Sedekah Alat Sholat",
      location: "Palu, Sulawesi Tengah",
      description:
        "Bagaimana bisa beribadah dengan khusyuk jika alat sholat masih lusuh? Yuk, bantu!",
      collected: "Rp. 65.353.625",
      remainingDays: 7,
      image: "/img/donasi5.png",
    },
    {
      id: 6,
      title: "Yuk , Muliakan Anak yatim Sekarang!",
      location: "Palu, Sulawesi Tengah",
      description:
        "Kirim 1000 kado yatim untuk anak yatim di seluruh Indonesia",
      collected: "Rp. 65.353.625",
      remainingDays: 7,
      image: "/img/donasi6.png",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <div className="sticky top-0 z-50 w-full bg-white shadow-md">
        <NavbarHome />
      </div>

      {/* Content Area */}
      <div className="flex-1 p-8 bg-gray-100">
        {/* Header Section */}
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-4">
          Beranda / <span className="text-gray-800 font-semibold">Donasi</span>
        </div>
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            Mari Bantu Mereka yang Membutuhkan
          </h1>
          <p className="text-black text-sm">
            Menampilkan <strong>{campaigns.length}</strong> kampanye dari 138
            kampanye
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-6">
          <button className="py-2 px-4 bg-primary-green text-white font-medium text-sm rounded-lg hover:bg-green-600">
            Semua Program
          </button>
          <button className="py-2 px-4 bg-gray-200 text-gray-700 font-medium text-sm rounded-lg hover:bg-gray-300">
            Terbaru
          </button>
          <button className="py-2 px-4 bg-gray-200 text-gray-700 font-medium text-sm rounded-lg hover:bg-gray-300">
            Bencana Alam
          </button>
          <button className="py-2 px-4 bg-gray-200 text-gray-700 font-medium text-sm rounded-lg hover:bg-gray-300">
            Pelestarian Lingkungan
          </button>
          <button className="py-2 px-4 bg-gray-200 text-gray-700 font-medium text-sm rounded-lg hover:bg-gray-300">
            Sosial
          </button>
        </div>

        {/* Campaign Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {campaigns.map((campaign) => (
            <div
              key={campaign.id}
              className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden flex flex-col h-full"
            >
              {/* Bagian gambar */}
              <img
                src={campaign.image}
                alt={campaign.title}
                className="w-full h-48 object-cover"
              />

              {/* Bagian konten */}
              <div className="p-4 flex flex-col justify-between flex-grow">
                {/* Judul */}
                <h2 className="text-base font-bold text-gray-900 mb-2">
                  {campaign.title}
                </h2>

                {/* Lokasi dan sisa hari */}
                <div className="flex justify-between items-center mb-4">
                  <p className="text-xs text-gray-600">{campaign.location}</p>
                  <p className="text-xs font-bold text-black">
                    Sisa hari {campaign.remainingDays}
                  </p>
                </div>

                {/* Deskripsi */}
                <p className="text-gray-700 text-sm font-normal mt-2 mb-4 line-clamp-2">
                  {campaign.description}
                </p>

                {/* Informasi terkumpul */}
                <hr className="my-2 border-t-2 border-gray-100" />
                <div>
                  <p className="text-sm text-gray-500 mb-1">Terkumpul</p>
                  <p className="text-2xl font-semibold text-black mb-2">
                    {campaign.collected}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <FooterHome />
    </div>
  );
};

export default Donasi;
