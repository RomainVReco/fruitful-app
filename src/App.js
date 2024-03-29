import "./App.css";
import Header from "./components/Header";
import PageInscriptionPremium from "./pages/inscrit/PageInscriptionPremium";
import PageInscriptionPremium1 from "./pages/inscrit/PageInscriptionPremium1";
import PageInscriptionPremium2 from './pages/inscrit/PageInscriptionPremium2';
import Base from "./pages/inscrit/Base";
import CreationTache from "./pages/inscrit/CreationTache";
import Profil from "./pages/inscrit/Profil";
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import Renseignement from "./pages/inscrit/Renseignement";
import Renseignement2 from "./pages/inscrit/Renseignement2";
import Renseignement3 from "./pages/inscrit/Renseignement3";
import Renseignement4 from "./pages/inscrit/Renseignement4";
import ModifierTache from "./pages/inscrit/ModifierTache";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import PagesPubliques from "./pages/public/PagesPubliques";
import PagesInscrits from "./pages/inscrit/PagesInscrits";
import LoginControleur from "./_helpers/LoginControleur";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<PagesPubliques />} />
        <Route path="/estConnecte/*" element={
          <LoginControleur>
            <PagesInscrits />
          </LoginControleur>
        } />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
