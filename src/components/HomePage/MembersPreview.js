import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import building from "../../images/221.png"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6rem;
  background-color: #e1e4ed;

  @media screen and (max-width: 1200px) {
    padding: 3rem;
  }

  .members-preview-title {
    margin: 0 0 4rem;
    color: #0d0b0e;
    grid-area: title;
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
`

const MembersPreview = () => {
  return (
    <Container>
      <h2 className="members-preview-title">Members</h2>
      <div className="members-image-container">
        <img className="members-image" src={building} alt="building" />
        <Link className="members-button" to="/members/">
          Meet Our Members
        </Link>
      </div>
    </Container>
  )
}

export default MembersPreview
