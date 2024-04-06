import React from 'react'
import { propTypes } from 'react-bootstrap/esm/Image';

export default function InputModalDate(props) {


return (
    <div className='container'>
      <div className='row'>
        <div className=''>
          <label htmlFor={props.id} className='form-label'>{props.nomLabel}</label>
          <input type='date' id={props.id} className='form-control profil-border' onChange={props.method}
            placeholder={props.exemple} min={props.minimum} required></input>
        </div>
      </div>
    </div>
  )
}
