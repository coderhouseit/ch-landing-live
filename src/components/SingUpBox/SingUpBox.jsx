import React from 'react'
import './SignUpBox.css'
import 'animate.css';

function SingUpBox() {

    function clickHandler(e){
        e.preventDefault()
        
        document.querySelector('.alert_container').classList.remove('hidden')
        document.querySelector('.alert_container').classList.remove('animate__fadeOut')
        document.querySelector('.alert_container').classList.add('animate__fadeIn')
        document.querySelector('.alert_container').classList.add('visible')
    }

    return (
        <div className="signUpForm_container">

            <form className='signUpForm' action="#" method="get">

                <input placeholder="Ingresá tu correo" type='text'/>
                
                <div className='signUpForm_button_box'>
                    <input type="submit" value="Inscribirse" onClick={ clickHandler } className=""/>
                </div>
                
            </form>
        </div>
        
    )
}

export default SingUpBox