import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const Container = styled.div`
  .header-home-link {
    color: white;
    text-decoration: none;
  }
`

const HeaderHomeLink = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Container className="header-home-link-container">
      <Link className="header-home-link" to="/">
        {data.site.siteMetadata.title}
      </Link>
    </Container>
  )
}

export default HeaderHomeLink
