import React, { useState } from 'react';
import axios from 'axios';
import InputProfilText from './InputProfilText';




export default function Login() {
    const [user, setUser] = useState({
        email: "",
        password: ""
    });
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (event) => {
        var temp = {...user}
        setUser(temp => ({ ...temp, [event.target.id]: [event.target.value] }))
        console.log("clé : " + event.target.id)
        console.log("valeur : " + event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:8000/api/login.php',user);
            console.log(response.data); // Handle successful login
        } catch (error) {
            console.error('Error:', error);
            setErrorMessage('Failed to login. Please try again.'); // Display error message
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
