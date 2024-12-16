import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import NavbarDetail from "../Layout/NavbarDetail";
import FooterHome from "../Layout/FooterHome";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PeopleIcon from "@mui/icons-material/People";

const DetailDonasi = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [donationData, setDonationData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("detailDonasi");
  const [latestNews, setLatestNews] = useState([]);

  useEffect(() => {
    const fetchDonationData = async () => {
      setIsLoading(true);
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("Token tidak ditemukan. Silakan login.");
        }

        const response = await axios.get(
          `https://relawanku.xyz/api/v1/user/donasi/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );

        if (response.data && response.data.data) {
          setDonationData(response.data.data);
          setLatestNews(response.data.data.latest_news || []);
        } else {
          throw new Error("Data donasi tidak ditemukan.");
        }
      } catch (err) {
        console.error("Error fetching article data:", err.response || err);
        setError(
          err.response
            ? `Error: ${err.response.status} - ${err.response.data.message}`
            : "Gagal memuat data dari server."
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchDonationData();
  }, [id]);

  const handleDonasiSekarang = () => {
    navigate(`/input-donasi/${donationData.id}`);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "detailDonasi":
        return <p>{donationData.description}</p>;
      case "kabarTerbaru":
        return latestNews.length > 0 ? (
          latestNews.map((news, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-lg font-semibold">{news.title}</h3>
              <p>{news.content}</p>
            </div>
          ))
        ) : (
          <p>Tidak ada kabar terbaru.</p>
        );
      case "donatur":
        return <p>Daftar Donatur untuk kampanye ini akan muncul di sini.</p>;
      default:
        return null;
    }
  };

  if (isLoading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 py-10">{error}</div>;
  }

  if (!donationData) {
    return <div className="text-center py-10">Data donasi tidak ditemukan</div>;
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="sticky top-0 z-50 w-full bg-white shadow-md">
        <NavbarDetail />
      </div>

      <div className="flex-1 px-4 py-6 sm:px-6 lg:px-8">
        <div className="text-sm text-gray-500 mb-4">
          <Link to="/donasi" className="hover:text-gray-800">
            Donasi /
          </Link>
          <span className="font-semibold text-gray-800"> Detail Donasi</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 p-6 rounded-lg">
            <img
              src={donationData.image_url || "/path/to/default-image.png"}
              alt={donationData.title}
              className="w-full max-h-[500px] object-cover rounded-lg mb-6"
            />
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md min-h-[400px] flex flex-col justify-between">
            <div>
              <h1 className="text-2xl font-normal mb-2">{donationData.title}</h1>
              <p className="text-sm text-gray-500 flex items-center mb-6">
                <LocationOnIcon fontSize="small" className="mr-2" />
                {donationData.location}
              </p>

              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-bold">
                  {new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  }).format(donationData.target_donation)}
                </h3>
                <div className="flex items-center text-sm text-gray-500">
                  <PeopleIcon fontSize="small" className="mr-1" />
                  {donationData.donor_count} Donatur
                </div>
              </div>

              <p className="text-lg font-bold">{donationData.collected}</p>
              <div className="bg-gray-200 rounded-full h-3 mb-4">
                <div
                  className="bg-custom-green h-3 rounded-full"
                  style={{ width: `${donationData.progress}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-500">
                {donationData.progress}% dari Target {donationData.target_donation}
              </p>
            </div>

            <div className="flex justify-center mt-6">
              <button
                onClick={handleDonasiSekarang}
                className="bg-custom-green text-white font-bold w-full px-4 py-4 rounded-md hover:bg-green-600"
              >
                Donasi Sekarang
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <div className="flex border-b mb-6">
            {["detailDonasi", "kabarTerbaru", "donatur"].map((tab) => (
              <button
                key={tab}
                className={`flex-1 text-center py-2 ${
                  activeTab === tab
                    ? "border-b-2 border-custom-green font-bold"
                    : "text-gray-500"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === "detailDonasi"
                  ? "Detail Donasi"
                  : tab === "kabarTerbaru"
                  ? "Kabar Terbaru"
                  : "Donatur"}
              </button>
            ))}
          </div>
          {renderContent()}
        </div>
      </div>

      <FooterHome />
    </div>
  );
};

export default DetailDonasi;
