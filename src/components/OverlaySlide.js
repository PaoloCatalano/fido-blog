import React from "react"
import Image from "gatsby-image"
import styled from "styled-components"
import { FaRegPauseCircle } from "react-icons/fa"
const OverlaySlide = ({ nome, foto }) => {
  return (
    <div>
      {foto.map((pic, index) => {

        const Frame = styled.section`
          background-image: url("http:${pic.fluid.src}");
          background-position: center; /* Center the image */
          background-repeat: no-repeat; /* Do not repeat the image */
          background-size: cover; /* Resize the background image to cover the entire container */
          background-color: rgb(96, 134, 159);
          background-blend-mode: color-dodge;
        `

        return (
          <Frame foto={pic} className="mySlide" key={nome + index}>
            <div className="single-photo">
              <div className="number-text">
                Foto {index + 1} di {foto.length}
              </div>
              <Image className="image" key={nome + pic.id} fluid={pic.fluid} />
            </div>
          </Frame>
        )
      })}
    </div>
  )
}

export default OverlaySlide
