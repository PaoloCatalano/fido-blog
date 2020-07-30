import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
const Error = () => {
  return (
    <Layout>
      <div className="center">
        <h1>404 error page</h1>

        <Link to="/">torna alle foto</Link>
      </div>
    </Layout>
  )
}

export default Error
