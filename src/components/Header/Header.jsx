import React from 'react'
import SingUpBox from '../SingUpBox/SingUpBox'
import SignUpAlert from '../SignUpAlert/SignUpAlert';
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
                <a href="https://www.instagram.com/coderhouse/" target="_blank"> <BsInstagram className="socialMedia_icon"/> </a>
                <a href="https://www.youtube.com/channel/UCeFRG6700bzqYI0M_9vyelw/videos" target="_blank"> <BsYoutube className="socialMedia_icon"/> </a>
                <a href="https://www.linkedin.com/school/coderhouse/" target="_blank"> <BsLinkedin className="socialMedia_icon"/> </a>
                <a href="https://twitter.com/CODERHOUSE" target="_blank"> <BsTwitter className="socialMedia_icon"/> </a>
                <a href="https://www.facebook.com/Coderhouse/" target="_blank"> <BsFacebook className="socialMedia_icon"/> </a>
            </div>

            <SignUpAlert />

        </div>
    )
}

export default Header
