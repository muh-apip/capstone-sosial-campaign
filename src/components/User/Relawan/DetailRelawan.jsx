import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../Layout/NavbarDetail";
import Footer from "../Layout/FooterHome";
import { CheckIcon } from "@heroicons/react/20/solid";
import axios from "axios";

const DetailRelawan = () => {
  const { id } = useParams(); // Mengambil id dari URL
  const [relawanData, setRelawanData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [daysLeft, setDaysLeft] = useState(null); // State untuk menyimpan sisa hari

  useEffect(() => {
    const fetchRelawan = async () => {
      setIsLoading(true);
      try {
        const token = localStorage.getItem("token"); // Pastikan token disimpan di localStorage setelah login
        if (!token) {
          throw new Error(
            "Token tidak ditemukan, silakan login terlebih dahulu."
          );
        }
        console.log("Fetching data with token:", token);

        const response = await axios.get(
          `https://relawanku.xyz/api/v1/user/program/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );

        if (response.data && response.data.data) {
          setRelawanData(response.data.data); // Mengambil data dari response yang benar

          // Ambil tanggal acara (misalnya, tanggal mulai acara)
          const eventDate = new Date(response.data.data.end_date); // Pastikan format tanggal sesuai
          const currentDate = new Date(response.data.data.start_date);
          const timeDiff = eventDate - currentDate; // Menghitung selisih waktu dalam milidetik
          const daysRemaining = Math.ceil(timeDiff / (1000 * 3600 * 24)); // Menghitung sisa hari
          setDaysLeft(daysRemaining); // Simpan sisa hari dalam state
        } else {
          setError("Data tidak ditemukan");
        }
      } catch (err) {
        console.error("Error fetching data:", err.response || err);
        setError(
          err.response
            ? `Error: ${err.response.status} - ${err.response.data.message}`
            : "Gagal memuat data dari server"
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchRelawan();
  }, [id]); // Menggunakan id sebagai dependency

  if (isLoading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 py-10">{error}</div>;
  }

  if (!relawanData) {
    return <div className="text-center py-10">Data tidak ditemukan</div>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <div className="sticky top-0 z-50 w-full bg-white shadow-md">
        <Navbar />
      </div>

      {/* Konten Utama */}
      <div className="flex flex-1">
        {/* Konten Detail Relawan */}
        <div className="flex-1 p-4 bg-gray-100">
          {/* Breadcrumb */}
          <div className="text-sm text-gray-500 mb-6">
            <Link to="/relawan" className="hover:text-gray-800">
              Relawan /
            </Link>
            <span className="font-semibold text-gray-800"> Detail Relawan</span>
          </div>

          {/* Konten Relawan */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Konten Relawan (Kiri) */}
            <div className="flex-1 lg:w-2/3 bg-white p-6 rounded-lg shadow-md">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {relawanData.title}
              </h1>
              <div className="mt-6">
                <a
                  href="/relawan/pendaftaran"
                  className="px-6 py-3 bg-custom-green text-white rounded-md hover:bg-custom-green-dark"
                >
                  Daftar Sebagai Relawan
                </a>
              </div>
              <img
                src={relawanData.image_url}
                alt={relawanData.title}
                className="my-6 w-full h-auto rounded-lg"
              />
              <p className="text-lg text-gray-700 mt-6">
                {relawanData.details}
              </p>
            </div>

            {/* Sidebar Donasi atau Tombol Daftar */}
            <div className="lg:w-1/3 p-6 bg-white rounded-lg shadow-md">
              <div className="p-6 mb-6">
                <h2 className="text-lg font-bold text-black mb-4">
                  Informasi Program
                </h2>
                <ul className="text-sm text-black mb-4">
                  <li>
                    <span className="font-bold">📍 </span>
                    {relawanData.location}
                  </li>
                  <li>
                    {/* Menampilkan sisa hari */}
                    {daysLeft !== null && (
                      <p className="text-sm text-gray-600 mb-4">
                        {daysLeft > 0
                          ? `📅 Acara berakhir ${daysLeft} hari.`
                          : `Acara sudah dimulai.`}
                      </p>
                    )}
                  </li>
                </ul>
                <h3 className="text-md font-bold text-black mb-2">
                  Benefit yang bisa kamu dapat
                </h3>
                <ul className="text-sm text-black mb-4 space-y-2">
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-custom-green mr-2" />
                    Mendapat sertifikat
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-custom-green mr-2" />
                    Mengembangkan soft skill
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-custom-green mr-2" />
                    Memperoleh pengalaman baru
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default DetailRelawan;
