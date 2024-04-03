import React from "react";
import TypeTache from './TypeTache'
import { couleurTypeEvenement } from '../_helpers/data.env'


// les props sont placés en attendant la récupération des données 
function Tache ({nomHabitude, frequence, idTypeEvenement, typeEvenement, dateDebut, method, image}) {

    return (
        <div className="card m-3" onClick={method}>
            <div className="text-center mt-2">
                <img src={image} alt="icone evt" style={{ height: '42px', width: '52px' }}></img>
            </div>
            <div class="card-body">
                <h3 className="text-center">{nomHabitude}</h3>
                <TypeTache label={typeEvenement} color={couleurTypeEvenement[idTypeEvenement]} />
                <p className="d-flex justify-content-center align-items-center">
                    <i class="fa-solid fa-calendar mx-3"></i>
                    <span className="ml-1">Tous les {frequence} jours</span>
                </p>
                <p className="d-flex justify-content-center align-items-center fw-light">
                    <i class="fa-solid fa-hourglass-start mx-3"></i>
                    <span>{dateDebut}</span>
                </p>
            </div>
        </div>
    )
}

export default Tache;