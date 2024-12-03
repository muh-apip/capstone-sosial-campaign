import React, { useState } from "react";
import NavbarBeranda from "../layout/NavbarBeranda";
import Sidebar from "../layout/Sidebar";
import Footerberanda from "../layout/Footerberanda";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Home = () => {
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
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <div className="sticky top-0 z-50 w-full md:w-[calc(100%-16rem)] ml-0 md:ml-64 bg-white shadow-md">
        <NavbarBeranda />
      </div>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <div
          className={`${
            isSidebarOpen ? "block" : "hidden"
          } md:block w-full md:w-64 bg-gray-200 h-screen fixed md:static top-0 left-0 z-50 transition-transform`}
        >
          <Sidebar />
        </div>

        {/* Content Area */}
        <div className="flex-1 p-4 bg-gray-100">
          {/* Hero Section */}
          <div className="bg-custom-green text-white rounded-lg p-6 mb-8 flex flex-wrap items-center justify-between lg:justify-center shadow-lg relative overflow-hidden">
            <div className="relative w-full lg:w-1/4 flex justify-center mb-6 lg:mb-0 lg:justify-start">
              <img
                src="/img/homeSection.png"
                alt="Relawan Kiri"
                className="absolute aspect-square w-[150px] sm:w-[200px] lg:w-[315px] lg:left-[-115px] lg:top-[-148px] rounded-full border-8 border-white object-cover shadow-xl hidden lg:block"
              />
            </div>
            <div className="w-full lg:w-1/2 text-center lg:text-left mb-6 lg:mb-0">
              <h1 className="text-xl sm:text-2xl lg:text-4xl font-semibold mb-4">
                Daftar Relawan Sekarang,
                <br /> Gratis untuk Semua!
              </h1>
              <p className="text-sm sm:text-base lg:text-lg font-normal mb-6">
                Dapatkan pengalaman bermakna, perluas jaringan, dan jadilah
                bagian dari aksi nyata untuk bumi.
              </p>
              <button className="px-6 py-2 bg-[#275929] text-base font-semibold rounded-md hover:bg-[#63ab65] transition duration-300">
                Ambil Peranmu
                <ArrowForwardIosIcon
                  className="ml-1 sm:ml-2"
                  fontSize="small"
                />
              </button>
            </div>
            <div className="relative w-full lg:w-1/4 flex justify-center lg:justify-end">
              <img
                src="/img/homeSection2.png"
                alt="Relawan Kanan"
                className="absolute w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] lg:w-72 lg:h-72 lg:top-[-120px] lg:right-[-110px] border-8 border-white object-cover shadow-md transform rotate-[-15deg] hidden lg:block"
              />
            </div>
          </div>

          {/* Article Section */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-800">
              Artikel yang mungkin kamu suka
            </h2>
            <button className="text-lg font-normal text-[#0C81DF] hover:text-blue-500">
              Selengkapnya
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {articles.map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 relative"
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
                  <h3 className="text-lg font-semibold text-gray-800 mt-2">
                    {article.title}
                  </h3>
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
      <Footerberanda />
    </div>
  );
};

export default Home;
