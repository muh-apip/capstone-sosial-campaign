import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import NavbarDetail from "../Layout/NavbarDetail";
import FooterHome from "../Layout/FooterHome";

const BayarDonasi = () => {
  const location = useLocation();
  const { nominal } = location.state || { nominal: 0 }; // Ambil nominal donasi dari state

  const CLIENT_KEY = import.meta.env.VITE_MIDTRANS_CLIENT_KEY;

  // Load Snap Script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://app.midtrans.com/snap/snap.js";
    script.setAttribute("data-client-key", CLIENT_KEY);
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [CLIENT_KEY]);

  const handleDonasiClick = () => {
    if (!nominal) {
      alert("Nominal donasi tidak valid.");
      return;
    }

    // Token Snap yang diambil dari backend atau Midtrans Dashboard
    const snapToken = "TOKEN_DARI_MIDTRANS_DASHBOARD";

    if (snapToken) {
      window.snap.pay(snapToken, {
        onSuccess: (result) => {
          console.log("Payment Success:", result);
          alert("Donasi berhasil, Terima kasih!");
        },
        onPending: (result) => {
          console.log("Payment Pending:", result);
          alert("Donasi sedang menunggu konfirmasi.");
        },
        onError: (result) => {
          console.error("Payment Error:", result);
          alert("Terjadi kesalahan saat memproses pembayaran.");
        },
      });
    } else {
      alert("Gagal mendapatkan token pembayaran.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <div className="sticky top-0 z-50 w-full bg-white shadow-md">
        <NavbarDetail />
      </div>

      {/* Konten dengan Background Image */}
      <div
        className="flex-1 flex flex-col bg-cover bg-center bg-no-repeat relative w-full min-h-screen"
        style={{
          backgroundImage: `url('/img/background/bg_donasi.png')`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Konten Utama */}
        <div className="relative w-full h-full px-4 py-6">
          {/* Breadcrumb */}
          <div className="absolute top-6 left-6 text-sm text-gray-300 z-10">
          <Link to="/donasi" className="hover:text-gray-200">
            Donasi /{" "}
          </Link>
          <Link to="/donasi/1" className="hover:text-gray-200">
            Detail Donasi /{" "}
          </Link>
          <Link to="/input-donasi/1" className="hover:text-gray-200">
            Input Donasi /{" "}
          </Link>
            <span className="text-white font-semibold">Bayar Donasi</span>
          </div>

          {/* Card */}
          <div className="relative bg-white rounded-lg shadow-lg p-6 max-w-md z-10 mt-16 ml-4">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
              Solidaritas Bantu Korban Banjir dan Longsor
            </h2>
            <p className="text-green-700 text-lg font-semibold mb-4">
              Rp {nominal.toLocaleString()}
            </p>
            <p className="text-gray-700 text-sm mb-4">
              Sisa hari <span className="font-bold">7 hari</span>
            </p>
            <p className="text-gray-600 text-sm mb-6">
              Deskripsi kegiatan: Ribuan warga terdampak hingga harus kehilangan
              nyawa. Ayo bantu segera!
            </p>
            <button
              className="w-full bg-custom-green text-white font-semibold py-3 rounded-lg hover:bg-green-600"
              onClick={handleDonasiClick}
            >
              Donasi Sekarang
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <FooterHome />
    </div>
  );
};

export default BayarDonasi;
