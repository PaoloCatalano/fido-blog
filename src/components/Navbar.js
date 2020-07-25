import React from 'react'
import logo from '../assets/fido-logo-svg.svg'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="sfondo-logo">
            <img src={logo} alt="logo" className="logo"/>
            </div>
            <h1>Le foto dei nostri cuccioli</h1>
        </div>
    )
}

export default Navbar
