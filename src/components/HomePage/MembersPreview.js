import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Fade from "react-reveal/Fade"

import building from "../../images/221.png"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6rem;
  background-color: white;

  @media screen and (max-width: 1200px) {
    padding: 3rem;
  }

  @media screen and (max-width: 700px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .members-preview-title {
    margin: 0 0 4rem;
    color: var(--title-color);
    grid-area: title;

    @media screen and (max-width: 1200px) {
      margin-bottom: 2rem;
    }
  }

  .members-image-container {
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    .members-image {
      width: 100%;
      max-height: 30rem;
      object-fit: cover;
    }

    .members-button {
      position: absolute;

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
      color: var(--color-light);
      font-size: 2rem;
      font-weight: bold;

      @media screen and (max-width: 500px) {
        font-size: 1.5rem;
      }

      text-align: center;
      text-decoration: none;
      cursor: pointer;

      opacity: 0;
      transition: opacity 0.2s ease;

      :hover {
        opacity: 1;
      }
    }
  }
`

const MembersPreview = () => {
  return (
    <Container>
      <Fade>
        <h2 className="members-preview-title">Members</h2>
        <div className="members-image-container">
          <img className="members-image" src={building} alt="building" />
          <Link className="members-button" to="/members/">
            Meet Our Members
          </Link>
        </div>
      </Fade>
    </Container>
  )
}

export default MembersPreview
