import React, { useState } from "react";
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
    title: "",
    subtitle: "",
    details: "",
    start_date: "",
    end_date: "",
    location: "",
    target: "",
    image: null,
  });

  const handleChange = (e) => {
    const { id, value, files } = e.target;
    setFormData({
      ...formData,
      [id]: files ? files[0] : value, // Untuk upload file
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData(); // Untuk handle data + file
      formDataToSend.append("category", formData.category);
      formDataToSend.append("title", formData.title);
      formDataToSend.append("subtitle", formData.subtitle);
      formDataToSend.append("details", formData.details);
      formDataToSend.append("start_date", formData.start_date);
      formDataToSend.append("end_date", formData.end_date);
      formDataToSend.append("location", formData.location);
      formDataToSend.append("target", formData.target);
      if (formData.image_url)
        formDataToSend.append("image", formData.image_url);

      await axios.put(
        `https://relawanku.xyz/api/v1/admin/program/${id}`,
        formDataToSend,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data", // Penting untuk file upload
          },
        }
      );

      alert("Data berhasil diperbarui!");
      navigate("/kegiatan-relawan-admin"); // Redirect setelah update
    } catch (error) {
      console.error("Error updating data:", error);
      alert(
        error.response?.data?.message ||
          "Terjadi kesalahan saat menyimpan data."
      );
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <div className="p-6 bg-white rounded-md shadow-md">
          <h2 className="text-xl font-bold mb-4">Edit Kegiatan</h2>

          <form onSubmit={handleSubmit} encType="multipart/form-data">
            {/* Kategori */}
            <div className="mb-4">
              <label className="block text-gray-700">Kategori</label>
              <select
                id="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              >
                <option value="">Pilih Kategori</option>
                <option value="Bencana Alam">Bencana Alam</option>
                <option value="Sosial">Sosial</option>
                <option value="Edukasi">Edukasi</option>
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
              <label className="block text-gray-700">Target Peserta</label>
              <input
                type="text"
                id="target"
                value={formData.target}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>

            {/* Upload Gambar */}
            <div className="mb-4">
              <label className="block text-gray-700">Upload Gambar</label>
              <input
                type="file"
                id="image"
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>

            {/* Tombol Simpan */}
            <button
              type="submit"
              className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
            >
              Simpan
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditKegiatanAdmin;
