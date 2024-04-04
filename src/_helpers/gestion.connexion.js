import axios from "axios"

let saveSessionId = (jeton) => {
    sessionStorage.setItem('jeton', jeton)
}

let deconnexion = () => {
    sessionStorage.removeItem('jeton')
}

let isLogged = () => {
    let jeton = sessionStorage.getItem('jeton')
    return !!jeton
}

let getSessionId = () => {
    console.log('jeton : ', sessionStorage.getItem('jeton'))
    return sessionStorage.getItem('jeton')
}

let checkCapIsReached = async (jeton) => {
    try {
        console.log('checkCapIsReached : ', jeton)
        const responseIsAbonne = await axios.get(`http://localhost:8081/getIsAbonne/${jeton}`)
        console.log('checkCapIsReached getIsAbonne : ', responseIsAbonne.data)
        const isAbonne = !!responseIsAbonne.data.data[0].estAbonne
        
        if (!isAbonne) {
            const responseCountEvent = await axios.get(`http://localhost:8081/getEventUserCount/${jeton}`)
            console.log('checkCapIsReached getEventUserCount :',  responseCountEvent.data)
            let isCapReached = responseCountEvent.data.resultat[0].numEvents >= 4
            return !isAbonne && isCapReached

        } else {
            return false
        }

    } catch (error) {
        console.log("Oups, nous n'avons pas pu récupérer le statut d'abonnement de l'utilisateur", error)
    }
 }

 let checkIsAbonne = async (jeton) => {
    try {
        console.log('checkIsAbonne : ', jeton)
        const responseIsAbonne = await axios.get(`http://localhost:8081/getIsAbonne/${jeton}`)
        console.log('checkIsAbonne : ', responseIsAbonne.data)
        return !!responseIsAbonne.data.data[0].estAbonne
    } catch (error) {
        console.log("Echec du contrôle du statut de l'utilisateur", error)
    }
 }

export const gestionConnexion = {
    saveSessionId, deconnexion, isLogged, getSessionId, checkCapIsReached, checkIsAbonne
} 