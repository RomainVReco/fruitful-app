import React from "react";



function Tache () {

    return (
        <div className="tache-container">
            <div className="tache-logo">
                Logo
            </div>
            <div className="tache-titre">
                Titre
            </div>
            <div className="tache-quota">
                Quota
            </div>
            <div className="check-tache">
                <input type="checkbox"/>
            </div>
            <div className="type-tache">
                Type
            </div>
            <div className="heure-tache">
                Heure
            </div>


        </div>
    )
}

export default Tache;