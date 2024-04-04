import React from "react";
import { Routes, Route } from 'react-router-dom';
import CreationTache from '../inscrit/CreationTache';
import Profil from '../inscrit/Profil';
import Renseignement from "../inscrit/Renseignement";
import Renseignement2 from "../inscrit/Renseignement2";
import Renseignement3 from "../inscrit/Renseignement3";
import Renseignement4 from "../inscrit/Renseignement4";
import Renseignement5 from "../inscrit/Renseignement5";
import ModifierTache from "../inscrit/ModifierTache";
import ListeTaches from '../inscrit/ListeTaches';
import PageInscriptionPremium from '../inscrit/PageInscriptionPremium'
import Test from '../inscrit/Test'
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
                <Route path="/renseignement5" element={<Renseignement5 />} />
                <Route path="/pageInscriptionPremium" element={<PageInscriptionPremium />} />
                <Route path="/test" element={<Test />}/>
                <Route path="*" element={<Erreur />} />
            </Route>
        </Routes>
    )
}

export default PagesInscrits;