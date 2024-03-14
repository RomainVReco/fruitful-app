import React from "react";
import rasp from '../assets/logo-rasp.svg'
import TypeTache from './TypeTache'


// les props sont placés en attendant la récupération des données 
function Tache ({nomHabitude, quota, quantiteQuota, typeEvenement, heure}) {

    return (
        <div className="tache-container">
            <div className="tache-logo">
                <img src={rasp} alt="icone evt" style={{height:'42px', width:'52px'}}></img>
            </div>
            <div className="tache-titre">
                {nomHabitude}
            </div>
            <div className="tache-quota">
                {quota} {quantiteQuota}
            </div>
            <div className="check-tache">
                <input type="checkbox"/>
            </div>
            <div className="type-tache">
                <TypeTache label='Habitude' color='rgba(44, 203, 79, 1)'/>
            </div>
            <div className="heure-tache">
                {heure}
            </div>


        </div>
    )
}

export default Tache;