import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutUs from "../components/User/LandingPage/AboutUs";
import FAQ from "../components/User/LandingPage/FAQ";
import Fitur from "../components/User/LandingPage/Fitur";
import Testimoni from "../components/User/LandingPage/Testimoni";
import HeroSection from "../components/User/LandingPage/HeroSection";
import LandingPage from "../pages/LandingPage";

const LandingRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/hero-section" element={<HeroSection />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/feature" element={<Fitur />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/testimoni" element={<Testimoni />} />
    </Routes>
  );
};

export default LandingRoutes;
