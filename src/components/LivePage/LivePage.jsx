import React from 'react'
import { BsLinkedin, BsInstagram, BsYoutube, BsTwitter, BsFacebook } from 'react-icons/bs';
import './LivePage.css'
import 'animate.css';

function LivePage() {
    return (
        <div className="livePage_container">

            <div className="logo_livePage animate__animated animate__fadeInDown">CODER<span>SUMMIT21</span></div>

            <div className="video_container">
                <div className="video">

                    <iframe width="560" height="315" src="https://www.youtube.com/embed/ZQ7EqLYmebU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                    <div className="live_alert">
                        <div className="redCircle" />
                        <div>LIVE</div>
                    </div>

                </div>
            </div>

            <div className="livePage_footer_container">
                <div className="livepage_footer">
                    
                    <div className="livepage_footer__line"></div>
                    
                    <div className="logo_livePage--footer animate__animated animate__fadeInDown">CODER<span>SUMMIT21</span></div>

                    <div className="socialMedia--footer">
                        <a href="https://www.instagram.com/coderhouse/" target="_blank"> <BsInstagram className="socialMedia--footer--icon"/> </a>
                        <a href="https://www.youtube.com/channel/UCeFRG6700bzqYI0M_9vyelw/videos" target="_blank"> <BsYoutube className="socialMedia--footer--icon"/> </a>
                        <a href="https://www.linkedin.com/school/coderhouse/" target="_blank"> <BsLinkedin className="socialMedia--footer--icon"/> </a>
                        <a href="https://twitter.com/CODERHOUSE" target="_blank"> <BsTwitter className="socialMedia--footer--icon"/> </a>
                        <a href="https://www.facebook.com/Coderhouse/" target="_blank"> <BsFacebook className="socialMedia--footer--icon"/> </a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default LivePage
