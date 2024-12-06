import React, { useState } from "react";
import { useParams } from "react-router-dom";
import NavbarHome from "../Layout/NavbarHome";
import FooterHome from "../Layout/FooterHome";

const DetailArtikel = () => {
  const { id } = useParams(); // Mengambil id artikel dari URL

  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Mengatur state sidebar

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Data artikel yang lengkap dengan informasi donasi
  const articles = [
    {
      id: 1,
      title: "Komunitas Untuk Kemanusiaan",
      title2: "Kisah solidaritas dalam membantu korban bencana.",
      description: `
        Bencana alam sering kali datang tanpa peringatan, membawa kehancuran dan kesedihan bagi banyak orang. Namun, di tengah kepedihan, muncul kisah-kisah inspiratif tentang solidaritas dan kepedulian antar sesama manusia. 
        Saat banjir besar melanda sebuah kota, misalnya, warga yang rumahnya tidak terdampak dengan sigap membuka pintu rumah mereka untuk menjadi tempat penampungan sementara bagi korban. 
        Tidak hanya itu, komunitas setempat bersama relawan dari berbagai daerah bahu-membahu menyalurkan makanan, pakaian, dan perlengkapan kebutuhan dasar lainnya.

        Begitu pula ketika gunung berapi meletus, desa-desa di sekitar zona bahaya sering kali dihadapkan pada tantangan besar. 
        Namun, semangat solidaritas mampu mengatasi batasan ini. Banyak sekolah atau gedung umum yang disulap menjadi tempat pengungsian. 
        Warga lokal menyumbangkan apa yang mereka miliki, sementara relawan dari luar daerah menyediakan tenaga medis, logistik, hingga kegiatan trauma healing untuk anak-anak. 
        Bahkan, relawan internasional juga sering hadir membantu, menunjukkan bahwa rasa kemanusiaan tidak mengenal batas negara dan bahasa.

        Semua kisah ini menunjukkan bahwa, meskipun bencana datang tanpa diundang, kekuatan solidaritas masyarakat selalu mampu memberikan harapan baru. 
        Kita semua bisa berperan, sekecil apapun bantuan yang diberikan, untuk membuat perbedaan yang besar bagi mereka yang membutuhkan. 
        Kini, mari kita bergabung dan saling mendukung untuk meringankan beban mereka yang terdampak bencana.
      `,
      date: "27 Desember 2024",
      image: "../src/assets/images/photos/detailArticel.png",
      donation: {
        amount: 65933625,
        daysRemaining: 7,
      },
    },
  ];

  // Mencari artikel berdasarkan id
  const articleData = articles.find((article) => article.id === parseInt(id));

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <div className="sticky top-0 z-50 w-full bg-white shadow-md">
        <NavbarHome />
      </div>

      {/* Artikel Content */}
      <div className="flex-1 p-4 bg-gray-100">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-4">
          Beranda / Artikel /{" "}
          <span className="text-gray-800 font-semibold">Detail Artikel</span>
        </div>

        {/* Konten Artikel */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Artikel Content (Kiri) */}
          <div className="flex-1 lg:w-2/3 bg-white p-6 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {articleData.title}
            </h1>
            <h3 className="text-2xl text-gray-900 mb-4">
              {articleData.title2}
            </h3>
            <p className="text-sm text-gray-500 mb-4">{articleData.date}</p>
            <img
              src={articleData.image}
              alt={articleData.title}
              className="my-6 w-full h-auto rounded-lg"
            />
            <p className="text-lg text-gray-700">{articleData.description}</p>
          </div>

          {/* Sidebar Donasi (Kanannya) */}
          <div className="lg:w-1/3 p-6 bg-white rounded-lg shadow-md">
            <div className="mb-6">
              <p className="text-sm text-black mb-4">
                Ingin membantu mereka yang terkena bencana? Mulailah dengan
                berdonasi untuk meringankan beban mereka.
              </p>

              {/* Donasi 1 */}
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <img
                  src="../src/assets/images/photos/Donasi1.png"
                  alt="Donasi"
                  className="w-full h-48 object-cover rounded-t-lg mb-6"
                />
                <p className="text-xl text-black font-bold mb-4">
                  Bantu Warga Terdampak Erupsi Gunung
                </p>
                <p className="text-sm text-black mb-4">{articleData.date}</p>
                <p className="text-sm text-gray-500 mb-10">
                  10.295 warga terdampak, ratusan rumah rusak. Ayo bantu segera!
                </p>
                <a
                  href="/donasi"
                  className="text-xl text-blue-500 font-bold hover:underline"
                >
                  Detail Donasi &gt;
                </a>
                <div className="w-full bg-gray-300 rounded-full h-2.5 mt-10 mb-4">
                  <div
                    className="bg-green-600 h-2.5 rounded-full"
                    style={{
                      width: `${
                        (articleData.donation.amount / 100000000) * 100
                      }%`,
                    }}
                  ></div>
                </div>
                <p className="text-lg text-black mb-4">
                  <b>Rp {articleData.donation.amount.toLocaleString()}</b>
                </p>
                <p className="text-gray-500 mb-4">
                  Sisa Hari <br />
                  <b>{articleData.donation.daysRemaining}</b> Hari Lagi
                </p>
                <a
                  href="/donasi"
                  className="text-xl text-blue-500 font-bold hover:underline"
                >
                  Detail Donasi &gt;
                </a>
              </div>

              {/* Donasi 2 */}
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <img
                  src="../src/assets/images/photos/Donasi2.png"
                  alt="Donasi"
                  className="w-full h-48 object-cover rounded-t-lg mb-6"
                />
                <p className="text-xl text-black font-bold mb-4">
                  Solidaritas Bantu Korban Banjir & Longsor
                </p>
                <p className="text-sm text-black mb-4">{articleData.date}</p>
                <p className="text-sm text-gray-500 mb-10">
                  5.842 warga terdampak, rumah hancur. Mari bersama bantu
                  mereka!
                </p>
                <a
                  href="/donasi"
                  className="text-xl text-blue-500 font-bold hover:underline"
                >
                  Detail Donasi &gt;
                </a>
                <div className="w-full bg-gray-300 rounded-full h-2.5 mt-10 mb-4">
                  <div
                    className="bg-green-600 h-2.5 rounded-full"
                    style={{
                      width: `${
                        (articleData.donation.amount / 100000000) * 100
                      }%`,
                    }}
                  ></div>
                </div>
                <p className="text-lg text-black mb-4">
                  <b>Rp {articleData.donation.amount.toLocaleString()}</b>
                </p>
                <p className="text-gray-500 mb-4">
                  Sisa Hari <br />
                  <b>{articleData.donation.daysRemaining}</b> Hari Lagi
                </p>
                <a
                  href="/donasi"
                  className="text-xl text-blue-500 font-bold hover:underline"
                >
                  Detail Donasi &gt;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterHome />
    </div>
  );
};

export default DetailArtikel;
