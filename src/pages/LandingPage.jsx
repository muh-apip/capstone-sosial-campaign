import React from "react";
import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer";
import HeroSection from "../components/landingPage/HeroSection";
import AboutUs from "../components/landingPage/AboutUs";
import Fitur from "../components/landingPage/Fitur";
import FAQ from "../components/landingPage/FAQ";
import Testimoni from "../components/landingPage/Testimoni";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Fitur />
      <FAQ />
      <Testimoni />
      <Footer />
    </>
  );
}
