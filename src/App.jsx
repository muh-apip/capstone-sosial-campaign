import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeroSection from "./pages/HeroSection";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import DetailArticle from "./components/DetailArtikel";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/detail" element={<DetailArticle />} />
      </Routes>
    </Router>
  );
};

export default App;
