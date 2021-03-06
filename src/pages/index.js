import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

import Head from "../components/head"

const IndexPage = () => {
  return (
    <div>
      <Layout>
        <Head></Head>
        <h1>Hi</h1>
        <h2>This is a h2 tag</h2>
        <p>
          Need a developer? <Link to="/contact">Contact me.</Link>
        </p>
      </Layout>
    </div>
  )
}

export default IndexPage
