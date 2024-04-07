import React from "react";
import { Navigate } from "react-router-dom";

export default function LoginControleur({children}) {
    let isLogged = false

    if (sessionStorage.getItem('jeton') !== null ) {
        console.log('Contenu sessionStorage : ', sessionStorage.getItem('jeton'))
        isLogged = true
    }

    if (!isLogged) {
        return <Navigate to="/login"/>
    } else return children
}