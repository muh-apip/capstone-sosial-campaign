import React, { useState, useEffect } from "react";
import Sidebar from "../Layout/Sidebar";
import NavbarAdmin from "../Layout/NavbarAdmin";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const ArtikelAdmin = () => {
  const [artikelData, setArtikelData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedArtikel, setSelectedArtikel] = useState(null);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchArticles = async () => {
      setIsLoading(true);
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("Token not found");
        }
        const response = await axios.get(
          "https://relawanku.xyz/api/v1/admin/articles",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log("API Response:", response.data); // Debugging respons API

        // Ambil data dari response.data.data
        const articles = Array.isArray(response.data.data)
          ? response.data.data
          : [];
        setArtikelData(articles); // Update state dengan data yang benar
      } catch (err) {
        console.error("Error fetching articles", err);
        setError(err.response?.data?.message || "Failed to fetch articles");
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const openDeleteModal = (id) => {
    setSelectedArtikel(id);
    setIsModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsModalOpen(false);
    setSelectedArtikel(null);
  };

  const handleDelete = async () => {
    try {
      // Ambil token dari localStorage
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Token tidak ditemukan. Silakan login kembali.");
      }
  
      // Kirim request DELETE ke API dengan menggunakan ID artikel yang dipilih
      const response = await axios.delete(
        `https://relawanku.xyz/api/v1/admin/article/${selectedArtikel}`, // Pastikan endpoint sudah benar
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      // Log untuk memastikan respon API
      console.log("Delete Response:", response.data);
  
      // Perbarui artikelData setelah penghapusan berhasil
      setArtikelData((prevData) =>
        prevData.filter((item) => item.ID !== selectedArtikel) // Gunakan item.ID sesuai dengan struktur data Anda
      );
  
      // Tutup modal
      closeDeleteModal();
  
      // Tampilkan notifikasi keberhasilan
      alert("Artikel berhasil dihapus.");
    } catch (err) {
      console.error("Error deleting article:", err.response?.data || err.message);
  
      // Tampilkan pesan error kepada pengguna
      alert(
        "Gagal menghapus artikel: " +
          (err.response?.data?.message || err.message)
      );
    }
  };
  
  

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
      <Sidebar className="w-full lg:w-1/4 xl:w-1/5" />
      <div className="flex-1 flex flex-col">
        <NavbarAdmin />
        <div className="p-6">
          <div className="text-sm text-gray-500 mb-4">
            <Link to="/dashboard" className="hover:text-gray-800">
              Dashboard /
            </Link>
            <span className="font-semibold text-gray-800"> Artikel</span>
          </div>

          <div className="flex gap-3 mb-4">
            <button className="px-4 py-2 bg-primary-green text-white font-medium rounded-full hover:bg-green-600">
              Semua
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-800 font-medium rounded-full hover:bg-gray-300">
              Sosial
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-800 font-medium rounded-full hover:bg-gray-300">
              Lingkungan
            </button>
            <button
              className="ml-auto px-4 py-2 bg-custom-green text-white font-medium rounded-lg hover:bg-green-600"
              onClick={() => navigate("/tambah-artikel")}
            >
              Tambah
            </button>
          </div>

          <div className="overflow-x-auto bg-white shadow-md rounded-lg">
            {isLoading ? (
              <div className="p-6 text-center text-gray-500">
                Memuat data...
              </div>
            ) : error ? (
              <div className="p-6 text-center text-red-500">{error}</div>
            ) : artikelData.length > 0 ? (
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-[#CAE8CB] text-gray-800 text-sm uppercase">
                    <th className="py-4 px-6 text-left">No</th>
                    <th className="py-4 px-6 text-left">Judul Artikel</th>
                    <th className="py-4 px-6 text-left">Kategori</th>
                    <th className="py-4 px-6 text-left">Tanggal Publikasi</th>
                    <th className="py-4 px-6 text-center">Opsi</th>
                  </tr>
                </thead>
                <tbody>
                  {artikelData.map((item, index) => (
                    <tr
                      key={item.ID || `artikel-${index}`} // Gunakan `item.ID` jika ada
                      className={`border-b border-gray-200 hover:bg-gray-50 ${
                        index % 2 === 0 ? "bg-gray-50" : "bg-white"
                      }`}
                    >
                      <td className="py-4 px-6 text-left">{index + 1}</td>
                      <td className="py-4 px-6 text-left">
                        {item.Title || "Tidak ada judul"}
                      </td>
                      <td className="py-4 px-6 text-left">
                        {item.Category || "Tidak ada kategori"}
                      </td>
                      <td className="py-4 px-6 text-left">
                        {item.CreatedAt
                          ? new Date(item.CreatedAt).toLocaleDateString("id-ID")
                          : "Tanggal tidak tersedia"}
                      </td>
                      <td className="py-4 px-6 text-center">
                        <div className="flex items-center justify-center gap-4">
                          <button
                            className="w-4 transform hover:text-blue-500 hover:scale-110"
                            onClick={() => navigate(`/edit-artikel/${item.ID}`)}
                          >
                            <i className="fas fa-edit"></i>
                          </button>
                          <button
                            className="w-4 transform hover:text-red-500 hover:scale-110"
                            onClick={() => openDeleteModal(item.ID)}
                          >
                            <i className="fas fa-trash"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="p-6 text-center text-gray-500">
                Tidak ada artikel yang ditemukan.
              </div>
            )}
          </div>
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
              <p className="text-center text-gray-800 mb-4">
                Apakah kamu yakin ingin menghapusnya?
              </p>
              <div className="flex justify-center gap-4">
                <button
                  className="px-4 py-2 bg-white text-green-500 border border-green-500 rounded-md hover:bg-green-100"
                  onClick={closeDeleteModal}
                >
                  Kembali
                </button>
                <button
                  className="px-4 py-2 bg-custom-green text-white rounded-md hover:bg-green-600"
                  onClick={handleDelete}
                >
                  Ya
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArtikelAdmin;
