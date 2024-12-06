import React from "react";

const AboutUs = () => {
  return (
    <div className="relative bg-gray-100 py-10 sm:py-16 lg:py-20 px-4 sm:px-8">
      {/* Kalimat di atas gambar dan teks */}
      <div className="absolute top-0 left-0 w-full text-center z-20 py-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 leading-tight">
          Mari berkontribusi bersama di Relawanku
        </h2>
      </div>

      {/* Kontainer utama */}
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between relative z-10">
        {/* Gambar di sebelah kiri */}
        <div className="w-full md:w-1/2 p-4">
          <img
            src="/img/orang.png"
            alt="Gambar"
            className="rounded-lg w-full h-auto object-cover"
          />
        </div>

        {/* Teks di sebelah kanan */}
        <div className="w-full md:w-1/2 md:pl-8 mt-8 md:mt-0 p-4 text-center md:text-left">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mt-4 sm:mt-6 lg:mt-8 mb-4 text-gray-800 leading-tight">
            Bersama, Kita Bisa Mengubah Dunia!
          </h3>
          <p className="mb-6 text-base sm:text-lg text-gray-800 leading-relaxed">
            Relawanku menghubungkanmu dengan <br className="hidden md:block" /> 
            peluang untuk berdonasi untuk membangun <br className="hidden md:block" />
            sekolah, menyediakan air bersih, atau menjadi <br className="hidden md:block" />
            relawan di program penghijauan.
          </p>
          <button className="font-semibold bg-[#4caf50] text-white px-6 py-3 rounded hover:bg-[#45a049] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#45a049]">
            Lihat selengkapnya
          </button>
        </div>
      </div>

      {/* Gambar sebagai latar belakang */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10 z-0"
        style={{ backgroundImage: "url('/img/pulau.jpeg')" }}
      ></div>
    </div>
  );
};

export default AboutUs;
