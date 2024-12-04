import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import DetailArticle from "./components/Artikel/DetailArtikel";
import Artikel from "./components/Artikel/Artikel";
import SignUp from "./pages/Signup";
import Home from "./components/Beranda/Home";
import Relawan from "./components/Relawan/Relawan";
import DetailRelawan from "./components/Relawan/DetailRelawan";
import PendaftaranRelawan from "./components/Relawan/PendaftaranRelawan";
import DetailKegiatan from "./components/Kegiatanku/DetailKegiatan";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/artikel" element={<Artikel />} />
        <Route path="/artikel/:id" element={<DetailArticle />} />
        <Route path="/relawan" element={<Relawan />} />
        <Route path="/relawan/:id" element={<DetailRelawan />} />
        <Route path="/relawan/pendaftaran" element={<PendaftaranRelawan />} />
        <Route path="/detailkegiatan" element={<DetailKegiatan />} />
      </Routes>
    </Router>
  );
}

export default App;
