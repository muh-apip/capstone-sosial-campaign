import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import NavbarHome from "../Layout/NavbarHome";
import FooterHome from "../Layout/FooterHome";

const Donasi = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [filteredCampaigns, setFilteredCampaigns] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Categories to filter by
  const categories = [
    "all",
    "Bencana Alam",
    "Sosial",
    "Pelestarian Lingkungan",
  ];

  useEffect(() => {
    const  fetchDonationData = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem("token");
        if (!token) throw new Error("Token tidak ditemukan");
  
        const response = await axios.get(
          "https://relawanku.xyz/api/v1/user/donasi",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        
        // Log the response data for debugging
        console.log("Fetched data:", response.data);  // Log response from the API
  
        const data = response.data.data || [];
        setCampaigns(data);
        setFilteredCampaigns(data); // Default: tampilkan semua kampanye
      } catch (err) {
        setError(
          err.response?.data?.message || "Gagal mengambil data kampanye"
        );
      } finally {
        setLoading(false);
      }
    };
  
    fetchDonationData();
  }, []);
  

  // Filter campaigns based on the selected category
  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredCampaigns(campaigns); // Tampilkan semua kampanye jika "all" dipilih
    } else {
      const filtered = campaigns.filter(
        (campaign) => campaign.Category === selectedCategory
      );
      setFilteredCampaigns(filtered); // Filter berdasarkan kategori yang dipilih
    }
  }, [selectedCategory, campaigns]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <div className="sticky top-0 z-50 w-full bg-white shadow-md">
        <NavbarHome />
      </div>

      {/* Content Area */}
      <div className="flex-1 p-8 bg-gray-100">
        {/* Header Section */}
        <div className="flex flex-wrap gap-3 mb-6">
          {categories.map((category) => (
            <button
              key={category}
              className={`py-2 px-4 font-medium text-sm rounded-lg ${
                selectedCategory === category
                  ? "bg-primary-green text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              onClick={() => handleCategoryChange(category)}
            >
              {category === "all" ? "Semua" : category}
            </button>
          ))}
        </div>
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            Mari Bantu Mereka yang Membutuhkan
          </h1>
          <p className="text-black text-sm">
            Menampilkan <strong>{filteredCampaigns.length}</strong> kampanye dari 138 kampanye
          </p>
        </div>

        {/* Category Filter Buttons */}
        

        {/* Loading/Error Handling */}
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-500">Error: {error}</p>
        ) : filteredCampaigns.length === 0 ? (
          <p className="text-gray-500">
            Tidak ada kampanye untuk kategori ini.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCampaigns.map((campaign, index) => (
              <Link
                key={index}
                to={`/donasi/${campaign.ID}`}
                className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden flex flex-col h-full"
              >
                {/* Campaign Image */}
                <img
                  src={campaign.ImageUrl}
                  alt={campaign.Title || "Gambar kampanye"}
                  className="w-full h-48 object-cover"
                />

                {/* Campaign Content */}
                <div className="p-4 flex flex-col justify-between flex-grow">
                  <h2 className="text-base font-bold text-gray-900 mb-2">
                    {campaign.Title || "Tidak ada judul"}
                  </h2>
                  <div className="flex justify-between items-center mb-4">
                    <p className="text-xs text-gray-600">
                      {campaign.location || "Lokasi tidak tersedia"}
                    </p>
                    <p className="text-xs font-bold text-black">
                      Sisa hari{" "}
                      {campaign.FinishedAt
                        ? Math.max(
                            0,
                            Math.ceil(
                              (new Date(campaign.FinishedAt) - new Date()) /
                                (1000 * 60 * 60 * 24)
                            )
                          )
                        : 0}
                    </p>
                  </div>
                  <p className="text-gray-700 text-sm font-normal mt-2 mb-4 line-clamp-2">
                    {campaign.Description || "Deskripsi tidak tersedia"}
                  </p>
                  <hr className="my-2 border-t-2 border-gray-100" />
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Target Donasi</p>
                    <p className="text-2xl font-semibold text-black mb-2">
                      {campaign.TargetDonation
                        ? campaign.TargetDonation.toLocaleString("id-ID", {
                            style: "currency",
                            currency: "IDR",
                          })
                        : "Target tidak tersedia"}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <FooterHome />
    </div>
  );
};

export default Donasi;
