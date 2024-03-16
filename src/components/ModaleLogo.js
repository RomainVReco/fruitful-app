import React from 'react'
import ReactDOM from 'react'
import { createPortal } from 'react-dom'


export default function ModaleLogo({open, children, onClose}) {

  if (!open) return null

  return (
    <>
    <div className='overlay-style'/>
    <div className='modale-basique'>
      <button onClick={onClose}>Fermer</button>
        {children}
    </div>
    </>
  )
}
