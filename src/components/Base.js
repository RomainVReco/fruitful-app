import React from "react";
import GenericButton from './GenericButton'
import Tache from './Tache';

const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Bouton cliqué')
  }

export default function Base () {

    return (
    <div className="App">
      <header className="App-header">
      </header>
      <GenericButton label={'Valider'} buttonStyle={'boutonValider'} method={handleSubmit}/>
      <GenericButton label={'Annuler'} buttonStyle={'boutonAnnuler'} method={handleSubmit}/>
      <Tache nomHabitude="Lire un livre" quota='20' quantiteQuota='pages' heure='10h30' />
    </div>
    )
}