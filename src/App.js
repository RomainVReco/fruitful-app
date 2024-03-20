import logo from './logo.svg';
import './App.css';

import PageAccueil from './components/PageAccueil';
import Base from './components/Base';
import CreationTache from './components/CreationTache';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import PageInscriptionEntreeNom from './components/PageInscriptionEntreeNom';
import Inscription from './components/Inscription';


function App() {
  return (
    <Router>
      <Routes>
        <Route path ="/pageAccueil" element={<PageAccueil/>} />
        <Route path = "/pageInscriptionEntreeNom" element={<PageInscriptionEntreeNom/>} />
        <Route path = "/creationTache" element={<CreationTache/>} />    
        <Route path = "/inscription" element={<Inscription/>} />
      </Routes>
    </Router>
  );
}

export default App;
