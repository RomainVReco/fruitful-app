import React from 'react'
import ReactDOM from 'react'
import { createPortal } from 'react-dom'
import { dataImage } from '../_helpers/data.env'



export default function ModaleLogo({ open, onClose, parentCallback, data }) {

  const tableauIcones = data || {
    "data": [{ "image": 'Image_1', titre: 'Titre_1' }, { "image": 'Image_2', titre: 'Titre_2' }, {
      "image": 'Image_3', titre: 'Titre_3'
    }]
  }

  const handleClickOnIcon = (index) => {
    console.log('index : ' + index)
    parentCallback(index)
    onClose()
  }

  if (!open) return null

  return (
    <>
      <div className='overlay-style' />
      <div className='modale-basique'>
        <h5>Sélectionnez une illustration pour votre nouvelle habitude :</h5>
        <div className='container d-flex justify-content-evenly'>
          {tableauIcones.map((icon, index) => (
            <div key={index} className='d-flex flex-column justify-content-center' onClick={() => handleClickOnIcon(index)}>
              <img src={icon} alt={`Icon ${index}`} />
            </div>
          ))}
        </div>


        <button className='btn boutonValiderProfil' onClick={onClose}>Fermer</button>
      </div>
    </>
  )
}
