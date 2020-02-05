import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const about = () => {
  return (
    <div>
      <Layout>
        Hi about page
        <p>
          This is a link to conatct page <Link to="/contact">here</Link>
        </p>
      </Layout>
    </div>
  )
}

export default about
