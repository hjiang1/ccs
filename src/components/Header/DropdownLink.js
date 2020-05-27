import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  margin: -1px 0;
  background-color: white;
  border-top: 1px solid gray;
  border-bottom: 1px solid #edf0f5;
  background: linear-gradient(
    to right,
    black,
    #181d23,
    rgba(76, 105, 134, 0.25)
  );

  .dropdown-link {
    color: #edf0f5;
    padding: 2rem;
    text-decoration: none;
    font-weight: bold;
    flex: 1;

    :hover {
      background-color: rgba(76, 105, 134, 0.5);
    }
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