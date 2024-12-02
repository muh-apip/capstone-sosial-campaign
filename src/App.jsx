import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeroSection from "./pages/HeroSection";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import DetailArticle from "./components/DetailArtikel";
import Artikel from "./pages/artikel";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/artikel" element={<Artikel />} />
        <Route path="/artikel/:id" element={<DetailArticle />} />
      </Routes>
    </Router>
  );
};

export default App;
