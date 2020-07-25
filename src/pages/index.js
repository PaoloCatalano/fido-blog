import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

const Home = () => {
  return (
    <Layout>
    <div>
      <div className="parent">
        <div className="child">
          <div className="child">A</div>
          <div className="child">B</div>
        </div>
        
        <div className="child">
          <div className="child">A</div>
          <div className="child">B</div>
        </div>
        
        <div className="child">
          <div className="child">A</div>
          <div className="child">B</div>
        </div>
        
    </div>
    </div>
    </Layout>
  )
}

export default Home
