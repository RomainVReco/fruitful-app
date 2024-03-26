import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import InputProfilText from './InputProfilText';
//import BankInfoForm from './a_suppr_BankInfoForm';

export default function PageInscriptionPremium1() {
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
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:8081/logintest1', user, headers);
            let nomUtilisateur = response.data['s_nom']; // Récupérer la valeur de s_nom
            //sessionStorage.setItem("idClient", idClient)
            //console.log('idClient : '+idClient)
            console.log('Nom de l\'utilisateur : ' + nomUtilisateur);
            {/* navigate("../profil") */}
        } catch (error) {
            console.error('Error:', error);
            setErrorMessage('Failed to login. Please try again.');
        }
    };

    const handleSubmit1 = async (event) => {
      event.preventDefault();

      const userId = 1; // ID de l'utilisateur à mettre à jour
      const nouveauNomUtilisateur = "Horn"; // Nouveau nom de l'utilisateur
  
      try {
          // Envoyer la requête pour mettre à jour le nom de l'utilisateur
          const response = await axios.post(`http://localhost:8081/updateTestUserName/${userId}`, { nouveauNom: nouveauNomUtilisateur }, headers);
          console.log(response.data); // Afficher la réponse du serveur
          
          // Réactualiser la page ou effectuer d'autres actions nécessaires
      } catch (error) {
          console.error('Error:', error);
          setErrorMessage('Failed to update user name. Please try again.');
      }
  };

    return (
      
      <div class="container-fluid" className="PageInscriptionPremium1">
        <br />
        <h1>Devenez membre Premium et accéder à toute l'étendue de nos services! </h1>
        <br />
        <div className='container d-flex flex-column gap-3 '>
            
                <div>
                    <button type="button" className='btn boutonValiderProfil' onClick={handleSubmit1}>Action</button>
                </div>
            {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
        </div >
      

      </div>

    );
};


