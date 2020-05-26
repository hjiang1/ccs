import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { FaBars } from "react-icons/fa"

import HeaderHomeLink from "./HeaderHomeLink"
import HeaderNavLink from "./HeaderNavLink"

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: rebeccapurple;
  padding: 2rem;

  .header-nav-container {
    display: flex;
    align-items: center;
    margin: 0 -0.5rem;

    .header-nav-link {
      @media screen and (max-width: 1000px) {
        display: none;
      }
    }

    .collapsible-menu-button {
      display: none;

      svg {
        height: 2rem;
        width: 2rem;
        color: white;
      }

      @media screen and (max-width: 1000px) {
        display: block;
      }
    }
  }
`

const Header = () => (
  <Container>
    <h1 className="header-title" style={{ margin: 0 }}>
      <HeaderHomeLink />
    </h1>
    <div className="header-nav-container">
      <HeaderNavLink className="header-nav-link" to="/projects/">
        Projects
      </HeaderNavLink>
      <HeaderNavLink className="header-nav-link" to="/about-spectroscopy/">
        About Spectroscopy
      </HeaderNavLink>
      <HeaderNavLink className="header-nav-link" to="/members/">
        Members
      </HeaderNavLink>
      <HeaderNavLink className="header-nav-link" to="/contact/">
        Contact
      </HeaderNavLink>
      <button className="collapsible-menu-button">
        <FaBars />
      </button>
    </div>
  </Container>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
