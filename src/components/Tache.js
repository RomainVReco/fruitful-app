import React from "react";
import rasp from '../assets/logo-rasp.svg'
import TypeTache from './TypeTache'
import Modale from "./Modale";


// les props sont placés en attendant la récupération des données 
function Tache ({nomHabitude, quota, quantiteQuota, typeEvenement, heure}) {

    return (
        <div className="container-md d-flex justify-content-center">
        <div className="tache-container">
            <div className="tache-logo">
                <button className="boutonlogo">
                    <img src={rasp} alt="icone evt" style={{height:'42px', width:'52px'}}></img>
                </button>
            </div>
            <div className="tache-titre">
                {nomHabitude}
            </div>
            <div className="tache-quota">
                {quota} {quantiteQuota}
            </div>
            <div className="check-tache">
                <input type="checkbox" style={{width:'80%', height:'80%'}}/>
            </div>
            <div className="type-tache">
                <TypeTache label='Habitude' color='rgba(44, 203, 79, 1)'/>
            </div>
            <div className="heure-tache">
                {heure}
            </div>
        </div>
        </div>
    )
}

export default Tache;