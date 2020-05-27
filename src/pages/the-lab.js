import React from "react"
import styled from "styled-components"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import bwh from "../images/bwh.png"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 6rem 10rem;

  @media screen and (max-width: 1000px) {
    padding: 2rem 3rem;
  }

  .page-title {
    align-self: center;
  }

  .lab-photo {
    margin: 3rem 0 1rem;
    max-height: 20rem;
    overflow: hidden;
    object-fit: cover;
  }

  .lab-description {
    color: #646773;
    font-size: 1.25rem;
    line-height: 2em;
  }
`

const TheLab = () => (
  <Layout>
    <SEO title="The Lab" />
    <Container>
      <h1 className="page-title">The Lab</h1>
      <img className="lab-photo" src={bwh} alt="lab" />
      <p className="lab-description">
        The Center for Clinical Spectroscopy is comprised of a multidisciplinary
        team of scientists and collaborating clinicians whose goal is to
        translate magnetic resonance spectroscopy (MRS) into the clinic through
        technical development, clinical applications, and advocacy. Novel
        hardware and software advances in multinuclear spectroscopy and
        multidimensional spectral and spatial encoding enables non-invasive,
        objective, and quantitative ‘virtual biopsy’ measures of brain and body
        chemistry that provide biomarkers for early diagnosis and treatment
        monitoring across a broad range of diseases. Our current studies include
        traumatic brain injury, neurodegenerative disorders, cancer, psychiatric
        disorders, metabolic and immune disorders, chronic pain, diabetes, and
        continued expansion to additional clinical applications through funding
        from the National Institutes of Health, Department of Defense, and
        industry. The ultimate goal of the Center is to bridge the gap between
        research and clinical practice for MRS through promotion of this
        powerful technique at the local, national, and international levels via
        mentorship, training, education, and advocacy.
      </p>
    </Container>
  </Layout>
)

export default TheLab
