import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import NavbarDetail from "../Layout/NavbarDetail";
import FooterHome from "../Layout/FooterHome";

const DetailArtikel = () => {
  const { id } = useParams(); // Mengambil id artikel dari URL
  const navigate = useNavigate();

  const [articleData, setArticleData] = useState(null); // State untuk menyimpan data artikel
  const [isLoading, setIsLoading] = useState(true); // State untuk loading
  const [error, setError] = useState(null); // State untuk error handling
  const [relatedArticles, setRelatedArticles] = useState([]); // Gunakan array kosong

  // Fetch detail artikel utama
  useEffect(() => {
    const fetchArticleData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("Token not found");
        }

        const response = await axios.get(
          `https://relawanku.xyz/api/v1/user/articles/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setArticleData(response.data); // Menyimpan data artikel utama
      } catch (err) {
        console.error("Failed to fetch article data", err);
        setError("Failed to load article");
      } finally {
        setIsLoading(false); // Matikan loading di akhir
      }
    };

    fetchArticleData();
  }, [id]);

  // Fetch artikel terkait
  useEffect(() => {
    const fetchRelatedArticles = async () => {
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

        const data = response.data;
        setRelatedArticles(Array.isArray(data) ? data : []); // Pastikan selalu array
      } catch (err) {
        console.error("Failed to fetch related articles", err);
        setRelatedArticles([]); // Set ke array kosong jika error
      }
    };

    fetchRelatedArticles();
  }, []);

  // Tampilkan loading atau error jika diperlukan
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Navbar */}
      <div className="sticky top-0 z-50 w-full bg-white shadow-md">
        <NavbarDetail />
      </div>

      {/* Artikel Content */}
      <div className="flex-1 px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Artikel Content (Kiri) */}
          <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {articleData?.Title || "Article Title"}
            </h1>
            <h3 className="text-2xl text-gray-900 mb-4">
              {articleData?.Category || "Category"}
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              {new Date(articleData?.CreatedAt).toLocaleDateString("id-ID") ||
                "Creation Date"}
            </p>
            <img
              src={articleData?.ImageUrl || "/path/to/default-image.png"}
              alt={articleData?.Title || "Article Image"}
              className="my-6 w-full h-auto rounded-lg"
            />
            <p className="text-lg text-gray-700">
              {articleData?.Content || "No content available"}
            </p>
          </div>

          {/* Sidebar Donasi (Kanannya) */}
          <div className="lg:col-span-1 p-4 bg-white rounded-lg shadow-md">
            <div className="mb-6">
              <p className="text-sm text-black mb-4">
                Ingin membantu mereka yang terkena bencana? Mulailah dengan
                berdonasi untuk meringankan beban mereka.
              </p>

              {/* Donasi (Placeholder untuk Komponen Dinamis) */}
              <div className="bg-white p-4 rounded-lg shadow-md mb-6">
                <img
                  src="../src/assets/images/photos/Donasi1.png"
                  alt="Donasi"
                  className="w-full h-48 object-cover rounded-t-lg mb-4"
                />
                <p className="text-xl text-black font-bold mb-2">
                  Bantu Warga Terdampak Erupsi Gunung
                </p>
                <p className="text-sm text-black mb-2">
                  {new Date(articleData?.CreatedAt).toLocaleDateString(
                    "id-ID"
                  ) || "Donation Date"}
                </p>
                <p className="text-sm text-gray-500 mb-6">
                  10.295 warga terdampak, ratusan rumah rusak. Ayo bantu segera!
                </p>
                <button
                  onClick={() => navigate("/donasi")}
                  className="text-lg text-blue-500 font-bold hover:underline"
                >
                  Detail Donasi &gt;
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Grid Artikel Terkait */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Artikel Terkait
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {relatedArticles.length === 0 ? (
              <p>No related articles found</p>
            ) : (
              relatedArticles.map(
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

      <FooterHome />
    </div>
  );
};

export default DetailArtikel;
