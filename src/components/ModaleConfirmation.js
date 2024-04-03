import React from 'react'


export default function ModaleLogo({open, method, titre, lignes}) {

  if (!open) return null

  return (
    <>
      <div className='overlay-style' />
      <div className='modale-basique'>
        <h5>{titre} :</h5>
        <div className='container'>
        {lignes.map((element, index) => {
                                return <p key={index}>{element}</p>
                            })}
        </div>

        <div className='d-flex justify-content-center'>
        <button className='btn boutonValiderProfil' onClick={method}>J'ai compris</button>
        </div>
      </div>
    </>
  )
}
