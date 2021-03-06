import React from "react"
import styled from "styled-components"

import Layout from "../components/Layout"
import Page from "../components/Page"
import SEO from "../components/SEO"
import alex from "../images/alex.png"
import vicky from "../images/vicky.png"
import eduardo from "../images/eduardo.png"
import katie from "../images/katie.png"
import victoria from "../images/victoria.png"
import marcia from "../images/marcia.png"
import sam from "../images/sam.png"
import lasya from "../images/lasya.png"

const Container = styled.div`
  display: flex;
  flex-direction: column;

  .section-title {
    align-self: center;
    margin-top: 6rem;
  }

  .alternate {
    background-color: var(--background-color-alternate);
  }

  .page-section {
    padding: calc(1rem * var(--spacing-modifier))
      calc(2rem * var(--spacing-modifier));
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

      line-height: 1.5em;
      color: var(--text-color);

      .member-intro-p {
        margin: 1rem 0 0;
      }
    }
  }

  .past-members-section {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: max-content auto;
    grid-template-areas:
      "title title title title"
      "meds phds catalyst summer";
    padding-bottom: 6rem;

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

      &.catalyst {
        grid-area: catalyst;
      }

      &.summer {
        grid-area: summer;
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
          <div className="member-title">Director</div>
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
            alt="Huijun ‘Vicky’ Liao, BS, MR-RT"
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
              Imaging Technologists (ARMRIT) in 2015. She helps coordinate and
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
              Eduardo Coello has been a postdoctoral fellow at the Center of
              Clinical Spectroscopy since 2018. His expertise is primarily in
              acquisition and reconstruction methods for medical imaging
              technologies, such as magnetic resonance spectroscopy (MRS),
              spectroscopic imaging (MRSI), X-ray imaging, and ultrasound. He
              obtained a degree in Biomedical Engineering (B.Sc.) and in
              Biomedical Computing (M.Sc.) before completing his doctoral
              training in the field of Medical Physics at the Technical
              University of Munich (TUM). From 2013 to 2018 he worked at the GE
              Global Research Center in Munich, Germany, in the development of
              new techniques for X-ray phase-contrast imaging and accelerated
              MRSI. In 2017, he was a visiting researcher in the Department of
              Radiology and Biomedical Imaging at the University of California,
              San Francisco (UCSF) where he worked on the optimization
              high-resolution MRSI acquisition sequences at 7T. His current
              research focuses on the development of new MRS and MRSI
              methodologies for clinical applications at 3T and 7T.
            </p>
          </div>
        </div>
        <div className="page-section alternate">
          <img
            className="member-portrait"
            src={katie}
            alt="Katherine Morigaki Breedlove, PhD"
          />
          <div className="member-name">Katie Morigaki Breedlove, PhD, ATC</div>
          <div className="member-title">Postdoctoral Fellow</div>
          <div className="member-intro">
            <p className="member-intro-p">
              Katherine Breedlove, PhD, is Research Fellow in Radiology at
              Harvard Medical School and Brigham and Women’s Hospital under the
              guidance of Dr. Alexander Lin. Her work at BWH focuses on using
              neuroimaging technology to study the mechanism and outcomes
              following sport-related concussion. Dr. Breedlove completed her MS
              and PhD at Purdue University as a member of the Purdue Neurotrauma
              Group and her BS degree in Athletic Training from Boston
              University. She has previously held postdoctoral positions at the
              University of Delaware and the University of Michigan and has
              previously worked on the sports medicine staffs at Boston College,
              Purdue University, and the Pittsburgh Steelers.
            </p>
          </div>
        </div>
        <div className="page-section">
          {/* <img className="member-portrait" src={alex} alt="Alex Lin" /> */}
          <div className="member-name">Sai Merugumala, MS</div>
          <div className="member-title">Research Assistant II</div>
          <div className="member-intro">
            <p className="member-intro-p"></p>
          </div>
        </div>
        <div className="page-section alternate">
          <img className="member-portrait" src={lasya} alt="Lasya Sreepada" />
          <div className="member-name">Lasya Sreepada, BS</div>
          <div className="member-title">
            PhD Student and Research Collaborator
          </div>
          <div className="member-intro">
            <p className="member-intro-p">
              Lasya is a PhD student at the University of Pennsylvania in
              Bioengineering. She first started working with CCS as a college
              sophomore in August 2016, and has continued research
              collaborations since then. Lasya utilizes data science and machine
              learning to identify biomarkers that improve diagnosis, prognosis,
              and evaluation of treatment response in neurodegenerative
              diseases. She focuses on Alzheimer's Disease, TBI, CTE, and
              neurotrauma from hypoxic-ischemic injury.
            </p>
          </div>
        </div>
        <div className="page-section">
          <img
            className="member-portrait"
            src={marcia}
            alt="Marcia Sahaya Louis"
          />
          <div className="member-name">Marcia Sahaya Louis, BS</div>
          <div className="member-title">Research Assistant II</div>
          <div className="member-intro">
            <p className="member-intro-p">
              Marcia Sahaya Louis is a Ph.D. student at the Department of
              Electrical and Computer Engineering, Boston University who joined
              the Center of Clinical Spectroscopy through the BU-BWH imaging
              training program in 2016. She received a degree in Electronics and
              Communication Engineering (B.E.) from Madras Institute of
              Technology, and Computer Engineering from Boston University. Her
              current research focuses on using machine learning techniques to
              gain a better understanding of the underlying pathophysiological
              changes in the brain, specifically for TBI. Her other research
              interest includes the computer architecture design for machine
              learning, hardware accelerators using FPGAs, and reconfigurable
              computing.
            </p>
          </div>
        </div>
        <div className="page-section alternate">
          <img
            className="member-portrait"
            src={victoria}
            alt="Victoria E. Sanchez, BS"
          />
          <div className="member-name">Victoria E. Sanchez, BS</div>
          <div className="member-title">Visiting Research Intern</div>
          <div className="member-intro">
            <p className="member-intro-p">
              Victoria Sanchez is a medical student at Indiana University School
              of Medicine who joined the Center for Clinical Spectroscopy in the
              summer of 2020 as a Visiting Research Intern with the Harvard
              Catalyst VRIP. She graduated from Florida International University
              with a degree in Biological Sciences in 2017. Her interests in
              cancer biology began during her freshman year of college where her
              primary focus was to test how alternations in gene expression
              mediate hallmarks of castration-resistant prostate cancer.
              Developing such a strong fondess for research led her to seek a
              research trainee position at the National Institutes of Health
              within the Surgical Neurology Branch. This is where Victoria's
              enthusiasm for neuro-oncology evolved. Now, she is beginning to
              help with a study for the Cancer for Clinical Spectroscopy that
              uses MRS to measure metabolites within IDH mutant low-grade
              gliomas.
            </p>
          </div>
        </div>
        <div className="page-section">
          <img className="member-portrait" src={sam} alt="Sam Jiang" />
          <div className="member-name">Sam Jiang, BS</div>
          <div className="member-title">Research Assistant I</div>
          <div className="member-intro">
            <p className="member-intro-p">
              Sam Jiang is a research assistant who has been with the Center of
              Spectroscopy since 2014 as a summer student. After graduating from
              Haverford College in 2017 with a Bachelor of Science in computer
              science, he took a hiatus from the lab and worked in the
              technology industry as a software engineer. In 2019, he returned
              to the lab as a research assistant and is now applying to medical
              schools. He is currently the primary web developer for the lab and
              helps collect MR data for the 2HG, Harvard Concussion, and NFL
              studies. His previous projects with the Center for Clinical
              Spectroscopy include a project to correlate SVS voxel-location
              within CSI data, several pre-processing tools for <sup>13</sup>C
              and <sup>31</sup>P data, and a poster presentation about the
              diffences in reporting between LCModel and TARQUIN.
            </p>
          </div>
        </div>
        <div className="past-members-section alternate">
          <h2 className="section-title">Alumni</h2>
          <div className="subsection meds">
            <div className="subsection-title">Past Members</div>
            <div className="subsection-item">Joshua Ladner, MD</div>
            <div className="subsection-item">Praveen 'Dev' Merugumala, BS</div>
            <div className="subsection-item">Xi 'April' Long, MD</div>
            <div className="subsection-item">Joshua Ladner, MD</div>
          </div>
          <div className="subsection phds">
            <div className="subsection-title">Postdoctoral Fellows</div>
            <div className="subsection-item">Ben Rowland, PhD</div>
          </div>
          <div className="subsection catalyst">
            <div className="subsection-title">Harvard Catalyst Students</div>
            <div className="subsection-item">Oluseyi Awodele (VRIP 2010)</div>
            <div className="subsection-item">Ana Cadenas (SCTRP 2011)</div>
            <div className="subsection-item">Malcolm Reid (SCTRP 2012)</div>
            <div className="subsection-item">Walker Keenan (SCTRP 2013</div>
            <div className="subsection-item">Mohamed Mohamed (VRIP 2014)</div>
            <div className="subsection-item">Matt Henriques (VRIP 2015)</div>
            <div className="subsection-item">Grace Ahn (SCTRP 2016)</div>
            <div className="subsection-item">Hemali Panchal (VRIP 2017)</div>
            <div className="subsection-item">Abraham Isak (VRIP 2018)</div>
            <div className="subsection-item">Carol Martin</div>
          </div>
          <div className="subsection summer">
            <div className="subsection-title">Summer Students</div>
            <div className="subsection-item">
              Sribindu Sreepada (Summer 2019)
            </div>
            <div className="subsection-item">Fatah Adan (SSJP)</div>
          </div>
        </div>
      </Container>
    </Page>
  </Layout>
)

export default Members
