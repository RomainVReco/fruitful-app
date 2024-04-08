import React from "react";
import BoutonSuivant from "../../components/BoutonSuivant";
import BoutonPrecedent from "../../components/BoutonPrecedent";
import EntreeObjectif from "../../components/EntreeObjectif";
import { useState } from "react";

export default function Renseignement2() {

  const [selectedId, setSelectedId] = useState(null);

  const handleCheckBoxChange = (id) => {
    let sommeil ="";
    sessionStorage.setItem("sommeil", id);
    setSelectedId(id);
  }

  return (
    <>
      <div className="fond-inscription">
        <div className="container corps-inscription d-flex flex-column align-items-center mt-4">
          <div className="d-flex flex-column  align-items-center">
                <h2 className="centre">Se sentir mieux</h2>
                <h3 className="centre mb-4">Chaque nuit je dors :</h3>

            <EntreeObjectif fruit="banane" objectif="Mois de 6 heures" idObjectif="som1" handleCheckBoxChange={handleCheckBoxChange}
        isSelected={selectedId === "som1"} />
            <EntreeObjectif fruit="banane" objectif="Entre 6 et 8 heures" idObjectif="som2" handleCheckBoxChange={handleCheckBoxChange}
        isSelected={selectedId === "som2"} />
            <EntreeObjectif fruit="banane" objectif="Plus de 8 heures" idObjectif="som3" handleCheckBoxChange={handleCheckBoxChange}
        isSelected={selectedId === "som3"} />

            <div class="row container-fluid m-auto mt-4">
              <div class="col">
                <BoutonPrecedent page="4" texte="Répondre plus tard" />
              </div>

              <div class="col">
                <BoutonSuivant page="6" texte="Suivant" />
              </div>
            </div>
          </div>
          <div class="col"></div>
        </div>
      </div>
    </>
  );
}

