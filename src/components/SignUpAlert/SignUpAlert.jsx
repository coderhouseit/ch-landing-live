import React from 'react'
import './SignUpAlert.css'
import 'animate.css';

function SignUpAlert() {

    function clickHandler() {
        document.querySelector('.alert_container').classList.add('animate__fadeOut')
        document.querySelector('.alert_container').classList.remove('animate__fadeIn')
        
        setTimeout(()=>{
            document.querySelector('.alert_container').classList.add('hidden')
            document.querySelector('.alert_container').classList.remove('visible')
        }, 1000)
    }

    return (
            <div className="alert_container animate__animated hidden">
                <div className="alertMessage_container">
                    <div className="alert_title">¡YA ESTÁS SUSCRIPTO!</div>
                    <div className="alert_message">RECIBIRAS UN EMAIL CON EL LINK DE ACCESO AL EVENTO</div>
                    <button onClick={ clickHandler }>Aceptar</button>
                </div>     
            </div>
    )
}

export default SignUpAlert
