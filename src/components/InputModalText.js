import React from 'react'

export default function InputModalText(props) {

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-5 col-12'>
        <form>
            <label htmlFor={props.id} className='form-label'>{props.nomLabel}</label>
            <input type="text" id={props.id} className='form-control profil-border' onChange={props.method}
            placeholder={props.exemple} value={props.titre}></input>
        </form>
        </div>
        </div>
    </div>
  )
}
