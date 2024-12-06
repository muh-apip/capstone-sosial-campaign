import React, { useState } from "react";
import { useParams } from "react-router-dom"; // Untuk mendapatkan ID dari URL
import NavbarHome from "../Layout/NavbarHome";
import FooterHome from "../Layout/FooterHome";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const DetailDonasi = () => {
  const { id } = useParams(); // Ambil ID dari parameter URL
  const [activeTab, setActiveTab] = useState("detailDonasi");

  // Contoh data kampanye (ini bisa diganti dengan API call jika data dinamis)
  const campaigns = [
    {
      id: 1,
      title: "Solidaritas Bantu Korban Banjir dan Longsor",
      location: "Palu, Sulawesi Tengah",
      collected: "Rp 17.802.477",
      target: "Rp 18.000.000",
      progress: 50,
      image: "/img/donasi1.png",
      description: `
        Innalillahi Wainnailaihi Rajiun. Diguyur hujan deras terus menerus selama dua hari,
        5 orang meninggal dunia setelah terseret arus sungai. Banjir menyebabkan akses jalan utama
        putus dan ratusan warga terpaksa bertahan di rumah pengungsian. Mari bersama membantu
        para korban dengan berdonasi melalui platform kami atau mendukung mereka dengan doa terbaik.
      `,
    },
  ];

  // Cari data kampanye berdasarkan ID
  const campaign = campaigns.find((c) => c.id === parseInt(id));

  if (!campaign) {
    return <p>Kampanye dengan ID {id} tidak ditemukan.</p>;
  }

  const renderContent = () => {
    switch (activeTab) {
      case "detailDonasi":
        return (
          <div>
            <h2 className="font-semibold text-lg mb-2">Detail Donasi</h2>
            <p className="mb-4">{campaign.description}</p>
          </div>
        );
      case "kabarTerbaru":
        return <p>Kabar Terbaru terkait kampanye ini akan muncul di sini.</p>;
      case "donatur":
        return <p>Daftar Donatur untuk kampanye ini akan muncul di sini.</p>;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <div className="sticky top-0 z-50 w-full bg-white shadow-md">
        <NavbarHome />
      </div>

        {/* Konten Detail */}
        <div className="flex-1 p-4 bg-gray-100">
          {/* Breadcrumb */}
          <div className="text-sm text-gray-500 mb-4">
            Beranda / Donasi /{" "}
            <span className="text-gray-800 font-semibold">DetailDonasi</span>
          </div>
          {/* Card Donasi */}
          <div className="flex flex-col md:flex-row gap-6 mb-6">
            {/* Section Gambar */}
            <div className="flex-1">
              <img
                src={campaign.image}
                alt={campaign.title}
                className="rounded-lg w-full"
              />
            </div>

            {/* Section Detail Donasi */}
            <div className="shadow-md bg-white rounded-lg p-4 sm:p-6 md:w-1/3 flex flex-col">
              <h1 className="text-xl sm:text-2xl font-normal mt-2 sm:mt-4 mb-2">
                {campaign.title}
              </h1>
              <p className="text-gray-500 text-xs sm:text-sm font-normal mb-4 sm:mb-8">
                <LocationOnIcon fontSize="small" /> {campaign.location}
              </p>

              <p className="text-lg font-semibold mb-2">{campaign.collected}</p>
              <div className="bg-gray-200 rounded-full h-3 sm:h-4 mb-2">
                <div
                  className="bg-custom-green h-3 sm:h-4 rounded-full"
                  style={{ width: `${campaign.progress}%` }}
                ></div>
              </div>
              <p className="text-xs sm:text-sm text-gray-500 mb-4">
                {campaign.progress}% dari Target {campaign.target}
              </p>
              <button className="bg-custom-green text-white text-sm sm:text-base font-semibold py-2 mt-4 sm:mt-8 rounded-lg w-full">
                Donasi Sekarang
              </button>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="bg-white shadow-md rounded-lg p-4 mb-6">
            <div className="flex border-b mb-4">
              <button
                className={`flex-1 text-center p-2 ${
                  activeTab === "detailDonasi"
                    ? "border-b-2 border-green-500 font-semibold"
                    : "text-gray-500"
                }`}
                onClick={() => setActiveTab("detailDonasi")}
              >
                Detail Donasi
              </button>
              <button
                className={`flex-1 text-center p-2 ${
                  activeTab === "kabarTerbaru"
                    ? "border-b-2 border-green-500 font-semibold"
                    : "text-gray-500"
                }`}
                onClick={() => setActiveTab("kabarTerbaru")}
              >
                Kabar Terbaru
              </button>
              <button
                className={`flex-1 text-center p-2 ${
                  activeTab === "donatur"
                    ? "border-b-2 border-green-500 font-semibold"
                    : "text-gray-500"
                }`}
                onClick={() => setActiveTab("donatur")}
              >
                Donatur
              </button>
            </div>
            <div>{renderContent()}</div>
          </div>
        </div>
        <FooterHome/>
      </div>
  );
};

export default DetailDonasi;
