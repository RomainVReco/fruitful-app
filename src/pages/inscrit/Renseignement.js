import React from "react";
import BoutonSuivant from "../../components/BoutonSuivant";
import BoutonPrecedent from "../../components/BoutonPrecedent";
import EntreeObjectif from "../../components/EntreeObjectif";
import { useState } from "react";

export default function Renseignement() {
  const [selectedId, setSelectedId] = useState(null);
  const handleCheckBoxChange = (id) => {
    let motivation ="";
    sessionStorage.setItem("motivation", id);
        setSelectedId(id);
  }

  return (
    <>
      <div className="fond-inscription">
        <div className="row ">
          <div className="col"></div>
          <div className="col corps-inscription">
            <div>
              <label for="comment">
                <h2>Quelle est votre principale motivation ?</h2>
              </label>
            </div>

            <EntreeObjectif fruit="banane" objectif="Se sentir mieux" idObjectif="mot1" handleCheckBoxChange={handleCheckBoxChange}
        isSelected={selectedId === "mot1"}/>
            <EntreeObjectif fruit="raisin" objectif="Mieux gérer sa vie" idObjectif="mot2" handleCheckBoxChange={handleCheckBoxChange}
        isSelected={selectedId === "mot2"} />
            <EntreeObjectif fruit="pomme" objectif="Me détoxifier" idObjectif="mot3" handleCheckBoxChange={handleCheckBoxChange}
        isSelected={selectedId === "mot3"} />

            <br />
            <div class="row container-fluid m-auto">
              <div class="col">
                <BoutonPrecedent page="3" texte="Répondre plus tard" />
              </div>

              <div class="col">
                <BoutonSuivant page="5" texte="Suivant" />
              </div>
            </div>
          </div>
          <div class="col"></div>
        </div>
      </div>
    </>
  );
}
