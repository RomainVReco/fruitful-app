import React, { useEffect } from 'react';
import { gestionConnexion } from '../_helpers/gestion.connexion';

export default function Premium() {
    useEffect(() => {
        const idClient = gestionConnexion.getSessionId();
        console.log('idClient de la session en cours : ', idClient);
    }, []);

    return (
        <div>
            <h1>Page Premium</h1>
            <p>Votre idClient actuel : Veuillez consulter la console pour le voir.</p>
        </div>
    );
}