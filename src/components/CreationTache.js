import React, { useEffect } from 'react'
import InputGenericText from './InputGenericText'
import ModaleLogo from './ModaleLogo'
import { dataImage } from '../_helpers/data.env'
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

	const headers = {
        'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Headers':'Origin, X-Requested-With, Content-Type, Accept'
    }


	const [checkErrorMessage, setErrorMessage] = useState('')
	const [evenements, setEvenements] = useState('')
	const [icones, setIcones] = useState('')
	const [dataIcon, setDataIcon] = useState(dataImage)
	const [singleIcon, setSingleIcon] = useState(dataImage[0])
	const [isOpen, setIsOpen] = useState(false)

	// attention à bien ajouter la récupération du jeton
	const [tache, setTache] = useState({
		nom: '',
		dateDebut: '',
		frequence: '',
		typeEvenement: '1',
		idClient:7, 
		logo: '0'
	})

	useEffect(() => {
		getTypeEvenements()

	}, [singleIcon])


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
		setSingleIcon(dataImage[logo])
		taches.logo=logo
		setTache(taches)
	}

	const handleChange = (event) => {
        console.log("Handle Change in création tache : ", [event.target.id]+':'+event.target.value)
		setTache(prevTache => ({...prevTache, [event.target.id]:event.target.value}))
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		Object.entries(tache).forEach(([key, value]) => {
			console.log(key+' : '+value+' - '+'typeof : '+
			typeof(value)+ ' - '+' undefined : '+ (value == undefined))
		})
		const checkTacheData = Object.values(tache).some(value => value.length === 0)
		if (checkTacheData) {
			setErrorMessage("Il manque une ou plusieurs informations obligatoires")

		} else {
			console.log("Chouette, ça va partir en base de données")
			createNewTache(tache)
	}
}

	const createNewTache = async (tache) =>{
		try {
			const response = await axios.post('http://localhost:8081/createNewEvent',tache)
			console.log(response.status)

		} catch (error) {
			console.log("Erreur de lors de la création de la nouvelle tâche")
		}
	}


	return (
		<div className='container d-flex flex-column gap-3'>
			<h3 style={{ marginBottom: '25px' }}> Créez-vous une nouvelle habitude</h3>

			<InputGenericText nomLabel={"Nommez votre nouvel évènement :"} label='nom' titre={tache.nom}
				method={handleChange} exemple='Couche-tôt !' />

			<div className='container'>
				<button className='btn btn-light' onClick={() => setIsOpen(true)}>
					<img src={singleIcon} alt="icone evt" style={{ height: '42px', width: '52px' }}></img>
				</button>
				<ModaleLogo open={isOpen} onClose={() => setIsOpen(false)} data={dataIcon} parentCallback={handleCallbackLogo}>
					Coucou
				</ModaleLogo>
			</div>

			<InputModalText nomLabel='A partir du : ' id='dateDebut'
				method={handleChange} exemple={new Date().toLocaleDateString()} onClick={() => console.log('Clic')} />

			<InputModalQuantity nomLabel={'Fréquence : '} id='frequence'  method={handleChange}
				periode='jours' minimum />

			<div className='container'>
				<div className='row'>
					<div className='col-md-5 col-8'>
						<label htmlFor="typeEvenement" className='form-label'>Type d'évènement : </label>
						<select className="form-select form-control profil-border" id='typeEvenement' aria-label="Default select example"
							onChange={handleChange} defaultValue='0'>
							<option value="1">Tâche</option>
							<option value="2">Habitude</option>
							<option value="3">Addiction</option>
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
							<label class="btn btn-outline-primary" htmlFor="todo">Fait / A faire</label>
						</div>
					</div>
				</div>
				{/*<div className='container' style={{ height: '30vh' }}>
					<label htmlFor="quota">Sélectionner votre objectifs:</label>
					<input type="number" id="quota" name="quota" min="0" max="1000" />
				</div> */}
			</div>

			<div className='container d-flex flex-start'>
				<a href="" className='btn' onClick={handleSubmit}>Valider</a>
				<a href="" className='btn boutonAnnuler'>Annuler</a>
				{/* <GenericButton label="Valider" buttonStyle='boutonValider' method={handleSubmit}/> */}
			</div>
			{checkErrorMessage && (<div style={{color:'red'}}>{checkErrorMessage}</div>)}
		</div>
	)
}
