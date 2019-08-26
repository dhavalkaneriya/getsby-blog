import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <>
      <p>
        Created By {data.site.siteMetadata.author}, &copy;{" "}
        {new Date().getFullYear()}
      </p>
    </>
  )
}

export default Footer
