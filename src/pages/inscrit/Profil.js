import React, { useEffect, useState } from 'react'
import InputProfilText from '../../components/InputProfilText'
import axios from 'axios'
import { gestionConnexion } from '../../_helpers/gestion.connexion'
import { gestionRetourAdresseAPI } from '../../_helpers/gestion.retour.api'

export default function Profil() {

    // Déclaration des variables de la page

    const profil = {
        0: 'Mon profil',
        1: 'Mon bilan',
        2: 'Mes tâches',
        3: 'Abonnement'
    }
    const [client, setClient] = useState({
        idUtilisateur: '',
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
        idUtilisateur: '',
        label: ''
    })

    const [isActif, setSelecteurActif] = useState(false)
    const [subNewsletter, setNewsletter] = useState(client.newsletter)
    const [subSpecialOffer, setSpecialOffer] = useState(client.specialOffer)
    const [adresseAPI, setAdresseAPI] = useState('')

    useEffect(() => {
        if (gestionConnexion.isLogged()) {
            fetchData(gestionConnexion.getSessionId());
        }
    }, [client.idAdresse]);

    useEffect(() => {
        if (client.idAdresse) {
            console.log("useEffect fetchAddress : ",client.idAdresse)
            fetchAddress(client.idUtilisateur)
        }
    }, [client.idAdresse])

    // Récupération des données clients et d'adresse

    const fetchData = async (idUtilisateur) => {
        console.log('fetchData : ', idUtilisateur)
        try {
            const response = await axios.post(`http://localhost:8081/getUser/${idUtilisateur}`);
            console.log("Fetchdata profil : ", response.data);
            Object.entries(response.data).forEach(([key, value]) => {
                console.log(key, value)
                setClient(prevClient => ({ ...prevClient, [key]: value }))
            });
        } catch (error) {
            console.error('Erreur fetchDdata : ', error);
        }
    }

    const fetchAddress = async (idUtilisateur) => {
        console.log('fetchAddress : ', idUtilisateur)
        try {
            const response = await axios.post(`http://localhost:8081/getAddress/${idUtilisateur}`)
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

    const handleClickCheck = (event) => {
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

        if (adresse.adresse && adresse.adresse.length > 3) {
            getAddressFromAPI()
        }
    }

    const handleCityPostCode = (event) => {
        setAdresse(prevState => ({ ...prevState, [event.target.id]: event.target.value }))
        console.log(event.target.value)
        Object.entries(adresse).forEach(([key, value]) => {
            console.log(key, value)
        })
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
        Object.entries(data).forEach(([key, value]) => {
            setAdresse(prevState => ({ ...prevState, [key]: value }));
        });
    }

    // Enregistrement des modifications des informations de profi

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("handleSubmit monProfil")
        if (adresse.idUtilisateur.length == 0) {
            adresse['idUtilisateur'] = client.idUtilisateur
        }
        console.log("handleSubmit adresse.adresse :", adresse.adresse)

        if (!client.idAdresse) {
            createNewAddress(adresse)
        } else if (client.idAdresse) {
            updateCurrentAddress(adresse)
        }
        updateUserInfo(client)
    }

    const createNewAddress = async (adresse) => {
        try {
            const response = await axios.post('http://localhost:8081/createAddress', adresse)
            console.log("Création nouvelle adresse : ", response.data)
            adresse.idAdresse = response.data.idAdresse;
            client.idAdresse = response.data.idAdresse;
            console.log("create adress : ", client.idAdresse)
        } catch (error) {
            console.log("Echec de la création de la nouvelle adresse : ", error)
        }
    }

    const updateCurrentAddress = async (adresse) => {
        console.log("updateCurrentAddress : ", adresse)
        try {
            const response = await axios.put('http://localhost:8081/updateAddress', adresse)
            console.log("Mise à jour d'une adresse existante : ", response.data)
        } catch (error) {
            console.log("Erreur lors de la mise à jour de l'adresse : ", error)
        }
    }

    const updateUserInfo = async (client) => {
        try {
            const response = await axios.put('http://localhost:8081/updateClient', client)
            console.log("Mise à jour des informations clients : ", response.data)
        } catch (error) {
            console.log("Erreur lors de la mise à jour des informations client : ", error)
        }
    }

    return (
        <div className='d-flex flex-column align-items-center m-3'>
            <select className="form-select form-control selecteur-profil" aria-label="Default select example"
                onChange={event => handleSelectorChange(event)} defaultValue={profil[0]}>
                <option value="0" >{profil[0]}</option>
                <option value="1">{profil[1]}</option>
                <option value="2">{profil[2]}</option>
                <option value="3">{profil[3]}</option>
                
            </select>
            <div>
                <h6 className='profil-h6'>Mes informations</h6>
                <hr></hr>
                <div className='render-info'>
                    <InputProfilText label='nom' nomLabel='Nom' titre={client.nom} method={handleChange} />
                    <InputProfilText label='prenom' nomLabel='Prénom' titre={client.prenom} method={handleChange} />
                    <InputProfilText label='email' nomLabel='Email' titre={client.email} method={handleChange} />
                    <InputProfilText label='adresse' nomLabel='Adresse' titre={adresse.adresse} method={handleAddressChange} />
                    {adresseAPI && (<div className='container d-flex flex-column resultat-recherche '>
                        <hr></hr>
                        <ul className='liste-resultat-recherche'>
                            {adresseAPI.map((element, index) => {
                                return <li key={index} pos={index} className='liste-resultat-recherche-item'
                                    id='adresse' onClick={() => selectAddressAPI(index)}
                                    value={element.label}>{element.label}</li>
                            })}
                        </ul>
                    </div>)}
                    <div className='d-flex flex-row justify-content-start'>
                        <InputProfilText label='codePostal' nomLabel='Code postal' titre={adresse.codePostal} method={handleCityPostCode} />
                        <InputProfilText label='ville' nomLabel='Ville' titre={adresse.ville} method={handleCityPostCode} />
                    </div>
                    <div className='w-100'>
                        <form>
                            <label htmlFor="password" className='form-label'>Mot de passe</label>
                            <input type="text" id="password" className='form-control profil-border' onChange={handlePasswordChange}
                                value="*********" disabled></input>
                            <a href="#modifierPassword" id="modifierPassword" className="lien-label" onClick={initiatePasswordChange}>Modifier mon mot de passe </a>
                        </form>
                    </div>

                    <div className='container'>
                        <div>
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch" id="newsletter" checked={client.newsletter} onChange={handleClickCheck} />
                                <label className="form-check-label" htmlFor="newsletter">Newsletter</label>
                            </div>
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch" id="specialOffer" checked={client.specialOffer} onChange={handleClickCheck} />
                                <label className="form-check-label" htmlFor="specialOffer">Offres spéciales de nos partenaires</label>
                            </div>
                        </div>
                    </div>

                        <button className='btn boutonValiderProfil' onClick={handleSubmit} >Enregistrer</button>
                        {/* <GenericButton buttonStyle={"boutonValiderProfil"} label={"Enregistrer"} onClick={handleSubmit} /> */}

                </div>
            </div>





        </div >
    )
}
