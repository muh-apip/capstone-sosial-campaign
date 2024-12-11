import React, { useEffect, useState } from "react";
import Sidebar from "../Layout/Sidebar";
import NavbarAdmin from "../Layout/NavbarAdmin";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditArtikel = () => {
  const { id } = useParams(); // Get the article ID from the URL
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    kategori: "",
    title: "",
    subjudul: "",
    deskripsi: "",
    uploadGambar: null,
  });

  useEffect(() => {
    // Fetch the article data by ID and populate the form (mock example below)
    const fetchArtikel = async () => {
      // Replace with your API call
      const response = await fetch(`/api/artikel/${id}`);
      const data = await response.json();
      setFormData({
        kategori: data.kategori,
        title: data.title,
        subjudul: data.subjudul,
        deskripsi: data.deskripsi,
        uploadGambar: null, // Images are usually not directly editable
      });
    };

    fetchArtikel();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      uploadGambar: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the updated article data
    console.log("Updated Data:", formData);
    navigate("/artikel-admin"); // Navigate back to the articles list
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar className="w-full lg:w-1/4 xl:w-1/5" />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <NavbarAdmin />

        {/* Content */}
        <div className="p-6 lg:p-8">
          {/* Breadcrumb */}
          <div className="text-sm text-gray-500 mb-6">
            <Link to="/dashboard" className="hover:text-green-600">
              Dashboard
            </Link>{" "}
            /{" "}
            <Link to="/artikel-admin" className="hover:text-green-600">
              Artikel
            </Link>{" "}
            / <span className="text-gray-800 font-semibold">Edit Artikel</span>
          </div>

          {/* Form Container */}
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
                  name="kategori"
                  value={formData.kategori}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                >
                  <option value="">Pilih Kategori</option>
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
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                  placeholder="Masukkan judul artikel"
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
                  name="subjudul"
                  value={formData.subjudul}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                  placeholder="Masukkan subjudul"
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
                  name="deskripsi"
                  rows="4"
                  value={formData.deskripsi}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                  placeholder="Masukkan deskripsi artikel"
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
                  name="uploadGambar"
                  onChange={handleFileChange}
                  className="w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                />
              </div>

              {/* Submit Button */}
              <div className="text-right">
                <button
                  type="submit"
                  className="px-6 py-2 bg-green-500 text-white font-medium rounded-md shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  Simpan Perubahan
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditArtikel;
