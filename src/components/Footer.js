import React from 'react'
import SocialLinks from "../constants/socialLinks"

const Footer = () => {
    return (
        <div className="footer">
            <h4>copyright&copy;<>{new Date().getFullYear()}{" "}</>
               - FIDO - <span>Alessandro Russo</span>{" "}P.Iva:05502960874{"  "}</h4>
            <div className="container-footer-links">
                <SocialLinks styleClass="footer-links" />
            </div>
        </div>
    )
}

export default Footer
