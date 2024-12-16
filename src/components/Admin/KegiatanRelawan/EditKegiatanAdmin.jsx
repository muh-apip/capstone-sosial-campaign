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
    subtitle: "",
    title: "",
    details: "",
    start_date: "",
    end_date: "",
    location: "",
    quota: "",
    image_url: "",
  });

  const handleChange = (e) => {
    const { id, value, files } = e.target;

    if (files && files.length > 0) {
      console.log(`File dipilih: ${files[0].name}`);
      setFormData({ ...formData, [id]: files[0] });
    } else {
      setFormData({ ...formData, [id]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();

      // Tambahkan semua field teks
      Object.keys(formData).forEach((key) => {
        if (key !== "image_url" && formData[key]) {
          formDataToSend.append(key, formData[key]);
        }
      });

      // Tambahkan file gambar
      if (formData.image_url) {
        formDataToSend.append("image", formData.image_url); // Sesuaikan nama field
      } else {
        console.warn("File gambar belum dipilih!");
      }

      console.log("FormData yang dikirim:");
      for (let [key, value] of formDataToSend.entries()) {
        console.log(`${key}:`, value);
      }

      // Kirim request
      await axios.put(
        `https://relawanku.xyz/api/v1/admin/program/${id}`,
        formDataToSend,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            // Content-Type tidak perlu diatur secara manual
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
              <label className="block text-gray-700">Quota</label>
              <input
                type="text"
                id="quota"
                value={formData.quota}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Gambar</label>
              <input
                type="file"
                id="image_url" // Pastikan ID ini sesuai dengan yang diharapkan API
                onChange={handleChange}
                className="w-full p-2 border rounded"
                accept="image/*"
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
