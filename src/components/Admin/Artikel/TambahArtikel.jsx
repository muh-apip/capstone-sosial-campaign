import React from "react";
import Sidebar from "../Layout/Sidebar";
import NavbarAdmin from "../Layout/NavbarAdmin";
import { Link, useNavigate } from "react-router-dom";

const TambahArtikel = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic untuk submit form
    console.log("Form submitted");
    navigate("/artikel-admin");
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
            /{" "}
            <span className="text-gray-800 font-semibold">Tambah Artikel</span>
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
                  className="w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                >
                  <option>Pilih Kategori</option>
                  <option>Sosial</option>
                  <option>Lingkungan</option>
                  <option>Teknologi</option>
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
                />
              </div>

              {/* Submit Button */}
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

export default TambahArtikel;
