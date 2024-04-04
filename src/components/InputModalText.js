import React from 'react'

export default function InputModalText(props) {

  return (
    <div className='container'>
      <div className='row'>
        <div className=''>
          <label htmlFor={props.id} className='form-label'>{props.nomLabel}</label>
          <input type="text" id={props.id} className='form-control profil-border' onChange={props.method}
            placeholder={props.exemple} value={props.titre}></input>
        </div>
      </div>
    </div>
  )
}
