import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../Layout/Sidebar";
import Navbar from "../Layout/NavbarAdmin";
import axios from "axios";

const EditKegiatanAdmin = () => {
  const { id } = useParams(); // Mengambil id dari URL
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [formData, setFormData] = useState({
    category: "",
    title: "",
    details: "",
    start_date: "",
    end_date: "",
    location: "",
    quota: 0,
  });
  const [error, setError] = useState(null);

  // Mendapatkan data kegiatan dari API
  useEffect(() => {
    const fetchKegiatan = async () => {

      console.log("ID yang dikirim ke API:", id); // Debugging ID

      if (!token) {
        console.error("Token tidak ditemukan.");
        alert("Silakan login kembali.");
        return;
      }
      try {
        const response = await axios.get(
          `https://relawanku.xyz/api/v1/admin/program/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const kegiatan = response.data;
      try {
        const response = await axios.get(
          `https://relawanku.xyz/api/v1/admin/program/${id}`
        );
        const kegiatan = response.data; // Mengambil data kegiatan dari API

        if (kegiatan) {
          setFormData({
            category: kegiatan.category,
            title: kegiatan.judul,
            details: kegiatan.details,
            start_date: kegiatan.start_date,
            end_date: kegiatan.end_date,
            location: kegiatan.location,
            quota: kegiatan.quota,
          });
        } else {
          alert("Kegiatan tidak ditemukan.");
        }
      } catch (error) {
        console.error("Error fetching data:", error);

        // Cek apakah error.response tersedia
        if (error.response) {
          const status = error.response.status;

          if (status === 404) {
            alert("Data tidak ditemukan. Periksa ID kegiatan.");
          } else {
            alert(`Terjadi kesalahan: ${error.response.statusText}`);
          }
        } else {
          // Jika error.response undefined (masalah jaringan atau server)
          alert("Terjadi kesalahan saat menghubungi server. Coba lagi nanti.");
        }
      }
    };

    fetchKegiatan();
  }, [id]);
  // Mengatur nilai state ketika input berubah
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Mengirimkan data yang telah diubah ke server
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verifikasi form data
    if (
      !formData.title ||
      !formData.category ||
      !formData.start_date ||
      !formData.end_date
    ) {
      alert("Pastikan semua field yang wajib diisi telah diisi.");
      return;
    }

    setError(null); // Reset error state

    try {
      const response = await axios.put(
        `https://relawanku.xyz/api/v1/admin/program/${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
    try {
      const response = await axios.put(
        `https://relawanku.xyz/api/v1/admin/program/${id}`,
        formData
      );
      if (response.status === 200) {
        alert("Kegiatan berhasil diperbarui!");
        navigate(`/admin/program/${id}`); // Arahkan setelah berhasil
      }
    } catch (error) {
      console.error("Error updating data:", error);
      setError("Terjadi kesalahan saat memperbarui kegiatan.");

    }
  };

  return (
    <div>
      <Sidebar />
      <Navbar />
      <div className="content">
        <h2>Edit Kegiatan</h2>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div>
            <label>Judul</label>
            <input
              type="text"
              id="title"
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Kategori</label>
            <input
              type="text"
              id="category"
              value={formData.category}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Detail</label>
            <textarea
              id="details"
              value={formData.details}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Start Date</label>
            <input
              type="date"
              id="start_date"
              value={formData.start_date}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>End Date</label>
            <input
              type="date"
              id="end_date"
              value={formData.end_date}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Location</label>
            <input
              type="text"
              id="location"
              value={formData.location}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Quota</label>
            <input
              type="number"
              id="quota"
              value={formData.quota}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Simpan</button>
        </form>
      </div>
    </div>
  );
};

export default EditKegiatanAdmin;
