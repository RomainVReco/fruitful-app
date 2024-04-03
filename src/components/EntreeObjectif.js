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
function EntreeObjectif({ fruit, objectif, idObjectif, handleCheckBoxChange, isSelected}) {
  // Vérifier si le nom du fruit existe dans l'objet images
  const imageSrc = images[fruit] || null;
  return (
    <div className="container-md d-flex justify-content-center">
      <div className="renseignement-container row d-flex">
        <div className="col-sm-2">
          <button className="boutonlogo align-middle">
            {imageSrc && (
              <img src={imageSrc} alt="icone evt" style={{ height: "42px" }} />
            )}
          </button>
        </div>
        <div className="col-sm-7 align-middle">{objectif}</div>

        <div className="col-sm-2 align-middle">
          <input type="checkbox" style={{ width: "20px", height: "20px" }} id={idObjectif} onClick={() => handleCheckBoxChange(idObjectif)}
            checked={isSelected}/>
        </div>
      </div>
    </div>
  );
}

export default EntreeObjectif;
