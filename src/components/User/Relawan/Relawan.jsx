import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavbarHome from "../Layout/NavbarHome";
import FooterHome from "../Layout/FooterHome";

const Relawan = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all"); // State

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const relawan = [
    {
      id: 1,
      name: "Solidaritas Bantu Korban Banjir & Longsor",
      left: "sisa 7 hari",
      lokasi: "Palu, Sulawesi Tengah",
      category: "Bencana Alam",
      image: "src/assets/images/photos/relawan/relawan1.png",
      description:
        "Ribuan warga terdampak hingga harus kehilangan nyawa. Ayo bantu segera!",
      joined: 7,
      total: 16,
    },
    {
      id: 2,
      name: "Bantu Warga Terdampak Erupsi Gunung",
      left: "sisa 7 hari",
      lokasi: "Wakatobi, Sulawesi Tenggara",
      category: "Bencana",
      image: "src/assets/images/photos/relawan/relawan2.png",
      description:
        "10.295 warga terdampak, ratusan rumah rusak. Ayo bantu segera!",
      joined: 5,
      total: 10,
    },
    {
      id: 3,
      name: "Bantu Muslim Selesaikan Masjidnya",
      role: "Relawan Logistik",
      lokasi: "Temanggung, Jawa Tengah",
      left: "sisa 7 hari",
      category: "Gotongroyong",
      image: "src/assets/images/photos/relawan/relawan3.png",
      description: "Patungan bangun kembali Masjid Nurul Bhakti, Lubuk Rasak.",
      joined: 12,
      total: 20,
    },
    {
      id: 4,
      name: "Bangun Asrama Santri Penghafal Al Qur’an ",
      left: "sisa 5 hari",
      lokasi: "Semarang, Jawa Tengah",
      category: "Sosial",
      image: "src/assets/images/photos/relawan/relawan4.png",
      description:
        "Belum memiliki asrama, santri penghafal quran tidur di aula....",
      joined: 8,
      total: 12,
    },
    {
      id: 5,
      name: "Panen Pahala jariyah, Sedekah Alat Sholat",
      left: "sisa 10 hari",
      lokasi: "Demak , Jawa Tengah",
      category: "Sosial",
      image: "src/assets/images/photos/relawan/relawan5.png",
      description:
        "Bagaimana bisa beribadah dengan khusyuk jika alat sholat masih lusuh? Yuk, bantu!",
      joined: 14,
      total: 25,
    },
    {
      id: 6,
      name: "Yuk , Muliakan Anak yatim Sekarang!k",
      left: "sisa 3 hari",
      lokasi: "Banyuwangi, Jawa Timur",
      category: "Sosial",
      image: "src/assets/images/photos/relawan/relawan6.png",
      description:
        "Kirim 1000 kado yatim untuk anak yatim di seluruh Indonesia",
      joined: 9,
      total: 15,
    },
  ];

  // Ambil kategori unik dari data relawan
  const categories = ["all", ...new Set(relawan.map((r) => r.category))];

  // Fungsi untuk mengubah kategori yang dipilih
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Filter relawan berdasarkan kategori yang dipilih
  const filteredRelawan =
    selectedCategory === "all"
      ? relawan
      : relawan.filter((relawan) => relawan.category === selectedCategory);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <div className="sticky top-0 z-50 w-full bg-white shadow-md">
        <NavbarHome />
      </div>

      {/* Konten Utama */}
      <div className="flex flex-1">
        {/* Konten Relawan */}
        <div className="flex-1 p-6 bg-gray-100">
          {/* Breadcrumb */}
          <div className="text-sm text-gray-500 mb-4">
            Beranda /{" "}
            <span className="text-gray-800 font-semibold">Relawan</span>
          </div>

          {/* Judul Halaman */}
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Relawan Kami
          </h1>

          {/* Filter Kategori */}
          <div className="flex flex-wrap space-x-4 mb-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-2 rounded-md text-sm ${
                  selectedCategory === category
                    ? "bg-custom-green text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {category === "all" ? "Semua" : category}
              </button>
            ))}
          </div>

          {/* Daftar Relawan */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {filteredRelawan.map((relawan) => (
              <div
                key={relawan.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
              >
                <img
                  src={relawan.image}
                  alt={relawan.name}
                  className="h-52 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800">
                    <Link to={`/relawan/${relawan.id}`}>{relawan.name}</Link>{" "}
                  </h3>
                  <p className="text-sm text-gray-500 mb-5">{relawan.role}</p>
                  <div className="flex justify-between">
                    <p className="text-sm text-gray-600">{relawan.lokasi}</p>
                    <p className="text-sm text-gray-600">
                      <strong>{relawan.left}</strong>
                    </p>
                  </div>
                  <p className="text-sm text-gray-600 mt-7">
                    {relawan.description}
                  </p>

                  {/* Menampilkan Jumlah Anggota */}
                  <div className="mt-20">
                    <p className="text-sm text-blue-600">
                      anggota yang sudah bergabung {relawan.joined} dari total{" "}
                      {relawan.total} anggota
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <FooterHome />
    </div>
  );
};

export default Relawan;
