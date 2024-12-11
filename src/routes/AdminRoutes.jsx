import React from "react";
import { Routes, Route } from "react-router-dom";
import KegiatanRelawanAdmin from "../components/Admin/KegiatanRelawan/KegiatanRelawanAdmin";
import TambahKegiatanAdmin from "../components/Admin/KegiatanRelawan/TambahKegiatanAdmin";
import EditKegiatanAdmin from "../components/Admin/KegiatanRelawan/EditKegiatanAdmin";
import TableClient from "../components/Admin/Client/ClientsAdmin";
const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/kegiatan" element={<KegiatanRelawanAdmin />} />
      <Route path="/kegiatan/tambah" element={<TambahKegiatanAdmin />} />
      <Route path="/kegiatan/edit/:id" element={<EditKegiatanAdmin />} />
      <Route path="/client" element={<TableClient />} />
    </Routes>
  );
};

export default PrivateRoutes;
