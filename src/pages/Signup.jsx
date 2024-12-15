import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LoginImage from "../assets/images/logos/Login.png";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      console.log("Fields are missing:", { username, email, password });
      setModalMessage("Please fill in all fields");
      setIsModalOpen(true);
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post(
        "https://relawanku.xyz/api/v1/register",
        {
          username,
          email,
          password,
        }
      );

      console.log("API response:", response.data);
      setModalMessage("Registration successful! Please log in.");
      setIsModalOpen(true);
    } catch (error) {
      console.error("Sign up error:", error);
      setModalMessage(
        error.response?.data?.message || "Error signing up. Please try again."
      );
      setIsModalOpen(true);
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalMessage(""); // Clear the message when closing the modal
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Section */}
      <div className="hidden lg:flex items-center justify-center w-1/2 bg-green-900 text-white p-10">
        <div className="max-w-md text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Langkah kecilmu hari ini bisa membawa perubahan besar di masa depan
          </h2>
          <img
            src={LoginImage}
            alt="Illustration"
            className="w-full mt-10 rounded-lg"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-white p-10">
        <div className="max-w-md w-full">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
            Sign Up
          </h2>
          <p className="text-center text-gray-500 mb-6">
            Selamat datang! Buat akun baru untuk memulai.
          </p>

          <form className="space-y-5" onSubmit={handleSignUp}>
            {/* Username Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                className="w-full px-4 py-3 text-gray-700 bg-gray-50 border rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-3 text-gray-700 bg-gray-50 border rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
              />
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-4 py-3 text-gray-700 bg-gray-50 border rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
              />
            </div>

            {/* Button */}
            <div>
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 px-6 text-white font-semibold rounded-lg ${
                  loading ? "bg-gray-400" : "bg-[#4caf50]"
                } hover:bg-[#45a049] focus:outline-none focus:ring-2 focus:ring-green-400`}
              >
                {loading ? "Signing Up..." : "Sign Up"}
              </button>
            </div>

            {/* Login Link */}
            <p className="text-center text-sm text-gray-600">
              Sudah memiliki akun?{" "}
              <a href="/login" className="text-green-600 hover:underline">
                Login
              </a>
            </p>
          </form>
        </div>
      </div>

      {/* Modal Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 backdrop-blur-md">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
            <h3 className="text-lg font-semibold text-gray-800">
              Notification
            </h3>
            <p className="mt-4 text-gray-600">{modalMessage}</p>
            <button
              onClick={closeModal}
              className="mt-6 px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
