import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

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

    margin: 0 -0.5rem;
  }
`

const Header = () => (
  <Container>
    <h1 className="header-title" style={{ margin: 0 }}>
      <HeaderHomeLink />
    </h1>
    <div className="header-nav-container">
      <HeaderNavLink className="header-nav-link" to="/">
        About Spectroscopy
      </HeaderNavLink>
      <HeaderNavLink className="header-nav-link" to="/">
        Members
      </HeaderNavLink>
      <HeaderNavLink className="header-nav-link" to="/">
        Contact
      </HeaderNavLink>
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
