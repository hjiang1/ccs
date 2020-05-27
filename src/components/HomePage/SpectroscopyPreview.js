import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import spectrum from "../../images/spectrum.png"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6rem;
  background-color: var(--color-light);

  @media screen and (max-width: 1200px) {
    padding: 3rem;
  }

  .spectroscopy-preview-title {
    margin: 0 0 4rem;
    color: var(--title-color);
    grid-area: title;

    @media screen and (max-width: 1200px) {
      margin-bottom: 2rem;
    }
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

    @media screen and (max-width: 1200px) {
      grid-template-columns: auto;
      grid-template-rows: auto max-content max-content;
      grid-template-areas:
        "image"
        "intro"
        "button";
      justify-items: center;
    }

    .card-image {
      max-width: 80vw;
      grid-area: image;
    }

    .spectroscopy-intro {
      grid-area: intro;

      font-size: 1.5rem;
      line-height: 2em;
      color: var(--text-color);

      @media screen and (max-width: 700px) {
        font-size: 1.25rem;
        line-height: 1.5em;
      }
    }

    .learn-more-button {
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

const SpectroscopyPreview = () => {
  return (
    <Container>
      <h2 className="spectroscopy-preview-title">About Spectroscopy</h2>
      <div className="spectroscopy-preview-content">
        <img className="card-image" src={spectrum} alt="spectrum" />
        <div className="spectroscopy-intro">
          Magnetic resonance spectroscopy (MRS) is a powerful tool that examines
          brain metabolism using standard clinical MR scanners. A non-invasive
          and quantitative technique, MRS is ideally suited for repeated
          measurements and for measuring therapeutic outcomes. Often described
          as a “virtual biopsy”, MRS obtains chemical signals, or metabolites,
          from a region of interest (ROI or voxel).
        </div>
        <Link className="learn-more-button" to="/about-spectroscopy">
          Learn More
        </Link>
      </div>
    </Container>
  )
}

export default SpectroscopyPreview
