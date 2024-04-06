import "./App.css";
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
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
