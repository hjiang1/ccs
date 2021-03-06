import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import ccsLight from "../../images/ccsbwh-light.png"
import ccsLogo from "../../images/ccs-logo.png"

const Container = styled.div`
  display: flex;
  height: 100%;

  .header-home-link {
    height: 100%;

    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none;

    .logo {
      height: calc(100% - 2rem);
      padding: 1rem 0;

      @media screen and (max-width: 450px) {
        display: none;
      }
    }

    .logo-icon {
      height: calc(100% - 4rem);
      padding: 2rem 0;

      @media screen and (min-width: 451px) {
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
        <img
          className="logo"
          src={ccsLight}
          alt="Center for Clinical Spectroscopy Logo"
        />
        <img
          className="logo-icon"
          src={ccsLogo}
          alt="Center for Clinical Spectroscopy Logo"
        />
      </Link>
    </Container>
  )
}

export default HeaderHomeLink
