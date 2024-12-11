import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Sidebar from "../Layout/Sidebar";
import NavbarAdmin from "../Layout/NavbarAdmin";

const EditDonasi = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [donasi, setDonasi] = useState({
    kategori: "",
    judulKegiatan: "",
    subjudul: "",
    detailDonasi: "",
    kabarTerbaru: "",
    tanggalAwal: "",
    tanggalAkhir: "",
    lokasi: "",
    targetDonasi: "",
    uploadGambar: null,
  });

  useEffect(() => {
    // Mock data fetch berdasarkan id
    const mockData = {
      id: 1,
      kategori: "Bencana Alam",
      judulKegiatan: "Judul 1",
      subjudul: "Subjudul 1",
      detailDonasi: "Detail donasi untuk Judul 1",
      kabarTerbaru: "Kabar terbaru...",
      tanggalAwal: "2024-12-01",
      tanggalAkhir: "2024-12-05",
      lokasi: "Lokasi 1",
      targetDonasi: "10000000",
      uploadGambar: null,
    };
    setDonasi(mockData); // Ganti dengan API fetch jika ada backend
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDonasi({ ...donasi, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simpan perubahan data (API call atau update state lokal)
    console.log("Data disimpan:", donasi);
    navigate("/donasi-admin");
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
      <Sidebar className="w-full lg:w-1/4 xl:w-1/5" />
      <div className="flex-1 flex flex-col">
        <NavbarAdmin />
        <div className="p-6 lg:p-8">
          <div className="text-sm text-gray-500 mb-6">
          <Link to="/dashboard" className="hover:text-gray-800">
              Dashboard
            </Link>{" "}
            /{" "}
            <Link to="/donasi-admin" className="hover:text-gray-800">
              Donasi /
            </Link>{" "}
            <span className="text-gray-800 font-semibold">Edit Donasi</span>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="kategori" className="block text-sm font-medium text-gray-700 mb-2">Kategori</label>
                <select
                  id="kategori"
                  name="kategori"
                  value={donasi.kategori}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border-gray-300 rounded-md"
                >
                  <option value="Bencana Alam">Bencana Alam</option>
                  <option value="Sosial">Sosial</option>
                  <option value="Pelestarian Lingkungan">Pelestarian Lingkungan</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="judulKegiatan" className="block text-sm font-medium text-gray-700 mb-2">Judul Kegiatan</label>
                <input
                  type="text"
                  id="judulKegiatan"
                  name="judulKegiatan"
                  value={donasi.judulKegiatan}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border-gray-300 rounded-md"
                />
              </div>
              {/* Tambahkan field lain sesuai kebutuhan */}
              <div className="text-right">
                <button
                  type="submit"
                  className="px-6 py-2 bg-green-500 text-white font-medium rounded-md"
                >
                  Simpan
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditDonasi;
