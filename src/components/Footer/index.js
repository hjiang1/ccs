import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Container = styled.footer`
  color: var(--color-light);
  background: linear-gradient(15deg, rgba(0, 0, 0), rgba(44, 44, 70));
  padding: 6rem;

  @media screen and (max-width: 500px) {
    padding: 3rem;
  }

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
        margin-bottom: 1rem;
      }

      .footer-item-line {
        margin-top: 0.3rem;
      }

      .footer-link {
        color: var(--color-light);
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
          <div className="footer-item-line address1">221 Longwood Ave</div>
          <div className="footer-item-line address2">
            BLI-236 Boston, MA 02115
          </div>
          <div className="footer-item-line phone">Phone: (617) 525-5086</div>
          <div className="footer-item-line email">
            Email:{" "}
            <a
              className="footer-link"
              href="mailto: spectro@partners.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              spectro@partners.org
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
          <h6 className="footer-item-title">Navigation</h6>
          <div className="footer-item-line">
            <Link className="footer-link" to="/">
              Home
            </Link>
          </div>
          <div className="footer-item-line">
            <Link className="footer-link" to="/the-lab/">
              The Lab
            </Link>
          </div>
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
