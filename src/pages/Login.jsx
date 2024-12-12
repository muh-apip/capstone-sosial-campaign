import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import LoginImage from "../assets/images/logos/Login.png";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      setErrorMessage("Please fill in both fields.");
      setIsModalOpen(true);
      return;
    }

    try {
      const response = await axios.post("https://relawanku.xyz/api/v1/login", {
        username,
        password,
      });

      console.log("API Response:", response.data); // Debug respons API

      if (response.data?.data) {
        const token = response.data.data.token
        const userRole = response.data.data.role;
        console.log("User Role:", userRole);
        localStorage.setItem("token", token);
        if (userRole === "admin") {
          navigate("/dashboard");
        } else {
          navigate("/home");
        }
      } else {
        setErrorMessage("Invalid username or password.");
        setIsModalOpen(true);
      }
    } catch (error) {
      console.error("Login error:", error); // Debug error
      setErrorMessage(
        error.response?.data?.message || "Error logging in. Please try again."
      );
      setIsModalOpen(true);
    }
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
            Login
          </h2>
          <p className="text-center text-gray-500 mb-6">
            Selamat datang kembali. Login untuk mengakses akun Anda.
          </p>

          <form className="space-y-5" onSubmit={handleLogin}>
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

            {/* Password Field */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-4 py-3 text-gray-700 bg-gray-50 border rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
              />
              <div
                className="absolute right-3 top-2/3 transform -translate-y-1/2 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <FaEyeSlash className="text-gray-600" />
                ) : (
                  <FaEye className="text-gray-600" />
                )}
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-green-600 focus:ring-2 focus:ring-green-400"
                />
                <span className="ml-2 text-sm text-gray-600">Remember Me</span>
              </label>
              <a href="#" className="text-sm text-green-600 hover:underline">
                Lupa password?
              </a>
            </div>

            {/* Login Button */}
            <div>
              <button
                type="submit"
                className="w-full py-3 px-6 text-white font-semibold rounded-lg bg-[#4caf50] hover:bg-[#45a049] focus:outline-none focus:ring-2 focus:ring-green-400"
              >
                Login
              </button>
            </div>

            {/* Sign Up Link */}
            <p className="text-center text-sm text-gray-600">
              Pengguna baru?{" "}
              <a href="/signup" className="text-green-600 hover:underline">
                Sign Up
              </a>
            </p>
          </form>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
            <h3 className="text-lg font-semibold text-red-600">Login Failed</h3>
            <p className="mt-4 text-gray-600">{errorMessage}</p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-6 px-6 py-2 bg-gray-600 text-white rounded-full hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
