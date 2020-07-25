import React from "react"
import { FaHome, FaInstagramSquare, FaFacebookSquare, FaWhatsapp } from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaHome className="home" />,
    url: "https://fidodogsitter.netlify.app/",
  },
  {
    id: 2,
    icon: <FaFacebookSquare className="facebook" />,
    url: "https://www.facebook.com/Fidodogsitter",
  },
  {
    id: 3,
    icon: <FaWhatsapp className="whatsapp" />,
    url: "https://wa.me/393466256832",
  },
  {
    id: 4,
    icon: <FaInstagramSquare className="instagram" />,
    url: "https://www.instagram.com/fido_dogsitter/",
  },
]

export default ({ styleClass }) => {
  return (
    <section>
      <ul className={`social-links ${styleClass ? styleClass : ""}`}>
        {data.map(link => {
          return (
            <li key={link.id}>
              <a href={link.url} className="social-link">
                {link.icon}
              </a>
            </li>
          )
        })}
      </ul>
      <p className="numero">Tel: 346 625 6832</p>
    </section>
  )
}
