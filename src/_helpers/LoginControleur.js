import React from "react";
import { Navigate } from "react-router-dom";

export default function LoginControleur({children}) {
    let isLogged = false

    if (sessionStorage.getItem('idClient')!==undefined) {
        isLogged = true
    }

    if (!isLogged) {
        return <Navigate to="/login"></Navigate>
    }

    return children

}