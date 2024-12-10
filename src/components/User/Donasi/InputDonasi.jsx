import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavbarDetail from "../Layout/NavbarDetail";
import FooterHome from "../Layout/FooterHome";

const InputDonasi = () => {
  const [nominal, setNominal] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setNominal(e.target.value);
  };

  const handlePilihNominal = (amount) => {
    setNominal(amount);
  };

  const handleLanjutkanClick = () => {
    if (nominal) {
      navigate(`/bayar-donasi/${nominal}`, { state: { nominal } });
    } else {
      alert("Harap masukkan nominal donasi terlebih dahulu.");
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
        className="flex-1 flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat relative w-full min-h-screen"
        style={{
          backgroundImage: `url('/img/background/bg_donasi.png')`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        {/* Breadcrumb */}
        <div className="absolute top-6 left-6 text-sm text-gray-300">
          Donasi / Detail Donasi /{" "}
          <span className="text-white font-semibold">Input Donasi</span>
        </div>

        {/* Konten Utama */}
        <div className="relative w-full text-center px-4">
          {/* Judul */}
          <h1 className="text-2xl sm:text-3xl font-semibold text-white mb-6">
            Masukkan Nominal Donasi
          </h1>

          {/* Input Nominal Donasi */}
          <div className="mb-6 w-full max-w-3xl mx-auto">
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                Rp
              </span>
              <input
                type="number"
                placeholder=""
                className="block w-full pl-10 pr-4 py-3 rounded-3xl text-sm sm:text-base focus:ring-custom-green focus:border-custom-green placeholder:text-black"
                value={nominal}
                onChange={handleInputChange}
              />
            </div>
            <p className="text-white font-normal text-sm mt-4 mb-6 ">Mohon isi Rp 10.000 atau lebih </p>
          </div>

          {/* Pilihan Nominal Donasi */}
          <div className="mb-12 w-full max-w-2xl mx-auto">
            <p className="text-white text-2xl font-semibold mb-6">
              Atau Pilih Nominal Donasi
            </p>
            <div className="grid grid-cols-3 gap-3">
              {[10000, 20000, 50000, 100000, 200000, 500000].map((amount) => (
                <button
                  key={amount}
                  className="border border-gray-300 bg-transparent text-white rounded-lg px-6 py-3 text-sm sm:text-base hover:bg-gray-200 hover:text-black transition w-full"
                  onClick={() => handlePilihNominal(amount)}
                >
                  Rp {amount.toLocaleString()}
                </button>
              ))}
            </div>
          </div>

          {/* Tombol Lanjutkan */}
          <div className="w-full max-w-3xl mx-auto">
            <button
              className="w-full bg-custom-green text-white font-semibold py-3 rounded-lg hover:bg-green-600"
              onClick={handleLanjutkanClick}
            >
              Lanjutkan Pembayaran
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <FooterHome />
    </div>
  );
};

export default InputDonasi;
