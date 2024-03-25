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
      <div className="renseignement-container row">
        <div className="col-sm-2">
          <button className="boutonlogo align-middle">
            {imageSrc && (
              <img src={imageSrc} alt="icone evt" style={{ height: "42px" }} />
            )}
          </button>
        </div>
        <div className="col-sm-7 align-middle">{objectif}</div>

        <div className="col-sm-2 align-middle">
          <input type="checkbox" style={{ width: "20px", height: "20px" }} />
        </div>
      </div>
    </div>
  );
}

export default EntreeObjectif;
