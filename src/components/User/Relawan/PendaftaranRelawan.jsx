import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Layout/NavbarDetail";
import { useNavigate, Link } from "react-router-dom";

const Relawan = () => {
  const [formData, setFormData] = useState({
    email: "",
    full_name: "",
    phone_number: "",
    nama_program: "",
    motivation: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [programs, setPrograms] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  // Ambil daftar program dari API
  useEffect(() => {
    const fetchPrograms = async () => {
      const token = localStorage.getItem("token");
      console.log("Token dari localStorage:", token);

      if (!token) {
        setErrorMessage("Token tidak ditemukan. Silakan login kembali.");
        return;
      }
      try {
        const response = await axios.get(
          "https://relawanku.xyz/api/v1/user/programs",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log("Program Data:", response.data);
        setPrograms(response.data.data || []);
      } catch (error) {
        console.error("Error fetching programs:", error.response || error);
        setErrorMessage(
          error.response?.data?.message || "Gagal memuat data program."
        );
      }
    };

    fetchPrograms();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const navigate = useNavigate(); // Initialize navigate function

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");
    setErrorMessage("");

    const token = localStorage.getItem("token");
    console.log("Token yang digunakan:", token);

    if (!token) {
      setErrorMessage("Token tidak tersedia. Silakan login kembali.");
      setIsLoading(false);
      return;
    }

    console.log("Data yang dikirim:", formData); // Debug data

    try {
      const response = await axios.post(
        "https://relawanku.xyz/api/v1/user/register-program",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      setMessage("Pendaftaran berhasil dikirim!");
      console.log("Success:", response.data);
      setFormData({
        email: "",
        full_name: "",
        phone_number: "",
        nama_program: "",
        motivation: "",
      });

      // Setelah berhasil daftar, arahkan ke /kegiatanku
      setTimeout(() => {
        navigate("/kegiatanku");
      }, 2000);
    } catch (error) {
      console.error("Error submitting form:", error.response?.data || error);
      setErrorMessage(
        error.response?.data?.message || "Gagal mengirim pendaftaran."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Navbar */}
      <div className="sticky top-0 z-50 w-full bg-white shadow-md">
        <Navbar />
      </div>

      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-6 p-6">
        <Link to="/relawan" className="hover:text-gray-800">
          Relawan /
        </Link>
        <Link to="/relawan" className="hover:text-gray-800">
          Detail Program /
        </Link>
        <span className="font-semibold text-gray-800">
          {" "}
          Pendaftaran Relawan
        </span>
      </div>

      {/* Konten Utama */}
      <div className="w-full bg-white p-6 rounded-lg shadow-lg space-y-6 mx-auto max-w-4xl">
        <h2 className="text-3xl font-semibold text-gray-900 text-center">
          Form pendaftaran
        </h2>

        {/* Tampilkan Pesan Error */}
        {errorMessage && (
          <div className="text-center text-red-600 font-semibold mb-4">
            {errorMessage}
          </div>
        )}

        {/* Form Pendaftaran */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-lg"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Nama Lengkap
            </label>
            <input
              type="text"
              name="full_name"
              value={formData.full_name}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-lg"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Nomor HP (WhatsApp)
            </label>
            <input
              type="text"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-lg"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Kegiatan yang Diikuti
            </label>
            <select
              name="nama_program"
              value={formData.nama_program}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-lg"
            >
              <option value="" disabled>
                Pilih Program
              </option>
              {programs && programs.length > 0 ? (
                programs.map((program, index) => (
                  <option
                    key={program.id || index}
                    value={program.id || program.title}
                  >
                    {program.title}
                  </option>
                ))
              ) : (
                <option disabled>Data program tidak tersedia</option>
              )}
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Motivasi Bergabung
            </label>
            <textarea
              name="motivation"
              rows="4"
              value={formData.motivation}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-lg"
            ></textarea>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-8 py-3 bg-green-600 text-white rounded-md hover:bg-green-700"
              disabled={isLoading}
            >
              {isLoading ? "Mengirim..." : "Kirim"}
            </button>
          </div>

          {message && (
            <div className="text-center text-green-600 font-semibold mt-4">
              {message}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Relawan;
