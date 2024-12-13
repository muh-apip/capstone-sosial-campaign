import React, { useState } from "react";
import Sidebar from "../Layout/Sidebar";
import Navbar from "../Layout/NavbarAdmin";
import axios from "axios";

const TambahKegiatanAdmin = () => {
  const [formData, setFormData] = useState({
    title: "",
    details: "",
    start_date: "",
    end_date: "",
    location: "",
    quota: 0,
    image_url: null,
  });
  const [selectedCategory, setSelectedCategory] = useState(""); // Dropdown kategori
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const categories = ["Sosial", "Edukasi", "Lingkungan", "Kesehatan"]; // Pilihan kategori

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
      !formData.details ||
      !formData.start_date ||
      !formData.end_date ||
      !formData.location ||
      !formData.quota ||
      !formData.image_url // Pastikan gambar diunggah
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
      data.append("details", formData.details);
      data.append("start_date", formData.start_date);
      data.append("end_date", formData.end_date);
      data.append("location", formData.location);
      data.append("quota", formData.quota);
      data.append("image_url", formData.image_url); // Gambar

      // Mengirim data ke API
      const response = await axios.post(
        "https://relawanku.xyz/api/v1/admin/program", // Ganti sesuai endpoint API Swagger
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data", // Header untuk FormData
          },
        }
      );

      if (response.status === 201) {
        alert("Kegiatan berhasil ditambahkan!");
        setFormData({
          title: "",
          details: "",
          start_date: "",
          end_date: "",
          location: "",
          quota: 0,
          image_url: null,
        });
        setSelectedCategory(""); // Reset kategori
      }
    } catch (err) {
      console.error("Error submitting data:", err);
      alert(
        `Gagal menambahkan kegiatan: ${
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
          <div className="text-sm text-gray-500 mb-4 p-4">
            Dashboard / Relawan /{" "}
            <span className="text-gray-800 font-semibold">Tambah Kegiatan</span>
          </div>
          <div className="p-8 bg-white shadow-md rounded-lg max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-gray-700">
              Tambah Kegiatan
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
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
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
                  placeholder="Masukkan judul kegiatan"
                />
              </div>

              {/* Detail */}
              <div className="mb-6">
                <label
                  htmlFor="details"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Detail
                </label>
                <textarea
                  id="details"
                  rows="4"
                  value={formData.details}
                  onChange={handleChange}
                  className="block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-green-500 px-4 py-2"
                  placeholder="Masukkan detail kegiatan"
                ></textarea>
              </div>

              {/* Tanggal Mulai dan Selesai */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="start_date"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Tanggal Mulai
                  </label>
                  <input
                    type="date"
                    id="start_date"
                    value={formData.start_date}
                    onChange={handleChange}
                    className="block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-green-500 px-4 py-2"
                  />
                </div>
                <div>
                  <label
                    htmlFor="end_date"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Tanggal Selesai
                  </label>
                  <input
                    type="date"
                    id="end_date"
                    value={formData.end_date}
                    onChange={handleChange}
                    className="block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-green-500 px-4 py-2"
                  />
                </div>
              </div>

              {/* Lokasi */}
              <div className="mb-6">
                <label
                  htmlFor="location"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Lokasi
                </label>
                <input
                  type="text"
                  id="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-green-500 px-4 py-2"
                  placeholder="Masukkan lokasi kegiatan"
                />
              </div>

              {/* Kuota */}
              <div className="mb-6">
                <label
                  htmlFor="quota"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Kuota
                </label>
                <input
                  type="number"
                  id="quota"
                  value={formData.quota}
                  onChange={handleChange}
                  className="block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-green-500 px-4 py-2"
                  placeholder="Masukkan kuota peserta"
                />
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

export default TambahKegiatanAdmin;
