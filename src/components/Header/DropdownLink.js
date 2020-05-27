import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  margin-bottom: -1px;
  background-color: #e1e6f0;
  border-top: 1px solid gray;
  border-bottom: 1px solid #e1e6f0;
  background: linear-gradient(to right, rgba(20, 20, 30), rgba(44, 44, 70));

  .dropdown-link {
    display: flex;
    align-items: center;
    color: #e1e6f0;
    padding: 2rem;
    text-decoration: none;
    font-weight: bold;
    flex: 1;
  }

  :hover {
    background: rgba(44, 44, 70);
  }
`

const DropdownLink = ({ to, children }) => {
  return (
    <Container className="dropdown-link-container">
      <Link className="dropdown-link" to={to}>
        {children}
      </Link>
    </Container>
  )
}

DropdownLink.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node,
}

DropdownLink.defaultProps = {
  to: ``,
  children: null,
}

export default DropdownLink
