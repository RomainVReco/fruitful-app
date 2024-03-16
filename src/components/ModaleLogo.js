import React from 'react'
import ReactDOM from 'react'
import { createPortal } from 'react-dom'

const tableauIcones = {"data":[{image:'Ceci est une image', titre:'Ceci est un titre'}, 
{image:'Ceci est une image_2', titre:'Ceci est un titre_2'}, {image:'Ceci est une image_3', titre:'Ceci est un titre_3'}]}

const handleClickOnIcon = (event) => {
  console.log("event.target : "+event.data)
  }


export default function ModaleLogo({open, onClose}) {


  if (!open) return null

  return (
    <>
    <div className='overlay-style'/>
    <div className='modale-basique'>
      <h5>Sélectionnez une illustration pour votre nouvelle habitude :</h5>
      <div className='container d-flex justify-content-evenly'>
        {tableauIcones.data.map((icone, index) => (
          <div key={index} className='d-flex flex-column justify-content-center' onClick={handleClickOnIcon}>
            <div>{icone.image}</div>
            <div>{icone.titre}</div>
          </div>
        ))}
      </div>
      

      <button onClick={onClose}>Fermer</button>
    </div>
    </>
  )
}
