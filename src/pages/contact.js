import React from "react"
import Layout from "../components/layout"

const contact = () => {
  return (
    <Layout>
      Hi contact page
      <p>kelehans@tcd.ie</p>
      <p>
        {/* The target="_black" is so when you click the link it opens on a new page */}
        google
        <a href="https://google.com" target="_black">
          here
        </a>
      </p>
    </Layout>
  )
}

export default contact
