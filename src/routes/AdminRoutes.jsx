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
import AdminRoute from "./AdminRoute"; // Import PrivateRoute

const AdminRoutes = () => {
  return (
    <Routes>
      <Route
        path="/dashboard"
        element={<AdminRoute element={<DashboardAdmin />} requiredRole="admin" />}
      />
      <Route
        path="/relawan-admin"
        element={<AdminRoute element={<KegiatanRelawanAdmin />} requiredRole="admin" />}
      />
      <Route
        path="/relawan-tambah"
        element={<AdminRoute element={<TambahKegiatanAdmin />} requiredRole="admin" />}
      />
      <Route
        path="/relawan-edit/:id"
        element={<AdminRoute element={<EditKegiatanAdmin />} requiredRole="admin" />}
      />
      <Route
        path="/donasi-admin"
        element={<AdminRoute element={<DonasiAdmin />} requiredRole="admin" />}
      />
      <Route
        path="/tambah-donasi"
        element={<AdminRoute element={<TambahDonasi />} requiredRole="admin" />}
      />
      <Route
        path="/edit-donasi/:id"
        element={<AdminRoute element={<EditDonasi />} requiredRole="admin" />}
      />
      <Route
        path="/invoices-admin"
        element={<AdminRoute element={<InvoicesAdmin />} requiredRole="admin" />}
      />
      <Route
        path="/artikel-admin"
        element={<AdminRoute element={<ArtikelAdmin />} requiredRole="admin" />}
      />
      <Route
        path="/tambah-artikel"
        element={<AdminRoute element={<TambahArtikel />} requiredRole="admin" />}
      />
      <Route
        path="/edit-artikel/:id"
        element={<AdminRoute element={<EditArtikel />} requiredRole="admin" />}
      />
      <Route
        path="/clients"
        element={<AdminRoute element={<ClientsAdmin />} requiredRole="admin" />}
      />
    </Routes>
  );
};

export default AdminRoutes;
