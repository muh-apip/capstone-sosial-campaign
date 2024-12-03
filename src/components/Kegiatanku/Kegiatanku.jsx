import React, { useState } from "react";
import NavbarBeranda from "../layout/NavbarBeranda";
import Sidebar from "../layout/Sidebar";
import Footerberanda from "../layout/Footerberanda";

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
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Untuk kontrol sidebar

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

        {/* Konten Aktivitas */}
        <div className="flex-1 flex">
          {/* Sidebar Aktivitas */}
          <div className="w-1/3 p-4 space-y-4">
            {activities.map((activity) => (
              <div
                key={activity.id}
                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
                onClick={() => setSelectedActivity(activity)}
              >
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-32 object-cover"
                />
                <div className="p-3">
                  <p className="text-gray-600 font-bold">{activity.title}</p>
                  <p className="text-sm text-gray-400">{activity.location}</p>
                  <p className="text-sm text-gray-600 mt-2">
                    {activity.description}
                  </p>
                  <div className="flex justify-end">
                    <p className="text-sm font-semibold text-red-500">
                      Sisa hari {activity.daysLeft}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Detail Panel */}
          <div className="w-2/3 flex items-center justify-center bg-white">
            {selectedActivity ? (
              <div className="absolute top-4 right-4 p-4 bg-gray-50 rounded-lg shadow-md w-1/4">
                <h2 className="text-lg font-bold text-red-600 mb-2">
                  {selectedActivity.title}
                </h2>
                <p className="text-gray-600 mb-2">
                  {selectedActivity.location}
                </p>
                <p className="text-sm text-gray-700 mb-4">
                  {selectedActivity.description}
                </p>
                <div className="flex justify-end">
                  <p className="text-sm font-semibold text-red-500">
                    Sisa hari {selectedActivity.daysLeft}
                  </p>
                </div>
              </div>
            ) : (
              <p className="text-gray-500 text-center">
                Silakan pilih aktivitas di sebelah kiri untuk melihat detailnya
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footerberanda />
    </div>
  );
};

export default Kegiatanku;
