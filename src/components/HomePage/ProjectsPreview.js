import React from "react"
import styled from "styled-components"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"

import PreviewCard from "../PreviewCard"

import mri from "../../images/mri.png"
import nfl from "../../images/nfl.png"
import explosion from "../../images/explosion.png"
import atp from "../../images/atp.png"

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
    color: #0d0b0e;

    @media screen and (max-width: 1200px) {
      margin-bottom: 2rem;
    }
  }

  .preview-container {
    display: flex;
    align-items: center;

    .preview-page-button {
      height: 2rem;
      width: 2rem;
      transition: transform 0.2s ease;

      svg {
        height: 2rem;
        width: 2rem;
      }

      :hover {
        transform: scale(1.25);
      }
    }

    .card-container {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 2rem;
      margin: 0 1rem;
    }
  }
`

const ProjectsPreview = props => {
  return (
    <Container {...props}>
      <h2 className="projects-preview-title">Research Projects</h2>
      <div className="preview-container">
        <button className="preview-page-button">
          <FaAngleLeft />
        </button>
        <div className="card-container">
          <PreviewCard
            title="Traumatic Brain Injury"
            detail="Sports-Related Concussion in Children"
            image={mri}
          />
          <PreviewCard
            title="Traumatic Brain Injury"
            detail="Repetetive Head Injury in NFL Players"
            image={nfl}
          />
          <PreviewCard
            title="Traumatic Brain Injury"
            detail="Mild Traumatic Brain Injury and Post-Traumatic Stress Disorder in Soldiers"
            image={explosion}
          />
          <PreviewCard
            title="Physiology of the Body"
            detail="Muscle Energetics"
            image={atp}
          />
        </div>
        <button className="preview-page-button">
          <FaAngleRight />
        </button>
      </div>
    </Container>
  )
}

export default ProjectsPreview
