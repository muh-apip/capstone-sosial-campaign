import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import SignUp from "../pages/Signup";
import DetailArticle from "../components/User/Artikel/DetailArtikel";
import Artikel from "../components/User/Artikel/Artikel";
import Home from "../components/User/Beranda/Home";
import Donasi from "../components/User/Donasi/Donasi";
import DetailDonasi from "../components/User/Donasi/DetailDonasi";
import InputDonasi from "../components/User/Donasi/InputDonasi";
import BayarDonasi from "../components/User/Donasi/BayarDonasi";
import Relawan from "../components/User/Relawan/Relawan";
import DetailRelawan from "../components/User/Relawan/DetailRelawan";
import PendaftaranRelawan from "../components/User/Relawan/PendaftaranRelawan";
import Kegiatanku from "../components/User/Kegiatanku/Kegiatanku";
import PresensiKegiatan from "../components/User/Kegiatanku/PresensiKegiatan";
import Profile from "../components/User/Profile/Profile";
import Hero from "../components/User/TentangKami/Hero";
import ChatBot from "../components/User/ChatBot/ChatBot";
import UserFAQ from "../components/User/FAQ/UserFAQ";
import Notification from "../components/User/ChatBot/Notification";
import Report from "../components/User/ChatBot/Report";
import PrivateRoute from './PrivateRoute'; // Import komponen PrivateRoute

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      
      {/* Protect /home route */}
      <Route path="/home" element={<PrivateRoute element={<Home />} />} />

      {/* Contoh protected route lainnya */}
      <Route path="/profile" element={<PrivateRoute element={<Profile />} />} />
      <Route path="/artikel" element={<PrivateRoute element={<Artikel />} />} />
      <Route path="/artikel/:id" element={<PrivateRoute element={<DetailArticle />} />} />
      <Route path="/donasi" element={<PrivateRoute element={<Donasi />} />} />
      <Route path="/donasi/:id" element={<PrivateRoute element={<DetailDonasi />} />} />
      <Route path="/input-donasi/:id" element={<PrivateRoute element={<InputDonasi />} />} />
      <Route path="/bayar-donasi/:id" element={<PrivateRoute element={<BayarDonasi />} />} />
      <Route path="/relawan" element={<PrivateRoute element={<Relawan />} />} />
      <Route path="/relawan/:id" element={<PrivateRoute element={<DetailRelawan />} />} />
      <Route path="/relawan/pendaftaran" element={<PrivateRoute element={<PendaftaranRelawan />} />} />
      <Route path="/kegiatanku" element={<PrivateRoute element={<Kegiatanku />} />} />
      <Route path="/presensi-kegiatan" element={<PrivateRoute element={<PresensiKegiatan />} />} />
      <Route path="/tentang-kami" element={<PrivateRoute element={<Hero />} />} />
      <Route path="/user-faq" element={<PrivateRoute element={<UserFAQ />} />} />
      <Route path="/chatbot" element={<PrivateRoute element={<ChatBot />} />} />
      <Route path="/notifikasi" element={<PrivateRoute element={<Notification />} />} />
      <Route path="/laporan" element={<PrivateRoute element={<Report />} />} />
    </Routes>
  );
};

export default PrivateRoutes;
