import React, { useState, useEffect } from "react";
import NavbarDetail from "../Layout/NavbarDetail";
import axios from "axios";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const Profile = () => {
  const [profileData, setProfileData] = useState({
    username: "",
    email: "",
    password: "",
    gender: "Belum diatur",
    address: "Belum diatur",
    profileImage: "https://via.placeholder.com/200",
  });
  const [editingField, setEditingField] = useState(null);
  const [tempValue, setTempValue] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get("https://api.example.com/profile");
        setProfileData(response.data);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchProfileData();
  }, []);

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      const imageUrl = URL.createObjectURL(file);
      setProfileData((prev) => ({ ...prev, profileImage: imageUrl }));

      const uploadImage = async () => {
        const formData = new FormData();
        formData.append("profileImage", file);

        try {
          const response = await axios.post(
            "https://api.example.com/profile/upload",
            formData,
            {
              headers: { "Content-Type": "multipart/form-data" },
            }
          );
          console.log("Image uploaded successfully:", response.data);
        } catch (error) {
          console.error("Error uploading image:", error);
        }
      };

      uploadImage();
    }
  };

  const handleEditClick = (field, value) => {
    setEditingField(field);
    setTempValue(value);
  };

  const handleSave = () => {
    setProfileData((prev) => ({ ...prev, [editingField]: tempValue }));
    setEditingField(null);
    setTempValue("");

    const updateProfileData = async () => {
      try {
        await axios.put("https://api.example.com/profile", {
          [editingField]: tempValue,
        });
        console.log("Profile updated successfully");
      } catch (error) {
        console.error("Error updating profile data:", error);
      }
    };

    updateProfileData();
  };

  const handleCancel = () => {
    setEditingField(null);
    setTempValue("");
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
              <div className="absolute inset-0 bg-black bg-opacity-30 flex justify-center items-center">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleProfileImageChange}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
                <IconButton className="absolute top-14 left-16 z-10 bg-blue-500 p-2 rounded-full">
                  <EditIcon className="text-white" />
                </IconButton>
              </div>
            </div>
          </div>

          <div className="mt-20 space-y-6 px-6 py-6 rounded-lg">
            <div className="flex flex-col gap-4">
              <ProfileField
                label="Username"
                value={profileData.username}
                editable={true}
                isEditing={editingField === "username"}
                tempValue={tempValue}
                setTempValue={setTempValue}
                onEdit={() => handleEditClick("username", profileData.username)}
                onSave={handleSave}
                onCancel={handleCancel}
              />
              <ProfileField
                label="Email"
                value={profileData.email}
                editable={true}
                isEditing={editingField === "email"}
                tempValue={tempValue}
                setTempValue={setTempValue}
                onEdit={() => handleEditClick("email", profileData.email)}
                onSave={handleSave}
                onCancel={handleCancel}
              />
              <ProfileField
                label="Password"
                value={"********"}
                editable={true}
                isEditing={editingField === "password"}
                tempValue={tempValue}
                setTempValue={setTempValue}
                onEdit={() => handleEditClick("password", profileData.password)}
                onSave={handleSave}
                onCancel={handleCancel}
              />
              <ProfileField
                label="Jenis Kelamin"
                value={profileData.gender}
                editable={true}
                isEditing={editingField === "gender"}
                tempValue={tempValue}
                setTempValue={setTempValue}
                onEdit={() => handleEditClick("gender", profileData.gender)}
                onSave={handleSave}
                onCancel={handleCancel}
              />
              <ProfileField
                label="Alamat"
                value={profileData.address}
                editable={true}
                isEditing={editingField === "address"}
                tempValue={tempValue}
                setTempValue={setTempValue}
                onEdit={() => handleEditClick("address", profileData.address)}
                onSave={handleSave}
                onCancel={handleCancel}
              />
            </div>

            <div className="mt-10 flex justify-end">
              <button className="text-green-500 border border-green-500 px-6 py-2 rounded-lg hover:bg-custom-green hover:text-white transition-all text-lg font-semibold">
                Logout
              </button>
            </div>
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
          className="text-green-500 border border-green-500 px-4 py-2 rounded-lg hover:bg-green-500 hover:text-white transition-all text-sm font-medium z-50"
          onClick={onEdit}
        >
          Edit
        </button>
      ))}
  </div>
);

export default Profile;
