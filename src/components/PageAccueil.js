import React from "react";

import PurpleRectangle from './PurpleRectangle';

import GenericButton from './GenericButton'
import Tache from './Tache';


export default function PageAccueil () {
    
    return (

    <div className="PageAccueil">
      <PurpleRectangle />
      {/* Autres composants ou contenu ici */}
    </div>
  );
}


//export default function App() {
//export default App;

    /*
    <div className="App">
      <header className="App-header">
      </header>
      <GenericButton label={'Valider'} buttonStyle={'boutonValider'} method={handleSubmit}/>
      <GenericButton label={'Annuler'} buttonStyle={'boutonAnnuler'} method={handleSubmit}/>
      <GenericButton label={'Valider'} buttonStyle={'boutonValider'} method={handleSubmit}/>
      <Tache nomHabitude="Lire un livre" quota='20' quantiteQuota='pages' heure='10h30' />
      <Tache nomHabitude="Lire un livre" quota='20' quantiteQuota='pages' heure='10h45' />
    </div>

    )
}
*/

const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Bouton cliqué')
  }