import React from 'react'

export default function InputTache({nomLabel, functionInput}) {

  return (
    <div className='container'>
        <form>
            <label for="nomTache" className='form-label'>{nomLabel}</label>
            <input type="text" id="nomTache" className='form-control' onClick={functionInput}></input>
        </form>
    </div>
  )
}
