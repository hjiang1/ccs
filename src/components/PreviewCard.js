import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 6px 6px rgba(0, 0, 0, 0.2);

  .card-image {
    height: 15rem;
    width: 100%;
    object-fit: cover;
  }

  .study-title {
    margin: 1rem 2rem;
  }

  .study-detail {
    margin: 0 2rem 1rem;
    font-size: 1.25rem;
  }

  :hover {
    transform: scale(1.02);
    box-shadow: 8px 7px rgba(0, 0, 0, 0.2);
  }
`

const PreviewCard = ({ title, detail, image }) => {
  return (
    <Container>
      <img className="card-image" src={image} alt="mri" />
      <h5 className="study-title">{title}</h5>
      <div className="study-detail">{detail}</div>
    </Container>
  )
}

export default PreviewCard
