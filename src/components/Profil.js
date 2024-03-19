import React, { useState } from 'react'
import chevron from '../assets/chevron-down.svg'

export default function Profil() {

    const [isActif, setSelecteurActif] = useState(false)

    const handleSelectorChange = () => {
        setSelecteurActif(!isActif)
        console.log("isActif :"+!isActif)
    }



    return (
        <div className='container'>
            <div className='selecteur-bouton' onClick={handleSelectorChange}>Mon profil
                {/*<span className='diviseur'></span>*/}
            </div>
            <div className='chevron'><img src={chevron}></img></div>
            {isActif && (
                <div className='selecteur-contenu'>
                    <div className='selecteur-item'>Mon bilan</div>
                    <div className='selecteur-item'>Mes tâches</div>
                    <div className='selecteur-item'>Abonnement</div>
                </div>
            )}



            {/*<select class="form-select selecteur-profil" aria-label="Default select example"
                onChange={event => handleSelectorChange(event)}>
                <option selected>Mon profil</option>
                <option value="101">Mon bilan</option>
                <option value="201">Mes tâches</option>
                <option value="301">Abonnement</option>
    </select>*/}
        </div>


    )
}
