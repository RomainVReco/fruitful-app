import React from "react";
import banane from "../assets/banane.png";
import raisin from "../assets/raisin.png";
import pomme from "../assets/pomme.png";

const images = {
  banane: banane,
  raisin: raisin,
  pomme: pomme,
};
// les props sont placés en attendant la récupération des données
function EntreeObjectif({ fruit, objectif }) {
  // Vérifier si le nom du fruit existe dans l'objet images
  const imageSrc = images[fruit] || null;
  return (
    <div className="container-md d-flex justify-content-center">
      <div className="renseignement-container">
        <div className="tache-logo">
          <button className="boutonlogo">
            {imageSrc && (
              <img
                src={imageSrc}
                alt="icone evt"
                style={{ height: "42px" }}
              />
            )}{" "}
          </button>
        </div>
        <div className="tache-titre">{objectif}</div>

        <div className="check-tache">
          <input type="checkbox" style={{ width: "80%", height: "80%" }} />
        </div>
      </div>
    </div>
  );
}

export default EntreeObjectif;
