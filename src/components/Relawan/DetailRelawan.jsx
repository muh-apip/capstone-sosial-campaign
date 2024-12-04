import React, { useState } from "react";
import { useParams } from "react-router-dom";
import NavbarBeranda from "../layout/NavbarBeranda";
import Sidebar from "../layout/Sidebar";
import Footerberanda from "../layout/Footerberanda";
import { CheckIcon } from "@heroicons/react/20/solid";

const DetailRelawan = () => {
  const { id } = useParams(); // Mengambil id

  const [isSidebarOpen, setIsSidebarOpen] = useState(false); //State sidebar

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const relawan = [
    {
      id: 1,
      name: "Solidaritas Bantu Korban Banjir & Longsor",
      left: "sisa 7 hari",
      lokasi: "Palu, Sulawesi Tengah",
      category: "Bencana Alam",
      image: "../src/assets/images/photos/relawan/relawan1.png",
      description:
        "Ribuan warga terdampak hingga harus kehilangan nyawa. Ayo bantu segera!",
      joined: 7,
      total: 16,
    },
    {
      id: 2,
      name: "Bantu Warga Terdampak Erupsi Gunung",
      left: "sisa 7 hari",
      lokasi: "Wakatobi, Sulawesi Tenggara",
      category: "Bencana",
      image: "../src/assets/images/photos/relawan/relawan2.png",
      description:
        "10.295 warga terdampak, ratusan rumah rusak. Ayo bantu segera!",
      joined: 5,
      total: 10,
    },
    {
      id: 3,
      name: "Bantu Muslim Selesaikan Masjidnya",
      role: "Relawan Logistik",
      lokasi: "Temanggung, Jawa Tengah",
      left: "sisa 7 hari",
      category: "Gotongroyong",
      image: "../src/assets/images/photos/relawan/relawan3.png",
      description: "Patungan bangun kembali Masjid Nurul Bhakti, Lubuk Rasak.",
      joined: 12,
      total: 20,
    },
    {
      id: 4,
      name: "Bangun Asrama Santri Penghafal Al Qur’an ",
      left: "sisa 5 hari",
      lokasi: "Semarang, Jawa Tengah",
      category: "Sosial",
      image: "../src/assets/images/photos/relawan/relawan4.png",
      description:
        "Belum memiliki asrama, santri penghafal quran tidur di aula....",
      joined: 8,
      total: 12,
    },
    {
      id: 5,
      name: "Panen Pahala jariyah, Sedekah Alat Sholat",
      left: "sisa 10 hari",
      lokasi: "Demak , Jawa Tengah",
      category: "Sosial",
      image: "../src/assets/images/photos/relawan/relawan5.png",
      description:
        "Bagaimana bisa beribadah dengan khusyuk jika alat sholat masih lusuh? Yuk, bantu!",
      joined: 14,
      total: 25,
    },
    {
      id: 6,
      name: "Yuk , Muliakan Anak yatim Sekarang!k",
      left: "sisa 3 hari",
      lokasi: "Banyuwangi, Jawa Timur",
      category: "Sosial",
      image: "../src/assets/images/photos/relawan/relawan6.png",
      description:
        "Kirim 1000 kado yatim untuk anak yatim di seluruh Indonesia",
      joined: 9,
      total: 15,
    },
  ];

  // Mencari relawan berdasarkan id
  const RelawanData = relawan.find((relawan) => relawan.id === parseInt(id));

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <div className="sticky top-0 z-50 w-full md:w-[calc(100%-16rem)] ml-0 md:ml-64 bg-white shadow-md">
        <NavbarBeranda />
      </div>

      {/* Konten Utama */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <div
          className={`${
            isSidebarOpen ? "block" : "hidden"
          } md:block w-full md:w-64 bg-gray-200 h-screen fixed md:static top-0 left-0 z-50 transition-transform`}
        >
          <Sidebar />
        </div>

        {/* Konten Detail Relawan */}
        <div className="flex-1 p-4 bg-gray-100">
          {/* Breadcrumb */}
          <div className="text-sm text-gray-500 mb-4">
            Beranda / Relawan /{" "}
            <span className="text-gray-800 font-semibold">Detail Program</span>
          </div>

          {/* Konten Relawan */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Konten Relawan (Kiri) */}
            <div className="flex-1 lg:w-2/3 bg-white p-6 rounded-lg shadow-md">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {RelawanData.name}
              </h1>
              <h3 className="text-2xl text-gray-900 mb-4">
                {RelawanData.role}
              </h3>
              <p className="text-sm text-gray-500 mb-4">{RelawanData.date}</p>
              <div className="mt-6">
                <a
                  href="/daftar-relawan"
                  className="px-6 py-3 bg-custom-green text-white rounded-md hover:bg-custom-green-dark"
                >
                  Daftar Sebagai Relawan
                </a>
              </div>
              <img
                src={RelawanData.image}
                alt={RelawanData.name}
                className="my-6 w-full h-auto rounded-lg"
              />
              <p className="text-lg text-gray-700 mt-6">
                {RelawanData.description}
              </p>
            </div>

            {/* Sidebar Donasi atau Tombol Daftar */}
            <div className="lg:w-1/3 p-6 bg-white rounded-lg shadow-md">
              <div className="p-6 mb-6">
                <h2 className="text-lg font-bold text-black mb-4">
                  Informasi Program
                </h2>
                <ul className="text-sm text-black mb-4">
                  <li>
                    <span className="font-bold">📍 Lokasi: </span>Palu, Sulawesi
                    Tengah
                  </li>
                  <li>
                    <span className="font-bold">📅 Tanggal: </span>1 - 4
                    Desember 2024
                  </li>
                </ul>
                <h3 className="text-md font-bold text-black mb-2">
                  Benefit yang bisa kamu dapat
                </h3>
                <ul className="text-sm text-black mb-4 space-y-2">
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-custom-green mr-2" />
                    Mendapat sertifikat
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-custom-green mr-2" />
                    Mengembangkan soft skill
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-custom-green mr-2" />
                    Memperoleh pengalaman baru
                  </li>
                </ul>
                {/* Tombol Daftar */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footerberanda />
    </div>
  );
};

export default DetailRelawan;
