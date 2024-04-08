import React from "react";
import BoutonSuivant from "../../components/BoutonSuivant";
import BoutonPrecedent from "../../components/BoutonPrecedent";
import EntreeObjectif from "../../components/EntreeObjectif";
import { useState } from "react";

export default function Renseignement4() {

  const [selectedId, setSelectedId] = useState(null);

  const handleCheckBoxChange = (id) => {
    let sommeil = "";
    sessionStorage.setItem("meditation", id);
    setSelectedId(id);
  }
  sessionStorage.setItem("enregistrementHabitudesAuto", false);

  return (
    <>
      <div className="fond-inscription">
        <div className="container corps-inscription d-flex flex-column align-items-center mt-4">
          <div className="d-flex flex-column align-items-center">
            <h2 className="centre">Se sentir mieux</h2>
                <h3 className="mb-4">Chaque mois je médite :</h3>
 
            <EntreeObjectif fruit="banane" objectif="Entre 0 et 2 fois" idObjectif="med1" handleCheckBoxChange={handleCheckBoxChange}
              isSelected={selectedId === "med1"} />
            <EntreeObjectif fruit="banane" objectif="Entre 3 et 5 fois" idObjectif="med2" handleCheckBoxChange={handleCheckBoxChange}
              isSelected={selectedId === "med2"} />
            <EntreeObjectif fruit="banane" objectif="6 fois et plus" idObjectif="med3" handleCheckBoxChange={handleCheckBoxChange}
              isSelected={selectedId === "med3"} />

            <div class="row container-fluid m-auto mt-4">
              <div class="col">
                <BoutonPrecedent page="6" texte="Répondre plus tard" />
              </div>

              <div class="col">
                <BoutonSuivant page="8" texte="Suivant" />
              </div>
            </div>
          </div>
          <div class="col"></div>
        </div>
      </div>
    </>
  );
}
