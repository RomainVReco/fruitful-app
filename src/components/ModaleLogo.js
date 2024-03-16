import React from 'react'
import ReactDOM from 'react'
import { createPortal } from 'react-dom'

const tableauIcones = {"data":[{"image":'titre', titre:'image'}, ]}

export default function ModaleLogo({open, children, onClose}) {


  if (!open) return null

  return (
    <>
    <div className='overlay-style'/>
    <div className='modale-basique'>
      <h5>Sélectionnez une illustration pour votre nouvelle habitude :</h5>
      <div className='container d-flex justify-content-evenly'>
        {tableauIcones.map((icone, index) => (
          <div key={index} className='d-flex flex-column justify-content-center' onClick={handleClickOnIcon}>
            <div>{icone.image}</div>
            <div>{icone.titre}</div>
          </div>

        ))}


        <div>
          <h5 className='card-subtitle'>Avion</h5>
        </div>
      </div>
      

      <button onClick={onClose}>Fermer</button>

        {children}
    </div>
    </>
  )
}
