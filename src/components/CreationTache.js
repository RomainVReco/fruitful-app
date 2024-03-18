import React from 'react'
import Header from './Header'
import InputTache from './InputGenericText'
import InputGenericText from './InputGenericText'
import ModaleLogo from './ModaleLogo'
import rasp from '../assets/logo-rasp.svg'
import { useState } from 'react'
import { ReactDOM } from 'react'
import InputModalText from './InputModalText'


let isQuotaSelected = false



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

	const [isOpen, setIsOpen] = useState(false)

	const [tache, setTache] = useState({
		nom:'',
		dateDebut:new Date().toLocaleDateString(),
		frequence:'',
		type:'',
		logo:rasp
	})

	const handleCallbackLogo = (logo) => {
		var taches = {...tache}
		console.log('handleCallbackLogo : '+logo)
	}

	const handleTitleChange = (event) => {
		var taches = {...tache}
		taches.nom = event.target.value
		console.log('handleClick création tache')
		console.log(taches)
		setTache(taches)
		console.log(taches)
	}

	const handleDateDebutChange = (event) => {
		var taches = {...tache}
		taches.dateDebut = event.target.value
		console.log(taches)
		setTache(taches)
		console.log(taches)
	}

	const handleFrequenceChange = (event) => {
		var taches = {...tache}
		taches.frequence = event.target.value
		console.log(taches)
		setTache(taches)
		console.log(taches)
	}

	const handleSubmit = () => {
		console.log("Submit : "+tache)
		Object.entries(tache).forEach(([key, value])=> {
			console.log(key, value)
		})
		
	}


	return (
		<>
			<Header />
			<div className='container'> 
				<h3 style={{ marginBottom: '25px' }}> Créez-vous une nouvelle habitude</h3>

				<InputGenericText nomLabel={'Nommez là !'} titre={tache.nom}
					method={event => handleTitleChange(event)} exemple='Couche-tôt !' />

				<div className='container'>
					<button className='btn btn-light' onClick={() => setIsOpen(true)}>
						<img src={tache.logo} alt="icone evt" style={{ height: '42px', width: '52px' }}></img>
					</button>
					<ModaleLogo open={isOpen} onClose={() => setIsOpen(false)} parentCallback={handleCallbackLogo}>
						Coucou
					</ModaleLogo>
				</div>

				<InputModalText nomLabel={'A partir du : '}
					method={handleDateDebutChange} exemple={new Date().toLocaleDateString()} onClick={() => console.log('Clic')}/>

				<InputModalText nomLabel={'Fréquence : '} method={handleFrequenceChange} exemple='Quotidiennement' />

				<div className='container' style={{ marginTop: '25px' }}> Type : </div>
				<div className='container d-flex justify-content-evenly'>
					<button className='btn btn-outline-primary choix-bouton-type' data-bs-toggle="button" onClick={handleClickToDo}>Fait/ A faire</button>
					<button className='btn btn-outline-primary choix-bouton-type' data-bs-toggle="button" onClick={handleClickQuota}>Quota à atteindre</button>
				</div>

				<div className='container' style={{ height: '30vh' }}>

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
