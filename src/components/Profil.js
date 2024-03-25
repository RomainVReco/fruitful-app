import React, { useEffect, useState } from 'react'
import chevron from '../assets/chevron-down.svg'
import InputProfilText from './InputProfilText'
import GenericButton from './GenericButton'
import axios from 'axios'
import { gestionConnexion } from '../_helpers/gestion.connexion'
import { gestionRetourAdresseAPI } from '../_helpers/gestion.retour.api'

export default function Profil() {

    // Déclaration des variables de la page

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
        idAdresse: '',
        newsletter: '',
        specialOffer: ''
    })

    const [adresse, setAdresse] = useState({
        idAdresse: '',
        adresse: '',
        codePostal: '',
        ville: '',
        label: ''
    })

    const [isActif, setSelecteurActif] = useState(false)
    const [subNewsletter, setNewsletter] = useState(client.newsletter)
    const [subSpecialOffer, setSpecialOffer] = useState(client.specialOffer)
    const [adresseAPI, setAdresseAPI] = useState('')

    useEffect(() => {
        console.log("useEffect profil");
        console.log('jeton : ', sessionStorage.getItem('jeton'))
        if (gestionConnexion.isLogged()) {
            fetchData(gestionConnexion.getSessionId());
            if (client.idAdresse !== undefined) {
                console.log(client.idAdresse)
                fetchAddress(client.idAdresse)
            }
        }
    }, [client.idAdresse]);

    // Récupération des données clients et d'adresse

    const fetchData = async (idClient) => {
        console.log('fetchData : ', idClient)
        try {
            const response = await axios.post(`http://localhost:8081/getUser/${idClient}`);
            console.log("Fetchdata profil : ", response.data);
            Object.entries(response.data).forEach(([key, value]) => {
                console.log(key, value)
                setClient(prevClient => ({ ...prevClient, [key]: value }))
            });
        } catch (error) {
            console.error('Erreur fetchDdata : ', error);
        }
    }

    const fetchAddress = async (idAdresse) => {
        console.log('fetchAddress : ', idAdresse)
        try {
            const response = await axios.post(`http://localhost:8081/getAddress/${idAdresse}`)
            Object.entries(response.data).forEach(([key, value]) => {
                console.log(key, value)
                setAdresse(prevAdresse => ({ ...prevAdresse, [key]: value }))
            })
        } catch (error) {
            console.error('Erreur fetchAddress : ', error)
        }
    }

    // Méthode pour ecouter et mettre à jours les champs de la page

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
        let hasBeenChecked = Number(event.target.checked)
        setClient(temp => ({ ...temp, [event.target.id]: hasBeenChecked }))
        console.log('newsletter : ', client['newsletter'])
        console.log('specialOffer : ', client['specialOffer'])
    }

    const handleChange = (event) => {
        console.log("Handle Change in profil")
        setClient(prevClient => ({ ...prevClient, [event.target.id]: event.target.value }))
    }

    // Mise à jour des blocs relatifs à l'adresse postale 

    const handleAddressChange = (event) => {
        setAdresse(prevState => ({ ...prevState, [event.target.id]: event.target.value }))
        console.log(event.target.value)
        if (adresse.adresse.length > 3) {
            getAddressFromAPI()
        }
    }

    const getAddressFromAPI = async () => {
        try {
            const response = await axios.get(`https://api-adresse.data.gouv.fr/search/?q=${adresse.adresse}`)
            console.log("adresse(s) : ", response.data['features'])
            setAdresseAPI(gestionRetourAdresseAPI.parseAddressAPI(response.data['features']))
        } catch (error) {
            console.log("Erreur lors de l'appel de l'API adresse : ", error)
        }
    }

    const selectAddressAPI = (index) => {
        let data = adresseAPI[index]
        console.log("updateAddress : ", data)
        setAdresse(data)
    }

    // Enregistrement des modifications des informations de profi

    const handleSubmit = () => {
        console.log("Handle submit profil")
        if (client.idAdresse === undefined && adresse.adresse !== undefined) {
            createNewAddress(adresse)
        } else if (client.idAdresse !== undefined) {
            updateCurrentAddress(adresse)
        }
        updateUserInfo(client)
    }

    const createNewAddress = async (adresse) => {
        try {
            const response = await axios.post('https://localhost:8081/createAddress', adresse)
            console.log("Création nouvelle adresse : ", response.data)
        } catch (error) {
            console.log("Erreur lors de l'enregistrement de la création de la nouvelle adresse : ", error)
        }
    }

    const updateCurrentAddress = async (adresse) => {
        try {
            const response = await axios.put('https://localhost:8081/updateAddress', adresse)
            console.log("Mise à jour d'une adresse existante : ", response.data)
        } catch (error) {
            console.log("Erreur lors de la mise à jour de l'adresse : ", error)
        }
    }

    const updateUserInfo = async (client) => {
        try {
            const response = await axios.put('https://localhost:8081/updateClient', client)
            console.log("Mise à jour des informations clients : ", response.data)
        } catch (error) {
            console.log("Erreur lors de la mise à jour des informations client : ", error)
        }
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
                    <InputProfilText label='adresse' nomLabel='Adresse' titre={adresse.adresse} method={handleAddressChange} />
                    {adresseAPI && (<div className='container d-flex flex-column resultat-recherche '>
                        <div className='diviseur'></div>
                        <ul className='liste-resultat-recherche'>
                            {adresseAPI.map((element, index) => {
                                return <li key={index} pos={index} className='liste-resultat-recherche-item'
                                    id='adresse' onClick={() => selectAddressAPI(index)}
                                    value={element.label}>{element.label}</li>
                            })}
                        </ul>
                    </div>)}
                    <div className='d-flex col-md-5 col-12'>
                        <InputProfilText label='codePostal' nomLabel='Code postal' titre={adresse.codePostal} method={handleAddressChange}/>
                        <InputProfilText label='ville' nomLabel='Ville' titre={adresse.ville} method={handleAddressChange}/>
                    </div>
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

