import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PageAccueil from '../public/PageAccueil';
import PageLandingPage from '../public/PageLandingPage';
import PageLandingPage2 from '../public/PageLandingPage2';
import PageLandingPage3 from '../public/PageLandingPage3';
import Inscription from '../public/Inscription';
import Inscription2 from '../public/Inscription2';
import Inscription3 from '../public/Inscription3';
import PageQuiSommesNous from '../public/PageQuiSommesNous';
import PageMentionsLegales from '../public/PageMentionsLegales';
import Login from '../public/Login';
import Layout from './Layout';
import Erreur from './Erreur';
import Contact from '../public/Contact';


const PagesPubliques = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index path="/" element={<PageAccueil />} />
                <Route index path="/pageAccueil" element={<PageAccueil />} />
                <Route path="/pageLandingPage" element={<PageLandingPage />} />
                <Route path="/pageLandingPage2" element={<PageLandingPage2 />} />
                <Route path="/pageLandingPage3" element={<PageLandingPage3 />} />
                <Route path="/inscription" element={<Inscription />} />
                <Route path="/inscription2" element={<Inscription2 />} />
                <Route path="/inscription3" element={<Inscription3 />} />
                <Route path="/PageQuiSommesNous" element={<PageQuiSommesNous />} />
                <Route path="/PageMentionsLegales" element={<PageMentionsLegales />} />
                <Route path="/login" element={<Login />} />
                <Route path="/contactezNous" element={<Contact/>} />
                <Route path="*" element={<Erreur />} />
            </Route>
        </Routes>
    )
}

export default PagesPubliques;