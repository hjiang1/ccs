import React from "react"
import styled from "styled-components"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import WelcomeBanner from "../components/HomePage/WelcomeBanner"
import ProjectsPreview from "../components/HomePage/ProjectsPreview"
import SpectroscopyPreview from "../components/HomePage/SpectroscopyPreview"
import MembersPreview from "../components/HomePage/MembersPreview"

const Container = styled.div`
  margin-top: calc(-1 * var(--header-height));
`

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Container>
        <WelcomeBanner />
        <ProjectsPreview className="projects-preview" />
        <SpectroscopyPreview />
        <MembersPreview />
      </Container>
    </Layout>
  )
}

export default IndexPage
