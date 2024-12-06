import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavbarHome from "../Layout/NavbarHome";
import FooterHome from "../Layout/FooterHome";

const Artikel = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

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
      image: "/img/artikel4.jpeg",
    },
    {
      id: 5,
      title: "Bersatu Untuk Bumi",
      category: "LINGKUNGAN",
      description: "Membangun dunia yang lebih hijau dan inklusif.",
      date: "24 Desember 2024",
      image: "/img/artikel5.jpeg",
    },
    {
      id: 6,
      title: "Membangun Keadilan Sosial",
      category: "SOSIAL",
      description:
        "Peran kita dalam menciptakan masyarakat yang inklusif dan adil.",
      date: "26 Desember 2024",
      image: "/img/artikel6.jpeg",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Navbar */}
      <div className="sticky top-0 z-50 w-full bg-white shadow-md">
        <NavbarHome />
      </div>

      {/* Konten Utama */}
      <div className="flex flex-1 px-4 py-6 sm:px-6 lg:px-8">
        {/* Konten Artikel */}
        <div className="flex-1">
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2 mb-8">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {articles.map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer"
                onClick={() => navigate(`/artikel/${article.id}`)}
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="h-48 w-full object-cover"
                />
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {article.title}
                  </h3>
                  <p className="text-sm font-bold text-custom-green tracking-wider uppercase">
                    {article.category}
                  </p>
                  <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                    {article.description}
                  </p>
                  {/* Horizontal Line Above Date */}
                  <hr className="my-2 border-t-2 border-gray-100" />
                  <div className="mt-4 flex justify-between items-center">
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
