import React from "react";
import Sidebar from "../Layout/Sidebar";
import CardStats from "./CardStats";
import TableSection from "./TableSection";
import NavbarAdmin from "../Layout/NavbarAdmin";

const DashboardAdmin = () => {
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
            <CardStats title="Artikel" count="200" />
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
              data={[
                ["Judul 1", "Lingkungan", "19/10/2024"],
                // Tambahkan data lainnya
              ]}
            />
            <TableSection
              title="Donasi"
              headers={["Judul Kegiatan", "Rentang Waktu", "Target Donasi"]}
              data={[
                ["Judul 1", "2-5 Desember 2024", "18.000.000"],
                // Tambahkan data lainnya
              ]}
            />
            <TableSection
              title="Relawan"
              headers={["Judul Kegiatan", "Rentang Waktu", "Target Anggota"]}
              data={[
                ["Judul 1", "2-5 Desember 2024", "50"],
                // Tambahkan data lainnya
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardAdmin;
