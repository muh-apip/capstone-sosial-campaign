import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Assuming you are using React Router
import LoginImage from "../assets/images/logos/Login.png";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      setErrorMessage("Please fill in all fields");
      return;
    }

    try {
      const response = await axios.post(
        "https://6718b48d7fc4c5ff8f4aac7c.mockapi.io/users",
        {
          username,
          email,
          password,
          role: "user",
        }
      );

      console.log("Response from API:", response.data);

      navigate("/login");
    } catch (error) {
      console.error("Error during sign up:", error);
      setErrorMessage("Error signing up. Please try again.");
    }
  };

  return (
    <>
      <div className="min-h-screen flex">
        {/* Bagian Kiri */}
        <div className="hidden md:flex items-center justify-center w-1/2 bg-green-900 text-white p-4">
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
        <div className="w-full md:w-1/2 flex items-center justify-center bg-white p-8">
          <div className="max-w-md w-full">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
              Sign Up
            </h2>
            <p className="text-center text-gray-500 mb-6">
              Selamat datang! Daftar untuk membuat akun baru.
            </p>

            {errorMessage && (
              <div className="mb-4 text-red-600 text-center">
                {errorMessage}
              </div>
            )}

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
                  className="block w-full px-4 py-3 text-gray-700 bg-gray-50 border rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none transition duration-300"
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
                  className="block w-full px-4 py-3 text-gray-700 bg-gray-50 border rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none transition duration-300"
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
                  className="block w-full px-4 py-3 text-gray-700 bg-gray-50 border rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none transition duration-300"
                />
              </div>

              {/* Button */}
              <div>
                <button
                  type="submit"
                  className="w-full py-3 px-6 text-white font-semibold rounded-lg bg-[#4caf50] text-white hover:bg-[#45a049] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#45a049]"
                >
                  Sign Up
                </button>
              </div>

              {/* Login Link */}
              <p className="text-center text-sm text-gray-600">
                Sudah punya akun?{" "}
                <a href="/login" className="text-green-600 hover:underline">
                  Login
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
