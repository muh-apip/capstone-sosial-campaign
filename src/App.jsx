import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import DetailArticle from "./components/Artikel/DetailArtikel";
import Artikel from "./components/Artikel/Artikel";
import SignUp from "./pages/Signup";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/detail" element={<DetailArticle />} />
        <Route path="/artikel" element={<Artikel />} />

      </Routes>
    </Router>

  );
}

export default App;
