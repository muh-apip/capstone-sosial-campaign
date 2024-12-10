import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../Layout/Sidebar";
import Navbar from "../Layout/navbaradmin"; // Pastikan path ini benar

const TabelKegiatan = () => {
  // State untuk menampung data kegiatan
  const [kegiatan, setKegiatan] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // State untuk kategori yang dipilih
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Mengambil data kegiatan dari API berdasarkan kategori yang dipilih
  useEffect(() => {
    const fetchKegiatan = async () => {
      try {
        const url =
          selectedCategory === "all"
            ? "https://relawanku.xyz/api/v1/admin/program" // Mengambil semua program
            : `https://relawanku.xyz/api/v1/admin/program/${selectedCategory}`; // Mengambil program berdasarkan kategori

        const response = await axios.get(url);
        setKegiatan(response.data.data); // Menyimpan data kegiatan ke state
        setLoading(false);
      } catch (err) {
        setError("Error fetching data");
        setLoading(false);
      }
    };

    fetchKegiatan();
  }, [selectedCategory]); // Menjalankan useEffect saat kategori berubah

  // Mengambil kategori unik dari data yang diambil
  const categories = ["all", ...new Set(kegiatan.map((item) => item.category))];

  // Filter kegiatan berdasarkan kategori yang dipilih
  const filteredKegiatan =
    selectedCategory === "all"
      ? kegiatan
      : kegiatan.filter((item) => item.category === selectedCategory);

  // Fungsi untuk menangani perubahan kategori
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Sidebar state
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Navbar */}
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      <div className="flex flex-1">
        {/* Sidebar */}
        <div
          className={`${
            isSidebarOpen ? "w-64" : "w-16"
          } bg-gray-800 text-white sticky top-16 h-full transition-all duration-300`}
        >
          <Sidebar toggleSidebar={toggleSidebar} />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 bg-gray-100 overflow-auto">
          {/* Button untuk menambah kegiatan */}
          <div className="text-sm text-gray-500 mb-4">
            Dashboard /{" "}
            <span className="text-gray-800 font-semibold">Relawan</span>
          </div>

          <button
            className="bg-green-500 text-white px-6 py-2 rounded-lg mb-6 shadow-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
            onClick={() => (window.location.href = "/link_tambah")}
          >
            Tambah Kegiatan
          </button>

          {/* Filter kategori */}
          <div className="flex flex-wrap space-x-4 mb-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-2 rounded-md text-sm ${
                  selectedCategory === category
                    ? "bg-green-500 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {category === "all" ? "Semua" : category}
              </button>
            ))}
          </div>

          {/* Tabel Kegiatan */}
          {loading ? (
            <div>Loading...</div>
          ) : error ? (
            <div>{error}</div>
          ) : (
            <table className="min-w-full text-left border-separate border-spacing-0">
              <thead className="bg-green-200 rounded-lg">
                <tr>
                  <th className="py-3 px-6 text-center font-semibold text-sm">
                    No
                  </th>
                  <th className="py-3 px-6 font-semibold text-sm">
                    Judul Kegiatan
                  </th>
                  <th className="py-3 px-6 font-semibold text-sm">
                    Rentang Waktu
                  </th>
                  <th className="py-3 px-6 font-semibold text-sm">
                    Target Anggota
                  </th>
                  <th className="py-3 px-6 font-semibold text-sm">Kategori</th>
                  <th className="py-3 px-6 text-center font-semibold text-sm">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredKegiatan.map((item, index) => (
                  <tr
                    key={item.id}
                    className="border-b border-gray-200 hover:bg-teal-50 transition-colors duration-200"
                  >
                    <td className="py-3 px-6 text-center">{index + 1}</td>
                    <td className="py-3 px-6">{item.judul}</td>
                    <td className="py-3 px-6">{item.rentang_waktu}</td>
                    <td className="py-3 px-6">{item.target_anggota}</td>
                    <td className="py-3 px-6">{item.category}</td>
                    <td className="py-3 px-6 text-center">
                      {/* Button Edit */}
                      <button
                        className="bg-teal-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 mr-2 text-xs"
                        onClick={() => alert(`Edit kegiatan ${item.id}`)}
                      >
                        Edit
                      </button>
                      {/* Button Hapus */}
                      <button
                        className="bg-red-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 text-xs"
                        onClick={() => alert(`Hapus kegiatan ${item.id}`)}
                      >
                        Hapus
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default TabelKegiatan;
