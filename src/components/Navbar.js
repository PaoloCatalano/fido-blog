import React from 'react'
import logo from '../assets/fido-logo-svg.svg'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="sfondo-logo">
            <img src={logo} alt="logo" className="logo"/>
            </div>
            <a href="https://fidodogsitter.netlify.app/" >Home di fido</a>
        </div>
    )
}

export default Navbar
