import React, { useState } from "react";
import NavbarBeranda from "../layout/NavbarBeranda"; // Pastikan path sesuai dengan lokasi NavbarBeranda
import Sidebar from "../layout/Sidebar"; // Pastikan path sesuai dengan lokasi Sidebar
import Footer from "../layout/Footerberanda"; // Pastikan path sesuai dengan lokasi Footer
import Footerberanda from "../layout/Footerberanda";

const DetailArtikel = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

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

        {/* Artikel Utama */}
        <div className="flex-1 p-4 bg-gray-100">
          {/* Breadcrumb */}
          <div className="text-sm text-gray-500 mb-4">
            Beranda / <span className="text-gray-800 font-semibold">Artikel</span>
          </div>

          {/* Detail Artikel */}
          <div className="lg:w-2/3 shadow-md p-6 bg-white rounded-lg">
            <h1 className="text-2xl font-bold mb-2">Komunitas Untuk Kemanusiaan</h1>
            <p className="text-sm text-gray-500 mb-4">Kisah solidaritas dalam membantu korban bencana.</p>
            <p className="text-sm text-gray-500 mb-6">24 Desember 2024</p>
            <img
              src="https://via.placeholder.com/800x400"
              alt="Komunitas"
              className="rounded-lg w-full h-auto mb-6"
            />
            <p className="text-gray-700 leading-relaxed mb-6">
              Bencana alam sering kali datang tanpa peringatan, membawa kehancuran dan kesedihan bagi banyak orang.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Begitu pula ketika gunung berapi meletus, desa-desa di sekitar zona bahaya sering kali dihadapkan pada tantangan besar.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Ketika tsunami menghantam suatu wilayah, gelombang bantuan dari seluruh dunia pun datang.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footerberanda />
    </div>
  );
};

export default DetailArtikel;
