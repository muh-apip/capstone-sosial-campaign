import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import DetailArticle from "./components/Artikel/DetailArtikel";
import Artikel from "./components/User/Artikel/Artikel";
import SignUp from "./pages/Signup";
import Home from "./components/Beranda/Home";
import Relawan from "./components/User/Relawan/Relawan";
import DetailRelawan from "./components/User/Relawan/DetailRelawan";
import PendaftaranRelawan from "./components/User/Relawan/PendaftaranRelawan";
import DetailKegiatan from "./components/Kegiatanku/DetailKegiatan";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
