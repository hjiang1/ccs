import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  margin-bottom: -1px;
  background-color: #d1d7e3;
  border-top: 1px solid gray;
  border-bottom: 1px solid #d1d7e3;
  background: linear-gradient(to right, rgba(20, 20, 30), rgba(44, 44, 70));

  .dropdown-link {
    display: flex;
    align-items: center;
    color: #d1d7e3;
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
