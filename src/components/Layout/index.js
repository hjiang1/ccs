import React, { Fragment } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import GlobalStyle from "./GlobalStyle"
import Header from "../Header"
import Footer from "../Footer"

const Main = styled.main``

const Layout = ({ children }) => {
  return (
    <Fragment>
      <GlobalStyle />
      <Header home />
      <Main>{children}</Main>
      <Footer />
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
