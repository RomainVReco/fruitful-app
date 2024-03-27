import React, { useEffect } from 'react'
import InputGenericText from './InputGenericText'
import ModaleLogo from './ModaleLogo'
import rasp from '../assets/logo-rasp.svg'
import { useState } from 'react'
import { ReactDOM } from 'react'
import InputModalText from './InputModalText'
import axios from 'axios'
import InputModalQuantity from './InputModalQuantity'


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

	const [evenements, setEvenements] = useState('')
	const [icones, setIcones] = useState('')

	useEffect(() => {
		getTypeEvenements()
		getAllIcons()

	}, [])

	const [isOpen, setIsOpen] = useState(false)

	const [tache, setTache] = useState({
		nom: '',
		dateDebut: new Date().toLocaleDateString(),
		frequence: '',
		typeEvenement: '',
		logo: 'banane.png'
	})

	const getTypeEvenements = async () => {
		try {
			const response = await axios.get('http://localhost:8081/getAllEvenements')
			console.log("Response status getTypeEvenements : ", response.status)
			Object.entries(response.data).forEach(([key, value]) => {
				console.log('evt value : ', key + ' ' + value['nomTypeEvenement'])
				setEvenements(prevState => ({ ...prevState, [key]: value['nomTypeEvenement'] }))
			})

		} catch (error) {
			console.error('Erreur getTypeEvenements : ', error);
		}
	}

	const getAllIcons = async () => {
		try {
			const response = await axios.get('http://localhost:8081/getAllIcons')
			console.log("Response status getAllIcons : ", response.status)
			Object.entries(response.data).forEach(([key, value]) => {
				console.log('icone value : ', key + ' ' + value['nomIcone'])
				setIcones(prevState => ({ ...prevState, [key]: value['nomIcone'] }))
			})
		} catch (error) {
			console.log('Erreur getAllIcons : ', error)
		}
	}

	const handleCallbackLogo = (logo) => {
		var taches = { ...tache }
		console.log('handleCallbackLogo : ' + logo)
	}

	const handleChange = (event) => {
        console.log("Handle Change in création tache : ", [event.target.id]+':'+event.target.value)
		setTache(prevTache => ({...prevTache, [event.target.id]:event.target.value}))
	}

	const handleSubmit = () => {
		console.log("Submit : " + tache)
		Object.entries(tache).forEach(([key, value]) => {
			console.log(key, value)
		})
	}

	return (
		<div className='container d-flex flex-column gap-3'>
			<h3 style={{ marginBottom: '25px' }}> Créez-vous une nouvelle habitude</h3>

			<InputGenericText nomLabel={"Nommez votre nouvel évènement :"} label='nom' titre={tache.nom}
				method={handleChange} exemple='Couche-tôt !' />

			<div className='container'>
				<button className='btn btn-light' onClick={() => setIsOpen(true)}>
					<img src={tache.logo} alt="icone evt" style={{ height: '42px', width: '52px' }}></img>
				</button>
				<ModaleLogo open={isOpen} onClose={() => setIsOpen(false)} parentCallback={handleCallbackLogo}>
					Coucou
				</ModaleLogo>
			</div>

			<InputModalText nomLabel='A partir du : ' id='date'
				method={handleChange} exemple={new Date().toLocaleDateString()} onClick={() => console.log('Clic')} />

			<InputModalQuantity nomLabel={'Fréquence : '} id='frequence'  method={handleChange}
				periode='jours' />

			<div className='container'>
				<div className='row'>
					<div className='col-md-5 col-8'>
						<label htmlFor="typeEvenement" className='form-label'>Type d'évènement : </label>
						<select className="form-select form-control profil-border" id='typeEvenement' aria-label="Default select example"
							onChange={handleChange} defaultValue="Sélectionner un type d'évènement">
							<option value="0">Tâche</option>
							<option value="1">Habitude</option>
							<option value="2">Addiction</option>
						</select>
					</div>
				</div>
			</div>

			<div className='container' style={{ marginTop: '25px' }}>Nature d'évènement</div>
			<div className='container'>
				<div className='row'>
					<div className='col-md-5 col-8'>
						<div class="btn-group" role="group" aria-label="Basic radio toggle button group">
							<input type="radio" class="btn-check" name="todo" id="todo" autocomplete="off" checked />
							<label class="btn btn-outline-primary" htmlFor="todo">Fait/ A faire</label>
						</div>
					</div>
				</div>
				{/*<div className='container' style={{ height: '30vh' }}>
					<label htmlFor="quota">Sélectionner votre objectifs:</label>
					<input type="number" id="quota" name="quota" min="0" max="1000" />
				</div> */}
			</div>

			<div className='container d-flex flex-start'>
				<a href="#" className='btn' onClick={handleSubmit}>Valider</a>
				<a href="#" className='btn boutonAnnuler'>Annuler</a>
				{/* <GenericButton label="Valider" buttonStyle='boutonValider' method={handleSubmit}/> */}
			</div>
		</div>
	)
}
