import React, { Fragment } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Header from "./Header"

const Main = styled.main`
`

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <Main>
        {children}
      </Main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
