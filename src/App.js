import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import PageAccueil from './components/PageAccueil';
import PageInscriptionPremium from './components/PageInscriptionPremium';
import Base from './components/Base';
import CreationTache from './components/CreationTache';
import Profil from './components/Profil';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import PageInscriptionEntreeNom from './components/PageInscriptionEntreeNom';
import Inscription from './components/Inscription';
import Inscription2 from './components/Inscription2';
import Inscription3 from './components/Inscription3';
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
        <Route path = "/creationTache" element={<CreationTache/>} />    
        <Route path = "/inscription" element={<Inscription/>} />
        <Route path = "/inscription2" element={<Inscription2/>} />
        <Route path = "/inscription3" element={<Inscription3/>} />
        <Route path ="/pageLandingPage" element={<PageLandingPage/>} />
        <Route path ="/pageLandingPage2" element={<PageLandingPage2/>} />
        <Route path ="/pageLandingPage3" element={<PageLandingPage3/>} />
        <Route path ="/pageInscriptionPremium" element={<PageInscriptionPremium/>} />
        <Route path = "/" element={<Base/>} />
        <Route path = "/creationTache" element={<CreationTache/>} />
        <Route path = "/profil" element={<Profil/>}/>
     </Routes>
    </Router>
  );
}

export default App;
