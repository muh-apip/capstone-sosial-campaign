import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Sidebar from "../Layout/Sidebar";
import NavbarAdmin from "../Layout/NavbarAdmin";
import axios from "axios";

const EditArtikel = () => {
  const { id } = useParams(); // Mendapatkan ID artikel dari URL
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    category: "",
    image_url: null,
    updated_at: "", // Tambahan sesuai dengan struktur API
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const categories = ["Lingkungan", "Sosial", "Teknologi"]; // Pilihan kategori

  useEffect(() => {
    const fetchArtikel = async () => {
      try {
        const response = await axios.get(`/api/artikel/${id}`); // Ganti dengan endpoint API
        const data = response.data;
        setFormData({
          title: data.title,
          content: data.content,
          category: data.category,
          image_url: null, // Gambar biasanya tidak langsung diedit
          updated_at: new Date().toISOString(), // Set nilai default updated_at
        });
      } catch (err) {
        console.error("Gagal memuat artikel:", err);
        setError("Gagal memuat artikel. Silakan coba lagi.");
      }
    };

    fetchArtikel();
  }, [id]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image_url: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title || !formData.content || !formData.category) {
      alert("Semua field wajib diisi!");
      return;
    }

    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Token tidak ditemukan. Silakan login kembali.");
      }

      const data = new FormData();
      data.append("title", formData.title);
      data.append("content", formData.content);
      data.append("category", formData.category);
      data.append("updated_at", new Date().toISOString()); // Tambahkan updated_at sesuai struktur API
      if (formData.image_url) {
        data.append("image_url", formData.image_url);
      } else {
        data.append("image_url", ""); // Kirim nilai kosong jika tidak ada gambar
      }

      const response = await axios.put(
        `https://relawanku.xyz/api/v1/admin/article/${id}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        alert("Artikel berhasil diperbarui!");
        navigate("/artikel-admin"); // Navigasi kembali ke daftar artikel
      }
    } catch (err) {
      console.error("Gagal memperbarui artikel:", err);
      alert(
        `Gagal memperbarui artikel: ${
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
          <NavbarAdmin />
        </div>
        <main className="flex-1 p-8 overflow-y-auto">
          <div className="text-sm text-gray-500 mb-4 p-4">
            Dashboard / Artikel /{" "}
            <span className="font-semibold">Edit Artikel</span>
          </div>
          <div className="p-8 bg-white shadow-md rounded-lg max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-gray-700">
              Edit Artikel
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

export default EditArtikel;
