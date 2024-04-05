import React from "react";
import BoutonSuivant from "../../components/BoutonSuivant";
import BoutonPrecedent from "../../components/BoutonPrecedent";
import EntreeObjectif from "../../components/EntreeObjectif";
import { useState } from "react";


export default function Renseignement3() {

  const [selectedId, setSelectedId] = useState(null);

  const handleCheckBoxChange = (id) => {
    let sommeil ="";
    sessionStorage.setItem("sport", id);
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
                <h3>Chaque mois je fais du sport :</h3>
              </label>
            </div>

            <EntreeObjectif fruit="banane" objectif="Entre 0 et 2 fois" idObjectif="spo1" handleCheckBoxChange={handleCheckBoxChange}
        isSelected={selectedId === "spo1"} />
            <EntreeObjectif fruit="banane" objectif="Entre 3 et 5 fois" idObjectif="spo2" handleCheckBoxChange={handleCheckBoxChange}
        isSelected={selectedId === "spo2"} />
            <EntreeObjectif fruit="banane" objectif="6 fois et plus" idObjectif="spo3" handleCheckBoxChange={handleCheckBoxChange}
        isSelected={selectedId === "spo3"} />

            <br />
            <div class="row container-fluid m-auto">
              <div class="col">
                <BoutonPrecedent page="5" texte="Répondre plus tard" />
              </div>

              <div class="col">
                <BoutonSuivant page="7" texte="Suivant" />
              </div>
            </div>
          </div>
          <div class="col"></div>
        </div>
      </div>
    </>
  );
}
