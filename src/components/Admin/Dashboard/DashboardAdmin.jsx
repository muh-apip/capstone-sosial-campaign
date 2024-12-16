import React, { useState, useEffect } from "react";
import Sidebar from "../Layout/Sidebar";
import CardStats from "./CardStats";
import TableSection from "./TableSection";
import NavbarAdmin from "../Layout/NavbarAdmin";
import axios from "axios"; // Import axios for fetching data

const DashboardAdmin = () => {
  const [artikelData, setArtikelData] = useState([]);
  const [relawanData, setRelawanData] = useState([]);
  const [donasiData, setDonasiData] = useState([]);
  const [clientsData, setClientsData] = useState([]); // State untuk data pengguna
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) throw new Error("Token not found");
        const response = await axios.get(
          "https://relawanku.xyz/api/v1/admin/articles",
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setArtikelData(response.data.data);
      } catch (err) {
        setError("Failed to fetch article data");
        console.error(err);
      }
    };

    const fetchRelawan = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) throw new Error("Token not found");
        const response = await axios.get(
          "https://relawanku.xyz/api/v1/admin/programs",
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setRelawanData(response.data.data);
      } catch (err) {
        setError("Failed to fetch volunteer data");
        console.error(err);
      }
    };

    const fetchDonasi = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) throw new Error("Token not found");
        const response = await axios.get(
          "https://relawanku.xyz/api/v1/admin/donasi",
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setDonasiData(response.data.data);
      } catch (err) {
        setError("Failed to fetch donation data");
        console.error(err);
      }
    };

    const fetchClients = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) throw new Error("Token not found");
        const response = await axios.get(
          "https://relawanku.xyz/api/v1/admin/clients",
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setClientsData(response.data.data);
      } catch (err) {
        setError("Failed to fetch client data");
        console.error(err);
      }
    };

    const fetchData = async () => {
      setIsLoading(true);
      await Promise.all([
        fetchArticles(),
        fetchRelawan(),
        fetchDonasi(),
        fetchClients(),
      ]);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="spinner">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen text-red-500">
        <p>{error}</p>
      </div>
    );
  }

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
            <CardStats title="Artikel" count={artikelData.length} />
            <CardStats title="Kegiatan Donasi" count={donasiData.length} />
            <CardStats title="Kegiatan Relawan" count={relawanData.length} />
            <CardStats title="Pengguna" count={clientsData.length} />
          </div>

          {/* Tables Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <TableSection
              title="Artikel"
              headers={["Judul Artikel", "Kategori", "Tanggal Publikasi"]}
              data={artikelData.map((item) => [
                item.Title || "Tidak ada judul",
                item.Category || "Tidak Ada Kategori",
                item.CreatedAt
                  ? new Date(item.CreatedAt).toLocaleDateString()
                  : "Tanggal tidak tersedia",
              ])}
            />
            <TableSection
              title="Donasi"
              headers={["Judul Kegiatan", "Rentang Waktu", "Target Donasi"]}
              data={donasiData.map((item) => [
                item.Title || "Tidak ada judul",
                `${item.StartedAt} - ${item.FinishedAt}`,
                item.TargetDonation || "Tidak ada target",
              ])}
            />
            <TableSection
              title="Relawan"
              headers={["Judul Kegiatan", "Rentang Waktu", "Target Anggota"]}
              data={relawanData.map((item) => [
                item.title || "Tidak ada judul",
                `${new Date(item.start_date).toLocaleDateString()} - ${new Date(
                  item.end_date
                ).toLocaleDateString()}`,
                `${item.quota}` || "Tidak ada target anggota",
              ])}
            />
            <TableSection
              title="Transaksi Terbaru"
              headers={[
                "No",
                "Tanggal Transaksi",
                "Username",
                "Jumlah",
                "Status",
              ]}
              data={[["IN-00178", "19/10/2024", "fashih12_", "50,000", "PAID"]]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardAdmin;
