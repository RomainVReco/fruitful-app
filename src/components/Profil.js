import React, { useState } from 'react'
import chevron from '../assets/chevron-down.svg'
import InputProfilText from './InputProfilText'

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
        console.log("handlePasswordChange :"+event.target.value)
    }


    return (
        <div className='container-md wrapper-profil'>
            <select class="form-select selecteur-profil" aria-label="Default select example"
                onChange={event => handleSelectorChange(event)}>
                <option value="0" selected>{profil[0]}</option>
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
                                    <a id="modifierPassword" className="lien-label">We'll never share your email with anyone else.</a>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>





        </div >



    )
}

