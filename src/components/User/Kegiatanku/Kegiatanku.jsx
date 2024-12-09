import React, { useState } from "react";
import NavbarHome from "../Layout/NavbarHome";
import FooterHome from "../Layout/FooterHome";
import { Link, useNavigate } from "react-router-dom";

const activities = [
  {
    id: 1,
    title: "Solidaritas Bantu Korban Banjir & Longsor",
    location: "Palu, Sulawesi Tengah",
    daysLeft: "7",
    description:
      "Ribuan warga terdampak hingga harus kehilangan nyawa. Ayo bantu segera!",
    image: "/img/kegiatanku1.png",
  },
  {
    id: 2,
    title: "Solidaritas Bantu Korban Gempa",
    location: "Lombok, Nusa Tenggara Barat",
    daysLeft: "5",
    description:
      "Gempa bumi melanda dan merusak ribuan rumah. Bantuan Anda sangat berarti!",
    image: "/img/kegiatanku1.png",
  },
  {
    id: 3,
    title: "Solidaritas Bantu Korban Kebakaran Hutan",
    location: "Kalimantan Tengah",
    daysLeft: "3",
    description:
      "Kebakaran hutan mengancam satwa liar dan warga. Ayo bantu memulihkan lingkungan!",
    image: "/img/kegiatanku1.png",
  },
  {
    id: 4,
    title: "Bantu Penyediaan Air Bersih",
    location: "Kupang, Nusa Tenggara Timur",
    daysLeft: "10",
    description:
      "Akses air bersih terbatas bagi warga. Mari bergabung untuk mendukung kebutuhan dasar mereka!",
    image: "/img/kegiatanku1.png",
  },
  {
    id: 5,
    title: "Solidaritas Bantu Korban Tsunami",
    location: "Banten, Jawa Barat",
    daysLeft: "4",
    description:
      "Tsunami melanda dan banyak warga kehilangan tempat tinggal. Ayo bantu mereka bangkit kembali!",
    image: "/img/kegiatanku1.png",
  },
  {
    id: 6,
    title: "Donasi Pangan untuk Korban Kekeringan",
    location: "Sumbawa, Nusa Tenggara Barat",
    daysLeft: "6",
    description:
      "Kekeringan melanda, dan kebutuhan pangan menjadi mendesak. Mari berbagi kebaikan!",
    image: "/img/kegiatanku1.png",
  },
];

const Kegiatanku = () => {
  const [selectedActivity, setSelectedActivity] = useState(null);
  const navigate = useNavigate();

  const handlePresensiClick = () => {
    navigate("/presensi-kegiatan");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Navbar */}
      <div className="sticky top-0 z-50 w-full bg-white shadow-md">
        <NavbarHome />
      </div>

      <div className="flex flex-1 p-6 space-x-6">
        {/* Sidebar kiri */}
        <div className="w-1/3 bg-white rounded-lg shadow-md p-4 overflow-y-auto">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="bg-white border rounded-lg overflow-hidden shadow-sm mb-4 cursor-pointer transition-transform transform hover:scale-105"
              onClick={() => setSelectedActivity(activity)}
            >
              <img
                src={activity.image || "/img/default.png"}
                alt={activity.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-3">
                <h3 className="text-gray-800 font-bold">{activity.title}</h3>
                <p className="text-gray-500 text-sm">{activity.location}</p>
                <p className="text-gray-600 text-sm mt-2">
                  {activity.description}
                </p>
                <div className="flex justify-end mt-3">
                  <p className="text-red-500 text-sm font-semibold">
                    Sisa hari {activity.daysLeft}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Kotak konten kanan */}
        <div
          className="relative bg-white rounded-lg shadow-md overflow-hidden"
          style={{ width: "859px", height: "587px" }}
        >
          {/* Header Hijau */}
          <div className="bg-custom-green p-4">
            <h3 className="text-white text-lg font-bold">
              {selectedActivity?.title || "Detail Kegiatan"}
            </h3>
          </div>

          {/* Konten Utama */}
          <div className="p-6 bg-white rounded-b-lg h-full">
            {selectedActivity ? (
              <>
                <div className="mt-6">
                  <h4 className="text-gray-700 font-bold mb-2">PRESENSI</h4>
                  <p className="text-gray-500 text-sm mb-4">
                    Jangan lupa untuk melakukan presensi setiap hari sebagai
                    syarat untuk memperoleh sertifikat.
                  </p>

                  <div className="space-y-4">
                    {[1, 2, 3, 4].map((day) => (
                      <div
                        key={day}
                        className="border rounded-lg p-4 flex justify-between items-center hover:bg-green-50 cursor-pointer"
                        onClick={handlePresensiClick}
                      >
                        <p className="text-gray-700 font-semibold">
                          Hari Ke-{day}
                          <span className="block text-sm text-gray-500">
                            {day} Desember 2024
                          </span>
                        </p>
                        <span className="text-green-600 font-bold text-lg">
                          ›
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <div className="flex items-center justify-center h-full">
                <p className="text-gray-500 text-center">
                  Silakan pilih aktivitas di sebelah kiri untuk melihat
                  detailnya.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <FooterHome />
    </div>
  );
};

export default Kegiatanku;
