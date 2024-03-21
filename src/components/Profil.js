import React, { useEffect, useState } from 'react'
import chevron from '../assets/chevron-down.svg'
import InputProfilText from './InputProfilText'
import GenericButton from './GenericButton'
import axios from 'axios'

export default function Profil() {

    const profil = {
        0: 'Mon profil',
        1: 'Mon bilan',
        2: 'Mes tâches',
        3: 'Abonnement'
    }

    const client = {
        nom: 'AYMARRE',
        prenom: 'Jean',
        email: 'adresse@mail.com',
        adresse: '5 rue Armand Moisand, 75015 Paris',
        password: '*********',
        newsletter: true,
        specialOffers: false
    }


    const [isActif, setSelecteurActif] = useState(false)
    const [subNewsletter, setNewsletter] = useState(client.newsletter)
    const [subSpecialOffer, setSpecialOffer] = useState(client.specialOffers)

    useEffect(() => {
        console.log("useEffect profil")
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/utilisateurs.php')
                console.log(response.data)
            } catch (error) {
                console.log("Erreur : "+error)
            }
        }
        fetchData()
    }, [])


    const handleSelectorChange = () => {
        setSelecteurActif(!isActif)
        console.log("isActif :" + !isActif)
    }
    const checkMail = () => {
        console.log("checkMail")
    }
    const getAddressFromAPI = () => {
        console.log("getAddressFromAPI")
    }
    const handlePasswordChange = (event) => {
        console.log("handlePasswordChange :" + event.target.value)
    }
    const initiatePasswordChange = () => {
        console.log("initiatePasswordChange")
    }

    const handleClickNewsletter = (event) => {
        setNewsletter(!subNewsletter)
        console.log("newsletter checked : "+event.target.checked)
    }

    const handleClickSpecialOffer = (event) => {
        setSpecialOffer(!subSpecialOffer)
        console.log("special offer checked : "+event.target.checked)

    }


    return (
        <div className='container-md wrapper-profil'>
            <select className="form-select selecteur-profil" aria-label="Default select example"
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
                    <InputProfilText label='nom' nomLabel='Nom' titre={client.nom} />
                    <InputProfilText label='prenom' nomLabel='Prénom' titre={client.prenom} />
                    <InputProfilText label='email' nomLabel='Email' titre={client.email} method={checkMail} />
                    <InputProfilText label='adresse' nomLabel='Adresse' titre={client.adresse} method={getAddressFromAPI} />
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-5 col-12'>
                                <form>
                                    <label htmlFor="password" className='form-label'>Mot de passe</label>
                                    <input type="text" id="password" className='form-control profil-border' onChange={handlePasswordChange}
                                        value={client.password} disabled></input>
                                    <a href="#modifierPassword" id="modifierPassword" className="lien-label" onClick={initiatePasswordChange}>Modifier mon mot de passe </a>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchNewsletter" checked={subNewsletter} onChange={handleClickNewsletter}/>
                                <label className="form-check-label" htmlFor="flexSwitchNewsletter">Newsletter</label>
                        </div>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchSpecialOffer" checked={subSpecialOffer} onChange={handleClickSpecialOffer}/>
                                <label className="form-check-label" htmlFor="flexSwitchSpecialOffer">Offres spéciales de nos partenaires</label>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <GenericButton buttonStyle={"boutonValiderProfil"} label={"Enregistrer"} />
                    </div>

                </div>
            </div>





        </div >



    )
}

