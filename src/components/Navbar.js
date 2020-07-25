import React from "react"
import logo from "../assets/fido-logo-svg.svg"
import Links from "../constants/socialLinks"

const Navbar = () => {
  //funzione POPUP
  function myFunction() {
    var popup = document.getElementById("myPopup")
    popup.classList.toggle("show")
  }

  return (
      <div className="navbar popup" onClick={myFunction}>
      <div className="sfondo-logo">
        <img src={logo} alt="logo" className="logo"/>
      </div>
      <h1>Le foto dei nostri cuccioli</h1>
      <span className="popuptext" id="myPopup">
        <Links />
      </span>
    </div>
  )
}

export default Navbar
