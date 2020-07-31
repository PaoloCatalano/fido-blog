import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Cards from "../components/Cards"
import Overlay from "../components/Overlay"
const Home = ({ data }) => {

  return (
    <Layout>
      <Cards cani={data.cani.nodes} ></Cards>
    </Layout>
  )
}
export const query = graphql`
  {
    cani: allContentfulCani {
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

export default Home
