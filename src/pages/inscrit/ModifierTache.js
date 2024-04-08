import React, { useEffect } from 'react'
import InputGenericText from '../../components/InputGenericText'
import ModaleLogo from '../../components/ModaleLogo'
import { dataImage } from '../../_helpers/data.env'
import { useState } from 'react'
import InputModalText from '../../components/InputModalText'
import axios from 'axios'
import InputModalQuantity from '../../components/InputModalQuantity'
import { useParams, useNavigate } from 'react-router-dom'
import ModaleConfirmation from '../../components/ModaleConfirmation'



export default function ModifierTache() {

    var navigate = useNavigate()

    var { idEvenement } = useParams()

    const [checkErrorMessage, setErrorMessage] = useState('')
    const [evenements, setEvenements] = useState('')
    const [icones, setIcones] = useState('')
    const [dataIcon, setDataIcon] = useState(dataImage)

    const [isOpen, setIsOpen] = useState(false)
    const [isModaleSuppressionOpen, setModaleSuppressionOpen] = useState(false)
    const [isModaleModificationOpen, setModaleModificationOpen] = useState(false)
    const [checkIntegrity, setCheckIntegrity] = useState(false)
    const [infoSuppression, setInfoSuppression] = useState(
        ["L'évènement a bien été supprimé et n'apparaitra plus dans la liste de vos tâches.",
            'Les statistiques de cette tâche resteront consultables dans la rubrique "Mon bilan".'
        ])
    const [infoModification, setInfoModification] = useState(
        ['Votre évènement a bien été mis à jour'])

    // attention à bien ajouter la récupération du jeton
    const [tache, setTache] = useState({
        idEvenement: '',
        nom: '',
        dateDebut: '',
        frequence: '',
        typeEvenement: '',
        logo: '',
        idUtilisateur: '',
        estActif: '1'
    })

    const [suppressionTache, setSuppressionTache] = useState('')
    const [singleIcon, setSingleIcon] = useState(dataIcon[tache.logo])

    useEffect(() => {
        getEventToModify(idEvenement)
    }, [])

    useEffect(() => {
        getEventTypes()

    }, [])



    const getEventTypes = async () => {
        try {
            const response = await axios.get('http://localhost:8081/getAllEventTypes')
            Object.entries(response.data).forEach(([key, value]) => {
                setEvenements(prevState => ({ ...prevState, [key]: value['nomTypeEvenement'] }))
            })

        } catch (error) {
            console.error('Erreur getEventTypes : ', error);
        }
    }

    const getEventToModify = async (idEvenement) => {
        try {
            const response = await axios.get(`http://localhost:8081/getEvent/${idEvenement}`)
            Object.entries(response.data['resultat'][0]).forEach(([key, value]) => {
                setTache(prevState => ({ ...prevState, [key]: value }))
            })

        } catch (error) {
            console.log("Erreur lors de la récupération de l'évènement à modifier")
        }
    }

    const getAllIcons = async () => {
        try {
            const response = await axios.get('http://localhost:8081/getAllIcons')
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
        setSingleIcon(dataImage[logo])
        taches.logo = logo
        setTache(taches)
    }

    const handleChange = (event) => {
        setCheckIntegrity(false)
        setTache(prevTache => ({ ...prevTache, [event.target.id]: event.target.value }))
    }

    const handleDelete = async (event, idEvenement) => {
        event.preventDefault()
        try {
            const response = await axios.put(`http://localhost:8081/updateEventStatus/${idEvenement}`)
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
            setCheckIntegrity(true)
            setErrorMessage("Il manque une ou plusieurs informations obligatoires")

        } else {
            console.log("ça part pour mise à jour en base de données")
            updateEvent(tache)
        }
    }

    const updateEvent = async (tache) => {
        try {
            const response = await axios.put('http://localhost:8081/updateEvent', tache)
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

    const handleClickCancel = (event) => {
		event.preventDefault()
		navigate('../listeTaches#')
	}


    return (
        <div className='container d-flex flex-column align-items-center gap-3 mt-5'>
            <h3 className='titre-h3-modifier-creer-tache'> Modifier votre évènement </h3>
            <div className='gap-3'>
                <InputGenericText nomLabel={`Nom de votre ${evenements[tache['typeEvenement']]} : `} label='nom' titre={tache.nom}
                    method={handleChange} value={tache.nom} />
                <button className='btn btn-light ' onClick={() => setIsOpen(true)}>
                    <img src={dataIcon[tache.logo]} alt="icone evt" style={{ height: '42px', width: '52px' }}></img>
                </button>
                <ModaleLogo open={isOpen} onClose={() => setIsOpen(false)} data={dataIcon} parentCallback={handleCallbackLogo}>
                    Coucou
                </ModaleLogo>
                <InputModalText nomLabel='A partir du : ' id='dateDebut'
                    method={handleChange} onClick={() => console.log('Clic')} titre={tache.dateDebut} />

                <InputModalQuantity nomLabel={'Fréquence : '} id='frequence' titre={tache.frequence} method={handleChange}
                    periode='jours' mini='1' max='7' />

                <div className='container'>
                    <div className='row'>
                        <div className=''>
                            <label htmlFor="typeEvenement" className='form-label'>Type d'évènement : </label>
                            <select className="form-select form-control profil-border" id='typeEvenement' aria-label="Default select example"
                                onChange={handleChange} value={tache.typeEvenement}>
                                <option value="0">{evenements[0]}</option>
                                <option value="1">{evenements[1]}</option>
                                <option value="2">{evenements[2]}</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className='container'>Nature d'évènement</div>
                <div className='container'>
                    <div className='row'>
                        <div className=''>
                            <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                <input type="radio" class="btn-check" name="todo" id="todo" autocomplete="off" checked />
                                <label class="btn btn-outline-primary" htmlFor="todo">Fait / A faire</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='d-flex justify-content-between mt-4 w-100'>
                    <button className='btn boutonValiderProfil' onClick={handleModification}>Modifier</button>
                    <ModaleConfirmation open={isModaleModificationOpen} method={onCloseModification}
                        lignes={infoModification} titre={"Résultat"} />
                    <button className='btn boutonAnnuler' onClick={handleClickCancel}>Annuler</button>
                    {/* <GenericButton label="Valider" buttonStyle='boutonValider' method={handleSubmit}/> */}
                </div>
                <div className='d-flex justify-content-end mt-1 w-100 pb-3'>
                <button className='btn boutonSupprimer' onClick={(event) => handleDelete(event, tache.idEvenement)}>Supprimer</button>
                    <ModaleConfirmation open={isModaleSuppressionOpen} method={onCloseSuppression}
                        lignes={infoSuppression} titre={"Résultat : "} />
                </div>
                {checkErrorMessage && checkIntegrity && (<div style={{ color: 'red' }}>{checkErrorMessage}</div>)}
            </div>
        </div>
    )
}

