import React, { useState, useEffect } from "react"; 
import Sidebar from "../Layout/Sidebar"; 
import CardStats from "./CardStats"; 
import TableSection from "./TableSection"; 
import NavbarAdmin from "../Layout/NavbarAdmin"; 
import axios from "axios"; // Import axios untuk mengambil data dari API

const DashboardAdmin = () => {
  const [artikelData, setArtikelData] = useState([]); // State untuk menyimpan data artikel
  const [isLoading, setIsLoading] = useState(true); // Untuk loading state
  const [error, setError] = useState(null); // Untuk error handling

  useEffect(() => {
    const fetchArticles = async () => {
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
        setArtikelData(response.data.data); // Menyimpan data artikel yang didapat ke state
      } catch (err) {
        setError("Gagal mengambil data artikel");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticles();
  }, []); // Empty dependency array to run this effect once on component mount

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar className="w-full lg:w-1/4 xl:w-1/5" />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <NavbarAdmin />

        {/* Content */}
        <div className="p-4 lg:p-6">
          {/* Cards Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <CardStats title="Artikel" count={artikelData.length} /> {/* Menampilkan jumlah artikel */}
            <CardStats title="Kegiatan Donasi" count="150" />
            <CardStats title="Kegiatan Relawan" count="152" />
            <CardStats title="Pengguna" count="200" />
          </div>

          {/* Tables Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <TableSection
              title="Transaksi Terbaru"
              headers={[
                "No",
                "Tanggal Transaksi",
                "Username",
                "Jumlah",
                "Status",
              ]}
              data={[
                ["IN-00178", "19/10/2024", "fashih12_", "50,000", "PAID"],
                // Tambahkan data lainnya
              ]}
            />
            <TableSection
              title="Artikel"
              headers={["Judul Artikel", "Kategori", "Tanggal Publikasi"]}
              data={artikelData.map((item) => [
                item.Title || "Tidak ada judul", // Memanggil item.Title untuk judul artikel
                item.Category || "Tidak Ada Kategori", // Memanggil item.Category untuk kategori
                item.CreatedAt
                  ? new Date(item.CreatedAt).toLocaleDateString() // Memanggil item.CreatedAt untuk tanggal
                  : "Tanggal tidak tersedia",
              ])} // Menggunakan artikelData.map untuk memetakan data langsung ke dalam tabel
            />
            <TableSection
              title="Donasi"
              headers={["Judul Kegiatan", "Rentang Waktu", "Target Donasi"]}
              data={[["Judul 1", "2-5 Desember 2024", "18.000.000"]]} // Data donasi statis
            />
            <TableSection
              title="Relawan"
              headers={["Judul Kegiatan", "Rentang Waktu", "Target Anggota"]}
              data={[["Judul 1", "2-5 Desember 2024", "50"]]} // Data relawan statis
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardAdmin;
