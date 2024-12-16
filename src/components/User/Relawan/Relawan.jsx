import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import NavbarHome from "../Layout/NavbarHome";
import FooterHome from "../Layout/FooterHome";

const Relawan = () => {
  const [relawanData, setRelawanData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6; // Atur jumlah item per halaman
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRelawan = async () => {
      setIsLoading(true);
      try {
        const token = localStorage.getItem("token"); // Jika perlu autentikasi
        if (!token) {
          throw new Error("Token not found");
        }

        const response = await axios.get(
          "https://relawanku.xyz/api/v1/user/programs",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("API Response:", response.data); // Pastikan format data benar
        setRelawanData(response.data.data || []); // Menyimpan data yang berhasil diambil
      } catch (err) {
        console.error("Error fetching data", err);
        setError(err.response?.data?.message || "Failed to fetch data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchRelawan();
  }, []); // Dependency array kosong berarti hanya dijalankan sekali saat komponen pertama kali dimuat

  // Filter relawan berdasarkan kategori
  const categories = ["all", ...new Set(relawanData.map((r) => r.category))];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredRelawan =
    selectedCategory === "all"
      ? relawanData
      : relawanData.filter((relawan) => relawan.category === selectedCategory);

  // Pagination logic
  const indexOfLastRelawan = currentPage * articlesPerPage;
  const indexOfFirstRelawan = indexOfLastRelawan - articlesPerPage;
  const currentRelawan = filteredRelawan.slice(
    indexOfFirstRelawan,
    indexOfLastRelawan
  );
  const totalPages = Math.ceil(filteredRelawan.length / articlesPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Navbar */}
      <div className="sticky top-0 z-50 w-full bg-white shadow-md">
        <NavbarHome />
      </div>

      {/* Konten Utama */}
      <div className="flex flex-1 px-4 py-6 sm:px-6 lg:px-8">
        {/* Konten Relawan */}
        <div className="flex-1">
          {/* Judul Halaman */}
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Relawan Kami
          </h1>

          {/* Filter Kategori */}
          <div className="flex flex-wrap space-x-4 mb-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-2 rounded-md text-sm ${
                  selectedCategory === category
                    ? "bg-custom-green text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {category === "all" ? "Semua" : category}
              </button>
            ))}
          </div>

          {/* Daftar Relawan */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {isLoading ? (
              <p>Loading data...</p>
            ) : error ? (
              <p className="text-red-500">{error}</p>
            ) : currentRelawan.length === 0 ? (
              <p>No volunteers found</p>
            ) : (
              currentRelawan.map((relawan) => (
                <div
                  key={relawan.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer"
                  onClick={() => navigate(`/relawan/${relawan.ID}`)}
                >
                  <img
                    src={relawan.image_url || "/path/to/default-image.png"}
                    alt={relawan.name}
                    className="h-52 w-full object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {relawan.title || "Volunteer Name"}
                    </h3>
                    <div className="flex justify-between">
                      <p className="text-sm text-gray-500 mb-5">
                        {relawan.location || "Location"}
                      </p>
                      <p className="text-sm text-gray-500 mb-5">
                        {relawan.end_date || "Location"}
                      </p>
                    </div>

                    <p className="text-sm text-gray-600">{relawan.details}</p>

                    <p className="text-sm text-blue-600 mt-7">
                      {" "}
                      <strong>
                        {"     "}Anggota yang di tersisa{" "}
                        {relawan.quota || "N/A"}
                      </strong>
                    </p>
                  </div>
                </div>
              ))
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
      </div>

      {/* Footer */}
      <FooterHome />
    </div>
  );
};

export default Relawan;
