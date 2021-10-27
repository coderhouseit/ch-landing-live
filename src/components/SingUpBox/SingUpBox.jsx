import React from 'react'
import './SignUpBox.css'

function SingUpBox() {

    function clickHandler(e){
        e.preventDefault(0)
    }

    return (
        <div className="signUpForm_container">

            <form className='signUpForm'>

                <input placeholder="Insgresá tu correo" type='text'/>
                
                <div className='signUpForm_button_box'>
                    <button onClick={ clickHandler }>Inscribirse</button>
                </div>
                
            </form>
        </div>
        
    )
}

export default SingUpBox