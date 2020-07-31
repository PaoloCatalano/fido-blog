import React from "react"
import Image from "gatsby-image"
const OverlaySlide = ({ nome, foto }) => {

  

  return (
      <div >
      {foto.map((pic, index) => {
        return (
          <div className="mySlide" key={nome + index}>
            <div className="single-photo">
            <div className="number-text">Foto {index + 1} di {foto.length}</div>
            <Image key={nome + pic.id} fluid={pic.fluid} />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default OverlaySlide
