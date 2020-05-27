import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Container = styled.div`
  position: relative;
  margin: 0 0.5rem;

  .header-nav-link {
    color: var(--color-light);
    text-decoration: none;
    font-weight: bold;
  }

  .link-highlight {
    margin-top: 2px;
    width: 0;
    height: 2px;
    background-color: var(--color-light);
    position: absolute;
    transition: width 0.1s ease;
  }

  :hover {
    .link-highlight {
      width: 100%;
    }
  }
`

const HeaderNavLink = ({ to, children }) => {
  return (
    <Container className="header-nav-link-container">
      <Link className="header-nav-link" to={to}>
        <div className="link-text">{children}</div>
      </Link>
      <div className="link-highlight" />
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
