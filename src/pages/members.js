import React from "react"
import styled from "styled-components"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import alex from "../images/alex.png"

const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1000px) {
    padding: 2rem 3rem;
  }

  .page-title,
  .section-title {
    align-self: center;
    margin-top: 6rem;
  }

  .page-section {
    padding: 6rem 10rem;
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: min-content min-content 1fr;
    grid-template-areas:
      "portrait name"
      "portrait title"
      "portrait intro";
    grid-column-gap: 4rem;
    grid-row-gap: 1rem;

    &.alternate {
      background-color: #e1e4ed;
    }

    .member-portrait {
      grid-area: portrait;
      width: 100%;
    }

    .member-name {
      grid-area: name;

      color: #646773;
      font-size: 2rem;
      font-weight: bold;
    }

    .member-title {
      grid-area: title;

      color: #646773;
      font-weight: bold;
    }

    .member-intro {
      grid-area: intro;

      line-height: 2em;
      color: #646773;

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
    }

    .subsection {
      color: #646773;

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
        color: #646773;
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
    <Container>
      <h1 className="page-title">Members</h1>
      <div className="page-section">
        <img className="member-portrait" src={alex} alt="Alex Lin" />
        <div className="member-name">Alexander P. Lin, PhD</div>
        <div className="member-title">Principle Investigator</div>
        <div className="member-intro">
          <p className="member-intro-p">
            Dr. Lin is the director of the Center for Clinical Spectroscopy at
            Brigham and Women’s Hospital and Assistant Professor of Radiology at
            Harvard Medical School. Dr. Lin is a graduate of the California
            Institute of Technology, where he completed his Masters degree in
            Bioengineering and his doctoral degree in Biochemistry and Molecular
            Biophysics. He began his training as a research associate in 1997
            and was appointed Director of Clinical Services and Senior Scientist
            at the Magnetic Resonance Spectroscopy Unit at the Huntington
            Medical Research Institutes in 2003. Since that time, he has been a
            visiting research associate at the Center of MR Research at the
            University of Illinois Chicago. From 2007 to 2009, Dr. Lin had a
            research fellowship at the National Heart, Lung and Blood Institute
            at the National Institutes of Health in Bethesda, MD. Dr. Lin
            arrived at Brigham and Women’s Hospital in 2009.
          </p>
          <p className="member-intro-p">
            Dr. Lin’s research interests include clinical applications of
            multinuclear magnetic resonance spectroscopy in the brain, breast,
            and liver, and cardiovascular magnetic resonance imaging. He was
            awarded the Young Investigator’s Award in 2003 for his work in 13C
            spectroscopy in Alzheimer’s disease and an NHLBI Fellows Research
            Award for his work in strain mapping of the carotid arteries in
            2007. He was recently awarded a Congressionally Directed Medical
            Research Program grant from the Department of Defense to study mild
            traumatic brain injury and post-traumatic stress disorder in
            soldiers returning from the Iraq/Afghanistan wars. In addition, he
            has ongoing collaborations with the Boston University Center for
            Study of Traumatic Encephalopathy to examine the long-term effects
            of repetitive head injury using magnetic resonance spectroscopy. He
            has co-authored more than three dozen peer-reviewed publications,
            five book chapters, and 75+ conference abstracts.
          </p>
          <p className="member-intro-p">
            Finally, Dr. Alexander Lin has also been recognized through awards
            and media reports for his efforts in supporting mentorship,
            particularly of students of diversity through the laboratory’s
            involvement in the Student Success Jobs Program and Harvard Catalyst
            summer research studies. He actively mentors Harvard Medical School
            students and received a Young Mentor Award from Harvard Medical
            School. Further, he is involved in education and training in several
            international workshops for MR spectroscopy.
          </p>
        </div>
      </div>
      <div className="page-section alternate">
        <img className="member-portrait" src={alex} alt="Alex Lin" />
        <div className="member-name">Huijun "Vicky" Liao, BS</div>
        <div className="member-title">Research Coordinator</div>
        <div className="member-intro">
          <p className="member-intro-p">
            Huijun "Vicky" Liao joined the Center for Clinical Spectroscopy in
            May 2012 as a clinical research study coordinator. She graduated
            from Boston University with a degree in Human Physiology. She has
            more than two years’ experience in clinical spectroscopy and
            continues receiving professional training using MR spectroscopy in
            the clinic and for research. She helps coordinate the study of mild
            traumatic brain injury both in sports related concussion and
            military blast injury. She also assists with studies in brain
            cancer, multiple sclerosis, and schizophrenia. In addition to
            neurospectroscopy, she is involved in MRS studies of the liver and
            leg muscle, including multinuclear 31P spectroscopy
          </p>
        </div>
      </div>
      <div className="page-section">
        <img className="member-portrait" src={alex} alt="Alex Lin" />
        <div className="member-name">Eduardo Coello, PhD</div>
        <div className="member-title">Postdoctoral Fellow</div>
        <div className="member-intro">
          <p className="member-intro-p">
            Dr. Lin is the director of the Center for Clinical Spectroscopy at
            Brigham and Women’s Hospital and Assistant Professor of Radiology at
            Harvard Medical School. Dr. Lin is a graduate of the California
            Institute of Technology, where he completed his Masters degree in
            Bioengineering and his doctoral degree in Biochemistry and Molecular
            Biophysics. He began his training as a research associate in 1997
            and was appointed Director of Clinical Services and Senior Scientist
            at the Magnetic Resonance Spectroscopy Unit at the Huntington
            Medical Research Institutes in 2003. Since that time, he has been a
            visiting research associate at the Center of MR Research at the
            University of Illinois Chicago. From 2007 to 2009, Dr. Lin had a
            research fellowship at the National Heart, Lung and Blood Institute
            at the National Institutes of Health in Bethesda, MD. Dr. Lin
            arrived at Brigham and Women’s Hospital in 2009.
          </p>
        </div>
      </div>
      <div className="page-section alternate">
        <img className="member-portrait" src={alex} alt="Alex Lin" />
        <div className="member-name">Katherine Morigaki Breedlove, PhD</div>
        <div className="member-title">Postdoctoral Fellow</div>
        <div className="member-intro">
          <p className="member-intro-p">
            Dr. Lin is the director of the Center for Clinical Spectroscopy at
            Brigham and Women’s Hospital and Assistant Professor of Radiology at
            Harvard Medical School. Dr. Lin is a graduate of the California
            Institute of Technology, where he completed his Masters degree in
            Bioengineering and his doctoral degree in Biochemistry and Molecular
            Biophysics. He began his training as a research associate in 1997
            and was appointed Director of Clinical Services and Senior Scientist
            at the Magnetic Resonance Spectroscopy Unit at the Huntington
            Medical Research Institutes in 2003. Since that time, he has been a
            visiting research associate at the Center of MR Research at the
            University of Illinois Chicago. From 2007 to 2009, Dr. Lin had a
            research fellowship at the National Heart, Lung and Blood Institute
            at the National Institutes of Health in Bethesda, MD. Dr. Lin
            arrived at Brigham and Women’s Hospital in 2009.
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
            Brigham and Women’s Hospital and Assistant Professor of Radiology at
            Harvard Medical School. Dr. Lin is a graduate of the California
            Institute of Technology, where he completed his Masters degree in
            Bioengineering and his doctoral degree in Biochemistry and Molecular
            Biophysics. He began his training as a research associate in 1997
            and was appointed Director of Clinical Services and Senior Scientist
            at the Magnetic Resonance Spectroscopy Unit at the Huntington
            Medical Research Institutes in 2003. Since that time, he has been a
            visiting research associate at the Center of MR Research at the
            University of Illinois Chicago. From 2007 to 2009, Dr. Lin had a
            research fellowship at the National Heart, Lung and Blood Institute
            at the National Institutes of Health in Bethesda, MD. Dr. Lin
            arrived at Brigham and Women’s Hospital in 2009.
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
            Brigham and Women’s Hospital and Assistant Professor of Radiology at
            Harvard Medical School. Dr. Lin is a graduate of the California
            Institute of Technology, where he completed his Masters degree in
            Bioengineering and his doctoral degree in Biochemistry and Molecular
            Biophysics. He began his training as a research associate in 1997
            and was appointed Director of Clinical Services and Senior Scientist
            at the Magnetic Resonance Spectroscopy Unit at the Huntington
            Medical Research Institutes in 2003. Since that time, he has been a
            visiting research associate at the Center of MR Research at the
            University of Illinois Chicago. From 2007 to 2009, Dr. Lin had a
            research fellowship at the National Heart, Lung and Blood Institute
            at the National Institutes of Health in Bethesda, MD. Dr. Lin
            arrived at Brigham and Women’s Hospital in 2009.
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
  </Layout>
)

export default Members
