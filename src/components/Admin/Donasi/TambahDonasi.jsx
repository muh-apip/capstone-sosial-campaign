import React, { useState } from "react";
import Sidebar from "../Layout/Sidebar";
import NavbarAdmin from "../Layout/NavbarAdmin";
import { Link } from "react-router-dom";

const TambahDonasi = () => {
  const [formData, setFormData] = useState({
    category: "",
    title: "",
    description: "",
    news: "",
    started_at: "",
    finished_at: "",
    target_donation: "",
    image_url: null,
  });

  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image_url: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage("");

    const token = localStorage.getItem("token");
    if (!token) {
      setError("Anda harus login terlebih dahulu.");
      return;
    }

    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      const response = await fetch("https://relawanku.xyz/api/v1/admin/donasi", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error("Gagal menambahkan donasi. Silakan coba lagi.");
      }

      setSuccessMessage("Donasi berhasil ditambahkan!");
      setFormData({
        category: "",
        title: "",
        description: "",
        news: "",
        started_at: "",
        finished_at: "",
        target_donation: "",
        image_url: null,
      });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
      <Sidebar className="w-full lg:w-1/4 xl:w-1/5" />
      <div className="flex-1 flex flex-col">
        <NavbarAdmin />
        <div className="p-6 lg:p-8">
          <div className="text-sm text-gray-500 mb-6">
            <Link to="/dashboard" className="hover:text-gray-800">
              Dashboard
            </Link>{" "}
            /{" "}
            <Link to="/donasi-admin" className="hover:text-gray-800">
              Donasi
            </Link>{" "}
            / <span className="text-gray-800 font-semibold">Tambah Donasi</span>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            {error && <p className="text-red-500 mb-4">{error}</p>}
            {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Kategori
                </label>
                <select
                  id="category"
                  className="w-full px-3 py-2 border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                  value={formData.category}
                  onChange={handleChange}
                >
                  <option value="">Pilih Kategori</option>
                  <option value="Sosial">Bencana Alam</option>
                  <option value="Pendidikan">Pelestarian Lingkungan</option>
                  <option value="Kesehatan">Sosial</option>
                </select>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Judul Kegiatan
                </label>
                <input
                  type="text"
                  id="title"
                  className="w-full px-3 py-2 border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                  placeholder="Masukkan judul kegiatan"
                  value={formData.title}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Detail Donasi
                </label>
                <textarea
                  id="description"
                  rows="4"
                  className="w-full px-3 py-2 border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                  placeholder="Masukkan detail donasi"
                  value={formData.description}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="news"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Kabar Terbaru (Opsional)
                </label>
                <textarea
                  id="news"
                  rows="4"
                  className="w-full px-3 py-2 border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                  placeholder="Masukkan kabar terbaru"
                  value={formData.news}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label
                    htmlFor="started_at"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Tanggal Awal Donasi
                  </label>
                  <input
                    type="date"
                    id="started_at"
                    className="w-full px-3 py-2 border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                    value={formData.started_at}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label
                    htmlFor="finished_at"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Tanggal Berakhir Donasi
                  </label>
                  <input
                    type="date"
                    id="finished_at"
                    className="w-full px-3 py-2 border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                    value={formData.finished_at}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="target_donation"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Target Donasi
                </label>
                <input
                  type="number"
                  id="target_donation"
                  className="w-full px-3 py-2 border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                  placeholder="Masukkan target donasi"
                  value={formData.target_donation}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="image_url"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Upload Gambar
                </label>
                <input
                  type="file"
                  id="image_url"
                  className="w-full px-3 py-2 border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                  onChange={handleFileChange}
                />
              </div>

              <div className="text-right">
                <button
                  type="submit"
                  className="px-6 py-2 bg-green-500 text-white font-medium rounded-md shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  Simpan
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TambahDonasi;
