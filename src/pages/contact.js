import React from "react"
import styled from "styled-components"

import Layout from "../components/Layout"
import Page from "../components/Page"
import SEO from "../components/SEO"

const Container = styled.div`
  padding: 6rem;

  .contact-content {
    display: grid;
    grid-template-columns: 1fr 2fr;

    .contact-info {
    }

    .contact-form {
      display: flex;
      flex-direction: column;
      /* justify-content: center; */
      align-items: center;
      justify-self: end;

      .field-container {
        margin: 0.5rem;
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 40vw;
        grid-gap: 2rem;
      }
    }
  }
`

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <Page title="Contact">
      <Container>
        <div className="contact-content">
          <div className="contact-info">
            <div className="section-title">Address</div>
            <div className="address-item">Center for Clinical Spectroscopy</div>
            <div className="address-item address1">221 Longwood Ave BLI-236</div>
            <div className="address-item address2">
              Boston, MA 02115
            </div>
            <div className="section-title">Contact Information</div>
            <div className="contact-info-item phone">Phone: (617) 525-5086</div>
            <div className="contact-info-item email">
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

          <form
            className="contact-form"
            name="contact"
            method="POST"
            data-netlify="true"
          >
            <div className="field-container">
              <label htmlFor="name">Name:</label>
              <input type="text" name="name" />
            </div>
            <div className="field-container">
              <label htmlFor="email">Email:</label>
              <input type="email" name="email" />
            </div>
            <div className="field-container">
              <label htmlFor="email">Message:</label>
              <textarea name="message" rows="10"></textarea>
            </div>
            <button className="submit-button" type="submit">
              Send
            </button>
          </form>
        </div>
      </Container>
    </Page>
  </Layout>
)

export default Contact
