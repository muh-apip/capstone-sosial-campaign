import React from "react";
import { Routes, Route } from "react-router-dom";
import KegiatanRelawan from "../components/Admin/KegiatanRelawan/kegiatanrelawan";
const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/kegiatanrelawan" element={<KegiatanRelawan />} />
    </Routes>
  );
};

export default PrivateRoutes;
