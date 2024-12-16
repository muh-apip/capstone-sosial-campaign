import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Sidebar from "../Layout/Sidebar";
import Navbar from "../Layout/NavbarAdmin";
import axios from "axios";

const EditKegiatanAdmin = () => {
  const { id } = useParams(); // Ambil ID dari URL
  const navigate = useNavigate();
  const token = localStorage.getItem("token"); // Token auth

  const [formData, setFormData] = useState({
    category: "",
    subtitle: "",
    title: "",
    details: "",
    start_date: "",
    end_date: "",
    location: "",
    quota: "",
    image_url: null, // Gambar yang akan diupload
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fungsi untuk memuat data kegiatan dari API
  useEffect(() => {
    const fetchKegiatan = async () => {
      try {
        const response = await axios.get(`/api/v1/admin/program/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setFormData({
          category: response.data.category,
          subtitle: response.data.subtitle,
          title: response.data.title,
          details: response.data.details,
          start_date: response.data.start_date,
          end_date: response.data.end_date,
          location: response.data.location,
          quota: response.data.quota,
          image_url: response.data.image_url, // Gambar sesuai dari server
        });
      } catch (err) {
        console.error("Error loading data:", err);
        setError("Gagal memuat data kegiatan.");
      }
    };

    fetchKegiatan();
  }, [id, token]);

  const handleChange = (e) => {
    const { id, value, files } = e.target;

    if (files && files.length > 0) {
      setFormData({ ...formData, [id]: files[0] });
    } else {
      setFormData({ ...formData, [id]: value });
    }
  };

  // Menangani perubahan kategori
  const handleCategoryChange = (e) => {
    setFormData({ ...formData, category: e.target.value });
  };

  const categories = [
    "Sosial",
    "Edukasi",
    "Lingkungan",
    "Kesehatan",
    "Bencana",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.title ||
      !formData.details ||
      !formData.start_date ||
      !formData.end_date
    ) {
      alert("Semua field wajib diisi!");
      return;
    }

    try {
      setLoading(true);
      const formDataToSend = new FormData();

      // Menambahkan data selain gambar
      Object.keys(formData).forEach((key) => {
        if (key !== "image_url" && formData[key]) {
          formDataToSend.append(key, formData[key]);
        }
      });

      // Menambahkan gambar jika ada
      if (formData.image_url) {
        formDataToSend.append("image_url", formData.image_url);
      }

      await axios.put(
        `https://relawanku.xyz/api/v1/admin/program/${id}`,
        formDataToSend,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert("Data berhasil diperbarui!");
      navigate("/relawan-admin");
    } catch (error) {
      console.error("Error Response:", error.response?.data);
      alert(
        error.response?.data?.message ||
          "Terjadi kesalahan saat menyimpan data."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <div className="p-6 bg-white rounded-md shadow-md">
          <h2 className="text-xl font-bold mb-4">Edit Kegiatan</h2>

          {error && <div className="text-red-500">{error}</div>}

          <form onSubmit={handleSubmit} encType="multipart/form-data">
            {/* Kategori */}
            <div className="mb-4">
              <label className="block text-gray-700">Kategori</label>
              <select
                id="category"
                value={formData.category} // menggunakan formData.category
                onChange={handleCategoryChange} // Menggunakan handleCategoryChange
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
            <div className="mb-4">
              <label className="block text-gray-700">Judul Kegiatan</label>
              <input
                type="text"
                id="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>

            {/* Subjudul */}
            <div className="mb-4">
              <label className="block text-gray-700">Subjudul</label>
              <input
                type="text"
                id="subtitle"
                value={formData.subtitle}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>

            {/* Detail */}
            <div className="mb-4">
              <label className="block text-gray-700">Detail Kegiatan</label>
              <textarea
                id="details"
                value={formData.details}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                rows="4"
              ></textarea>
            </div>

            {/* Tanggal Mulai dan Berakhir */}
            <div className="flex space-x-4 mb-4">
              <div className="w-1/3">
                <label className="block text-gray-700">Tanggal Mulai</label>
                <input
                  type="date"
                  id="start_date"
                  value={formData.start_date}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="w-1/3">
                <label className="block text-gray-700">Tanggal Berakhir</label>
                <input
                  type="date"
                  id="end_date"
                  value={formData.end_date}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="w-1/3">
                <label className="block text-gray-700">Lokasi</label>
                <input
                  type="text"
                  id="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>

            {/* Target Peserta */}
            <div className="mb-4">
              <label className="block text-gray-700">Quota</label>
              <input
                type="text"
                id="quota"
                value={formData.quota}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>

            {/* Gambar */}
            <div className="mb-4">
              <label className="block text-gray-700">Gambar</label>
              <input
                type="file"
                id="image_url"
                onChange={handleChange}
                className="w-full p-2 border rounded"
                accept="image/*"
              />
            </div>

            {/* Tombol Simpan */}
            <button
              type="submit"
              className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
              disabled={loading}
            >
              {loading ? "Menyimpan..." : "Simpan"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditKegiatanAdmin;
