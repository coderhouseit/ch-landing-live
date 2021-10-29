import React from 'react'
import SingUpBox from '../SingUpBox/SingUpBox'
import { BsLinkedin, BsInstagram, BsYoutube, BsTwitter, BsFacebook } from 'react-icons/bs';
import "./Header.css"

function Header() {
    return (
        <div className="headerCointainer">  

            <div className="logo">CODER<span>SUMMIT21</span></div>
                        
            <div className="mainContainer">
                <div className="main__date">&lt; 21_<span>NOV_</span>2021 &gt;</div>
                <div className="main_title_container">
                    <div className="main__title">SÉ PARTE DE LO QUE SE VIENE</div>
                </div>
            </div>
            
            <SingUpBox />

            <div className="socialMedia">
                <a href="#"> <BsInstagram className="socialMedia_icon"/> </a>
                <a href="#"> <BsYoutube className="socialMedia_icon"/> </a>
                <a href="#"> <BsLinkedin className="socialMedia_icon"/> </a>
                <a href="#"> <BsTwitter className="socialMedia_icon"/> </a>
                <a href="#"> <BsFacebook className="socialMedia_icon"/> </a>
            </div>

        </div>
    )
}

export default Header
