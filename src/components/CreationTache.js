import React from 'react'
import WithHeaderExample from './Header'
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

export default function CreationTache() {
  return (
    <>
    <WithHeaderExample/>
    <div className='container'>
        <div className='row'>
            <div className='col'>
                <InputTache nomLabel={'Nommez votre nouvelle habitude !'} functionInput={handleClick}/>
                <SelectLogo/>
            </div>
        </div>
        <div className='row'>
            <div className='col'>
                <InputTache nomLabel={'A partir du : '} functionInput={handleClickCalendar}/>
            </div>
        </div>
        <div className='row'>
            <div className='col'>
                <InputTache nomLabel={'Fréquence'} functionInput={handleClickFrequency}/>
            </div>
        </div>
    </div>
    <div>CreationTache</div>
    </>

  )
}
