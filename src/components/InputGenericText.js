import React from 'react'

export default function InputGenericText(props) {

  const defaultOnChange = () => {
    console.log("Default onChange method called")
  }
  const handleChange = props.method || defaultOnChange

  return (
    <div className='container'>
      <div className='row'>
        <div>
          <label htmlFor={props.label} className='form-label'>{props.nomLabel}</label>
          <input type="text" id={props.label} className='form-control profil-border' onChange={handleChange}
            placeholder={props.exemple} value={props.titre}></input>
        </div>
      </div>
    </div>
  )
}
