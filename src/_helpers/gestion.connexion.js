
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

export const gestionConnexion = {
    saveSessionId, deconnexion, isLogged, getSessionId
} 