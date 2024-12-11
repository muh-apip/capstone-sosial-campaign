import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Sidebar from "../Layout/Sidebar";
import Navbar from "../Layout/NavbarAdmin";

const TabelKegiatan = () => {
  const [kegiatan, setKegiatan] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [selectedCategory, setSelectedCategory] = useState("all");

  // Data statis untuk kegiatan
  const kegiatanData = [
    {
      id: 1,
      judul: "Kegiatan A",
      rentang_waktu: "01 Jan - 10 Jan 2024",
      target_anggota: 50,
      category: "Lingkungan",
    },
    {
      id: 2,
      judul: "Kegiatan B",
      rentang_waktu: "05 Feb - 15 Feb 2024",
      target_anggota: 30,
      category: "Sosial",
    },
    {
      id: 3,
      judul: "Kegiatan C",
      rentang_waktu: "10 Mar - 20 Mar 2024",
      target_anggota: 40,
      category: "Edukasi",
    },
    {
      id: 4,
      judul: "Kegiatan D",
      rentang_waktu: "15 Apr - 25 Apr 2024",
      target_anggota: 60,
      category: "Sosial",
    },
    {
      id: 5,
      judul: "Kegiatan E",
      rentang_waktu: "01 Mei - 10 Mei 2024",
      target_anggota: 70,
      category: "Lingkungan",
    },
  ];

  // Simulasi proses pengambilan data
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setKegiatan(kegiatanData); // Set data statis setelah delay
      setLoading(false);
    }, 500); // Simulasi delay
  }, []);

  const categories = ["all", ...new Set(kegiatan.map((item) => item.category))];

  const filteredKegiatan =
    selectedCategory === "all"
      ? kegiatan
      : kegiatan.filter((item) => item.category === selectedCategory);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Sidebar state
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const navigate = useNavigate(); // Hook untuk navigasi

  const handleEditClick = (id) => {
    navigate(`/kegiatan/edit/${id}`); // Navigasi ke halaman edit dengan ID kegiatan
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar className="w-full lg:w-1/4 xl:w-1/5" />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <div className="sticky top-0 z-50">
          <Navbar />
        </div>

        <div className="p-6 flex-1 overflow-auto">
          {/* Breadcrumb */}
          <div className="text-sm text-gray-500 mb-4 p-4">
            Dashboard /{" "}
            <span className="text-gray-800 font-semibold">Relawan</span>
          </div>

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
                      <button
                        className="bg-teal-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 mr-2 text-xs"
                        onClick={() => handleEditClick(item.id)} // Mengarahkan ke halaman edit
                      >
                        Edit
                      </button>
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
