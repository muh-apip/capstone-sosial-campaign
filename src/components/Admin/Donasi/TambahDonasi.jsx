import React from "react";
import Sidebar from "../Layout/Sidebar";
import NavbarAdmin from "../Layout/NavbarAdmin";
import { Link } from "react-router-dom";

const TambahDonasi = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar className="w-full lg:w-1/4 xl:w-1/5" />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <NavbarAdmin />

        {/* Content */}
        <div className="p-6 lg:p-8">
          {/* Breadcrumb */}
          <div className="text-sm text-gray-500 mb-6">
            <Link to="/dashboard" className="hover:text-gray-800">
              Dashboard
            </Link>{" "}
            /{" "}
            <Link to="/donasi-admin" className="hover:text-gray-800">
              Donasi
            </Link>{" "}
            / <span className="text-gray-800 font-semibold">Tambah Donasi</span>
          </div>

          {/* Form Container */}
          <div className="bg-white rounded-lg shadow p-6">
            <form>
              {/* Kategori */}
              <div className="mb-4">
                <label
                  htmlFor="kategori"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Kategori
                </label>
                <select
                  id="kategori"
                  className="w-full px-3 py-2 border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                >
                  <option>Pilih Kategori</option>
                  {/* Add more options here */}
                </select>
              </div>

              {/* Judul Kegiatan */}
              <div className="mb-4">
                <label
                  htmlFor="judulKegiatan"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Judul Kegiatan
                </label>
                <input
                  type="text"
                  id="judulKegiatan"
                  className="w-full px-3 py-2 border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                  placeholder="Masukkan judul kegiatan"
                />
              </div>

              {/* Subjudul */}
              <div className="mb-4">
                <label
                  htmlFor="subjudul"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Subjudul
                </label>
                <input
                  type="text"
                  id="subjudul"
                  className="w-full px-3 py-2 border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                  placeholder="Masukkan subjudul"
                />
              </div>

              {/* Detail Donasi */}
              <div className="mb-4">
                <label
                  htmlFor="detailDonasi"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Detail Donasi
                </label>
                <textarea
                  id="detailDonasi"
                  rows="4"
                  className="w-full px-3 py-2 border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                  placeholder="Masukkan detail donasi"
                ></textarea>
              </div>

              {/* Kabar Terbaru */}
              <div className="mb-4">
                <label
                  htmlFor="kabarTerbaru"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Kabar Terbaru (Opsional)
                </label>
                <textarea
                  id="kabarTerbaru"
                  rows="4"
                  className="w-full px-3 py-2 border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                  placeholder="Masukkan kabar terbaru"
                ></textarea>
              </div>

              {/* Tanggal Awal dan Akhir Donasi */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                {/* Tanggal Awal */}
                <div>
                  <label
                    htmlFor="tanggalAwal"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Tanggal Awal Donasi
                  </label>
                  <input
                    type="date"
                    id="tanggalAwal"
                    className="w-full px-3 py-2 border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                  />
                </div>

                {/* Tanggal Akhir */}
                <div>
                  <label
                    htmlFor="tanggalAkhir"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Tanggal Berakhir Donasi
                  </label>
                  <input
                    type="date"
                    id="tanggalAkhir"
                    className="w-full px-3 py-2 border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                  />
                </div>

                {/* Lokasi */}
                <div>
                  <label
                    htmlFor="lokasi"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Lokasi
                  </label>
                  <input
                    type="text"
                    id="lokasi"
                    className="w-full px-3 py-2 border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                    placeholder="Masukkan lokasi"
                  />
                </div>
              </div>

              {/* Target Donasi */}
              <div className="mb-4">
                <label
                  htmlFor="targetDonasi"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Target Donasi
                </label>
                <input
                  type="number"
                  id="targetDonasi"
                  className="w-full px-3 py-2 border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                  placeholder="Masukkan target donasi"
                />
              </div>

              {/* Upload Gambar */}
              <div className="mb-4">
                <label
                  htmlFor="uploadGambar"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Upload Gambar
                </label>
                <input
                  type="file"
                  id="uploadGambar"
                  className="w-full px-3 py-2 border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                />
              </div>

              {/* Submit Button */}
              <div className="text-right">
                <button
                  type="submit"
                  className="px-6 py-2 bg-green-500 text-white font-medium rounded-md shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
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

export default TambahDonasi;
