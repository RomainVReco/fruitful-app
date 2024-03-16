import React from 'react'
import Header from './Header'
import InputTache from './InputTache'
import SelectLogo from './SelectLogo'


const handleClick = () => {
    console.log('handleClick création tache')
}

const handleClickCalendar = () => {
    console.log('handleClickCalendar création tache')
}

const handleClickFrequency = () => {
    console.log('handleClickFrequency création tache')
}

const handleClickToDo = () => {
    console.log('handleClickToDo choix fait/faire')
}

const handleClickQuota = () => {
    console.log('handleClickQuota')
}

export default function CreationTache() {
  return (
    <>
    <Header/>
    <h3 className='container' style={{marginBottom:'25px'}}> Créez-vous une nouvelle habitude</h3>
    <InputTache nomLabel={'Nommez là !'} 
        method={handleClick} exemple='Couche-tôt !'/>
    <SelectLogo/>
    <InputTache nomLabel={'A partir du : '} 
        method={handleClickCalendar} exemple={new Date().toLocaleDateString()}/>
    <InputTache nomLabel={'Fréquence : '} method={handleClickFrequency} exemple='Quotidiennement'/>

    <div className='container' style={{marginTop:'25px'}}> Type : </div>
    <div className='container d-flex justify-content-evenly'>
                <button className='btn btn-outline-primary choix-bouton-type' data-bs-toggle="button" onClick={handleClickToDo}>Fait/ A faire</button>
                <button className='btn btn-outline-primary choix-bouton-type' data-bs-toggle="button" onClick={handleClickQuota}>Quota à atteindre</button>
    </div>
    </>
  )
}
