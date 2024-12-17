import React, { useState, useEffect } from "react";
import Sidebar from "../Layout/Sidebar";
import NavbarAdmin from "../Layout/NavbarAdmin";
import { Link } from "react-router-dom";
import axios from "axios";

// Fungsi untuk memformat tanggal
const formatDate = (dateString) => {
  if (!dateString) return "-"; // Menangani input kosong atau undefined
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString("id-ID", options);
};

const ClientsAdmin = () => {
  const [allData, setAllData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false); // Inisialisasi modal state
  const [selectedItem, setSelectedItem] = useState(null); // Inisialisasi selected item
  const [loading, setLoading] = useState(false); // Menangani loading state
  const [error, setError] = useState(null); // Menangani error state

  const itemsPerPage = 10;

  // Fetch data client
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null); // Reset error sebelum mencoba fetch data
      try {
        const token = localStorage.getItem("token");
        if (!token) throw new Error("Token tidak ditemukan, silakan login.");

        const response = await axios.get(
          "https://relawanku.xyz/api/v1/admin/clients",
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );

        const fetchedData = Array.isArray(response.data)
          ? response.data
          : response.data.data || [];

        setAllData(fetchedData);
      } catch (error) {
        setError("Terjadi kesalahan saat mengambil data.");
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  const handleDelete = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const confirmDelete = async () => {
    if (!selectedItem) return;
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("Token tidak ditemukan");

      const response = await axios.delete(
        `https://relawanku.xyz/api/v1/admin/client/${selectedItem.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        alert("Data berhasil dihapus!");
        setIsModalOpen(false);
        setAllData((prevData) =>
          prevData.filter((item) => item.id !== selectedItem.id)
        );
      } else {
        alert("Gagal menghapus data.");
      }
    } catch (error) {
      console.error("Error deleting data:", error);
      alert("Terjadi kesalahan saat menghapus data.");
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = allData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gray-100">
      <Sidebar className="w-full lg:w-1/4 xl:w-1/5" />
      <div className="flex-1 flex flex-col">
        <div className="sticky top-0 z-50">
          <NavbarAdmin />
        </div>
        <div className="p-6 flex-1 overflow-auto">
          <div className="text-sm text-gray-500 mb-6">
            <Link to="/dashboard" className="hover:text-gray-800">
              Dashboard /
            </Link>{" "}
            <span className="text-gray-800 font-semibold">Clients</span>
          </div>

          {loading ? (
            <div>Loading...</div>
          ) : error ? (
            <div>{error}</div>
          ) : (
            <div className="overflow-x-auto bg-white shadow-md rounded-md">
              <table className="min-w-full table-auto">
                <thead>
                  <tr className="bg-[#CAE8CB] text-gray-800 uppercase text-sm leading-normal">
                    <th className="px-6 py-4 text-left font-semibold rounded-tl-lg">
                      No
                    </th>
                    <th className="px-6 py-4 text-left font-semibold">
                      Username
                    </th>
                    <th className="px-6 py-4 text-left font-semibold">Email</th>
                    <th className="px-6 py-4 text-left font-semibold">
                      Tanggal Registrasi
                    </th>
                    <th className="px-6 py-4 text-center font-semibold rounded-tr-lg">
                      Opsi
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {currentData.map((item, index) => (
                    <tr
                      key={item.id}
                      className="bg-white hover:bg-gray-100 transition-colors"
                    >
                      <td className="px-6 py-4 text-center">{index + 1}</td>
                      <td className="px-6 py-4">{item.username}</td>
                      <td className="px-6 py-4">{item.email}</td>
                      <td className="px-6 py-4">
                        {formatDate(item.tanggal_registrasi)}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <button
                          onClick={() => handleDelete(item)}
                          className="text-gray-500 hover:text-gray-700 flex items-center justify-center"
                          title="Hapus"
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

          {/* Pagination Component */}
          <div className="flex justify-center items-center mt-4 space-x-2">
            <button
              onClick={() =>
                handlePageChange(currentPage > 1 ? currentPage - 1 : 1)
              }
              className="p-2 text-gray-600 hover:bg-gray-100 rounded-full"
            >
              {"<<"}
            </button>
            {Array.from(
              { length: Math.ceil(allData.length / itemsPerPage) },
              (_, index) => index + 1
            ).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-100 ${
                  currentPage === page ? "bg-gray-200 font-bold" : ""
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() =>
                handlePageChange(
                  currentPage < Math.ceil(allData.length / itemsPerPage)
                    ? currentPage + 1
                    : currentPage
                )
              }
              className="p-2 text-gray-600 hover:bg-gray-100 rounded-full"
            >
              {">>"}
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-md w-96">
            <p className="text-center text-gray-800 font-medium mb-6">
              Apakah kamu yakin ingin menghapus akun {selectedItem.username}?
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setIsModalOpen(false)} // Tutup modal
                className="w-32 px-4 py-2 border border-green-500 text-green-500 rounded-lg hover:bg-green-600 hover:text-white"
              >
                Kembali
              </button>
              <button
                onClick={confirmDelete} // Konfirmasi penghapusan
                className="w-32 px-4 py-2 border border-green-500 text-green-500 rounded-lg hover:bg-green-600 hover:text-white"
              >
                Ya
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClientsAdmin;
