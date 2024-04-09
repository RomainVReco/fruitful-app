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
      <div className="fond-inscription">
        <div className="container corps-inscription d-flex flex-column align-items-center mt-4">
          <div className="d-flex flex-column align-items-center">
            <h2 className="centre">Se sentir mieux</h2>
                <h3 className="mb-4">Chaque mois je fais du sport :</h3>

            <EntreeObjectif fruit="banane" objectif="Entre 0 et 2 fois" idObjectif="spo1" handleCheckBoxChange={handleCheckBoxChange}
        isSelected={selectedId === "spo1"} />
            <EntreeObjectif fruit="banane" objectif="Entre 3 et 5 fois" idObjectif="spo2" handleCheckBoxChange={handleCheckBoxChange}
        isSelected={selectedId === "spo2"} />
            <EntreeObjectif fruit="banane" objectif="6 fois et plus" idObjectif="spo3" handleCheckBoxChange={handleCheckBoxChange}
        isSelected={selectedId === "spo3"} />

            <div class="row container-fluid m-auto mt-4">
              <div class="col">
                <BoutonPrecedent page="8" texte="Répondre plus tard" />
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
