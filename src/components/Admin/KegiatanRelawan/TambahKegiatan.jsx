import React, { useState } from "react";
import Sidebar from "../Layout/Sidebar";
import Navbar from "../Layout/NavbarAdmin";

const ActivityForm = () => {
  const [formData, setFormData] = useState({
    category: "",
    title: "",
    details: "",
    start_date: "",
    end_date: "",
    location: "",
    quota: 0,
    image_url: null,
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image_url: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare form data for API
    const data = new FormData();
    data.append("category", formData.category);
    data.append("title", formData.title);
    data.append("details", formData.details);
    data.append("start_date", formData.start_date);
    data.append("end_date", formData.end_date);
    data.append("location", formData.location);
    data.append("quota", formData.quota);
    if (formData.image_url) {
      data.append("image_url", formData.image_url);
    }

    try {
      const response = await fetch("relawanku.xyz/api/v1/admin/program", {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        alert("Kegiatan berhasil ditambahkan!");
        setFormData({
          category: "",
          title: "",
          details: "",
          start_date: "",
          end_date: "",
          location: "",
          quota: 0,
          image_url: null,
        });
      } else {
        alert("Gagal menambahkan kegiatan!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Terjadi kesalahan saat mengirim data.");
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <div className="sticky top-0 z-50 bg-white shadow-md">
          <Navbar />
        </div>

        {/* Form Content */}
        <main className="flex-1 p-8 overflow-y-auto">
          <div className="p-8 bg-white shadow-md rounded-lg max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-gray-700">
              Tambah Kegiatan
            </h2>
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
                  className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 px-4 py-2"
                >
                  <option value="">Pilih Kategori</option>
                  <option value="Seminar">Sosialisasi</option>
                  <option value="Workshop">Dana Bantuan</option>
                  <option value="Training">Gotong Royong</option>
                </select>
              </div>

              {/* Judul Kegiatan */}
              <div className="mb-6">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Judul Kegiatan
                </label>
                <input
                  type="text"
                  id="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 px-4 py-2"
                  placeholder="Masukkan judul kegiatan"
                />
              </div>

              {/* Detail Kegiatan */}
              <div className="mb-6">
                <label
                  htmlFor="details"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Detail Kegiatan
                </label>
                <textarea
                  id="details"
                  rows="4"
                  value={formData.details}
                  onChange={handleChange}
                  className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 px-4 py-2"
                  placeholder="Masukkan detail kegiatan"
                ></textarea>
              </div>

              {/* Tanggal Mulai dan Berakhir */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="start_date"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Tanggal Mulai Kegiatan
                  </label>
                  <input
                    type="date"
                    id="start_date"
                    value={formData.start_date}
                    onChange={handleChange}
                    className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 px-4 py-2"
                  />
                </div>
                <div>
                  <label
                    htmlFor="end_date"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Tanggal Berakhir Kegiatan
                  </label>
                  <input
                    type="date"
                    id="end_date"
                    value={formData.end_date}
                    onChange={handleChange}
                    className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 px-4 py-2"
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
                  className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 px-4 py-2"
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
                  className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 px-4 py-2"
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
                  className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 px-4 py-2"
                />
              </div>

              {/* Tombol Simpan */}
              <div className="text-right">
                <button
                  type="submit"
                  className="px-6 py-2 bg-green-500 text-white rounded-md shadow hover:bg-green-600 focus:outline-none"
                >
                  Simpan
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ActivityForm;
