import React from 'react'

export default function InputProfilText(props) {

  const defaultOnChange = () => {
    console.log("Default onChange method called")
  }
  const handleChange = props.method || defaultOnChange
  const style = props.style || ''
  const contenuLabel = props.nomLabel || ''

  return (
    <div className='w-100 m-1'>
      <label htmlFor={props.label} className='form-label'>{contenuLabel}</label>
      <input type="text" id={props.label} className='form-control profil-border'
        onChange={handleChange} placeholder={props.exemple} value={props.titre}></input>
    </div>
  )

}
