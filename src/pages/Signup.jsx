import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Assuming you are using React Router

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false); // New loading state
  const [successMessage, setSuccessMessage] = useState(""); // To track success
  const [isError, setIsError] = useState(false); // To track error state
  const [isModalOpen, setIsModalOpen] = useState(false); // To handle popup visibility
  const [modalMessage, setModalMessage] = useState(""); // Message to show in the modal
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      setErrorMessage("Please fill in all fields");
      return;
    }

    setLoading(true); // Start loading
    setIsError(false); // Reset error state
    setSuccessMessage(""); // Reset success message

    try {
      // Make API call to the registration endpoint
      const response = await axios.post(
        "https://relawanku.xyz/api/v1/register",
        {
          username,
          email,
          password,
        }
      );

      console.log("Response from API:", response.data);

      // If signup is successful, show success modal and navigate to login page
      setModalMessage("Registration successful! Please log in.");
      setIsModalOpen(true); // Show modal
      setTimeout(() => {
        navigate("/login");
      }, 2000); // Redirect after 2 seconds
    } catch (error) {
      console.error("Error during sign up:", error);

      // Set error message based on the error response
      setIsError(true);
      if (error.response && error.response.data) {
        setModalMessage(
          error.response.data.message || "Error signing up. Please try again."
        );
      } else {
        setModalMessage(
          "Network error or server issue. Please try again later."
        );
      }
      setIsModalOpen(true); // Show modal
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Section */}
      <div className="hidden md:flex items-center justify-center w-1/2 bg-green-900 text-white p-4">
        <div className="max-w-md text-center">
          <h2 className="text-2xl font-semibold mb-4 text-left break-words">
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

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white p-8">
        <div className="max-w-md w-full">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
            Sign Up
          </h2>
          <p className="text-center text-gray-500 mb-6">
            Selamat datang! Daftar untuk membuat akun baru.
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
                disabled={loading} // Disable the button when loading
                className={`w-full py-3 px-6 text-white font-semibold rounded-lg ${
                  loading ? "bg-gray-400" : "bg-[#4caf50]"
                } text-white hover:bg-[#45a049] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#45a049]`}
              >
                {loading ? "Signing Up..." : "Sign Up"}
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

      {/* Modal Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 backdrop-blur-md">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
            <h3 className="text-lg font-semibold text-gray-800">
              {isError ? "Sign Up Failed" : "Sign Up Successful"}
            </h3>
            <p className="mt-4 text-gray-600">{modalMessage}</p>
            <button
              onClick={() => setIsModalOpen(false)}
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
