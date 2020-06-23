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

  .members-image {
    width: 100%;
    max-height: 30rem;
    object-fit: cover;
    margin-bottom: 4rem;
  }

  .members-button {
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
`

const MembersPreview = () => {
  return (
    <Container>
      <Fade>
        <h2 className="members-preview-title">Members</h2>
        <img className="members-image" src={building} alt="building" />
        <Link className="members-button" to="/members/">
          Meet Our Members
        </Link>
      </Fade>
    </Container>
  )
}

export default MembersPreview
