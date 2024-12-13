import React from "react";
import { Routes, Route } from "react-router-dom";

import KegiatanRelawanAdmin from "../components/Admin/KegiatanRelawan/KegiatanRelawanAdmin";
import TambahKegiatanAdmin from "../components/Admin/KegiatanRelawan/TambahKegiatanAdmin";
import EditKegiatanAdmin from "../components/Admin/KegiatanRelawan/EditKegiatanAdmin";
import DashboardAdmin from "../components/Admin/Dashboard/DashboardAdmin";
import DonasiAdmin from "../components/Admin/Donasi/DonasiAdmin";
import TambahDonasi from "../components/Admin/Donasi/TambahDonasi";
import EditDonasi from "../components/Admin/Donasi/EditDonasi";
import InvoicesAdmin from "../components/Admin/Invoices/InvoicesAdmin";
import ArtikelAdmin from "../components/Admin/Artikel/ArtikelAdmin";
import TambahArtikel from "../components/Admin/Artikel/TambahArtikel";
import EditArtikel from "../components/Admin/Artikel/EditArtikel";
import ClientsAdmin from "../components/Admin/Client/ClientsAdmin";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<DashboardAdmin />} />
      <Route path="/relawan-admin" element={<KegiatanRelawanAdmin />} />
      <Route path="/relawan-tambah" element={<TambahKegiatanAdmin />} />
      <Route path="/relawan-edit/:id" element={<EditKegiatanAdmin />} />
      <Route path="/donasi-admin" element={<DonasiAdmin />} />
      <Route path="/tambah-donasi" element={<TambahDonasi />} />
      <Route path="/edit-donasi/:id" element={<EditDonasi />} />
      <Route path="/invoices-admin" element={<InvoicesAdmin />} />
      <Route path="/artikel-admin" element={<ArtikelAdmin />} />
      <Route path="/tambah-artikel" element={<TambahArtikel />} />
      <Route path="/edit-artikel/:id" element={<EditArtikel />} />
      <Route path="/clients" element={<ClientsAdmin />} />
    </Routes>
  );
};

export default AdminRoutes;
