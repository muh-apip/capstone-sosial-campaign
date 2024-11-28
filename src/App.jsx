import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./pages/HeroSection";
import AboutUs from "./pages/AboutUs";
import Fitur from "./pages/Fitur";
import FAQ from "./pages/FAQ";
import Testimoni from "./pages/Testimoni";

function App() {
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

export default App;
