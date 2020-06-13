import React from "react"
import styled from "styled-components"

import Layout from "../components/Layout"
import Page from "../components/Page"
import SEO from "../components/SEO"
import alex from "../images/alex.png"
import vicky from "../images/vicky.png"
import eduardo from "../images/eduardo.png"
import katie from "../images/katie.png"

const Container = styled.div`
  display: flex;
  flex-direction: column;

  .section-title {
    align-self: center;
    margin-top: 6rem;
  }

  .page-section {
    padding: calc(2rem * var(--spacing-modifier));
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: min-content min-content 1fr;
    grid-template-areas:
      "portrait name"
      "portrait title"
      "portrait intro";
    grid-column-gap: calc(1.3rem * var(--spacing-modifier));
    grid-row-gap: calc(0.3rem * var(--spacing-modifier));

    @media screen and (max-width: 500px) {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: min-content 1fr auto;
      grid-template-areas:
        "portrait name"
        "portrait title"
        "intro intro";
    }

    &.alternate {
      background-color: var(--background-color-alternate);
    }

    .member-portrait {
      grid-area: portrait;
      width: 100%;
    }

    .member-name {
      grid-area: name;

      color: var(--text-color);
      font-size: 2rem;
      font-weight: bold;

      @media screen and (max-width: 500px) {
        font-size: 1.5rem;
      }
    }

    .member-title {
      grid-area: title;

      color: var(--text-color);
      font-weight: bold;
    }

    .member-intro {
      grid-area: intro;

      line-height: 2em;
      color: var(--text-color);

      .member-intro-p {
        margin: 1rem 0 0;
      }
    }
  }

  .past-members-section {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: max-content auto;
    grid-template-areas:
      "title title title"
      "meds phds students";
    margin-bottom: 6rem;

    .section-title {
      grid-area: title;
      justify-self: center;

      margin-bottom: 3rem;
      color: var(--title-color);
    }

    .subsection {
      color: var(--text-color);

      justify-self: center;
      text-align: center;

      &.meds {
        grid-area: meds;
      }

      &.phds {
        grid-area: phds;
      }

      &.students {
        grid-area: students;
      }

      .subsection-title {
        color: var(--text-color);
        font-weight: bold;
        margin-bottom: 1rem;
      }

      .subsection-item {
        margin: 0.5rem;
      }
    }
  }
`

const Members = () => (
  <Layout>
    <SEO title="Members" />
    <Page title="Members">
      <Container>
        <div className="page-section">
          <img className="member-portrait" src={alex} alt="Alex Lin" />
          <div className="member-name">Alexander P. Lin, PhD</div>
          <div className="member-title">Principle Investigator</div>
          <div className="member-intro">
            <p className="member-intro-p">
              Dr. Lin is the director of the Center for Clinical Spectroscopy at
              Brigham and Women’s Hospital and Assistant Professor of Radiology
              at Harvard Medical School. Dr. Lin is a graduate of the California
              Institute of Technology, where he completed his Masters degree in
              Bioengineering and his doctoral degree in Biochemistry and
              Molecular Biophysics. He began his training as a research
              associate in 1997 and was appointed Director of Clinical Services
              and Senior Scientist at the Magnetic Resonance Spectroscopy Unit
              at the Huntington Medical Research Institutes in 2003. Since that
              time, he has been a visiting research associate at the Center of
              MR Research at the University of Illinois Chicago. From 2007 to
              2009, Dr. Lin had a research fellowship at the National Heart,
              Lung and Blood Institute at the National Institutes of Health in
              Bethesda, MD. Dr. Lin arrived at Brigham and Women’s Hospital in
              2009.
            </p>
            <p className="member-intro-p">
              Dr. Lin’s research interests include clinical applications of
              multinuclear magnetic resonance spectroscopy in the brain, breast,
              and liver, and cardiovascular magnetic resonance imaging. He was
              awarded the Young Investigator’s Award in 2003 for his work in 13C
              spectroscopy in Alzheimer’s disease and an NHLBI Fellows Research
              Award for his work in strain mapping of the carotid arteries in
              2007. He was recently awarded a Congressionally Directed Medical
              Research Program grant from the Department of Defense to study
              mild traumatic brain injury and post-traumatic stress disorder in
              soldiers returning from the Iraq/Afghanistan wars. In addition, he
              has ongoing collaborations with the Boston University Center for
              Study of Traumatic Encephalopathy to examine the long-term effects
              of repetitive head injury using magnetic resonance spectroscopy.
              He has co-authored more than three dozen peer-reviewed
              publications, five book chapters, and 75+ conference abstracts.
            </p>
            <p className="member-intro-p">
              Finally, Dr. Alexander Lin has also been recognized through awards
              and media reports for his efforts in supporting mentorship,
              particularly of students of diversity through the laboratory’s
              involvement in the Student Success Jobs Program and Harvard
              Catalyst summer research studies. He actively mentors Harvard
              Medical School students and received a Young Mentor Award from
              Harvard Medical School. Further, he is involved in education and
              training in several international workshops for MR spectroscopy.
            </p>
          </div>
        </div>
        <div className="page-section alternate">
          <img
            className="member-portrait"
            src={vicky}
            alt="Huijun ‘Vicky’ Liao, BS, MR-RT
"
          />
          <div className="member-name">Huijun ‘Vicky’ Liao, BS, MR-RT</div>
          <div className="member-title">Research Coordinator</div>
          <div className="member-intro">
            <p className="member-intro-p">
              Huijun ‘Vicky’ Liao joined the Center for Clinical Spectroscopy in
              May 2012 as a clinical research study coordinator. She graduated
              from Boston University with a degree in Human Physiology in 2011
              and successfully passed the certification exam for MR
              technologists through the American Registry of Magnetic Resonance
              Imaging Technologists (ARMRIT) in 2015.  She helps coordinate and
              collect MR data (with 8 years of MR scanning experiences) for
              different brain research studies at Center for Clinical
              Spectroscopy including the study of mild traumatic brain injury
              both in sports related concussion and military blast injury, brain
              cancer, multiple sclerosis, PTSD, bipolar and schizophrenia. In
              addition to neurospectroscopy, she is involved in MRS studies of
              the liver and leg muscle, including multinuclear 31P spectroscopy.
              She has also served as a SMRT (The Society for MR Radiographers &
              Technologists) representative of MR Spectroscopy Study Group in
              ISMRM (International Society for Magnetic Resonance in Medicine)
              from 2019 to 2021.
            </p>
          </div>
        </div>
        <div className="page-section">
          <img
            className="member-portrait"
            src={eduardo}
            alt="Eduardo Coello, PhD"
          />
          <div className="member-name">Eduardo Coello, PhD</div>
          <div className="member-title">Postdoctoral Fellow</div>
          <div className="member-intro">
            <p className="member-intro-p">
              Eduardo Coello is a postdoctoral fellow at the Center of Clinical
              Spectroscopy since 2018. His expertise is primarily in acquisition
              and reconstruction methods for medical imaging technologies, such
              as magnetic resonance spectroscopy (MRS), spectroscopic imaging
              (MRSI), X-ray imaging, and ultrasound. He obtained a degree in
              Biomedical Engineering (B.Sc.), and in Biomedical Computing
              (M.Sc.) before completing his doctoral training in the field of
              Medical Physics at the Technical University of Munich (TUM). From
              2013 to 2018 he worked at the GE Global Research Center in Munich,
              Germany, in the development of new techniques for X-ray
              phase-contrast imaging and accelerated MRSI. In 2017, he was a
              visiting researcher in the Department of Radiology and Biomedical
              Imaging at the University of California, San Francisco (UCSF)
              where he worked on the optimization high-resolution MRSI
              acquisition sequences at 7T. His current research focuses on the
              development of new MRS and MRSI methodologies for clinical
              applications at 3T and 7T.
            </p>
          </div>
        </div>
        <div className="page-section alternate">
          <img
            className="member-portrait"
            src={katie}
            alt="Katherine Morigaki Breedlove, PhD"
          />
          <div className="member-name">Katherine Morigaki Breedlove, PhD</div>
          <div className="member-title">Postdoctoral Fellow</div>
          <div className="member-intro">
            <p className="member-intro-p">
              Dr. Lin is the director of the Center for Clinical Spectroscopy at
              Brigham and Women’s Hospital and Assistant Professor of Radiology
              at Harvard Medical School. Dr. Lin is a graduate of the California
              Institute of Technology, where he completed his Masters degree in
              Bioengineering and his doctoral degree in Biochemistry and
              Molecular Biophysics. He began his training as a research
              associate in 1997 and was appointed Director of Clinical Services
              and Senior Scientist at the Magnetic Resonance Spectroscopy Unit
              at the Huntington Medical Research Institutes in 2003. Since that
              time, he has been a visiting research associate at the Center of
              MR Research at the University of Illinois Chicago. From 2007 to
              2009, Dr. Lin had a research fellowship at the National Heart,
              Lung and Blood Institute at the National Institutes of Health in
              Bethesda, MD. Dr. Lin arrived at Brigham and Women’s Hospital in
              2009.
            </p>
          </div>
        </div>
        <div className="page-section">
          <img className="member-portrait" src={alex} alt="Alex Lin" />
          <div className="member-name">Sai Merugumala, MS</div>
          <div className="member-title">Research Assistant II</div>
          <div className="member-intro">
            <p className="member-intro-p">
              Dr. Lin is the director of the Center for Clinical Spectroscopy at
              Brigham and Women’s Hospital and Assistant Professor of Radiology
              at Harvard Medical School. Dr. Lin is a graduate of the California
              Institute of Technology, where he completed his Masters degree in
              Bioengineering and his doctoral degree in Biochemistry and
              Molecular Biophysics. He began his training as a research
              associate in 1997 and was appointed Director of Clinical Services
              and Senior Scientist at the Magnetic Resonance Spectroscopy Unit
              at the Huntington Medical Research Institutes in 2003. Since that
              time, he has been a visiting research associate at the Center of
              MR Research at the University of Illinois Chicago. From 2007 to
              2009, Dr. Lin had a research fellowship at the National Heart,
              Lung and Blood Institute at the National Institutes of Health in
              Bethesda, MD. Dr. Lin arrived at Brigham and Women’s Hospital in
              2009.
            </p>
          </div>
        </div>
        <div className="page-section alternate">
          <img className="member-portrait" src={alex} alt="Alex Lin" />
          <div className="member-name">Sam Jiang, BS</div>
          <div className="member-title">Research Assistant I</div>
          <div className="member-intro">
            <p className="member-intro-p">
              Dr. Lin is the director of the Center for Clinical Spectroscopy at
              Brigham and Women’s Hospital and Assistant Professor of Radiology
              at Harvard Medical School. Dr. Lin is a graduate of the California
              Institute of Technology, where he completed his Masters degree in
              Bioengineering and his doctoral degree in Biochemistry and
              Molecular Biophysics. He began his training as a research
              associate in 1997 and was appointed Director of Clinical Services
              and Senior Scientist at the Magnetic Resonance Spectroscopy Unit
              at the Huntington Medical Research Institutes in 2003. Since that
              time, he has been a visiting research associate at the Center of
              MR Research at the University of Illinois Chicago. From 2007 to
              2009, Dr. Lin had a research fellowship at the National Heart,
              Lung and Blood Institute at the National Institutes of Health in
              Bethesda, MD. Dr. Lin arrived at Brigham and Women’s Hospital in
              2009.
            </p>
          </div>
        </div>
        <div className="past-members-section">
          <h2 className="section-title">Past Members</h2>
          <div className="subsection meds">
            <div className="subsection-title">Medical Students</div>
            <div className="subsection-item">Joshua Ladner, MD</div>
            <div className="subsection-item">Joshua Ladner, MD</div>
            <div className="subsection-item">Joshua Ladner, MD</div>
            <div className="subsection-item">Joshua Ladner, MD</div>
            <div className="subsection-item">Joshua Ladner, MD</div>
            <div className="subsection-item">Joshua Ladner, MD</div>
            <div className="subsection-item">Joshua Ladner, MD</div>
            <div className="subsection-item">Joshua Ladner, MD</div>
            <div className="subsection-item">Joshua Ladner, MD</div>
            <div className="subsection-item">Joshua Ladner, MD</div>
          </div>
          <div className="subsection phds">
            <div className="subsection-title">Postdoctoral Fellows</div>
            <div className="subsection-item">Ben Rowland, PhD</div>
            <div className="subsection-item">Ben Rowland, PhD</div>
            <div className="subsection-item">Ben Rowland, PhD</div>
            <div className="subsection-item">Ben Rowland, PhD</div>
            <div className="subsection-item">Ben Rowland, PhD</div>
            <div className="subsection-item">Ben Rowland, PhD</div>
            <div className="subsection-item">Ben Rowland, PhD</div>
            <div className="subsection-item">Ben Rowland, PhD</div>
            <div className="subsection-item">Ben Rowland, PhD</div>
            <div className="subsection-item">Ben Rowland, PhD</div>
            <div className="subsection-item">Ben Rowland, PhD</div>
            <div className="subsection-item">Ben Rowland, PhD</div>
          </div>
          <div className="subsection students">
            <div className="subsection-title">Summer Students</div>
            <div className="subsection-item">Sam Jiang, BS</div>
            <div className="subsection-item">Sam Jiang, BS</div>
            <div className="subsection-item">Sam Jiang, BS</div>
            <div className="subsection-item">Sam Jiang, BS</div>
            <div className="subsection-item">Sam Jiang, BS</div>
            <div className="subsection-item">Sam Jiang, BS</div>
            <div className="subsection-item">Sam Jiang, BS</div>
            <div className="subsection-item">Sam Jiang, BS</div>
            <div className="subsection-item">Sam Jiang, BS</div>
            <div className="subsection-item">Sam Jiang, BS</div>
          </div>
        </div>
      </Container>
    </Page>
  </Layout>
)

export default Members
