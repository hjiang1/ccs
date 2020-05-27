import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

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
    display: flex;
    flex-direction: column;
    align-items: center;

    .carousel-wrapper {
      width: 100%;
    }

    .see-all-button {
      margin-top: 3rem;
      grid-area: button;
      justify-self: center;

      width: fit-content;
      height: fit-content;
      padding: 1rem 2rem;

      color: var(--color-light);
      background-color: rgba(44, 44, 70);
      border: 2px solid rgba(44, 44, 70);

      font-weight: bold;
      text-decoration: none;

      transition: background-color 0.1s ease, color 0.1s ease;

      :hover {
        color: rgba(44, 44, 70);
        background-color: transparent;
      }
    }
  }
`

const ProjectsPreview = props => {
  return (
    <Container {...props}>
      <h2 className="projects-preview-title">Research Projects</h2>
      <div className="preview-content">
        <div className="carousel-wrapper">
          <Carousel />
        </div>
        <Link className="see-all-button" to="/projects/">
          View All Projects
        </Link>
      </div>
    </Container>
  )
}

export default ProjectsPreview
