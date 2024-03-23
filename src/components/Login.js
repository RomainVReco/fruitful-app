import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import InputProfilText from './InputProfilText';
import { gestionConnexion } from '../_helpers/gestion.connexion';




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

    const handleChange = (event) => {
        var temp = { ...user }
        setUser(temp => ({ ...temp, [event.target.id]: [event.target.value] }))
        console.log("clé : " + event.target.id)
        console.log("valeur : " + event.target.value)
        event.array.forEach(element => {
            
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:8081/login', user, headers);
            let idClient = response.data['idClient']
            if (!!idClient) {
                console.log('idClient : '+idClient)
                gestionConnexion.saveSessionId(idClient)
                navigate("../profil")
            } else {
                setErrorMessage('Email ou mot de passe invalide')
            }

        } catch (error) {
            console.error('Error:', error);
            setErrorMessage('Failed to login. Please try again.');
        }
    };

    return (
        <div className='container d-flex flex-column gap-3 '>
            <h2>Login</h2>
            <InputProfilText label='email' nomLabel='Email' method={handleChange} exemple='Email' />
            <div className='container'>
                <div className='row'>
                    <div className='col-md-5 col-12'>
                        <label htmlFor='password' className='form-label'>Mot de passe</label>
                        <input type="password" id="password" value={user.password} className='form-control profil-border' onChange={handleChange} />
                    </div>
                </div>
            </div>
            <div>
                <button type="button" className='btn boutonValiderProfil' onClick={handleSubmit}>Se connecter</button>
            </div>
            {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
        </div >
    );
};
