import React from "react";
import LandingRoutes from "./LandingRoutes";
import PrivateRoutes from "./PrivateRoutes";
import AdminRoutes from "./AdminRoutes";

const AppRoutes = () => {
  return (
    <>
      <LandingRoutes />
      <PrivateRoutes />
      <AdminRoutes />
    </>
  );
};

export default AppRoutes;
