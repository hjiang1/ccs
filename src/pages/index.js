import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
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
import building from "../images/221.png"

const Container = styled.div`
  margin-top: -6rem;

  .welcome-banner {
    display: flex;
    flex-direction: column;
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
      linear-gradient(190deg, transparent, transparent 50%, rgba(33, 33, 33)),
      url(${brain});
    background-position: center;
    background-size: cover;

    .page-title {
      color: #edf0f5;
      margin: 0;
      font-size: 4rem;
      text-align: center;
    }

    .about-button {
      margin-top: 6rem;

      border-radius: 5px;
      border: 2px solid white;
      padding: 1rem 4rem;
      font-weight: bold;
      font-size: 1.5rem;
      color: rgba(44, 44, 70);
      background-color: white;
      text-decoration: none;
      cursor: pointer;

      transition-property: color, background-color;
      transition-duration: 0.2s;
      transition-timing-function: ease;

      :hover {
        background-color: rgba(255, 255, 255, 0.15);
        color: white;
      }
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
      grid-row-gap: 2rem;

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
  }

  .members-preview {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 6rem;
    background-color: #e1e4ed;

    .members-preview-title {
      margin: 0 0 4rem;
      color: #0d0b0e;
      grid-area: title;
    }

    .members-image {
      background-image: url(${building});

      width: calc(100% - 4rem);
      height: 40rem;
      background-size: cover;

      display: flex;
      justify-content: center;
      align-items: center;

      .members-button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;

        background: linear-gradient(
          45deg,
          rgba(0, 0, 0, 0.75),
          rgba(44, 44, 70, 0.75)
        );
        color: white;
        font-size: 2rem;
        font-weight: bold;

        text-decoration: none;
        cursor: pointer;

        opacity: 0;
        transition: opacity 0.2s ease;

        :hover {
          opacity: 1;
        }
      }
    }
  }
`

const IndexPage = () => {
  const scrollToContent = () => {
    document.getElementsByClassName("projects-preview")[0].scrollIntoView({
      behavior: "smooth",
    })
  }

  return (
    <Layout>
      <SEO title="Home" />
      <Container>
        <div className="welcome-banner">
          <h1 className="page-title">Center for Clinical Spectroscopy</h1>
          <Link className="about-button" to="/the-lab/">
            About The Lab
          </Link>
          <button className="down-button" onClick={scrollToContent}>
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
              Magnetic Resonance (MR) spectroscopy is a noninvasive diagnostic
              test for measuring biochemical changes in the brain, especially
              the presence of tumors. While magnetic resonance imaging (MRI)
              identifies the anatomical location of a tumor, MR spectroscopy
              compares the chemical composition of normal brain tissue with
              abnormal tumor tissue. This test can also be used to detect tissue
              changes in stroke and epilepsy.
            </div>
            <Link className="learn-more-button" to="/about-spectroscopy">
              Learn More
            </Link>
          </div>
        </div>
        <div className="members-preview">
          <h2 className="members-preview-title">Members</h2>
          <div className="members-image">
            <Link className="members-button" to="/members/">
              Meet Our Members
            </Link>
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default IndexPage
