import React, { useState } from "react";
import Sidebar from "../Layout/Sidebar";
import NavbarAdmin from "../Layout/NavbarAdmin";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const TambahArtikel = () => {
  const [kategori, setKategori] = useState("");
  const [title, setTitle] = useState("");
  const [subjudul, setSubjudul] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [gambar, setGambar] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false); // Loading state
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append("category", kategori);  // Change from 'kategori' to 'category'
    formData.append("title", title);
    formData.append("content", deskripsi); // Change from 'deskripsi' to 'content'
  
    if (gambar) {
      formData.append("gambar", gambar); // Append the image file correctly
      console.log("FormData: ", formData); // Log FormData contents
    }
  
    try {
      const token = localStorage.getItem("token");
  
      if (!token) {
        alert("Token tidak ditemukan. Silakan login kembali.");
        return;
      }
  
      const response = await axios.post(
        "https://relawanku.xyz/api/v1/admin/article",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      console.log(response.data); // Log response data
  
      if (response.status === 200) {
        navigate("/artikel-admin");
      }
    } catch (err) {
      console.error("Error submitting article", err.response ? err.response.data : err.message);
      setErrorMessage("Gagal mengirim artikel. Periksa log untuk detail kesalahan.");
    }
  };
  

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    // File validation
    if (file) {
      const validTypes = ["image/jpeg", "image/png", "image/gif"];
      if (!validTypes.includes(file.type)) {
        setErrorMessage("File type not supported. Please upload an image.");
        return;
      }
      if (file.size > 5000000) {
        // 5MB size limit
        setErrorMessage("File size exceeds 5MB.");
        return;
      }
      setGambar(file); // Store the selected file
      setErrorMessage(""); // Clear any error message
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
      <Sidebar className="w-full lg:w-1/4 xl:w-1/5" />
      <div className="flex-1 flex flex-col">
        <NavbarAdmin />
        <div className="p-6 lg:p-8">
          <div className="text-sm text-gray-500 mb-6">
            <Link to="/dashboard" className="hover:text-green-600">
              Dashboard
            </Link>{" "}
            /{" "}
            <Link to="/artikel-admin" className="hover:text-green-600">
              Artikel
            </Link>{" "}
            /{" "}
            <span className="text-gray-800 font-semibold">Tambah Artikel</span>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <form onSubmit={handleSubmit}>
              {/* Kategori */}
              <div className="mb-4">
                <label
                  htmlFor="kategori"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Kategori
                </label>
                <select
                  id="kategori"
                  className="w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                  value={kategori}
                  onChange={(e) => setKategori(e.target.value)}
                >
                  <option>Pilih Kategori</option>
                  <option value="Sosial">Sosial</option>
                  <option value="Lingkungan">Lingkungan</option>
                  <option value="Teknologi">Teknologi</option>
                </select>
              </div>

              {/* Title */}
              <div className="mb-4">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  className="w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                  placeholder="Masukkan judul artikel"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              {/* Subjudul */}
              <div className="mb-4">
                <label
                  htmlFor="subjudul"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Subjudul
                </label>
                <input
                  type="text"
                  id="subjudul"
                  className="w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                  placeholder="Masukkan subjudul"
                  value={subjudul}
                  onChange={(e) => setSubjudul(e.target.value)}
                />
              </div>

              {/* Deskripsi */}
              <div className="mb-4">
                <label
                  htmlFor="deskripsi"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Deskripsi
                </label>
                <textarea
                  id="deskripsi"
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                  placeholder="Masukkan deskripsi artikel"
                  value={deskripsi}
                  onChange={(e) => setDeskripsi(e.target.value)}
                ></textarea>
              </div>

              {/* Upload Gambar */}
              <div className="mb-4">
                <label
                  htmlFor="uploadGambar"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Upload Gambar
                </label>
                <input
                  type="file"
                  id="uploadGambar"
                  className="w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                  onChange={handleFileChange}
                />

                {gambar && (
                  <div className="mt-2">
                    <p>File Selected: {gambar.name}</p>
                    <img
                      src={URL.createObjectURL(gambar)}
                      alt="Preview"
                      className="w-32 h-32 object-cover mt-2"
                    />
                  </div>
                )}
              </div>

              {/* Error Message */}
              {errorMessage && (
                <div className="text-red-600 mb-4">{errorMessage}</div>
              )}

              {/* Submit Button */}
              <div className="text-right">
                <button
                  type="submit"
                  className="px-6 py-2 bg-green-500 text-white font-medium rounded-md shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                  disabled={loading}
                >
                  {loading ? "Mengirim..." : "Simpan"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TambahArtikel;
