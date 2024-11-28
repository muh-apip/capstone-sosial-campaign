import React from "react";

const Fitur = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-gray-100 p-12 relative min-h-screen">
      <div className="container mx-auto py-12">
        <h1 className="text-3xl font-bold text-center mb-4">Program Kami</h1>
        <p className="text-center text-gray-600 mb-10">
          Kami berkomitmen untuk memberikan dampak positif bagi masyarakat dan
          lingkungan melalui berbagai program yang dapat kamu ikuti.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Donasi untuk Perubahan */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="/img/Fitur1.png"
              alt="Group of volunteers working together"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">Donasi untuk Perubahan</h2>
              <p className="text-gray-600 mb-4">
                Bantu kami memberikan dukungan finansial untuk program sosial
                dan lingkungan yang membutuhkan.
              </p>
              <button className="bg-green-500 text-white px-4 py-2 rounded">
                Lihat selengkapnya
              </button>
            </div>
          </div>

          {/* Bergabung sebagai Relawan */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="/img/Fitur2.png"
              alt="Volunteers celebrating together"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">
                Bergabung sebagai Relawan
              </h2>
              <p className="text-gray-600 mb-4">
                Ayo ambil bagian dalam kegiatan relawan untuk menjaga dan
                memperbaiki kondisi lingkungan sekitar.
              </p>
              <button className="bg-green-500 text-white px-4 py-2 rounded">
                Lihat selengkapnya
              </button>
            </div>
          </div>

          {/* Berita Terbaru */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="/img/Fitur3.png"
              alt="Person reading news on a laptop"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">Berita Terbaru</h2>
              <p className="text-gray-600 mb-4">
                Temukan artikel terbaru yang membahas isu sosial dan lingkungan
                serta cara-cara untuk mengatasi masalah tersebut.
              </p>
              <button className="bg-green-500 text-white px-4 py-2 rounded">
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
