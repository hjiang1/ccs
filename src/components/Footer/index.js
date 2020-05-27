import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Container = styled.footer`
  color: #edf0f5;
  background: linear-gradient(
      210deg,
      rgba(76, 105, 134, 0.65),
      transparent,
      transparent
    ),
    radial-gradient(
        farthest-corner at 100% 100%,
        transparent,
        transparent,
        rgba(138, 145, 164, 0.2)
      )
      #0d0b0e;
  padding: 6rem;

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

      .footer-link {
        color: #edf0f5;
        text-decoration: none;

        :hover {
          color: white;
        }
      }
    }
  }
`

const Footer = () => {
  return (
    <Container>
      <div className="footer-item-container">
        <div className="footer-item">
          <h6 className="footer-item-title">
            Center for Clinical Spectroscopy
          </h6>
          <div className="footer-item-line">221 Longwood Ave</div>
          <div className="footer-item-line">Boston, MA 02115</div>
          <div className="footer-item-line">Phone: (123)456-7890</div>
          <div className="footer-item-line">
            Email:{" "}
            <a
              className="footer-link"
              href="mailto: abc@example.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              asd@asd.asd
            </a>
          </div>
        </div>
        <div className="footer-item">
          <h6 className="footer-item-title">Affiliates</h6>
          <div className="footer-item-line">
            <a
              className="footer-link"
              href="https://www.brighamandwomens.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Brigham and Women's Hospital
            </a>
          </div>
          <div className="footer-item-line">
            <a
              className="footer-link"
              href="https://hms.harvard.edu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Harvard Medical School
            </a>
          </div>
        </div>
        <div className="footer-item">
          <h6 className="footer-item-title">Site Navigation</h6>
          <div className="footer-item-line">
            <Link className="footer-link" to="/projects/">
              Projects
            </Link>
          </div>
          <div className="footer-item-line">
            <Link className="footer-link" to="/about-spectroscopy/">
              About Spectroscopy
            </Link>
          </div>
          <div className="footer-item-line">
            <Link className="footer-link" to="/members/">
              Members
            </Link>
          </div>
          <div className="footer-item-line">
            <Link className="footer-link" to="/contact/">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Footer
