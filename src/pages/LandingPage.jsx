import React from "react";
import Navbar from "../components/User/Layout/Navbar"
import Footer from "../components/User/Layout/Footer";
import HeroSection from "../components/User/LandingPage/HeroSection";
import AboutUs from "../components/User/LandingPage/AboutUs";
import Fitur from "../components/User/LandingPage/Fitur";
import FAQ from "../components/User/LandingPage/FAQ";
import Testimoni from "../components/User/LandingPage/Testimoni";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <section id="hero">
        <HeroSection />
      </section>
      <section id="about">
        <AboutUs />
      </section>
      <section id="program">
        <Fitur />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <section id="testimoni">
        <Testimoni />
      </section>
      <Footer/>
    </>
  );
}
