import React from "react";
import { Navigate } from "react-router-dom";

export default function LoginControleur({children}) {
    let isLogged = false

    if (sessionStorage.getItem('jeton') !== null ) {
        console.log('Contenu sessionStorage : ', sessionStorage.getItem('jeton'))
        isLogged = true
        console.log('Login controleur : ', isLogged)
    }

    if (!isLogged) {
        console.log('Contenu sessionStorage : ', sessionStorage.getItem('jeton'))
        console.log('Login controleur : ', isLogged)
        return <Navigate to="/login"/>
    } else return children
}