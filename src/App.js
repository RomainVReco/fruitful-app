import logo from './logo.svg';
import './App.css';

import PageAccueil from './components/PageAccueil';
import Base from './components/Base';
import CreationTache from './components/CreationTache';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';



function App() {
  return (
    <Router>
      <Routes>
        <Route path ="/pageAccueil" element={<PageAccueil/>} />
        <Route path = "/" element={<Base/>} />
        <Route path = "/creationTache" element={<CreationTache/>} />
      </Routes>
    </Router>
  );
}

export default App;
