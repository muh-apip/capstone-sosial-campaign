import React from "react";
import NavbarHome from "../Layout/NavbarHome"; // Pastikan path benar

const Notification = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <div className="sticky top-0 z-50 w-full bg-white shadow-md">
        <NavbarHome />
      </div>

      {/* Notifikasi */}
      <div className="relative w-full py-8">
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-[#CAE8CB] shadow-lg rounded-lg p-4 md:p-4 max-w-6xl w-11/12 lg:w-10/12 z-50">
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Thumbnail */}
            <img
              src="/img/kegiatanku1.png" // Ganti URL gambar sesuai kebutuhan
              alt="Notification"
              className="w-32 h-32 rounded-md md:w-40 md:h-32"
            />
            {/* Content */}
            <div>
              <h2 className="text-base md:text-2xl font-semibold text-black mb-3">
                Terima Kasih Telah Bergabung!
              </h2>
              <p className="text-gray-700 text-sm md:text-base">
                Kami senang menyambut Anda sebagai relawan. Bersama, kita dapat
                membuat perubahan yang berarti.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
