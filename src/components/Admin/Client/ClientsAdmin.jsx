import React, { useState } from "react";
import Sidebar from "../Layout/Sidebar";
import Navbar from "../Layout/NavbarAdmin";

const ClientsAdmin = () => {
  const allData = Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,
    username: "fadhila12_",
    email: "fadhila@gmail.com",
    tanggalRegistrasi: "1-10-2024",
  }));

  // State for pagination and delete modal
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const itemsPerPage = 10;

  // Calculate current data to display
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = allData.slice(indexOfFirstItem, indexOfLastItem);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Handle delete action
  const handleDelete = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const confirmDelete = () => {
    console.log("Deleting item:", selectedItem);
    setShowModal(false);
    setSelectedItem(null);
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gray-100">
      {/* Sidebar component */}
      <Sidebar className="w-full lg:w-1/4 xl:w-1/5" />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar component */}
        <div className="sticky top-0 z-50">
          <Navbar />
        </div>

        {/* Table Content */}
        <div className="p-6 flex-1 overflow-auto">
          {/* Breadcrumb */}
          <div className="text-sm text-gray-500 mb-4 p-4">
            Dashboard /{" "}
            <span className="text-gray-800 font-semibold">Clients</span>
          </div>

          <div className="overflow-x-auto bg-white shadow-md rounded-md">
            {/* Table structure */}
            <table className="min-w-full table-auto">
              <thead >
                <tr className="bg-[#CAE8CB] text-gray-800 uppercase text-sm leading-normal">
                  {/* Table headers with rounded corners */}
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
                    key={item.id} // Unique key for each row
                    className="bg-white hover:bg-gray-100 transition-colors"
                  >
                    <td className="px-6 py-4 text-center">{item.id}</td>
                    <td className="px-6 py-4">{item.username}</td>
                    <td className="px-6 py-4">{item.email}</td>
                    <td className="px-6 py-4">{item.tanggalRegistrasi}</td>
                    <td className="px-6 py-4 text-center">
                      {/* Trash icon button for delete */}
                      <button
                        onClick={() => handleDelete(item)}
                        className="text-gray-500 hover:text-gray-700 flex items-center justify-center"
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
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center shadow-md justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-md w-96">
            <p className="text-center text-gray-800 font-medium mb-6">
              Apakah kamu yakin ingin menghapus akun tersebut?
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setShowModal(false)}
                className="w-32 px-4 py-2 border border-green-500 text-green-500 rounded-lg hover:bg-green-600 hover:text-white"
              >
                Kembali
              </button>
              <button
                onClick={confirmDelete}
                className="w-32 px-4 py-2 border border-green-500 text-green-500 rounded-lg hover:bg-green-600 hover:text-white"
              >
                {"   "}
                Ya{"   "}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClientsAdmin;
