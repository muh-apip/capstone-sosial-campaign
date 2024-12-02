import React from "react";

const Fitur = () => {
  return (
    <div className="relative bg-gray-100 py-20 px-24">
      <div className="container mx-auto">
        {/* Judul dan Deskripsi */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-semibold mb-4 text-gray-800">
            Program Kami
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Kami berkomitmen untuk memberikan dampak positif bagi masyarakat dan
            lingkungan melalui berbagai program yang dapat kamu ikuti.
          </p>
        </div>

        {/* Grid Program */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Donasi untuk Perubahan */}
          <div className="bg-white shadow-lg overflow-hidden rounded-tr-3xl rounded-bl-3xl">
            <img
              src="/img/Fitur1.png"
              alt="Group of volunteers working together"
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-center mb-8">
              <h2 className="text-xl font-bold mb-4 text-gray-800">
                Donasi untuk Perubahan
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Bantu kami memberikan dukungan finansial untuk program sosial
                dan lingkungan yang membutuhkan.
              </p>
              <button className="font-semibold bg-[#4caf50] text-white px-6 py-3 rounded-lg hover:bg-[#45a049] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#45a049]">
                Lihat selengkapnya
              </button>
            </div>
          </div>

          {/* Bergabung sebagai Relawan */}
          <div className="bg-white shadow-lg overflow-hidden rounded-tr-3xl rounded-bl-3xl">
            <img
              src="/img/Fitur2.png"
              alt="Volunteers celebrating together"
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-center">
              <h2 className="text-xl font-bold mb-4 text-gray-800">
                Bergabung sebagai Relawan
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Ayo ambil bagian dalam kegiatan relawan untuk menjaga dan
                memperbaiki kondisi lingkungan sekitar.
              </p>
              <button className="font-semibold bg-[#4caf50] text-white px-6 py-3 rounded-lg hover:bg-[#45a049] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#45a049]">
                Lihat selengkapnya
              </button>
            </div>
          </div>

          {/* Berita Terbaru */}
          <div className="bg-white shadow-lg overflow-hidden rounded-tr-3xl rounded-bl-3xl">
            <img
              src="/img/Fitur3.png"
              alt="Person reading news on a laptop"
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-center">
              <h2 className="text-xl font-bold mb-4 text-gray-800">
                Berita Terbaru
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Temukan artikel terbaru yang membahas isu sosial dan lingkungan
                serta cara-cara untuk mengatasi masalah tersebut.
              </p>
              <button className="font-semibold bg-[#4caf50] text-white px-6 py-3 rounded-lg hover:bg-[#45a049] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#45a049]">
                Lihat selengkapnya
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fitur;
