import React from 'react'

export default function InputModalText({nomLabel, titre, method, exemple}) {

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-5 col-12'>
        <form>
            <label htmlFor="nomTache" className='form-label'>{nomLabel}</label>
            <input type="text" id="nomTache" className='form-control profil-border' onChange={method}
            placeholder={exemple} value={titre}></input>
        </form>
        </div>
        </div>
    </div>
  )
}
