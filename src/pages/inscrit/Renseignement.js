import React from "react";
import BoutonSuivant from "../../components/BoutonSuivant";
import BoutonPrecedent from "../../components/BoutonPrecedent";
import EntreeObjectif from "../../components/EntreeObjectif";

export default function Renseignement() {
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

            <EntreeObjectif fruit="banane" objectif="Se sentir mieux" />
            <EntreeObjectif fruit="raisin" objectif="Mieux gérer sa vie" />
            <EntreeObjectif fruit="pomme" objectif="Me détoxifier" />

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
