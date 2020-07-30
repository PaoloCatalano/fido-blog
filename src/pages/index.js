import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Cards from "../components/Cards"
import Overlay from "../components/Overlay"
const Home = ({ data }) => {

  
  /* const [appear, setAppear] = React.useState(true)

  const showPic = (nome) => {
    console.log(nome);

    for (var i = 0; i <= data.cani.nodes.length; i++){
      if (data.cani.nodes[i].nome === nome) {
        setAppear(false)
      } else {
        return null;
      }
    }
    console.log(data.cani.nodes.length);
  } */

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
