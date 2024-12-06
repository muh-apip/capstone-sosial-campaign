import React, { useState } from "react";
import NavbarHome from "../Layout/NavbarHome";
import FooterHome from "../Layout/FooterHome";

const Artikel = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const articles = [
    {
      id: 1,
      title: "Bank Sampah Jadi Berkah",
      category: "LINGKUNGAN",
      description: "Bank sampah sebagai solusi lingkungan dan ekonomi.",
      date: "27 Desember 2024",
      image: "/img/artikel1.png",
    },
    {
      id: 2,
      title: "Komunitas untuk Kemanusiaan",
      category: "SOSIAL",
      description: "Kisah solidaritas dalam membantu korban bencana.",
      date: "24 Desember 2024",
      image: "/img/artikel2.jpeg",
    },
    {
      id: 3,
      title: "Energi Surya untuk Desa",
      category: "LINGKUNGAN",
      description:
        "Pemanfaatan tenaga surya untuk mendukung kebutuhan warga desa.",
      date: "26 Desember 2024",
      image: "/img/artikel3.png",
    },
    {
      id: 4,
      title: "Erupsi Gunung Berapi",
      category: "LINGKUNGAN",
      description: "Kekuatan alam akan membawa dampak besar.",
      date: "27 Desember 2024",
      image: "/img/artikel4.jpeg", // Ganti dengan path gambar yang sesuai
    },
    {
      id: 5,
      title: "Bersatu Untuk Bumi",
      category: "LINGKUNGAN",
      description: "Membangun dunia yang lebih hijau dan inklusif.",
      date: "24 Desember 2024",
      image: "/img/artikel5.jpeg", // Ganti dengan path gambar yang sesuai
    },
    {
      id: 6,
      title: "Membangun Keadilan Sosial",
      category: "Sosial",
      description:
        "Peran kita dalam menciptakan masyarakat yang inklusif dan adil.",
      date: "26 Desember 2024",
      image: "/img/artikel6.jpeg", // Ganti dengan path gambar yang sesuai
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <div className="sticky top-0 z-50 w-full bg-white shadow-md">
        <NavbarHome />
      </div>

      {/* Konten Utama */}
      <div className="flex flex-1">
        {/* Konten Artikel */}
        <div className="flex-1 p-4 bg-gray-100">
          {/* Breadcrumb */}
          <div className="text-sm text-gray-500 mb-4">
            Beranda /{" "}
            <span className="text-gray-800 font-semibold">Artikel</span>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap space-x-2 mb-8">
            <button className="px-4 py-2 bg-custom-green text-white rounded-md hover:bg-custom-green-dark">
              Semua
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">
              Sosial
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">
              Lingkungan
            </button>
          </div>

          {/* Grid Artikel */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {articles.map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="h-52 w-full object-cover"
                />
                <div className="p-6">
                  <p className="text-sm font-bold text-custom-green tracking-wider uppercase">
                    {article.category}
                  </p>
                  <h2 className="text-lg font-semibold text-gray-800 mt-2">
                    {article.title}
                  </h2>
                  <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                    {article.description}
                  </p>
                  <div className="mt-4 flex justify-between items-center">
                    <a
                      href="#"
                      className="text-sm font-semibold text-custom-green hover:underline"
                    >
                      Selengkapnya &rarr;
                    </a>
                    <span className="text-xs text-gray-500">
                      {article.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <FooterHome />
    </div>
  );
};

export default Artikel;
