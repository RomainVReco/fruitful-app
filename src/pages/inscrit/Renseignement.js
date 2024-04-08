import React from "react";
import BoutonSuivant from "../../components/BoutonSuivant";
import BoutonPrecedent from "../../components/BoutonPrecedent";
import EntreeObjectif from "../../components/EntreeObjectif";
import { useState } from "react";

export default function Renseignement() {
  const [selectedId, setSelectedId] = useState(null);
  const handleCheckBoxChange = (id) => {
    let motivation = "";
    sessionStorage.setItem("motivation", id);
    setSelectedId(id);
  }

  return (
    <>
      <div className="fond-inscription">
        <div className="container corps-inscription d-flex flex-column align-items-center mt-4">
          <div className="d-flex flex-column align-items-center">
            <h2 className="centre mb-4">Quelle est votre principale motivation ?</h2>

            <EntreeObjectif fruit="banane" objectif="Se sentir mieux" idObjectif="mot1" handleCheckBoxChange={handleCheckBoxChange}
              isSelected={selectedId === "mot1"} />
            <EntreeObjectif fruit="raisin" objectif="Mieux gérer sa vie" idObjectif="mot2" handleCheckBoxChange={handleCheckBoxChange}
              isSelected={selectedId === "mot2"} />
            <EntreeObjectif fruit="pomme" objectif="Me détoxifier" idObjectif="mot3" handleCheckBoxChange={handleCheckBoxChange}
              isSelected={selectedId === "mot3"} />

            <div class="row container-fluid m-auto mt-4">
              <div class="col"> 
                <BoutonPrecedent page="9" texte="Répondre plus tard" />
              </div>

              <div class="col">
                <BoutonSuivant page="5" texte="Suivant" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
