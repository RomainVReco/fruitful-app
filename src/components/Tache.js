import React from "react";
import rasp from '../assets/logo-rasp.svg'
import TypeTache from './TypeTache'
import { couleurTypeEvenement } from '../_helpers/data.env'


// les props sont placés en attendant la récupération des données 
function Tache ({nomHabitude, frequence, idTypeEvenement, typeEvenement, dateDebut, method}) {

    return (
        <div className="container-md d-flex justify-content-center">
        <div className="tache-container col-md-6 col-12" onClick={method}>
            <div className="tache-logo" >
                <div className="boutonlogo d-flex justify-content-evenly">
                    <img src={rasp} alt="icone evt" style={{height:'42px', width:'52px'}}></img>
                </div>
            </div>
            <div className="tache-titre">
                {nomHabitude}
            </div>
            <div className="tache-quota">
                Tous les {frequence} jours
            </div>
            <div className="check-tache">
                <input type="checkbox" style={{width:'80%', height:'80%'}}/>
            </div>
            <div className="type-tache">
                <TypeTache label={typeEvenement} color={couleurTypeEvenement[idTypeEvenement]}/>
            </div>
            <div className="heure-tache">
                {dateDebut}
            </div>
        </div>
        </div>
    )
}

export default Tache;