import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import NavbarHome from "../Layout/NavbarHome";
import FooterHome from "../Layout/FooterHome";

const Artikel = () => {
  const [artikelData, setArtikelData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
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
  const articlesPerPage = 6;

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
          {/* Grid Artikel */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {isLoading ? (
              <p>Loading articles...</p>
            ) : error ? (
              <p className="text-red-500">{error}</p>
            ) : currentArticles.length === 0 ? (
              <p>No articles found</p>
            ) : (
              currentArticles.map(({ ID, Title, ImageUrl, Category, Content, CreatedAt }) => (
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

export default Artikel;
