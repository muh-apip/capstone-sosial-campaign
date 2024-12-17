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

  useEffect(() => {
    const fetchArticleData = async () => {
      setIsLoading(true);
      try {
        const token = localStorage.getItem("token"); // Pastikan token diambil dari localStorage
        if (!token) {
          throw new Error(
            "Token tidak ditemukan, silakan login terlebih dahulu."
          );
        }

        const response = await axios.get(
          `https://relawanku.xyz/api/v1/user/articles/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );
        if (response.data && response.data.data) {
          setArticleData(response.data.data); // Menyimpan data artikel
        } else {
          throw new Error("Data artikel tidak ditemukan.");
        }
      } catch (err) {
        console.error("Error fetching article data:", err.response || err);
        setError(
          err.response
            ? `Error: ${err.response.status} - ${err.response.data.message}`
            : "Gagal memuat data dari server."
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticleData();
  }, [id]);

  if (isLoading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 py-10">{error}</div>;
  }

  if (!articleData) {
    return (
      <div className="text-center py-10">Data artikel tidak ditemukan</div>
    );
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
              {articleData.title || "Article Title"}
            </h1>
            <h3 className="text-2xl text-gray-900 mb-4">
              {articleData.category || "Category"}
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              {new Date(articleData.created_at).toLocaleDateString("id-ID") ||
                "Creation Date"}
            </p>
            <img
              src={articleData.image_url || "/path/to/default-image.png"}
              alt={articleData.title || "Article Image"}
              className="my-6 w-full h-auto rounded-lg"
            />
            <p className="text-lg text-gray-700">
              {articleData.content || "No content available"}
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
                  Solidaritas Bantu Korban Banjir & Longsor
                </p>
                <p className="text-sm text-black mb-2">
                  {new Date(articleData.created_at).toLocaleDateString(
                    "id-ID"
                  ) || "Donation Date"}
                </p>
                <p className="text-sm text-gray-500 mb-6">
                  Ribuan warga terdampak hingga harus kehilangan nyawa. Ayo
                  bantu segera!
                </p>
                <button
                  onClick={() => navigate("/donasi")}
                  className="text-lg text-blue-500 font-bold hover:underline"
                >
                  Detail Donasi &gt;
                </button>
              </div>
              {/* Donasi (Placeholder untuk Komponen Dinamis) */}
              <div className="bg-white p-4 rounded-lg shadow-md mb-6">
                <img
                  src="/img/donasi4.png"
                  alt="Donasi"
                  className="w-full h-48 object-cover rounded-t-lg mb-4"
                />
                <p className="text-xl text-black font-bold mb-2">
                  Bantuan Modal, Pejuang mencari Nafkah
                </p>
                <p className="text-sm text-black mb-2">
                  {new Date(articleData.created_at).toLocaleDateString(
                    "id-ID"
                  ) || "Donation Date"}
                </p>
                <p className="text-sm text-gray-500 mb-6">
                  Berjuang hingga usia senja demi keluarga. Bantu kuatkan
                  pejuang keluarga mencari nafkah!
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
      </div>

      <FooterHome />
    </div>
  );
};

export default DetailArtikel;
