import React from "react"
import styled from "styled-components"

import Layout from "../components/Layout"
import Page from "../components/Page"
import SEO from "../components/SEO"
import bwh from "../images/bwh.png"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 calc(2rem * var(--spacing-modifier));
  margin: calc(2rem * var(--spacing-modifier)) 0;

  .lab-photo {
    max-height: 20rem;
    overflow: hidden;
    object-fit: cover;

    margin-bottom: 4rem;

    @media screen and (max-width: 1000px) {
      margin-bottom: 3rem;
    }

    @media screen and (max-width: 700px) {
      margin-bottom: 2rem;
    }
  }

  .lab-description {
    color: var(--text-color);
    font-size: 1.25rem;
    line-height: 2em;
    margin: 0;
  }
`

const TheLab = () => (
  <Layout>
    <SEO title="The Lab" />
    <Page title="The Lab">
      <Container>
        <img className="lab-photo" src={bwh} alt="lab" />
        <p className="lab-description">
          The Center for Clinical Spectroscopy is comprised of a
          multidisciplinary team of scientists and collaborating clinicians
          whose goal is to translate magnetic resonance spectroscopy (MRS) into
          the clinic through technical development, clinical applications, and
          advocacy. Novel hardware and software advances in multinuclear
          spectroscopy and multidimensional spectral and spatial encoding
          enables non-invasive, objective, and quantitative ‘virtual biopsy’
          measures of brain and body chemistry that provide biomarkers for early
          diagnosis and treatment monitoring across a broad range of diseases.
          Our current studies include traumatic brain injury, neurodegenerative
          disorders, cancer, psychiatric disorders, metabolic and immune
          disorders, chronic pain, diabetes, and continued expansion to
          additional clinical applications through funding from the National
          Institutes of Health, Department of Defense, and industry. The
          ultimate goal of the Center is to bridge the gap between research and
          clinical practice for MRS through promotion of this powerful technique
          at the local, national, and international levels via mentorship,
          training, education, and advocacy.
        </p>
      </Container>
    </Page>
  </Layout>
)

export default TheLab
