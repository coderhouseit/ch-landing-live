import React from 'react'
import SingUpBox from '../SingUpBox/SingUpBox'
import { BsLinkedin, BsInstagram, BsYoutube, BsTwitter, BsFacebook } from 'react-icons/bs';
import "./Header.css"

function Header() {
    return (
        <div className="headerCointainer">  

            <div className="logo">CODER<span>SUMMIT21</span></div>
                        
            <div className="mainContainer">
                <div className="main__date">&lt; 21_<span>NOV</span>_2021 &gt;</div>
                <div className="main_title_container">
                    <div className="main__title">SE PARTE DE LO QUE SE VIENE</div>
                </div>
            </div>
            
            <SingUpBox />

            <div className="socialMedia">
                <div><BsInstagram /></div>
                <div><BsYoutube /></div>
                <div><BsLinkedin /></div>
                <div><BsTwitter /></div>
                <div><BsFacebook /></div>
            </div>

        </div>
    )
}

export default Header
