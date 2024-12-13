import React, { useState, useEffect } from "react";
import axios from "axios"; // Import axios
import { useNavigate } from "react-router-dom";
import Sidebar from "../Layout/Sidebar";
import Navbar from "../Layout/NavbarAdmin";

const KegiatanRelawanAdmin = () => {
  const [kegiatan, setKegiatan] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const navigate = useNavigate(); // Hook untuk navigasi

  // Fungsi untuk fetch data kegiatan berdasarkan category atau id
  useEffect(() => {
    const fetchKegiatan = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("Token tidak ditemukan");
        }

        // Menentukan URL API berdasarkan kategori yang dipilih
        let apiUrl = "https://relawanku.xyz/api/v1/admin/programs";
        if (selectedCategory !== "all") {
          apiUrl = `https://relawanku.xyz/api/v1/admin/program/${selectedCategory}`;
        }

        const response = await axios.get(apiUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // Update state kegiatan dengan data yang diterima dari API
        setKegiatan(response.data.data || []);
      } catch (err) {
        setError("Terjadi kesalahan saat mengambil data.");
        console.error("Error fetching data", err);
      } finally {
        setLoading(false);
      }
    };

    fetchKegiatan();
  }, [selectedCategory]);

  // Filter kategori berdasarkan data yang ada di API
  const categories = ["all", "Lingkungan", "Sosial", "Edukasi"]; // Contoh kategori statis, bisa disesuaikan dari API

  const handleCategoryChange = (category) => {
    setSelectedCategory(category); // Update kategori yang dipilih
  };

  const handleEditClick = (id) => {
    navigate(`/relawan-edit/${id}`);
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gray-100">
      <Sidebar className="w-full lg:w-1/4 xl:w-1/5" />

      <div className="flex-1 flex flex-col">
        <div className="sticky top-0 z-50">
          <Navbar />
        </div>

        <div className="p-6 flex-1 overflow-auto">
          <div className="text-sm text-gray-500 mb-4 p-4">
            Dashboard /{" "}
            <span className="text-gray-800 font-semibold">Relawan</span>
          </div>

          <div className="flex justify-between items-center mb-6">
            <div className="flex flex-wrap space-x-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-4 py-2 rounded-full text-sm transition-all duration-300 shadow-md ${
                    selectedCategory === category
                      ? "bg-green-500 text-white"
                      : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                  }`}
                >
                  {category === "all" ? "Semua" : category}
                </button>
              ))}
            </div>
            <button
              onClick={() => navigate("/relawan-tambah")}
              className="px-6 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            >
              Tambah Kegiatan
            </button>
          </div>

          {loading ? (
            <div>Loading...</div>
          ) : error ? (
            <div>{error}</div>
          ) : (
            <div className="bg-white shadow-md rounded-lg p-4 overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead className="bg-green-200">
                  <tr>
                    <th className="px-6 py-4 text-center font-semibold rounded-tl-lg">
                      No
                    </th>
                    <th className="px-6 py-4 text-left font-semibold">
                      Judul Kegiatan
                    </th>
                    <th className="px-6 py-4 text-left font-semibold">
                      Rentang Waktu
                    </th>
                    <th className="px-6 py-4 text-left font-semibold">
                      Target Anggota
                    </th>
                    <th className="px-6 py-4 text-left font-semibold">
                      Kategori
                    </th>
                    <th className="px-6 py-4 text-center font-semibold rounded-tr-lg">
                      Aksi
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {kegiatan.map((item, index) => (
                    <tr
                      key={item.id}
                      className="bg-white hover:bg-gray-100 transition-colors"
                    >
                      <td className="px-6 py-4 text-center">{index + 1}</td>
                      <td className="px-6 py-4">{item.judul}</td>
                      <td className="px-6 py-4">{item.rentang_waktu}</td>
                      <td className="px-6 py-4">{item.target_anggota}</td>
                      <td className="px-6 py-4">{item.category}</td>
                      <td className="px-6 py-4 text-center flex justify-center space-x-2">
                        <button
                          onClick={() => handleEditClick(item.id)}
                          className="text-gray-500 hover:text-gray-700"
                          title="Edit"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15.232 5.232l3.536 3.536M9 11l4.768 4.768M16.536 7.464l-9 9"
                            />
                          </svg>
                        </button>
                        <button
                          onClick={() => alert(`Hapus kegiatan ${item.id}`)}
                          className="text-gray-500 hover:text-gray-700"
                          title="Hapus"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19 7l-.867 12.142A2 2 0 0116.136 21H7.864a2 2 0 01-1.997-1.858L5 7m5-4h4m-4 0a2 2 0 00-2 2m6-2a2 2 0 012 2m-8 0h8"
                            />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default KegiatanRelawanAdmin;
