import React from 'react'

export default function InputProfilText(props) {

  const defaultOnChange = () => {
    console.log("Default onChange method called")
  }
  const handleChange = props.method || defaultOnChange

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-5 col-12'>
          <form>
            <label htmlFor={props.label} className='form-label'>{props.nomLabel}</label>
            <input type="text" id={props.label} className='form-control profil-border' onChange={handleChange}
              placeholder={props.exemple} value={props.titre}></input>
          </form>
        </div>
      </div>
    </div>
  )

}
