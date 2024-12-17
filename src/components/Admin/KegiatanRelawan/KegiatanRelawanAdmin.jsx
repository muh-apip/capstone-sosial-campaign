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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedKegiatan, setSelectedKegiatan] = useState(null);

  const navigate = useNavigate();

  // Fetch data kegiatan
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

        const dataWithUniqueId = response.data.data.map((item, index) => ({
          ...item,
          id: item.id || `${index}`,
        }));

        setKegiatan(dataWithUniqueId);
      } catch (err) {
        setError("Terjadi kesalahan saat mengambil data.");
        console.error("Error fetching data", err);
      } finally {
        setLoading(false);
      }
    };

    fetchKegiatan();
  }, []);

  const categories = [
    "all",
    "Sosial",
    "Edukasi",
    "Lingkungan",
    "Kesehatan",
    "Bencana",
  ];

  // Handle category change
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Open delete modal
  const openDeleteModal = (id) => {
    setSelectedKegiatan(id);
    setIsModalOpen(true);
  };

  // Close delete modal
  const closeDeleteModal = () => {
    setIsModalOpen(false);
    setSelectedKegiatan(null);
  };

  // Handle delete
  const handleDeleteClick = async () => {
    if (!selectedKegiatan) return;

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
        `https://relawanku.xyz/api/v1/admin/program/${selectedKegiatan}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        alert("Kegiatan berhasil dihapus!");
        // Remove the deleted kegiatan from the state without refetching from API
        setKegiatan((prevKegiatan) =>
          prevKegiatan.filter((item) => item.id !== selectedKegiatan)
        );
        closeDeleteModal();
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
          <div className="text-sm text-gray-500 mb-6">
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
                        <td className="px-6 py-4 text-center">{index + 1}</td>
                        <td className="px-6 py-4">{item.title}</td>
                        <td className="px-6 py-4">
                          {item.start_date && item.end_date
                            ? (() => {
                                const startedAtDate = new Date(item.start_date);
                                const finishedAtDate = new Date(item.end_date);
                                const timeDiff = finishedAtDate - startedAtDate;
                                const dayDiff = timeDiff / (1000 * 3600 * 24);
                                return `${Math.floor(dayDiff)} hari`;
                              })()
                            : "-"}
                        </td>
                        <td className="px-6 py-4">{item.quota}</td>
                        <td className="px-6 py-4">{item.category}</td>
                        <td className="px-6 py-4 text-center flex justify-center space-x-2">
                          <button
                            className="w-4 transform hover:text-blue-500 hover:scale-110"
                            onClick={() => navigate(`/relawan-edit/${item.ID}`)}
                          >
                            <i className="fas fa-edit"></i>
                          </button>
                          <button
                            className="w-4 transform hover:text-yellow-500 hover:scale-110"
                            onClick={() => openDeleteModal(item.ID)}
                          >
                            <i className="fas fa-trash"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Delete Modal */}
          {isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="bg-white p-6 rounded-lg w-1/3">
                <h3 className="text-lg font-semibold mb-4">Konfirmasi Hapus</h3>
                <p>Apakah Anda yakin ingin menghapus kegiatan ini?</p>
                <div className="flex justify-end mt-4">
                  <button
                    onClick={closeDeleteModal}
                    className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md mr-2"
                  >
                    Batal
                  </button>
                  <button
                    onClick={handleDeleteClick}
                    className="px-4 py-2 bg-red-500 text-white rounded-md"
                  >
                    Hapus
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default KegiatanRelawanAdmin;
