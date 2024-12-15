import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import NavbarHome from "../Layout/NavbarHome";
import FooterHome from "../Layout/FooterHome";

const Artikel = () => {
  const [artikelData, setArtikelData] = useState([]);
  const [filteredArtikel, setFilteredArtikel] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filterCategory, setFilterCategory] = useState("Semua Program");
  const [selectedCategory, setSelectedCategory] = useState("all"); // Kategori yang dipilih
  const categories = ["all", "Lingkungan", "Sosial"];
  const navigate = useNavigate();

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
        setArtikelData(response.data.data || []);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch articles");
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticles();
  }, []);

  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredArtikel(artikelData);
    } else {
      setFilteredArtikel(
        artikelData.filter((artikel) => artikel.Category === selectedCategory)
      );
    }
  }, [selectedCategory, artikelData]);

  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArtikel.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(filteredArtikel.length / articlesPerPage);

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
          <div className="flex justify-between items-center mb-6">
            <div className="flex flex-wrap space-x-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)} // Ubah kategori yang dipilih
                  className={`px-4 py-2 rounded-full text-sm transition-all duration-300 shadow-md ${
                    selectedCategory === category
                      ? "bg-custom-green text-white font-medium hover:bg-green-600"
                      : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                  }`}
                >
                  {category === "all" ? "Semua" : category}
                </button>
              ))}
            </div>
          </div>

          {/* Grid Artikel */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {isLoading ? (
              <p>Loading articles...</p>
            ) : error ? (
              <p className="text-red-500">{error}</p>
            ) : currentArticles.length === 0 ? (
              <p>No articles found</p>
            ) : (
              currentArticles.map(
                ({ ID, Title, ImageUrl, Category, Content, CreatedAt }) => (
                  <div
                    key={ID}
                    className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer"
                    onClick={() => navigate(`/artikel/${ID}`)}
                  >
                    <img
                      src={ImageUrl || "/path/to/default-image.png"}
                      alt={Title}
                      className="h-48 w-full object-cover"
                    />
                    <div className="p-4 sm:p-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        {Title || "Article Title"}
                      </h3>
                      <p className="text-sm font-bold text-custom-green tracking-wider uppercase">
                        {Category || "No Category"}
                      </p>
                      <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                        {Content || "No content available"}
                      </p>
                      <hr className="my-2 border-t-2 border-gray-100" />
                      <div className="mt-4 flex justify-between items-center">
                        <span className="text-xs text-gray-500">
                          {new Date(CreatedAt).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>
                )
              )
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <FooterHome />
    </div>
  );
};

export default Artikel;
