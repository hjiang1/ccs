import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const Container = styled.div`
  .header-home-link {
    color: #e1e6f0;
    text-decoration: none;
    display: flex;
    align-items: center;

    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none;

    .logo {
      font-weight: bold;
      font-size: 3rem;
    }

    .logo-name {
      font-weight: bold;
      font-size: 1.15rem;
      width: 10rem;
      margin-left: 1rem;

      @media screen and (max-width: 450px) {
        display: none;
      }
    }
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
        <div className="logo">CCS</div>
        <div className="logo-name">{data.site.siteMetadata.title}</div>
      </Link>
    </Container>
  )
}

export default HeaderHomeLink
