import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Container = styled.div`
  .header-link {
    color: white;
    text-decoration: none;
  }
`

const HeaderLink = ({ to, children }) => {
  return (
    <Container className="header-link-container">
      <Link className="header-link" to={to}>
        {children}
      </Link>
    </Container>
  )
}

HeaderLink.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node,
}

HeaderLink.defaultProps = {
  to: ``,
  children: null,
}

export default HeaderLink
