import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Container = styled.div`
  margin: 0 0.5rem;

  .header-nav-link {
    color: white;
    text-decoration: none;
  }
`

const HeaderNavLink = ({ to, children }) => {
  return (
    <Container className="header-nav-link-container">
      <Link className="header-nav-link" to={to}>
        {children}
      </Link>
    </Container>
  )
}

HeaderNavLink.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node,
}

HeaderNavLink.defaultProps = {
  to: ``,
  children: null,
}

export default HeaderNavLink
