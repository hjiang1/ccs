import React from "react"
import styled from "styled-components"
import { FaAngleLeft, FaAngleRight, FaAngleDown } from "react-icons/fa"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import PreviewCard from "../components/PreviewCard"
import brain from "../images/ax-brain.png"

import mri from "../images/mri.png"
import nfl from "../images/nfl.png"
import explosion from "../images/explosion.png"
import atp from "../images/atp.png"
import spectrum from "../images/spectrum.png"

const Container = styled.div`
  margin-top: -6rem;

  .welcome-banner {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(
        35deg,
        transparent,
        transparent 30%,
        rgba(44, 44, 70)
      ),
      linear-gradient(
        190deg,
        transparent,
        transparent 50%,
        rgba(33, 33, 33)
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

    .down-button {
      width: 3rem;
      height: 3rem;
      position: absolute;
      bottom: 4rem;
      display: flex;
      justify-content: center;
      align-items: center;

      border: 3px solid #edf0f5;
      border-radius: 50%;

      transition: transform 0.2s ease;

      svg {
        color: #edf0f5;
        width: 2rem;
        height: 2rem;
      }

      :hover {
        transform: scale(1.05);
      }
    }
  }

  .projects-preview {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 6rem 3rem;
    background-color: #e1e4ed;

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

  .spectroscopy-preview {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 6rem;
    background-color: white;

    .spectroscopy-preview-title {
      margin: 0 0 4rem;
      color: #0d0b0e;
      grid-area: title;
    }

    .spectroscopy-preview-content {
      display: grid;
      grid-template-columns: max-content 1fr;
      grid-template-rows: max-content 1fr;
      grid-template-areas:
        "image intro"
        "image button";
      grid-gap: 4rem;

      .card-image {
        grid-area: image;
        max-width: 40vw;
      }

      .spectroscopy-intro {
        grid-area: intro;

        font-size: 1.5rem;
        line-height: 3rem;
        color: #646773;
      }

      .learn-more-button {
        grid-area: button;
        justify-self: center;

        width: fit-content;
        height: fit-content;
        padding: 1rem 2rem;

        color: #edf0f5;
        border-radius: 5px;
        background-color: rgba(76, 105, 134);

        transition: background-color 0.1s ease, color 0.1s ease;

        :hover {
          color: #0d0b0e;
          background-color: #a3a9b8;
        }
      }
    }
  }
`

const IndexPage = () => {
  const scrollTo = () => {
    document.getElementsByClassName("projects-preview")[0].scrollIntoView({
      behavior: "smooth"
    })
  }

  return (
    <Layout>
      <SEO title="Home" />
      <Container>
        <div className="welcome-banner">
          <h1 className="page-title">Center for Clinical Spectroscopy</h1>
          <button className="down-button" onClick={scrollTo}>
            <FaAngleDown />
          </button>
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
        <div className="spectroscopy-preview">
          <h2 className="spectroscopy-preview-title">About Spectroscopy</h2>
          <div className="spectroscopy-preview-content">
            <img className="card-image" src={spectrum} alt="spectrum" />
            <div className="spectroscopy-intro">
              Magnetic resonance spectroscopy (MRS) is an analytical tool that
              detects radio frequency electromagnetic signals that are produced
              by the atomic nuclei within molecules. It can be used to obtain in
              situ concentration measures for certain chemicals in complex
              samples, such as the living brain.
            </div>
            <button className="learn-more-button">Learn More</button>
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default IndexPage
