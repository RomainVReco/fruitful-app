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

  return (
    <>
      <div className="fond-inscription content flex-grow-1 min-vh-100">
        <div className="row ">
          <div className="col"></div>
          <div className="col corps-inscription">
            <div>
              <label for="comment">
                <h2>Se sentir mieux</h2>
                <h3>Chaque mois je médite :</h3>
              </label>
            </div>

            <EntreeObjectif fruit="banane" objectif="Entre 0 et 2 fois" idObjectif="med1" handleCheckBoxChange={handleCheckBoxChange}
              isSelected={selectedId === "med1"} />
            <EntreeObjectif fruit="banane" objectif="Entre 3 et 5 fois" idObjectif="med2" handleCheckBoxChange={handleCheckBoxChange}
              isSelected={selectedId === "med2"} />
            <EntreeObjectif fruit="banane" objectif="6 fois et plus" idObjectif="med3" handleCheckBoxChange={handleCheckBoxChange}
              isSelected={selectedId === "med3"} />

            <br />
            <div class="row container-fluid m-auto">
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
