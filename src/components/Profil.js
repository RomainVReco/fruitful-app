import React, { useEffect, useState } from 'react'
import chevron from '../assets/chevron-down.svg'
import InputProfilText from './InputProfilText'
import GenericButton from './GenericButton'
import axios from 'axios'
import { gestionConnexion } from '../_helpers/gestion.connexion'
import { gestionRetourAPI } from '../_helpers/gestion.retour.api'

export default function Profil() {

    const profil = {
        0: 'Mon profil',
        1: 'Mon bilan',
        2: 'Mes tâches',
        3: 'Abonnement'
    }
    const [client, setClient] = useState({
        nom: '',
        prenom: '',
        email: '',
        adresse: '',
        newsletter: '',
        specialOffer: ''
    })

    const [isActif, setSelecteurActif] = useState(false)
    const [subNewsletter, setNewsletter] = useState(client.newsletter)
    const [subSpecialOffer, setSpecialOffer] = useState(client.specialOffer)
    const [adresse, setAdresse] = useState(client.adresse)
    const [adresseAPI, setAdresseAPI] = useState('')

    useEffect(() => {
        console.log("useEffect profil");
        console.log('jeton : ', sessionStorage.getItem('jeton'))
        if (gestionConnexion.isLogged()) {
            fetchData(gestionConnexion.getSessionId());
        }
    }, []);

    const fetchData = async (idClient) => {
        console.log('fetchData : ', idClient)
        try {
            const response = await axios.post(`http://localhost:8081/getUser/${idClient}`);
            console.log("Fetchdata profil : ", response.data);
            Object.entries(response.data).forEach(([key, value]) => {
                console.log(key, value);
                setClient(prevClient => ({ ...prevClient, [key]: value }));
            });
        } catch (error) {
            console.error('Erreur Fetchdata : ', error);
        }
    }



    {/*const fetchSession = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/session.php')
                console.log(response.data)
            } catch (error) {
                console.log("Erreur : "+error)
            }
        }
    fetchSession() 

        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/utilisateurs.php')
                console.log(response.data)
            } catch (error) {
                console.log("Erreur : "+error)
            }
        }
    fetchData()*/}


    const handleSelectorChange = (event) => {
        setSelecteurActif(!isActif)
        console.log("isActif :" + !isActif)
        console.log('Sélecteur : ', event.target.value)
    }
    const checkMail = () => {
        console.log("checkMail")
    }

    const handlePasswordChange = (event) => {
        console.log("handlePasswordChange :" + event.target.value)
    }
    const initiatePasswordChange = () => {
        console.log("initiatePasswordChange")
    }

    const handleClicCheck = (event) => {
        var temp = { ...client }
        console.log("cible du clic : ", event.target.id)
        let hasBeenChecked = event.target.checked
        setClient(temp => ({ ...temp, [event.target.id]: hasBeenChecked }))
        console.log(hasBeenChecked)
        Object.entries(client).forEach(([key, value]) => {
            console.log(key, value);
        });
    }
    const handleSubmit = () => {
        console.log('coucou')
        Object.entries(client).forEach(([key, value]) => {
            console.log(key, value)
        })
    }

    const handleChange = (event) => {
        console.log("Handle Change in profil")
        setClient(prevClient => ({ ...prevClient, [event.target.id]: event.target.value }))
    }

    const getAddressFromAPI = async () => {
        console.log(typeof(adresseAPI))
        try {
            const response = await axios.get(`https://api-adresse.data.gouv.fr/search/?q=${client.adresse}`)
            console.log("adresse(s) : ", response.data['features'])
            setAdresseAPI(gestionRetourAPI.parseAddressAPI(response.data['features']))
        } catch (error) {
            console.log("Erreur lors de l'appel de l'API adresse : ", error)
        }
    }

    const handleAddressChange = (event) => {
        setClient(prevState => ({ ...prevState, [event.target.id]: event.target.value }))
        console.log(event.target.value)
        if (client.adresse.length > 3) {
            getAddressFromAPI()
        }
    }




    const updateAddress = (event) => {
        console.log("texte content : ", event.target.textContent)

    }

    return (
        <div className='container-md wrapper-profil'>
            <select className="form-select form-control profil-border" aria-label="Default select example"
                onChange={event => handleSelectorChange(event)} defaultValue={profil[0]}>
                <option value="0" >{profil[0]}</option>
                <option value="1">{profil[1]}</option>
                <option value="2">{profil[2]}</option>
                <option value="3">{profil[3]}</option>
            </select>
            <div>
                <h6 className='profil-h6'>Mes informations</h6>
                <div className='diviseur'></div>
                <div className='render-info'>
                    <InputProfilText label='nom' nomLabel='Nom' titre={client.nom} method={handleChange} />
                    <InputProfilText label='prenom' nomLabel='Prénom' titre={client.prenom} method={handleChange} />
                    <InputProfilText label='email' nomLabel='Email' titre={client.email} method={handleChange} />
                    <InputProfilText label='adresse' nomLabel='Adresse' titre={client.adresse} method={handleAddressChange} />
                    {adresseAPI && (<div className='container d-flex flex-column resultat-recherche '>
                        <div className='diviseur'></div>
                        <ul className='liste-resultat-recherche'>
                            {adresseAPI.map((element, index) => {
                                return <li key={index} className='liste-resultat-recherche-item' 
                                id='adresse' onClick={updateAddress} value={element}>{element}</li>
                            })}
                        </ul>
                    </div>)}

                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-5 col-12'>
                                <form>
                                    <label htmlFor="password" className='form-label'>Mot de passe</label>
                                    <input type="text" id="password" className='form-control profil-border' onChange={handlePasswordChange}
                                        value="*********" disabled></input>
                                    <a href="#modifierPassword" id="modifierPassword" className="lien-label" onClick={initiatePasswordChange}>Modifier mon mot de passe </a>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="newsletter" checked={client.newsletter} onChange={handleClicCheck} />
                            <label className="form-check-label" htmlFor="newsletter">Newsletter</label>
                        </div>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="specialOffer" checked={client.specialOffer} onChange={handleClicCheck} />
                            <label className="form-check-label" htmlFor="specialOffer">Offres spéciales de nos partenaires</label>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <GenericButton buttonStyle={"boutonValiderProfil"} label={"Enregistrer"} onClick={handleSubmit} />
                    </div>

                </div>
            </div>





        </div >



    )
}

