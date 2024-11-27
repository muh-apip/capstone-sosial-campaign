import React from "react";

export default function SignUp() {
  return (
    <div className="min-h-screen flex">
      {/* Bagian Kiri */}
      <div className="hidden md:flex items-center justify-center w-1/2 bg-green-900 text-white p-8">
        <div className="max-w-md text-center">
          <h2 className="text-1xl font-bold mb-4 text-left break-words">
            Langkah kecilmu hari ini bisa membawa perubahan besar di masa depan
          </h2>
          <div className="mt-20">
            <img
              src="src/assets/images/logos/login.png"
              alt="Illustration"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Bagian Kanan */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white p-8">
        <div className="max-w-md w-full">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Sign Up
          </h2>
          <p className="text-center text-gray-500 mb-6">
            Selamat datang! Daftar untuk membuat akun baru.
          </p>
          <form className="space-y-5">
            {/* Username Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Username
              </label>
              <input
                type="text"
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
                <span className="ml-2 text-sm text-gray-600">Remember Me</span>
              </label>
              <a href="#" className="text-sm text-green-600 hover:underline">
                Lupa password?
              </a>
            </div>

            {/* Button */}
            <div>
              <button
                type="submit"
                className="w-full py-3 px-6 text-white font-semibold rounded-lg bg-green-600 hover:bg-green-500 focus:outline-none focus:ring-4 focus:ring-green-300 transition duration-300"
              >
                Sign Up
              </button>
            </div>

            {/* Login Link */}
            <p className="text-center text-sm text-gray-600">
              Sudah punya akun?
              <a href="/login" className="text-green-600 hover:underline">
                Login
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
