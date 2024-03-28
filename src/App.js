import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import PageAccueil from "./pages/public/PageAccueil";
import PageInscriptionPremium from "./pages/inscrit/PageInscriptionPremium";
import PageInscriptionPremium1 from "./pages/inscrit/PageInscriptionPremium1";
import PageInscriptionPremium2 from './pages/inscrit/PageInscriptionPremium2';
import Base from "./pages/inscrit/Base";
import CreationTache from "./pages/inscrit/CreationTache";
import Profil from "./components/Profil";
import Login from "./pages/public/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Inscription from "./pages/public/Inscription";
import Inscription2 from "./pages/public/Inscription2";
import Inscription3 from "./pages/public/Inscription3";
import PageLandingPage from "./pages/public/PageLandingPage";
import PageLandingPage2 from "./pages/public/PageLandingPage2";
import PageLandingPage3 from "./pages/public/PageLandingPage3";
import Renseignement from "./pages/inscrit/Renseignement";
import Renseignement2 from "./pages/inscrit/Renseignement2";
import Renseignement3 from "./pages/inscrit/Renseignement3";
import Renseignement4 from "./pages/inscrit/Renseignement4";
import ModifierTache from "./pages/inscrit/ModifierTache";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/pageAccueil" element={<PageAccueil />} />
        <Route path="/creationTache" element={<CreationTache />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/inscription2" element={<Inscription2 />} />
        <Route path="/inscription3" element={<Inscription3 />} />
        <Route path="/pageLandingPage" element={<PageLandingPage />} />
        <Route path="/pageLandingPage2" element={<PageLandingPage2 />} />
        <Route path="/pageLandingPage3" element={<PageLandingPage3 />} />
        <Route path ="/pageInscriptionPremium" element={<PageInscriptionPremium/>} />
        <Route path ="/pageInscriptionPremium1" element={<PageInscriptionPremium1/>} />
        <Route path ="/pageInscriptionPremium2" element={<PageInscriptionPremium2/>} />
        <Route path="/listeTaches" element={<Base />} />
        <Route path="/modifierTache" element={<ModifierTache/>} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/login" element={<Login />} />
        <Route path="/renseignement" element={<Renseignement />} />
        <Route path="/renseignement2" element={<Renseignement2 />} />
        <Route path="/renseignement3" element={<Renseignement3 />} />
        <Route path="/renseignement4" element={<Renseignement4 />} />
      </Routes>
    </Router>
  );
}

export default App;
