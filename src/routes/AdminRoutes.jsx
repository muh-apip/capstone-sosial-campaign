import React from "react";
import { Routes, Route } from "react-router-dom";
import KegiatanRelawan from "../components/Admin/KegiatanRelawan/kegiatanrelawan";
import TambahKegiatan from "../components/Admin/KegiatanRelawan/TambahKegiatan";
import DashboardAdmin from "../components/Admin/Dashboard/DashboardAdmin";
import DonasiAdmin from "../components/Admin/Donasi/DonasiAdmin";
import TambahDonasi from "../components/Admin/Donasi/TambahDonasi";
import EditDonasi from "../components/Admin/Donasi/EditDonasi.jsx";
import InvoicesAdmin from "../components/Admin/Invoices/InvoicesAdmin.jsx";
import ArtikelAdmin from "../components/Admin/Artikel/ArtikelAdmin.jsx";
import TambahArtikel from "../components/Admin/Artikel/TambahArtikel.jsx";
import EditArtikel from "../components/Admin/Artikel/EditArtikel.jsx";

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<DashboardAdmin />} />
      <Route path="/relawan-admin" element={<KegiatanRelawan />} />
      <Route path="/relawan/tambah" element={<TambahKegiatan />} />
      <Route path="/donasi-admin" element={<DonasiAdmin />} />
      <Route path="/tambah-donasi" element={<TambahDonasi />} />
      <Route path="/edit-donasi/:id" element={<EditDonasi />} />
      <Route path="/invoices-admin" element={<InvoicesAdmin />} />
      <Route path="/artikel-admin" element={<ArtikelAdmin />} />
      <Route path="/artikel-admin" element={<ArtikelAdmin />} />
      <Route path="/tambah-artikel" element={<TambahArtikel />} />
      <Route path="/edit-artikel/:id" element={<EditArtikel />} />
    </Routes>
  );
};

export default PrivateRoutes;
