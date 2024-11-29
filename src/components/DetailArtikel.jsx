import React from "react";

const DetailArtikel = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm mb-6">
        <a href="/" className="text-black font-bold  hover:underline">
          Beranda
        </a>{" "}
        &gt;{" "}
        <a href="/artikel" className="text-black font-bold hover:underline">
          Artikel
        </a>{" "}
        &gt; <span className="text-black font-bold ">Detail Artikel</span>
      </nav>

      {/* Artikel Utama */}
      <div className="flex flex-col lg:flex-row p-6">
        {/* Konten Artikel */}
        <div className="lg:w-2/3 shadow-md p-6">
          <h1 className="text-2xl font-bold mb-2">
            Komunitas Untuk Kemanusiaan
          </h1>
          <p className="text-sm text-gray-500 mb-4">
            Kisah solidaritas dalam membantu korban bencana.
          </p>
          <p className="text-sm text-gray-500 mb-6">24 Desember 2024</p>
          <img
            src="https://via.placeholder.com/800x400"
            alt="Komunitas"
            className="rounded-lg w-full h-auto mb-6"
          />
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Bencana alam sering kali datang tanpa peringatan, membawa kehancuran
            dan kesedihan bagi banyak orang. Namun, di tengah kepedihan, muncul
            kisah-kisah inspiratif tentang solidaritas dan kepedulian antar
            sesama manusia. Saat banjir besar melanda sebuah kota, misalnya,
            warga yang rumahnya tidak terdampak dengan sigap membuka pintu rumah
            mereka untuk menjadi tempat penampungan sementara bagi korban. Tidak
            hanya itu, komunitas setempat bersama relawan dari berbagai daerah
            bahu-membahu menyalurkan makanan, pakaian, dan perlengkapan
            kebutuhan dasar lainnya
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Begitu pula ketika gunung berapi meletus, desa-desa di sekitar zona
            bahaya sering kali dihadapkan pada tantangan besar. Namun, semangat
            solidaritas mampu mengatasi batasan ini. Banyak sekolah atau gedung
            umum yang disulap menjadi tempat pengungsian. Warga lokal
            menyumbangkan apa yang mereka miliki, sementara relawan dari luar
            daerah menyediakan tenaga medis, logistik, hingga kegiatan trauma
            healing untuk anak-anak. Bahkan, relawan internasional juga sering
            hadir membantu, menunjukkan bahwa rasa kemanusiaan melampaui batas
            negara.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Ketika tsunami menghantam suatu wilayah, gelombang bantuan dari
            seluruh dunia pun datang. Dari penggalangan dana hingga pengiriman
            bantuan logistik, solidaritas global menunjukkan bahwa dalam
            menghadapi bencana, manusia dapat bersatu untuk saling membantu.
            Kisah-kisah ini menjadi bukti bahwa di tengah kehancuran,
            kemanusiaan mampu menjadi cahaya harapan, menyatukan orang-orang
            dari berbagai latar belakang untuk bersama-sama mengatasi
            penderitaan.
          </p>
        </div>

        {/* Sidebar */}
        <div className="lg:w-1/3">
          {/* Teks Paling Atas */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-6">
            <p className="text-gray-700 dark:text-gray-300">
              Ingin membantu mereka yang terkena bencana? Mulailah dengan
              berdonasi untuk meringankan beban mereka
            </p>

            {/* Elemen Container untuk Donasi */}
            <div className="flex flex-col gap-6">
              {/* Elemen Pertama */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                {/* Gambar */}
                <img
                  src="https://via.placeholder.com/300x150"
                  alt="Erupsi Gunung"
                  className="rounded-lg w-full h-auto mb-4"
                />

                {/* Deskripsi Donasi */}
                <p className="text-xl text-black font-bold dark:text-gray-400 mb-4">
                  BANTU WARGA TERDAMPAK SEGERA!
                </p>
                <p className="text-sm text-black dark:text-gray-400 mb-4">
                  Hari, 22 November 2024
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-10">
                  10.295 warga terdampak, ratusan rumah rusak. Ayo bantu segera!
                </p>

                {/* Tombol Donasi */}
                <a
                  href="/donasi"
                  className="text-xl text-blue-500 font-bold hover:underline text-sm"
                >
                  Detail Donasi &gt;
                </a>

                {/* Value Bar */}
                <div className="w-full bg-gray-300 rounded-full h-2.5 dark:bg-gray-700 mt-10 mb-4">
                  <div
                    className="bg-green-600 h-2.5 rounded-full"
                    style={{ width: "60%" }}
                  ></div>
                </div>
                <div className="flex justify-between text-sm">
                  <p className="text-gray-500 dark:text-gray-400">
                    Terkumpul <br />
                    <b>Rp 65,933,625</b>
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Sisa Hari
                    <br />
                    <b>17</b>
                  </p>
                </div>
              </div>

              {/* Elemen Kedua */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                {/* Gambar */}
                <img
                  src="https://via.placeholder.com/300x150"
                  alt="Erupsi Gunung"
                  className="rounded-lg w-full h-auto mb-4"
                />

                {/* Deskripsi Donasi */}
                <p className="text-xl text-black font-bold dark:text-gray-400 mb-4">
                  Solidaritas Bantu Korban Banjir & Longsor
                </p>
                <p className="text-sm text-black dark:text-gray-400 mb-4">
                  Senin, 25 November 2024
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-10">
                  Ribuan warga terdampak hingga harus kehilangan nyawa. Ayo
                  bantu segera!
                </p>

                {/* Tombol Donasi */}
                <a
                  href="/donasi"
                  className="text-xl text-blue-500 font-bold hover:underline text-sm"
                >
                  Detail Donasi &gt;
                </a>

                {/* Value Bar */}
                <div className="w-full bg-gray-300 rounded-full h-2.5 dark:bg-gray-700 mt-10 mb-4">
                  <div
                    className="bg-green-600 h-2.5 rounded-full"
                    style={{ width: "60%" }}
                  ></div>
                </div>
                <div className="flex justify-between text-sm">
                  <p className="text-gray-500 dark:text-gray-400">
                    Terkumpul <br />
                    <b>Rp 65,933,625</b>
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Sisa Hari
                    <br />
                    <b>17</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailArtikel;
