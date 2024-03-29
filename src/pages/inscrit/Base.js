import React from "react";
import GenericButton from '../../components/GenericButton'
import Tache from '../../components/Tache';

const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Bouton cliqué')
  }

export default function Base () {

    return (
    <div className="">
      <Tache nomHabitude="Lire un livre" quota='20' quantiteQuota='pages' heure='10h30' />
      <Tache nomHabitude="Courir" quota='5' quantiteQuota='km' heure='19h30' />
      <Tache nomHabitude="Dire un mot doux à ma femme" quota='' quantiteQuota='' heure='18h50' />
        <>
        <GenericButton label={'Valider'} buttonStyle={'boutonValider'} method={handleSubmit}/>
        <GenericButton label={'Annuler'} buttonStyle={'boutonAnnuler'} method={handleSubmit}/>
        </>
    </div>
    )
}