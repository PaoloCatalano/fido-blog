import React from "react"
import Layout from "../components/Layout"
import OverlaySlide from "../components/OverlaySlide"
const CaneTemplate = ({ data }) => {
  // const { nome, contentful_id} = data.cani.nodes

  return (
    <Layout>
      {data.cani.nodes.map(cane => {
        return (
            <div className="foto-container" key={cane.nome + cane.contentful_id}>
            <h1>{cane.nome}</h1>
            <OverlaySlide  {...cane} />
          </div>
        )
      })}
    </Layout>
  )
}

export const query = graphql`
  query GetSingleCani($contentful_id: String) {
    cani: allContentfulCani(filter: { contentful_id: { eq: $contentful_id } }) {
      nodes {
        contentful_id
        nome
        foto {
          id
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

export default CaneTemplate
