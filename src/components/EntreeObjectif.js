import React from "react";
import banane from "../assets/renseignement/banane.png";
import raisin from "../assets/renseignement/raisin.png";
import pomme from "../assets/renseignement/pomme.png";

const images = {
  banane: banane,
  raisin: raisin,
  pomme: pomme,
};
// les props sont placés en attendant la récupération des données
function EntreeObjectif({ fruit, objectif, idObjectif, handleCheckBoxChange, isSelected }) {
  // Vérifier si le nom du fruit existe dans l'objet images
  const imageSrc = images[fruit] || null;
  return (

    <div className="mt-4 mb-4">
      <div className="renseignement-container align-items-center">
        <div className="col-sm-2">
          <button className="boutonlogo">
            {imageSrc && (
              <img src={imageSrc} alt="icone evt" style={{ height: "42px" }} />
            )}
          </button>
        </div>
        <div className="col-sm-8">{objectif}</div>
        <div className="col-sm-2">
          <input type="checkbox" className="case-a-cocher" id={idObjectif} onClick={() => handleCheckBoxChange(idObjectif)}
            checked={isSelected} />
        </div>
      </div>
    </div>
  );
}

export default EntreeObjectif;
