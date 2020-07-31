import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"

const SingleCard = ({ nome, foto, contentful_id }) => {
  return (
    <Link to={`${contentful_id}`}>
      <div className="parent">
        <div className="child">
          <Image className="foto" fluid={foto[0].fluid} key={foto[0].id} />
          <div className="nome">{nome}</div>
        </div>
      </div>
    </Link>
  )
}

export default SingleCard
