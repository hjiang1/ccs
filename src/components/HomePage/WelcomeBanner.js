import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { FaAngleDown } from "react-icons/fa"

import brain from "../../images/ax-brain.png"

const Container = styled.div`
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
`

const WelcomeBanner = () => {
  const scrollToContent = () => {
    document.getElementsByClassName("projects-preview")[0].scrollIntoView({
      behavior: "smooth",
    })
  }

  return (
    <Container>
      <h1 className="page-title">Center for Clinical Spectroscopy</h1>
      <Link className="about-button" to="/the-lab/">
        About The Lab
      </Link>
      <button className="down-button" onClick={scrollToContent}>
        <FaAngleDown />
      </button>
    </Container>
  )
}

export default WelcomeBanner
