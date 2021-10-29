import React from 'react'
import './SignUpAlert.css'

function SignUpAlert() {

    function clickHandler() {
        document.querySelector('.alert_container').classList.remove('visible')
    }

    return (
        <div className="alert_container">
            <div className="alertMessage_container">
                <div className="alert_title">¡YA ESTÁS SUSCRIPTO!</div>
                <div className="alert_message">RECIBIRAS UN EMAIL CON EL LINK DE ACCESO AL EVENTO</div>
                <button onClick={ clickHandler }>Aceptar</button>
            </div>     
        </div>
    )
}

export default SignUpAlert
