import React from "react";
import { Routes, Route } from 'react-router-dom';
import CreationTache from '../inscrit/CreationTache';
import Profil from '../inscrit/Profil';
import Renseignement from "../inscrit/Renseignement";
import Renseignement2 from "../inscrit/Renseignement2";
import Renseignement3 from "../inscrit/Renseignement3";
import Renseignement4 from "../inscrit/Renseignement4";
import ModifierTache from "../inscrit/ModifierTache";
import ListeTaches from '../inscrit/ListeTaches';
import PageInscriptionPremium from '../inscrit/PageInscriptionPremium'
import PageInscriptionPremium1 from '../inscrit/PageInscriptionPremium1'
import PageInscriptionPremium2 from '../inscrit/PageInscriptionPremium2'
import Layout from '../public/Layout';
import Erreur from "../public/Erreur";


const PagesInscrits = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/creationTache" element={<CreationTache />} />
                <Route path="/listeTaches" element={<ListeTaches />} />
                <Route path="/modifierTache/:idEvenement" element={<ModifierTache />} />
                <Route path="/profil" element={<Profil />} />
                <Route path="/renseignement" element={<Renseignement />} />
                <Route path="/renseignement2" element={<Renseignement2 />} />
                <Route path="/renseignement3" element={<Renseignement3 />} />
                <Route path="/renseignement4" element={<Renseignement4 />} />
                <Route path="/pageInscriptionPremium" element={<PageInscriptionPremium />} />
                <Route path="/pageInscriptionPremium1" element={<PageInscriptionPremium1 />} />
                <Route path="/pageInscriptionPremium2" element={<PageInscriptionPremium2 />} />
                <Route path="*" element={<Erreur />} />
            </Route>
        </Routes>
    )
}

export default PagesInscrits;