import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Sidebar from "../Layout/Sidebar";
import Navbar from "../Layout/NavbarAdmin";
import axios from "axios";

const TambahArtikel = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    category: "",
    image_url: null,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const categories = ["Lingkungan", "Sosial"]; // Pilihan kategori

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image_url: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.title ||
      !formData.content ||
      !formData.category ||
      !formData.image_url
    ) {
      alert("Semua field wajib diisi!");
      return;
    }

    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Token tidak ditemukan. Silakan login kembali.");
      }

      // Siapkan FormData untuk mengirim file dan data lainnya
      const data = new FormData();
      data.append("title", formData.title);
      data.append("content", formData.content);
      data.append("category", formData.category);
      data.append("image_url", formData.image_url); // Gambar

      // Mengirim data ke API
      const response = await axios.post(
        "https://relawanku.xyz/api/v1/admin/article", // Ganti sesuai endpoint API Swagger
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data", // Header untuk FormData
          },
        }
      );

      if (response.status === 201) {
        alert("Artikel berhasil ditambahkan!");
        setFormData({
          title: "",
          content: "",
          category: "",
          image_url: null,
        });
        navigate("/artikel-admin"); // Navigasi ke tabel artikel
      }
    } catch (err) {
      console.error("Error submitting data:", err);
      alert(
        `Gagal menambahkan artikel: ${
          err.response?.data?.message || "Kesalahan tidak diketahui"
        }`
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <div className="sticky top-0 z-50 bg-white shadow-md">
          <Navbar />
        </div>
        <main className="flex-1 p-8 overflow-y-auto">
          <div className="text-sm text-gray-500 mb-6">
            <Link to="/dashboard" className="hover:text-gray-800">
              Dashboard
            </Link>{" "}
            /{" "}
            <Link to="/artikel-admin" className="hover:text-gray-800">
              Artikel
            </Link>{" "}
            / <span className="text-gray-800 font-semibold">Tambah Artikel</span>
          </div>
          <div className="p-8 bg-white shadow-md rounded-lg max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-gray-700">
              Tambah Artikel
            </h2>
            {error && <div className="text-red-500 mb-4">{error}</div>}
            <form onSubmit={handleSubmit}>
              {/* Kategori */}
              <div className="mb-6">
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Kategori
                </label>
                <select
                  id="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-green-500 px-4 py-2"
                >
                  <option value="">Pilih Kategori</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Judul */}
              <div className="mb-6">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Judul
                </label>
                <input
                  type="text"
                  id="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-green-500 px-4 py-2"
                  placeholder="Masukkan judul artikel"
                />
              </div>

              {/* Konten */}
              <div className="mb-6">
                <label
                  htmlFor="content"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Konten
                </label>
                <textarea
                  id="content"
                  rows="4"
                  value={formData.content}
                  onChange={handleChange}
                  className="block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-green-500 px-4 py-2"
                  placeholder="Masukkan konten artikel"
                ></textarea>
              </div>

              {/* Upload Gambar */}
              <div className="mb-6">
                <label
                  htmlFor="image_url"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Upload Gambar
                </label>
                <input
                  type="file"
                  id="image_url"
                  onChange={handleFileChange}
                  className="block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-green-500 px-4 py-2"
                />
              </div>

              {/* Tombol Simpan */}
              <div className="text-right">
                <button
                  type="submit"
                  className="px-6 py-2 bg-green-500 text-white rounded-md shadow hover:bg-green-600 focus:outline-none"
                  disabled={loading}
                >
                  {loading ? "Menyimpan..." : "Simpan"}
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default TambahArtikel;
