import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import InputProfilText from '../../components/InputProfilText';
import { gestionConnexion } from '../../_helpers/gestion.connexion';




export default function Login() {
    const headers = {
        'Content-Type': 'application/json'
    }

    var navigate = useNavigate()


    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const [errorMessage, setErrorMessage] = useState('');
    const [subscriptionStatus, setSubscriptionStatus] = useState('')

    const handleChange = (event) => {
        var temp = { ...user }
        setUser(temp => ({ ...temp, [event.target.id]: [event.target.value] }))
        console.log("clé : " + event.target.id)
        console.log("valeur : " + event.target.value)
    }

    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:8081/login', user, headers);
            let idUtilisateur = response.data['idUtilisateur']
            console.log('idUtilisateur : ', idUtilisateur)
            if (!!idUtilisateur) {
                gestionConnexion.saveSessionId(idUtilisateur)
                if (!!sessionStorage.getItem("nouvelInscrit") && sessionStorage.getItem("nouvelInscrit") == "true") {
                    navigate("/estConnecte/AtterrissageConnexion")
                }
                else { navigate("/estConnecte/ListeTaches") }
            } else {
                setErrorMessage('Email ou mot de passe invalide')
            }

        } catch (error) {
            console.error('Error:', error);
            setErrorMessage('Failed to login. Please try again.');
        }
    };

    return (
        <>

<div className='fond-neutre mt-4'>
        <div className="container corps-inscription d-flex flex-column align-items-center">
          <div className="d-flex flex-column">


   
                <h3 className='titre-h3-modifier-creer-tache centre'>Connectez-vous pour accéder à votre Espace Utilisateur</h3>
                <InputProfilText label='email' nomLabel='Email' method={handleChange} exemple='mon_email@site.com' />
                <div className='w-100 m-1'>
                    <label htmlFor='password' className='form-label'>Mot de passe</label>
                    <input type="password" id="password" value={user.password} className='form-control profil-border' onChange={handleChange} />
                </div>

                <button type="button" className='btn boutonValiderProfil mt-5' onClick={handleSubmit}>Se connecter</button>

                {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
            </div>
        </div >
</div>
        {/* <div className='container d-flex justify-content-center' >
            <div className='d-flex flex-column align-items-center justify-content-center m-3 col-12 col-md-9 ' >
                <h3 className='titre-h3-modifier-creer-tache'>Connectez-vous pour accéder à votre Espace Utilisateur</h3>
                <InputProfilText label='email' nomLabel='Email' method={handleChange} exemple='jeanbonbeurre@gmail.com' />
                <div className='w-100 m-1'>
                    <label htmlFor='password' className='form-label'>Mot de passe</label>
                    <input type="password" id="password" value={user.password} className='form-control profil-border' onChange={handleChange} />
                </div>

                <button type="button" className='btn boutonValiderProfil mt-5' onClick={handleSubmit}>Se connecter</button>

                {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
            </div>
        </div > */}
        </>
    )
}