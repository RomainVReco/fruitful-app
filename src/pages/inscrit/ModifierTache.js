import React, { useEffect } from 'react'
import InputGenericText from '../../components/InputGenericText'
import ModaleLogo from '../../components/ModaleLogo'
import { dataImage } from '../../_helpers/data.env'
import { useState } from 'react'
import InputModalText from '../../components/InputModalText'
import axios from 'axios'
import InputModalQuantity from '../../components/InputModalQuantity'
import { Link, useNavigate } from 'react-router-dom'
import ModaleConfirmation from '../../components/ModaleConfirmation'


export default function ModifierTache() {

    var navigate = useNavigate()

    const [checkErrorMessage, setErrorMessage] = useState('')
    const [evenements, setEvenements] = useState('')
    const [icones, setIcones] = useState('')
    const [dataIcon, setDataIcon] = useState(dataImage)

    const [isOpen, setIsOpen] = useState(false)
    const [isModaleSuppressionOpen, setModaleSuppressionOpen] = useState(false)
    const [isModaleModificationOpen, setModaleModificationOpen] = useState(false)
    const [infoSuppression, setInfoSuppression] = useState(
        ["L'évènement a bien été supprimé et n'apparaitra plus dans la liste de vos tâches.",
            'Les statistiques de cette tâche resteront consultables dans la rubrique "Mon bilan".'
        ])
    const [infoModification, setInfoModification] = useState(
        ['Votre évènement a bien été mis à jour'])

    // attention à bien ajouter la récupération du jeton
    const [tache, setTache] = useState({
        idEvenement: '2',
        nom: 'Nom local',
        dateDebut: '01/01/1970',
        frequence: '3',
        typeEvenement: '2',
        idClient: 7,
        logo: '5',
        estActif: '1'
    })

    const [suppressionTache, setSuppressionTache] = useState('')
    const [singleIcon, setSingleIcon] = useState(dataIcon[tache.logo])

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
        taches.logo = logo
        setTache(taches)
    }

    const handleChange = (event) => {
        console.log("Handle Change in création tache : ", [event.target.id] + ':' + event.target.value)
        setTache(prevTache => ({ ...prevTache, [event.target.id]: event.target.value }))
    }

    {/*const handleSubmit = (event) => {
        event.preventDefault()
        Object.entries(tache).forEach(([key, value]) => {
            console.log(key + ' : ' + value + ' - ' + 'typeof : ' +
                typeof (value) + ' - ' + ' undefined : ' + (value == undefined))
        })
        const checkTacheData = Object.values(tache).some(value => value.length === 0)
        if (checkTacheData) {
            setErrorMessage("Il manque une ou plusieurs informations obligatoires")

        } else {
            console.log("Chouette, ça va partir en base de données")
        }
    }
    */}

    const handleDelete = async (event, idEvenement) => {
        event.preventDefault()
        try {
            const response = await axios.put(`http://localhost:8081/updateEventStatus/${idEvenement}`)
            console.log('updateEventStatus : ', response.status)
            console.log('updateEventStatus : ', response.data)
            if (response.status === 200) {
                setModaleSuppressionOpen(true)
            }
        } catch (error) {
            console.log("Erreur lors de la mise à jour d'un évènement", error)
        }
    }

    const handleModification = async (event) => {
        event.preventDefault()
        const checkTacheData = Object.values(tache).some(value => value.length === 0)
        if (checkTacheData) {
            setErrorMessage("Il manque une ou plusieurs informations obligatoires")

        } else {
            console.log("ça part pour mise à jour en base de données")
            updateEvent(tache)
        }
    }

    const updateEvent = async (tache) => {
        try {
            const response = await axios.put('http://localhost:8081/updateEvent', tache)
            console.log('updateEvent : ', response.status)
            console.log('updateEvent : ', response.data)
            if (response.status === 200) {
                setModaleModificationOpen(true)
            }
        } catch (error) {
            console.log("Erreur lors de la mise à jour de l'évènement", error)
        }
    }

    const onCloseSuppression = () => {
        setModaleSuppressionOpen(false)
        navigate("../../estConnecte/listeTaches/")
    }

    const onCloseModification = () => {
        setModaleModificationOpen(false)
        navigate("../../estConnecte/listeTaches/")
    }


    return (
        <div className='container d-flex flex-column gap-3'>
            <h3 style={{ marginBottom: '25px' }}> Modifier votre évènement </h3>

            <InputGenericText nomLabel={`Nom de votre ${evenements[tache['typeEvenement']]} : `} label='nom' titre={tache.nom}
                method={handleChange} value={tache.nom} />

            <div className='container'>
                <button className='btn btn-light' onClick={() => setIsOpen(true)}>
                    <img src={singleIcon} alt="icone evt" style={{ height: '42px', width: '52px' }}></img>
                </button>
                <ModaleLogo open={isOpen} onClose={() => setIsOpen(false)} data={dataIcon} parentCallback={handleCallbackLogo}>
                    Coucou
                </ModaleLogo>
            </div>

            <InputModalText nomLabel='A partir du : ' id='dateDebut'
                method={handleChange} onClick={() => console.log('Clic')} titre={tache.dateDebut} />

            <InputModalQuantity nomLabel={'Fréquence : '} id='frequence' titre={tache.frequence} method={handleChange}
                periode='jours' mini='1' max='7' />

            <div className='container'>
                <div className='row'>
                    <div className='col-md-5 col-8'>
                        <label htmlFor="typeEvenement" className='form-label'>Type d'évènement : </label>
                        <select className="form-select form-control profil-border" id='typeEvenement' aria-label="Default select example"
                            onChange={handleChange} defaultValue={tache.typeEvenement}>
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
                <a href="" className='btn' onClick={handleModification}>Modifier</a>
                <ModaleConfirmation open={isModaleModificationOpen} method={onCloseModification}
                    lignes={infoModification} titre={"Résultat"} />
                <a href="" className='btn boutonAnnuler' onClick={(event) => handleDelete(event, tache.idEvenement)}>Supprimer</a>
                <ModaleConfirmation open={isModaleSuppressionOpen} method={onCloseSuppression}
                    lignes={infoSuppression} titre={"Résultat"} />
                <a href="../estConnecte/listeTaches" className='btn boutonAnnuler' style={{ marginLeft: '50px' }}>Annuler</a>
                {/* <GenericButton label="Valider" buttonStyle='boutonValider' method={handleSubmit}/> */}
            </div>
            {checkErrorMessage && (<div style={{ color: 'red' }}>{checkErrorMessage}</div>)}
        </div>
    )
}

