import React from "react"
import styled from "styled-components"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PreviewCard from "../components/PreviewCard"
import brain from "../images/ax-brain.png"

import mri from "../images/mri.png"
import nfl from "../images/nfl.png"
import explosion from "../images/explosion.png"
import atp from "../images/atp.png"

const Container = styled.div`
  margin-top: -6rem;

  .welcome-banner {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(
        210deg,
        rgba(76, 105, 134, 0.65),
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
      color: #edf0f5;
      margin: 0;
      font-size: 4rem;
      text-align: center;
    }
  }

  .projects-preview {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 6rem 3rem;
    background-color: #a3a9b8;

    .projects-preview-title {
      margin: 0 0 4rem;
      color: #0d0b0e;
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
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <div className="welcome-banner">
        <h2 className="page-title">Center for Clinical Spectroscopy</h2>
      </div>
      <div className="projects-preview">
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
      </div>
    </Container>
  </Layout>
)

export default IndexPage
