import React from 'react'
import Header from './Header'
import InputTache from './InputTache'
import ModaleLogo from './ModaleLogo'
import rasp from '../assets/logo-rasp.svg'
import { useState } from 'react'
import { ReactDOM } from 'react'


let isQuotaSelected = false

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

const handleSubmit = () => {
	console.log('handleSubmit Creation tache')
}

export default function CreationTache() {

	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
			<Header />
			<div className='container'>
			<h3 style={{ marginBottom: '25px' }}> Créez-vous une nouvelle habitude</h3>
			<InputTache nomLabel={'Nommez là !'}
				method={handleClick} exemple='Couche-tôt !' />
				<div>
			<button className='btn btn-light boutonLogo' onClick={() => setIsOpen(true)}>
				<img src={rasp} alt="icone evt" style={{height:'42px', width:'52px'}}></img>
			</button>
			<ModaleLogo open={isOpen} onClose={() => setIsOpen(false)}> 
				Coucou
			</ModaleLogo>
			</div>
			<InputTache nomLabel={'A partir du : '}
				method={handleClickCalendar} exemple={new Date().toLocaleDateString()} />
			<InputTache nomLabel={'Fréquence : '} method={handleClickFrequency} exemple='Quotidiennement' />

			<div className='container' style={{ marginTop: '25px' }}> Type : </div>
			<div className='container d-flex justify-content-evenly'>
				<button className='btn btn-outline-primary choix-bouton-type' data-bs-toggle="button" onClick={handleClickToDo}>Fait/ A faire</button>
				<button className='btn btn-outline-primary choix-bouton-type' data-bs-toggle="button" onClick={handleClickQuota}>Quota à atteindre</button>
			</div>

			<div className='container' style={{height:'30vh'}}>

			</div>
			<div className='container d-flex justify-content-evenly'>

						<a href="#" className='btn boutonValider' onClick={handleSubmit}>Valider</a>

						<a href="#" className='btn boutonAnnuler'>Annuler</a>

					{/* <GenericButton label="Valider" buttonStyle='boutonValider' method={handleSubmit}/> */}
			</div>
			</div>
		</>
	)
}
