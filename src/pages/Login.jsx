import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LoginImage from "../assets/images/logos/Login.png";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        "https://6718b48d7fc4c5ff8f4aac7c.mockapi.io/users"
      );

      console.log("Response from API:", response.data);

      const user = response.data.find(
        (user) => user.username === username && user.password === password
      );

      if (user) {
        localStorage.setItem("role", user.role);

        if (user.role === "admin") {
          navigate("/admin");
        } else if (user.role === "user") {
          navigate("/");
        }
      } else {
        setErrorMessage("Invalid username or password");
      }
    } catch (error) {
      console.error("Login error:", error);
      setErrorMessage("Error logging in. Please try again.");
    }
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

        {/* Bagian Kanan */}
        <div className="w-full md:w-1/2 flex items-center justify-center bg-white p-8 rounded-lg shadow-lg">
          <div className="max-w-md w-full">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
              Login
            </h2>
            <p className="text-center text-gray-500 mb-6">
              Selamat datang kembali. Login untuk mengakses akun Anda.
            </p>

            {errorMessage && (
              <div className="mb-4 text-red-600 text-center">
                {errorMessage}
              </div>
            )}

            <form className="space-y-5" onSubmit={handleLogin}>
              {/* Input Username */}
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

              {/* Input Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="block w-full px-4 py-3 text-gray-700 bg-gray-50 border rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none transition duration-300"
                />
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-green-600 focus:ring-2 focus:ring-green-400"
                  />
                  <span className="ml-2 text-sm text-gray-600">
                    Remember Me
                  </span>
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
      </div>
    </>
  );
}
