import React from "react"
import styled from "styled-components"

const Container = styled.footer`
  background-color: lightgray;
  padding: 2rem 6rem;

  .footer-item-container {
    display: grid;
    grid-template-columns: 1fr max-content max-content;
    grid-gap: 2rem;

    @media screen and (max-width: 1000px) {
      grid-template-columns: none;
      grid-template-rows: repeat(3, max-content);
    }

    .footer-item {
      .footer-item-title {
        margin-top: 0;
        margin-bottom: 0.5rem;
      }
    }
  }
`

const Footer = () => {
  return (
    <Container>
      <div className="footer-item-container">
        <div className="footer-item">
          <h4 className="footer-item-title">
            Center for Clinical Spectroscopy
          </h4>
          <div className="footer-item-line">221 Longwood Ave</div>
          <div className="footer-item-line">Boston, MA 02115</div>
          <div className="footer-item-line">Phone: (123)456-7890</div>
          <div className="footer-item-line">
            Email: <a href="mailto: abc@example.com">asd@asd.asd</a>
          </div>
        </div>
        <div className="footer-item">
          <h4 className="footer-item-title">Affiliates</h4>
          <div className="footer-item-line">Brigham and Women's Hospital</div>
          <div className="footer-item-line">Harvard Medical School</div>
        </div>
        <div className="footer-item">
          <h4 className="footer-item-title">Site Navigation</h4>
          <div className="footer-item-line">About Spectroscopy</div>
          <div className="footer-item-line">Members</div>
          <div className="footer-item-line">Contact</div>
        </div>
      </div>
    </Container>
  )
}

export default Footer
