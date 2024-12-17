import React, { useState, useEffect } from "react";
import NavbarHome from "../Layout/NavbarHome";
import FooterHome from "../Layout/FooterHome";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Kegiatanku = () => {
  const { id } = useParams(); // Ambil ID dari URL parameter
  const [activities, setActivities] = useState([]);
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchActivities = async () => {
      setIsLoading(true);
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("Token not found");
        }

        const response = await axios.get(
          `https://relawanku.xyz/api/v1/user/my-program/${id}`, // Menggunakan ID dinamis
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setActivities(response.data.data || []);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch activities");
      } finally {
        setIsLoading(false);
      }
    };

    fetchActivities();
  }, [id]); // Tambahkan ID sebagai dependensi

  const handlePresensiClick = () => {
    navigate("/presensi-kegiatan");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Navbar */}
      <div className="sticky top-0 z-50 w-full bg-white shadow-md">
        <NavbarHome />
      </div>

      <div className="flex flex-wrap lg:flex-nowrap flex-1 p-6 gap-6">
        {/* Sidebar kiri */}
        <div className="w-full lg:w-1/3 bg-white rounded-lg shadow-md p-4 overflow-y-auto">
          {isLoading ? (
            <p>Loading data...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : activities.length === 0 ? (
            <p>No activities found</p>
          ) : (
            activities.map((activity) => (
              <div
                key={activity.id}
                className="bg-white border rounded-lg overflow-hidden shadow-sm mb-4 cursor-pointer transition-transform transform hover:scale-105"
                onClick={() => setSelectedActivity(activity)}
              >
                <img
                  src={activity.image_url || "/img/default.png"}
                  alt={activity.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-3">
                  <h3 className="text-gray-800 font-bold">{activity.title}</h3>
                  <p className="text-gray-500 text-sm">{activity.location}</p>
                  <p className="text-gray-600 text-sm mt-2">
                    {activity.details}
                  </p>
                  <div className="flex justify-end mt-3">
                    <p className="text-red-500 text-sm font-semibold">
                      Kuota Relawan: {activity.volunteer_quota || "N/A"}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Kotak konten kanan */}
        <div className="relative bg-white rounded-lg shadow-md overflow-hidden w-full lg:w-2/3">
          {/* Header Hijau */}
          <div className="bg-custom-green p-4">
            <h3 className="text-white text-lg font-bold">
              {selectedActivity?.title || "Detail Kegiatan"}
            </h3>
          </div>

          {/* Konten Utama */}
          <div className="p-6 bg-white rounded-b-lg h-full">
            {selectedActivity ? (
              <>
                <div className="mt-6">
                  <h4 className="text-gray-700 font-bold mb-2">PRESENSI</h4>
                  <p className="text-gray-500 text-sm mb-4">
                    Jangan lupa untuk melakukan presensi setiap hari sebagai
                    syarat untuk memperoleh sertifikat.
                  </p>

                  <div className="space-y-4">
                    {[1, 2, 3, 4].map((day) => (
                      <div
                        key={day}
                        className="border rounded-lg p-4 flex justify-between items-center hover:bg-green-50 cursor-pointer"
                        onClick={handlePresensiClick}
                      >
                        <p className="text-gray-700 font-semibold">
                          Hari Ke-{day}
                          <span className="block text-sm text-gray-500">
                            {day} Desember 2024
                          </span>
                        </p>
                        <span className="text-green-600 font-bold text-lg">
                          ›
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <div className="flex items-center justify-center h-full">
                <p className="text-gray-500 text-center">
                  Silakan pilih aktivitas di sebelah kiri untuk melihat
                  detailnya.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <FooterHome />
    </div>
  );
};

export default Kegiatanku;
