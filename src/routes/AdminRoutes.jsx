import React from "react";
import { Routes, Route } from "react-router-dom";
import KegiatanRelawan from "../components/Admin/KegiatanRelawan/kegiatanrelawan";
import TambahKegiatan from "../components/Admin/KegiatanRelawan/TambahKegiatan";
import DashboardAdmin from "../components/Admin/Dashboard/DashboardAdmin"
import DonasiAdmin from "../components/Admin/Donasi/DonasiAdmin";
import TambahDonasi from "../components/Admin/Donasi/TambahDonasi";
import EditDonasi from "../components/Admin/Donasi/EditDonasi.jsx";
import InvoicesAdmin from "../components/Admin/Invoices/InvoicesAdmin.jsx"

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<DashboardAdmin />} />
      <Route path="/kegiatanrelawan" element={<KegiatanRelawan />} />
      <Route path="/kegiatan/tambah" element={<TambahKegiatan />} />
      <Route path="/donasi-admin" element={<DonasiAdmin />} />
      <Route path="/tambah-donasi" element={<TambahDonasi />} />
      <Route path="/edit-donasi/:id" element={<EditDonasi />} />
      <Route path="/invoices-admin" element={<InvoicesAdmin />} />
      

    </Routes>
  );
};

export default PrivateRoutes;
