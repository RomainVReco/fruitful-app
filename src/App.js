import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

import PageAccueil from './components/PageAccueil';
import PageInscriptionPremium from './components/PageInscriptionPremium';
import Base from './components/Base';
import CreationTache from './components/CreationTache';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import PageLandingPage from './components/PageLandingPage';
import PageLandingPage2 from './components/PageLandingPage2';
import PageLandingPage3 from './components/PageLandingPage3';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path ="/pageAccueil" element={<PageAccueil/>} />
        <Route path ="/pageLandingPage" element={<PageLandingPage/>} />
        <Route path ="/pageLandingPage2" element={<PageLandingPage2/>} />
        <Route path ="/pageLandingPage3" element={<PageLandingPage3/>} />
        <Route path ="/pageInscriptionPremium" element={<PageInscriptionPremium/>} />
        <Route path = "/" element={<Base/>} />
        <Route path = "/creationTache" element={<CreationTache/>} />
      </Routes>
    </Router>
  );
}

export default App;
