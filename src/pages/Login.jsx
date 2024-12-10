import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons
import LoginImage from "../assets/images/logos/Login.png";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setErrorMessage("Please fill in both fields.");
      setIsModalOpen(true); // Open modal when there's an error
      return;
    }

    try {
      const response = await axios.post("https://relawanku.xyz/api/v1/login", {
        username,
        password,
      });

      console.log("Response from API:", response.data);

      // Assuming the API returns a token on successful login
      if (response.data && response.data.token) {
        // Store the authentication token in localStorage (or cookies)
        localStorage.setItem("token", response.data.token);

        // Redirect to the home page or dashboard
        navigate("/home");
      } else {
        setErrorMessage("Invalid username or password.");
        setIsModalOpen(true); // Open modal when login fails
      }
    } catch (error) {
      console.error("Login error:", error);
      setErrorMessage(
        error.response?.data?.message || "Error logging in. Please try again."
      );
      setIsModalOpen(true); // Open modal when there is an error
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="min-h-screen flex bg-gray-100">
        {/* Bagian Kiri */}
        <div className="hidden md:flex items-center justify-center w-1/2 bg-green-900 text-white p-8">
          <div className="max-w-md text-center">
            <h2 className="text-2xl font-semibold mb-4 text-left break-words">
              Langkah kecilmu hari ini bisa membawa perubahan besar di masa
              depan
            </h2>
            <div className="mt-20">
              <img
                src={LoginImage}
                alt="Illustration"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white p-8 rounded-lg shadow-lg">
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
                className="block w-full px-4 py-3 text-gray-700 bg-gray-50 border rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none transition duration-300"
              />
            </div>

            {/* Password Field */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"} // Toggle password visibility
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="block w-full px-4 py-3 text-gray-700 bg-gray-50 border rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none transition duration-300"
              />
              {/* Show/Hide Password Icon */}
              <div
                className="absolute right-3 top-2/3 transform -translate-y-1/2 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)} // Toggle showPassword state
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
                className="w-full py-3 px-6 text-white font-semibold rounded-lg bg-[#4caf50] text-white hover:bg-[#45a049] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#45a049]"
              >
                Login
              </button>
            </div>

            {/* Register Link */}
            <p className="text-center text-sm text-gray-600">
              Pengguna baru?{" "}
              <a href="/signup" className="text-green-600 hover:underline">
                Sign Up
              </a>
            </p>
          </form>
        </div>
      </div>

      {/* Modal for Error */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-96">
            <h3 className="text-xl font-semibold text-red-600">Login Failed</h3>
            <p className="mt-2 text-gray-700">{errorMessage}</p>
            <div className="mt-4 text-right">
              <button
                onClick={closeModal}
                className="bg-gray-600 text-white px-4 py-2 rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
