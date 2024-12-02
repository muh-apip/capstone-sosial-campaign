import React from "react";

const Artikel = () => {
  const articles = [
    {
      id: 1,
      title: "Bank Sampah Jadi Berkah",
      category: "LINGKUNGAN",
      description: "Bank sampah sebagai solusi lingkungan dan ekonomi.",
      date: "27 Desember 2024",
      image: "/img/artikel1.png", // Ganti dengan path gambar yang sesuai
    },
    {
      id: 2,
      title: "Komunitas untuk Kemanusiaan",
      category: "SOSIAL",
      description: "Kisah solidaritas dalam membantu korban bencana.",
      date: "24 Desember 2024",
      image: "/img/artikel2.jpeg", // Ganti dengan path gambar yang sesuai
    },
    {
      id: 3,
      title: "Energi Surya untuk Desa",
      category: "LINGKUNGAN",
      description:
        "Pemanfaatan tenaga surya untuk mendukung kebutuhan warga desa.",
      date: "26 Desember 2024",
      image: "/img/artikel3.png", // Ganti dengan path gambar yang sesuai
    },
    // Artikel lainnya...
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Bagian Konten Utama */}
      <div className="flex flex-col lg:flex-row">
        {/* Sidebar */}

        {/* Konten Artikel */}
        <div className="flex-1 p-6 md:p-12 bg-gray-100">
          {/* Breadcrumb */}
          <div className="text-sm text-gray-500 mb-4">
            Beranda /{" "}
            <span className="text-gray-800 font-semibold">Artikel</span>
          </div>

          {/* Filter Buttons */}
          <div className="flex space-x-2 mb-8">
            <button className="px-4 py-2 bg-custom-green text-white rounded-md hover:bg-custom-green-dark">
              Semua
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">
              Sosial
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">
              Lingkungan
            </button>
          </div>

          {/* Grid Artikel */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="h-48 w-full object-cover"
                />
                <div className="p-4">
                  <p className="text-custom-green font-bold text-sm uppercase">
                    {article.category}
                  </p>
                  <h2 className="text-xl font-semibold text-gray-800 mt-2">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 text-sm mt-2">
                    {article.description}
                  </p>
                  <div className="mt-4 flex justify-between items-center">
                    <a
                      href="#"
                      className="text-custom-green text-sm font-semibold hover:underline"
                    >
                      Selengkapnya &rarr;
                    </a>
                    <span className="text-gray-400 text-sm">
                      {article.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artikel;
