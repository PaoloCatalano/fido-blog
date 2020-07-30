import React from "react"
import Image from "gatsby-image"
const OverlaySlide = ({ nome, foto }) => {

  

  return (
      <div >
      {foto.map((pic, index) => {
        return (
          <div className="mySlide" key={nome + index}>
            <div className="number-text">{index + 1} / {foto.length}</div>
            <Image key={nome + pic.id} fluid={pic.fluid} />
          </div>
        )
      })}
    </div>
  )
}

export default OverlaySlide
