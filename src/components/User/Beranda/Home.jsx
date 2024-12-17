import React, { useState, useEffect } from "react"; // Import useEffect
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios for API calls
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import NavbarHome from "../Layout/NavbarHome";
import FooterHome from "../Layout/FooterHome";

const Home = () => {
  const navigate = useNavigate();

  const [artikelData, setArtikelData] = useState([]);
  const [popularArticles, setPopularArticles] = useState([]); // State untuk artikel populer
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      setIsLoading(true);
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("Token not found");
        }
        const response = await axios.get(
          "https://relawanku.xyz/api/v1/user/articles",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("API Response:", response.data); // Pastikan format data benar
        setArtikelData(response.data.data || []); // Pastikan format sesuai API
      } catch (err) {
        console.error("Error fetching articles", err);
        setError(err.response?.data?.message || "Failed to fetch articles");
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 4;

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = artikelData.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(artikelData.length / articlesPerPage);

   // Fetch Artikel Populer (Trending)
   useEffect(() => {
    const fetchTrendingArticles = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("Token not found");
        }
        const response = await axios.get(
          "https://relawanku.xyz/api/v1/user/article-trending",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setPopularArticles(response.data.data || []);
      } catch (err) {
        console.error("Error fetching trending articles", err);
      }
    };

    fetchTrendingArticles();
  }, []);

  return (
    <div className="flex max-w-[1920px] max-h-[1080px] flex-col min-h-screen mx-auto h-full">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Artikel yang Kamu Suka */}
          <div className="md:col-span-2 bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-6">
              Artikel yang Mungkin Kamu Suka
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {currentArticles.length === 0 ? (
                <p>No articles available</p>
              ) : (
                currentArticles.map(
                  ({ ID, Title, ImageUrl, Category, Content, CreatedAt, View }) => (
                    <div
                      key={ID} // Gunakan ID sebagai key
                      className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer p-4" // Tambahkan padding di sini
                      onClick={() => navigate(`/artikel/${ID}`)} // Sesuaikan dengan ID
                    >
                      <img
                        src={ImageUrl || "/path/to/default-image.png"} // Sesuaikan nama properti
                        alt={`Gambar artikel ${Title}`}
                        className="h-48 w-full object-cover mb-4" // Tambahkan margin bawah untuk spasi dengan konten
                      />
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        {Title || "Article Title"}
                      </h3>
                      <p className="text-sm font-light text-gray-600 tracking-wider uppercase mb-2">
                        {Category || "No Category"}
                      </p>
                      <p className="text-base text-gray-600 mt-2 line-clamp-2 mb-4">
                        {Content || "No content available"}
                      </p>
                      <hr className="my-2 border-t-2 border-gray-100" />
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{new Date(CreatedAt).toLocaleDateString()}</span>
                        <span>
                          <i className="fas fa-eye mr-1"></i> {/* Ikon views (opsional) */}
                          {View} views
                        </span>
                      </div>
                    </div>
                  )
                )
                
              )}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-6 space-x-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  className={`px-4 py-2 rounded-lg shadow ${
                    currentPage === index + 1
                      ? "bg-custom-green text-white"
                      : "bg-gray-300 text-gray-600"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
          {/* Artikel Populer */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-6 border-b pb-2">
              Artikel Populer
            </h2>
            {popularArticles.length === 0 ? (
              <p className="text-gray-500">Loading popular articles...</p>
            ) : (
              popularArticles.map((article, index) => (
                <div
                  key={article.id}
                  className="flex items-start mb-6 border-b pb-4 last:border-b-0"
                >
                  <span className="text-3xl font-bold text-gray-400 mr-6">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-base font-medium text-gray-800">
                      {article.Title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {new Date(article.CreatedAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8">
        <FooterHome />
      </div>
    </div>
  );
};

export default Home;
