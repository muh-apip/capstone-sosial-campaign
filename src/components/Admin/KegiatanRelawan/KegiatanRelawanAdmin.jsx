import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Layout/Sidebar";
import NavbarAdmin from "../Layout/NavbarAdmin";

const KegiatanRelawanAdmin = () => {
  const [kegiatan, setKegiatan] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const navigate = useNavigate();

  // Fungsi untuk fetch data kegiatan berdasarkan category atau id
  useEffect(() => {
    const fetchKegiatan = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("Token tidak ditemukan");
        }

        const response = await axios.get(
          "https://relawanku.xyz/api/v1/admin/programs",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log("Data dari API:", response.data);

        const dataWithUniqueId = response.data.data.map((item, index) => ({
          ...item,
          id: item.id || `${index}`, // Tambahkan id jika tidak tersedia
        }));

        setKegiatan(dataWithUniqueId); // Set data ke state
      } catch (err) {
        setError("Terjadi kesalahan saat mengambil data.");
        console.error("Error fetching data", err);
      } finally {
        setLoading(false);
      }
    };

    fetchKegiatan();
  }, []);

  const categories = ["all", "Lingkungan", "Sosial", "Edukasi"];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleEditClick = (ID) => {
    console.log(`Navigating to /relawan-edit/${ID}`);
    navigate(`/relawan-edit/${ID}`);
  };

  // Fungsi untuk menghapus kegiatan
  const handleDeleteClick = async (id) => {
    const confirmDelete = window.confirm(
      "Apakah Anda yakin ingin menghapus kegiatan ini?"
    );
    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Token tidak ditemukan");
      }

      const response = await axios.delete(
        `https://relawanku.xyz/api/v1/admin/program/${ID}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        alert("Kegiatan berhasil dihapus!");
        setKegiatan((prevKegiatan) =>
          prevKegiatan.filter((item) => item.ID !== ID)
        );
      } else {
        alert("Terjadi kesalahan saat menghapus kegiatan.");
      }
    } catch (error) {
      console.error("Error deleting data", error);
      alert("Terjadi kesalahan saat menghapus kegiatan.");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gray-100">
      <Sidebar className="w-full lg:w-1/4 xl:w-1/5" />

      <div className="flex-1 flex flex-col">
        <div className="sticky top-0 z-50">
          <NavbarAdmin />
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
                  onClick={() => setSelectedCategory(category)} // Ubah kategori yang dipilih
                  className={`px-4 py-2 rounded-full text-sm transition-all duration-300 shadow-md ${
                    selectedCategory === category
                      ? "bg-primary-green text-white font-medium text-sm rounded-lg hover:bg-green-600"
                      : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                  }`}
                >
                  {category === "all" ? "Semua" : category}
                </button>
              ))}
            </div>
            <button
              onClick={() => navigate("/relawan-tambah")}
              className="px-6 py-2 bg-primary-green text-white rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            >
              Tambah Kegiatan
            </button>
          </div>

          {loading ? (
            <div>Loading...</div>
          ) : error ? (
            <div>{error}</div>
          ) : kegiatan.length === 0 ? (
            <div>Tidak ada data kegiatan untuk ditampilkan.</div>
          ) : (
            <div className="overflow-x-auto bg-white shadow-md rounded-md">
              <table className="min-w-full table-auto">
                <thead>
                  <tr className="bg-[#CAE8CB] text-gray-800 uppercase text-sm leading-normal">
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
                  {kegiatan
                    .filter((item) => {
                      // Jika kategori "all", tampilkan semua data
                      if (selectedCategory === "all") return true;
                      // Jika tidak, filter berdasarkan kategori
                      return item.category === selectedCategory;
                    })
                    .map((item, index) => (
                      <tr
                        key={item.id}
                        className="bg-white hover:bg-gray-100 transition-colors"
                      >
                        <td className="px-6 py-4 text-center">{item.ID}</td>
                        <td className="px-6 py-4">{item.title}</td>
                        <td className="px-6 py-4">{item.end_date}</td>
                        <td className="px-6 py-4">{item.quota}</td>
                        <td className="px-6 py-4">{item.category}</td>
                        <td className="px-6 py-4 text-center flex justify-center space-x-2">
                          <button
                            onClick={() => handleEditClick(item.ID)}
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
                            onClick={() => handleDeleteClick(item.ID)}
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
