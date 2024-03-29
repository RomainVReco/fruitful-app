import React, { useEffect, useState } from 'react';
import { gestionConnexion } from '../../_helpers/gestion.connexion';
import axios from 'axios';

export default function PageInscriptionPremium1() {
    const headers = {
        'Content-Type': 'application/json'
    }

    const [idClient, setIdClient] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const id = gestionConnexion.getSessionId();
        setIdClient(id);
    }, []);

    const handleInscription = async () => {
        try {
            // Récupération de l'ID de l'utilisateur connecté en utilisant getSessionId()
            const idClient = gestionConnexion.getSessionId();
            
            // Envoyer une requête pour mettre à jour le champ estAbonne
            const response = await axios.post(`http://localhost:8081/updateTestUserName/${idClient}`, { estAbonne: 1 }, { headers });
            
            console.log(response.data); // Affichage de la réponse du serveur
            
            // Mettre à jour localement si nécessaire
        } catch (error) {
            console.error('Error:', error);
            setErrorMessage('Failed to update subscription. Please try again.');
        }
    };

    return (
        <div>
            <h1>Page Premium</h1>
            <p>Votre idClient actuel : {idClient}</p>
            <button onClick={handleInscription}>Inscription</button>
            {errorMessage && <p>{errorMessage}</p>}
        </div>
    );
}