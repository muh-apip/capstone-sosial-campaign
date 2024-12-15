import React, { useState, useEffect } from "react";
import NavbarDetail from "../Layout/NavbarDetail";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Profile = () => {
  const [profileData, setProfileData] = useState({
    username: "",
    email: "",
    password: "********", // Hide actual password
    gender: "Belum diatur",
    address: "Belum diatur",
    profileImage: "https://via.placeholder.com/200",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [editingField, setEditingField] = useState(null);
  const [tempValue, setTempValue] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchProfileData = async () => {
      if (!userId) {
        navigate("/login");
        return;
      }

      setIsLoading(true);
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("Token not found");
        }

        const response = await axios.get(
          `https://relawanku.xyz/api/v1/user/profile/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.data.status) {
          setProfileData({
            username: response.data.data.username || "Belum diatur",
            email: response.data.data.email || "Belum diatur",
            password: "********",
            gender: response.data.data.gender || "Belum diatur",
            address: response.data.data.address || "Belum diatur",
            profileImage: response.data.data.image_url || "https://via.placeholder.com/200",
          });
        } else {
          setError(response.data.message || "Failed to fetch profile data");
        }
      } catch (err) {
        setError(err.message || "Failed to fetch profile data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfileData();
  }, [userId, navigate]);

  const handleSave = async (field) => {
    if (!tempValue && !imageFile) {
      setError(`Please provide a value for ${field}`);
      return;
    }

    setIsLoading(true);
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Token not found");
      }

      const formData = new FormData();

      // Handle updating profile image
      if (field === "profileImage" && imageFile) {
        formData.append("profileImage", imageFile); // Attach the image to the form data
      } else if (tempValue) {
        formData.append(field, tempValue); // Attach other fields (username, gender, address, etc.)
      } else {
        setError("No changes to save");
        return;
      }

      // Ensure the form data is correctly appended for other fields
      if (field !== "profileImage" && tempValue) {
        formData.append(field, tempValue);
      }

      const response = await axios.put(
        `https://relawanku.xyz/api/v1/user/profile/${userId}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data", // Ensure content type is multipart for file upload
          },
        }
      );

      if (response.data.status) {
        setProfileData((prev) => ({
          ...prev,
          [field]: field === "profileImage" ? response.data.data.image_url : tempValue,
        }));
        setTempValue(""); // Clear temp value after saving
        setImageFile(null); // Clear the selected image
        setEditingField(null); // Close the editing field
      } else {
        setError(response.data.message || "Failed to update profile");
      }
    } catch (err) {
      console.log(err.response || err.message);
      setError(err.message || "Error saving profile data");
    } finally {
      setIsLoading(false);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileData((prev) => ({
          ...prev,
          profileImage: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    navigate("/login");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="sticky top-0 z-50 w-full bg-white shadow-md">
        <NavbarDetail />
      </div>

      <div className="flex-grow bg-[#EAF8E6] flex justify-center items-center py-10 px-4">
        <div className="w-full max-w-6xl bg-white rounded-lg shadow-lg p-6 md:p-10">
          <div className="relative h-56 w-full rounded-t-lg overflow-visible bg-green-200">
            <img
              src="/img/background/bg_profile.png"
              alt="Banner"
              className="w-full h-full object-cover rounded-md"
            />
            <div className="absolute top-full left-8 w-32 h-32 md:w-48 md:h-48 -translate-y-1/2 rounded-full border-4 border-white bg-white shadow-md overflow-hidden">
              <img
                src={profileData.profileImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-0 right-8 mt-4">
              <label
                htmlFor="profileImage"
                className="text-white cursor-pointer bg-green-500 px-4 py-2 rounded-full shadow-md"
              >
                Change Image
              </label>
              <input
                type="file"
                id="profileImage"
                className="hidden"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>
            {/* Add the Save button for updating profile image */}
            {imageFile && (
              <div className="absolute top-1/2 right-8 mt-4">
                <button
                  onClick={() => handleSave("profileImage")}
                  className="text-white bg-blue-500 px-4 py-2 rounded-full"
                >
                  Save Image
                </button>
              </div>
            )}
          </div>

          <div className="mt-20 space-y-6 px-6 py-6 rounded-lg">
            {isLoading ? (
              <div>Loading...</div>
            ) : error ? (
              <div>Error: {error}</div>
            ) : (
              <div className="flex flex-col gap-4">
                <ProfileField
                  label="Username"
                  value={profileData.username}
                  editable={true}
                  isEditing={editingField === "username"}
                  tempValue={tempValue}
                  setTempValue={setTempValue}
                  onEdit={() => setEditingField("username")}
                  onSave={() => handleSave("username")}
                  onCancel={() => setEditingField(null)}
                />
                <ProfileField
                  label="Email"
                  value={profileData.email}
                  editable={true}  // Change to true to allow editing
                  isEditing={editingField === "email"}
                  tempValue={tempValue}
                  setTempValue={setTempValue}
                  onEdit={() => setEditingField("email")}
                  onSave={() => handleSave("email")}
                  onCancel={() => setEditingField(null)}
                />
                <ProfileField
                  label="Password"
                  value={profileData.password}
                  editable={true}  // Change to true to allow editing
                  isEditing={editingField === "password"}
                  tempValue={tempValue}
                  setTempValue={setTempValue}
                  onEdit={() => setEditingField("password")}
                  onSave={() => handleSave("password")}
                  onCancel={() => setEditingField(null)}
                />
                <ProfileField
                  label="Gender"
                  value={profileData.gender}
                  editable={true}
                  isEditing={editingField === "gender"}
                  tempValue={tempValue}
                  setTempValue={setTempValue}
                  onEdit={() => setEditingField("gender")}
                  onSave={() => handleSave("gender")}
                  onCancel={() => setEditingField(null)}
                />
                <ProfileField
                  label="Address"
                  value={profileData.address}
                  editable={true}
                  isEditing={editingField === "address"}
                  tempValue={tempValue}
                  setTempValue={setTempValue}
                  onEdit={() => setEditingField("address")}
                  onSave={() => handleSave("address")}
                  onCancel={() => setEditingField(null)}
                />

                <div className="mt-10 flex justify-end">
                  <button
                    className="text-green-500 border border-green-500 px-6 py-2 rounded-lg hover:bg-custom-green hover:text-white transition-all text-lg font-semibold"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProfileField = ({
  label,
  value,
  editable,
  isEditing,
  tempValue,
  setTempValue,
  onEdit,
  onSave,
  onCancel,
}) => (
  <div className="flex justify-between items-center border-b pb-4 px-4 py-4">
    <div className="flex gap-4 md:gap-24 items-center">
      <p className="text-sm text-gray-500 w-32">{label}</p>
      {isEditing ? (
        <input
          type="text"
          className="text-base font-semibold text-gray-700 border-b border-gray-300 focus:outline-none"
          value={tempValue}
          onChange={(e) => setTempValue(e.target.value)}
        />
      ) : (
        <p className="text-base font-semibold text-gray-700">{value}</p>
      )}
    </div>
    {editable &&
      (isEditing ? (
        <div className="flex gap-2">
          <button
            className="text-blue-500 px-4 py-2 rounded-lg hover:underline"
            onClick={onSave}
          >
            Save
          </button>
          <button
            className="text-red-500 px-4 py-2 rounded-lg hover:underline"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      ) : (
        <button
          className="text-green-500 border border-green-500 px-4 py-2 rounded-lg hover:bg-green-500 hover:text-white transition-all text-sm font-medium"
          onClick={onEdit}
        >
          Edit
        </button>
      ))}
  </div>
);

export default Profile;
