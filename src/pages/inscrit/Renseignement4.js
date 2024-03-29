import React from "react";
import BoutonSuivant from "../../components/BoutonSuivant";
import BoutonPrecedent from "../../components/BoutonPrecedent";
import EntreeObjectif from "../../components/EntreeObjectif";

export default function Renseignement3() {
  return (
    <>
      <div className="fond-inscription">
        <div className="row ">
          <div className="col"></div>
          <div className="col corps-inscription">
            <div>
              <label for="comment">
                <h2>Se sentir mieux</h2>
                <h3>Chaque mois je médite :</h3>
              </label>
            </div>

            <EntreeObjectif fruit="banane" objectif="Entre 0 et 2 fois" />
            <EntreeObjectif fruit="banane" objectif="Entre 3 et 5 fois" />
            <EntreeObjectif fruit="banane" objectif="6 fois et plus" />

            <br />
            <div class="row container-fluid m-auto">
              <div class="col">
                <BoutonPrecedent page="6" texte="Répondre plus tard" />
              </div>

              <div class="col">
                <BoutonSuivant page="4" texte="Suivant" />
              </div>
            </div>
          </div>
          <div class="col"></div>
        </div>
      </div>
    </>
  );
}
