import React, { useState, useEffect } from "react";
import Sidebar from "../Layout/Sidebar";
import NavbarAdmin from "../Layout/NavbarAdmin";
import { Link } from "react-router-dom";
import axios from "axios";

const ClientsAdmin = () => {
  const [allData, setAllData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedKegiatan, setSelectedKegiatan] = useState(null);
  const itemsPerPage = 10;

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error(
            "Token tidak ditemukan, silakan login terlebih dahulu."
          );
        }

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

        // Periksa apakah data berupa array atau properti "data"
        const fetchedData = Array.isArray(response.data)
          ? response.data
          : response.data.data || [];
        console.log("Fetched Clients Data:", fetchedData);

        setAllData(fetchedData);
      } catch (error) {
        console.error("Error fetching data:", error);
        setAllData([]); // Set default ke array kosong jika error
      }
    };

    fetchData();
  }, []);

  // Handle perubahan halaman
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Fungsi untuk membuka modal dan mengatur selectedKegiatan
  const openDeleteModal = (id) => {
    setSelectedKegiatan(id); // Mengatur ID yang dipilih untuk dihapus
    setShowDeleteModal(true); // Menampilkan modal konfirmasi
  };

  // Fungsi untuk mengonfirmasi penghapusan
  const confirmDelete = async () => {
    if (!selectedKegiatan) {
      console.log("selectedKegiatan tidak ditemukan");
      return;
    }

    console.log("ID yang akan dihapus:", selectedKegiatan); // Debug log untuk ID yang akan dihapus

    try {
      const token = localStorage.getItem("token");
      const response = await axios.delete(
        `https://relawanku.xyz/api/v1/admin/clients/${selectedKegiatan}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      if (response.status === 200) {
        alert("Data berhasil dihapus!");
        setAllData((prevData) =>
          prevData.filter((item) => item.id !== selectedKegiatan)
        );
        setShowDeleteModal(false); // Menutup modal
      } else {
        console.error("Gagal menghapus data", response);
        alert("Terjadi kesalahan saat menghapus data.");
      }
    } catch (error) {
      console.error(
        "Error deleting data",
        error.response ? error.response.data : error
      );
      alert("Terjadi kesalahan saat menghapus data.");
    }
  };

  // Hitung data yang ditampilkan untuk pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = Array.isArray(allData)
    ? allData.slice(indexOfFirstItem, indexOfLastItem)
    : [];

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gray-100">
      {/* Sidebar component */}
      <Sidebar className="w-full lg:w-1/4 xl:w-1/5" />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar component */}
        <div className="sticky top-0 z-50">
          <NavbarAdmin />
        </div>

        {/* Table Content */}
        <div className="p-6 flex-1 overflow-auto">
          {/* Breadcrumb */}
          <div className="text-sm text-gray-500 mb-6">
            <Link to="/dashboard" className="hover:text-gray-800">
              Dashboard /
            </Link>{" "}
            <span className="text-gray-800 font-semibold">Donasi</span>
          </div>

          <div className="overflow-x-auto bg-white shadow-md rounded-md">
            {/* Table structure */}
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
                {currentData.map((item) => (
                  <tr
                    key={item.id}
                    className="bg-white hover:bg-gray-100 transition-colors"
                  >
                    <td className="px-6 py-4 text-center">{item.id}</td>
                    <td className="px-6 py-4">{item.username}</td>
                    <td className="px-6 py-4">{item.email}</td>
                    <td className="px-6 py-4">
                      {formatDate(item.tanggal_registrasi)}
                    </td>

                    <td className="px-6 py-4 text-center">
                      <button
                        onClick={() => openDeleteModal(item.id)} // Mengatur ID yang dipilih
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

            {/* Pagination controls */}
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
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center shadow-md justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-md w-96">
            <p className="text-center text-gray-800 font-medium mb-6">
              Apakah kamu yakin ingin menghapus akun tersebut?
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="w-32 px-4 py-2 border border-green-500 text-green-500 rounded-lg hover:bg-green-600 hover:text-white"
              >
                Kembali
              </button>
              <button
                onClick={confirmDelete}
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
