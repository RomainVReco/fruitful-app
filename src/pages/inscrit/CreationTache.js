import React, { useEffect } from 'react'
import InputGenericText from '../../components/InputGenericText'
import ModaleLogo from '../../components/ModaleLogo'
import { dataImage } from '../../_helpers/data.env'
import { useState } from 'react'
import InputModalText from '../../components/InputModalText'
import axios from 'axios'
import InputModalQuantity from '../../components/InputModalQuantity'
import { Link, useNavigate } from 'react-router-dom'
import { gestionConnexion } from '../../_helpers/gestion.connexion'


export default function CreationTache() {

	let navigate = useNavigate()
	const [checkErrorMessage, setErrorMessage] = useState('')
	const [evenements, setEvenements] = useState('')
	const [icones, setIcones] = useState('')
	const [dataIcon, setDataIcon] = useState(dataImage)
	const [isOpen, setIsOpen] = useState(false)
	const [checkIntegrity, setCheckIntegrity] = useState(false)
	const [isDisabled, setDisabled] = useState('')

	// attention à bien ajouter la récupération du jeton
	const [tache, setTache] = useState({
		nom: '',
		dateDebut: '',
		frequence: '1',
		typeEvenement: '0',
		idUtilisateur: '',
		logo: '8',
	})

	useEffect(() => {
		getEventTypes();
		tache['idUtilisateur'] = sessionStorage.getItem('jeton');
		fetchCapReachedStatus();
	}, [isDisabled]);

	const fetchCapReachedStatus = async () => {
		try {
			const isCapReached = await gestionConnexion.checkCapIsReached(tache.idUtilisateur);
			setDisabled(isCapReached);
		} catch (error) {
			console.error("Erreur useEffect:", error);
		}
	};

	const getEventTypes = async () => {
		try {
			const response = await axios.get('http://localhost:8081/getAllEventTypes')
			console.log("Response status getEventTypes : ", response.status)
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
		taches.logo = logo
		setTache(taches)
	}

	const handleChange = (event) => {
		setCheckIntegrity(false)
		console.log("Handle Change in création tache : ", [event.target.id] + ':' + event.target.value)
		setTache(prevTache => ({ ...prevTache, [event.target.id]: event.target.value }))
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		Object.entries(tache).forEach(([key, value]) => {
			console.log(key + ' : ' + value + ' - ' + 'typeof : ' +
				typeof (value) + ' - ' + ' undefined : ' + (value == undefined))
		})
		const checkTacheData = Object.values(tache).some(value => value.length === 0)
		if (checkTacheData) {
			setCheckIntegrity(true)
			setErrorMessage("Il manque une ou plusieurs informations obligatoires")

		} else {
			console.log("Chouette, ça va partir en base de données")
			createNewTache(tache)
		}
	}

	const createNewTache = async (tache) => {
		try {
			const response = await axios.post('http://localhost:8081/createNewEvent', tache)
			console.log(response.status)
		} catch (error) {
			console.log("Erreur de lors de la création de la nouvelle tâche")
			console.log(error)
			console.log('##################################################')
		}
	}

	const handleClickCancel = (event) => {
		event.preventDefault()
		navigate('../listeTaches#')
	}


	return (
		<div className='container d-flex flex-column align-items-center gap-3 mt-5'>
			<h3 className='titre-h3-modifier-creer-tache'> Créez un nouvel évènement</h3>
			<div className='d-flex flex-column align-items-start gap-2'>
				<InputGenericText nomLabel={"Nommez votre nouvel évènement :"} label='nom' titre={tache.nom}
					method={handleChange} exemple='Couche-tôt !' />
				<button className='btn btn-light' onClick={() => setIsOpen(true)}>
					<img src={dataIcon[tache.logo]} alt="icone evt" style={{ height: '42px', width: '52px' }}></img>
				</button>
				<ModaleLogo open={isOpen} onClose={() => setIsOpen(false)} data={dataIcon} parentCallback={handleCallbackLogo}>
					Coucou
				</ModaleLogo>


				<InputModalText nomLabel='A partir du : ' id='dateDebut'
					method={handleChange} exemple={new Date().toLocaleDateString()} onClick={() => console.log('Clic')} />

				<InputModalQuantity nomLabel={'Fréquence : '} id='frequence' method={handleChange}
					titre={tache.frequence} periode='jours' minimum />

				<div className='container'>
					<div className='row'>
						<div className=''>
							<label htmlFor="typeEvenement" className='form-label'>Type d'évènement : </label>
							<select className="form-select form-control profil-border" id='typeEvenement' aria-label="Default select example"
								onChange={handleChange} value={tache.typeEvenement}>
								<option value="0">Tâche</option>
								<option value="1">Habitude</option>
								<option value="2">Addiction</option>
							</select>
						</div>
					</div>
				</div>

				<div className='container'>Nature d'évènement</div>
				<div className='container'>
					<div className='row'>
						<div className='col-md-12 col-8'>
							<div class="btn-group" role="group" aria-label="Basic radio toggle button group">
								<input type="radio" class="btn-check" name="todo" id="todo" autocomplete="off" checked />
								<label class="btn btn-outline-primary" htmlFor="todo">Fait / A faire</label>
							</div>
						</div>
					</div>
				</div>

				<div className='d-flex justify-content-between mt-4 w-100'>
					<button href="" className='btn boutonValiderProfil' onClick={handleSubmit} disabled={isDisabled}>Valider</button>
					<button href="" className='btn boutonAnnuler' onClick={handleClickCancel}>Annuler</button>
					{/* <GenericButton label="Valider" buttonStyle='boutonValider' method={handleSubmit}/> */}
				</div>
				<div style={{ height: '50px' }}>{checkErrorMessage && checkIntegrity && (<div style={{ color: 'red' }}>{checkErrorMessage}</div>)}</div>
			</div>
		</div>
	)
}
