import React from "react";
import LandingRoutes from "./LandingRoutes";
import PrivateRoutes from "./PrivateRoutes"

const AppRoutes = () => {
  return (
    <>
      <LandingRoutes />
      <PrivateRoutes />
    </>
  );
};

export default AppRoutes;
