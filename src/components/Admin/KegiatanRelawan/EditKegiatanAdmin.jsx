import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../Layout/Sidebar";
import Navbar from "../Layout/NavbarAdmin";
import axios from "axios";

const EditKegiatanAdmin = () => {
  const { id } = useParams(); // Mengambil id dari URL
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    category: "",
    title: "",
    details: "",
    start_date: "",
    end_date: "",
    location: "",
    quota: 0,
  });

  // Mendapatkan data kegiatan dari API
  useEffect(() => {
    const fetchKegiatan = async () => {
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
          alert("Kegiatan tidak ditemukan!");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        alert("Terjadi kesalahan saat mengambil data kegiatan.");
      }
    };

    fetchKegiatan();
  }, [id]); // Menjalankan useEffect saat id berubah

  // Mengatur nilai state ketika input berubah
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Mengirimkan data yang telah diubah ke server
  const handleSubmit = async (e) => {
    e.preventDefault();

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
      alert("Terjadi kesalahan saat memperbarui kegiatan.");
    }
  };

  return (
    <div>
      <Sidebar />
      <Navbar />
      <div className="content">
        <h2>Edit Kegiatan</h2>
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
