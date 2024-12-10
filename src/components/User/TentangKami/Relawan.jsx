import React from "react";

const Relawan = () => {
  return (
    <div className="bg-gray-100 py-16 px-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-12">
        Tentang RelawanKu
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Card */}
        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
          <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
            <span className="material-icons-outlined mr-2">
              {" "}
              Apa itu RelawanKu
            </span>
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Aplikasi ini adalah platform digital yang memudahkan masyarakat
            berpartisipasi dalam kegiatan sosial dan lingkungan melalui donasi
            dan relawan. Dengan tema Social Campaign, pengguna dapat memilih dan
            mendaftar untuk berbagai kegiatan relawan sesuai minat, memberikan
            donasi secara aman dan transparan. Serta layanan pelanggan yang
            responsif melalui live chat dan FAQ.
          </p>
        </div>

        {/* Right Card */}
        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
          <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
            <span className="material-icons-outlined mr-2">
              {" "}
              Tujuan RelawanKu
            </span>
          </h3>
          <ul className="list-decimal list-inside text-sm text-gray-600 leading-relaxed">
            <li>Memfasilitasi Partisipasi Sosial dan Lingkungan</li>
            <li>Meningkatkan Akses dan Jangkauan</li>
            <li>Meningkatkan Kesadaran</li>
            <li>Membangun Komunitas Peduli</li>
            <li>Memberikan Pengalaman Pengguna yang Nyaman</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Relawan;
