import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import DetailArticle from "../components/User/Artikel/DetailArtikel";
import Artikel from "../components/User/Artikel/Artikel";
import SignUp from "../pages/Signup";
import Home from "../components/User/Beranda/Home";
import Donasi from "../components/User/Donasi/Donasi";
import DetailDonasi from "../components/User/Donasi/DetailDonasi";
import InputDonasi from "../components/User/Donasi/InputDonasi"
import BayarDonasi from "../components/User/Donasi/BayarDonasi";
import Relawan from "../components/User/Relawan/Relawan";
import DetailRelawan from "../components/User/Relawan/DetailRelawan";
import PendaftaranRelawan from "../components/User/Relawan/PendaftaranRelawan";
import Kegiatanku from "../components/User/Kegiatanku/Kegiatanku"

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/home" element={<Home />} />
      <Route path="/artikel" element={<Artikel />} />
      <Route path="/artikel/:id" element={<DetailArticle />} />
      <Route path="/donasi" element={<Donasi />} />
      <Route path="/donasi/:id" element={<DetailDonasi />} />
      <Route path="/input-donasi/:id" element={<InputDonasi />} />
      <Route path="/bayar-donasi/:id" element={<BayarDonasi />} />
      <Route path="/relawan" element={<Relawan />} />
      <Route path="/relawan/:id" element={<DetailRelawan />} />
      <Route path="/relawan/pendaftaran" element={<PendaftaranRelawan />} />
      <Route path="/kegiatanku" element={<Kegiatanku />} />


    </Routes>
  );
};

export default PrivateRoutes;
