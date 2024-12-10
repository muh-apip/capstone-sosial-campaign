import React from "react";
import { Routes, Route } from "react-router-dom";
import KegiatanRelawan from "../components/Admin/KegiatanRelawan/kegiatanrelawan";
import TambahKegiatan from "../components/Admin/KegiatanRelawan/TambahKegiatan";
const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/kegiatanrelawan" element={<KegiatanRelawan />} />
      <Route path="/kegiatan/tambah" element={<TambahKegiatan />} />
    </Routes>
  );
};

export default PrivateRoutes;
