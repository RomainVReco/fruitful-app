import React from 'react'
import ReactDOM from 'react'
import { createPortal } from 'react-dom'

const tableauIcones = {"data":[{"image":'Image_1', titre:'Titre_1'}, {"image":'Image_2', titre:'Titre_2'}, {
  "image":'Image_3', titre:'Titre_3'}]}

export default function ModaleLogo({open, onClose, parentCallback}) {

  const handleClickOnIcon = (index) => {
  console.log('index : '+index)
   parentCallback(index)
   onClose()
  }

  if (!open) return null

  return (
    <>
    <div className='overlay-style'/>
    <div className='modale-basique'>
      <h5>Sélectionnez une illustration pour votre nouvelle habitude :</h5>
      <div className='container d-flex justify-content-evenly'>
        {tableauIcones.data.map((icone, index) => (

          <div key={index} className='d-flex flex-column justify-content-center' onClick={() => handleClickOnIcon (index)}>
            <div>{icone.image}</div>
            <div>{icone.titre}</div>
          </div>
        ))}
      </div>
      
      <button className='btn boutonValider' onClick={onClose}>Fermer</button>
    </div>
    </>
  )
}
