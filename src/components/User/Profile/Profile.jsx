import React, { useState, useEffect } from "react";
import NavbarDetail from "../Layout/NavbarDetail";
import { useNavigate } from "react-router-dom";

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
  const [imageFile, setImageFile] = useState(null); // State for the selected image file

  const navigate = useNavigate();
  const userId = localStorage.getItem("userId"); // Get userId from localStorage

  useEffect(() => {
    const fetchProfileData = async () => {
      if (!userId) {
        navigate("/login"); // Redirect to login if no userId found
        return;
      }

      setIsLoading(true);
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("Token not found");
        }

        const response = await fetch(
          `https://relawanku.xyz/api/v1/user/profile/${userId}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        if (data.status) {
          setProfileData({
            username: data.data.username || "Belum diatur",
            email: data.data.email || "Belum diatur",
            password: "********", // Don't display actual password
            gender: data.data.gender || "Belum diatur",
            address: data.data.address || "Belum diatur",
            profileImage:
              data.data.image_url || "https://via.placeholder.com/200",
          });
        } else {
          setError(data.message || "Failed to fetch profile data");
        }
      } catch (err) {
        setError(err.message || "Failed to fetch profile data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfileData();
  }, [userId]);

  // Handle saving the edited fields (e.g. username, gender, address)
  const handleSave = async (field) => {
    if (!tempValue) {
      setError(`Please provide a value for ${field}`);
      return;
    }

    setIsLoading(true);
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Token not found");
      }

      let updatedData = { [field]: tempValue };

      console.log(updatedData); // Debug log for data being sent

      const response = await fetch(
        `https://relawanku.xyz/api/v1/user/profile/${userId}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedData),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error response:", errorData); // Check error from API
        throw new Error(errorData.message || "Failed to update profile");
      }

      const data = await response.json();
      if (data.status) {
        setProfileData((prev) => ({
          ...prev,
          [field]: tempValue, // Update field if successful
        }));
        setTempValue(""); // Clear temp value
        setEditingField(null);
      } else {
        setError(data.message || "Failed to update profile");
      }
    } catch (err) {
      setError(err.message || "Error saving profile data");
    } finally {
      setIsLoading(false);
    }
  };

  // Handle image upload
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

  const handleSaveImage = async () => {
    if (!imageFile) {
      setError("Please select an image");
      return;
    }

    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("image", imageFile);

      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Token not found");
      }

      const response = await fetch(
        `https://relawanku.xyz/api/v1/user/profile/image/${userId}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error response:", errorData); // Check error from API
        throw new Error(errorData.message || "Failed to update profile image");
      }

      const data = await response.json();
      if (data.status) {
        setProfileData((prev) => ({
          ...prev,
          profileImage: data.data.image_url, // Update profile image if successful
        }));
        setImageFile(null); // Clear image file
      } else {
        setError(data.message || "Failed to update profile image");
      }
    } catch (err) {
      setError(err.message || "Error saving profile image");
    } finally {
      setIsLoading(false);
    }
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token
    localStorage.removeItem("userId"); // Remove userId
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="sticky top-0 z-50 w-full bg-white shadow-md">
        <NavbarDetail />
      </div>

      <div className="flex-grow bg-[#EAF8E6] flex justify-center items-center py-10">
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
            {/* Image upload button */}
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
                  editable={false} // Email can't be edited
                  isEditing={false}
                />
                <ProfileField
                  label="Password"
                  value={profileData.password}
                  editable={false} // Password can't be edited directly
                  isEditing={false}
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

                {/* Save Image Button */}
                {imageFile && (
                  <div className="mt-4">
                    <button
                      className="text-blue-500 px-4 py-2 rounded-lg"
                      onClick={handleSaveImage}
                    >
                      Save Image
                    </button>
                  </div>
                )}

                {/* Logout Button */}
                <div className="mt-10 flex justify-end">
                  <button
                    className="text-green-500 border border-green-500 px-6 py-2 rounded-lg hover:bg-custom-green hover:text-white transition-all text-lg font-semibold"
                    onClick={handleLogout} // Attach logout function
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

// ProfileField Component (unchanged)
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
