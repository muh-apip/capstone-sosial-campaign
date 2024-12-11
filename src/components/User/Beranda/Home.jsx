import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import NavbarHome from "../Layout/NavbarHome";
import FooterHome from "../Layout/FooterHome";

const Home = () => {
  const navigate = useNavigate();

  // Data artikel
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
      title: "Teknologi Hijau Masa Depan",
      category: "TEKNOLOGI",
      description: "Inovasi teknologi ramah lingkungan.",
      date: "23 Desember 2024",
      image: "/img/artikel3.png",
    },
    {
      id: 5,
      title: "Aksi Bersama: Gerakan Zero Waste",
      category: "LINGKUNGAN",
      description: "Gerakan untuk mengurangi sampah dan menjaga bumi.",
      date: "22 Desember 2024",
      image: "/img/artikel1.png",
    },
    {
      id: 6,
      title: "Sampah Plastik Menjadi Energi",
      category: "LINGKUNGAN",
      description: "Pemanfaatan sampah plastik untuk energi alternatif.",
      date: "21 Desember 2024",
      image: "/img/artikel1.png",
    },
    // Tambahkan lebih banyak artikel
  ];

  const popularArticles = [
    { title: "Teknologi dan Empati", date: "1 Desember 2024" },
    { title: "Kota Hijau untuk Semua", date: "25 November 2024" },
    { title: "Energi Terbarukan untuk Masa Depan", date: "18 November 2024" },
    { title: "Aksi Bersama: Gerakan Zero Waste", date: "3 November 2024" },
    { title: "Dampak Sosial Sampah", date: "28 Oktober 2024" },
    { title: "Hutan Kota: Paru-Paru di Tengah Beton", date: "26 Oktober 2024" },
    { title: "Mengubah Sampah Menjadi Emas", date: "30 Agustus 2024" },
  ];

  // State untuk pagination
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 4; // Jumlah artikel per halaman

  // Hitung index artikel saat ini
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  // Fungsi untuk mengganti halaman
  const goToNextPage = () => {
    if (currentPage < Math.ceil(articles.length / articlesPerPage)) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <div className="sticky top-0 z-50 w-full bg-white shadow-md">
        <NavbarHome />
      </div>

      {/* Main Content */}
      <div className="flex-1 px-4 sm:px-8 md:px-16 bg-white mt-8 mb-8">
        {/* Hero Section */}
        <Swiper
          className="h-auto mb-8"
          modules={[Autoplay]}
          autoplay={{ delay: 5000 }}
          loop
        >
          <SwiperSlide>
            <div className="bg-custom-green text-white rounded-lg p-6 sm:p-10 flex flex-wrap items-center justify-between lg:justify-center shadow-lg relative overflow-hidden min-h-[300px]">
              <div className="relative w-full lg:w-1/4 flex justify-center mb-6 lg:mb-0 lg:justify-start">
                <img
                  src="/img/beranda/homeSection.png"
                  alt="Relawan Kiri"
                  className="absolute aspect-square w-[150px] sm:w-[200px] lg:w-[400px] lg:left-[-150px] lg:top-[-165px] rounded-full border-8 border-white object-cover shadow-xl hidden lg:block"
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
              </div>
              <div className="relative w-full lg:w-1/4 flex justify-center lg:justify-end">
                <img
                  src="/img/beranda/homeSection2.png"
                  alt="Relawan Kanan"
                  className="absolute w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] lg:w-72 lg:h-72 lg:top-[-120px] lg:right-[-110px] border-8 border-white object-cover shadow-md transform rotate-[-15deg] hidden lg:block"
                />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-[#0A6BB8] text-white rounded-lg p-6 sm:p-10 flex flex-wrap items-center justify-between lg:justify-center shadow-lg relative overflow-hidden min-h-[300px]">
              <div className="relative w-full lg:w-1/4 flex justify-center mb-6 lg:mb-0 lg:justify-start">
                <img
                  src="/img/beranda/homeSection3.png"
                  alt="Relawan Kiri"
                  className="absolute aspect-square w-[150px] sm:w-[200px] lg:w-[400px] lg:left-[-150px] lg:top-[-165px] rounded-full border-8 border-white object-cover shadow-xl hidden lg:block"
                />
              </div>
              <div className="w-full lg:w-1/2 text-center lg:text-left mb-6 lg:mb-0">
                <h1 className="text-xl sm:text-2xl lg:text-4xl font-semibold mb-4">
                  Berikan Dukunganmu, Wujudkan Harapan!
                </h1>
                <p className="text-sm sm:text-base lg:text-lg font-normal mb-6">
                  Setiap donasi kecil memiliki dampak besar untuk mereka yang
                  membutuhkan.
                </p>
              </div>
              <div className="relative w-full lg:w-1/4 flex justify-center lg:justify-end">
                <img
                  src="/img/beranda/homeSection4.png"
                  alt="Relawan Kanan"
                  className="absolute w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] lg:w-72 lg:h-72 lg:top-[-120px] lg:right-[-110px] border-8 border-white object-cover shadow-md transform rotate-[-15deg] hidden lg:block"
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* Article Section */}
        {/* Artikel yang Kamu Suka dan Artikel Populer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Artikel yang Kamu Suka */}
          <div className="md:col-span-2 bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-6">
              Artikel yang Mungkin Kamu Suka
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {currentArticles.map((article) => (
                <div
                  key={article.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer"
                  onClick={() => navigate(`/artikel/${article.id}`)}
                >
                  <img
                    src={article.image}
                    alt={`Gambar artikel ${article.title}`}
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {article.title}
                    </h3>
                    <p className="text-sm font-light text-gray-600 tracking-wider uppercase">
                      {article.category}
                    </p>
                    <p className="text-base text-gray-600 mt-2 line-clamp-2">
                      {article.description}
                    </p>
                    <hr className="my-2 border-t-2 border-gray-100" />
                    <span className="text-xs text-gray-500">
                      {article.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-between mt-6">
              <button
                onClick={goToPreviousPage}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-lg shadow ${
                  currentPage === 1
                    ? "bg-gray-300"
                    : "bg-custom-green text-white"
                }`}
              >
                Previous
              </button>
              <button
                onClick={goToNextPage}
                disabled={
                  currentPage === Math.ceil(articles.length / articlesPerPage)
                }
                className={`px-4 py-2 rounded-lg shadow ${
                  currentPage === Math.ceil(articles.length / articlesPerPage)
                    ? "bg-gray-300"
                    : "bg-custom-green text-white"
                }`}
              >
                Next
              </button>
            </div>
          </div>

          {/* Artikel Populer */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-6 border-b pb-2">
              Artikel Populer
            </h2>
            {popularArticles.map((article, index) => (
              <div
                key={index}
                className="flex items-start mb-6 border-b pb-4 last:border-b-0"
              >
                <span className="text-3xl font-bold text-gray-400 mr-6">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-base font-medium text-gray-800">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-500">{article.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8">
        {" "}
        {/* Tambahkan margin atas pada footer jika diperlukan */}
        <FooterHome />
      </div>
    </div>
  );
};

export default Home;
