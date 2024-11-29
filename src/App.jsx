import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./pages/HeroSection";
import AboutUs from "./pages/AboutUs";
import Fitur from "./pages/Fitur";
import FAQ from "./pages/FAQ";
import Artikel from "./components/Beranda/Artikel";
import Footer from "./components/Beranda/Footer";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Fitur />
      <FAQ />
      <Artikel />
      <Footer />
    </>
  );
}

export default App;
