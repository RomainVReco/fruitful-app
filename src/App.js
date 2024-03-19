import logo from './logo.svg';
import './App.css';

import PageAccueil from './components/PageAccueil';
import Base from './components/Base';
import CreationTache from './components/CreationTache';
import Header from './components/Header';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path ="/pageAccueil" element={<PageAccueil/>} />
        <Route path = "/" element={<Base/>} />
        <Route path = "/creationTache" element={<CreationTache/>} />
      </Routes>
    </Router>
  );
}

export default App;
