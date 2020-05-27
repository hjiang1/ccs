import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;

  .page-title {
    color: var(--title-color);
    align-self: center;
    margin-top: calc(2rem * var(--spacing-modifier));
  }
`

const Page = props => {
  const { children, title } = props

  return (
    <Container>
      <h1 className="page-title">{title}</h1>
      {children}
    </Container>
  )
}

Page.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
}

Page.defaultProps = {
  title: ``,
  children: null,
}

export default Page
