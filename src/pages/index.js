import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import brain from "../images/ax-brain.png"

const Container = styled.div`
  margin-top: -6rem;

  .page-title {
    color: #edf0f5;
    margin: 0;
    font-size: 4rem;
  }

  .welcome-banner {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(
        210deg,
        rgb(76, 105, 134, 0.65),
        transparent,
        transparent
      ),
      linear-gradient(
        345deg,
        rgba(138, 145, 164, 0.35),
        transparent,
        transparent
      ),
      url(${brain});
    background-position: center;
    background-size: cover;

    .page-title {
      text-align: center;
    }
  }

  .projects-preview {
    height: 50rem;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <div className="welcome-banner">
        <h1 className="page-title">Center for Clinical Spectroscopy</h1>
      </div>
      <div classname="projects-preview">
        <div>adasads</div>
        <div>adasads</div>
        <div>adasads</div>
        <div>adasads</div>
        <div>adasads</div>
        <div>adasads</div>
        <div>adasads</div>
        <div>adasads</div>
      </div>
    </Container>
  </Layout>
)

export default IndexPage
