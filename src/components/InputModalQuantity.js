import React from 'react'

export default function InputModalQuantity(props) {

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-5 col-12'>
        <label htmlFor="nomTache" className='form-label'>{props.nomLabel}</label>
          <div class="input-group mb-3">
            <span className="input-group-text profil-border">Tous les </span>
            <input htmlFor type="number" id={props.id} className="form-control profil-border" aria-label="nombre de jours" onChange={props.method}
              placeholder={props.exemple} value={props.titre} min={0} max={7} />
            <span className="input-group-text profil-border">{props.periode}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
