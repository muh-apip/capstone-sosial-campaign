import React from "react";
import Sidebar from "../layout/Sidebar"; // Pastikan path sesuai dengan lokasi Sidebar
import Footer from "../layout/Footerberanda";   // Pastikan path sesuai dengan lokasi Footer

const DetailArtikel = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Bagian Konten Utama */}
      <div className="flex flex-col lg:flex-row">
        {/* Sidebar */}
        <Sidebar />

        {/* Artikel Utama */}
        <div className="flex-1 container mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <nav className="text-sm mb-6">
            <a href="/" className="text-black font-bold hover:underline">
              Beranda
            </a>{" "}
            &gt;{" "}
            <a href="/artikel" className="text-black font-bold hover:underline">
              Artikel
            </a>{" "}
            &gt; <span className="text-black font-bold">Detail Artikel</span>
          </nav>

          <div className="lg:w-2/3 shadow-md p-6">
            <h1 className="text-2xl font-bold mb-2">Komunitas Untuk Kemanusiaan</h1>
            <p className="text-sm text-gray-500 mb-4">Kisah solidaritas dalam membantu korban bencana.</p>
            <p className="text-sm text-gray-500 mb-6">24 Desember 2024</p>
            <img
              src="https://via.placeholder.com/800x400"
              alt="Komunitas"
              className="rounded-lg w-full h-auto mb-6"
            />
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Bencana alam sering kali datang tanpa peringatan, membawa kehancuran dan kesedihan bagi banyak orang.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Begitu pula ketika gunung berapi meletus, desa-desa di sekitar zona bahaya sering kali dihadapkan pada tantangan besar.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Ketika tsunami menghantam suatu wilayah, gelombang bantuan dari seluruh dunia pun datang.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default DetailArtikel;
