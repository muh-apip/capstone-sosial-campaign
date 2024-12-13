import React from "react";
import NavbarHome from "../Layout/NavbarHome"; // Pastikan path benar

const Report = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <div className="sticky top-0 z-50 w-full bg-white shadow-md">
        <NavbarHome />
      </div>

      {/* Konten Laporan */}
      <div className="flex justify-center items-center bg-gray-100 flex-grow p-4">
        <div className="bg-white shadow-lg rounded-lg w-full max-w-6xl p-4">
          {/* Google Form */}
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSe-WtdiiMsbI4UqUk8n_xMyU-WTvoQ6BtRvQ2Fc16w6CbMZsw/viewform?embedded=true"
            width="100%"
            height="600"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="Google Form Laporan"
            className="rounded-lg"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Report;
