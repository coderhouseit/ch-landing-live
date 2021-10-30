import React from 'react'
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
                    <div className="logo_livePage logo--footer animate__animated animate__fadeInDown">CODER<span>SUMMIT21</span></div>
                </div>
            </div>
        </div>
    )
}

export default LivePage
