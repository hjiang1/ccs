import React from "react"
import styled from "styled-components"

import Carousel from "../Carousel"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6rem 3rem;
  background-color: white;

  @media screen and (max-width: 1200px) {
    padding: 3rem;
  }

  .projects-preview-title {
    margin: 0 0 4rem;
    color: var(--title-color);

    @media screen and (max-width: 1200px) {
      margin-bottom: 2rem;
    }
  }

  .preview-content {
    width: 100%;
  }
`

const ProjectsPreview = props => {
  return (
    <Container {...props}>
      <h2 className="projects-preview-title">Research Projects</h2>
      <div className="preview-content">
        <Carousel />
      </div>
    </Container>
  )
}

export default ProjectsPreview
