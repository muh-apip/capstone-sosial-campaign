import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom"; // Import useNavigate
import NavbarDetail from "../Layout/NavbarDetail";
import FooterHome from "../Layout/FooterHome";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const DetailDonasi = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Inisialisasi navigasi
  const [activeTab, setActiveTab] = useState("detailDonasi");

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

  const campaign = campaigns.find((c) => c.id === parseInt(id));

  if (!campaign) {
    return <p>Kampanye dengan ID {id} tidak ditemukan.</p>;
  }

  const handleDonasiSekarang = () => {
    // Navigasi ke halaman InputDonasi
    navigate(`/input-donasi/${campaign.id}`);
  };

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
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Navbar */}
      <div className="sticky top-0 z-50 w-full bg-white shadow-md">
        <NavbarDetail />
      </div>

      {/* Konten Detail */}
      <div className="flex-1 px-4 py-6 sm:px-6 lg:px-8 bg-gray-100">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-4">
            <Link to="/donasi" className="hover:text-gray-800">
              Donasi /
            </Link>
            <span className="font-semibold text-gray-800"> Detail Donasi</span>
          </div>

        {/* Card Donasi */}
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          {/* Section Gambar */}
          <div className="flex-1">
            <img
              src={campaign.image}
              alt={campaign.title}
              className="rounded-lg w-full object-cover"
            />
          </div>

          {/* Section Detail Donasi */}
          <div className="shadow-md bg-white rounded-lg p-6 sm:p-8 md:w-1/3 flex flex-col">
            <h1 className="text-xl sm:text-2xl font-semibold mb-4">
              {campaign.title}
            </h1>
            <p className="text-gray-500 text-sm sm:text-base flex items-center mb-6">
              <LocationOnIcon fontSize="small" className="mr-2" />
              {campaign.location}
            </p>

            <p className="text-lg font-bold mb-4">{campaign.collected}</p>
            <div className="bg-gray-200 rounded-full h-3 sm:h-4 mb-4">
              <div
                className="bg-custom-green h-3 sm:h-4 rounded-full"
                style={{ width: `${campaign.progress}%` }}
              ></div>
            </div>
            <p className="text-sm sm:text-base text-gray-500">
              {campaign.progress}% dari Target {campaign.target}
            </p>
            <button
              onClick={handleDonasiSekarang} // Tambahkan onClick untuk navigasi
              className="bg-custom-green text-white font-semibold py-3 mt-6 rounded-lg hover:bg-green-600"
            >
              Donasi Sekarang
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white shadow-md rounded-lg p-6 sm:p-8">
          <div className="flex border-b mb-6">
            <button
              className={`flex-1 text-center py-2 ${
                activeTab === "detailDonasi"
                  ? "border-b-2 border-custom-green font-bold"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("detailDonasi")}
            >
              Detail Donasi
            </button>
            <button
              className={`flex-1 text-center py-2 ${
                activeTab === "kabarTerbaru"
                  ? "border-b-2 border-custom-green font-bold"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("kabarTerbaru")}
            >
              Kabar Terbaru
            </button>
            <button
              className={`flex-1 text-center py-2 ${
                activeTab === "donatur"
                  ? "border-b-2 border-custom-green font-bold"
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
      <FooterHome />
    </div>
  );
};

export default DetailDonasi;
