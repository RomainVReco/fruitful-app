import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PageAccueil from '../public/PageAccueil';
import PageLandingPage from '../public/PageLandingPage';
import PageLandingPage2 from '../public/PageLandingPage2';
import PageLandingPage3 from '../public/PageLandingPage3';
import Inscription from '../public/Inscription';
import Inscription2 from '../public/Inscription2';
import Inscription3 from '../public/Inscription3';
import Login from '../public/Login';
import Layout from './Layout';


const PagesPubliques = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/pageAccueil" element={<PageAccueil />} />
                <Route path="/pageLandingPage" element={<PageLandingPage />} />
                <Route path="/pageLandingPage2" element={<PageLandingPage2 />} />
                <Route path="/pageLandingPage3" element={<PageLandingPage3 />} />
                <Route path="/inscription" element={<Inscription />} />
                <Route path="/inscription2" element={<Inscription2 />} />
                <Route path="/inscription3" element={<Inscription3 />} />
                <Route path="/login" element={<Login />} />
            </Route>
        </Routes>
    )
}

export default PagesPubliques;