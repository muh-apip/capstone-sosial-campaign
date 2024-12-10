import React, { useState, useEffect } from "react";
import Sidebar from "../Layout/Sidebar";
import NavbarAdmin from "../Layout/NavbarAdmin";
import { useNavigate, Link } from "react-router-dom";

const DonasiAdmin = () => {
  const [donasiData, setDonasiData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      const mockData = [
        {
          id: 1,
          title: "Judul 1",
          time: "2-5 Desember 2024",
          target: "10.000.000",
        },
        {
          id: 2,
          title: "Judul 2",
          time: "2-5 Desember 2024",
          target: "8.000.000",
        },
        {
          id: 3,
          title: "Judul 3",
          time: "2-5 Desember 2024",
          target: "12.000.000",
        },
      ];
      setDonasiData(mockData);
      setIsLoading(false);
    }, 1500);
  }, []);

  const handleDelete = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const confirmDelete = () => {
    setDonasiData((prevData) =>
      prevData.filter((data) => data.id !== selectedItem.id)
    );
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
      <Sidebar className="w-full lg:w-1/4 xl:w-1/5" />
      <div className="flex-1 flex flex-col">
        <NavbarAdmin />
        <div className="p-4 lg:p-6">
          <div className="text-sm text-gray-500 mb-6">
          <Link to="/dashboard" className="hover:text-gray-800">
              Dashboard /
            </Link>{" "}
            <span className="text-gray-800 font-semibold">Donasi</span>
          </div>
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3 mb-6 items-center">
            <button className="py-2 px-4 bg-primary-green text-white font-medium text-sm rounded-lg hover:bg-green-600">
              Semua Program
            </button>
            <button className="py-2 px-4 bg-gray-200 text-gray-700 font-medium text-sm rounded-lg hover:bg-gray-300">
              Terbaru
            </button>
            <button className="py-2 px-4 bg-gray-200 text-gray-700 font-medium text-sm rounded-lg hover:bg-gray-300">
              Bencana Alam
            </button>
            <button className="py-2 px-4 bg-gray-200 text-gray-700 font-medium text-sm rounded-lg hover:bg-gray-300">
              Pelestarian Lingkungan
            </button>
            <button className="py-2 px-4 bg-gray-200 text-gray-700 font-medium text-sm rounded-lg hover:bg-gray-300">
              Sosial
            </button>
            <div className="ml-auto">
              <button
                className="px-4 py-2 bg-custom-green text-white rounded hover:bg-green-600"
                onClick={() => navigate("/tambah-donasi")}
              >
                Tambah
              </button>
            </div>
          </div>
          <div className="overflow-x-auto bg-white shadow-md rounded-md">
            {isLoading ? (
              <div className="p-6 text-center text-gray-500">
                Memuat data...
              </div>
            ) : (
              <table className="min-w-full table-auto">
                <thead>
                  <tr className="bg-[#CAE8CB] text-gray-800 uppercase text-sm leading-normal">
                    <th className="py-4 px-6 text-left">No</th>
                    <th className="py-4 px-6 text-left">Judul Kegiatan</th>
                    <th className="py-4 px-6 text-left">Rentang Waktu</th>
                    <th className="py-4 px-6 text-left">Target Donasi</th>
                    <th className="py-4 px-6 text-center">Opsi</th>
                  </tr>
                </thead>
                <tbody>
                  {donasiData.map((item, index) => (
                    <tr
                      key={item.id}
                      className={`border-b border-gray-200 hover:bg-gray-100 ${
                        index % 2 === 0 ? "bg-gray-50" : ""
                      }`}
                    >
                      <td className="py-4 px-6 text-left whitespace-nowrap">
                        {index + 1}
                      </td>
                      <td className="py-4 px-6 text-left">{item.title}</td>
                      <td className="py-4 px-6 text-left">{item.time}</td>
                      <td className="py-4 px-6 text-left">{item.target}</td>
                      <td className="py-4 px-6 text-center">
                        <div className="flex item-center justify-center">
                          <button
                            className="w-4 mr-2 transform hover:text-blue-500 hover:scale-110"
                            onClick={() => navigate(`/edit-donasi/${item.id}`)}
                          >
                            <i className="fas fa-edit"></i>
                          </button>
                          <button
                            onClick={() => handleDelete(item)}
                            className="w-4 transform hover:text-red-500 hover:scale-110"
                          >
                            <i className="fas fa-trash"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>

      {/* Modal Konfirmasi */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-11/12 max-w-lg p-8 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-center mb-6">
              Konfirmasi Penghapusan
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Apakah Anda yakin ingin menghapus{" "}
              <span className="font-bold">{selectedItem?.title}</span>?
            </p>
            <div className="flex justify-center gap-6">
              <button
                className="text-green-500 border border-green-500 px-6 py-2 rounded-lg hover:bg-custom-green hover:text-white transition-all text-lg font-semibold"
                onClick={() => setIsModalOpen(false)}
              >
                Kembali
              </button>
              <button
                className="text-white border px-6 py-2 rounded-lg bg-custom-green transition-all text-lg font-semibold"
                onClick={confirmDelete}
              >
                Ya, Hapus
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DonasiAdmin;
