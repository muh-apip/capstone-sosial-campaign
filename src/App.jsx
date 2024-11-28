import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./pages/HeroSection";
import AboutUs from "./pages/AboutUs";
import Fitur from "./pages/Fitur";
import FAQ from "./pages/FAQ";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Fitur />
      <FAQ />
    </>
  );
}

export default App;
