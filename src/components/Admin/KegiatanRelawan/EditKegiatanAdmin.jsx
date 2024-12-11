import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../Layout/Sidebar";
import Navbar from "../Layout/NavbarAdmin";

// Data Dummy untuk kegiatan
const kegiatanData = [
  {
    id: 1,
    judul: "Kegiatan A",
    rentang_waktu: "01 Jan - 10 Jan 2024",
    target_anggota: 50,
    category: "Lingkungan",
    location: "Jakarta",
    quota: 100,
    details: "Detail kegiatan A",
    start_date: "2024-01-01",
    end_date: "2024-01-10",
  },
  {
    id: 2,
    judul: "Kegiatan B",
    rentang_waktu: "05 Feb - 15 Feb 2024",
    target_anggota: 30,
    category: "Sosial",
    location: "Bandung",
    quota: 50,
    details: "Detail kegiatan B",
    start_date: "2024-02-05",
    end_date: "2024-02-15",
  },
  {
    id: 3,
    judul: "Kegiatan C",
    rentang_waktu: "10 Mar - 20 Mar 2024",
    target_anggota: 40,
    category: "Edukasi",
    location: "Yogyakarta",
    quota: 60,
    details: "Detail kegiatan C",
    start_date: "2024-03-10",
    end_date: "2024-03-20",
  },
  // Tambahkan data lainnya jika diperlukan
];

const EditKegiatanAdmin = () => {
  const { id } = useParams(); // Mengambil ID kegiatan dari URL
  const navigate = useNavigate(); // Untuk navigasi setelah edit

  const [formData, setFormData] = useState({
    category: "",
    title: "",
    details: "",
    start_date: "",
    end_date: "",
    location: "",
    quota: 0,
  });

  useEffect(() => {
    // Mencari data kegiatan berdasarkan ID dari data dummy
    const kegiatan = kegiatanData.find((item) => item.id === parseInt(id));
    if (kegiatan) {
      setFormData({
        category: kegiatan.category,
        title: kegiatan.judul,
        details: kegiatan.details,
        start_date: kegiatan.start_date,
        end_date: kegiatan.end_date,
        location: kegiatan.location,
        quota: kegiatan.quota,
      });
    } else {
      alert("Kegiatan tidak ditemukan!");
    }
  }, [id]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulasi pengiriman data ke server
    console.log("Data yang dikirim:", formData);
    alert("Kegiatan berhasil diperbarui!");
    navigate("/kegiatan"); // Setelah berhasil, arahkan ke halaman daftar kegiatan
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <div className="sticky top-0 z-50 bg-white shadow-md">
          <Navbar />
        </div>

        {/* Form Content */}
        <main className="flex-1 p-8 overflow-y-auto">
          <div className="p-8 bg-white shadow-md rounded-lg max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-gray-700">
              Edit Kegiatan
            </h2>
            <form onSubmit={handleSubmit}>
              {/* Kategori */}
              <div className="mb-6">
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Kategori
                </label>
                <select
                  id="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 px-4 py-2"
                >
                  <option value="">Pilih Kategori</option>
                  <option value="Lingkungan">Lingkungan</option>
                  <option value="Sosial">Sosial</option>
                  <option value="Edukasi">Edukasi</option>
                </select>
              </div>

              {/* Judul Kegiatan */}
              <div className="mb-6">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Judul Kegiatan
                </label>
                <input
                  type="text"
                  id="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 px-4 py-2"
                  placeholder="Masukkan judul kegiatan"
                />
              </div>

              {/* Detail Kegiatan */}
              <div className="mb-6">
                <label
                  htmlFor="details"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Detail Kegiatan
                </label>
                <textarea
                  id="details"
                  rows="4"
                  value={formData.details}
                  onChange={handleChange}
                  className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 px-4 py-2"
                  placeholder="Masukkan detail kegiatan"
                ></textarea>
              </div>

              {/* Tanggal Mulai dan Berakhir */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="start_date"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Tanggal Mulai Kegiatan
                  </label>
                  <input
                    type="date"
                    id="start_date"
                    value={formData.start_date}
                    onChange={handleChange}
                    className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 px-4 py-2"
                  />
                </div>
                <div>
                  <label
                    htmlFor="end_date"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Tanggal Berakhir Kegiatan
                  </label>
                  <input
                    type="date"
                    id="end_date"
                    value={formData.end_date}
                    onChange={handleChange}
                    className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 px-4 py-2"
                  />
                </div>
              </div>

              {/* Lokasi */}
              <div className="mb-6">
                <label
                  htmlFor="location"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Lokasi
                </label>
                <input
                  type="text"
                  id="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 px-4 py-2"
                  placeholder="Masukkan lokasi kegiatan"
                />
              </div>

              {/* Kuota */}
              <div className="mb-6">
                <label
                  htmlFor="quota"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Kuota
                </label>
                <input
                  type="number"
                  id="quota"
                  value={formData.quota}
                  onChange={handleChange}
                  className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 px-4 py-2"
                  placeholder="Masukkan kuota peserta"
                />
              </div>

              {/* Tombol Simpan */}
              <div className="text-right">
                <button
                  type="submit"
                  className="px-6 py-2 bg-green-500 text-white rounded-md shadow hover:bg-green-600 focus:outline-none"
                >
                  Simpan
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default EditKegiatanAdmin;
