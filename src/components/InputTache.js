import React from 'react'

export default function InputTache({nomLabel, method, exemple}) {

  const getTacheNom = (event) => {
    console("log")
  }

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-5 col-12'>
        <form>
            <label htmlFor="nomTache" className='form-label'>{nomLabel}</label>
            <input type="text" id="nomTache" className='form-control' onClick={method}
            placeholder={exemple}></input>
        </form>
        </div>
        </div>
    </div>
  )
}
