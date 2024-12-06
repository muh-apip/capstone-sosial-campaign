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
    </Routes>
  );
};

export default PrivateRoutes;
