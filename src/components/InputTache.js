import React from 'react'

export default function InputTache({nomLabel, method, exemple}) {

  return (
    <div className='container'>
        <div className='row'>
            <div className='col'>
        <form>
            <label for="nomTache" className='form-label'>{nomLabel}</label>
            <input type="text" id="nomTache" className='form-control' onClick={method}
            placeholder={exemple}></input>
        </form>
        </div>
        </div>
    </div>
  )
}
